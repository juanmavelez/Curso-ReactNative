import React from 'react'
import { useImputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './stlyes'

export const UserForm = ({ onSubmit, title }) => {
  const email = useImputValue('')
  const password = useImputValue('')

  return (
    <>
      <Title> {title} </Title>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder='Email' {...email}
        />
        <Input placeholder='Email' type='password' {...password} />
        <Button> {title} </Button>
      </Form>
    </>
  )
}
