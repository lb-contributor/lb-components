import * as React from 'react'
import PropTypes from 'prop-types'
import Fields from './FieldsWrapper'
import TableWrapper from '../table/TableWrapper'

class QueryTable extends Component {
  constructor(props) {
    super(props)

    this.fieldsQueryRegister = this.fieldsQueryRegister.bind(this)
    this.query = this.query.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  refresh() {
    this.query({})
  }

  query(dataToBeSent) {
    return this.props.query(dataToBeSent)
  }

  fieldsQueryRegister(func) {
    this.queryCallback = func
  }

  render() {
    const { fields, query, loadOnMount, ...props } = this.props
    return (
      <div>
        {!fields || fields.length === 0 ? null : (<Fields fields={fields} query={this.query} queryRegister={this.fieldsQueryRegister} loadOnMount={loadOnMount}/>)}
        <TableWrapper {...props} />
      </div>
    )
  }
}

QueryTable.propTypes = {
  query: PropTypes.func,
  loadOnMount: PropTypes.bool,
}

QueryTable.defaultProps = {
  rowSelection: 'checkbox',
  loadOnMount: true,
}

export default QueryTable
