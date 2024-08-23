<!-- ListerMembres.vue -->
<template>
  <div class="container mt-5">
    <h2>Liste des Taches</h2>

    <!-- Bouton pour ajouter un nouveau membre -->
    <button @click="naviguerAjouterTache" class="btn btn-success mb-3">
      Ajouter un Tache
    </button>
 
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Date de debut</th>
          <th>Date de fin</th>
          <th>Projet</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tache, index) in taches" :key="index">
          
          <td>{{ tache.name }}</td>
          <td>{{ tache.description }}</td>
          <td>{{ tache.startDate }}</td>
          <td>{{ tache.endDate }}</td>
          <td>{{ tache.projet }}</td>
         
          <td>   
            <i @click="naviguerModifierTache(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerTache(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Afficher les détails du membre sous forme de tableau -->
    <div v-if="tacheSelectionne !== null" class="mt-4">
      <h4>Détails du Tache</h4>
      <table class="table table-primary table-borderless">
        <tr>
          <th>Nom</th>
          <td>{{ taches[tacheSelectionne].name }}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{{ taches[tacheSelectionne].description }}</td>
        </tr>
        <tr>
          <th>Date de debut</th>
          <td>{{ taches[tacheSelectionne].startDate }}</td>
        </tr>
        <tr>
          <th>Date de fin</th>
          <td>{{ taches[tacheSelectionne].endDate }}</td>
        </tr>
        <tr>
          <th>Projet</th>
          <td>{{ taches[tacheSelectionne].endDate }}</td>
        </tr>
        
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const taches = ref([]);
const tacheSelectionne = ref(null);
const router = useRouter();

const chargerTaches = () => {
  const data = localStorage.getItem('taches');
  if (data) taches.value = JSON.parse(data);
};

const supprimerTache = (index) => {
  taches.value.splice(index, 1);
  localStorage.setItem('taches', JSON.stringify(taches.value));
  tacheSelectionne.value = null;
};

const naviguerAjouterTache = () => {
  router.push('/AjouterTache');
};

const naviguerModifierTache = (index) => {
  router.push({ path: `/ModifierTache/${index}` });
};

onMounted(chargerTaches);
</script>