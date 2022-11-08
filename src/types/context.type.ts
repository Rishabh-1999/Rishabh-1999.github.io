/* Data */
import ThemeTypes from "data/theme";

export type ThemeType = `${ThemeTypes}`;

export interface ContextType {
    theme: ThemeType;
    setTheme: Function;
}
