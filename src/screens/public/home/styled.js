import styled from 'styled-components'
import { mainGray } from '../../../constants/colors'



export const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   justify-content: center;
   height: 100vh;
`

export const AnimationContainer = styled.div`
   margin: 0 auto;
`

export const Message = styled.h1`
   color: ${mainGray};
   font-size: 1.5rem;
   margin: 12px auto 0 auto;
`


