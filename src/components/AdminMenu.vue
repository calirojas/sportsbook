<template>
	<div class="c-admin-menu row">
		<div class="col-sm-2 col-xs-4" v-for="item in 6" :key="item">
			<div class="panel panel-default">
				<div class="panel-body">
					<a href="#">
						<img src="../assets/admin/chart.png" alt="Admin icon" class="img-responsive">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
