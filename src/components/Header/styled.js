import styled from 'styled-components'
import { mainBlue, 
   mainWhite, 
   mainDarkGray, 
   mainOrange, 
   mainRed,  
} from '../../constants/colors'
import { Link } from 'react-router-dom'


export const HeaderContainer = styled.header`
   font-family: 'Roboto', sans-serif;
   background-color: ${mainBlue};
   color: white;
   width: 100%;
   height: 10vh;
   position: fixed;
   z-index: 10;

   @media screen and (min-width: 600px) {
      height: 12vh;
   }

   @media screen and (min-width: 1024px) {
      height: 14vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`

export const Logo = styled.img`
   width: 80px;
   margin: 15px 55px 2px 18px;

   @media screen and (min-width: 600px) {
      width: 110px;
   }

   @media screen and (min-width: 1024px) {
      width: 140px;
      margin: 0 8% 0 4%;
   }

`

export const MenuContainer = styled.div`
   display: grid;
   align-items: center;
   background: ${mainDarkGray};
   z-index: 1;
   width: 100vw;
   height: 35vh;
   padding: 8px;
   margin: 10px 0 0 0;
   position: absolute;

   @media screen and (min-width: 1024px) {
      display: none;
   }
`

export const MenuAdmContainer = styled.div`
   display: grid;
   align-items: center;
   background: ${mainDarkGray};
   z-index: 1;
   width: 100vw;
   height: 35vh;
   padding: 8px;
   margin: 10px 0 0 0;
   position: absolute;

   @media screen and (min-width: 600px) {
      height: 45vh;
   }

   @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: none;
      max-width: 500px;
      height: 50px;
      margin: 0 5% 0 15%;

   }
`

export const NavContainer = styled.div`
   display: none;

   @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      background: none;
      max-width: 450px;
      height: 50px;
      float: right;
      margin: 0 2% 0 15%;
   }

   @media screen and (min-width: 1080px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: none;
      max-width: 500px;
      height: 50px;
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
   transition: .8s ease;


   @media screen and (min-width: 1024px) {
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
      text-decoration: none;
      font-size: 1.2rem;
      color: ${mainWhite};
      height: 20px;
      width: 150px;
      margin: 0 auto;
      border-bottom: none;
  
      &:hover {
        border-bottom: 2px solid orange;
        color: orange;
      }
   }
`

export const ButtonAdm = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 18px;
   width: 60vw;
   height: 5vh;
   margin: 0 auto 5px auto;
   background-color: ${mainOrange};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
   text-transform: uppercase;

   @media screen and (min-width: 600px) {
      height: 6vh;
      width: 25vw;
   }
  
   @media screen and (min-width: 1024px) {
      width: 20vw;
      height: 5vh;
      margin-left: 8%;
      cursor: pointer;

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

   @media screen and (min-width: 1024px) {
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

   @media screen and (min-width: 1024px) {
      display: none;
   }
`

export const ButtonLogout = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 1rem;
   width: 60vw;
   height: 5vh;
   margin: 4% 2% 2% 18%;
   background-color: ${mainRed};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
   text-transform: uppercase;
  

   @media screen and (min-width: 1024px) {
      width: 10vw;
      height: 5vh;
      cursor: pointer;
      text-align: center;
      
      &:hover {
         filter: brightness(0.8);
         transition: filter 0.5s;
      }
   }
`

export const ButtonsMenu = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 1rem;
   width: 60vw;
   height: 5vh;
   margin: 4% 2% 0 18%;
   background-color: ${mainOrange};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
   text-transform: uppercase;

   @media screen and (min-width: 1080px) {
      font-size: 14px;
      width: 12vw;
      padding: 8px;
      margin-right: 15px;
      cursor: pointer;
   }
`

export const ButtonRegisterLogin = styled.button`
   font-family: 'Roboto', sans-serif;
   font-size: 1rem;
   width: 60vw;
   height: 5vh;
   margin: 5% 2% 0 18%;
   background-color: ${mainOrange};
   color: ${mainWhite};
   border-radius: 6px;
   border: 0;
   text-transform: uppercase;

   @media screen and (min-width: 1080px) {
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
      text-transform: uppercase;
   }
`

