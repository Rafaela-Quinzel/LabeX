import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export const useUnProtectedPage = () => {
    const history = useHistory()

    const token = localStorage.getItem('token')

    useEffect(() => {
        if(token) {
            history.push('/viagens_adm')
        }
    }, [history, token])
}