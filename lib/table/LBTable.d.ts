import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableProps, TableRowSelection, RowSelectionType } from 'lbc-wrapper/lib/table';
import { SelectedRows, SelectedRowKeys } from './tableDef';
export interface LBTableBaseProps<T> extends TableProps<T> {
    data?: T[];
    forceRender?: boolean;
    rowSelectionType?: RowSelectionType;
    useExternalRowSelection?: boolean;
}
interface LBTableProps<T> extends LBTableBaseProps<T> {
    selectedRowChange2: (selectedRowKeys: SelectedRowKeys, selectedRows: SelectedRows) => void;
    selectedRowKeys2: SelectedRowKeys;
}
declare class LBTable<T> extends React.Component<LBTableProps<T>, any> {
    static propTypes: {
        columns: PropTypes.Validator<any[]>;
        data: PropTypes.Requireable<any[]>;
        rowSelectionType: PropTypes.Requireable<string | undefined>;
        selectedRowChange: PropTypes.Requireable<(...args: any[]) => any>;
        selectedRowKeys: PropTypes.Requireable<any[]>;
        useExternalRowSelection: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        rowSelectionType: undefined;
        data: never[];
        useExternalRowSelection: boolean;
    };
    rowSelection: TableRowSelection<T> | undefined;
    constructor(props: LBTableProps<T>);
    shouldComponentUpdate(nextProps: LBTableProps<T>): boolean;
    render(): JSX.Element;
}
export default LBTable;
