const { Live2DModel } = PIXI.live2d;

const canvas = document.getElementById('stage');
const panelBackdrop = document.getElementById('panel-backdrop');
const panelCard = document.getElementById('panel-card');
const panelEyebrow = document.getElementById('panel-eyebrow');
const panelTitle = document.getElementById('panel-title');
const panelDescription = document.getElementById('panel-description');
const panelFieldPrimary = document.getElementById('panel-field-primary');
const panelFieldSecondary = document.getElementById('panel-field-secondary');
const panelPrimaryLabel = document.getElementById('panel-primary-label');
const panelPrimaryInput = document.getElementById('panel-primary-input');
const panelSecondaryLabel = document.getElementById('panel-secondary-label');
const panelSecondaryInput = document.getElementById('panel-secondary-input');
const panelCancel = document.getElementById('panel-cancel');
const panelConfirm = document.getElementById('panel-confirm');
const focusChip = document.getElementById('focus-chip');
const focusChipLabel = document.getElementById('focus-chip-label');
const focusChipTime = document.getElementById('focus-chip-time');
const focusChipTask = document.getElementById('focus-chip-task');
const dialogueRoot = document.getElementById('dialogue');
const dialogueName = document.getElementById('dialogue-name');
const dialogueText = document.getElementById('dialogue-text');

const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

const app = new PIXI.Application({
  view: canvas,
  resizeTo: window,
  antialias: true,
  autoStart: true,
  autoDensity: true,
  resolution: pixelRatio,
  backgroundAlpha: 0,
  powerPreference: 'high-performance'
});

app.renderer.roundPixels = true;

const DEFAULT_MODEL_PATH = '';
const dialogueData = window.PET_DIALOGUE_DATA || {};
const motionData = window.PET_MOTION_DATA || {};
const CHARACTER_NAME_MAP = dialogueData.characterNames || {};
const DEFAULT_DIALOGUE_BY_REASON = dialogueData.defaultDialogues || {};
const CHARACTER_DIALOGUE_BY_REASON = dialogueData.characterDialogues || {};
const CHARACTER_MODE_GROUPS = dialogueData.characterModeGroups || {};
const MODE_DIALOGUES = dialogueData.modeDialogues || {};
const SPECIAL_DIALOGUES = dialogueData.specialDialogues || {};
const DEFAULT_MOTION_DATA = motionData.defaultMotions || {};
const CHARACTER_MOTION_DATA = motionData.characterMotions || {};

const state = {
  model: null,
  dragPointerId: null,
  dragLastX: 0,
  dragLastY: 0,
  dragLastScreenX: 0,
  dragLastScreenY: 0,
  dragMoved: false,
  motions: [],
  idleMotions: ['idle01', 'idle02'],
  lastPinState: true,
  currentMotion: '',
  lookMode: 'follow',
  randomLookX: window.innerWidth / 2,
  randomLookY: window.innerHeight * 0.38,
  randomLookAnim: null,
  isPollingCursor: false,
  lastCursorLocalX: window.innerWidth / 2,
  lastCursorLocalY: window.innerHeight / 2,
  lastCursorPollAt: 0,
  lastCursorMoveAt: performance.now(),
  hoverStartedAt: 0,
  lastHoverReactionAt: 0,
  lastDragReactionAt: 0,
  lastTapReactionAt: 0,
  sleepUntil: 0,
  availableExpressions: [],
  defaultExpressionName: '',
  sleepExpressionName: '',
  sleepExpressionApplied: false,
  savedEyeBlink: null,
  modelPath: DEFAULT_MODEL_PATH,
  defaultModelPath: DEFAULT_MODEL_PATH,
  currentCharacterKey: 'kokoro',
  currentCharacterName: '心',
  dialogueVisible: false,
  dialogueTimer: null,
  dialogueSpeakingUntil: 0,
  dialogueMouthPhase: 0,
  lastDialogueShownAt: 0,
  dialogueCooldownUntil: 0,
  clickThrough: false,
  nickname: '',
  mode: 'custom',
  lastNonFocusMode: 'custom',
  focusSession: null,
  focusNotifiedComplete: false,
  lastCompanionTalkAt: 0,
  showDialogueBubble: true,
  proactiveDialogueEnabled: true,
  mouthAnimationEnabled: true,
  modal: null,
  pettingProgress: 0,
  pettingLastDirection: 0,
  pettingLastAt: 0,
  pettingCooldownUntil: 0,
  pettingLevel: 0,
  lookPauseUntil: 0,
  lookResumePending: false
};

const SLEEP_MOTIONS = ['sleep01', 'sleep02'];
const SLEEP_DURATION_MS = 5 * 60 * 1000;
const HOVER_REACTION_DELAY_MS = 5000;
const HOVER_REACTION_COOLDOWN_MS = 5200;
const PETTING_SUPPRESS_HOVER_MS = 4200;
const DIALOGUE_BUFFER_MS = 1100;
const MOTION_LOOK_PAUSE_MS = 1900;

function buildMotionGroups(motions) {
  const groups = [
    { label: '待机', test: (name) => ['idle01', 'idle02', 'humming01', 'sleep01', 'sleep02'].includes(name) },
    { label: '日常反应', test: (name) => /^(nf|nnf)/.test(name) },
    { label: '情绪动作', test: (name) => [
      'smile01',
      'smile02',
      'nod01',
      'nod02',
      'jaan01',
      'oowarai01',
      'wondering01',
      'surprised01',
      'serious01',
      'angry01',
      'sad01',
      'sad02',
      'sad03',
      'cry01',
      'bye01',
      'gattsu01',
      'shame01',
      'wink01',
      'kime01'
    ].includes(name) },
    { label: '服装专属', test: (name) => /^sys-/.test(name) }
  ];

  const used = new Set();
  const result = [];

  for (const group of groups) {
    const items = motions.filter((motion) => !used.has(motion) && group.test(motion));
    if (!items.length) continue;
    items.forEach((motion) => used.add(motion));
    result.push({
      label: group.label,
      items: items.sort((a, b) => a.localeCompare(b, 'en'))
    });
  }

  const remaining = motions.filter((motion) => !used.has(motion)).sort((a, b) => a.localeCompare(b, 'en'));
  if (remaining.length) {
    result.push({
      label: '其他',
      items: remaining
    });
  }

  return result;
}

function fitModel(model) {
  model.scale.set(1);
  model.anchor.set(0.5, 1);

  const bounds = model.getLocalBounds();
  const safeWidth = Math.max(bounds.width, 1);
  const safeHeight = Math.max(bounds.height, 1);
  const targetWidth = window.innerWidth * 0.82;
  const targetHeight = window.innerHeight * 0.84;
  const scale = Math.min(targetWidth / safeWidth, targetHeight / safeHeight);

  model.scale.set(scale);
  model.x = window.innerWidth / 2;
  model.y = window.innerHeight * 0.985;
  model.anchor.set(0.5, 1);
}

function normalizeModelPath(modelPath) {
  if (!modelPath) {
    return DEFAULT_MODEL_PATH;
  }

  if (/^(file|https?):\/\//i.test(modelPath) || modelPath.startsWith('./') || modelPath.startsWith('../')) {
    return modelPath;
  }

  if (/^[A-Za-z]:\\/.test(modelPath)) {
    return `file:///${encodeURI(modelPath.replace(/\\/g, '/'))}`;
  }

  return modelPath;
}

