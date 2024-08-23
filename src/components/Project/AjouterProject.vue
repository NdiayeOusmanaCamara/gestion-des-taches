<template>
  <div class="container mt-5">
    <h2>Ajouter un Nouveau Projet</h2>
    <form @submit.prevent="ajouterProject ">
      <div class="form-group d-flex w-100 gap-3">
        <input v-model="nouveauProject.name" type="text" placeholder="Nom" class="form-control mt-2" />
        <input v-model="nouveauProject.startDate" type="date" placeholder="Date de début" class="form-control mt-2" />
        <input v-model="nouveauProject.endDate" type="date" class="form-control mt-2" />
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-success mt-2">Enregistrer</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nouveauProject = ref({
  name: '',
  startDate: '',
  endDate: ''
});

const router = useRouter();

const ajouterProject = () => {
  if (!nouveauProject.value.name || !nouveauProject.value.startDate || !nouveauProject.value.endDate) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects.push({ ...nouveauProject.value });
  localStorage.setItem('projects', JSON.stringify(projects));
  router.push('/project');
};

const annuler = () => {
  router.push('/project');
};
</script>
