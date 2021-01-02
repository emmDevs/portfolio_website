import home from './views/home.vue'
import about from './views/about.vue'
import projects from './views/projects.vue'

export default [
    {path: '/', 
    name: 'Home',
    component: home},
    {path: '/about',
    name: 'About',
    component: about},
    {path: '/projects',
    name: 'Projects',
    component: projects}
    
]