function listMotions(settings) {
  return Object.keys(settings.motions || {});
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function normalizeWeightedEntry(entry, valueKey = 'motion') {
  if (typeof entry === 'string') {
    return {
      [valueKey]: entry,
      weight: 1
    };
  }

  if (entry && typeof entry === 'object') {
    const value = entry[valueKey] || entry.text;
    if (!value) {
      return null;
    }

    return {
      ...entry,
      [valueKey]: value,
      weight: Number.isFinite(Number(entry.weight)) ? Math.max(0, Number(entry.weight)) : 1
    };
  }

  return null;
}

function pickWeightedEntry(entries, valueKey = 'motion') {
  const normalizedEntries = (entries || [])
    .map((entry) => normalizeWeightedEntry(entry, valueKey))
    .filter(Boolean);

  if (!normalizedEntries.length) {
    return null;
  }

  const totalWeight = normalizedEntries.reduce((sum, entry) => sum + Math.max(0, entry.weight || 0), 0);
  if (totalWeight <= 0) {
    return normalizedEntries[0];
  }

  let threshold = Math.random() * totalWeight;
  for (const entry of normalizedEntries) {
    threshold -= Math.max(0, entry.weight || 0);
    if (threshold <= 0) {
      return entry;
    }
  }

  return normalizedEntries[normalizedEntries.length - 1];
}

function prettifyName(name) {
  return String(name || '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getPathSegments(modelPath) {
  return String(modelPath || '')
    .replace(/\\/g, '/')
    .split('/')
    .filter(Boolean);
}

function resolveCharacterKey(modelPath) {
  const segments = getPathSegments(modelPath);
  const modelsIndex = segments.lastIndexOf('models');

  if (modelsIndex >= 0 && segments.length > modelsIndex + 2) {
    return segments[modelsIndex + 2];
  }

  if (segments.length >= 2) {
    return segments[segments.length - 2];
  }

  return 'character';
}

function resolveCharacterName(modelPath) {
  const key = resolveCharacterKey(modelPath);
  return CHARACTER_NAME_MAP[key] || CHARACTER_NAME_MAP[key.toLowerCase()] || prettifyName(key);
}

function resolveBandName(modelPath) {
  const segments = getPathSegments(modelPath);
  const modelsIndex = segments.lastIndexOf('models');
  if (modelsIndex >= 0 && segments.length > modelsIndex + 1) {
    return segments[modelsIndex + 1];
  }
  return '';
}

function resolveModelFileName(modelPath) {
  const segments = getPathSegments(modelPath);
  return segments.length ? segments[segments.length - 1] : '';
}

function getCharacterMotionProfile() {
  const key = state.currentCharacterKey || resolveCharacterKey(state.modelPath);
  return CHARACTER_MOTION_DATA[key] || CHARACTER_MOTION_DATA[String(key).toLowerCase()] || null;
}

function getNestedMotionValue(source, pathParts) {
  return pathParts.reduce((current, key) => {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    return current[key];
  }, source);
}

function getMotionCandidates(...pathParts) {
  const characterProfile = getCharacterMotionProfile();
  const characterValue = getNestedMotionValue(characterProfile, pathParts);
  if (Array.isArray(characterValue)) {
    return characterValue;
  }

  const defaultValue = getNestedMotionValue(DEFAULT_MOTION_DATA, pathParts);
  return Array.isArray(defaultValue) ? defaultValue : [];
}

function getCharacterModeGroup() {
  const key = state.currentCharacterKey || resolveCharacterKey(state.modelPath);
  return CHARACTER_MODE_GROUPS[key] || CHARACTER_MODE_GROUPS[String(key).toLowerCase()] || 'gentle';
}

function getModeDialogueLines(mode, reason) {
  const group = getCharacterModeGroup();
  return MODE_DIALOGUES[mode]?.[group]?.[reason] ||
    MODE_DIALOGUES[mode]?.default?.[reason] ||
    [];
}

function getSpecialDialogueLines(reason, variant = '') {
  const group = getCharacterModeGroup();
  const groupValue = SPECIAL_DIALOGUES[reason]?.[group];
  const defaultValue = SPECIAL_DIALOGUES[reason]?.default;

  if (variant && groupValue && typeof groupValue === 'object' && !Array.isArray(groupValue) && Array.isArray(groupValue[variant])) {
    return groupValue[variant];
  }

  if (variant && defaultValue && typeof defaultValue === 'object' && !Array.isArray(defaultValue) && Array.isArray(defaultValue[variant])) {
    return defaultValue[variant];
  }

  if (Array.isArray(groupValue)) {
    return groupValue;
  }

  if (Array.isArray(defaultValue)) {
    return defaultValue;
  }

  return [];
}

function hasNickname() {
  return Boolean(state.nickname && state.nickname.trim());
}

function maybeDecorateWithNickname(text, options = {}) {
  if (!text) return text;
  if (!hasNickname()) return text;
  const chance = typeof options.chance === 'number' ? options.chance : 0.28;
  if (Math.random() > chance) return text;

  const name = state.nickname.trim();
  if (text.includes('{name}')) {
    return text.replaceAll('{name}', name);
  }

  const styles = [
    `${name}，${text}`,
    `${text}${text.endsWith('。') ? '' : '。'}${name}。`
  ];
  return randomItem(styles);
}

function resolveDialogueTemplate(text, options = {}) {
  if (!text) return text;

  const task = state.focusSession?.task || options.task || '这件事';
  let next = text
    .replaceAll('{task}', task)
    .replaceAll('{name}', hasNickname() ? state.nickname.trim() : '你');

  if (!text.includes('{name}')) {
    next = maybeDecorateWithNickname(next, options);
  }

  return next;
}

function getDialogueLines(reason) {
  if (state.mode !== 'custom') {
    const modeReason = getModeDialogueLines(state.mode, reason);
    if (modeReason?.length) {
      return modeReason;
    }
  }

  const key = state.currentCharacterKey || resolveCharacterKey(state.modelPath);
  const normalizedKey = String(key).toLowerCase();
  const characterDialogue =
    CHARACTER_DIALOGUE_BY_REASON[key] ||
    CHARACTER_DIALOGUE_BY_REASON[normalizedKey];

  return characterDialogue?.[reason] ||
    DEFAULT_DIALOGUE_BY_REASON[reason] ||
    DEFAULT_DIALOGUE_BY_REASON.tapBody;
}

function pickDialogueEntry(reason, options = {}) {
  const lines = options.special
    ? getSpecialDialogueLines(reason, options.variant || '')
    : getDialogueLines(reason);

  if (!lines.length) {
    return null;
  }

  return pickWeightedEntry(lines, 'text');
}

function hideDialogue() {
  if (state.dialogueTimer) {
    window.clearTimeout(state.dialogueTimer);
    state.dialogueTimer = null;
  }

  dialogueRoot.classList.remove('is-visible');
  state.dialogueVisible = false;
  state.dialogueSpeakingUntil = 0;
  state.dialogueMouthPhase = 0;
}

function showDialogue(text, options = {}) {
  if (!text) return;
  if (!state.showDialogueBubble) {
    hideDialogue();
    return;
  }

  const now = performance.now();
  if (!options.force) {
    if (state.dialogueVisible) {
      return;
    }
    if (now < state.dialogueCooldownUntil) {
      return;
    }
  }

  const name = options.name || state.currentCharacterName || resolveCharacterName(state.modelPath);
  const duration = clamp(options.duration ?? (2100 + text.length * 170), 2200, 5200);
  const resolvedText = resolveDialogueTemplate(text, options);

  dialogueName.textContent = name;
  dialogueText.textContent = resolvedText;
  dialogueRoot.classList.add('is-visible');

  state.dialogueVisible = true;
  state.lastDialogueShownAt = now;
  state.dialogueCooldownUntil = now + duration + DIALOGUE_BUFFER_MS;
  state.dialogueSpeakingUntil = now + Math.max(1100, duration - 220);
  state.dialogueMouthPhase = Math.random() * Math.PI * 2;

  if (state.dialogueTimer) {
    window.clearTimeout(state.dialogueTimer);
  }

  state.dialogueTimer = window.setTimeout(() => {
    hideDialogue();
  }, duration);
}

function speakDialogueEntry(entry, options = {}) {
  if (!entry) return false;

  if (options.allowDialogueMotion && entry.motion && state.motions.includes(entry.motion)) {
    playMotion(entry.motion);
  }

  showDialogue(entry.text || '', options);
  return true;
}

function speakForReason(reason, options = {}) {
  return speakDialogueEntry(pickDialogueEntry(reason), options);
}

function speakSpecialReason(reason, options = {}) {
  return speakDialogueEntry(
    pickDialogueEntry(reason, {
      special: true,
      variant: options.variant || ''
    }),
    options
  );
}

function closeModal(result = null) {
  if (!state.modal) return;

  const modal = state.modal;
  state.modal = null;
  panelBackdrop.classList.remove('is-visible');
  panelBackdrop.setAttribute('aria-hidden', 'true');
  panelDescription.scrollTop = 0;

  if (typeof modal.resolve === 'function') {
    modal.resolve(result);
  }

  if (state.model) {
    queueMicrotask(() => {
      fitModel(state.model);
    });
  }
}

function openModal(config) {
  if (state.modal) {
    closeModal(null);
  }

  panelEyebrow.textContent = config.eyebrow || '';
  panelTitle.textContent = config.title || '';
  panelDescription.textContent = config.description || '';

  panelFieldPrimary.style.display = config.primary ? 'flex' : 'none';
  panelFieldSecondary.style.display = config.secondary ? 'flex' : 'none';
  panelCard.dataset.kind = config.kind || 'default';
  panelCard.classList.toggle('is-help', config.kind === 'help');

  if (config.primary) {
    panelPrimaryLabel.textContent = config.primary.label || '';
    panelPrimaryInput.type = config.primary.type || 'text';
    panelPrimaryInput.maxLength = config.primary.maxLength || 32;
    panelPrimaryInput.value = config.primary.value || '';
    panelPrimaryInput.placeholder = config.primary.placeholder || '';
  }

  if (config.secondary) {
    panelSecondaryLabel.textContent = config.secondary.label || '';
    panelSecondaryInput.type = config.secondary.type || 'text';
    panelSecondaryInput.value = String(config.secondary.value ?? '');
    panelSecondaryInput.min = config.secondary.min ?? '';
    panelSecondaryInput.max = config.secondary.max ?? '';
    panelSecondaryInput.placeholder = config.secondary.placeholder || '';
  }

  panelConfirm.textContent = config.confirmText || '确定';
  panelCancel.textContent = config.cancelText || '取消';
  panelCancel.style.display = config.showCancel === false ? 'none' : 'inline-flex';
  panelConfirm.style.display = config.showConfirm === false ? 'none' : 'inline-flex';
  panelDescription.scrollTop = 0;

  panelBackdrop.classList.add('is-visible');
  panelBackdrop.setAttribute('aria-hidden', 'false');

  return new Promise((resolve) => {
    state.modal = {
      kind: config.kind,
      resolve,
      submit: config.submit
    };

    queueMicrotask(() => {
      if (config.primary) {
        panelPrimaryInput.focus();
      } else if (config.secondary) {
        panelSecondaryInput.focus();
      } else if (config.showConfirm !== false) {
        panelConfirm.focus();
      } else if (config.showCancel !== false) {
        panelCancel.focus();
      }
    });
  });
}

function setMode(mode) {
  state.mode = ['custom', 'companion', 'focus'].includes(mode) ? mode : 'custom';
  if (state.mode !== 'focus') {
    state.lastNonFocusMode = state.mode;
    state.focusNotifiedComplete = false;
  }
}

async function persistModeSettings(patch) {
  try {
    const config = await window.petDesktop.updateConfig(patch);
    if (typeof config?.nickname === 'string') {
      state.nickname = config.nickname;
    }
    if (typeof config?.mode === 'string') {
      setMode(config.mode);
    }
    if (typeof config?.lastNonFocusMode === 'string' && ['custom', 'companion'].includes(config.lastNonFocusMode)) {
      state.lastNonFocusMode = config.lastNonFocusMode;
    }
    state.focusSession = config?.focusSession || null;
    if (typeof config?.showDialogueBubble === 'boolean') {
      state.showDialogueBubble = config.showDialogueBubble;
      if (!state.showDialogueBubble) {
        hideDialogue();
      }
    }
    if (typeof config?.proactiveDialogueEnabled === 'boolean') {
      state.proactiveDialogueEnabled = config.proactiveDialogueEnabled;
    }
    if (typeof config?.mouthAnimationEnabled === 'boolean') {
      state.mouthAnimationEnabled = config.mouthAnimationEnabled;
    }
  } catch {}
}

function isFocusModeActive() {
  return state.mode === 'focus' && state.focusSession && state.focusSession.endAt > Date.now();
}

function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateFocusChip() {
  if (!isFocusModeActive()) {
    focusChip.classList.remove('is-visible');
    return;
  }

  const remainMs = state.focusSession.endAt - Date.now();
  focusChipLabel.textContent = '专注中';
  focusChipTime.textContent = formatCountdown(remainMs);
  focusChipTask.textContent = state.focusSession.task || '当前目标';
  focusChip.classList.add('is-visible');
}

async function finishFocusSession(completed = true) {
  const resumeMode = state.focusSession?.resumeMode || state.lastNonFocusMode || 'custom';
  const task = state.focusSession?.task || '这件事';
  const completionLines = getModeDialogueLines('focus', 'focusComplete');

  state.focusSession = null;
  state.focusNotifiedComplete = false;
  setMode(resumeMode);
  await persistModeSettings({
    mode: resumeMode,
    focusSession: null,
    lastNonFocusMode: resumeMode
  });

  if (completed) {
    const completionEntry = pickWeightedEntry(
      completionLines.length ? completionLines : [{ text: '这轮已经完成了，做得很好。' }],
      'text'
    );
    speakDialogueEntry(completionEntry, {
      duration: 3200,
      task,
      chance: 0.62,
      allowDialogueMotion: true
    });
  }
}

async function startFocusSessionFromPrompt(resumeMode = state.lastNonFocusMode || 'custom') {
  const result = await openModal({
    kind: 'focus',
    eyebrow: 'FOCUS MODE',
    title: '开始专注',
    description: '给这一轮专注设一个小目标，再填入倒计时分钟数。',
    confirmText: '开始',
    primary: {
      label: '这轮目标',
      type: 'text',
      value: state.focusSession?.task || '',
      placeholder: '比如：写完这部分文案'
    },
    secondary: {
      label: '分钟数',
      type: 'number',
      value: state.focusSession?.durationMinutes || 25,
      min: 1,
      max: 180,
      placeholder: '25'
    },
    submit: () => {
      const task = panelPrimaryInput.value.trim();
      const durationMinutes = clamp(Number.parseInt(panelSecondaryInput.value, 10) || 25, 1, 180);
      if (!task) {
        panelPrimaryInput.focus();
        return null;
      }
      return { task, durationMinutes };
    }
  });

  if (!result) return;

  const { task, durationMinutes } = result;
  const now = Date.now();

  state.focusSession = {
    task,
    durationMinutes,
    startedAt: now,
    endAt: now + durationMinutes * 60 * 1000,
    resumeMode: ['custom', 'companion'].includes(resumeMode) ? resumeMode : (state.lastNonFocusMode || 'custom')
  };
  state.focusNotifiedComplete = false;
  setMode('focus');

  await persistModeSettings({
    mode: 'focus',
    focusSession: state.focusSession
  });

  const startEntry = pickDialogueEntry('focusStart') || { text: '这轮开始了，先专心完成它。' };
  speakDialogueEntry(startEntry, {
    duration: 3400,
    task,
    chance: 0.72,
    allowDialogueMotion: true
  });
}

async function promptNickname(initialValue = state.nickname || '') {
  const result = await openModal({
    kind: 'nickname',
    eyebrow: 'PROFILE',
    title: '设置昵称',
    description: '设置后，角色会在部分对白里自然地这样称呼你。',
    confirmText: '保存',
    primary: {
      label: '昵称',
      type: 'text',
      value: initialValue,
      maxLength: 24,
      placeholder: '比如：橙子'
    },
    submit: () => ({
      nickname: panelPrimaryInput.value.trim().slice(0, 24)
    })
  });

  if (!result) return;

  const nickname = result.nickname;
  state.nickname = nickname;
  await persistModeSettings({ nickname });

  if (nickname) {
    showDialogue(`以后我会叫你{name}。`, { duration: 2600, chance: 1 });
  } else {
    showDialogue('那我就先不特别称呼你了。', { duration: 2400, chance: 0 });
  }
}

async function showHelpModal() {
  const versionText = '测试版 1.0.0';
  const currentRole = state.currentCharacterName || resolveCharacterName(state.modelPath) || '未加载';
  const currentBand = resolveBandName(state.modelPath) || '角色库';
  const currentModel = resolveModelFileName(state.modelPath) || '未识别';
  const modeLabelMap = {
    custom: '自定义模式',
    companion: '陪伴模式',
    focus: '专注模式'
  };
  const modeLabel = modeLabelMap[state.mode] || '自定义模式';
  const nicknameLabel = state.nickname?.trim() ? state.nickname.trim() : '未设置';

  await openModal({
    kind: 'help',
    eyebrow: 'BANDORI DESKTOP PET',
    title: '邦邦桌宠（测试版）',
    description: [
      `版本信息\n· 当前版本：${versionText}`,
      '',
      `当前状态\n· 当前角色：${currentRole}\n· 所属分组：${currentBand}\n· 当前模式：${modeLabel}\n· 当前昵称：${nicknameLabel}\n· 当前模型：${currentModel}`,
      '',
      '快速上手\n1. 左键点击人物触发动作和对白\n2. 在头部连续来回滑动可以触发摸头反应\n3. 拖动人物可以移动桌宠位置\n4. 右键打开角色、模式和设置菜单',
      '',
      '模式说明\n· 自定义模式：保留动作与视线模式的手动细调\n· 陪伴模式：更偏陪伴、主动短句和轻互动\n· 专注模式：输入目标和倒计时，进入番茄钟监督状态',
      '',
      '维护提示\n· 改对白：renderer/dialogue-data.js\n· 改动作：renderer/motion-data.js\n· 查模型动作：MODELS_ACTIONS.md',
      '',
      '小提示\n· sleep01 / sleep02 会进入睡眠锁定\n· 有些角色没有某些动作时，系统会自动回退到可用动作'
    ].join('\n'),
    confirmText: '知道了',
    showCancel: false,
    submit: () => ({ acknowledged: true })
  });
}

function safeRandomMotion(excluded = []) {
  const candidates = state.motions.filter((name) => !excluded.includes(name));
  return candidates.length ? randomItem(candidates) : null;
}

function getAvailableMotions(entries) {
  return (entries || [])
    .map((entry) => normalizeWeightedEntry(entry, 'motion'))
    .filter((entry) => entry && state.motions.includes(entry.motion));
}

function getHourState() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 18) return 'day';
  if (hour >= 18 && hour < 23) return 'evening';
  return 'night';
}

