/* eslint-disable @typescript-eslint/no-unused-vars */
interface CapitalListProps{
    items?:Array<CapitalListItemProps>
    
};
interface CapitalListItemProps{
    key:string,
    name:string,
    money:number,
    currency:string
};

interface CapitalListCollapseProps{
    children?:React.JSX.Element
    title?:string,
};
/* eslint-disable @typescript-eslint/no-unused-vars */