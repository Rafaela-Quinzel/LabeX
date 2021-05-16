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
  margin: 85px auto 40px auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
  margin: 25px auto 0 auto;

  @media screen and (min-width: 1024px) {
    width: 60vw;
  }

  @media screen and (min-width: 1080px) {
    width: 40vw;
  }
`

export const InputCreateTrip = styled.input`
  border: none;
  background-color: none;
  width: 100%;
  height: 5vh;
  margin-bottom: 15px;
  padding: 5px;
`

export const TextAreaCreateTrip = styled.textarea`
  border: none;
  background-color: none;
  width: 100%;
  height: 30vh;
  margin-bottom: 15px;
  padding: 5px;
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

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
    width: 20vw;
    margin-top: 4%;
    cursor: pointer;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1rem;
    width: 15vw;
    margin-top: 4%;
  }
`



