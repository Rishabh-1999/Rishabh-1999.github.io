/**
 * @Owner: Rishabh Anand
 * @Desc: Utils - Storage utility functions
 **/

/* Types */
import { BrowserStorageTypes } from "types";

/** Local Storage **/
/**
 * @param {string} key
 * @return {(string | null)}
 */
function getItemFromLocalStorage(key: string): string | null {
  return localStorage.getItem(key);
}

/**
 * @param {string} key
 * @param {string} item
 * @returns {void}
 */
function setItemFromLocalStorage(key: string, item: string): void {
  localStorage.setItem(key, item);
}

/** Session Storage **/
/**
 * @param {string} key
 * @return {(string | null)}
 */
function getItemFromSessionStorage(key: string): string | null {
  return sessionStorage.getItem(key);
}

/**
 * @param {string} key
 * @param {string} item
 * @returns {void}
 */
function setItemFromSessionStorage(key: string, item: string): void {
  sessionStorage.setItem(key, item);
}

/** Common **/
/**
 * @param {BrowserStorageTypes} storageType
 * @param {string} key
 * @param {string} item
 * @returns {void}
 */
export function setItemInBrowserStorage(
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

/**
 * @param {BrowserStorageTypes} storageType
 * @param {string} key
 * @return {(T | null)}
 * @export
 * @template T
 */
export function getItemFromBrowserStorage<T = String>(
  storageType: BrowserStorageTypes,
  key: string
): T | null {
  const getItemFun =
    storageType === BrowserStorageTypes.LOCAL
      ? getItemFromLocalStorage
      : getItemFromSessionStorage;

  return getItemFun(key) as T;
}
