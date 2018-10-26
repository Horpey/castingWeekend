<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <p class="cv1">
                            <b class="col-ppd">Create a New Audition</b>
                        <router-link class="mdb float-right text-white" v-bind:to="'/director/projects/'">View Projects</router-link>
                        </p>    
                        <div class="row">
                            <div class="col-md-6">
                                <div class="msform">
                                    <label class="google-input">
                                        Set Audition Location</label>
                                    <gmapAutocomplete
                                        @place_changed="setPlace">
                                    </gmapAutocomplete>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="msform">
                                    <label>Audition Date</label>
                                    <input :disabled="disableDate" v-model="applicantsDate" @input="generalDate" type="date" placeholder="Set Date" required="" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="msform">
                                    <label>Audition Time</label>
                                    <input class="" :disabled="disableTime" v-model="applicantsTime" @input="generalTime" type="time" placeholder="Set Time" />
                                </div>
                            </div>
                        </div>
                         <!-- <button @click="usePlace" class="btn btn-primary">Add Audition Location</button> -->
                            <br/>
                            <GmapMap style="width: 100%; height: 300px;" :zoom="zoomMap" :center="{lat:latInitt, lng:longInitt}">
                                <GmapMarker v-for="(marker, index) in markers"
                                    :key="index"
                                    :position="marker.position"
                                    ></GmapMarker>
                                <GmapMarker
                                    v-if="this.place"
                                    label="&#x2605;"
                                    :position="{
                                    lat: this.place.geometry.location.lat(),
                                    lng: this.place.geometry.location.lng(),
                                    }"
                                    ></GmapMarker>
                                </GmapMap>
                        </div>
                        <div class="col-md-4">
                            <form @submit.prevent="submitAudition">
                            <p class="cv1">
                                <b class="col-ppd">Schedule Date/Time for Applicants</b></p>
                            <div class="applicants">
                                <div v-for="(listapplicant, index) in listApplicants" class="msform">
                                    <label class="mb-0"><strong>{{listapplicant.name}}</strong></label>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="msform">
                                                <label class="mb-0">Audition Date</label>
                                                <input  v-model="applicantsDate" @input="applyTime(listapplicant.id,index)" class="" type="date" placeholder="Set Date" disabled/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="msform">
                                                <label class="mb-0">Audition Time</label>
                                                <input :disabled="disableTime" v-model="actorTime[index]"  @input="applyTime(listapplicant.id, index)" type="time" placeholder="Set Time" />
                                            </div>
                                        </div>
                                    </div><hr>
                                </div>
                            </div>

                            <button type="submit" class="mdb btn-block sched float-right text-white" style="border: 0px!important; cursor: pointer;">
                            	<img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg" alt="Loader" />
                            <span v-if="!formLoading">Schedule Now</span>
                            </button>

                            </form>
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
	name: 'createAudition',
	data() {
		return {
			zoomMap: 6,
			latInitt: 9.0820,
			longInitt: 8.6753,
			disableTime: true,
			disableDate: true,
			loading: true,
			markers: [],
			applicantsDate: '',
			applicantsTime: '',
			actorDate: '',
			actorTime: [],
			genDate: '',
			place: null,
			token: '',
			error: '',
			address: '',
			latitude: '',
			longitude: '',
			date: '',
			time: '',
			localIDs: '',
			users: [],
			userObj: {},
			listApplicants: '',
			formLoading: '',
		};
	},
	components: {
		loader: Loader,
	},
	mounted() {
		this.localIDs = JSON.parse(localStorage.getItem('applicantsID'));
		console.log(this.localIDs);

		let form = new FormData();
		form.append('users', this.localIDs);
		const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

		axios.post(API_URL + '/getusers', form).then(
			result => {
				console.log(result.data);
				this.listApplicants = result.data.list;
			},
			error => {
				console.error(error);
			}
		);

		// Posting to get Users
		// var getUsers = 0;
		// for (getUsers in this.localIDs) {
		// 	console.log('Hello World ' + this.localIDs[getUsers]);

		// 	let form = new FormData();
		// 	form.append('users', this.localIDs[getUsers]);
		// 	const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

		// 	axios.post(API_URL + '/getusers', form).then(
		// 		result => {
		// 			console.log(result.data);
		// 		},
		// 		error => {
		// 			console.error(error);
		// 		}
		// 	);
		// }

		this.token = JSON.parse(localStorage.getItem('token'));
		console.log(this.token);

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
		generalDate(event) {
			console.log(event.target.value);

			this.actorDate = event.target.value;

			this.disableTime= false;
		},
		generalTime(event) {
			console.log(event.target.value);

			for(var counti = 0; counti < this.listApplicants.length; counti++){
				this.actorTime[counti] = event.target.value;
			}

			

			// alert(this.listApplicants.length);
			for (var i = 0; i < this.listApplicants.length; i++) { 
			    let id = this.listApplicants[i].id;
			    let usertimee = this.actorTime[i];
			    let userdatee = this.actorDate;

			    this.userObj = {'id': id, 'userTime': usertimee, 'userDate': userdatee};

			    this.users.push(this.userObj);
			}

			console.log(this.users);


			
		},
		setDescription(description) {
			this.description = description;
		},
		setPlace(place) {
			this.place = place;
			console.log(this.place.geometry.location.lat());
			console.log(this.place.geometry.location.lng());
			console.log(this.place.formatted_address);

			this.disableDate= false;
			this.zoomMap = 13;
			this.latInitt = this.place.geometry.location.lat();
			this.longInitt = this.place.geometry.location.lng();


			this.address = this.place.formatted_address;
			this.latitude = this.place.geometry.location.lat();
			this.longitude = this.place.geometry.location.lng();

			if (this.place) {
				this.markers.push({
					position: {
						lat: this.place.geometry.location.lat(),
						lng: this.place.geometry.location.lng(),
					},
				});
				this.place = null;
			}

		},
		usePlace(place) {
			if (this.place) {
				this.markers.push({
					position: {
						lat: this.place.geometry.location.lat(),
						lng: this.place.geometry.location.lng(),
					},
				});
				this.place = null;
			}
		},
		applyTime(applyId,index) {
            // alert(applyId);

            // this.userObj = {"id": applyId};

            // this.userObj = {};

            // this.users.length = 0; 

            this.userObj = {'id': applyId, 'userTime': this.actorTime[index], 'userDate': this.actorDate};

            if (this.users.findIndex(x => x.id === this.userObj.id) === -1) {
			  // do something
			  this.users.push(this.userObj);
			}else{
				let index = this.users.findIndex(x => x.id === this.userObj.id);
				this.users[index] = this.userObj;
				// this.users.push(this.userObj);
			}

            console.log(this.users);

            // let object2 = Object.assign({'id': applyId}, this.userObj);

			// let applyTime = event.target.value;
			// alert(applyTime + applyId);
		},
		submitAudition() {
			let form = new FormData();

			let userString = JSON.stringify(this.users);

			console.log(this.address);
			console.log(this.latitude);
			console.log(this.longitude);
			console.log(this.applicantsDate);
			console.log(this.applicantsTime);
			console.log(userString);


			form.append('address', this.address);
			form.append('latitude', this.latitude);
			form.append('longitude', this.longitude);
			form.append('date', this.applicantsDate);
			form.append('time', this.applicantsTime);
			form.append('users', userString);

			this.formLoading = true;

			let directorID = JSON.parse(localStorage.getItem('token'));
			let projectID = JSON.parse(localStorage.getItem('projectRoleID'));

			const API_URL = process.env.API_URL || 'http://api.cast.i.ng';
			
			axios.post(API_URL + '/createevent/' + directorID + '/' + projectID, form).then(
				result => {
					this.formLoading = false;

					console.log(result.data);

					this.error = result.data.status_msg;
					this.status = result.data.status;

					if (this.status) {
						$('#eventAdded').appendTo("body").modal('show');
					}
				},
				error => {
					this.formLoading = false;
					console.error(error);
				}
			);
		},
	},
};
</script>

<style>
.gm-style-mtc {
	display: none !important;
}
.gm-svpc {
	display: none !important;
}
.google-input input {
	background: white;
	padding: 7px 21px;
	border: 1px solid #ccc;
	border-radius: 3px;
	width: 100%;
	box-sizing: border-box;
	color: #3c3c3c;
	font-size: 12px;
}

.msform input[type='url'],
.msform input[type='number'],
.msform input[type='email'],
.msform input[type='date'],
.msform input[type='time'] {
	padding: 6px;
	border: 1px solid #ccc;
	border-radius: 3px;
	width: 100%;
	box-sizing: border-box;
	color: #2c3e50;
	font-size: 13px;
}

.sched {
	text-align: center;
	padding: 11px 0px;
}
.applicants {
	padding: 0px 8px;
	height: 360px;
	overflow-y: scroll;
	overflow-x: hidden;
}

.applicants::-webkit-scrollbar {
	width: 0.5em;
}

.applicants::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.applicants::-webkit-scrollbar-thumb {
	background-color: #e6077c;
	outline: 1px solid slategrey;
}
.form-loader{
    width: 18px;
}
</style>