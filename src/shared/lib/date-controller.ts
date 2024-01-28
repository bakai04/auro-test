import { IDateFormValues } from "@/features/date-form";

export const checkDateValidation = (
    year: number,
    month: number,
    day: number
) => {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
};

export const isNumericString = (str: string) => /^\d+$/.test(str);

export const getDaysInMonth = (month: number, year: number) => {
    const lastDayOfMonth = new Date(year, month, 0);
    return lastDayOfMonth.getDate();
};

export const formDayController = (value: string, formData: IDateFormValues) => {
    const prevValue = value.slice(0, -1);
    const lastValue = value[value.length - 1];
    const daysInMonth = getDaysInMonth(+formData.month, +formData.year || 2024);

    switch (true) {
        case !isNumericString(lastValue):
            return prevValue;
        case value === "0":
            return "";
        case value.length === 1:
            return "0" + value;
        case +prevValue <= 9 && +value <= daysInMonth:
            return +value;
        default:
            return prevValue;
    }
};

export const formMonthController = (value: string) => {
    const prevValue = value.slice(0, -1);
    const lastValue = value[value.length - 1];

    switch (true) {
        case !isNumericString(lastValue):
            return prevValue;
        case value === "0":
            return "";
        case value.length === 1:
            return "0" + value;
        case +prevValue <= 9 && +value <= 12:
            return value.slice(1);
        default:
            return +prevValue;
    }
};

export const formYearController = (value: string) => {
    const prevValue = value.slice(0, -1);
    const lastValue = value[value.length - 1];

    if (!isNumericString(lastValue)) {
        return prevValue;
    }
    if (+value > 2024) {
        return prevValue;
    }

    return value;
};
