<template>
    <div>
        <loader v-if="loading"/>
        
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Notification Settings</b>
                     <router-link class="mdb float-right" v-bind:to="'/dashboard/notifications'">View Notifications</router-link>
                </p>
                <div class="mt-2">
                   <form>
                    <div class="row">
                        <div class="col-md-5">
                            <p class="noti-p">Facebook Notification</p>
                        </div>
                        <div class="col-md-5">
                            <switches v-model="facebook" theme="custom" color="blue"></switches>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-5">
                            <p class="noti-p">Email Notification</p>
                        </div>
                        <div class="col-md-5">
                            <switches v-model="emailNoti" theme="custom" color="blue"></switches>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-5">
                            <p class="noti-p">SMS Notification</p>
                        </div>
                        <div class="col-md-5">
                            <switches v-model="smsNoti" theme="custom" color="blue"></switches>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-5">
                            <p class="noti-p">Web Push Notification</p>
                        </div>
                        <div class="col-md-5">
                            <switches v-model="webNoti" theme="custom" color="blue"></switches>
                        </div>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-ppd wd">Save Settings</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
import Switches from 'vue-switches';

// Authentication
// import { getIdToken } from '../../../utils/auth';

export default {
	name: 'settings',
	data() {
		return {
            facebook: false,
            webNoti: false,
            smsNoti: false,
            emailNoti: false,
			loading: true,
			dashData: '',
			qualifiedData: '',
			token: '',
			siteUrl: 'http://stage.cast.i.ng/',
		};
	},
	components: {
		loader: Loader,
        Switches,
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

		axios({ method: 'GET', url: 'http://api.cast.i.ng/auditions/applied/' + userID, config }).then(
			result => {
				this.loading = false;
				this.dashData = result;
			},
			error => {
				this.loading = false;
				console.log('API CALL FAILED');
				console.error(error);
			}
		);

		axios({ method: 'GET', url: 'http://api.cast.i.ng/qualifiedproject/' + userID, config }).then(
			result => {
				this.qualifiedData = result;
			},
			error => {
				console.log('API CALL FAILED');
				console.error(error);
			}
		);
	},
};
</script>

<style>
.img-full {
	width: 100%;
}
.cv-pad {
	padding: 10px 16px !important;
}
.noti-p{
    margin-bottom: 0px;
    font-size: 16px;
}

.vue-switcher-theme--custom.vue-switcher-color--blue div {
  background-color: #00ad07;
}
.vue-switcher-theme--custom.vue-switcher-color--blue div:after {
  background-color: #037908;
}
.vue-switcher-theme--custom.vue-switcher-color--blue.vue-switcher--unchecked div {
  background-color: #ea0000;
}
.vue-switcher-theme--custom.vue-switcher-color--blue.vue-switcher--unchecked div:after {
  background-color: #ff4545;
}
</style>