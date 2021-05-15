import React from 'react'
import LogoFacebook from '../../assets/icons/facebook.svg'
import LogoInstagram from '../../assets/icons/instagram.svg'
import LogoTwitter from '../../assets/icons/twitter.svg'
import * as S from './styled'


const Footer = () => {
    return (
        <S.FooterContainer>
            <S.IconsSocial src={LogoFacebook}/>
            <S.IconsSocial src={LogoInstagram}/>
            <S.IconsSocial src={LogoTwitter}/>
        </S.FooterContainer>
    )
}
export default Footer