import React from 'react'
import * as S from './styled'
import { useForm } from '../../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { axiosConfig, BASE_URL } from '../../../constants/RequestConfig'


function LoginPage() {
    window.document.title = "LabeX | Login ADM"

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
        <S.LoginContainer>
            <S.Title>Administrador:</S.Title>
            <S.Form onSubmit={onSubmitForm}>
                <S.InputNewLogin
                    value={form.email}
                    onChange={onChange}
                    placeholder={'E-mail'}
                    name={'email'}
                    type={'email'}
                    pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
                    required
                />
                <S.InputNewLogin
                    value={form.password}
                    onChange={onChange}
                    placeholder={'Senha'}
                    name={'password'}
                    type={'password'}
                    required
                />
                <S.ButtonLogin onClick={login}>
                    Login
            </S.ButtonLogin>
            </S.Form>
        </S.LoginContainer>
    )
}
export default LoginPage