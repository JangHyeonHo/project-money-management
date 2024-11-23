interface CapitalTableProps{
    items?:Array<CapitalTableItemProps>
    
}
interface CapitalTableItemProps{
    key:string,
    name:string,
    money:number,
    currency:string
}