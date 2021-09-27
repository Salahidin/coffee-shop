<template>
	<div>
		<Header />
	</div>
	<div>
		<Navigation />
	</div>
	<div>
		<Container />
	</div>
	<div>
		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Navigation from '@/components/Navigation.vue'
	import Container from '@/components/Container.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		components: {
			Header,
			Navigation,
			Container,
			Footer
		}
	}
</script>
