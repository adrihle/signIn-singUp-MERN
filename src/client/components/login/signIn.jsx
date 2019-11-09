import React from 'react'

//redux
import { useDispatch } from 'react-redux'

//importing components
import { InputField, SubmitButton } from '../form/components'
import Form from '../form/form'

export default function SignIn({schema, action}) {
    const dispatch = useDispatch()
    const onSubmit = data => dispatch(action(data))
    return (
            <Form onSubmit={onSubmit} schema={schema}>
                <InputField label='Email' name='email' />
                <InputField label='Password' name='pass' />
                <SubmitButton text='Sign In' />
            </Form>
    )
}