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

        </div>
    </div>
</template>

<script>
import Usuario from '../services/usuarios'

export default {
    name: 'novoUsuario',

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

    methods:{
        salvar(){

            Usuario.salvar(this.usuario).then(resposta => {
                alert('Salvo com sucesso!');
                this.$router.push('/usuarios');
            })

        }
    }
}
</script>

