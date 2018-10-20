<template>
  <div class="user">
    
    <div class="container">
      <br>
      <router-link to="/novoUsuario"><a class="btn-floating btn-large waves-effect waves-light red right"><i class="material-icons">add</i></a></router-link>

     
      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="usuario of usuarios" :key="usuario.id">

            <td>{{ usuario.username }}</td>
            <td>{{ usuario.email }}</td>

          </tr>

        </tbody>
      
      </table>

    </div>
  </div>
</template>

<script>

import Usuario from '../services/usuarios'

export default {
    name: 'usuarios',

    data(){
        return{
            usuario: {
                nome: '',
                email: '',
                senha: ''
            },
            usuarios: []
        }
    },


    mounted() {
      this.listar()
    },

    methods:{

        listar(){
            Usuario.listar().then(resposta => {
                this.usuarios = resposta.data;
            })
        },
        
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

