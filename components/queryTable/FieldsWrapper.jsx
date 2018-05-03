import React, { Component } from 'react'
import Fields from './Fields'

export default class FieldsWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.fields !== nextProps.fields
  }

  render() {
    return (
      <Fields {...this.props} />
    )
  }
}
