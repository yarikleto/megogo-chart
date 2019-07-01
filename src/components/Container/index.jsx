import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Container = props => {
  const { children } = props
  return (
    <div className="container">
      {children}

      <style jsx>{styles}</style>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default memo(Container)
