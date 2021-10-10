<template>
    <div class="text-center row align-items-center justify-content-center mt-5 pt-5 no-row">
        <div>
            <h1 class="display-6 fw-bold text-primary">Actualizar servicio</h1>
        </div>
        <div class="mt-sm-5 container w-50 w-xs-100  rounded shadow">
            <div class="row bg-white align-items-stretch p-5">
                <div class="col-12">
                    <form id="editForm" v-on:submit.prevent="updateService()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Titulo</label>
                            <input v-model="title" type="text" class="form-control" id="name" aria-describedby="emailHelp" required>
                        </div>
                        <div class="mb-3 form-group">
                            <label for="description">Descripción</label>
                            <textarea v-model="description" type="text" class="form-control" id="description" rows="3"  required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Precio</label>
                            <input v-model="price" type="number" class="form-control" id="price" required>
                        </div>                        
                        <button type="submit" class="btn btn-primary me-2">Actualizar servicio</button>
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
            id: '',
            title: '',
            description: '',
            price: null
        }
    },
    methods:{
        updateService(){
            let editForm = document.getElementById("editForm");
            let resultado = axios.patch('http://localhost:4000/api/services/update/' + this.id, {
                title: this.title,
                description: this.description,
                price: this.price,
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
            editForm.reset();

            console.log(resultado);
        }
    },
    mounted() {
        axios
        .get("http://localhost:4000/api/services/find/" + this.$route.params.id)
        .then((response) => {
            this.id = response.data.id;
            this.title = response.data.title;
            this.description = response.data.description;
            this.price = response.data.price;
        });
    }
};
</script>