<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Profile</b>

                <router-link class="mdb float-right" v-bind:to="'/director/editprofile'">Edit Profile</router-link>

                </p>
                <div class="mt-3">
                    <div class="mt-2">
                        <table class="table table-striped mb-0">
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Name</b>
                                        <p>{{profileData.data.profile.firstname}} {{profileData.data.profile.lastname}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Gender</b>
                                        <p>{{profileData.data.profile.gender}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Location</b>
                                        <p>{{profileData.data.profile.address}}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="mt-2">
                        <table class="table table-striped mb-0">

                            <tbody>
                                <tr>
                                    <td>
                                        <b>Company Name</b>
                                        <p>{{profileData.data.profile.company}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Description</b>
                                        <p>{{profileData.data.profile.description}}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-3">
                    <p class="cv1">
                        <b class="col-ppd">FILMOGRAPHY</b>

                        <a class="mdb float-right text-white" data-toggle="modal" data-target="#addfilmo" style="cursor: pointer;">Add Film</a>

                    </p>
                    <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{ error }}</div>
                    <table class="table table-striped mb-0">
                        <tbody><tr>
                            <td>
                                <b>Year</b>
                            </td>
                            <td>
                                <b>Film</b>
                            </td>
                            <td>
                                <b>Manage</b>
                            </td>

                        </tr>
                        </tbody><tbody>
                             <tr v-for="film in profileData.data.filmography">
                                <td><i class="fa fa-calendar"></i> 
                                    {{film.year}} 
                                </td>
                                <td>{{film.name}}</td>
                                <td>
                                   <button v-on:click="deleteFilm(film.id)" class="btn btn-outline-danger btn-sm">Delete</button>
                                </i></td>
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
	name: 'dirProfile',
	data() {
		return {
			loading: true,
			profileData: '',
			token: '',
			photoData: '',
			videoData: '',
			audioData: '',
			error: '',
			filmData: '',
			siteUrl: 'http://stage.cast.i.ng/',
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
		// console.log(userID);

		axios({ method: 'GET', url: 'http://api.cast.i.ng/userdetails/' + userID, config }).then(
			result => {
				this.loading = false;
				this.profileData = result;
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
		deleteFilm(filmID) {
			var config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};

			axios({ method: 'GET', url: 'http://api.cast.i.ng/delete/filmography/' + filmID, config }).then(
				result => {
					this.loading = false;
					this.filmData = result;
					this.error = result.data.status_msg;
					this.$router.go(0);
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
.msform input[type='url'],
.msform input[type='number'] {
	padding: 6px;
	border: 1px solid #ccc;
	border-radius: 3px;
	width: 100%;
	box-sizing: border-box;
	color: #2c3e50;
	font-size: 13px;
}

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