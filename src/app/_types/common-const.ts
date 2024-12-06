export const LayoutHeaders = {
    Asset : 0,
    Household : 1,
    Config : 2,
} as const;

export const AssetTypes = {
    Cash : "10",
    Bankbook : "20",
    Card : "30",
    Etc : "99"
} as const;

export const HouseholdTypes = {
    Income : "I",
    Expenditure: "E"
} as const;