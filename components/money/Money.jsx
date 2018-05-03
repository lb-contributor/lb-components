import React, { Component } from 'react'
import { InputNumber } from 'antd'
import { formBaseCompare } from '../utils/compare'

class Money extends Component {
  shouldComponentUpdate(nextProps) {
    return !formBaseCompare(this.props, nextProps)
  }

  render() {
    return (
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        {...this.props}
      />
    )
  }
}

export default Money
