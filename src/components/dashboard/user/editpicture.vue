<template>
    <div>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1"><b>Change Profile Picture</b> 
                <router-link v-bind:to="'/dashboard/profile'" class="mdb float-right text-white">View
                                        Profile
                                    </router-link>
                </p>

                <div class="tab-content px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}. Refresh Page Now</div>
                        <form class="msform mt-2">
                            <div id="room_fileds">

                                <input class="mb-2" type="file" @change="processFile($event)" placeholder="Upload Picture"
                                    accept="image/*" required>

                            </div>
                            <button type="submit" class="btn btn-ppd wd">
                                <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg"
                                    alt="Loader" />
                                <span v-if="!formLoading">Change Picture</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../template/loader';
import axios from 'axios';
export default {
	name: 'editpicture',
	data() {
		return {
			loading: true,
			formLoading: false,
			token: '',
			title: '',
			year: '',
			projectrole_id: '',
			projectRoles: '',
			link: '',
			titleVid: '',
			yearVid: '',
			image: '',
			projectrole_idVid: '',
			projectRolesVid: '',
			linkVid: '',
			error: false,
			siteUrl: 'http://stage.cast.i.ng/',
		};
	},
	methods: {
		processFile(event) {
			let form = new FormData();

			form.append('image', event.target.files[0]);

			this.formLoading = true;

			let userID = JSON.parse(localStorage.getItem('token'));

			const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

			axios.post(API_URL + '/editprofilepic/' + userID, form).then(
				result => {
					this.formLoading = false;

					console.log(result.data);

					this.error = result.data.status_msg;
					this.status = result.data.status;

					if (this.status) {
						// Clear data
						this.image = '';
					}
				},
				error => {
					console.error(error);
				}
			);
		},
	},
	mounted() {
		this.loading = true;

		var config = {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		};

		// Get Project Roles
		axios({
			method: 'GET',
			url: 'http://api.cast.i.ng/projectroles',
			config,
		}).then(
			result => {
				this.loading = false;
				this.projectRoles = result;
			},
			error => {
				this.loading = false;
				console.log('API CALL FAILED');
				console.error(error);
			}
		);
	},
};
</script>

<style scoped>
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
</style>