function getIdleMotionPool() {
  const motions = getAvailableMotions(getMotionCandidates('idle', getHourState()));
  return motions.length ? motions : getAvailableMotions(state.idleMotions);
}

function getHeadBounds() {
  if (!state.model) return null;
  const bounds = state.model.getBounds();
  return {
    left: bounds.x + bounds.width * 0.22,
    right: bounds.x + bounds.width * 0.78,
    top: bounds.y + bounds.height * 0.02,
    bottom: bounds.y + bounds.height * 0.31
  };
}

function isPointInHeadArea(x, y) {
  const head = getHeadBounds();
  if (!head) return false;
  return x >= head.left && x <= head.right && y >= head.top && y <= head.bottom;
}

function resetPettingProgress() {
  state.pettingProgress = 0;
  state.pettingLastDirection = 0;
  state.pettingLastAt = 0;
}

function pauseLookModeTemporarily(durationMs = MOTION_LOOK_PAUSE_MS) {
  if (!state.model || isSleeping()) return;

  state.lookPauseUntil = Math.max(state.lookPauseUntil, performance.now() + durationMs);
  state.lookResumePending = true;
  state.randomLookAnim = state.lookMode === 'random' ? state.randomLookAnim : state.randomLookAnim;

  try {
    state.model.internalModel.focusController.focus(0, 0, true);
  } catch {}
}

