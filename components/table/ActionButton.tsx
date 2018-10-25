import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button, { ButtonType } from 'lbc-wrapper/lib/button'
import Popconfirm from 'lbc-wrapper/lib/popconfirm'

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

class ActionButton extends React.Component<ActionButtonProps, any> {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.label !== nextProps.label ||
  //     this.props.butKey !== nextProps.butKey ||
  //     // if minSelect and maxSelect is 0, that means this button does not care what row is selected.
  //     (nextProps.minSelect === 0 && nextProps.maxSelect === 0 ? false : this.props.selectedRowKeys !== nextProps.selectedRowKeys)
  // }

  static propTypes = {
    label: PropTypes.string.isRequired,
    butKey: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string,
    action: PropTypes.func,
    minSelect: PropTypes.number,
    maxSelect: PropTypes.number,
    confirm: PropTypes.bool,
    selectedRowChange: PropTypes.func,
  }

  static defaultProps = {
    minSelect: 0,
    maxSelect: 0,
    confirm: false,
  }

  render() {
    const {
      label, icon, action, minSelect = 0,
      maxSelect = 0, selectedRowKeys = [], selectedRows = [], disableFunc, confirm, message,
      selectedRowChange, type
    } = this.props
    let disabled = false
    if (disableFunc) {
      disabled = disableFunc(selectedRowKeys, selectedRows, selectedRowChange)
    } else {
      disabled = minSelect !== 0 && selectedRowKeys.length < minSelect
      disabled = disabled || (maxSelect !== 0 && selectedRowKeys.length > maxSelect)
    }

    const act = () => action && action(selectedRowKeys, selectedRows)
    return confirm ? (
      <Popconfirm title={message} onConfirm={act} okText="确定" cancelText="取消">
        <Button
          type={type}
          disabled={disabled}
          icon={icon}
        >
          {label}
        </Button>
      </Popconfirm>
    ) : (
      <Button
        type={type}
        onClick={act}
        disabled={disabled}
        icon={icon}
      >
        {label}
      </Button>
    )
  }
}

export default ActionButton
