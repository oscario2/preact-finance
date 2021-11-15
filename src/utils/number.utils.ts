/**
 * round base + decimals to N digits
 * @param input
 * @param digits
 * @returns
 */
export const getNDigits = (input: number, digits: number = 4): string => {
    const base = input.toString().split('.')[0];
    const round = input.toFixed(digits - base.length);

    return round;
};

/**
 * denote number to K/M/B
 * @param n
 */
export const getDenoted = (n: number) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
};
