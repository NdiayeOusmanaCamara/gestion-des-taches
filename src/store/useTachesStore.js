import { defineStore } from 'pinia';

export const useTachesStore = defineStore('taches', {
  state: () => ({
    taches: []
  }),
  actions: {
    chargerTaches() {
      const data = localStorage.getItem('taches');
      if (data) this.taches = JSON.parse(data);
    },
    ajouterTache(tache) {
      this.taches.push(tache);
      localStorage.setItem('taches', JSON.stringify(this.taches));
    },
    modifierTache(index, updatedTache) {
      this.taches[index] = updatedTache;
      localStorage.setItem('taches', JSON.stringify(this.taches));
    },
    supprimerTache(index) {
      this.taches.splice(index, 1);
      localStorage.setItem('taches', JSON.stringify(this.taches));
    }
  }
});
