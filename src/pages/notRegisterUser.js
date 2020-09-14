import React from 'react'
import Context from '../context'
import { UserForm } from '../components/userForm'
import { RegisterMutation } from '../container/registerMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables })
                      .then(activateAuth)
                  }
                  return <UserForm title='Registrarse' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>

            <UserForm title='Iniciar' Sesion onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
