<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container-fluid">
      <!-- Navbar brand -->
       <div class="navbar">
        <a class="navbar-brand" href="#">
          <img src="/src/assets/project.png" height="60" alt="MDB Logo" loading="lazy" />
        </a>
       </div>
      

      <!-- Toggle button for mobile view -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div :class="['collapse', 'navbar-collapse ', { show: isNavbarVisible }]" id="navbarSupportedContent ">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
          <li class="nav-item d-flex ">
            <RouterLink class="nav-link " to="/Project">Project</RouterLink>
          <!-- </li> -->
          <!-- <li class="nav-item"> -->
            <RouterLink class="nav-link" to="/Taches">Taches</RouterLink>
          
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Carousel -->
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/src/assets/u.jpg" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img src="/src/assets/b.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/src/assets/c.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isNavbarVisible = ref(false);

function toggleNavbar() {
  isNavbarVisible.value = !isNavbarVisible.value;
}
</script>

<style scoped>
body {
  background-color: #f8f9fa;
  color: #212529;
}

.container {
  max-width: 900px;
}

.nav-link {
  color: #030303;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  
}
.navbar-brand img{
  margin-left: 40px;
}
.navbar-brand h1{
  color:#7d7f24
}


.carousel-item {
  height: 40vh;
}
</style>
