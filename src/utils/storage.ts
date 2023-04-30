import { BrowserStorageType } from "types/common/browserStorage.type";

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
export function setItemStorage(
  storageType: BrowserStorageType,
  key: string,
  item: string
): void {
  const storageInst =
    storageType === BrowserStorageType.LOCAL ? localStorage : sessionStorage;

  storageInst.setItem(key, item);
}

export function getItemStorage(
  storageType: BrowserStorageType,
  key: string
): string | null {
  const storageInst =
    storageType === BrowserStorageType.LOCAL ? localStorage : sessionStorage;

  return storageInst.getItem(key);
}
