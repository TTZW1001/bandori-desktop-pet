const { app, BrowserWindow, ipcMain, Menu, dialog, screen } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

const STATE_FILE = 'window-state.json';
const MODELS_DIR = path.join(__dirname, 'models');
const WINDOW_WIDTH = 320;
const WINDOW_HEIGHT = 440;
const BUILTIN_MODEL_PREFIX = 'builtin:';
const RECENT_MODELS_LIMIT = 6;
const FAVORITE_MODELS_LIMIT = 12;
const BUILTIN_BAND_ORDER = [
  "Poppin'Party",
  'Afterglow',
  'Hello Happy World!',
  'Pastel Palettes',
  'Roselia',
  'RAISE A SUILEN',
  'Morfonica',
  'MYGO_avemujica'
];

function getStatePath() {
  return path.join(app.getPath('userData'), STATE_FILE);
}

function getDefaultWindowPosition() {
  const { workArea } = screen.getPrimaryDisplay();
  return {
    x: Math.max(workArea.x + workArea.width - (WINDOW_WIDTH + 40), workArea.x),
    y: Math.max(workArea.y + workArea.height - (WINDOW_HEIGHT + 40), workArea.y)
  };
}

function isExistingModelFile(modelPath) {
  if (typeof modelPath !== 'string' || !modelPath.trim()) {
    return false;
  }

  try {
    return fs.existsSync(modelPath) &&
      fs.statSync(modelPath).isFile() &&
      modelPath.toLowerCase().endsWith('.json');
  } catch {
    return false;
  }
}

function encodeModelPathForState(modelPath) {
  if (typeof modelPath !== 'string' || !modelPath.trim()) {
    return '';
  }

  const resolvedPath = path.resolve(modelPath);
  const relativePath = path.relative(MODELS_DIR, resolvedPath);

  if (relativePath && !relativePath.startsWith('..') && !path.isAbsolute(relativePath)) {
    return `${BUILTIN_MODEL_PREFIX}${relativePath.replace(/\\/g, '/')}`;
  }

  return resolvedPath;
}

function resolveModelPathFromState(modelPath) {
  if (typeof modelPath !== 'string' || !modelPath.trim()) {
    return '';
  }

  if (modelPath.startsWith(BUILTIN_MODEL_PREFIX)) {
    const relativePath = modelPath.slice(BUILTIN_MODEL_PREFIX.length).replace(/\//g, path.sep);
    return path.join(MODELS_DIR, relativePath);
  }

  return modelPath;
}

function readWindowState() {
  try {
    const raw = fs.readFileSync(getStatePath(), 'utf8');
    const parsed = JSON.parse(raw);
    return parsed;
  } catch {}

  return {
    ...getDefaultWindowPosition(),
    modelPath: '',
    recentModelPaths: [],
    favoriteModelPaths: [],
    showDialogueBubble: true,
    proactiveDialogueEnabled: true,
    mouthAnimationEnabled: true
  };
}

function saveWindowState(nextState) {
  try {
    const serializedState = {
      ...nextState,
      modelPath: encodeModelPathForState(nextState.modelPath),
      recentModelPaths: Array.isArray(nextState.recentModelPaths)
        ? nextState.recentModelPaths.map(encodeModelPathForState).filter(Boolean).slice(0, RECENT_MODELS_LIMIT)
        : [],
      favoriteModelPaths: Array.isArray(nextState.favoriteModelPaths)
        ? nextState.favoriteModelPaths.map(encodeModelPathForState).filter(Boolean).slice(0, FAVORITE_MODELS_LIMIT)
        : []
    };
    fs.mkdirSync(path.dirname(getStatePath()), { recursive: true });
    fs.writeFileSync(
      getStatePath(),
      JSON.stringify(serializedState, null, 2),
      'utf8'
    );
  } catch {}
}

function sanitizeMode(mode) {
  return ['custom', 'companion', 'focus'].includes(mode) ? mode : 'custom';
}

function sanitizeFocusSession(session) {
  if (!session || typeof session !== 'object') {
    return null;
  }

  const endAt = Number(session.endAt);
  if (!Number.isFinite(endAt) || endAt <= Date.now()) {
    return null;
  }

  return {
    task: typeof session.task === 'string' ? session.task.trim() : '',
    durationMinutes: Math.max(1, Number(session.durationMinutes) || 25),
    endAt,
    startedAt: Number(session.startedAt) || Date.now(),
    resumeMode: ['custom', 'companion'].includes(session.resumeMode) ? session.resumeMode : 'custom'
  };
}

function sanitizeBoolean(value, fallback = true) {
  return typeof value === 'boolean' ? value : fallback;
}

function toMenuLabel(name) {
  return name.replace(/_/g, ' ');
}

function getBuiltInBandSortIndex(label) {
  const index = BUILTIN_BAND_ORDER.findIndex((item) => item === label);
  return index >= 0 ? index : Number.MAX_SAFE_INTEGER;
}

function findCharacterModelPath(characterDir) {
  const directJsonFiles = fs.readdirSync(characterDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('model.json'))
    .map((entry) => path.join(characterDir, entry.name))
    .sort((a, b) => a.localeCompare(b, 'en'));

  if (directJsonFiles.length) {
    return directJsonFiles[0];
  }

  const nestedJsonFiles = fs.readdirSync(characterDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const nestedDir = path.join(characterDir, entry.name);
      return fs.readdirSync(nestedDir, { withFileTypes: true })
        .filter((nestedEntry) => nestedEntry.isFile() && nestedEntry.name.toLowerCase().endsWith('model.json'))
        .map((nestedEntry) => path.join(nestedDir, nestedEntry.name));
    })
    .sort((a, b) => a.localeCompare(b, 'en'));

  return nestedJsonFiles[0] || null;
}