function getPettingMotion() {
  const preferred = getAvailableMotions(getMotionCandidates('petting'));
  const picked = preferred.length ? pickWeightedEntry(preferred, 'motion') : null;
  return picked?.motion || (safeRandomMotion() || null);
}

function getPettingLevelMotion(level) {
  const preferred = getAvailableMotions(getMotionCandidates('pettingLevels', String(level)));
  const picked = preferred.length ? pickWeightedEntry(preferred, 'motion') : null;
  return picked?.motion || getPettingMotion();
}

function maybeTriggerPetting(event) {
  if (!state.model || isSleeping() || state.modal) return;
  if (state.dragPointerId !== null) return;
  if (Date.now() < state.pettingCooldownUntil) return;
  if (!isPointInHeadArea(event.clientX, event.clientY)) {
    if (Date.now() - state.pettingLastAt > 220) {
      resetPettingProgress();
    }
    return;
  }

  const dx = typeof event.movementX === 'number'
    ? event.movementX
    : event.clientX - state.lastCursorLocalX;
  const dy = typeof event.movementY === 'number'
    ? event.movementY
    : event.clientY - state.lastCursorLocalY;
  const now = Date.now();

  if (Math.abs(dx) < 5 || Math.abs(dx) < Math.abs(dy) * 1.15) {
    return;
  }

  if (state.pettingLastAt && now - state.pettingLastAt > 560) {
    resetPettingProgress();
  }

  const direction = Math.sign(dx);
  if (direction === 0) {
    return;
  }

  if (state.pettingLastDirection === 0) {
    state.pettingLastDirection = direction;
    state.pettingLastAt = now;
    return;
  }

  if (direction !== state.pettingLastDirection) {
    state.pettingProgress += 1;
    state.pettingLastDirection = direction;
    state.pettingLastAt = now;
  } else if (now - state.pettingLastAt > 220) {
    state.pettingLastAt = now;
  }

  if (state.pettingProgress < 5) {
    return;
  }

  const nextLevel = now - state.pettingCooldownUntil < 25000
    ? clamp((state.pettingLevel || 0) + 1, 1, 3)
    : 1;
  state.pettingLevel = nextLevel;

  const motion = getPettingLevelMotion(nextLevel);
  if (motion) {
    playMotion(motion);
  }
  speakSpecialReason('petting', {
    duration: 3000,
    chance: 0.52,
    variant: `level${nextLevel}`,
    allowDialogueMotion: false
  });
  state.pettingCooldownUntil = now + 3800;
  state.lastHoverReactionAt = now + PETTING_SUPPRESS_HOVER_MS;
  state.hoverStartedAt = 0;
  resetPettingProgress();
}

