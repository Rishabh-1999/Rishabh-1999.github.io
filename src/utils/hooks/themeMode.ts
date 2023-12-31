/**
 * @Owner: Rishabh Anand
 * @Desc: Utils - Hooks - Theme Mode
 **/

import { useEffect, useContext } from "react";

/* Constants */
import { THEME_BROWSER_STORAGE_KEY_Str } from "constants/index";

/* Context */
import { AppContext, ContextConstants } from "context";

/* Utils */
import { setItemInBrowserStorage } from "utils/storage";

/* Types */
import { BrowserStorageTypes, ThemeModesTypes } from "types/index";

/**
 * @param {ThemeModesTypes} themeType
 * @return {ThemeModesTypes}
 */
function getOppositeTheme(themeType: ThemeModesTypes): ThemeModesTypes {
  return ThemeModesTypes.DARK === themeType
    ? ThemeModesTypes.LIGHT
    : ThemeModesTypes.DARK;
}

export function useThemeMode() {
  const root = window.document.body;

  const { dispatch, state } = useContext(AppContext);

  useEffect(() => {
    if (!root.classList.contains(state.themeMode)) {
      root.classList.add(state.themeMode);

      setItemInBrowserStorage(
        BrowserStorageTypes.LOCAL,
        THEME_BROWSER_STORAGE_KEY_Str,
        state.themeMode
      );
    }
  }, []);

  const toggleTheme = () => {
    const oppositeTheme = getOppositeTheme(state.themeMode);

    dispatch({
      type: ContextConstants.SET_THEME_MODE,
      payload: oppositeTheme,
    });

    root.classList.remove(state.themeMode);
    root.classList.add(oppositeTheme);

    setItemInBrowserStorage(
      BrowserStorageTypes.LOCAL,
      THEME_BROWSER_STORAGE_KEY_Str,
      oppositeTheme
    );
  };

  return { theme: state.themeMode, toggleTheme };
}
