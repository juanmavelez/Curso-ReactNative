import React from 'react'
import { useImputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './stlyes'

export const UserForm = ({ onSubmit, title }) => {
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
      <Title> {title} </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Email' {...email}
        />
        <Input placeholder='Contraseña' type='password' {...password} />
        <Button> {title} </Button>
      </Form>
    </>
  )
}
