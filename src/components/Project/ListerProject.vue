<template>
  <div class="container mt-5">
    <h2>Liste des Projets</h2>
    <button @click="naviguerAjouterProject" class="btn btn-success mb-3">Ajouter un Projet</button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projects" :key="index">
          <td>{{ project.name }}</td>
          <td>{{ project.startDate }}</td>
          <td>{{ project.endDate }}</td>
          <td>
        
            <i @click="naviguerModifierProject(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerProject(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="projectSelectionne !== null" class="mt-4">
      <h4>Détails du Projet</h4>
      <table class="table table-primary table-borderless">
        <tr>
          <th>Nom</th>
          <td>{{ projects[projectSelectionne].store.nom }}</td>
        </tr>
        <tr>
          <th>Date de début</th>
          <td>{{ projects[projectSelectionne].store.startDate }}</td>
        </tr>
        <tr>
          <th>Date de fin</th>
          <td>{{ projects[projectSelectionne].store.endDate }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProjectsStore } from '@/store/useProjectsStore';

const store =useProjectsStore()

const projects = ref([]);
const projectSelectionne = ref(null);
const router = useRouter();

const chargerProjects = () => {
  const data = localStorage.getItem('projects');
  if (data) projects.value = JSON.parse(data);
};

const supprimerProject = (index) => {
  projects.value.splice(index, 1);
  localStorage.setItem('projects', JSON.stringify(projects.value));
  projectSelectionne.value = null;
};


const naviguerAjouterProject = () => {
  router.push('/ajouterProject');
};

const naviguerModifierProject = (index) => {
  router.push({ path: `/modifierProject/${index}` });
};

onMounted(chargerProjects);
</script>
