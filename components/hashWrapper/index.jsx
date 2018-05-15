import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Popover from 'lbc-wrapper/lib/popover'
import Icon from 'lbc-wrapper/lib/icon'
import message from 'lbc-wrapper/lib/message'
import Clipboard from 'clipboard'

class HashWrapper extends PureComponent {
  componentDidMount() {
    const { showCopy, value } = this.props
    if (!value || !showCopy) {
      return
    }

    this.registerClipboard()
  }


  componentDidUpdate() {
    if (this.props.value && this.props.showCopy && this.button && !this.clipboard) {
      this.registerClipboard()
    }
  }


  componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy()
    }
  }

  registerClipboard = () => {
    message.config({
      duration: 1,
    })

    this.clipboard = new Clipboard(this.button, {
      text: () => this.props.value,
    })

    this.clipboard.on('success', (e) => {
      message.success('copied')
      e.clearSelection()
    })

    this.clipboard.on('error', (e) => {
      console.error(e)
    })
  }

  render() {
    const {
      value, prefix, surfix, showAll, showCopy, showPropover,
    } = this.props

    if (!value) {
      return <div />
    }

    const all = value.length <= (prefix + surfix) || showAll
    return (
      <div style={{ display: 'inline-block' }}>
        {
          all ? (<span>{value}</span>) : (
            !showPropover ? (<span >{`${value.substr(0, prefix)}...${value.substr(0 - surfix)}`}</span>) : (
              <Popover content={value}>
                <span >{`${value.substr(0, prefix)}...${value.substr(0 - surfix)}`}</span>
              </Popover>
            )
          )
        }

        {
          !showCopy ? null : (<span style={{ cursor: 'pointer' }} ref={(t) => { this.button = t }}><Icon type="copy" /></span>)
        }
      </div>
    )
  }
}

HashWrapper.propTypes = {
  value: PropTypes.string,
  prefix: PropTypes.number,
  surfix: PropTypes.number,
  showAll: PropTypes.bool,
  showCopy: PropTypes.bool,
  showPropover: PropTypes.bool,
}

HashWrapper.defaultProps = {
  prefix: 20,
  surfix: 20,
  showAll: false,
  showCopy: true,
  showPropover: true,
  value: '',
}

export default HashWrapper
