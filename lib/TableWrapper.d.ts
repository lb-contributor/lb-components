import * as React from 'react';
import { LBTableProps } from './LBTable';
import { ActionButtonItem } from './ActionButton';
export interface TableWrapperProps<T> extends LBTableProps<T> {
    actions: ActionButtonItem[];
    position: string;
}
export interface TableWrapperState {
    selectedRowKeys: any[];
    selectedRows: object[];
}
declare class TableWrapper<T> extends React.Component<TableWrapperProps<T>, TableWrapperState> {
    constructor(props: TableWrapperProps<T>);
    selectedRowChange(selectedRowKeys: any[], selectedRows: object[]): void;
    clearSelections(): void;
    render(): JSX.Element;
}
export default TableWrapper;
