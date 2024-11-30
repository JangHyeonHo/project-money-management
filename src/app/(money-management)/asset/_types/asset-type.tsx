export interface AssetListProps{
    items?:Array<AssetListItemProps>,
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
    cashAssets:Array<AssetListItemProps>,
    cardAssets:Array<AssetListItemProps>,
    bankbookAssets:Array<AssetListItemProps>,
    etcAssets:Array<AssetListItemProps>,
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
}