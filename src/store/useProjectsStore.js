import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: []
  }),
  actions: {
    chargerProjects() {
      const data = localStorage.getItem('projects');
      if (data) this.projects = JSON.parse(data);
    },
    ajouterProject(project) {
      this.projects.push(project);
      localStorage.setItem('projects', JSON.stringify(this.projects));
    },
    modifierProject(index, updatedProject) {
      this.projects[index] = updatedProject;
      localStorage.setItem('projects', JSON.stringify(this.projects));
    },
    supprimerProject(index) {
      this.projects.splice(index, 1);
      localStorage.setItem('projects', JSON.stringify(this.projects));
    }
  }
});
