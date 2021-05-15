import React from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import * as S from './styled'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../../constants/RequestConfig'



function ApplicationFormPage() {
    window.document.title = "LabeX | Cadastro"

    const [form, onChange] = useForm({
        name: '', 
        age: '', 
        profession: '', 
        country: '', 
        applicationText: ''
    })

    const pathParams = useParams()
    const id = pathParams.id
    

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const singUpTrip = (event) => {
        const body = {
            name: form.name,
            age: form.age,
            profession: form.profession,
            country: form.country,
            applicationText: form.applicationText
        }

        event.preventDefault()
   
        axios.post(`${BASE_URL}/trips/${id}/apply`, body, axiosConfig).then(() => {
           alert('cadastro enviado com sucesso!')
        }).catch((error) => {
            alert('Erro ao enviar cadastro!')
            console.log(error)
        })
    }


    return (
        <S.FormContainer>
            <S.Title>Formulário de inscrição:</S.Title>
            <S.Form onSubmit={onSubmitForm}>
            <S.InputRegister 
                value={form.name} 
                onChange={onChange}
                placeholder={'Nome'} 
                name={'name'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                required
            />
            <S.InputRegister 
                value={form.age} 
                onChange={onChange} 
                placeholder={'Idade'}
                name={'age'}
                type={'number'}
                required 
            />
            <S.InputRegister 
                value={form.applicationText} 
                onChange={onChange}
                placeholder={'Motivo'}
                name={'applicationText'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                maxLength={'70'}
                required 
            />
            <S.InputRegister 
                value={form.profession} 
                onChange={onChange}
                placeholder={'Profissão'} 
                name={'profession'}
                type={'text'}
                required
            />
            <S.InputRegister 
                value={form.country} 
                onChange={onChange}
                placeholder={'País onde reside'}
                name={'country'}
                type={'text'}
                required 
            />
            <S.ButtonSubmit onClick={singUpTrip}>
                Enviar inscrição
            </S.ButtonSubmit>
            </S.Form>
        </S.FormContainer>
    )
}
export default ApplicationFormPage;