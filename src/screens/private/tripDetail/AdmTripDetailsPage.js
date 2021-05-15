import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { BASE_URL, axiosConfig } from '../../../constants/RequestConfig'



function AdmTripDetailsPage() {
    window.document.title = "LabeX | Detalhes das Viagens"

    const [candidates, setCandidates] = useState([])
    const [acceptedCandidates, setAcceptedCandidates] = useState([])
    const pathParams = useParams()
    const id = pathParams.id

    useProtectedPage()

    useEffect(() => {
        axios.get(`${BASE_URL}/trip/${id}`, axiosConfig).then((response) => {
            setCandidates(response.data.trip.candidates)
            setAcceptedCandidates(response.data.trip.approved)
        }).catch((error) => {
            console.log(error)
        })
    })


    const aceptApplication = (candidateId, approve) => {
        const body = {
            approve: approve
        }
        axios
            .put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig)
            .then(() => {
                alert("Candidato aprovado!")
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
                    {candidates && candidates.map(candidate => {
                        return (
                            <S.Candidates key={candidate.id}>
                                <p>Nome: {candidate.name} </p>
                                <p>Idade: {candidate.age} </p>
                                <p>Profissão: {candidate.profession} </p>
                                <p>País: {candidate.country} </p>
                                <p>Motivo: {candidate.applicationText}</p>
                                <S.ButtonsContainer>
                                    <S.ButtonAcceptedCandidate onClick={() => aceptApplication(candidate.id, true)}>
                                        Aceitar
                                    </S.ButtonAcceptedCandidate>
                                    <S.ButtonDeleteCandidate onClick={() => rejectApplication(candidate.id, false)}>
                                        Recusar
                                    </S.ButtonDeleteCandidate>
                                </S.ButtonsContainer>
                                <hr />
                            </S.Candidates>
                        )
                    })}
                </S.CandidatesContainer>
                <S.AcceptedCandidatesContainer>
                    <h4>Candidatos Aprovados:</h4>
                    {acceptedCandidates && acceptedCandidates.map(user => {
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