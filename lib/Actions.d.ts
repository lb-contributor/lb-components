import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style';
import { ActionButtonItem } from './ActionButton';
export interface ActionsProps {
    actions?: ActionButtonItem[];
    position: string;
    selectedRowKeys?: object[];
    selectedRows?: object[];
    selectedRowChange?: (selectedRowKeys: any[], selectedRows: object[]) => void;
}
declare class Actions extends React.Component<ActionsProps, {}> {
    static propTypes: {
        actions: PropTypes.Validator<any[]>;
        position: PropTypes.Requireable<string>;
        selectedRowChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        position: string;
    };
    render(): JSX.Element | null;
}
export default Actions;
