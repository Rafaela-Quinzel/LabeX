export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToSingUpPage = (history) => {
    history.push('/cadastrar_login')
}

export const goToAdmListTrips = (history) => {
    history.push('/viagens_adm')
}

export const goToCreateTrip = (history) => {
    history.push('/criar_viagens')
}

export const goToApplicationForm = (id, history) => {
    history.push(`/inscricao/${id}/apply`)
}


export const logOut = (history) => {
    localStorage.removeItem('token')
    history.push('/')
}