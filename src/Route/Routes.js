import ListerProject from "@/components/Project/ListerProject.vue";
import AjouterProject from "@/components/Project/AjouterProject.vue";
import ModifierProject from "@/components/Project/ModifierProject.vue";
import AjouterTache from "@/components/Taches/AjouterTache.vue";
import ModifierTache  from "@/components/Taches/ModifierTache.vue";
import ListeTache  from "@/components/Taches/ListeTache.vue";


export const routes = [
  {
    path: '/Project',
    component: ListerProject


  },
  {
    path: '/AjouterProject',
    component: AjouterProject
  },
  {
    path: '/ModifierProject/:index',
    component: ModifierProject
  },
  {
    path: '/Taches',
    component: ListeTache
  },
  {
    path: '/AjouterTache',
    component: AjouterTache
  },
  {
    path: '/ModifierTache/:index',
    component: ModifierTache,
  },

];