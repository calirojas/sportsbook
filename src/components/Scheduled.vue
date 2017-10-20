<template>
	<div class="c-scheduled">
		<div class="table-responsive">
			<table class="table table-hover table-striped">
				<thead>
					<tr>
						<th colspan="5">
							USA: NFL
						</th>
					</tr>
				</thead>
				<tbody>
					<template v-for="i in 9">
						<tr v-for="item in scheduled" :key="item.id">
							<td></td>
							<td>{{ item.col1 }}</td>
							<td>{{ item.col2 }}</td>
							<td>{{ item.col3 }}</td>
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
		name: 'Scheduled',
		data(){
			return {
				scheduled: [
					{
						id: 1,
						col1: '22.10. 12:00',
						col2: 'Buffalo Bills',
						col3: 'Tampa Bay Buccaneers'
					},
				]
			}
		}
	}
</script>