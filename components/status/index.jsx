import React from 'react'
import PropTypes from 'prop-types'
import Dot from '../dot'

const SUCCESS = ['started', 'normal', 'suc', 'success']
const PROCESSING = ['send']
const ERROR = ['failed']

const Status = ({ status = '' }) => {
  let type = ''
  if (SUCCESS.some(s => s === status.toLowerCase())) {
    type = 'success'
  } else if (PROCESSING.some(p => p === status.toLowerCase())) {
    type = 'processing'
  } else if (ERROR.some(e => e === status.toLowerCase())) {
    type = 'error'
  }

  return (
    <span>
      <Dot type={type} />
      <span style={{ display: 'inline-block', marginLeft: '8px' }}>{status}</span>
    </span>
  )
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
}

export default Status
