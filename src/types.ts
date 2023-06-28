interface menuTypes {
    items: selectedItemPropTypes[]
}

export interface selectedItemPropTypes {
    key?: string;
    id?: string;
    content?: string;
    menu?: menuTypes
}

export interface mainDataType {
    data?: selectedItemPropTypes[];
}