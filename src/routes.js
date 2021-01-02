import home from './views/home.vue'
import about from './views/about.vue'
import projects from './views/projects.vue'
import contact from './views/contact.vue'

export default [
    {path: '/', 
    name: 'Home',
    component: home},
    {path: '/about',
    name: 'About',
    component: about},
    {path: '/projects',
    name: 'Projects',
    component: projects},
    {path: '/contact',
    name: 'Contact',
    component: contact}
    
]