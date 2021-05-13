import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styled'
import LogoSite from '../assets/images/logo.svg';
import { Route } from 'react-router-dom'



const Header = () => {
    const [open, setOpen] = useState(false)


    const history = useHistory()

    const goToLoginPage = () => {
        history.push('/login')
    }

    const goToSingUpPage = () => {
        history.push('/cadastrar_login')
    }

    const goToCreateTrip = () => {
        history.push('/criar_viagens')
    }

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/home')
    }

    const openMenu = () => {
        setOpen(true)
    }

    const closeMenu = () => {
        setOpen(false)
    }

    // style={open ? { display: 'block' } : { display: 'none' }}

    return (
        <S.HeaderContainer>
            <Route exact path={[
                '/',
                '/home',
                '/login',
                '/viagens',
                '/inscricao/:id/apply'
            ]}>
                <S.Logo src={LogoSite} />
                {open ? (
                    <>
                        <S.ButtonCloseMenu onClick={closeMenu}  ><i class="fas fa-times"></i></S.ButtonCloseMenu>
                        <S.MenuContainer >
                            <S.Menu to='/home'>Home</S.Menu>
                            <S.Menu to='/viagens'>Viagens</S.Menu>
                            <S.ButtonAdm onClick={goToLoginPage}>
                                ADM
                            </S.ButtonAdm>
                        </S.MenuContainer>
                    </>
                ) : (
                    <S.ButtonOpenMenu onClick={openMenu}> <i class="fas fa-bars fa-2x"></i> </S.ButtonOpenMenu>
                )}
            </Route>


            <Route exact path={[
                '/viagens_adm',
                '/cadastrar_login',
                '/detalhes_da_viagem/:id',
                '/criar_viagens'
            ]}>
                <S.MenuContainer>
                    <S.Logo src={LogoSite} />
                    <S.ButtonCreateTrip onClick={goToCreateTrip}>
                        ADICIONAR VIAGEM
            </S.ButtonCreateTrip>
                    <S.ButtonRegisterLogin onClick={goToSingUpPage}>
                        CADASTAR LOGIN
            </S.ButtonRegisterLogin>
                    <S.ButtonLogout onClick={logOut}>
                        LOGOUT
            </S.ButtonLogout>
                </S.MenuContainer>

            </Route>

        </S.HeaderContainer>
    )
}
export default Header;