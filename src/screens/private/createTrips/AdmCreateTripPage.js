import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { CreateTripContainer } from './styled'
import { ButtonSaveTrip } from '../../../constants/buttons'
import { InputCreateTrip, TextAreaCreateTrip } from '../../../constants/inputs'
import axios from 'axios'
import { axiosConfig, BASE_URL } from '../../../constants/RequestConfig'


function CreateTripPage() {
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
        <CreateTripContainer>
            <h3>Criar Viagem:</h3>
            <form onSubmit={onSubmitForm}>
                <InputCreateTrip 
                    value={form.name} 
                    onChange={onChange}
                    placeholder={'Nome'}
                    name={'name'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required 
                />
                <br/>
                <InputCreateTrip 
                    value={form.planet} 
                    onChange={onChange}
                    placeholder={'Planeta'}
                    name={'planet'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required  
                />
                <br/>
                <InputCreateTrip 
                    value={form.date} 
                    onChange={onChange}
                    placeholder={'Data'}
                    name={'date'}
                    type={'date'}
                    min={'2020-11-19'}
                    required
                />
                <br/>
                <TextAreaCreateTrip 
                    value={form.description} 
                    onChange={onChange}
                    placeholder={'Descrição'} 
                    name={'description'}
                    type={'text'}
                    maxLength='100'
                    required
                />
                <br/>
                <InputCreateTrip
                    value={form.durationInDays} 
                    onChange={onChange} 
                    placeholder={'Duração em dias'} 
                    name={'durationInDays'}
                    type={'number'}
                 />
                 <br/>
                <ButtonSaveTrip onClick={createTrip}>
                    SALVAR
                </ButtonSaveTrip>
                </form>
        </CreateTripContainer>
    )
}
export default CreateTripPage