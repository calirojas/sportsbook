<template>
	<div class="c-footer row">
		<div class="col-sm-3">
			<h5>Our company</h5>
			<ul class="list-unstyled">
				<li><a href="#">Sportsbook</a></li>
				<li><a href="#">Live Betting</a></li>
				<li><a href="#">Casino</a></li>
				<li><a href="#">Poker</a></li>
				<li><a href="#">Promotions</a></li>
			</ul>
		</div>
		<div class="col-sm-3">
			<h5>Support</h5>
			<ul class="list-unstyled">
				<li><a href="#">Rules</a></li>
				<li><a href="#">Help</a></li>
				<li><a href="#">Live Help</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		</div>
		<div class="col-sm-3">
			<h5>Connect with Us</h5>
			<ul class="list-unstyled">
				<li><a href="#">Follow us on Twitter</a></li>
				<li><a href="#">Check out our blog</a></li>
				<li><a href="#">Visit us on YouTube</a></li>
			</ul>
		</div>
		<div class="col-sm-3">
			<h5>Sports</h5>
			<ul class="list-unstyled">
				<li><a href="#">Soccer</a></li>
				<li><a href="#">UFC</a></li>
				<li><a href="#">Boxing</a></li>
				<li><a href="#">Golf</a></li>
				<li><a href="#">Tennis</a></li>
				<li><a href="#">Horses</a></li>
				<li><a href="#">NFL Betting</a></li>
				<li><a href="#">NBA Betting</a></li>
				<li><a href="#">MLB Betting</a></li>
				<li><a href="#">NHL Betting</a></li>
				<li><a href="#">College Football Betting</a></li>
				<li><a href="#">Welcome Bonus Code</a></li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss">
	.c-footer{
		background: #000;
		padding: 35px 0;

		&>div{
			@media(min-width: 768px){
				border-right: solid 1px #111;
				height: 300px;;

				&:last-child{
					border-right: 0;
				}
			}
		}

		h5{
			font-size: 1.5em;
			color: #ccc;
		}

		ul{
			li{
				a{
					color: #666;

					&:hover{
						color: #fff;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
