import React from 'react'
import Context from '../context'
import { UserForm } from '../components/userForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <UserForm title='Registrarse' onSubmit={activateAuth} />
            <UserForm title='Iniciar' Sesion onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
