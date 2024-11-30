export interface SiteStackedLayoutProps{
    children?:React.JSX.Element,
    headtitle?:string,
    headCurrent?:number,
    isLogin?:boolean,
    userFirstName?:string,
    userLastName?:string,
};

export interface ImageUploaderProps{
    className?:string,
    key?:string,
    name?:string,
    id?:string,
};

export interface InputDropdownProps{
    className?:string,
    name:string,
    id:string,
    required?:boolean,
    disabled?:boolean,
    dropdownItems:Array<InputDropdownPropsItem>,
    btnName?:string,
    isChangeBtnName?:boolean,
    defaultInputValue?:string,
    setParentValue?:(value:string)=>void,
}


export interface InputDropdownPropsItem{
    key:string,
    value:string,
}

export interface ProcessAlertProps{
    isAlert?:boolean,
    alertMsg?:string,
    alertType?:string,
};

export interface ConfirmModalProps{
    title?:string,
    msg?:string,
    isOpen:boolean,
    onYes:()=>void,
    onNo:()=>void,
}