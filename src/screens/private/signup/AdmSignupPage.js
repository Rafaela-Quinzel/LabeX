import React from 'react'
import axios from 'axios'
import { LoginContainer } from './styled'
import { ButtonSaveLogin } from '../../../constants/buttons'
import { InputLogin } from '../../../constants/inputs'
import { useForm } from '../../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { axiosConfig, BASE_URL } from '../../../constants/RequestConfig'


function SignupPage() {
    const [form, onChange] = useForm({
        email: '',
        password: ''
    })

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
    }


    const newLogin = (event) => {
        const body = {
            email: form.email,
            password: form.password
        }

        event.preventDefault()
   
        axios.post(`${BASE_URL}/signup`, body, axiosConfig).then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push('/login')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <LoginContainer>
            <form onSubmit={onSubmitForm}>
            <h3>Cadastrar Login:</h3>
            <InputLogin 
            value={form.email} 
            onChange={onChange}
            placeholder={'E-mail'}
            name={'email'}
            type={'email'} 
            pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
            required
        />
            <br />
        <InputLogin 
            value={form.password} 
            onChange={onChange}
            placeholder={'Senha'}
            name={'password'}
            type={'password'}
            required
        />
            <br/>
        <ButtonSaveLogin onClick={newLogin}>
            SALVAR
        </ButtonSaveLogin>
        </form>
        </LoginContainer>
    )
}
export default SignupPage