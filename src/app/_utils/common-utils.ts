export const StringRangeCheck = (value:string, min:number, max:number) => {
    const trimVal = value.trim().length;
    return (min <= trimVal) && (max >= trimVal)
}

export const NullChangeBlankValue = (value:string | null) => {
    if(value === null) return "";
    
    return value;
}