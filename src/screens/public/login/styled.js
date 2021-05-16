import styled from 'styled-components'
import {
  mainLightBlue,
  mainDarkGray,
  mainBlue,
  mainWhite
} from '../../../constants/colors'


export const LoginContainer = styled.div`
  background-color: ${mainLightBlue};
  color: ${mainDarkGray};
  text-align: center;
  padding: 200px 0 10px 0;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  margin-bottom: 2%;

  @media screen and (min-width: 1024px) {
    margin: 50px auto 0 auto;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
  margin: 25px auto 0 auto;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }

  @media screen and (min-width: 1024px) {
    width: 50vw;
    margin: 40px auto 0 auto;
  }

  @media screen and (min-width: 1300px) {
    width: 35vw;
  }
`

export const InputLogin = styled.input`
  border: none;
  background-color: none;
  width: 100%;
  height: 8vh;
  margin-bottom: 20px;
  padding: 10px;
`

export const ButtonLogin = styled.button`
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
    width: 20vw;
    height: 6vh;
  }

  @media screen and (min-width: 1080px) {
    width: 12vw;
    padding: 10px;
    margin-top: 2%;
    cursor: pointer;
  }

  @media screen and (min-width: 1300px) {
    width: 10vw;
    font-size: 1rem;
  }
`



