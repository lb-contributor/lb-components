import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _debug from 'lb-debug'
import { shallowCompareArr } from '../utils/compare'
import './style'
import ActionButton from './ActionButton'

const debug = _debug('lb-components:Actions')

class Actions extends Component {
  shouldComponentUpdate(nextProps) {
    return !shallowCompareArr(this.props.actions, nextProps.actions) ||
      this.props.selectedRowKeys !== nextProps.selectedRowKeys
  }

  renderButton(butt) {
    const { selectedRowKeys, selectedRows } = this.props
  }

  render() {
    debug('render')
    const { actions, position, selectedRowKeys, selectedRows, selectedRowChange } = this.props
    if (!actions || actions.length === 0) {
      return null
    }

    return (
      <div className="lb-query-table-actions">
        <span className={position}>
          {
            actions.map((b, i) => (
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

Actions.propTypes = {
  actions: PropTypes.array.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  selectedRowChange: PropTypes.func,
}

Actions.defaultProps = {
  position: 'left',
}

export default Actions
