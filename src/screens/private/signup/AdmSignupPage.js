import React from 'react'
import axios from 'axios'
import * as S from './styled'
import { useForm } from '../../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { axiosConfig, BASE_URL } from '../../../constants/RequestConfig'


function SignupPage() {
    window.document.title = "LabeX | Cadastrar Login"

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
        <S.LoginContainer>
            <S.Form onSubmit={onSubmitForm}>
            <S.Title>Cadastrar Login:</S.Title>
            <S.InputLogin 
            value={form.email} 
            onChange={onChange}
            placeholder={'E-mail'}
            name={'email'}
            type={'email'} 
            pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
            required
        />
        <S.InputLogin 
            value={form.password} 
            onChange={onChange}
            placeholder={'Senha'}
            name={'password'}
            type={'password'}
            required
        />
        <S.ButtonSaveLogin onClick={newLogin}>
            Salvar
        </S.ButtonSaveLogin>
        </S.Form>
        </S.LoginContainer>
    )
}
export default SignupPage