<template>
	<div class="c-index">
		<carousel></carousel>
		<div class="row">
			<div class="col-sm-12">
				<h1>Last minute bets</h1>
				<div v-for="card in cards" :key="card.id" class="col-sm-3 no-padding">
					<card
						:title="card.title"
						:key="card.id"
						:description="card.description"
						:image="card.image"
						:route="card.route"
					></card>
				</div>
			</div>
		</div>
		<div class="row">
			<div class=" col-sm-6">
				<h2>Latest Scores</h2>
				<scores></scores>
			</div>
			<div class=" col-sm-6">
				<h2>NFL Video of The Week</h2>
				<p>Watch the video of the week and win a car!</p>
				<div class="embed-container">
					<iframe
						src='https://player.vimeo.com/video/66769975'
						frameborder='0'
						webkitAllowFullScreen
						mozallowfullscreen
						allowFullScreen>
					</iframe>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h2>Scheduled</h2>
				<scheduled></scheduled>
			</div>
			<div class="col-sm-6">
				<img src="../assets/home/banner2.jpg" alt="Image" class="img-responsive">
				<p>&nbsp;</p>
				<img src="../assets/home/banner-football-1.jpg" alt="Image" class="img-responsive">
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 text-center">
				<join-button></join-button>
			</div>
		</div>
	</div>
</template>

<script>
	import Carousel from '@/components/Carousel'
	import Card from '@/components/Card'
	import Scores from '@/components/Scores'
	import Scheduled from '@/components/Scheduled'
	import JoinButton from '@/components/JoinButton'

	export default {
		components: {Carousel, Card, Scores, Scheduled, JoinButton},
		data(){
			return {
				cards: [
					{
						id: 1,
						title: 'Poker',
						route: '/landing',
						description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							ultricies lorem nisl, ut ultrices sem vehicula sed. Mauris sed
							faucibus nibh, a tempus neque. Phasellus at mauris fringilla,
							imperdiet tellus eu, maximus mauris.
						`,
						image: require('../assets/cards/poker.jpg')
					},
					{
						id: 2,
						title: 'Horse Racing',
						route: '/landing',
						description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							ultricies lorem nisl, ut ultrices sem vehicula sed. Mauris sed
							faucibus nibh, a tempus neque. Phasellus at mauris fringilla,
							imperdiet tellus eu, maximus mauris.
						`,
						image: require('../assets/cards/horse.jpg')
					},
					{
						id: 3,
						title: 'Football',
						route: '/landing',
						description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							ultricies lorem nisl, ut ultrices sem vehicula sed. Mauris sed
							faucibus nibh, a tempus neque. Phasellus at mauris fringilla,
							imperdiet tellus eu, maximus mauris.
						`,
						image: require('../assets/cards/football.jpg')
					},
					{
						id: 4,
						title: 'Soccer',
						route: '/landing',
						description: `
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							ultricies lorem nisl, ut ultrices sem vehicula sed. Mauris sed
							faucibus nibh, a tempus neque. Phasellus at mauris fringilla,
							imperdiet tellus eu, maximus mauris.
						`,
						image: require('../assets/cards/soccer.jpg')
					}
				]
			}
		}
	}
</script>