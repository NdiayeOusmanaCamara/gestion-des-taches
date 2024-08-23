<template>
  <div class="container mt-5">
    <h2>Modifier Tache</h2>
    <form @submit.prevent="modifierTache" class="mb-4">
      <div class="form-group d-flex w-100 gap-3">
        <input v-model="tacheModifie.name" type="text" placeholder="Nom" class="form-control mt-2" required />
        <input v-model="tacheModifie.description" type="text" placeholder="Description" class="form-control mt-2" required />
      </div>
      <div class="form-group d-flex w-100 gap-3">
        <input v-model="tacheModifie.startDate" type="date" placeholder="jj/mm/aaaa" class="form-control mt-2" required />
        <input v-model="tacheModifie.endDate" type="date" placeholder="jj/mm/aaaa" class="form-control mt-2" required />
        
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-warning mt-2">Modifier Tache</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const tacheModifie = ref({name: '', startDate: '', endDate: ''});
const route = useRoute();
const router = useRouter();

const chargerTache = () => {
  const taches = JSON.parse(localStorage.getItem('taches')) || [];
  const index = route.params.index;
  tacheModifie.value = { ...taches[index], index };
};

const modifierTache = () => {
  const taches = JSON.parse(localStorage.getItem('taches')) || [];
  taches[tacheModifie.value.index] = { ...tacheModifie.value };
  localStorage.setItem('taches', JSON.stringify(taches));
  router.push('/Taches'); // Redirection vers la liste des membres après modification
};

const annuler = () => {
  router.push('/Taches'); // Redirection vers la liste des membres sans enregistrer les modifications
};

chargerTache();
</script>
