import styled from 'styled-components'
import {
  mainLightBlue,
  mainDarkGray,
  mainBlue,
  mainWhite
} from '../../../constants/colors'


export const FormContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: ${mainLightBlue};
  color: ${mainDarkGray};
  text-align: center;
  padding: 180px 0 10px 0; 
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

  @media screen and (min-width: 600px) {
    width: 60vw;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 1300px) {
    width: 42vw;
    font-size: 0.9rem;
  }
`

export const InputRegister = styled.input`
  border: none;
  background-color: none;
  width: 100%;
  height: 8vh;
  margin-bottom: 20px;
  padding: 10px;
`

export const ButtonSubmit = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 55vw;
  padding: 10px;
  margin: 10px auto 0 auto;
  background-color: ${mainBlue};
  border-color: ${mainBlue};
  border-style: solid;
  color: ${mainWhite};
  border-radius: 6px;
  text-transform: uppercase;

  @media screen and (min-width: 600px) {
    width: 30vw;
    height: 6vh;
  }

  @media screen and (min-width: 768px) {
    width: 35vw;
    height: 6vh;
  }

  @media screen and (min-width: 1024px) {
    width: 20vw;
    padding: 10px;
    margin: 10px auto 0 auto;
    cursor: pointer;
  }

  @media screen and (min-width: 1080px) {
    width: 14vw;
  }
`






