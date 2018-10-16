<template>
  <div class="user">
    
    <div class="container">

     
      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="usuario of usuarios" :key="usuario.id">

            <td>{{ usuario.username }}</td>
            <td>{{ usuario.email }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

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
              console.log(resposta.data);
                this.usuarios = resposta.data;
            })
        },
        
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

