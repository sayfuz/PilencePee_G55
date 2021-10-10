<template>
    <div class="text-center row align-items-center justify-content-center vh-100 no-row">
        <div class="container w-25 w-xs-100 bg-white rounded shadow p-5 rounded">
            <div class="row">
                <div class="col">
                    <form v-on:submit.prevent="formLogin()" id="loginForm">
                        <div class="mb-3">
                            <label for="ingresarEmail" class="form-label">Email</label>
                            <input v-model="email" type="Email" class="form-control" id="ingresarEmail" aria-describedby="emailHelp" required>
                        </div>
                        <div class="mb-3">
                            <label for="ingresarContrasena" class="form-label">Contraseña</label>
                            <input v-model="password" type="password" class="form-control" id="ingresarContrasena" required>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="" id="recordarUsuario">
                            <label class="form-check-label ms-1" for="ingresarCheck">Recordar nombre de usuario</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Acceder</button>
                        <div class="mt-3">
                        <router-link class="text-secondary" to="#">¿Olvidaste tu contraseña?</router-link>
                        </div>
                    </form>
                    <div class="alert alert-danger" role="alert" v-if="error">
                    {{error_msg}}
                    </div>
                    <div class="alert alert-success" role="alert" v-if="correcto">
                    {{correcto_msg}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:'',
            correcto:false,
            correcto_msg:'',
            error:false,
            error_msg:''
        }
    },
    methods:{
        formLogin(){
            let form = document.getElementById('loginForm')
            axios.post('http://localhost:4000/api/auth/sign-in',{
                email:this.email,
                password:this.password,
            })
            .then(response => {
                if(response.status == 200){
                localStorage.setItem('token', response.data.token)
                this.$router.push({
                name: "list"
                }) 
                }              
                })
            form.reset()
        }
    }
}
</script>

<style scoped>
.no-row {
    margin-left: 0px !important;
    margin-right: 0px !important;
}

@media(max-width:1000px){
.w-xs-100{
    width: 100% !important;
}
}

</style>