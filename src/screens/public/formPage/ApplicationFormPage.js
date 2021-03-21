import React from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import { FormContainer, Title } from './styled'
import { ButtonSubmit } from '../../../constants/buttons'
import { InputRegister } from '../../../constants/inputs'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../../constants/RequestConfig'



function ApplicationFormPage() {
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
        <FormContainer>
            <Title>Formulário de inscrição:</Title>
            <form onSubmit={onSubmitForm}>
            <InputRegister 
                value={form.name} 
                onChange={onChange}
                placeholder={'Nome'} 
                name={'name'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                required
            />
            <br/>
            <InputRegister 
                value={form.age} 
                onChange={onChange} 
                placeholder={'Idade'}
                name={'age'}
                type={'number'}
                required 
            />
            <br/>
            <InputRegister 
                value={form.applicationText} 
                onChange={onChange}
                placeholder={'Motivo'}
                name={'applicationText'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                maxLength={'70'}
                required 
            />
            <br/>
            <InputRegister 
                value={form.profession} 
                onChange={onChange}
                placeholder={'Profissão'} 
                name={'profession'}
                type={'text'}
                required
            />
            <br/>
            <InputRegister 
                value={form.country} 
                onChange={onChange}
                placeholder={'País onde reside'}
                name={'country'}
                type={'text'}
                required 
            />
            <br/>
            <ButtonSubmit onClick={singUpTrip}>
                ENVIAR INSCRIÇÃO
            </ButtonSubmit>
            </form>
        </FormContainer>
    )
}
export default ApplicationFormPage;