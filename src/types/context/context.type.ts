/*
 * Owner: Rishabh Anand
 * Desc: Context Type
 */

/* Data */
import { ThemeModeTypes } from "types/common/theme.type";

export interface ContextType {
  themeMode: ThemeModeTypes;
}

export type ReducerAction = {
  type: string;
  payload?: any;
};
