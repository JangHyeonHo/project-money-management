import { InputDropdownPropsItem } from "@/app/[locale]/_types/common-types"

export interface CategoryRegModActionProps {
    id?: number
    categoryName: string,
    parentCategoryId?: number,
    categoryComment?: string,
    householdType?: string,
    updateDate?: Date,
}

export interface SettingMenuProps {
    className?: string,
    menuCurrent?: number,
}

export interface SettingListProps {
    className?: string,
    title?: string,
    info?: string,
    children?: React.JSX.Element
}

export interface CategorySettingProps {
    categoryItems?: CategoryItems[]
}

export interface CategoryItems {
    key: number,
    name: string,
    householdType: string,
    subcategories: SubcategoryItems[]
}

export interface SubcategoryItems {
    key: number,
    name: string,
}

export interface DropdownCategoryItems {
    categoryType: string,
    items:InputDropdownPropsItem[],
}

export interface CategoryRegModFormProps {
    dropdownCategoryItems: DropdownCategoryItems[],
    isSubcategory: boolean,
    isModify?: boolean,
    categoryKey?: number,
    categoryName?: string,
    parentCategoryKey?: number,
    categoryComment?: string,
    householdType?: string,
}


export const CategoryRegModParameter = {
    isSubcategory : "y",
} as const;