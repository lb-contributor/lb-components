import * as React from 'react';
import { FormComponentProps } from 'lbc-wrapper/lib/form';
import './style';
export interface FieldsItem {
    id: string;
    label: string;
    colSpan?: any;
    required?: boolean;
}
export interface FieldsComponentProps {
    query: (param?: any) => any;
    fields: Array<Array<FieldsItem>>;
    loadOnMount: boolean;
    queryRegister: (cb: () => any) => void;
}
export interface FieldsState {
    collapsed: boolean;
    loading: boolean;
}
declare type FieldsProps = FieldsComponentProps & FormComponentProps;
declare const _default: React.ComponentClass<import("antd/es/form/Form").RcBaseFormProps & Pick<FieldsProps, "query" | "fields" | "loadOnMount" | "queryRegister">, any>;
export default _default;
