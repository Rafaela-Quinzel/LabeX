import React from 'react'
import { LoginContainer } from './styled'
import { ButtonLogin } from '../../../constants/buttons'
import { InputNewLogin } from '../../../constants/inputs'
import { useForm } from '../../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { axiosConfig, BASE_URL } from '../../../constants/RequestConfig'


function LoginPage() {
    const [form, onChange] = useForm({
        email: '',
        password: ''
    })
    
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const login = () => {
        const body = {
            email: form.email,
            password: form.password
        }
   
        axios.post(`${BASE_URL}/login`, body, axiosConfig).then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push(`/viagens_adm`)
        }).catch((error) => {
            alert('Login inválido!')
            console.log(error)
        })
    }

    return (
        <LoginContainer>
            <h3>Administrador:</h3>
            <form onSubmit={onSubmitForm}>
            <InputNewLogin 
                value={form.email} 
                onChange={onChange}
                placeholder={'E-mail'}
                name={'email'}
                type={'email'}
                pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
                required  
            />
            <br />
            <InputNewLogin 
                value={form.password} 
                onChange={onChange}
                placeholder={'Senha'} 
                name={'password'}
                type={'password'}
                required 
            />
            <br/>
            <ButtonLogin onClick={login}>
                LOGIN
            </ButtonLogin>
            </form>
        </LoginContainer>
    )
}
export default LoginPage