<template>
	<div id="app">
		<main-menu></main-menu>
		<div class="container-fluid">
			<router-view/>
			<main-footer></main-footer>
		</div>
	</div>
</template>

<script>
	import MainMenu from '@/components/global/MainMenu'
	import MainFooter from '@/components/global/Footer'

	export default {
		name: 'app',
		components: {MainMenu, MainFooter}
	}
</script>

<style>
	#app{
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>