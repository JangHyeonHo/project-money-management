export const StringRangeCheck = (value: string | undefined, min: number, max: number) => {
    if (value === undefined) value = "";
    const trimVal = value.trim().length;
    return (min <= trimVal) && (max >= trimVal)
}

//영어 숫자 특수문자 포함 8글자 이상상
export const checkPasswordWithEscapedSpecialChars = (password: string) => {
    const regex = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{8,}$/;
    return regex.test(password);
}

/**
 * NullChange => DB에서 취득하는 값이 null로 오기 때문에 이들을 공백 혹은 0으로 변환해주는 공통부품
 */
export const NullChangeBlankValueFromString = (value: string | null) => {
    if (value === null) return "";

    return value;
}

export const NullChangeZeroValueFromNumber = (value: number | null) => {
    if (value === null) return 0;

    return value;
}

export const NullChangeUndefinedValueFromNumber = (value: number | null) => {
    if (value === null) return undefined;

    return value;
}

export const NullChangeZeroValueFromBigInt = (value: bigint | null) => {
    if (value === null) return BigInt(0);

    return value;
}

export const AmountChangeAutoComma = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const UndefinedChangeZeroFromNumber = (value: number | undefined) => {
    if (value) {
        return value;
    }
    return 0;
}