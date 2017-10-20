<template>
	<div class="c-card" data-aos="fade-right">
		<div class="thumbnail ">
			<img :src="image" alt="Image" class="img-responsive c-card__image">
			<div class="caption">
				<h3>{{ title }}</h3>
				<p>{{ description }}</p>
			</div>
			<router-link :to="route"
			class="btn btn-block btn-default c-card__link hvr-shutter-out-horizontal">Click here</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Card',
		props: ['title', 'description', 'image', 'route']
	}
</script>

<style lang="scss">
	.c-card{
		&__link{
			background: #000 !important;
			color: #fff !important;
			border: 0;
			padding: 15px 0 !important;
			text-transform: uppercase;
			font-weight: bold;

			&:hover{
				background: #000;
			}
		}

		.thumbnail{
			padding: 15px;

			@media(max-width: 768px){
				padding: 0;
			}

		}

		&__image{
			width: 100%;
		}
	}
</style>
