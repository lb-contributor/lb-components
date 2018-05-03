import React, { Component } from 'react'
import { Select } from 'antd'
import { formBaseCompare, shallowCompareArr } from '../utils/compare'


class SelectWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps) ||
      !shallowCompareArr(this.props.options, nextProps.options)
  }
  render() {
    console.log('----render SelectWrapper----')
    const { options, ...props } = this.props
    return options ? (
      <Select {...props}>
        {
          options.map(o => (<Select.Option {...o}>{o.title}</Select.Option>))
        }
      </Select>
    ) : (<Select {...this.props} />)
  }
}

export default SelectWrapper
export const { Option } = Select
