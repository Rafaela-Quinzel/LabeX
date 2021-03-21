import { TripsTitle, ListContainer, TripsContainer, NameTrip, InfoTrip } from '../trips/styled'
import { ButtonRegister } from '../../../constants/buttons'
import { useRequestData } from '../../../hooks/useRequestData'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../../../constants/RequestConfig'
import CircularIndeterminate from '../../../components/Loading'



function ListTripsPage() {

    const getTrips = useRequestData(`${BASE_URL}/trips`, [])

    const history = useHistory()

    const goToApplicationForm = (id) => {
        history.push(`/inscricao/${id}/apply`)
    }

    return getTrips ? (
        <div>
            <Header />
            <TripsTitle>Viagens disponíveis:</TripsTitle>
            <ListContainer>
                {getTrips.map(trip => {
                    return (
                        <TripsContainer key={trip.id}>
                            <NameTrip>
                                {trip.name}
                            </NameTrip>
                            <InfoTrip>
                                <p>Data da viagem:
                                   <br />
                                    {trip.date}
                                </p>
                                <p>Descrição:
                                   <br />
                                    {trip.description}
                                </p>
                                <ButtonRegister onClick={() => goToApplicationForm(trip.id)}>
                                    INSCRIÇÃO
                                </ButtonRegister>
                            </InfoTrip>
                        </TripsContainer>
                    )
                })}
            </ListContainer>
            <Footer />
        </div>
    ) : (
        <CircularIndeterminate />
    )
}
export default ListTripsPage