import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styled'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../../constants/RequestConfig'



function AdmTripDetailsPage() {
    window.document.title = "LabeX | Detalhes das Viagens"

    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const pathParams = useParams()
    const id = pathParams.id


    useProtectedPage()

    useEffect(() => {
        getTripDetails()
    })


    const getTripDetails = () => {
        axios.get(`${BASE_URL}/trip/${id}`, axiosConfig).then((response) => {
            setTrip(response.data.trip)
            setCandidates(response.data.trip.candidates)
        }).catch((error) => {
            console.log(error)
        })
    }


    const aceptApplication = (candidateId, approve) => {
        const body = {
            approve: approve
        }
        axios
            .put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig)
            .then(() => {
                alert("Candidato aprovado!")
                getTripDetails()
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const rejectApplication = (candidateId, approve) => {
        const body = {
            approve: approve
        }
        axios.put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig).then(() => {
            alert("Candidato reprovado!")
            getTripDetails()
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <S.DetailsContainer>
            <S.TitlePage>Detalhes da Viagem:</S.TitlePage>
            <S.DetailsTrip>
                <S.CandidatesContainer>
                    <h4>Candidaturas:</h4>
                    {trip.candidates && trip.candidates.map(candidate => {
                        return (
                            <S.Candidates key={candidate.id}>
                                <p>Nome: {candidate.name} </p>
                                <p>Idade: {candidate.age} </p>
                                <p>Profissão: {candidate.profession} </p>
                                <p>País: {candidate.country} </p>
                                <p>Motivo:
                                    <br />
                                    {candidate.applicationText}
                                </p>
                                <S.ButtonsContainer>
                                    <S.ButtonAcceptedCandidate onClick={() => aceptApplication(candidate.id, true)}>
                                        Aceitar
                                    </S.ButtonAcceptedCandidate>
                                    <S.ButtonDeleteCandidate onClick={() => rejectApplication(candidate.id, false)}>
                                        Recusar
                                    </S.ButtonDeleteCandidate>
                                </S.ButtonsContainer>
                            </S.Candidates>
                        )
                    })}
                </S.CandidatesContainer>
                <S.AcceptedCandidatesContainer>
                    <h4>Candidatos Aprovados:</h4>
                    {trip.approved && trip.approved.map(user => {
                        return (
                            <S.AcceptedCandidates key={user.id}>
                                <p>Nome: {user.name}</p>
                                <p>Idade: {user.age}</p>
                                <p>Profissão: {user.profession}</p>
                                <p>País: {user.country}</p>
                                <p>Motivo: {user.applicationText}</p>
                            </S.AcceptedCandidates>
                        )
                    })}
                </S.AcceptedCandidatesContainer>
            </S.DetailsTrip>
        </S.DetailsContainer>
    )
}
export default AdmTripDetailsPage