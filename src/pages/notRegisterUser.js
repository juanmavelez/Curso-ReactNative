import React, { useContext } from 'react'
import { Context } from '../context'
import { UserForm } from '../components/userForm'
import { RegisterMutation } from '../container/registerMutation'
import { LoginMutation } from '../container/loginMutation'
import { DogIcon, DogIconContent } from '../styles/icons'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <DogIconContent>
        <DogIcon className='fas fa-dog' />
      </DogIconContent>

      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables })
                .then(({ data }) => {
                  const { signup } = data
                  activateAuth(signup)
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

            return <UserForm disabled={loading} error={errorMsg} title='Iniciar' Sesion onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}
