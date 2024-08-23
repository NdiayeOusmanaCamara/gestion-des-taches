<template>
  <div class="container mt-5">
    <h2>Ajouter une Nouvelle Tâche</h2>
    <form @submit.prevent="ajouterTache" class="mb-4">
      <div class="form-group d-flex w-100 gap-3">
       
        <input v-model="nouveauTache.name" type="text" placeholder="Nom" class="form-control mt-2" required />
        <input v-model="nouveauTache.description" type="text" placeholder="Description" class="form-control mt-2" required />
        
      </div>
      <div class="form-group d-flex w-100 gap-3d-flex w-100 gap-3">
        <input v-model="nouveauTache.startDate" type="date" placeholder="jj/mm/aaaa" class="form-control mt-2" required />
        <input v-model="nouveauTache.endDate" type="date" placeholder="jj/mm/aaaa" class="form-control mt-2" required />
    
       
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

const nouveauTache = ref({ name: '', description: '', startDate: '', endDate: '' });
const router = useRouter();

const ajouterTache = () => {
  if ( !nouveauTache.value.name || !nouveauTache.value.description || !nouveauTache.value.startDate || !nouveauTache.value.endDate ) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  const taches = JSON.parse(localStorage.getItem('taches')) || [];
  taches.push({ ...nouveauTache.value });
  localStorage.setItem('taches', JSON.stringify(taches));
  router.push('/taches');
};

const annuler = () => {
  router.push('/taches');
};
</script>
