import React from 'react'
import { Button } from './styles'

export const Submitbutton = ({ children, disabled, onClick }) => {
  return <Button onClick={onClick}>
    {
      children
    }
  </Button>
}