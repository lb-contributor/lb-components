import * as React from 'react'
import * as PropTypes from 'prop-types'
import Table, { TableProps, TableRowSelection, RowSelectionType } from 'lbc-wrapper/lib/table'

export interface LBTableProps<T> extends TableProps<T> {
  selectedRowChange: (selectedRowKeys: string[] | number[], selectedRows: Object[]) => void;
  selectedRowKeys: object[];
  data?: T[];
  forceRender?: boolean;
  rowSelectionType?: RowSelectionType;
}

class LBTable<T> extends React.Component<LBTableProps<T>, any> {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    rowSelectionType: PropTypes.oneOf([undefined, 'checkbox', 'radio']),
    selectedRowChange: PropTypes.func,
    selectedRowKeys: PropTypes.array,
  }

  static defaultProps = {
    rowSelectionType: undefined,
    data: [],
  }

  rowSelection: TableRowSelection<T> | undefined

  constructor(props: LBTableProps<T>) {
    super(props)

    this.rowSelection = props.rowSelectionType ? { type: props.rowSelectionType, onChange: this.props.selectedRowChange } : undefined
  }

  shouldComponentUpdate(nextProps: LBTableProps<T>) {
    // if forceRender, will not compare props
    return nextProps.forceRender || this.props.data !== nextProps.data ||
      this.props.selectedRowKeys !== nextProps.selectedRowKeys
  }

  render() {
    const { columns, data, rowSelection, selectedRowKeys, ...props } = this.props
    return (
      <Table
        bordered
        size="small"
        rowSelection={this.rowSelection ? Object.assign({}, this.rowSelection, { selectedRowKeys }) : this.rowSelection}
        columns={columns}
        dataSource={data}
        {...props}
      />
    )
  }
}

export default LBTable
