import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableProps, TableRowSelection, RowSelectionType } from 'lbc-wrapper/lib/table';
export interface LBTableProps<T> extends TableProps<T> {
    selectedRowChange: (selectedRowKeys: string[] | number[], selectedRows: Object[]) => void;
    selectedRowKeys: object[];
    data?: T[];
    forceRender?: boolean;
    rowSelectionType?: RowSelectionType;
}
declare class LBTable<T> extends React.Component<LBTableProps<T>, any> {
    static propTypes: {
        columns: PropTypes.Validator<any[]>;
        data: PropTypes.Requireable<any[]>;
        rowSelectionType: PropTypes.Requireable<string | undefined>;
        selectedRowChange: PropTypes.Requireable<(...args: any[]) => any>;
        selectedRowKeys: PropTypes.Requireable<any[]>;
    };
    static defaultProps: {
        rowSelectionType: undefined;
        data: never[];
    };
    rowSelection: TableRowSelection<T> | undefined;
    constructor(props: LBTableProps<T>);
    shouldComponentUpdate(nextProps: LBTableProps<T>): boolean;
    render(): JSX.Element;
}
export default LBTable;
