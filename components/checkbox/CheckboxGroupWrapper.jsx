import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { formBaseCompare, shallowCompareArr } from '../utils/compare'
const CheckboxGroup = Checkbox.Group


class CheckboxGroupWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps) ||
      !shallowCompareArr(this.props.options, nextProps.options)
  }
  render() {
    return (<CheckboxGroup {...this.props} />)
  }
}

export default CheckboxGroupWrapper
