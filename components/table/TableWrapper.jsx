import React, { Component } from 'react'
import LBTable from './LBTable'
import Actions from './Actions'

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
    console.log('----render TableWrapper----')
    const { actions, ...props } = this.props
    const { selectedRowKeys, selectedRows } = this.state
    return (
      <div>
        <Actions actions={actions} selectedRowKeys={selectedRowKeys} selectedRows={selectedRows} selectedRowChange={this.selectedRowChange} />
        <LBTable {...props} selectedRowKeys={selectedRowKeys} selectedRowChange={this.selectedRowChange} />
      </div>
    )
  }
}

export default TableWrapper
