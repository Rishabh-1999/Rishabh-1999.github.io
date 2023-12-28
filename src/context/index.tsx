/**
 * @Owner: Rishabh Anand
 * @Desc: Context
 **/

import { createContext, Dispatch, useReducer } from "react";

/* Utils */
import { getItemFromBrowserStorage } from "utils/storage";

/* Data */
import { AppSettings } from "data";

/* Constants */
import { ContextConstants } from "./context.constants";
import { ThemeBrowserStorageKeyStr } from "../constants/index";

/* Types */
import type { AppContextType, AppReducerActionType } from "./context.type";
import { ThemeModesTypes } from "types";
import { BrowserStorageTypes } from "types/common/browser.type";

/* Re-Export */
export { ContextConstants };

const initialContextData: AppContextType = {
  themeMode:
    getItemFromBrowserStorage<ThemeModesTypes>(
      BrowserStorageTypes.LOCAL,
      ThemeBrowserStorageKeyStr
    ) ?? AppSettings.preferredThemeMode,
};

export const AppContext = createContext<{
  state: AppContextType;
  dispatch: Dispatch<AppReducerActionType>;
}>({ state: initialContextData, dispatch: () => null });

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
  const [state, dispatch] = useReducer(mainReducer, initialContextData);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
