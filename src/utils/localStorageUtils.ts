const showMenu = 'showMenu';
const showQuest = 'showQuest';

export function saveShowMenu(value: boolean): void {
  localStorage.setItem(showMenu, value.toString());
}

export function getShowMenu(): boolean {
  const storedValue = localStorage.getItem(showMenu);
  return storedValue ? JSON.parse(storedValue) : true;
}

export function saveShowQuest(value: boolean): void {
  localStorage.setItem(showQuest, value.toString());
}

export function getShowQuest(): boolean {
  const storedValue = localStorage.getItem(showQuest);
  return storedValue ? JSON.parse(storedValue) : true;
}
