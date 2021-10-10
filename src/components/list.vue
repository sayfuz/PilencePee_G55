<template>
    <div class="row align-items-center justify-content-center no-row mt-5 pt-5">
        <div>
            <h1 class="display-6 fw-bold text-primary text-center">Panes de control</h1>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center justify-content-center no-row mt-5 pt-5">
            <div class="mb-3">
            <router-link :to="{name:'create'}" type="button" class="btn btn-outline-success me-2">Crear nuevo servicio</router-link>
            </div>
                <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Servicio</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="service in services" :key="service.id">
                    <th scope="row">{{service.id}}</th>
                    <td>{{service.title}}</td>
                    <td>{{service.description}}</td>
                    <td>{{service.price}}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name:'update', params:{id:service.id}}" class="btn btn-outline-primary">Actualizar</router-link>
                            <button v-on:click="deleteService(service.id)" type="button" class="btn btn-outline-danger">Borrar</button>
                        </div>
                        
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            services: null
        }
    },
    methods:{
        deleteService(id){
            axios.delete('http://localhost:4000/api/services/delete/' + id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
        .then(data =>{
            console.log(data)
            this.services = data.data
            window.location.href="list"
        })
        }
    },
    mounted(){
        if(localStorage.getItem('token')){
        axios.get('http://localhost:4000/api/services/list')
        .then(data =>{
            console.log(data)
            this.services = data.data
            })
        }else{
            this.$router.push({
                name: "signIn"
            })
        }
    }
}
</script>