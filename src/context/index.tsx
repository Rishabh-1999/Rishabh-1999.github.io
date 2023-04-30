/**
 * Owner: Rishabh Anand
 * Desc: React Context - Theme
 **/

import React, { Dispatch, useReducer } from "react";

/* Constants */
import { ThemeBrowserStorage } from "constants/index";

/* Types */
import { ContextType, ThemeModeTypes, ReducerAction } from "types";

/* Utils */
import { getItemFromLocalStorage } from "utils/storage";

/* Context Constants */
import { ContextConstants } from "./context.constants";

const initalContext: ContextType = {
  themeMode:
    (getItemFromLocalStorage(ThemeBrowserStorage) as ThemeModeTypes) ??
    ThemeModeTypes.DARK,
};

export const AppContext = React.createContext<{
  state: ContextType;
  dispatch: Dispatch<ReducerAction>;
}>({ state: initalContext, dispatch: () => null });

function mainReducer(state: ContextType, action: ReducerAction) {
  switch (action.type) {
    case ContextConstants.TOGGLE_THEME_MODE: {
      const tempMode =
        action?.payload === ThemeModeTypes.DARK
          ? ThemeModeTypes.LIGHT
          : ThemeModeTypes.DARK;

      return {
        ...state,
        themeMode: tempMode,
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
  const [state, dispatch] = useReducer(mainReducer, initalContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
