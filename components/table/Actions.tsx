import * as React from 'react'
import * as PropTypes from 'prop-types'
import './style'
import ActionButton, { TableAction } from './ActionButton'

export interface ActionsProps {
  actions?: TableAction[];
  position?: string;
  selectedRowKeys?: any[];
  selectedRows?: any[];
  selectedRowChange?: (selectedRowKeys: any[], selectedRows: any[]) => void;
}

class Actions extends React.Component<ActionsProps, {}> {
  // shouldComponentUpdate(nextProps) {
  //   return !shallowCompareArr(this.props.actions, nextProps.actions) ||
  //     this.props.selectedRowKeys !== nextProps.selectedRowKeys
  // }

  static propTypes = {
    actions: PropTypes.array.isRequired,
    position: PropTypes.oneOf(['left', 'right']),
    selectedRowChange: PropTypes.func,
  }

  static defaultProps = {
    position: 'left',
  }

  render() {
    const { actions, position, selectedRowKeys, selectedRows, selectedRowChange } = this.props
    if (!actions || actions.length === 0) {
      return null
    }

    return (
      <div className="lb-query-table-actions">
        <span className={position}>
          {
            actions.map((b) => (
              <ActionButton
                type={b.type}
                {...b}
                key={b.key}
                butKey={b.key}
                selectedRows={selectedRows}
                selectedRowKeys={selectedRowKeys}
                selectedRowChange={selectedRowChange}
              />))
          }
        </span>
      </div>
    )
  }
}

export default Actions
