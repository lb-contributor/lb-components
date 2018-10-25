import * as React from 'react'
import LBTable, { LBTableBaseProps } from './LBTable'
import { TableAction } from './ActionButton'
import Actions from './Actions'
import { SelectedRows, SelectedRowKeys } from './tableDef'

export interface TableProps<T> extends LBTableBaseProps<T> {
  actions?: TableAction[];
  position?: string;
}

export interface TableWrapperState {
  selectedRowKeys: SelectedRowKeys;
  selectedRows: SelectedRows;
}

class TableWrapper<T> extends React.Component<TableProps<T>, TableWrapperState> {
  constructor(props: TableProps<T>) {
    super(props)

    this.selectedRowChange1 = this.selectedRowChange1.bind(this)
    this.clearSelections = this.clearSelections.bind(this)

    this.state = {
      selectedRowKeys: [],
      selectedRows: [],
    }
  }

  public selectedRowChange1(selectedRowKeys: SelectedRowKeys, selectedRows: SelectedRows): void {
    this.setState({
      selectedRowKeys: [...selectedRowKeys],
      selectedRows: selectedRows,
    })
  }

  public clearSelections(): void {
    this.setState({
      selectedRowKeys: [],
      selectedRows: [],
    })
  }

  render() {
    const { actions, position, ...props } = this.props as TableProps<T>
    const { selectedRowKeys, selectedRows } = this.state
    return (
      <div>
        <Actions actions={actions} selectedRowKeys={selectedRowKeys} selectedRows={selectedRows} selectedRowChange={this.selectedRowChange1} position={position} />
        <LBTable<T> {...props} selectedRowKeys2={selectedRowKeys} selectedRowChange2={this.selectedRowChange1} />
      </div>
    )
  }
}

export default TableWrapper