function playFeedbackMotion(candidates, cooldownKey, cooldownMs = 1800) {
  const now = Date.now();
  if (cooldownKey && now - state[cooldownKey] < cooldownMs) {
    return false;
  }

  const pool = getAvailableMotions(candidates);
  const motionEntry = pool.length ? pickWeightedEntry(pool, 'motion') : null;
  if (!motionEntry?.motion) return false;

  playMotion(motionEntry.motion);
  if (cooldownKey) {
    state[cooldownKey] = now;
  }
  return true;
}

function setExpression(name) {
  if (!state.model || !name) return;
  try {
    state.model.expression(name);
  } catch {}
}

function playMotion(name) {
  if (!state.model || !name) return;

  const isSleepMotion = SLEEP_MOTIONS.includes(name);
  const isManualWakeMotion = !isSleepMotion && state.sleepUntil > Date.now();

  try {
    state.model.motion(name);
    state.currentMotion = name;
    if (!isSleepMotion) {
      pauseLookModeTemporarily();
    }

    if (isSleepMotion) {
      state.sleepUntil = Date.now() + SLEEP_DURATION_MS;
      state.randomLookAnim = null;
      state.sleepExpressionApplied = false;
      enableSleepLock(state.model);
      applySleepExpression();
      state.model.internalModel.focusController.focus(0, 0, true);
    } else if (isManualWakeMotion) {
      state.sleepUntil = 0;
      state.sleepExpressionApplied = false;
      disableSleepLock(state.model);
      restoreDefaultExpression();
    }
  } catch {}
}

function isSleeping() {
  return state.sleepUntil > Date.now();
}

function restoreDefaultExpression() {
  if (state.defaultExpressionName) {
    setExpression(state.defaultExpressionName);
  }
}

function applySleepExpression() {
  if (!state.sleepExpressionName) return;
  setExpression(state.sleepExpressionName);
  state.sleepExpressionApplied = true;
}

function enableSleepLock(model) {
  const internalModel = model?.internalModel;
  if (!internalModel) return;

  if (state.savedEyeBlink === null) {
    state.savedEyeBlink = internalModel.eyeBlink ?? undefined;
  }

  if (internalModel.eyeBlink) {
    internalModel.eyeBlink = undefined;
  }
}

function disableSleepLock(model) {
  const internalModel = model?.internalModel;
  if (!internalModel) return;

  if (state.savedEyeBlink !== null) {
    internalModel.eyeBlink = state.savedEyeBlink;
  }
}

function forceSleepEyes(model) {
  const coreModel = model?.internalModel?.coreModel;
  if (!coreModel) return;

  coreModel.setParamFloat('PARAM_EYE_L_OPEN', 0);
  coreModel.setParamFloat('PARAM_EYE_R_OPEN', 0);
  coreModel.setParamFloat('PARAM_EYE_L_SMILE', 0);
  coreModel.setParamFloat('PARAM_EYE_R_SMILE', 0);
}

function installSleepEyeLock(model) {
  const internalModel = model?.internalModel;
  if (!internalModel || internalModel.__sleepEyeLockInstalled) return;

  const originalUpdate = internalModel.update.bind(internalModel);
  internalModel.update = (delta, now) => {
    originalUpdate(delta, now);
    if (isSleeping()) {
      enableSleepLock(model);
      if (!state.sleepExpressionApplied) {
        applySleepExpression();
      }
      forceSleepEyes(model);
    } else if (state.sleepExpressionApplied) {
      state.sleepExpressionApplied = false;
      disableSleepLock(model);
      restoreDefaultExpression();
    }
  };

  internalModel.__sleepEyeLockInstalled = true;
}

function clearModelState() {
  state.dragPointerId = null;
  state.dragMoved = false;
  state.motions = [];
  state.currentMotion = '';
  state.randomLookAnim = null;
  state.hoverStartedAt = 0;
  state.lastHoverReactionAt = 0;
  state.lastDragReactionAt = 0;
  state.lastTapReactionAt = 0;
  state.sleepUntil = 0;
  state.availableExpressions = [];
  state.defaultExpressionName = '';
  state.sleepExpressionName = '';
  state.sleepExpressionApplied = false;
  state.savedEyeBlink = null;
  resetPettingProgress();
  state.pettingCooldownUntil = 0;
  state.pettingLevel = 0;
  state.lookPauseUntil = 0;
  state.lookResumePending = false;
  hideDialogue();
}

function destroyCurrentModel() {
  if (!state.model) return;

  try {
    app.stage.removeChild(state.model);
  } catch {}

  try {
    state.model.destroy({ children: true, texture: false, baseTexture: false });
  } catch {}

  state.model = null;
  clearModelState();
}

function onPointerDown(event) {
  state.dragPointerId = event.data.pointerId ?? event.data.identifier ?? 0;
  state.dragLastX = event.data.global.x;
  state.dragLastY = event.data.global.y;
  state.dragLastScreenX = event.data.originalEvent?.screenX ?? 0;
  state.dragLastScreenY = event.data.originalEvent?.screenY ?? 0;
  state.dragMoved = false;
}

async function onPointerMove(event) {
  const pointerId = event.data.pointerId ?? event.data.identifier ?? 0;
  if (state.dragPointerId !== pointerId) return;

  const screenX = event.data.originalEvent?.screenX ?? state.dragLastScreenX;
  const screenY = event.data.originalEvent?.screenY ?? state.dragLastScreenY;
  const deltaX = screenX - state.dragLastScreenX;
  const deltaY = screenY - state.dragLastScreenY;

  if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
    state.dragMoved = true;
  }

  state.dragLastX = event.data.global.x;
  state.dragLastY = event.data.global.y;
  state.dragLastScreenX = screenX;
  state.dragLastScreenY = screenY;

  if (deltaX !== 0 || deltaY !== 0) {
    await window.petDesktop.dragWindow(deltaX, deltaY);
  }
}

function pickAvailable(items) {
  const names = items.filter(Boolean);
  return names.filter((name) => state.motions.includes(name));
}

