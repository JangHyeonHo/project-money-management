export const StringRangeCheck = (value:string, min:number, max:number) => {
    const trimVal = value.trim().length;
    return (min <= trimVal) && (max >= trimVal)
}

export const NullChangeBlankValueFromString = (value:string | null) => {
    if(value === null) return "";
    
    return value;
}

export const NullChangeBlankValueFromNumber = (value:number | null) => {
    if(value === null) return 0;
    
    return value;
}

export const AmountChangeAutoComma = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}