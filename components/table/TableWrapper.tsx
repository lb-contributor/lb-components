import * as React from 'react'
import LBTable, { LBTableBaseProps } from './LBTable'
import { ActionButtonItem } from './ActionButton'
import Actions from './Actions'
import { SelectedRows, SelectedRowKeys } from './tableDef'

export interface TableWrapperProps<T> extends LBTableBaseProps<T> {
  actions?: ActionButtonItem[];
  position: string;
}

export interface TableWrapperState {
  selectedRowKeys: SelectedRowKeys;
  selectedRows: SelectedRows;
}

class TableWrapper<T> extends React.Component<TableWrapperProps<T>, TableWrapperState> {
  public static defaultProps = {
    position: 'right'
  }

  constructor(props: TableWrapperProps<T>) {
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
    const { actions, position, ...props } = this.props as TableWrapperProps<T>
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
