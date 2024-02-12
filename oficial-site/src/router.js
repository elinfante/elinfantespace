import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/Content/NotFound.vue';
import Projects from './components/Content/Projects.vue';
import Clients from './components/Content/Clients.vue';
import Skills from './components/Content/Skills.vue';
import Motion from './components/Content/Motion.vue';
import Fun from './components/Content/Fun.vue';
import AboutMe from './components/Content/AboutMe.vue';
import Framing from './components/Content/Framing.vue';
import ProjectsList from './components/Content/List.vue';
import ProjectsGrid from './components/Content/Grid.vue';
import ProjectIndividual from './components/Content/ProjectIndividual.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect : 'projects',
  },
  {
    path: '/projects',
    name: 'Projects',
    redirect: '/projects/list',
    component: Projects, 
    children : [
      {
        path: '/projects/grid',
        name : 'Grid',
        component: ProjectsGrid
      },
      {
        path: '/projects/list',
        name : 'List',
        component: ProjectsList
      },
    ]
  },
  {
    path: '/motion',
    name: 'Motion',
    component: Motion
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/fun',
    name: 'Fun',
    component: Fun
  },
  {
    path: '/aboutme',
    name: 'About Me',
    component: AboutMe
  },
  {
    path: '/framing',
    name: 'Framing',
    component: Framing
  },
  {
    path: '/projects/:id',
    name : 'Individual Project',
    component: ProjectIndividual,
  },
  {
    path: '/:catchAll(.*)', // Define catch-all route with param and custom regex
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
