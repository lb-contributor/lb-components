import * as React from 'react';
import { LBTableProps } from './LBTable';
import { ActionButtonItem } from './ActionButton';
export interface TableWrapperProps<T> extends LBTableProps<T> {
    actions: ActionButtonItem[];
    position: string;
}
export interface TableWrapperState<T> {
    selectedRowKeys: any[];
    selectedRows: T[];
}
declare class TableWrapper<T> extends React.Component<TableWrapperProps<T>, TableWrapperState<T>> {
    constructor(props: TableWrapperProps<T>);
    selectedRowChange(selectedRowKeys: any[], selectedRows: T[]): void;
    clearSelections(): void;
    render(): JSX.Element;
}
export default TableWrapper;
