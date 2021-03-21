import styled from 'styled-components'
import { mainLightBlue, mainGray } from '../../../constants/colors'



// Styled AdmTripDetailsPage //
export const DetailsContainer = styled.div`
  text-align: center;
`

export const DetailsTrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  margin-bottom: 5%;
`

export const TitlePage = styled.h2`
  color: ${mainGray};
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
`

export const CandidatesContainer = styled.div`
  background-color: ${mainLightBlue};
  overflow: auto;
  padding: 5% 0 4% 0;
  width: 40vw;
  max-height: 70vh;
  margin-right: 5%;
`

export const Candidates = styled.div`
  padding: 5% 2% 2% 2%;
  width: 40vw;
  max-height: 70vh;
  margin-right: 5%;
`

export const AcceptedCandidatesContainer = styled.div`
  background-color: ${mainLightBlue};
  overflow: auto;
  padding: 5% 2% 2% 2%;
  width: 40vw;
  max-height: 70vh;
`

export const AcceptedCandidates = styled.div`
  padding: 3%;
  border-bottom: 1px solid ${mainGray};
`


