<template>
    <div class="associado">
        <div class="container">
            <h4 class="header">Lista de Associados</h4>
        <router-link to=""><a class="btn-floating btn-large waves-effect waves-light red right"><i class="material-icons">add</i></a></router-link>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="associado of associados" :key="associado.id">
                    <td>{{ associado.id }}</td>
                    <td>{{ associado.nome }}</td>
                    <td>{{ associado.cpf }}</td>
                    <td v-if="associado.status === 1">Ativo</td>
                    <td v-else>Inativo</td>
                </tr>

            </tbody>
        </table>
        </div>
    </div>
</template>


<script>
import Associado from '../services/associados'

export default {
    name: 'associados',

    data() {
        return{
            associado: {
                id: '',
                nome:'',
                cpf:'',
                status:''
            },
            associados: []
        }
    },

    mounted() {
      this.listar()
    },

    methods:{

        listar(){
            Associado.listar().then(resposta => {
                console.log(resposta.data);
                this.associados = resposta.data;
            })
        },
        
        
    }
}
</script>
