import { ChangeEvent, ReactNode, RefObject } from "react";

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
    disabled?:boolean,
    setImage?:(event:ChangeEvent<HTMLInputElement>)=>void
};

export interface InputDropdownProps{
    className?:string,
    name:string,
    id:string,
    required?:boolean,
    disabled?:boolean,
    dropdownItems:InputDropdownPropsItem[],
    isChangeBtnName?:boolean,
    defaultBtnName?:string,
    defaultInputValue?:string,
    setParentValue?:(value:string)=>void,
    onChange?:(key:string)=>void,
}

export interface InputDatePickerProps{
    title?:string,
    language?:string,
    name:string,
    id:string,
    defaultDate?:Date,
    disabled?:boolean,
    setDate?:(date:Date)=>void,
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
    children?:ReactNode,
    isOpen:boolean,
    onYes:()=>Promise<void>,
    onNo:()=>void,
}

export interface TextModalProps{
    title?:string,
    children?:ReactNode,
    isOpen:boolean,
    onClose:()=>void,
}