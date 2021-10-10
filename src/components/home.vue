<template>
    <div class="row align-items-center justify-content-center no-row mt-5 pt-5">
        <div>
            <h1 class="display-6 fw-bold text-primary text-center">Servicios</h1>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center justify-content-center no-row mt-5 pt-5">
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Servicio</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="service in services" :key="service.id">
                    <th scope="row">{{service.id}}</th>
                    <td>{{service.title}}</td>
                    <td>{{service.description}}</td>
                    <td>{{service.price}}</td>
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
            services:null
        }
    },
    mounted(){
        axios.get('http://localhost:4000/api/services/list')
        .then(data =>{
            console.log(data)
            this.services = data.data
        })
    }
}
</script>