<template>

	<div class="header">
		<div class="reveal-top">قەدىمي كوچا قەھۋەخانىسى</div>
		<br />
		<div class="reveal-top">古巷道咖啡馆</div>
		<br />
	</div>


</template>

<script>
	import ScrollReveal from 'scrollreveal';

	export default {
		data() {
			return {
				ScrollReveal: ScrollReveal()
			}
		},
		mounted() {
			this.ScrollReveal.reveal('.reveal-right', {
				distance: '60px',
				duration: 1000,
				origin: 'right'
			});
			this.ScrollReveal.reveal('.reveal-left', {
				distance: '60px',
				duration: 1000,
				origin: 'left'
			});
			this.ScrollReveal.reveal('.reveal-default', {
				duration: 1500,
			});
			this.ScrollReveal.reveal('.reveal-top', {
				distance: '60px',
				duration: 1000,
				origin: 'top'
			});
		},
	}
</script>

<style scoped>
	.header {
		box-sizing: border-box;
		width: 100vw;
		height: 90vh;
		background-image: url(../assets/images/bg1.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding-top: 35vh;
		position: relative;
		font-family: ALKATIP_Kufi;
	}

	.header div {
		font-size: 2rem;
		color: #FFFFFF;
	}
</style>
