<template>
	<div class="c-landing">
		<div class="row">
			<div class="col-sm-12">
				<h1>Landing Page</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint unde
					esse impedit reprehenderit. Inventore voluptatibus libero voluptatum
					dolor. Dolorum cupiditate accusantium ad in tempore corporis voluptatibus
					voluptatem? Voluptate, accusamus iusto.
				</p>
				<div class="text-center">
					<router-link class="btn btn-primary" to="/">Home</router-link>
					<router-link class="btn btn-primary" to="/admin">Admin</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.c-landing{
		min-height: 600px;
		margin-bottom: 30px;

		@media(max-width: 600px){
			min-height: 400px;
		}
	}
</style>
