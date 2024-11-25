/* eslint-disable @typescript-eslint/no-unused-vars */
interface SiteStackedLayoutProps{
    children?:React.JSX.Element,
    headtitle?:string,
    headCurrent?:number,
};

interface ImageUploaderProps{
    className?:string,
    key?:string,
    name?:string,
    id?:string,
};

interface InputDropdownProps{
    className?:string,
    name:string,
    id:string,
    required?:boolean,
    dropdownItems:Array<InputDropdownPropsItem>,
    btnName?:string,
    isChangeBtnName?:boolean,
    defaultInputValue?:string,
    setParentValue?:(value:string)=>void,
}


interface InputDropdownPropsItem{
    key:string,
    value:string,
}
/* eslint-disable @typescript-eslint/no-unused-vars */