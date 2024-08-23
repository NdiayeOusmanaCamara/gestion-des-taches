<template>
  <div v-if="projectSelectionne" class="container mt-5">
    <h2>Modifier un Projet</h2>
    <form @submit.prevent="modifierProject">
      <div class="form-group">
        <input v-model="projectSelectionne.name" type="text" placeholder="Nom" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="projectSelectionne.startDate" type="date" placeholder="Date de début" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="projectSelectionne.endDate" type="date" class="form-control mt-2" required />
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-warning mt-2">Modifier Projet</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const projectSelectionne = ref(null);
const route = useRoute();
const router = useRouter();

const chargerProject = () => {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  const index = route.params.index;
  projectSelectionne.value = projects[index] || null;
};

const modifierProject = () => {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  const index = route.params.index;
  if (index !== -1) {
    projects[index] = { ...projectSelectionne.value };
    localStorage.setItem('project', JSON.stringify(projects));
  }
  router.push('/project');
};

const annuler = () => {
  router.push('/project');
};

onMounted(chargerProject);
</script>
