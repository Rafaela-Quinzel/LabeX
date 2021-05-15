import styled from 'styled-components'
import {
  mainGray,
  mainDarkOrange,
  mainLightBlue,
  mainDarkGray,
  mainBlue,
  mainWhite
} from '../../../constants/colors'


export const MainContainer = styled.div`
  padding-top: 100px;
`

export const TripsTitle = styled.h2`
  color: ${mainGray};
  text-align: center;
  font-size: 1.2rem;

  @media screen and (min-width: 1080px) {
    color: ${mainGray};
    text-align: center;
    margin-top: 5%;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 84vw;
  margin: 20px auto 10px auto;

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 2em;
    justify-items: center;
    margin: 4% 1%;
  }
`

export const TripsContainer = styled.div`
  overflow: auto;
  line-height: 1.6rem;
  text-align: center;
  background-color: ${mainLightBlue};
  border-radius: 10px;
  width: 100%;
  height: 40vh;
  margin-bottom: 25px;

  @media screen and (min-width: 1080px) {
    overflow: auto;
    line-height: 1.6rem;
    text-align: center;
    background-color: ${mainLightBlue};
    border-radius: 10px;
    width: 22vw;
    height: 65vh;
  }
`

export const NameTrip = styled.h3`
  color: ${mainDarkOrange};
  padding: 10% 2% 3% 2%;
`

export const InfoTrip = styled.p`
  color: ${mainDarkGray};
  font-size: 14px;
  text-align: center;
  padding: 0 4% 4% 5%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 10px auto;
`

export const ButtonDetails = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  width: 25vw;
  height: 6vh;
  margin-top: 15px;
  background-color: ${mainLightBlue};
  border-color: ${mainBlue};
  border-style: solid;
  color: ${mainBlue};
  border-radius: 6px;
  text-transform: uppercase;
 

  @media screen and (min-width: 1080px) {
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    width: 8vw;
    padding: 6px;
    margin-right: 8px;
    margin-top: 15px;
    background-color: ${mainLightBlue};
    border-color: ${mainBlue};
    border-style: solid;
    color: ${mainBlue};
    border-radius: 6px;
    cursor: pointer;
  }
`

export const ButtonDelete = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  width: 25vw;
  height: 6vh;
  margin-top: 15px;
  background-color: ${mainBlue};
  border: 0;
  color: ${mainWhite};
  border-radius: 6px;
  text-transform: uppercase;

  @media screen and (min-width: 1080px) {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    width: 8vw;
    padding: 6px;
    background-color: ${mainBlue};
    border-color: ${mainBlue};
    border-style: solid;
    color: ${mainWhite};
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;
  }
`
