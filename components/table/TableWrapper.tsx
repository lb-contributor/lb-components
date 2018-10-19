import * as React from 'react'
import LBTable, { LBTableProps } from './LBTable'
import { ActionButtonItem } from './ActionButton'
import Actions from './Actions'

export interface TableWrapperProps<T> extends LBTableProps<T> {
  actions: ActionButtonItem[];
  position: string;
}

export interface TableWrapperState<T> {
  selectedRowKeys: any[];
  selectedRows: T[];
}

class TableWrapper<T> extends React.Component<TableWrapperProps<T>, TableWrapperState<T>> {
  constructor(props: TableWrapperProps<T>) {
    super(props)

    this.selectedRowChange = this.selectedRowChange.bind(this)
    this.clearSelections = this.clearSelections.bind(this)

    this.state = {
      selectedRowKeys: [],
      selectedRows: [],
    }
  }

  selectedRowChange(selectedRowKeys: any[], selectedRows: T[]): void {
    this.setState({
      selectedRowKeys: [...selectedRowKeys],
      selectedRows: [...selectedRows],
    })
  }

  clearSelections(): void {
    this.setState({
      selectedRowKeys: [],
      selectedRows: [],
    })
  }

  render() {
    const { actions, position, ...props } = this.props
    const { selectedRowKeys, selectedRows } = this.state
    return (
      <div>
        <Actions actions={actions} selectedRowKeys={selectedRowKeys} selectedRows={selectedRows} selectedRowChange={this.selectedRowChange} position={position} />
        <LBTable<T> {...props} selectedRowKeys={selectedRowKeys} selectedRowChange={this.selectedRowChange} />
      </div>
    )
  }
}

export default TableWrapper
