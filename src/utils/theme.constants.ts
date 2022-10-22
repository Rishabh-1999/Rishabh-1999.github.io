export const themeConstants = {
    dark: "dark",
    light: "light",
};

export const oppositeThemeConstants: {
    [key: string]: string;
} = {
    [themeConstants.dark]: themeConstants.light,
    [themeConstants.light]: themeConstants.dark,
};
