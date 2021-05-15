import { Fragment } from 'react'
import * as S from '../trips/styled'
import { useRequestData } from '../../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../../../constants/RequestConfig'
import CircularIndeterminate from '../../../components/Loading/Loading'
import { goToApplicationForm } from '../../../routes/coordinator'



function ListTripsPage() {
    window.document.title = "LabeX | Viagens disponíveis"

    const getTrips = useRequestData(`${BASE_URL}/trips`, [])

    const history = useHistory()

    return (
        <S.MainContainer>
            <S.TripsTitle>Viagens disponíveis:</S.TripsTitle>
            <S.ListContainer>
                {getTrips.length === 0 ? <CircularIndeterminate /> : (
                    <Fragment>
                        {getTrips.map(trip => {
                            if (trip.length === 0) {
                                return <p>Nenhuma viagens disponível no momento.</p>
                            }
                            return (
                                <S.TripsContainer key={trip.id}>
                                    <S.NameTrip>
                                        {trip.name}
                                    </S.NameTrip>
                                    <S.InfoTrip>
                                        <p>Data da viagem:
                                   <br />
                                            {trip.date}
                                        </p>
                                        <p>Descrição:
                                   <br />
                                            {trip.description}
                                        </p>
                                        <S.ButtonContainer>
                                            <S.ButtonRegister
                                                onClick={() => goToApplicationForm(trip.id, history)}
                                            >
                                                INSCRIÇÃO
                                            </S.ButtonRegister>
                                        </S.ButtonContainer>
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