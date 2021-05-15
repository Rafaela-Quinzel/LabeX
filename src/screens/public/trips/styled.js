import styled from 'styled-components'
import {
  mainGray,
  mainDarkOrange,
  mainLightBlue,
  mainDarkGray,
  mainWhite
} from '../../../constants/colors'


export const MainContainer = styled.div`
  padding-top: 100px;
`

export const TripsTitle = styled.h2`
  color: ${mainGray};
  text-align: center;
  font-size: 1.5rem;
  margin: 12px auto;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2em;
    justify-items: center;
    margin: 5%;
  }
`

export const TripsContainer = styled.div`
  overflow: auto;
  text-align: center;
  background-color: ${mainLightBlue};
  border-radius: 10px;
  width: 80vw;
  height: 35vh;
  padding: 5% 2% 2% 2%;
  margin: 20px auto;

  @media screen and (min-width: 1080px) {
    overflow: auto;
    text-align: center;
    background-color: ${mainLightBlue};
    border-radius: 10px;
    width: 20vw;
    height: 52vh;
    padding: 5% 2% 2% 2%;
  }
`

export const NameTrip = styled.h3`
  color: ${mainDarkOrange};
  padding: 4% 4%;
  font-size: 1.2rem;

  @media screen and (min-width: 1080px) {
    color: ${mainDarkOrange};
    padding: 4% 4%;
  }
`

export const InfoTrip = styled.p`
  color: ${mainDarkGray};
  font-size: 0.8rem;
  text-align: center;
  padding: 3%;
  line-height: 1.8rem;

  @media screen and (min-width: 1080px) {
    color: ${mainDarkGray};
    font-size: 14px;
    text-align: center;
    padding: 3%;
    line-height: 1.8rem;
  }
`

export const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;
  padding-bottom: 10px;
`

export const ButtonRegister= styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  width: 100px;
  padding: 10px;
  /* margin-top: 12px; */
  background-color: ${mainDarkOrange};
  color: ${mainWhite};
  border-radius: 6px;
  border: 0;

  @media screen and (min-width: 1080px) {
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    width: 10vw;
    padding: 8px;
    margin-top: 12px;
    background-color: ${mainDarkOrange};
    color: ${mainWhite};
    border-radius: 6px;
    border: 0;
  }

`





