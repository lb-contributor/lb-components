import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Cascader } from 'antd'
import { formBaseCompare } from '../utils/compare'

class City extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [],
    }

    this.loadOptions = this.loadOptions.bind(this)
  }

  componentDidMount() {
    this.loadOptions()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !formBaseCompare(this.props, nextProps) ||
      this.state.options !== nextState.options
  }

  loadOptions() {
    const loader = this.props.loader || this.loader

    loader.call(this).then((options) => {
      this.setState({
        options,
      })
    })
  }

  loader() {
    return import('./cities.json')
  }

  render() {
    const { options, props } = this.props
    return (
      <Cascader
        options={this.state.options}
        style={{ width: '95%' }}
        {...props}
        placeholder="请选择地区"
      />
    )
  }
}

City.propTypes = {
  loader: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
}

export default City
