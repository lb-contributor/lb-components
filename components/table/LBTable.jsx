import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import Immutable from 'immutable'

const { List, is } = Immutable

function isImmutable(obj) {
  if (!obj) return false

  return obj.toJS
}

class LBTable extends Component {
  constructor(props) {
    super(props)

    this.rowSelection = props.rowSelection ? { type: props.rowSelection, onChange: this.props.selectedRowChange } : null
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (isImmutable(nextProps.data) ? !is(this.props.data, nextProps.data) : this.props.data !== nextProps.data) ||
      this.props.selectedRowKeys !== nextProps.selectedRowKeys
  }

  render() {
    console.log('----render LBTables-----')
    const { columns, data, rowSelection, ...props } = this.props
    return (
      <Table
        bordered
        size="small"
        rowSelection={this.rowSelection}
        columns={columns}
        dataSource={isImmutable(data) ? data.toJS() : data}
        {...props}
      />
    )
  }
}

LBTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.oneOfType(PropTypes.array, PropTypes.instanceOf(List)),
  rowSelection: PropTypes.oneOf([null, 'checkbox', 'radio']),
  selectedRowChange: PropTypes.func,
  selectedRowKeys: PropTypes.array,
}

LBTable.defaultProps = {
  rowSelection: null,
  data: [],
}

export default LBTable
