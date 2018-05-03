import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'
import './EditableCell.scss'

class EditableCell extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    let changed = false
    const newState = {}
    if (nextProps.value !== prevState.value) {
      newState.value = nextProps.value
      changed = true
    }

    if (nextProps.editable !== prevState.editable) {
      newState.editable = nextProps.editable
      changed = true
    }

    return changed ? newState : null
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
      editable: props.editable,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value ||
      nextState.editable !== this.state.editable
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ value })
  }
  check = () => {
    this.setState({ editable: false })
    if (this.props.onChange) {
      this.props.onChange(this.state.value)
    }
  }
  edit = () => {
    this.setState({ editable: true })
  }
  render() {
    const { value, editable } = this.state
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    )
  }
}

EditableCell.propTypes = {
  value: PropTypes.string,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
}

EditableCell.defaultProps = {
  value: '',
  editable: false,
}

export default EditableCell
