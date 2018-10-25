import * as React from 'react';
import { LBTableBaseProps } from './LBTable';
import { TableAction } from './ActionButton';
import { SelectedRows, SelectedRowKeys } from './tableDef';
export interface TableProps<T> extends LBTableBaseProps<T> {
    actions?: TableAction[];
    position?: string;
}
export interface TableWrapperState {
    selectedRowKeys: SelectedRowKeys;
    selectedRows: SelectedRows;
}
declare class TableWrapper<T> extends React.Component<TableProps<T>, TableWrapperState> {
    constructor(props: TableProps<T>);
    selectedRowChange1(selectedRowKeys: SelectedRowKeys, selectedRows: SelectedRows): void;
    clearSelections(): void;
    render(): JSX.Element;
}
export default TableWrapper;
