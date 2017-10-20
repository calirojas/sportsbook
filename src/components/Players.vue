<template>
	<div class="c-players">
		<div class="table-responsive">
			<table class="table table-hover table-striped">
				<thead>
					<tr>
						<th>Position</th>
						<th>Username</th>
						<th>Name</th>
						<th>Email</th>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					<template v-if="players.length">
						<tr v-for="(player, index) in players" :key="index">
							<td>{{ index + 1 }}</td>
							<td>{{ player.username }}</td>
							<td>{{ player.name }}</td>
							<td>{{ player.email }}</td>
							<td class="text-right">
								<button type="button" class="btn btn-xs btn-danger" title="Remove"
								@click.prevent="deletePlayer(player)">
									&times;
								</button>
							</td>
						</tr>
					</template>
					<tr v-else>
						<td colspan="5">
							There are no players registered in the list.
							Try adding some players using the
							<strong>Add new player</strong> button or
							<a href="#" @click.prevent="showForm">click here</a>.
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="5" class="text-right">
							<button type="button" class="btn btn-success" @click="getPlayers"
							v-if="!players.length" :disabled="showAPIError">
								Populate (API)
							</button>
							<button type="button" class="btn btn-primary"
							@click="showForm">Add new player</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>

		<div class="modal fade" tabindex="-1" role="dialog" id="c-players__add-new">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title">Register new player</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-12">
								<form @submit.prevent="addNewPlayer" ref="form">
									<div class="form-group">
										<label class="control-label">Username:</label>
										<input type="text" class="form-control"
										v-model="newPlayer.username" required placeholder="Required">
									</div>
									<div class="form-group">
										<label class="control-label">Full name:</label>
										<input type="text" class="form-control"
										v-model="newPlayer.name" required placeholder="Required">
									</div>
									<div class="form-group">
										<label class="control-label">Email:</label>
										<input type="text" class="form-control"
										v-model="newPlayer.email" required placeholder="Required">
									</div>
								</form>
								<div class="alert alert-success" v-show="showAlert">
									<button type="button" class="btn btn-xs close" @click="showAlert = false">&times;</button>
									<p>The new player has been added to the list.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" @click="submitForm"
						:disabled="!submitEnabled">Add to the list</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Players',
		data(){
			return {
				players: [],
				newPlayer: {
					username: '',
					name: '',
					email: '',
				},
				showAlert: false,
				showAPIError: false
			}
		},
		computed: {
			submitEnabled: function(){
				let val = false

				if(this.newPlayer.username != '' &&
				this.newPlayer.name != '' &&
				this.newPlayer.email != ''){
					val = true
				}

				return val
			}
		},
		methods: {
			showForm(){
				jQuery('#c-players__add-new').modal({
					show: true
				})
			},
			addNewPlayer(){
				this.players.push({
					id: 11,
					username: this.newPlayer.username,
					email: this.newPlayer.email,
					name: this.newPlayer.name,
				})

				this.newPlayer.username = ''
				this.newPlayer.name = ''
				this.newPlayer.email = ''
				this.showAlert = true
			},
			submitForm(){
				this.addNewPlayer()
			},
			getPlayers(){
				axios
					.get('https://jsonplaceholder.typicode.com/users')
					.then(response => {
						this.players = response.data
					})
					.catch(e => {
						this.showAPIError = true
					})
			},
			deletePlayer(player){
				this.players.splice(this.players.indexOf(player), 1)
			}
		},
		created(){
			this.getPlayers()
		}
	}
</script>
