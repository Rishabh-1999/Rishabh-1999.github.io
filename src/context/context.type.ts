/**
 * @Owner: Rishabh Anand
 * @Desc: Context - Types
 **/

/* Types */
import { ThemeModesTypes } from "../types/common/index.type";

export interface AppContextType {
  themeMode: ThemeModesTypes;
}

export type AppReducerActionType = {
  type: string;
  payload?: any;
};