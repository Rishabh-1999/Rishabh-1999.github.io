/* Types */
import { BrowserStorageTypes } from "types/common/browser.type";

// Local Storage
export function getItemFromLocalStorage(key: string): string | null {
  return localStorage.getItem(key);
}

export function setItemFromLocalStorage(key: string, item: string): void {
  localStorage.setItem(key, item);
}

// Session Storage
export function getItemFromSessionStorage(key: string): string | null {
  return sessionStorage.getItem(key);
}

export function setItemFromSessionStorage(key: string, item: string): void {
  sessionStorage.setItem(key, item);
}

// Common
export function setItemInStorage(
  storageType: BrowserStorageTypes,
  key: string,
  item: string
): void {
  const setItemFunc =
    storageType === BrowserStorageTypes.LOCAL
      ? setItemFromLocalStorage
      : setItemFromSessionStorage;

  setItemFunc(key, item);
}

export function getItemFromStorage(
  storageType: BrowserStorageTypes,
  key: string
): string | null {
  const getItemFun =
    storageType === BrowserStorageTypes.LOCAL
      ? getItemFromLocalStorage
      : getItemFromSessionStorage;

  return getItemFun(key);
}
