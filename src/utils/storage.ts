export function getItemFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
}

export function setItemFromLocalStorage(key: string, item: string): void {
    return localStorage.setItem(key, item);
}
