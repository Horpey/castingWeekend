<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Manage Admins</b>

                    <a class="mdb float-right text-white" data-toggle="modal" data-target="#addAdmin" style="cursor: pointer;">Add Admin</a>
                </p>    
                <div class="mt-2">
                        <table class="table table-striped mb-0">
                            <tbody><tr>
                                <td>
                                    <b>Name</b>
                                </td>
                                <td>
                                    <b>Role</b>
                                </td>
                                <td>
                                    <b>Email Address</b>
                                </td>
                                <td>
                                    <b>Phone Number</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>

                            </tbody><tbody>
                                <tr v-for="admin in adminsData.data.list">
                                    <td>{{admin.firstname}} {{admin.lastname}}</td>
                                    <td>SubAdmin</td>
                                    <td>{{admin.email}}</td>
                                    <td>{{admin.phone}} </td>
                                    <td>
                                         <button v-on:click="deleteAdmin(admin.id)" class="btn btn-outline-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>      
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
	name: 'manageAdmin',
	data() {
		return {
			loading: true,
			token: '',
			error: '',
			deleteData: '',
			adminsData: '',
		};
	},
	components: {
		loader: Loader,
	},
	mounted() {
		this.token = JSON.parse(localStorage.getItem('token'));
		console.log(this.token);

		this.loading = true;

		var config = {
			headers: { 'Access-Control-Allow-Origin': '*' },
		};

		let userID = JSON.parse(localStorage.getItem('token'));

		axios({ method: 'GET', url: 'http://api.cast.i.ng/director/subadmins/' + userID, config }).then(
			result => {
				this.loading = false;
				this.adminsData = result;
			},
			error => {
				this.loading = false;
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
	methods: {
		deleteAdmin(adminID) {
			var config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};

			axios({ method: 'GET', url: 'http://api.cast.i.ng/delete/user/' + adminID, config }).then(
				result => {
					this.loading = false;
					this.deleteData = result;
					this.error = result.data.status_msg;
					window.location.reload();
					// this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
				},
				error => {
					this.loading = false;
					console.log('API CALL FAILED');
					// this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
					console.error(error);
				}
			);
		},
	},
};
</script>

<style>
</style>