import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from 'lbc-wrapper/lib/table'

import EditableCell from './EditableCell'

class EditableTable extends Component {
  constructor(props) {
    super(props)

    this.onCellChange = this.onCellChange.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return this.props.
  }

  onCellChange(key, dataIndex) {
    return (value) => {
      const dataSource = [...this.state.dataSource]
      const target = dataSource.find(item => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.setState({ dataSource })
      }
    }
  }

  render() {
    const { data, columns, ...props } = this.props
    return (
      <Table
        bordered
        size="small"
        columns={columns}
        dataSource={data.toJS()}
      />
    )
  }
}

EditableTable.propTypes = {
  data: PropTypes.array,
}

export default EditableTable
