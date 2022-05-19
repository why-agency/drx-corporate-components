export const fontCalc = (maxFontSize, maxPageWidth) => {
    return `${((maxFontSize * 16) / maxPageWidth) * 100}vw`;
};

export const letterSpacingCalc = (maxLetterSpacing, maxPageWidth) => {
    return `${(maxLetterSpacing / maxPageWidth) * 100}vw`;
};

export const lineHeightCalc = (maxLineHeight, maxPageWidth) => {
    return `${(maxLineHeight / 100 / maxPageWidth) * 100}vw`;
};
