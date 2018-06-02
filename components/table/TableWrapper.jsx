import React, { Component } from 'react'
import _debug from 'lb-debug'
import LBTable from './LBTable'
import Actions from './Actions'

const debug = _debug('lb-components:TableWrapper')

class TableWrapper extends Component {
  constructor(props) {
    super(props)

    this.selectedRowChange = this.selectedRowChange.bind(this)

    this.state = {
      selectedRowKeys: [],
      selectedRows: [],
    }
  }

  selectedRowChange(selectedRowKeys, selectedRows) {
    this.setState({
      selectedRowKeys: [...selectedRowKeys],
      selectedRows: [...selectedRows],
    })
  }

  render() {
    debug('render')
    const { actions, position, ...props } = this.props
    const { selectedRowKeys, selectedRows } = this.state
    return (
      <div>
        <Actions actions={actions} selectedRowKeys={selectedRowKeys} selectedRows={selectedRows} selectedRowChange={this.selectedRowChange} position={position} />
        <LBTable {...props} selectedRowKeys={selectedRowKeys} selectedRowChange={this.selectedRowChange} />
      </div>
    )
  }
}

export default TableWrapper
