import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
	path: '/',
	name: 'Home',
	component: Home,
	meta: {
		title: "古巷道咖啡馆"
	}
}, ]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
