import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button onClick={onClick}>
      {
        children
      }
    </Button>
  )
}

SubmitButton.propTypes = {
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}
