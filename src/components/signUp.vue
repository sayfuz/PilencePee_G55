<template>
    <div class="text-center row align-items-center justify-content-center vh-100 no-row">
        <div class="mt-sm-5 container w-50 w-xs-100  rounded shadow">
            <div class="row bg-white align-items-stretch p-5">
                <div class="col-12">
                    <form v-on:submit.prevent="signUp()">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
                <label for="last-name" class="form-label">Apellido</label>
                <input v-model="last_name" type="text" class="form-control" id="last-name" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Teléfono</label>
                <input v-model="phone" type="number" class="form-control" id="phone" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Correo electrònico</label>
                <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input v-model="password" type="password" class="form-control" id="password" required>
            </div>
            <div class="mb-3">
                <label for="confirmation" class="form-label">Confirmar contraseña</label>
                <input type="password" class="form-control" id="confirmation" required>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="" id="policies" required>
                <label class="form-check-label ms-1" for="policies">Acepto la politicas de privacidad y el aviso legal</label>
            </div>
            <button type="submit" class="btn btn-primary">Registrarme</button>
            <div class="mt-3">
            </div>
        </form>
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
            name: '',
            last_name: '',
            phone: '',
            email: '',
            password: ''
        }
    },
    methods:{
        signUp(){
            let resultado = axios.post('http://localhost:4000/api/auth/sign-up', {
                name: this.name,
                last_name: this.last_name,
                phone: this.phone,
                email: this.email,
                password: this.password
            })
            .then(response => {
                alert(response.data.message)
                this.$router.push({
                name: "signIn"
                })
            });

            console.log(resultado);
        }
    }
};
</script>

<style>
@media(max-width:1000px){
.w-xs-100{
    width: 100% !important;
}
}
</style>