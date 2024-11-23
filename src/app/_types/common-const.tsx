export const LayoutHeaders = {
    Capital : 0,
    Household : 1,
} as const;

export const CapitalTypes = {
    Cash : "10",
    Card : "20",
    Etc : "99"
} as const;

export const HouserholdTypes = {
    Income : "I",
    Expenditure: "E"
} as const;