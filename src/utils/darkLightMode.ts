import React from "react";

/* Constants */
import { ThemeBrowserStorage } from "../constants";

/* Types */
import { ThemeModeTypes } from "types/common/theme.type";

/* Utils */
import {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
} from "utils/storage";
import { AppContext } from "context";
import { ContextConstants } from "context/context.constants";

function getOppositeTheme(themeType: ThemeModeTypes): ThemeModeTypes {
  return ThemeModeTypes.DARK === themeType
    ? ThemeModeTypes.LIGHT
    : ThemeModeTypes.DARK;
}

export function useDarkTheme() {
  const { state, dispatch } = React.useContext(AppContext);

  const [theme, setTheme] = React.useState<ThemeModeTypes>(
    (getItemFromLocalStorage(ThemeBrowserStorage) as ThemeModeTypes) ??
      ThemeModeTypes.DARK
  );

  const toggleDarkTheme = () => {
    setTheme((oldValue) => getOppositeTheme(oldValue));
  };

  React.useEffect(() => {
    const root = window.document.body;

    root.classList.remove(getOppositeTheme(theme));
    root.classList.add(theme);

    setItemFromLocalStorage(ThemeBrowserStorage, theme);
    dispatch({
      type: ContextConstants.TOGGLE_THEME_MODE,
    });
  }, [theme]);

  return { theme, toggleDarkTheme };
}
