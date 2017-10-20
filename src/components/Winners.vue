<template>
	<div class="c-winners">
		<ul class="list-unstyled">
			<li v-for="winner in winners" :key="winner.id">
				<div class="caption">
					<h4>{{  winner.name }}
						<span class="pull-right">
							<div class="label label-success">${{ winner.amount }}</div>
						</span>
					</h4>
				</div>
				<img :src="winner.image" alt="Winner" class="img-responsive c-winners__image">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Winners',
		data(){
			return {
				winners: [
					{
						id: 2,
						name: 'Maynard James',
						amount: 586,
						image: require('../assets/winners/player2.jpg')
					},
					{
						id: 1,
						name: 'Peter Jackson',
						amount: 124,
						image: require('../assets/winners/player1.jpg')
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.c-winners{
		&__image{
			width: 100%;
		}
	}
</style>
