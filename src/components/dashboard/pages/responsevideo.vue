<template>
	<div>
		<loader v-if="loading" />
		<div class="card m-b-30">
			<div class="card-body">
				<div id="nav-tabContent" class="tab-content py-3 px-3 px-sm-0">
					<div id="nav-auditions" role="tabpanel" aria-labelledby="nav-auditions-tab" class="tab-pane fade show active">
						<div class="mt-2">
							<div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{
								error }}</div>

							<form class="msform mt-2" @submit.prevent="sendVideo">
								<input type="hidden" name="prid" v-model="roleID">
								<div id="room_fileds">
									<b>Add Video URL:</b>
									<span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Video URL" v-model="link" required></span>
								</div>

								<button type="submit" class="btn btn-ppd wd">
									<img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg" alt="Loader" />
									<span v-if="!formLoading">Send Link</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Loader from '../template/loader';
	export default {
		name: 'responsevideo',
		data() {
			return {
				loading: true,
				token: '',
				responseData: '',
				formLoading: '',
				roleID: '',
				link: '',
				siteUrl: 'http://stage.cast.i.ng/',
			};
		},
		components: {
			loader: Loader,
		},
		mounted() {

			this.roleID = this.$route.params.id;
			this.loading = true;
			axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
				response => {
					this.loading = false;
					console.log('Page Changes');
				},
				error => {
					this.loading = false;
					console.log('Page Error');
				}
			);
		},
		methods: {
			sendVideo() {
				let form = new FormData();

				form.append('link', this.link);

				this.formLoading = true;

				let projectID = this.$route.params.id;

				this.roleID = this.$route.params.id;

				let userID = JSON.parse(localStorage.getItem('token'));

				const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

				axios.post(API_URL + '/audition/addvideo/' + projectID, form).then(result => {

					this.formLoading = false;

					console.log(result.data)

					this.error = result.data.status_msg;
					this.status = result.data.status;

					if (this.status) {
						// Clear data
						this.link = '';
					}

					// this.$router.replace(this.$route.query.redirect || '/dashboard/profile');

				}, error => {
					console.error(error);
				});
			}
		}
	};
</script>

<style>
	.form-loader {
		width: 22px;
	}

	.success {
		color: #155724;
		background-color: #d4edda;
		border-color: #c3e6cb;
	}

	.danger {
		color: #721c24;
		background-color: #f8d7da;
		border-color: #f5c6cb;
	}

	.btn-ppd:hover {
		background-color: #3f0047 !important;
		color: white !important;
	}
</style>