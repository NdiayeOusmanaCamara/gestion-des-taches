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
