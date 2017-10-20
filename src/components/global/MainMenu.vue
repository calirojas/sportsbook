<template>
	<div class="c-main-menu">
		<nav class="navbar navbar-default navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#c-main-menu"
					aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<router-link to="/" class="navbar-brand">
						{{ brandName }}
					</router-link>
				</div>
				<div class="collapse navbar-collapse c-main-menu__links" id="c-main-menu">
					<ul class="nav navbar-nav">
						<li v-for="item in menuItems" :key="item.id"
						:class="{active: $route.path == item.route}">
							<router-link :to="item.route">{{  item.text }}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'MainMenu',
		data(){
			return {
				brandName: 'Cali Rojas',
				menuItems: [
					{id: 1, text: 'Home', route: '/'},
					{id: 2, text: 'Contest Admin', route: '/admin'},
				]
			}
		},
		watch: {
			'$route': () => {
				jQuery('.c-main-menu__links').removeClass('in');
			}
		}
	}
</script>

<style lang="scss">
	.c-main-menu{
		.navbar{
			margin-bottom: 0;
		}
	}
</style>