function reactToTap(globalPoint) {
  if (!state.model) return;
  if (isSleeping()) return;
  const bounds = state.model.getBounds();
  const isInside =
    globalPoint.x >= bounds.x &&
    globalPoint.x <= bounds.x + bounds.width &&
    globalPoint.y >= bounds.y &&
    globalPoint.y <= bounds.y + bounds.height;

  if (!isInside) {
    return;
  }

  if (isFocusModeActive()) {
    const focusEntry = pickDialogueEntry('focusInterrupt');
    if (focusEntry?.motion && state.motions.includes(focusEntry.motion)) {
      playMotion(focusEntry.motion);
      state.lastTapReactionAt = Date.now();
    } else {
      playFeedbackMotion(getMotionCandidates('focus', 'interruptTap'), 'lastTapReactionAt', 1200);
    }
    speakDialogueEntry(focusEntry, { duration: 2800, chance: 0.6 });
    return;
  }

  if (state.currentMotion && state.motions.includes(state.currentMotion)) {
    playMotion(state.currentMotion);
    state.lastTapReactionAt = Date.now();
    speakForReason('tapBody');
    return;
  }

  const relativeY = (globalPoint.y - bounds.y) / Math.max(bounds.height, 1);
  const isHead = relativeY <= 0.34;
  const dialogueReason = isHead ? 'tapHead' : 'tapBody';
  const reactionPool = getMotionCandidates(isHead ? 'tapHead' : 'tapBody');
  const dialogueEntry = pickDialogueEntry(dialogueReason);

  if (dialogueEntry?.motion && state.motions.includes(dialogueEntry.motion)) {
    playMotion(dialogueEntry.motion);
    state.lastTapReactionAt = Date.now();
    speakDialogueEntry(dialogueEntry);
    return;
  }

  if (playFeedbackMotion(reactionPool, 'lastTapReactionAt', 1400)) {
    speakDialogueEntry(dialogueEntry);
    return;
  }

  const fallbackPool = getAvailableMotions(getMotionCandidates('tapFallback'));
  const fallbackMotion = fallbackPool.length
    ? pickWeightedEntry(fallbackPool, 'motion')?.motion
    : (state.idleMotions.find((name) => state.motions.includes(name)) || safeRandomMotion());

  if (fallbackMotion) {
    playMotion(fallbackMotion);
    state.lastTapReactionAt = Date.now();
    speakDialogueEntry(dialogueEntry);
  }
}

function onPointerUp(event) {
  const pointerId = event.data.pointerId ?? event.data.identifier ?? 0;
  if (state.dragPointerId !== pointerId) return;

  if (!state.dragMoved) {
    reactToTap(event.data.global);
  } else if (!isSleeping()) {
    const dragEntry = pickDialogueEntry('drag');
    if (dragEntry?.motion && state.motions.includes(dragEntry.motion)) {
      playMotion(dragEntry.motion);
      state.lastDragReactionAt = Date.now();
      speakDialogueEntry(dragEntry);
    } else if (playFeedbackMotion(getMotionCandidates('drag'), 'lastDragReactionAt', 2200)) {
      speakDialogueEntry(dragEntry);
    }
  }

  state.dragPointerId = null;
  state.dragMoved = false;
}

function wireInteractions(model) {
  model.interactive = true;
  model.cursor = 'grab';

  model.on('pointerdown', onPointerDown);
  model.on('pointermove', onPointerMove);
  model.on('pointerup', onPointerUp);
  model.on('pointerupoutside', onPointerUp);
}

async function openContextMenu() {
  await window.petDesktop.showContextMenu({
    motionGroups: buildMotionGroups(state.motions),
    currentMotion: state.currentMotion,
    lookMode: state.lookMode
  });
}

function updateModelFocus(clientX, clientY) {
  if (!state.model || state.lookMode !== 'follow') return;
  if (isSleeping()) {
    state.model.internalModel.focusController.focus(0, 0, false);
    return;
  }
  if (performance.now() < state.lookPauseUntil) {
    state.model.internalModel.focusController.focus(0, 0, true);
    return;
  }
  const now = performance.now();
  const moved =
    Math.abs(clientX - state.lastCursorLocalX) > 1 ||
    Math.abs(clientY - state.lastCursorLocalY) > 1;

  if (moved) {
    state.lastCursorMoveAt = now;
  }

  if (now - state.lastCursorMoveAt > 1600) {
    state.model.internalModel.focusController.focus(0, 0, false);
    return;
  }

  state.model.focus(clientX, clientY);
}

async function pollGlobalCursorFocus() {
  if (!state.model || state.isPollingCursor) return;

  const now = performance.now();
  if (now - state.lastCursorPollAt < 90) return;

  state.isPollingCursor = true;
  state.lastCursorPollAt = now;

  try {
    const context = await window.petDesktop.getCursorContext();
    if (!context) return;

    const localX = context.cursor.x - context.windowBounds.x;
    const localY = context.cursor.y - context.windowBounds.y;

    if (state.lookMode === 'follow') {
      updateModelFocus(localX, localY);
    }

    state.lastCursorLocalX = localX;
    state.lastCursorLocalY = localY;
  } catch {
  } finally {
    state.isPollingCursor = false;
  }
}

function applyLookMode() {
  if (!state.model) return;

  if (isSleeping()) {
    state.randomLookAnim = null;
    state.model.internalModel.focusController.focus(0, 0, true);
    return;
  }

  if (performance.now() < state.lookPauseUntil) {
    state.model.internalModel.focusController.focus(0, 0, true);
    return;
  }

  if (state.lookMode === 'off') {
    state.randomLookX = window.innerWidth / 2;
    state.randomLookY = window.innerHeight * 0.38;
    state.randomLookAnim = null;
    state.model.internalModel.focusController.focus(0, 0, true);
    return;
  }

  if (state.lookMode === 'random') {
    if (!state.randomLookAnim) {
      startRandomLookAnimation(true);
    }
    state.model.focus(state.randomLookX, state.randomLookY);
    return;
  }

  state.randomLookAnim = null;
  state.lastCursorMoveAt = performance.now();
  state.model.internalModel.focusController.focus(0, 0, true);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function createRandomLookTarget() {
  const shouldRecenter = Math.random() < 0.16;
  if (shouldRecenter) {
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight * (0.3 + Math.random() * 0.18)
    };
  }

  return {
    x: -window.innerWidth * 0.3 + Math.random() * window.innerWidth * 1.6,
    y: window.innerHeight * (0.08 + Math.random() * 0.84)
  };
}

function startRandomLookAnimation(reset = false) {
  const now = performance.now();
  const fromX = reset ? window.innerWidth / 2 : state.randomLookX;
  const fromY = reset ? window.innerHeight * 0.38 : state.randomLookY;
  const target = createRandomLookTarget();
  const moveDuration = 1500 + Math.random() * 2400;
  const holdDuration = 350 + Math.random() * 1200;

  state.randomLookAnim = {
    fromX,
    fromY,
    toX: target.x,
    toY: target.y,
    moveStart: now,
    moveEnd: now + moveDuration,
    holdEnd: now + moveDuration + holdDuration
  };
}

