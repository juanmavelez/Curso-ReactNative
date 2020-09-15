import React, { useContext } from 'react'
import { Context } from '../context'
import { Submitbutton } from '../components/submitButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return <>
    <h1>User</h1>
    <Submitbutton onClick={removeAuth}>Cerrar Sesion</Submitbutton>
  </>
}
