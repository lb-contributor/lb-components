import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _debug from 'lb-debug'
import Table from 'lbc-wrapper/lib/table'

const debug = _debug('lb-components:LBTable')

class LBTable extends Component {
  constructor(props) {
    super(props)

    this.rowSelection = props.rowSelection ? { type: props.rowSelection, onChange: this.props.selectedRowChange } : null
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data ||
      this.props.selectedRowKeys !== nextProps.selectedRowKeys
  }

  render() {
    debug('render')
    const { columns, data, rowSelection, selectedRowKeys, ...props } = this.props
    return (
      <Table
        bordered
        size="small"
        rowSelection={Object.assign({}, this.rowSelection, { selectedRowKeys })}
        columns={columns}
        dataSource={data}
        {...props}
      />
    )
  }
}

LBTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  rowSelection: PropTypes.oneOf([null, 'checkbox', 'radio']),
  selectedRowChange: PropTypes.func,
  selectedRowKeys: PropTypes.array,
}

LBTable.defaultProps = {
  rowSelection: null,
  data: [],
}

export default LBTable
