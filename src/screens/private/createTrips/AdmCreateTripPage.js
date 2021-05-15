import React from 'react'
import axios from 'axios'
import * as S from './styled'
import { useForm } from '../../../hooks/useForm'
import { axiosConfig, BASE_URL } from '../../../constants/RequestConfig'


function CreateTripPage() {
    window.document.title = "LabeX | Criar Viagem"

    const [form, onChange] = useForm({
        email: '', 
        description: '',
        durationInDays: '',
        planet: '',
        date: ''
    })


    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    
   
    const createTrip = (event) => {
        const body = {
            name: form.name,
            description: form.description,
            durationInDays: form.durationInDays,
            planet: form.planet,
            date: form.date
        }
        
        event.preventDefault()

        axios.post(`${BASE_URL}/trips`, body, axiosConfig).then(() => {
            alert('Viagem cadastrada com sucesso!')
        }).catch((error) => {
            alert('Não foi possível cadastrar a viagem!')
            console.log(error)
        })
    }


    return (
        <S.CreateTripContainer>
            <S.Title>Criar Viagem:</S.Title>
            <S.Form onSubmit={onSubmitForm}>
                <S.InputCreateTrip 
                    value={form.name} 
                    onChange={onChange}
                    placeholder={'Nome'}
                    name={'name'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required
                />
                <S.InputCreateTrip 
                    value={form.planet} 
                    onChange={onChange}
                    placeholder={'Planeta'}
                    name={'planet'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required  
                />
                <S.InputCreateTrip 
                    value={form.date} 
                    onChange={onChange}
                    placeholder={'Data'}
                    name={'date'}
                    type={'date'}
                    min={'2020-11-19'}
                    required
                />
                <S.TextAreaCreateTrip 
                    value={form.description} 
                    onChange={onChange}
                    placeholder={'Descrição'} 
                    name={'description'}
                    type={'text'}
                    maxLength='100'
                    required
                />
                <S.InputCreateTrip
                    value={form.durationInDays} 
                    onChange={onChange} 
                    placeholder={'Duração em dias'} 
                    name={'durationInDays'}
                    type={'number'}
                 />
                <S.ButtonSaveTrip onClick={createTrip}>
                    Salvar
                </S.ButtonSaveTrip>
                </S.Form>
        </S.CreateTripContainer>
    )
}
export default CreateTripPage