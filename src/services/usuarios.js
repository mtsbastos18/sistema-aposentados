import { http } from './config'

export default {

    listar:() => {
        return http.get('users')
    },

    salvar:(usuario) => {
        return http.post('register', usuario)
    }

}