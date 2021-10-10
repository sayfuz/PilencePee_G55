<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark text-center">
    <div class="container">
      <router-link class="navbar-brand" to="/">PilencePee</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" id="home" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="about-us" to="/about-us">Sobre el proyecto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="contact" to="/contact">Contacto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="sign-in" to="/sign-in">Ingresa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="sign-up" to="/sign-up">Registrate</router-link>
          </li>         
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data(){
      return{
         msg: 'navbar' 
      }
  }
}

</script>