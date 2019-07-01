import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Content = ({ children }) => {
  return (
    <div className="content">
      {children}

      <style jsx>{styles}</style>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default memo(Content)
