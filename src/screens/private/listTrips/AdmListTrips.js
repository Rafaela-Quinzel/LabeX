import { TripsTitle, InfoTrip, ListContainer, TripsContainer, NameTrip } from './styled'
import { useRequestData } from '../../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { ButtonDetails, ButtonDelete } from '../../../constants/buttons'
import axios from 'axios'
import { BASE_URL } from '../../../constants/RequestConfig'
import CircularIndeterminate from '../../../components/Loading'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { useUnProtectedPage } from '../../../hooks/useUnProtectedPage'



function ListTripsPage() {

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


    return getTrips ? (
        <>
            <TripsTitle>Viagens cadastradas:</TripsTitle>
            <ListContainer>
                {getTrips.map(trip => {
                    return (
                        <TripsContainer key={trip.id}>
                            <NameTrip>
                                {trip.name}
                            </NameTrip>
                            <InfoTrip>
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
                                <ButtonDetails onClick={() => goToTripDetailsPage(trip.id)}>
                                    DETALHES
                                </ButtonDetails>
                                <ButtonDelete onClick={() => deleteTrip(trip.id)}>
                                    EXCLUIR
                                </ButtonDelete >
                            </InfoTrip>
                        </TripsContainer>
                    )
                })}
            </ListContainer>
        </>
    ) : (
        <CircularIndeterminate />
    )
}
export default ListTripsPage