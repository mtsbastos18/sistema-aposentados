<template>
  <div class="user">
    
    <div class="container">

      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="usuario.username" required>
          <label>Email</label>
          <input type="email" placeholder="Email" v-model="usuario.email" required>
          <label>Senha</label>
          <input type="password" placeholder="Senha" v-model="usuario.password" required>

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

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
                this.usuarios = resposta.data;
            })
        },
        
        salvar(){

            Usuario.salvar(this.usuario).then(resposta => {
                alert('Salvo com sucesso!')
                this.listar()
            })

        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

