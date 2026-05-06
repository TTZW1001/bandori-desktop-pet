const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('petDesktop', {
  getConfig() {
    return ipcRenderer.invoke('pet:get-config');
  },
  updateConfig(patch) {
    return ipcRenderer.invoke('pet:update-config', patch);
  },
  dragWindow(deltaX, deltaY) {
    return ipcRenderer.invoke('pet:drag-window', { deltaX, deltaY });
  },
  getCursorContext() {
    return ipcRenderer.invoke('pet:get-cursor-context');
  },
  setClickThrough(ignore) {
    return ipcRenderer.invoke('pet:set-click-through', ignore);
  },
  showContextMenu(payload) {
    return ipcRenderer.invoke('pet:show-context-menu', payload);
  },
  togglePin() {
    return ipcRenderer.invoke('pet:toggle-pin');
  },
  minimize() {
    return ipcRenderer.invoke('pet:minimize');
  },
  close() {
    return ipcRenderer.invoke('pet:close');
  },
  onMenuAction(callback) {
    const listener = (_event, payload) => callback(payload);
    ipcRenderer.on('pet:menu-action', listener);
    return () => {
      ipcRenderer.removeListener('pet:menu-action', listener);
    };
  }
});
