import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style';
import { TableAction } from './ActionButton';
export interface ActionsProps {
    actions?: TableAction[];
    position?: string;
    selectedRowKeys?: any[];
    selectedRows?: any[];
    selectedRowChange?: (selectedRowKeys: any[], selectedRows: any[]) => void;
}
declare class Actions extends React.Component<ActionsProps, {}> {
    static propTypes: {
        actions: PropTypes.Validator<any[]>;
        position: PropTypes.Requireable<string>;
        selectedRowChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        position: string;
    };
    render(): JSX.Element | null;
}
export default Actions;
