import React from 'react'
import { useImputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Title } from './stlyes'
import { Submitbutton } from '../submitButton'
export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useImputValue('')
  const password = useImputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title> {title} </Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Contraseña' type='password' {...password} />
        <Submitbutton disabled={disabled}> {title} </Submitbutton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
