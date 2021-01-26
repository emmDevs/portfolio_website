import home from './views/Home.vue'
import about from './views/About.vue'
import projects from './views/Projects.vue'

export default [
    {path: '/', 
    name: 'home',
    component: home},
    {path: '/about',
    name: 'about',
    component: about},
    {path: '/projects',
    name: 'projects',
    component: projects},
    
]