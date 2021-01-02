import home from './views/home.vue'
import about from './views/about.vue'

export default [
    {path: '/', 
    name: 'Home',
    component: home},
    {path: '/about',
    name: 'About',
    component: about}
    
]