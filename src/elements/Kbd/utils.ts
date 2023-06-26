let isMac: boolean = false;
try {
  if (navigator) {
    isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  }
} catch (e) {
  console.warn(e);
}

export const MODIFIER_KEY = isMac ? '⌘' : 'CTRL';

export function getHotkeyText(hotkey: string) {
  return hotkey
    .replace('modifier', MODIFIER_KEY)
    .replace('mod', MODIFIER_KEY)
    .replace('meta', MODIFIER_KEY)
    .replace('shift', '⌥')
    .replace('plus', '+')
    .replace('minus', '-');
}
