import * as React from 'react'
import * as PropTypes from 'prop-types'
import Table, { TableProps, TableRowSelection, RowSelectionType } from 'lbc-wrapper/lib/table'
import { SelectedRows, SelectedRowKeys } from './tableDef'

export interface LBTableBaseProps<T> extends TableProps<T> {
  data?: T[];
  forceRender?: boolean;
  rowSelectionType?: RowSelectionType;
  useExternalRowSelection?: boolean,
}

interface LBTableProps<T> extends LBTableBaseProps<T> {
  selectedRowChange2: (selectedRowKeys: SelectedRowKeys, selectedRows: SelectedRows) => void;
  selectedRowKeys2: SelectedRowKeys;
}

class LBTable<T> extends React.Component<LBTableProps<T>, any> {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    rowSelectionType: PropTypes.oneOf([undefined, 'checkbox', 'radio']),
    selectedRowChange: PropTypes.func,
    selectedRowKeys: PropTypes.array,
    useExternalRowSelection: PropTypes.bool
  }

  static defaultProps = {
    rowSelectionType: undefined,
    data: [],
    useExternalRowSelection: false,
  }

  rowSelection: TableRowSelection<T> | undefined

  constructor(props: LBTableProps<T>) {
    super(props)

    this.rowSelection = props.rowSelectionType ? { type: props.rowSelectionType, onChange: this.props.selectedRowChange2 } : undefined
  }

  shouldComponentUpdate(nextProps: LBTableProps<T>) {
    // if forceRender, will not compare props
    return nextProps.forceRender || this.props.data !== nextProps.data ||
      this.props.selectedRowKeys2 !== nextProps.selectedRowKeys2
  }

  render() {
    const { columns, data, rowSelection, selectedRowKeys2, useExternalRowSelection, ...props } = this.props

    const rs = useExternalRowSelection ? rowSelection : (this.rowSelection ? Object.assign({}, this.rowSelection, { selectedRowKeys: selectedRowKeys2 }) : this.rowSelection)

    return (
      <Table<T>
        bordered
        size="small"
        rowSelection={rs}
        columns={columns}
        dataSource={data}
        {...props}
      />
    )
  }
}

export default LBTable
