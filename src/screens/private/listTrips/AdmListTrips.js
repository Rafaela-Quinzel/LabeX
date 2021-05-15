import { Fragment } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useRequestData } from '../../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../../../constants/RequestConfig'
import CircularIndeterminate from '../../../components/Loading/Loading'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { useUnProtectedPage } from '../../../hooks/useUnProtectedPage'




function ListTripsPage() {
    window.document.title = "LabeX | Viagens"

    useProtectedPage()
    useUnProtectedPage()


    const history = useHistory()

    const getTrips = useRequestData(`${BASE_URL}/trips`, [])


    const deleteTrip = (id) => {
        axios
            .delete(`${BASE_URL}/trips/${id}`,
                {
                    headers: {
                        auth: localStorage.getItem('token')
                    }
                })
            .then((response) => {
                alert('Viagem deletada!')
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const goToTripDetailsPage = (id) => {
        history.push(`/detalhes_da_viagem/${id}`)
    }


    return  (
        <S.MainContainer>
            <S.TripsTitle>Viagens cadastradas:</S.TripsTitle>
            <S.ListContainer>
                {getTrips.length === 0 ? <CircularIndeterminate /> : (
                    <Fragment>
                {getTrips.map(trip => {
                    return (
                        <S.TripsContainer key={trip.id}>
                            <S.NameTrip>
                                {trip.name}
                            </S.NameTrip>
                            <S.InfoTrip>
                                <p>Planeta:
                                    <br />
                                    {trip.planet}
                                </p>
                                <p>Data da viagem:
                                    <br />
                                    {trip.date}
                                </p>
                                <p>Duração da viagem:
                                    <br />
                                    {trip.durationInDays} dias
                                    </p>
                                <p>Descrição da viagem:
                                    <br />
                                    {trip.description}
                                </p>
                                <S.ButtonsContainer>
                                <S.ButtonDetails onClick={() => goToTripDetailsPage(trip.id)}>
                                    Detalhes
                                </S.ButtonDetails>
                                <S.ButtonDelete onClick={() => deleteTrip(trip.id)}>
                                    Excluir
                                </S.ButtonDelete >
                                </S.ButtonsContainer>
                            </S.InfoTrip>
                        </S.TripsContainer>  
                    )
                })}
                </Fragment>
                )}
            </S.ListContainer>
        </S.MainContainer>  
    )
}
export default ListTripsPage