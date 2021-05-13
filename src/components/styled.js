import styled from 'styled-components'
import { mainBlue, 
   mainWhite, 
   mainDarkGray, 
   mainOrange, 
   mainDarkOrange, 
   mainRed, 
   mainLightBlue 
} from '../constants/colors'
import { Link } from 'react-router-dom'


// Styled Header
export const HeaderContainer = styled.header`
   font-family: 'Roboto', sans-serif;
   background-color: ${mainBlue};
   color: white;
   width: 100%;
   height: 10vh;
   position: fixed;
   z-index: 10;

   @media screen and (min-width: 1080px) {
      height: 14vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
   }
`

export const Logo = styled.img`
   width: 85px;
   margin: 15px 55px 2px 18px;

   @media screen and (min-width: 1080px) {
      width: 150px;
      margin: 0 12% 0 0;
   }
`

export const Menu = styled(Link)`
   font-family: 'Roboto', sans-serif;
   cursor: pointer;
   text-decoration: none;
   text-align: center;
   border-bottom: 1px outset white;
   font-size: 16px;
   margin-top: 20px;
   width: 100%;
   color: ${mainWhite};
   text-transform: uppercase;

   &:focus {
      color: orange;
   }

   @media screen and (min-width: 1080px) {
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
      text-decoration: none;
      font-size: 16px;
      margin-right: 4%;
      color: ${mainWhite};
      /* border: 1px solid red; */
      height: 20px;
      
      &:hover {
        border-bottom: 3px solid orange;
      }
   }
`


export const MenuContainer = styled.div`
   display: grid;
   align-items: center;
   background: ${mainDarkGray};
   z-index: 1;
     /* border: 1px solid red; */
   width: 100vw;
   height: 30vh;
   padding: 8px;
   margin: 10px 0 0 0;
   position: absolute;
   

   @media screen and (min-width: 1080px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: none;
      /* border: 1px solid red; */
      max-width: 500px;
      height: 50px;
      margin: 0 5% 0 15%;

   }
`


export const ButtonAdm = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 18px;
   width: 100px;
   height: 35px;
   margin: 0 auto 5px auto;
   background-color: ${mainOrange};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
  
   @media screen and (min-width: 1080px) {
      display: block;
      width: 10vw;
      height: 5vh;
      cursor: pointer;
      margin-left: 4%;

      &:hover {
         filter: brightness(0.8);
         transition: filter 0.5s;
      }
      
   }
`

export const ButtonOpenMenu = styled.button`
   display: block;
   float: right;
   margin: 1.5em;
   background: transparent;
   border: none;
   font-size: 14px;
   color: white;

   @media screen and (min-width: 1080px) {
      display: none;
   }

`

export const ButtonCloseMenu = styled.button`
   display: block;
   float: right;
   margin: 0.8em;
   background: transparent;
   border: none;
   font-size: 28px;
   color: white;

   @media screen and (min-width: 1080px) {
      display: none;
   }
`

export const ButtonRegister= styled.button`
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

`

export const ButtonLogin = styled.button`
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
`



export const ButtonLogout = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 16px;
   width: 8vw;
   padding: 15px;
   margin-right: 0%;
   background-color: ${mainRed};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
   cursor: pointer;
`

export const ButtonCreateTrip = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 8px;
   margin-right: 15px;
   background-color: ${mainOrange};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
   cursor: pointer;
`

export const ButtonSaveTrip = styled.button`
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
`

export const ButtonRegisterLogin = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   width: 12vw;
   padding: 8px;
   margin-right: 15px;
   background-color: ${mainOrange};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
   cursor: pointer;
`

export const ButtonSaveLogin = styled.button`
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
`

export const ButtonDetails = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
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
`

export const ButtonDelete = styled.button`
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
`

export const ButtonAcceptedCandidate = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   width: 8vw;
   padding: 6px;
   background-color: ${mainBlue};
   margin-right: 4%;
   margin-top: 4%;
   border: 0;
   color: ${mainWhite};
   border-radius: 5px;
   cursor: pointer;
`

export const ButtonDeleteCandidate = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   width: 8vw;
   padding: 6px;
   background-color: ${mainDarkOrange};
   border: 0;
   color: ${mainWhite};
   border-radius: 5px;
   cursor: pointer;
`

export const ButtonSubmit = styled.button`
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
`






// Styled Footer
export const FooterContainer = styled.footer`
   background-color: ${mainBlue};
   color: white;
   width: 100%;
   height: 15vh;
   display: flex;
   justify-content: center;
   position: fixed;
   margin: 0;
`

export const IconsSocial = styled.img`
   width: 40px;
   margin-top: 2%;
   margin-right: 1%;
   margin-left: 2%;
`