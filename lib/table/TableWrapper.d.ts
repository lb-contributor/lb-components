import * as React from 'react';
import { LBTableBaseProps } from './LBTable';
import { ActionButtonItem } from './ActionButton';
import { SelectedRows, SelectedRowKeys } from './tableDef';
export interface TableWrapperProps<T> extends LBTableBaseProps<T> {
    actions?: ActionButtonItem[];
    position: string;
}
export interface TableWrapperState {
    selectedRowKeys: SelectedRowKeys;
    selectedRows: SelectedRows;
}
declare class TableWrapper<T> extends React.Component<TableWrapperProps<T>, TableWrapperState> {
    static defaultProps: {
        position: string;
    };
    constructor(props: TableWrapperProps<T>);
    selectedRowChange1(selectedRowKeys: SelectedRowKeys, selectedRows: SelectedRows): void;
    clearSelections(): void;
    render(): JSX.Element;
}
export default TableWrapper;