function scanBuiltInModelLibrary() {
  if (!fs.existsSync(MODELS_DIR)) {
    return [];
  }

  const bands = fs.readdirSync(MODELS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const bandDir = path.join(MODELS_DIR, entry.name);
      const characters = fs.readdirSync(bandDir, { withFileTypes: true })
        .filter((characterEntry) => characterEntry.isDirectory())
        .map((characterEntry) => {
          const characterDir = path.join(bandDir, characterEntry.name);
          const modelPath = findCharacterModelPath(characterDir);
          if (!modelPath) {
            return null;
          }

          return {
            label: toMenuLabel(characterEntry.name),
            path: modelPath
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.label.localeCompare(b.label, 'en'));

      return {
        label: entry.name,
        characters
      };
    })
    .filter((band) => band.characters.length > 0)
    .sort((a, b) => {
      const orderDiff = getBuiltInBandSortIndex(a.label) - getBuiltInBandSortIndex(b.label);
      if (orderDiff !== 0) {
        return orderDiff;
      }
      return a.label.localeCompare(b.label, 'en');
    });

  return bands;
}

function getDefaultBuiltInModelPath() {
  const library = scanBuiltInModelLibrary();
  return library[0]?.characters[0]?.path || '';
}

function sanitizeModelPath(modelPath, fallbackPath = '') {
  const resolvedPath = resolveModelPathFromState(modelPath);
  if (isExistingModelFile(resolvedPath)) {
    return resolvedPath;
  }

  return isExistingModelFile(fallbackPath) ? fallbackPath : '';
}

function sanitizeRecentModelPaths(modelPaths) {
  if (!Array.isArray(modelPaths)) {
    return [];
  }

  return modelPaths
    .map(resolveModelPathFromState)
    .filter((value, index, items) => typeof value === 'string' && value && items.indexOf(value) === index)
    .filter((value) => isExistingModelFile(value))
    .slice(0, RECENT_MODELS_LIMIT);
}

function sanitizeFavoriteModelPaths(modelPaths) {
  if (!Array.isArray(modelPaths)) {
    return [];
  }

  return modelPaths
    .map(resolveModelPathFromState)
    .filter((value, index, items) => typeof value === 'string' && value && items.indexOf(value) === index)
    .filter((value) => isExistingModelFile(value))
    .slice(0, FAVORITE_MODELS_LIMIT);
}

function withRecentModelPath(recentModelPaths, modelPath) {
  const resolvedPath = sanitizeModelPath(modelPath);
  if (!resolvedPath) {
    return Array.isArray(recentModelPaths) ? recentModelPaths.slice(0, RECENT_MODELS_LIMIT) : [];
  }

  return [resolvedPath, ...(Array.isArray(recentModelPaths) ? recentModelPaths : [])]
    .filter((value, index, items) => value && items.indexOf(value) === index)
    .slice(0, RECENT_MODELS_LIMIT);
}

function withFavoriteModelPath(favoriteModelPaths, modelPath) {
  const resolvedPath = sanitizeModelPath(modelPath);
  if (!resolvedPath) {
    return Array.isArray(favoriteModelPaths) ? favoriteModelPaths.slice(0, FAVORITE_MODELS_LIMIT) : [];
  }

  return [resolvedPath, ...(Array.isArray(favoriteModelPaths) ? favoriteModelPaths : [])]
    .filter((value, index, items) => value && items.indexOf(value) === index)
    .slice(0, FAVORITE_MODELS_LIMIT);
}

function withoutFavoriteModelPath(favoriteModelPaths, modelPath) {
  const resolvedPath = sanitizeModelPath(modelPath);
  return (Array.isArray(favoriteModelPaths) ? favoriteModelPaths : [])
    .filter((value) => path.resolve(value) !== path.resolve(resolvedPath))
    .slice(0, FAVORITE_MODELS_LIMIT);
}

function getRecentModelEntryLabel(modelPath, library) {
  for (const band of library) {
    for (const character of band.characters) {
      if (path.resolve(character.path) === path.resolve(modelPath)) {
        return `${band.label} / ${character.label}`;
      }
    }
  }

  const parts = String(modelPath || '').replace(/\\/g, '/').split('/').filter(Boolean);
  const fileName = parts[parts.length - 1] || 'model.json';
  const characterName = parts[parts.length - 2] || 'custom';
  return `自定义 / ${toMenuLabel(characterName)} / ${fileName}`;
}

function isWindowPositionVisible(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    return false;
  }

  const targetBounds = {
    x,
    y,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  };

  return screen.getAllDisplays().some((display) => {
    const area = display.workArea;
    const overlapWidth = Math.min(targetBounds.x + targetBounds.width, area.x + area.width) - Math.max(targetBounds.x, area.x);
    const overlapHeight = Math.min(targetBounds.y + targetBounds.height, area.y + area.height) - Math.max(targetBounds.y, area.y);
    return overlapWidth >= 80 && overlapHeight >= 80;
  });
}