function updateRandomLookAnimation() {
  if (!state.model || state.lookMode !== 'random' || isSleeping()) return;
  if (performance.now() < state.lookPauseUntil) {
    state.model.internalModel.focusController.focus(0, 0, true);
    return;
  }
  if (!state.randomLookAnim) {
    startRandomLookAnimation();
  }

  const now = performance.now();
  const anim = state.randomLookAnim;

  if (now >= anim.holdEnd) {
    state.randomLookX = anim.toX;
    state.randomLookY = anim.toY;
    startRandomLookAnimation();
    return;
  }

  if (now >= anim.moveEnd) {
    state.randomLookX = anim.toX;
    state.randomLookY = anim.toY;
  } else {
    const progress = (now - anim.moveStart) / Math.max(anim.moveEnd - anim.moveStart, 1);
    const eased = easeInOutSine(clamp(progress, 0, 1));
    state.randomLookX = anim.fromX + (anim.toX - anim.fromX) * eased;
    state.randomLookY = anim.fromY + (anim.toY - anim.fromY) * eased;
  }

  state.model.focus(state.randomLookX, state.randomLookY);
}

function updateLookResumeState() {
  if (!state.model || !state.lookResumePending) return;
  if (performance.now() < state.lookPauseUntil) return;

  state.lookPauseUntil = 0;
  state.lookResumePending = false;
  applyLookMode();
}

function startIdleLoop() {
  window.setInterval(() => {
    if (!state.model || isSleeping()) return;
    if (isFocusModeActive()) {
      const focusPool = getAvailableMotions(getMotionCandidates('focus', 'idle'));
      const focusMotion = focusPool.length ? pickWeightedEntry(focusPool, 'motion')?.motion : null;
      if (focusMotion) {
        playMotion(focusMotion);
      }
      return;
    }
    const pool = getIdleMotionPool();
    const motion = pool.length ? pickWeightedEntry(pool, 'motion')?.motion : null;
    if (motion) {
      playMotion(motion);
    }
  }, 12000);
}

function maybeTriggerHoverReaction() {
  if (!state.model || isSleeping()) return;
  if (isFocusModeActive()) return;

  const now = Date.now();
  const x = state.lastCursorLocalX;
  const y = state.lastCursorLocalY;
  const isNearHead = isPointInHeadArea(x, y);

  if (!isNearHead) {
    state.hoverStartedAt = 0;
    return;
  }

  if (!state.hoverStartedAt) {
    state.hoverStartedAt = now;
    return;
  }

  if (now - state.hoverStartedAt < HOVER_REACTION_DELAY_MS) return;
  if (now - state.lastHoverReactionAt < HOVER_REACTION_COOLDOWN_MS) return;

  const hoverEntry = pickDialogueEntry('hover');
  if (hoverEntry?.motion && state.motions.includes(hoverEntry.motion)) {
    playMotion(hoverEntry.motion);
    state.lastHoverReactionAt = now;
    speakDialogueEntry(hoverEntry, { duration: 2800 });
    state.hoverStartedAt = now + 1000;
    return;
  }

  if (playFeedbackMotion(getMotionCandidates('hover'), 'lastHoverReactionAt', HOVER_REACTION_COOLDOWN_MS)) {
    speakDialogueEntry(hoverEntry, { duration: 2800 });
    state.hoverStartedAt = now + 1000;
  }
}

function maybeTriggerCompanionTalk() {
  if (state.mode !== 'companion') return;
  if (!state.proactiveDialogueEnabled) return;
  if (!state.model || isSleeping() || state.dialogueVisible) return;
  if (state.dragPointerId !== null) return;

  const now = Date.now();
  if (now - state.lastCompanionTalkAt < 26000) return;

  const threshold = 26000 + Math.random() * 32000;
  if (now - state.lastCompanionTalkAt < threshold) return;

  state.lastCompanionTalkAt = now;
  const ambientEntry = pickDialogueEntry('ambient');

  if (ambientEntry?.motion && state.motions.includes(ambientEntry.motion)) {
    playMotion(ambientEntry.motion);
  } else if (Math.random() < 0.48) {
    playFeedbackMotion(getMotionCandidates('companion', 'ambient'), null, 0);
  }

  speakDialogueEntry(ambientEntry, { duration: 2600, chance: 0.45 });
}

async function updateFocusSessionState() {
  if (!state.focusSession) {
    updateFocusChip();
    return;
  }

  if (!isFocusModeActive()) {
    if (state.mode === 'focus' && !state.focusNotifiedComplete) {
      state.focusNotifiedComplete = true;
      await finishFocusSession(true);
    }
    updateFocusChip();
    return;
  }

  updateFocusChip();
}

function updateDialogueMouth() {
  const coreModel = state.model?.internalModel?.coreModel;
  if (!coreModel) return;

  if (!state.mouthAnimationEnabled) {
    try {
      coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', 0);
      coreModel.setParamFloat('PARAM_MOUTH_FORM', 0);
    } catch {}
    return;
  }

  if (isSleeping()) {
    try {
      coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', 0);
    } catch {}
    return;
  }

  const now = performance.now();
  const isSpeaking = state.dialogueVisible && now < state.dialogueSpeakingUntil;

  if (!isSpeaking) {
    try {
      coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', 0);
      coreModel.setParamFloat('PARAM_MOUTH_FORM', 0);
    } catch {}
    return;
  }

  state.dialogueMouthPhase += app.ticker.deltaMS * 0.018;

  const primary = Math.sin(state.dialogueMouthPhase);
  const secondary = Math.sin(state.dialogueMouthPhase * 2.17 + 0.6);
  const openness = clamp(0.08 + (primary * 0.17 + secondary * 0.08 + 0.22), 0.04, 0.5);
  const mouthForm = clamp(Math.sin(state.dialogueMouthPhase * 0.68) * 0.12, -0.16, 0.16);

  try {
    coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', openness);
    coreModel.setParamFloat('PARAM_MOUTH_FORM', mouthForm);
  } catch {}
}

