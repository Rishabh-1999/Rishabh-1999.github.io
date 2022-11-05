import React from "react";

/* Data */
import { ContextType, ThemeType } from "types/context.type";

/* Data */
import { ThemeTypes } from "data/theme";

export const ThemeContext = React.createContext<ContextType>({
    theme: ThemeTypes.Dark,
} as ContextType);

export const ThemeProvider = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [theme, setTheme] = React.useState<ThemeType>(ThemeTypes.Dark);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
