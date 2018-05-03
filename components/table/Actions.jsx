import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { shallowCompareArr } from '../utils/compare'
import './Actions.scss'
import ActionButton from './ActionButton'

class Actions extends Component {
  shouldComponentUpdate(nextProps) {
    return !shallowCompareArr(this.props.actions, nextProps.actions) ||
      this.props.selectedRowKeys !== nextProps.selectedRowKeys
  }

  renderButton(butt) {
    const { selectedRowKeys, selectedRows } = this.props

  }

  render() {
    console.log('----render Actions----')
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
                isPrimary={i === 0}
                {...b}
                key={b.key}
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
