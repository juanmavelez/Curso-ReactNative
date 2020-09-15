import React, { useContext } from 'react'
import { Context } from '../context'
import { UserForm } from '../components/userForm'
import { RegisterMutation } from '../container/registerMutation'
import { LoginMutation } from '../container/loginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables })
                .then(({ data }) => {
                  const { singup } = data
                  activateAuth(singup)
                })
            }
            const errorMsg = error && 'El usuario ya existe o hay algún problema.'
            return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables })
                .then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                })
            }
            const errorMsg = error && 'La contraseña no es correcta, o el usuario no existe.'

            return <UserForm disabled={loading} error={errorMsg} rtitle='Iniciar' Sesion onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}
