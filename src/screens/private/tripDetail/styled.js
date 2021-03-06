import styled from 'styled-components'
import { 
  mainLightBlue, 
  mainGray,
  mainDarkOrange,
  mainWhite,
  mainBlue
 } from '../../../constants/colors'



export const DetailsContainer = styled.div`
  text-align: center;
  padding-top: 100px;
`

export const DetailsTrip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 80vw;
  margin: 10px auto 20px auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    width: 90vw;
  }
`

export const TitlePage = styled.h2`
  color: ${mainGray};
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;

  @media screen and (min-width: 1024px) {
    margin: 100px auto 0 auto;
  }
`

export const CandidatesContainer = styled.div`
  background-color: ${mainLightBlue};
  overflow: auto;
  padding: 20px 10px;
  width: 100%;
  height: 48vh;

  @media screen and (min-width: 1024px) {
    width: 48%;
    height: 85%;
  }
 
  @media screen and (min-width: 1080px) {
    background-color: ${mainLightBlue};
    overflow: auto;
    padding: 5% 0 4% 0;
    width: 40vw;
    max-height: 70vh;
    margin-right: 5%;
  }
`

export const Candidates = styled.div`
  padding: 5% 2% 2% 2%;
  max-height: 70vh;
  margin: 10px auto 0 auto;
`

export const AcceptedCandidatesContainer = styled.div`
  background-color: ${mainLightBlue};
  overflow: auto;
  padding: 20px 10px;
  width: 100%;
  height: 48vh;

  @media screen and (min-width: 1024px) {
    width: 48%;
    height: 85%;
  }

  @media screen and (min-width: 1080px) {
    background-color: ${mainLightBlue};
    overflow: auto;
    padding: 5% 2% 2% 2%;
    width: 40vw;
    max-height: 70vh;
  }
`

export const AcceptedCandidates = styled.div`
  padding: 3%;
  border-bottom: 1px solid ${mainGray};
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 10px auto;

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`

export const ButtonAcceptedCandidate = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  width: 25vw;
  height: 5vh;
  background-color: ${mainBlue};
  margin-top: 20px;
  border: 0;
  color: ${mainWhite};
  border-radius: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    width: 30%;
  }


  @media screen and (min-width: 1080px) {
    font-size: 12px;
    width: 8vw;
    padding: 6px;
    margin-top: 20px;
    cursor: pointer;
  }
`

export const ButtonDeleteCandidate = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  width: 25vw;
  height: 5vh;
  margin-top: 20px;
  background-color: ${mainDarkOrange};
  border: 0;
  color: ${mainWhite};
  border-radius: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    width: 30%;
    cursor: pointer;
  }

  @media screen and (min-width: 1080px) {
    font-size: 12px;
    width: 8vw;
    padding: 6px;
    cursor: pointer;
  }
`


