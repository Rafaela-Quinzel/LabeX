import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styled'
import LogoSite from '../../assets/images/logo.svg';
import { Route } from 'react-router-dom'
import {
    goToLoginPage,
    goToSingUpPage,
    goToCreateTrip,
    goToAdmListTrips,
    logOut
} from '../../routes/coordinator'



const Header = () => {
    const [open, setOpen] = useState(false)
    
    const history = useHistory()

    function openMenu() {
        setOpen(true)
    }

    function closeMenu() {
        setOpen(false)
    }

    function handleClose(className) {
        switch (className) {
            case 'ver-viagens':
                goToAdmListTrips(history)
                closeMenu()
                break
            case 'adm':
                goToLoginPage(history)
                closeMenu()
                break
            case 'create-trip':
                goToCreateTrip(history)
                closeMenu()
                break
            case 'create-login':
                goToSingUpPage(history)
                closeMenu()
                break
            case 'logout':
                logOut(history)
                closeMenu()
                break
            default:
                break
        }
    }


    return (
        <S.HeaderContainer>
            <Route exact path={[
                '/',
                '/login',
                '/viagens',
                '/inscricao/:id/apply'
            ]}>
                <S.Logo src={LogoSite} />
                {open ? (
                    <Fragment>
                        <S.ButtonCloseMenu onClick={closeMenu}>
                            <i className="fas fa-times"></i>
                        </S.ButtonCloseMenu>
                        <S.MenuContainer >
                            <S.Menu to='/' onClick={closeMenu}>Home</S.Menu>
                            <S.Menu to='/viagens' onClick={closeMenu}>Viagens</S.Menu>
                            <S.ButtonAdm onClick={() => handleClose('adm')}>
                                adm
                            </S.ButtonAdm>
                        </S.MenuContainer>
                    </Fragment>
                ) : (
                    <S.ButtonOpenMenu onClick={openMenu}>
                        <i className="fas fa-bars fa-2x"></i>
                    </S.ButtonOpenMenu>
                )}
            </Route>

            <Route exact path={[
                '/viagens_adm',
                '/cadastrar_login',
                '/detalhes_da_viagem/:id',
                '/criar_viagens'
            ]}>
                <S.Logo src={LogoSite} />
                {open ? (
                    <Fragment>
                        <S.ButtonCloseMenu onClick={closeMenu}>
                            <i className="fas fa-times"></i>
                        </S.ButtonCloseMenu>
                        <S.MenuContainer>
                            <S.ButtonsMenu
                                onClick={() => handleClose('ver-viagens')}
                            >
                                Ver viagens
                            </S.ButtonsMenu>
                            <S.ButtonsMenu
                                onClick={() => handleClose('create-trip')}
                            >
                                Adicionar Viagem
                            </S.ButtonsMenu>
                            <S.ButtonsMenu
                                onClick={() => handleClose('create-login')}
                            >
                                Cadastrar Login
                            </S.ButtonsMenu>
                            <S.ButtonLogout
                                onClick={() => handleClose('logout')}
                            >
                                Logout
                            </S.ButtonLogout>
                        </S.MenuContainer>
                    </Fragment>
                ) : (
                    <S.ButtonOpenMenu onClick={openMenu}>
                        <i className="fas fa-bars fa-2x"></i>
                    </S.ButtonOpenMenu>
                )}
            </Route>
        </S.HeaderContainer>
    )
}
export default Header