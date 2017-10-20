<template>
	<div class="c-carousel row">
			<div class="col-sm-12 no-padding">
				<div id="c-carousel" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators c-carousel__indicators">
						<li v-for="item in carouselItems" :key="item.id"
						data-target="#c-carousel" :class="{active: item.id == 1}"
						:data-slide-to="item.id - 1"></li>
					</ol>

					<div class="carousel-inner" role="listbox">
						<div class="item" v-for="item in carouselItems" :key="item.id"
						:class="{active: item.id == 1 }">
							<picture>
								<source media="(max-width: 768px)" :srcset="item.mobile" alt="Image">
								<img :src="item.image" class="img-responsive" alt="Image">
							</picture>
							<div class="carousel-caption c-carousel__caption">
								<h3>{{ item.title }}</h3>
								<p>{{  item.description }}</p>
							</div>
						</div>
					</div>

					<a class="left carousel-control" href="#c-carousel" role="button" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#c-carousel" role="button" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
	</div>
</template>

<script>
	export default {
		name: 'Carousel',
		data(){
			return {
				carouselItems: [
					{
						id: 1,
						title: 'Soccer',
						description: `
							Quisque dui tortor, ultricies non congue ut, tristique vel massa.
							Maecenas placerat odio ultrices eros accumsan euismod. Donec
							lobortis efficitur venenatis. Suspendisse gravida lectus eu est
							suscipit bibendum. Nunc scelerisque erat at fermentum faucibus.
							Phasellus vel sapien sed lorem tincidunt cursus.`,
						image: require('../assets/carousel/soccer.jpg'),
						mobile: require('../assets/carousel/soccer-m.jpg')
					},
					{
						id: 2,
						title: 'Football',
						description: `
							Quisque dui tortor, ultricies non congue ut, tristique vel massa.
							Maecenas placerat odio ultrices eros accumsan euismod. Donec
							lobortis efficitur venenatis. Suspendisse gravida lectus eu est
							suscipit bibendum. Nunc scelerisque erat at fermentum faucibus.
							Phasellus vel sapien sed lorem tincidunt cursus.`,
						image: require('../assets/carousel/football.jpg'),
						mobile: require('../assets/carousel/football-m.jpg')
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	$sm: 685px;

	.c-carousel{
		position: relative;

		&__indicators{
			@media(max-width: $sm){
				display: none;
			}
		}

		&__caption{
			padding-bottom: 0;
			bottom: auto;
			position: absolute;
			top: 30%;
			transform: translateY(-10%);

			@media(max-width: $sm){
				top: -5%;
				transform: translateY(-10%);
			}

			h3{
				bottom: auto;
				font-size: 5em;
				text-shadow: 2px 2px 1px #000;

				@media(max-width: $sm){
					font-size: 4em;
				}
			}

			p{
				text-shadow: 2px 2px 1px #000;

				@media(max-width: $sm){
					font-size: .6em;
				}
			}
		}
	}
</style>
