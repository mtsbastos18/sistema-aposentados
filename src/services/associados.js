import { http } from './config'

export default {

    listar:() => {
        return http.get('associate')
    },

    salvar:(associado) => {
        return http.post('associate', associado)
    }

}