function isPointInRect(x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function isCursorOverInteractiveArea() {
  if (state.modal) {
    return true;
  }

  if (state.dragPointerId !== null) {
    return true;
  }

  const x = state.lastCursorLocalX;
  const y = state.lastCursorLocalY;

  if (state.model) {
    const bounds = state.model.getBounds();
    const insideModel =
      x >= bounds.x &&
      x <= bounds.x + bounds.width &&
      y >= bounds.y &&
      y <= bounds.y + bounds.height;

    if (insideModel) {
      return true;
    }
  }

  if (state.dialogueVisible) {
    const rect = dialogueRoot.getBoundingClientRect();
    if (isPointInRect(x, y, rect)) {
      return true;
    }
  }

  return false;
}

async function syncClickThrough() {
  const nextIgnore = !isCursorOverInteractiveArea();
  if (nextIgnore === state.clickThrough) {
    return;
  }

  state.clickThrough = nextIgnore;

  try {
    await window.petDesktop.setClickThrough(nextIgnore);
  } catch {}
}

async function persistModelPath(modelPath) {
  try {
    const config = await window.petDesktop.updateConfig({ modelPath });
    if (config?.modelPath) {
      state.modelPath = config.modelPath;
    }
  } catch {}
}

async function loadModelWithFallback(primaryPath) {
  const candidates = [primaryPath, state.defaultModelPath, DEFAULT_MODEL_PATH]
    .filter(Boolean)
    .filter((value, index, items) => items.indexOf(value) === index);

  let lastError = null;

  for (const candidate of candidates) {
    try {
      await loadModel(candidate);
      if (candidate !== primaryPath) {
        await persistModelPath(candidate);
      }
      return;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('No available model could be loaded.');
}

async function loadModel(modelPath = state.modelPath) {
  const nextModelPath = modelPath || state.modelPath || DEFAULT_MODEL_PATH;
  const source = normalizeModelPath(nextModelPath);
  const model = await Live2DModel.from(source, {
    autoInteract: false,
    autoUpdate: true
  });
  const settings = model.internalModel.settings;

  destroyCurrentModel();

  state.modelPath = nextModelPath;
  state.currentCharacterKey = resolveCharacterKey(nextModelPath);
  state.currentCharacterName = resolveCharacterName(nextModelPath);
  state.model = model;
  state.motions = listMotions(settings);
  state.availableExpressions = (settings.expressions || []).map((item) => item.name);
  state.defaultExpressionName = state.availableExpressions.includes('default')
    ? 'default'
    : (state.availableExpressions.includes('kokoro_default') ? 'kokoro_default' : '');
  state.sleepExpressionName = state.availableExpressions.includes('smile02')
    ? 'smile02'
    : (state.availableExpressions.includes('kokoro_smile02') ? 'kokoro_smile02' : '');
  installSleepEyeLock(model);

  fitModel(model);
  wireInteractions(model);
  app.stage.addChild(model);

  restoreDefaultExpression();

  applyLookMode();

  const firstIdle = state.idleMotions.find((name) => state.motions.includes(name));
  if (firstIdle) {
    playMotion(firstIdle);
  }
}

window.addEventListener('resize', () => {
  if (state.model) {
    fitModel(state.model);
  }
});

window.addEventListener('contextmenu', async (event) => {
  event.preventDefault();
  await openContextMenu();
});

window.addEventListener('mousemove', (event) => {
  maybeTriggerPetting(event);
  updateModelFocus(event.clientX, event.clientY);
  state.lastCursorLocalX = event.clientX;
  state.lastCursorLocalY = event.clientY;
});

panelBackdrop.addEventListener('mousedown', (event) => {
  if (event.target === panelBackdrop) {
    closeModal(null);
  }
});

panelCancel.addEventListener('click', () => {
  closeModal(null);
});

panelCard.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!state.modal?.submit) {
    closeModal(null);
    return;
  }

  const result = state.modal.submit();
  if (result === null) {
    return;
  }

  closeModal(result);
});

window.addEventListener('keydown', (event) => {
  if (!state.modal) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeModal(null);
  }
});

app.ticker.add(() => {
  pollGlobalCursorFocus();
  updateFocusSessionState();
  updateLookResumeState();
  updateRandomLookAnimation();
  maybeTriggerHoverReaction();
  maybeTriggerCompanionTalk();
  updateDialogueMouth();
  syncClickThrough();
});

window.petDesktop.onMenuAction((payload) => {
  if (!payload) return;

  if (payload.type === 'switch-model-path' && payload.path) {
    loadModelWithFallback(payload.path).catch((error) => {
      console.error('Failed to switch model:', error);
    });
  }

  if (payload.type === 'play-motion' && payload.motion) {
    playMotion(payload.motion);
    applyLookMode();
    if (!isSleeping()) {
      speakForReason(isFocusModeActive() ? 'focusInterrupt' : 'manual', { duration: 2500, chance: 0.58 });
    }
  }

  if (payload.type === 'pin-changed') {
    state.lastPinState = Boolean(payload.value);
  }

  if (payload.type === 'set-look-mode') {
    state.lookMode = payload.value || 'follow';
    applyLookMode();
  }

  if (payload.type === 'set-mode') {
    setMode(payload.value || 'custom');
    if (state.mode !== 'focus') {
      state.focusSession = null;
    }
    persistModeSettings({
      mode: state.mode,
      focusSession: state.focusSession,
      lastNonFocusMode: state.mode === 'focus' ? state.lastNonFocusMode : state.mode
    });
    if (state.mode === 'companion') {
      state.lastCompanionTalkAt = Date.now() - 20000;
      const modeEntry = pickDialogueEntry('modeEnter') || { text: '今天就让我陪着你吧。' };
      speakDialogueEntry(modeEntry, {
        duration: 2600,
        chance: 0.42,
        allowDialogueMotion: true
      });
    }
  }

  if (payload.type === 'prompt-start-focus') {
    startFocusSessionFromPrompt(payload.resumeMode || state.lastNonFocusMode || 'custom');
  }

  if (payload.type === 'stop-focus') {
    const stoppedLines = getModeDialogueLines('focus', 'focusStopped');
    state.focusSession = null;
    setMode(payload.value || state.lastNonFocusMode || 'custom');
    persistModeSettings({
      mode: state.mode,
      focusSession: null,
      lastNonFocusMode: state.mode
    });
    const stoppedEntry = pickWeightedEntry(
      stoppedLines.length ? stoppedLines : [{ text: '这一轮先停在这里吧。' }],
      'text'
    );
    speakDialogueEntry(stoppedEntry, {
      duration: 2400,
      chance: 0.34,
      allowDialogueMotion: true
    });
  }

  if (payload.type === 'prompt-set-nickname') {
    promptNickname(payload.value || state.nickname || '');
  }

  if (payload.type === 'nickname-changed') {
    state.nickname = typeof payload.value === 'string' ? payload.value : '';
  }

  if (payload.type === 'show-help') {
    showHelpModal();
  }

  if (payload.type === 'setting-changed') {
    if (payload.key === 'showDialogueBubble') {
      state.showDialogueBubble = Boolean(payload.value);
      if (!state.showDialogueBubble) {
        hideDialogue();
      }
    }

    if (payload.key === 'proactiveDialogueEnabled') {
      state.proactiveDialogueEnabled = Boolean(payload.value);
    }

    if (payload.key === 'mouthAnimationEnabled') {
      state.mouthAnimationEnabled = Boolean(payload.value);
      if (!state.mouthAnimationEnabled) {
        const coreModel = state.model?.internalModel?.coreModel;
        if (coreModel) {
          try {
            coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', 0);
            coreModel.setParamFloat('PARAM_MOUTH_FORM', 0);
          } catch {}
        }
      }
    }
  }
});

window.petDesktop.getConfig()
  .then((config) => {
    if (config?.modelPath) {
      state.modelPath = config.modelPath;
    }
    if (config?.defaultModelPath) {
      state.defaultModelPath = config.defaultModelPath;
    }
    if (typeof config?.nickname === 'string') {
      state.nickname = config.nickname;
    }
    if (typeof config?.mode === 'string') {
      setMode(config.mode);
    }
    if (typeof config?.lastNonFocusMode === 'string' && ['custom', 'companion'].includes(config.lastNonFocusMode)) {
      state.lastNonFocusMode = config.lastNonFocusMode;
    }
    state.focusSession = config?.focusSession || null;
    if (typeof config?.showDialogueBubble === 'boolean') {
      state.showDialogueBubble = config.showDialogueBubble;
    }
    if (typeof config?.proactiveDialogueEnabled === 'boolean') {
      state.proactiveDialogueEnabled = config.proactiveDialogueEnabled;
    }
    if (typeof config?.mouthAnimationEnabled === 'boolean') {
      state.mouthAnimationEnabled = config.mouthAnimationEnabled;
    }
    return loadModelWithFallback(state.modelPath || state.defaultModelPath);
  })
  .catch((error) => {
    console.error(error);
  });

startIdleLoop();