function sanitizeWindowPosition(x, y) {
  if (isWindowPositionVisible(x, y)) {
    return {
      x: Math.round(x),
      y: Math.round(y)
    };
  }

  return getDefaultWindowPosition();
}

function createWindow() {
  const state = readWindowState();
  const defaultModelPath = getDefaultBuiltInModelPath();
  const safePosition = sanitizeWindowPosition(state.x, state.y);
  const appState = {
    x: safePosition.x,
    y: safePosition.y,
    modelPath: sanitizeModelPath(state.modelPath, defaultModelPath),
    nickname: typeof state.nickname === 'string' ? state.nickname : '',
    mode: sanitizeMode(state.mode),
    lastNonFocusMode: ['custom', 'companion'].includes(state.lastNonFocusMode) ? state.lastNonFocusMode : 'custom',
    focusSession: sanitizeFocusSession(state.focusSession),
    favoriteModelPaths: sanitizeFavoriteModelPaths(state.favoriteModelPaths),
    showDialogueBubble: sanitizeBoolean(state.showDialogueBubble, true),
    proactiveDialogueEnabled: sanitizeBoolean(state.proactiveDialogueEnabled, true),
    mouthAnimationEnabled: sanitizeBoolean(state.mouthAnimationEnabled, true),
    recentModelPaths: sanitizeRecentModelPaths(state.recentModelPaths)
  };

  if (!appState.focusSession && appState.mode === 'focus') {
    appState.mode = appState.lastNonFocusMode || 'custom';
  }

  appState.recentModelPaths = withRecentModelPath(appState.recentModelPaths, appState.modelPath);

  saveWindowState(appState);

  const win = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    x: appState.x,
    y: appState.y,
    frame: false,
    transparent: true,
    resizable: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
    alwaysOnTop: true,
    hasShadow: false,
    skipTaskbar: true,
    backgroundColor: '#00000000',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false
    }
  });

  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  win.on('moved', () => {
    const bounds = win.getBounds();
    appState.x = bounds.x;
    appState.y = bounds.y;
    saveWindowState(appState);
  });

  ipcMain.handle('pet:get-config', () => ({
    modelPath: appState.modelPath || defaultModelPath,
    defaultModelPath,
    nickname: appState.nickname || '',
    mode: appState.mode,
    lastNonFocusMode: appState.lastNonFocusMode || 'custom',
    focusSession: appState.focusSession,
    favoriteModelPaths: appState.favoriteModelPaths,
    showDialogueBubble: appState.showDialogueBubble,
    proactiveDialogueEnabled: appState.proactiveDialogueEnabled,
    mouthAnimationEnabled: appState.mouthAnimationEnabled,
    recentModelPaths: appState.recentModelPaths
  }));

  ipcMain.handle('pet:update-config', (_event, patch) => {
    if (!patch || typeof patch !== 'object') {
      return {
        nickname: appState.nickname || '',
        mode: appState.mode,
        lastNonFocusMode: appState.lastNonFocusMode || 'custom',
        focusSession: appState.focusSession,
        favoriteModelPaths: appState.favoriteModelPaths,
        showDialogueBubble: appState.showDialogueBubble,
        proactiveDialogueEnabled: appState.proactiveDialogueEnabled,
        mouthAnimationEnabled: appState.mouthAnimationEnabled,
        recentModelPaths: appState.recentModelPaths
      };
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'nickname')) {
      appState.nickname = typeof patch.nickname === 'string' ? patch.nickname.trim().slice(0, 24) : '';
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'modelPath')) {
      appState.modelPath = sanitizeModelPath(patch.modelPath, defaultModelPath);
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'lastNonFocusMode')) {
      appState.lastNonFocusMode = ['custom', 'companion'].includes(patch.lastNonFocusMode)
        ? patch.lastNonFocusMode
        : appState.lastNonFocusMode;
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'mode')) {
      appState.mode = sanitizeMode(patch.mode);
      if (appState.mode !== 'focus') {
        appState.lastNonFocusMode = appState.mode;
      }
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'focusSession')) {
      appState.focusSession = sanitizeFocusSession(patch.focusSession);
      if (!appState.focusSession && appState.mode === 'focus') {
        appState.mode = appState.lastNonFocusMode || 'custom';
      }
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'showDialogueBubble')) {
      appState.showDialogueBubble = sanitizeBoolean(patch.showDialogueBubble, true);
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'proactiveDialogueEnabled')) {
      appState.proactiveDialogueEnabled = sanitizeBoolean(patch.proactiveDialogueEnabled, true);
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'mouthAnimationEnabled')) {
      appState.mouthAnimationEnabled = sanitizeBoolean(patch.mouthAnimationEnabled, true);
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'recentModelPaths')) {
      appState.recentModelPaths = sanitizeRecentModelPaths(patch.recentModelPaths);
    }

    if (Object.prototype.hasOwnProperty.call(patch, 'favoriteModelPaths')) {
      appState.favoriteModelPaths = sanitizeFavoriteModelPaths(patch.favoriteModelPaths);
    }

    saveWindowState(appState);
    return {
      nickname: appState.nickname || '',
      mode: appState.mode,
      lastNonFocusMode: appState.lastNonFocusMode || 'custom',
      focusSession: appState.focusSession,
      favoriteModelPaths: appState.favoriteModelPaths,
      showDialogueBubble: appState.showDialogueBubble,
      proactiveDialogueEnabled: appState.proactiveDialogueEnabled,
      mouthAnimationEnabled: appState.mouthAnimationEnabled,
      recentModelPaths: appState.recentModelPaths
    };
  });

  ipcMain.handle('pet:drag-window', (_event, { deltaX, deltaY }) => {
    const [x, y] = win.getPosition();
    win.setPosition(Math.round(x + deltaX), Math.round(y + deltaY));
    return true;
  });

  ipcMain.handle('pet:get-cursor-context', () => {
    const cursor = screen.getCursorScreenPoint();
    const bounds = win.getBounds();
    return {
      cursor,
      windowBounds: bounds
    };
  });

  ipcMain.handle('pet:set-click-through', (_event, ignore) => {
    win.setIgnoreMouseEvents(Boolean(ignore), { forward: true });
    return true;
  });

  ipcMain.handle('pet:toggle-pin', () => {
    const next = !win.isAlwaysOnTop();
    win.setAlwaysOnTop(next);
    return next;
  });

  ipcMain.handle('pet:show-context-menu', (_event, payload) => {
    const motionGroups = Array.isArray(payload?.motionGroups) ? payload.motionGroups : [];
    const currentMotion = typeof payload?.currentMotion === 'string' ? payload.currentMotion : '';
    const lookMode = typeof payload?.lookMode === 'string' ? payload.lookMode : 'follow';
    const library = scanBuiltInModelLibrary();
    const focusActive = Boolean(appState.focusSession && appState.focusSession.endAt > Date.now());

    const builtInLibrarySubmenu = library.length
      ? library.map((band) => ({
          label: band.label,
          submenu: band.characters.map((character) => ({
            label: character.label,
            type: 'radio',
            checked: path.resolve(character.path) === path.resolve(appState.modelPath),
            click: () => {
              appState.modelPath = character.path;
              appState.recentModelPaths = withRecentModelPath(appState.recentModelPaths, appState.modelPath);
              saveWindowState(appState);
              win.webContents.send('pet:menu-action', {
                type: 'switch-model-path',
                path: appState.modelPath
              });
            }
          }))
        }))
      : [
          {
            label: '暂无内置角色',
            enabled: false
          }
        ];

    const recentCharacterSubmenu = appState.recentModelPaths
      .filter((modelPath) => isExistingModelFile(modelPath))
      .map((modelPath) => ({
        label: getRecentModelEntryLabel(modelPath, library),
        type: 'radio',
        checked: path.resolve(modelPath) === path.resolve(appState.modelPath),
        click: () => {
          appState.modelPath = modelPath;
          appState.recentModelPaths = withRecentModelPath(appState.recentModelPaths, modelPath);
          saveWindowState(appState);
          win.webContents.send('pet:menu-action', {
            type: 'switch-model-path',
            path: appState.modelPath
          });
        }
      }));
    const favoriteCharacterSubmenu = appState.favoriteModelPaths
      .filter((modelPath) => isExistingModelFile(modelPath))
      .map((modelPath) => ({
        label: getRecentModelEntryLabel(modelPath, library),
        type: 'radio',
        checked: path.resolve(modelPath) === path.resolve(appState.modelPath),
        click: () => {
          appState.modelPath = modelPath;
          appState.recentModelPaths = withRecentModelPath(appState.recentModelPaths, modelPath);
          saveWindowState(appState);
          win.webContents.send('pet:menu-action', {
            type: 'switch-model-path',
            path: appState.modelPath
          });
        }
      }));
    const currentModelIsFavorite = appState.favoriteModelPaths.some(
      (modelPath) => path.resolve(modelPath) === path.resolve(appState.modelPath)
    );

    const customOnlyItems = appState.mode === 'custom'
      ? [
          {
            type: 'separator'
          },
          {
            label: '动作',
            submenu: motionGroups.map((group) => ({
              label: group.label,
              submenu: group.items.map((motion) => ({
                label: motion,
                type: 'radio',
                checked: motion === currentMotion,
                click: () => {
                  win.webContents.send('pet:menu-action', {
                    type: 'play-motion',
                    motion
                  });
                }
              }))
            }))
          },
          {
            type: 'separator'
          },
          {
            label: '视线模式',
            submenu: [
              {
                label: '不跟随',
                type: 'radio',
                checked: lookMode === 'off',
                click: () => {
                  win.webContents.send('pet:menu-action', {
                    type: 'set-look-mode',
                    value: 'off'
                  });
                }
              },
              {
                label: '跟随',
                type: 'radio',
                checked: lookMode === 'follow',
                click: () => {
                  win.webContents.send('pet:menu-action', {
                    type: 'set-look-mode',
                    value: 'follow'
                  });
                }
              },
              {
                label: '随机看',
                type: 'radio',
                checked: lookMode === 'random',
                click: () => {
                  win.webContents.send('pet:menu-action', {
                    type: 'set-look-mode',
                    value: 'random'
                  });
                }
              }
            ]
          }
        ]
      : [];

    const menu = Menu.buildFromTemplate([
      {
        label: '切换角色',
        submenu: [
          {
            label: '收藏角色',
            submenu: [
              {
                label: currentModelIsFavorite ? '取消收藏当前角色' : '收藏当前角色',
                click: () => {
                  appState.favoriteModelPaths = currentModelIsFavorite
                    ? withoutFavoriteModelPath(appState.favoriteModelPaths, appState.modelPath)
                    : withFavoriteModelPath(appState.favoriteModelPaths, appState.modelPath);
                  saveWindowState(appState);
                }
              },
              {
                type: 'separator'
              },
              ...(favoriteCharacterSubmenu.length
                ? favoriteCharacterSubmenu
                : [{ label: '暂无收藏', enabled: false }])
            ]
          },
          {
            type: 'separator'
          },
          {
            label: '最近使用',
            submenu: recentCharacterSubmenu.length
              ? recentCharacterSubmenu
              : [{ label: '暂无记录', enabled: false }]
          },
          {
            type: 'separator'
          },
          {
            label: '角色库',
            submenu: builtInLibrarySubmenu
          },
          {
            label: '自定义',
            submenu: [
              {
                label: '选择模型文件',
                click: async () => {
                  const result = await dialog.showOpenDialog(win, {
                    title: '选择模型 JSON',
                    properties: ['openFile'],
                    defaultPath: isExistingModelFile(appState.modelPath)
                      ? path.dirname(appState.modelPath)
                      : MODELS_DIR,
                    filters: [
                      { name: 'Model JSON', extensions: ['json'] },
                      { name: 'All Files', extensions: ['*'] }
                    ]
                  });

                  if (result.canceled || !result.filePaths.length) {
                    return;
                  }

                  appState.modelPath = result.filePaths[0];
                  appState.recentModelPaths = withRecentModelPath(appState.recentModelPaths, appState.modelPath);
                  saveWindowState(appState);
                  win.webContents.send('pet:menu-action', {
                    type: 'switch-model-path',
                    path: appState.modelPath
                  });
                }
              }
            ]
          }
        ]
      },
      {
        type: 'separator'
      },
      {
        label: '模式',
        submenu: [
          {
            label: '自定义模式',
            type: 'radio',
            checked: appState.mode === 'custom',
            click: () => {
              appState.mode = 'custom';
              appState.lastNonFocusMode = 'custom';
              appState.focusSession = null;
              saveWindowState(appState);
              win.webContents.send('pet:menu-action', { type: 'set-mode', value: 'custom' });
            }
          },
          {
            label: '陪伴模式',
            type: 'radio',
            checked: appState.mode === 'companion',
            click: () => {
              appState.mode = 'companion';
              appState.lastNonFocusMode = 'companion';
              appState.focusSession = null;
              saveWindowState(appState);
              win.webContents.send('pet:menu-action', { type: 'set-mode', value: 'companion' });
            }
          },
          {
            label: '专注模式',
            type: 'radio',
            checked: appState.mode === 'focus',
            click: () => {
              if (focusActive) {
                win.webContents.send('pet:menu-action', { type: 'set-mode', value: 'focus' });
                return;
              }
              win.webContents.send('pet:menu-action', {
                type: 'prompt-start-focus',
                resumeMode: appState.lastNonFocusMode || 'custom'
              });
            }
          },
          {
            type: 'separator'
          },
          {
            label: focusActive ? '重新开始专注...' : '开始专注...',
            click: () => {
              win.webContents.send('pet:menu-action', {
                type: 'prompt-start-focus',
                resumeMode: appState.lastNonFocusMode || 'custom'
              });
            }
          },
          {
            label: '结束本轮专注',
            enabled: focusActive,
            click: () => {
              appState.focusSession = null;
              appState.mode = appState.lastNonFocusMode || 'custom';
              saveWindowState(appState);
              win.webContents.send('pet:menu-action', {
                type: 'stop-focus',
                value: appState.mode
              });
            }
          }
        ]
      },
      ...customOnlyItems,
      {
        type: 'separator'
      },
      {
        label: '设置',
        submenu: [
          {
            label: '昵称设定',
            submenu: [
              {
                label: appState.nickname ? `当前昵称：${appState.nickname}` : '当前昵称：未设置',
                enabled: false
              },
              {
                label: '设置昵称',
                click: () => {
                  win.webContents.send('pet:menu-action', {
                    type: 'prompt-set-nickname',
                    value: appState.nickname || ''
                  });
                }
              },
              {
                label: '清空昵称',
                enabled: Boolean(appState.nickname),
                click: () => {
                  appState.nickname = '';
                  saveWindowState(appState);
                  win.webContents.send('pet:menu-action', {
                    type: 'nickname-changed',
                    value: ''
                  });
                }
              }
            ]
          },
          {
            label: '帮助',
            click: () => {
              win.webContents.send('pet:menu-action', {
                type: 'show-help'
              });
            }
          },
          {
            label: '对白与表现',
            submenu: [
              {
                label: '显示对白框',
                type: 'checkbox',
                checked: appState.showDialogueBubble,
                click: ({ checked }) => {
                  appState.showDialogueBubble = Boolean(checked);
                  saveWindowState(appState);
                  win.webContents.send('pet:menu-action', {
                    type: 'setting-changed',
                    key: 'showDialogueBubble',
                    value: appState.showDialogueBubble
                  });
                }
              },
              {
                label: '允许主动对白',
                type: 'checkbox',
                checked: appState.proactiveDialogueEnabled,
                click: ({ checked }) => {
                  appState.proactiveDialogueEnabled = Boolean(checked);
                  saveWindowState(appState);
                  win.webContents.send('pet:menu-action', {
                    type: 'setting-changed',
                    key: 'proactiveDialogueEnabled',
                    value: appState.proactiveDialogueEnabled
                  });
                }
              },
              {
                label: '开启口型动画',
                type: 'checkbox',
                checked: appState.mouthAnimationEnabled,
                click: ({ checked }) => {
                  appState.mouthAnimationEnabled = Boolean(checked);
                  saveWindowState(appState);
                  win.webContents.send('pet:menu-action', {
                    type: 'setting-changed',
                    key: 'mouthAnimationEnabled',
                    value: appState.mouthAnimationEnabled
                  });
                }
              }
            ]
          }
        ]
      },
      {
        type: 'separator'
      },
      {
        label: win.isAlwaysOnTop() ? '取消置顶' : '置顶',
        click: () => {
          const next = !win.isAlwaysOnTop();
          win.setAlwaysOnTop(next);
          win.webContents.send('pet:menu-action', {
            type: 'pin-changed',
            value: next
          });
        }
      },
      {
        label: '最小化',
        click: () => {
          win.minimize();
        }
      },
      {
        label: '退出',
        click: () => {
          win.close();
        }
      }
    ]);

    menu.popup({ window: win });
    return true;
  });

  ipcMain.handle('pet:minimize', () => {
    win.minimize();
    return true;
  });

  ipcMain.handle('pet:close', () => {
    win.close();
    return true;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
