import styled from 'styled-components'
import { 
  mainLightBlue, 
  mainDarkGray, 
  mainBlue,
  mainWhite
} from '../../../constants/colors'


export const CreateTripContainer = styled.div`
  background-color: ${mainLightBlue};
  color: ${mainDarkGray};
  text-align: center;
  padding: 100px 0 10px 0;  
  justify-items: center;
`

export const Title = styled.h3`
  margin-bottom: 2%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
  margin: 25px auto 0 auto;
`

export const InputCreateTrip = styled.input`
  border: none;
  background-color: none;
  width: 100%;
  height: 5vh;
  margin-bottom: 15px;
  padding: 5px;

  @media screen and (min-width: 1080px) {
    border: none;
    background-color: none;
    width: 22vw;
    height: 4vh;
    margin: 8px;
    padding: 5px;
  }
`

export const TextAreaCreateTrip = styled.textarea`
  border: none;
  background-color: none;
  width: 100%;
  height: 30vh;
  margin-bottom: 15px;
  padding: 5px;

  @media screen and (min-width: 1080px) {
    border: none;
    background-color: none;
    width: 22vw;
    height: 25vh;
    margin: 8px;
    padding: 5px;
  }
`

export const ButtonSaveTrip = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 35vw;
  height: 6vh;
  margin: 10px auto 0 auto;
  background-color: ${mainBlue};
  border-color: ${mainBlue};
  border-style: solid;
  color: ${mainWhite};
  border-radius: 6px;
  text-transform: uppercase;

  @media screen and (min-width: 1080px) {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    width: 12vw;
    padding: 10px;
    margin-top: 2%;
    background-color: ${mainBlue};
    border-color: ${mainBlue};
    border-style: solid;
    color: ${mainWhite};
    border-radius: 6px;
    cursor: pointer;
  }
`



