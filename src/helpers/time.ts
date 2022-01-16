export const to12hClock = (hour: number): number => {
    return hour > 12 ? hour - 12 : hour;
};

type TimeObject = {
    hours: number;
    minutes: number;
    seconds: number;
};

export const getTime = (): TimeObject => {
    const date = new Date();
    const hours = ((to12hClock(17) + (date.getMinutes() / 60)) / 12) * 360;
    const minutes = (date.getMinutes() / 60) * 360;
    const seconds = (date.getSeconds() / 60) * 360;
    return { hours, minutes, seconds };
};

export const getUTC = (): number => {
    const date = new Date();
    let utc = 17 - date.getTimezoneOffset() / 60 - date.getHours();
    return utc;
}