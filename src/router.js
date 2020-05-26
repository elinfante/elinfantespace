import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './components/Content/NotFound';
import Projects from './components/Content/Projects';
import Clients from './components/Content/Clients';
import Skills from './components/Content/Skills';
import Motion from './components/Content/Motion';
import Fun from './components/Content/Fun';
import AboutMe from './components/Content/AboutMe';
import Framing from './components/Content/Framing';
import ProjectsList from './components/Content/List';
import ProjectsGrid from './components/Content/Grid';
import ProjectIndividual from './components/Content/ProjectIndividual';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },  
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

  ]

});

