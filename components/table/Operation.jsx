import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon, Popconfirm } from 'antd'

class Operation extends PureComponent {
  constructor(props) {
    super(props)

    this.renderLink = this.renderLink.bind(this)
    this.renderList = this.renderList.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
  }

  renderLink(item, key) {
    let { disabled } = item
    if (disabled !== undefined && typeof disabled === 'function') {
      disabled = disabled(this.props.cellData, this.props.rowData)
    }

    const handler = () => { item.handler(this.props.cellData, this.props.rowData) }

    if (item.confirm) {
      return (
        <Popconfirm title={item.message} onConfirm={handler} key={key}>
          <a key={key} href="javascript:;">{item.label}</a>
        </Popconfirm>
      )
    }

    return (
      <a key={key} href="javascript:;" onClick={handler}>{item.label}</a>
    )
  }

  renderList() {
    const result = this.list
      .map((op, index) => this.renderLink(op, index))
    return result
  }

  renderMenu() {
    if (this.props.list.length === 0) {
      return null
    }

    const first = this.renderLink(this.props.list[0], 0)
    if (this.props.list.length === 1) {
      return [first]
    }

    const otherOps = this.props.list.slice(1)

    const menu = (
      <Menu>
        {
          otherOps.map((op, index) => (<Menu.Item key={`item${index}`}>{this.renderLink(op, index)}</Menu.Item>))
        }
      </Menu>
    )
    const second = (
      <Dropdown overlay={menu} trigger={['click']} key="dropdown">
        <a className="ant-dropdown-link" href="javascript:;" key="more">
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    )

    return [first, second]
  }

  render() {
    let items = this.props.type === 'list' ? this.renderList() : this.renderMenu()
    items = items.reduce((newop, item, index) => {
      if (item) {
        if (index > 0) {
          newop.push((<span key={`divisor${index}`}>{' | '}</span>))
        }
        newop.push(item)
      }
      return newop
    }, [])

    return (
      <span>
        {
          items
        }
      </span>
    )
  }
}

Operation.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  rowData: PropTypes.object,
  cellData: PropTypes.any,
}

Operation.defaultProps = {
  rowData: {},
  cellData: '',
}

export default Operation
