import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonType } from 'lbc-wrapper/lib/button';
export interface TableAction {
    key: string;
    label: string;
    icon?: string;
    action?: (selectedRowKeys: any[], selectedRows: object[]) => void;
    minSelect?: number;
    maxSelect?: number;
    disableFunc?: (selectedRowKeys: any[], selectedRows?: object[], selectedRowChange?: (selectedRowKeys: any[], selectedRows: object[]) => void) => boolean;
    confirm?: boolean;
    message?: string;
    type?: ButtonType;
}
export interface ActionButtonProps extends TableAction {
    selectedRowKeys?: any[];
    selectedRows?: object[];
    selectedRowChange?: (selectedRowKeys: any[], selectedRows: object[]) => void;
}
declare class ActionButton extends React.Component<ActionButtonProps, any> {
    static propTypes: {
        label: PropTypes.Validator<string>;
        butKey: PropTypes.Validator<string>;
        icon: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        action: PropTypes.Requireable<(...args: any[]) => any>;
        minSelect: PropTypes.Requireable<number>;
        maxSelect: PropTypes.Requireable<number>;
        confirm: PropTypes.Requireable<boolean>;
        selectedRowChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        minSelect: number;
        maxSelect: number;
        confirm: boolean;
    };
    render(): JSX.Element;
}
export default ActionButton;
