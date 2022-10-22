import React, { useEffect } from "react";

/* Utils */
import {
    getItemFromLocalStorage,
    setItemFromLocalStorage,
} from "utils/storage";

/* Constants */
import { themeConstants, oppositeThemeConstants } from "./theme.constants";

/* Type */
type ThemeType = "dark" | "light";

export function useDarkTheme() {
    const [theme, setTheme] = React.useState<ThemeType>(
        (getItemFromLocalStorage("theme") as ThemeType) ?? themeConstants.dark
    );

    const toggleDarkTheme = () => {
        setTheme((oldValue) => oppositeThemeConstants[oldValue] as ThemeType);
    };

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(oppositeThemeConstants[theme]);
        root.classList.add(theme);

        setItemFromLocalStorage("theme", theme);
    }, [theme]);

    return { theme, toggleDarkTheme };
}
