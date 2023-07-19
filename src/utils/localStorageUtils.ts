export function saveShowMenu(value: boolean): void {
  localStorage.setItem('showMenu', value.toString());
}

export function getShowMenu(): boolean {
  const storedValue = localStorage.getItem('showMenu');
  return storedValue ? JSON.parse(storedValue) : true;
}
