<template>
	<div class="c-admin">
		<div class="row">
			<div class="col-sm-12">
				<h1>Contest Admin</h1>
				<p>
					<strong>
						This page is interactive.
					</strong>
					Try it adding a new player or
					removing players from the current list.
					The initial list is taken from a free API service.
					<a href="https://jsonplaceholder.typicode.com/users" target="_blank">
						See the raw data here
					</a>.
				</p>
			</div>
		</div>
		<admin-menu></admin-menu>
		<div class="row">
			<div class="col-sm-8 col-xs-12">
				<h2>Registered Players</h2>
				<players></players>
			</div>
			<div class="col-sm-4 col-xs-12">
				<h2>Today's Winners</h2>
				<winners></winners>
			</div>
		</div>
	</div>
</template>

<script>
	import Players from '@/components/Players'
	import Winners from '@/components/Winners'
	import AdminMenu from '@/components/AdminMenu'

	export default {
		name: 'Landing',
		components: {Players, Winners, AdminMenu}
	}
</script>