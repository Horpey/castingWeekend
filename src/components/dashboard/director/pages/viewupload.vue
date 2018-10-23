<template>
	<div>
		<loader v-if="loading" />
		<div class="card m-b-30">
			<div class="card-body">
				<div>
					<p class="cv1">
						<b class="col-ppd">{{uploadData.data.user_name}}</b> Uploads
						<span style="float: right">
							<b class="col-ppd">{{uploadData.data.project_name}}</b>
						</span>
					</p>
					<div class="mt-2">

						<table class="table table-striped mb-0">
							<tbody>
								<tr>
									<td><b>Project Role</b></td>
									<td><b>Type</b></td>
									<td><b>Date Uploaded</b></td>
									<td><b>Action</b></td>
								</tr>
							</tbody>
							<tbody>
								<tr v-for="upload in uploadData.data.list">
									<td>{{upload.projectrole_name}}</td>
									<td>{{upload.type}}</td>
									<td>{{upload.date | moment().format("DD MMM YYYY")}}</td>
									<td>
										<a :href="upload.media" class="btn btn-outline-success btn-sm" target="_blank">View</a>
									</td>
								</tr>
							</tbody>
						</table>
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
		name: 'viewupload',
		data() {
			return {
				loading: true,
				token: '',
				userRoleID: '',
				formLoading: '',
				uploadData: '',
				roleID: '',
				link: '',
				timeForm: '2018-10-03 15:23:44',
				siteUrl: 'http://stage.cast.i.ng/',
			};
		},
		components: {
			loader: Loader,
		},
		mounted() {
			let userRoleID = this.$route.params.id;

			this.token = JSON.parse(localStorage.getItem('token'));
			console.log(this.token);

			var config = {
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			};

			let userID = JSON.parse(localStorage.getItem('token'));

			axios({
				method: 'GET',
				url: 'https://api.cast.i.ng/projectrole/viewupload/' + userRoleID,
				config
			}).then(
				result => {
					this.uploadData = result;
				},
				error => {
					console.log('API CALL FAILED');
					console.error(error);
				}
			);



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
		methods: {},
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