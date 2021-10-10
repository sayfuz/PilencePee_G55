<template>

  <navbar/>

  <router-view/>

</template>

<script>
  import navbar from './components/navbar.vue'

  export default{
    name: 'app',
    components:{
      navbar
    }
  }
</script>

<style>

</style>
