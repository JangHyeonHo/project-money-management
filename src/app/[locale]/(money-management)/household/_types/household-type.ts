import { EventSourceInput } from "@fullcalendar/core/index.js"

export interface HouseholdCategoryItemProps{
    key:bigint,
    name:string,
    type:string,
    subcategory?:HouseholdSubcategoryItemProps[],
};

export interface AssetKeyItemProps{
    key:string,
    name:string,
};

export interface HouseholdSubcategoryItemProps{
    key:bigint,
    name:string,
};

export interface HouseholdDateTotalAssetItem{
    issueDate:Date,
    count:number,
    assetDatas:HouseholdDateTotalAssetData[],
};

export interface HouseholdMonthItem{
    issueDate:Date,
    count:number,
    householdDatas:HouseholdMonthData[],
};


export interface HouseholdMonthData{
    householdKey:string,
    issueDate:Date,
    assetName:string,
    householdType:string,
    householdName:string,
    householdAmount:number,
    currency:string,
}

export interface HouseholdDateTotalAssetData{
    assetName:string,
    totalAmount:number,
    currency:string,
}


export interface HouseholdRegModFormProps{
    categoryItems?:HouseholdCategoryItemProps[]
    assetItems?:AssetKeyItemProps[],
    locale?:string,
    isModify?:boolean,
    householdKey?:string,
    issueDate?:Date,
    householdImage?:File,
    assetKey?:string,
    householdType?:string,
    householdCategory?:bigint,
    householdSubcategory?:bigint,
    householdName?:string,
    householdAmount?:number,
    householdComment?:string,
};

export interface HouseholdRegModActionProps{
    householdKey?:string,
    issueDate?:Date,
    householdImage?:File,
    assetKey:string,
    householdType:string,
    householdCategory?:bigint,
    householdSubcategory?:bigint,
    householdName?:string,
    householdAmount:number,
    householdComment?:string,
}

export interface HouseholdManagementProps{
    householdDateTotalAssetItems?:HouseholdDateTotalAssetItem[],
    householdMonthItems?:HouseholdMonthItem[],
    calendarEvents?:EventSourceInput,
    locale?:string,
}

export interface HouseholdCalendarProps{
    className?:string,
    dateClilck?:(selected:Date)=>void,
    events?:EventSourceInput,
    locale?:string,
}

export interface HouseholdDayInfoProps{
    className?:string,
    householdSelectedDate:Date,
    householdDateTotalAssetItem?: HouseholdDateTotalAssetItem,
    locale?:string,
}

export interface HouseholdMonthInfoProps{
    className?:string,
    householdSelectedMonth:Date,
    householdMonthItems?: HouseholdMonthItem,
    onDeleteClick:(item: { key: string, itemName: string }) => void,
    locale?:string,
}
