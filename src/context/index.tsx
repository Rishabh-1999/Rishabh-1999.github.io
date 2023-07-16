/**
 * Owner: Rishabh Anand
 * Desc: Context
 **/

import { createContext, Dispatch, useReducer } from "react";

/* Utils */
import { getItemFromLocalStorage } from "utils/storage";

/* Data */
import { AppSettings } from "data";

/* Constants */
import { ThemeBrowserStorageKeyStr, ContextConstants } from "constants/index";

/* Types */
import type { AppContextType, AppReducerActionType } from "./context.type";
import { ThemeModesTypes } from "types";

/* Re-Export */
export { ContextConstants };

const initalContextData: AppContextType = {
  themeMode:
    (getItemFromLocalStorage(ThemeBrowserStorageKeyStr) as ThemeModesTypes) ??
    AppSettings.prefferedThemeMode,
};

export const AppContext = createContext<{
  state: AppContextType;
  dispatch: Dispatch<AppReducerActionType>;
}>({ state: initalContextData, dispatch: () => null });

function mainReducer(state: AppContextType, action: AppReducerActionType) {
  switch (action.type) {
    case ContextConstants.SET_THEME_MODE: {
      return {
        ...state,
        themeMode: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const AppContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(mainReducer, initalContextData);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
