import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'lbc-wrapper/lib/button'
import Popconfirm from 'lbc-wrapper/lib/popconfirm'
import _debug from 'lb-debug'

const debug = _debug('lb-components:ActionButton')

class ActionButton extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.label !== nextProps.label ||
      this.props.butKey !== nextProps.butKey ||
      // if minSelect and maxSelect is 0, that means this button does not care what row is selected.
      (nextProps.minSelect === 0 && nextProps.maxSelect === 0 ? false : this.props.selectedRowKeys !== nextProps.selectedRowKeys)
  }

  render() {
    debug('render')
    const {
      label, icon, isPrimary, action, minSelect,
      maxSelect, selectedRowKeys, selectedRows, disableFunc, confirm, message,
      selectedRowChange
    } = this.props
    let disabled = false
    if (disableFunc) {
      disabled = disableFunc(selectedRowKeys, selectedRows, selectedRowChange)
    } else {
      disabled = minSelect !== 0 && selectedRowKeys.length < minSelect
      disabled = disabled || (maxSelect !== 0 && selectedRowKeys.length > maxSelect)
    }

    const act = () => action(selectedRowKeys, selectedRows)
    return confirm ? (
      <Popconfirm title={message} onConfirm={act}>
        <Button
          type={isPrimary ? 'primary' : ''}
          disabled={disabled}
          icon={icon}
        >
          {label}
        </Button>
      </Popconfirm>
    ) : (
      <Button
        type={isPrimary ? 'primary' : ''}
        onClick={act}
        disabled={disabled}
        icon={icon}
      >
        {label}
      </Button>
    )
  }
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  butKey: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isPrimary: PropTypes.bool,
  action: PropTypes.func,
  minSelect: PropTypes.number,
  maxSelect: PropTypes.number,
  confirm: PropTypes.bool,
  selectedRowChange: PropTypes.func,
}

ActionButton.defaultProps = {
  minSelect: 0,
  maxSelect: 0,
  confirm: false,
}

export default ActionButton
