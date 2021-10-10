<template>
    <div class="text-center row align-items-center justify-content-center mt-5 pt-5 no-row">
        <div>
            <h1 class="display-6 fw-bold text-primary">Crear servicio</h1>
        </div>
        <div class="mt-sm-5 container w-50 w-xs-100  rounded shadow">
            <div class="row bg-white align-items-stretch p-5">
                <div class="col-12">
                    <form id="createForm" v-on:submit.prevent="createService()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Titulo</label>
                            <input v-model="title" type="text" class="form-control" id="name" aria-describedby="emailHelp" required>
                        </div>
                        <div class="mb-3 form-group">
                            <label for="description">Descripción</label>
                            <textarea v-model="description" type="text" class="form-control" id="description" rows="3" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Precio</label>
                            <input v-model="price" type="number" class="form-control" id="price" required>
                        </div>                        
                        <button type="submit" class="btn btn-primary me-2">Agregar servicio</button>
                        <router-link type="button" class="btn btn-warning" :to="{name:'list'}">Cancelar</router-link>
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
            title: '',
            description: '',
            price: null
        }
    },
    methods:{
        createService(){
            let form = document.getElementById('createForm');
            let resultado = axios.post('http://localhost:4000/api/services/add', {
                title: this.title,
                description: this.description,
                price: this.price
            }, 
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
            }})
            .then(response => {
                alert(response.data.message)
                this.$router.push({
                name: "list"
                })
            });
            form.reset();

            console.log(resultado);
        }
    }
};
</script>