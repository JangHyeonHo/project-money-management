export interface AssetListProps{
    items?:AssetListItemProps[],
    onDeleteClick:(item: { key: string, itemName: string }) => void
};
export interface AssetListItemProps{
    key:string,
    name:string,
    money:number,
    currency:string
};

export interface AssetListCollapseProps{
    children?:React.JSX.Element
    title?:string,
};

export interface AssetManagementProps{
    cashAssets:AssetListItemProps[],
    cardAssets:AssetListItemProps[],
    bankbookAssets:AssetListItemProps[],
    etcAssets:AssetListItemProps[],
    isBankTransfer?:boolean,
}

export interface AssetRegModFormProps{
    isModify?:boolean,
    assetId?:string,
    assetType?:string,
    assetName?:string,
    assetMoney?:number,
    assetCurrency?:string,
    assetComment?:string,
}

export interface AssetRegModActionProps{
    assetKey?:string,
    assetType:string,
    assetName:string,
    assetMoney:number,
    assetCurrency:string,
    assetComment:string,
    updateDate?:Date
}