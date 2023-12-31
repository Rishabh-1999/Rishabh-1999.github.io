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
import { THEME_BROWSER_STORAGE_KEY_Str } from "../constants";

/* Types */
import type { AppContextType, AppReducerActionType } from "./context.type";
import type { ThemeModesTypes } from "types";
import { BrowserStorageTypes } from "types/common/browser.type";

/* Re-Export */
export { ContextConstants };

const initialContextData: AppContextType = {
  themeMode:
    getItemFromBrowserStorage<ThemeModesTypes>(
      BrowserStorageTypes.LOCAL,
      THEME_BROWSER_STORAGE_KEY_Str
    ) ?? AppSettings.defaultTheme,
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
