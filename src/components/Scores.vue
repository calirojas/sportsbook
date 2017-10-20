<template>
	<div class="c-scores">
		<div class="table-responsive">
			<table class="table table-hover table-striped">
				<thead>
					<tr>
						<th colspan="6">
							USA: NFL / Round: 6
						</th>
					</tr>
				</thead>
				<tbody>
					<template v-for="item in 10">
						<tr v-for="score in scores" :key="score.id">
							<td></td>
							<td>{{ score.col1 }}</td>
							<td>{{ score.col2 }}</td>
							<td>{{ score.col3 }}</td>
							<td>{{ score.col4 }}</td>
							<td></td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Scores',
		data(){
			return {
				scores: [
					{
						id: 1,
						col1: '16.10. 19:30',
						col2: 'Tennessee Titans',
						col3: 'Indianapolis Colts',
						col4: '36 : 22'
					}
				]
			}
		}
	}
</script>
