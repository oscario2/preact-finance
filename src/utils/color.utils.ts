const colorMap = {} as Record<string, string>;

/**
 * load css variable color
 * @param name
 * @returns
 */
export const getCssColor = (name: string) => {
    if (colorMap[name]) return colorMap[name];

    colorMap[name] = window
        .getComputedStyle(document.body)
        .getPropertyValue(name);

    return colorMap[name];
};
