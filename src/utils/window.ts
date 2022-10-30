export const widths: { [key: string]: number } = {
    xsWidth: 0,
    smWidth: 480,
    mdWidth: 768,
    lgWidth: 1024,
};

export function getWindowDimension(): number {
    return window.innerWidth;
}
