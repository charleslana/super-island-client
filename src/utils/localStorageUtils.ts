const showMenu = 'showMenu';
const showQuest = 'showQuest';
const homeMapPosition = 'homeMapPosition';

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

export function saveHomeMapPosition(position: { x: number; y: number }): void {
  localStorage.setItem(homeMapPosition, JSON.stringify(position));
}

export function getHomeMapPosition(): { x: number; y: number } | null {
  const storedValue = localStorage.getItem(homeMapPosition);
  return storedValue ? JSON.parse(storedValue) : null;
}
