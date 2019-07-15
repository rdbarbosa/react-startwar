import React from 'react'
import PropTypes from 'prop-types'
import './load.css'

const Load = ({ isLoading, children }) =>
  isLoading ? (
    <div className="loader">
      <i className="fa fa-1x fa-rebel fa-spin" />
    </div>
  ) : (
    children
  )

Load.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
}

export default Load