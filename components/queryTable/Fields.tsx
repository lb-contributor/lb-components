import * as React from 'react'
import PropTypes from 'prop-types'
import Form, { SimpleFormItem, FormComponentProps } from 'lbc-wrapper/lib/form'
import Row from 'lbc-wrapper/lib/row'
import Col from 'lbc-wrapper/lib/col'
import Icon from 'lbc-wrapper/lib/icon'
import Button from 'lbc-wrapper/lib/button'
import Input from 'lbc-wrapper/lib/input'
import Select from 'lbc-wrapper/lib/select'
import './style'

const COLUMNS = 3

const colSpan = {
  sm: { span: 24 },
  md: { span: 24 / COLUMNS },
}

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

export interface FieldsItem {
  id: string;
  label: string;
  colSpan?: any;
  required?: boolean;
}

export interface FieldsComponentProps {
  query: (param?: any) => any;
  fields: Array<Array<FieldsItem>>;
  loadOnMount: boolean;
  queryRegister: (cb: () => any) => void;
}

export interface FieldsState {
  collapsed: boolean;
  loading: boolean;
}

type FieldsProps = FieldsComponentProps & FormComponentProps

class Fields extends React.Component<FieldsProps, FieldsState> {
  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.array),
    form: PropTypes.object.isRequired,
    query: PropTypes.func.isRequired,
    loadOnMount: PropTypes.bool,
    queryRegister: PropTypes.func.isRequired,
  }

  static defaultProps = {
    fields: [],
    loadOnMount: true,
  }

  constructor(props: FieldsProps) {
    super(props)

    this.state = {
      collapsed: true,
      loading: false,
    }

    this.renderButtons = this.renderButtons.bind(this)
    this.renderFormItems = this.renderFormItems.bind(this)
    this.renderFormItem = this.renderFormItem.bind(this)
    this.renderFormItemByType = this.renderFormItemByType.bind(this)
    this.renderFormItemSelect = this.renderFormItemSelect.bind(this)
    this.renderFormItemInput = this.renderFormItemInput.bind(this)
    this.query = this.query.bind(this)
    this.reset = this.reset.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  componentDidMount() {
    this.props.queryRegister(this.query)
    if (this.props.loadOnMount) {
      this.query()
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps.form)
  //   console.log(this.props.form)
  //   return !is(this.state.data, nextState.data) ||
  //     nextProps.fields !== this.props.fields //||
  //     // this.props.form !== nextProps.form
  // }

  query() {
    const { query, form, fields } = this.props
    const collapsed = this.state.collapsed

    const fieldIDs = (collapsed ? fields[0] : [...this.props.fields[0], ...this.props.fields[1]]).map(f => f.id)
    form.validateFields(fieldIDs, {}, (errors, values) => {
      if (errors) {
        return
      }

      this.setState({
        loading: true,
      })

      const toBeSent: {
        [index: string]: any
      } = {}
      fieldIDs.forEach((f) => {
        toBeSent[f] = values[f]
      })

      const retPromise = query(toBeSent)

      if (!retPromise) {
        this.setState({
          loading: false,
        })
        return
      }

      retPromise.then(() => {
        this.setState({
          loading: false,
        })
      }).catch(() => {
        this.setState({
          loading: false,
        })
      })
    })
  }

  reset() {
    this.props.form.resetFields()
  }

  toggleForm() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  renderButtons() {
    const { fields } = this.props
    const collapsed = this.state.collapsed
    const noCollapse = fields.length === 1 || fields[1].length === 1
    const fieldsNum = collapsed ? fields[0].length : (fields[0].length + (fields[1] ? fields[1].length : 0))
    const allLine = fieldsNum % COLUMNS === 0 // 独占一行

    const collapseButton = (
      <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
        {
          collapsed ? (<span>展开 <Icon type="down" /></span>) : (<span>收起 <Icon type="up" /></span>)
        }
      </a>
    )

    const buttons = (
      <div className="lb-query-table-buttons">
        <span style={allLine ? { display: 'block', float: 'right' } : {}}>
          <Button type="primary" htmlType="submit" onClick={this.query} loading={this.state.loading}>
            查询
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={this.reset}>
            重置
          </Button>
          {
            noCollapse ? null : collapseButton
          }
        </span>
      </div>
    )



    return (
      <Col {...colSpan} offset={allLine ? (24 - (24 / COLUMNS)) : 0}>
        {
          buttons
        }
      </Col>
    )
  }

  renderFormItems() {
    const fields = this.state.collapsed ? this.props.fields[0] : [...this.props.fields[0], ...this.props.fields[1]]

    return fields.map(f => (
      <Col {...(f.colSpan || colSpan)} key={f.id}>
        {this.renderFormItem(f)}
      </Col>
    ))
  }

  renderFormItem(field: any) {
    const { form } = this.props
    const { getFieldDecorator } = form

    const item = this.renderFormItemByType(field)

    return (
      <SimpleFormItem
        label={field.label}
        required={field.required}

      >
        {
          getFieldDecorator(field.id, {
            initialValue: field.defaultValue,
            onChange: field.onChange,
            rules: [
              { required: field.required, message: `请选择${field.label}` },
            ],
          })(item)
        }
      </SimpleFormItem>

    )
  }

  renderFormItemByType(field) {
    if (field.render) {
      return field.render()
    }

    if (field.type === 'Select') {
      return this.renderFormItemSelect(field)
    }

    return this.renderFormItemInput(field)
  }

  renderFormItemSelect(field) {
    const select = (
      <Select allowClear={!field.required} dropdownMatchSelectWidth={false} style={{ width: '100%' }} options={field.options} />
    )

    return select
  }

  renderFormItemInput(field) {
    return (<Input placeholder={field.placeholder} type={field.type} />)
  }

  render() {
    const { fields } = this.props
    if (!fields || fields.length === 0) {
      return null
    }

    return (
      <div className="lb-query-table-fields">
        <Form layout="inline">
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            {
              this.renderFormItems()
            }
            {
              this.renderButtons()
            }
          </Row>
        </Form>
      </div>
    )
  }
}



export default Form.create()(Fields)
