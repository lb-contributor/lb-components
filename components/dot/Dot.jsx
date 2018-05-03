import React from 'react'
import PropTypes from 'prop-types'
import './Dot.scss'

const Dot = ({ type = 'success' }) => (
  <span className={`lo-status-dot lo-status-dot-${type}`} />
)
Dot.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Dot
