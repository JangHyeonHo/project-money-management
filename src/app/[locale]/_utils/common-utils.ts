export const StringRangeCheck = (value:string | undefined, min:number, max:number) => {
    if(value===undefined) value = "";
    const trimVal = value.trim().length;
    return (min <= trimVal) && (max >= trimVal)
}

/**
 * NullChange => DB에서 취득하는 값이 null로 오기 때문에 이들을 공백 혹은 0으로 변환해주는 공통부품
 */
export const NullChangeBlankValueFromString = (value:string | null) => {
    if(value === null) return "";
    
    return value;
}

export const NullChangeZeroValueFromNumber = (value:number | null) => {
    if(value === null) return 0;
    
    return value;
}

export const NullChangeZeroValueFromBigInt = (value:bigint | null) => {
    if(value === null) return BigInt(0);
    
    return value;
}

export const AmountChangeAutoComma = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const UndefinedChangeZeroFromNumber = (value:number | undefined) => {
    if (value){
        return value;
    }
    return 0;
}