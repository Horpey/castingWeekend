<template>
    <div>
        <div class="card m-b-30">
            <div class="card-body">

                <div class="row">
                    <div class="col-md-5">
                        <div class="dp" :style="{'background': ' url('+ profileData.data.profile.image + ')' }">
                            <router-link v-bind:to="'/director/editProfile'" class="edit-p">
                                <span class=" fa fa-pencil"></span>
                            </router-link>

                        </div>
                    </div>
                    <div class="col-md-7">
                        <h4 class="mt-0 header-title">{{profileData.data.profile.firstname}}
                            {{profileData.data.profile.lastname}}</h4>
                        <p class="text-muted font-14">
                        </p>
                        <div class="limit-div side-limit">{{profileData.data.profile.description}}</div>
                        <br>
                        <router-link class="btn btn-ppd btn-sm" v-bind:to="'/director/editProfile'">Edit</router-link>
                        <router-link class="btn btn-blu btn-sm" v-bind:to="'/director/profile'">View</router-link>
                    </div>
                </div>


                <br>

                <div class="bline mt-3"></div>
                <!-- <h5 class="col-ppd">SHORTCUTS</h5> -->


                <i class="mdi mdi-file-document col-pink mr-2"></i>

                <router-link v-bind:to="'/director/addProject'">Add Project</router-link>

                <div class="bline"></div>
                <i class="fa fa-user col-pink mr-2"></i>

                <router-link v-bind:to="'/director/subAdmin'">Manage Admins</router-link>

                <div class="bline"></div>
            </div>
        </div>

        <modal />
    </div>
</template>

<script>
import axios from 'axios';
import Modal from './Modal';

export default {
	name: 'sidebar',
	components: {
		Modal: Modal,
	},
	data() {
		return {
			loading: true,
			profileData: '',
			token: '',
			siteUrl: 'http://stage.cast.i.ng/',
		};
	},
	mounted() {
		this.token = JSON.parse(localStorage.getItem('token'));
		console.log(this.token);

		this.loading = true;

		var config = {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		};

		let userID = JSON.parse(localStorage.getItem('token'));
		// console.log(userID);

		axios({
			method: 'GET',
			url: 'http://api.cast.i.ng/userdetails/' + userID,
			config,
		}).then(
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
	},
};
</script>

<style>
.side-limit {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	line-height: 16px;
	max-height: 97px;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

.w-full {
	width: 100% !important;
}

.dp {
	position: relative !important;
	height: 140px !important;
	background-size: cover !important;
	background-position: center !important;
}

.edit-p {
	position: absolute;
	right: 0px;
	color: white;
	background-color: #e6077c;
	padding: 4px 9px;
	border-radius: 57px;
}

.edit-p:hover,
.edit-p:focus {
	color: white;
}
</style>