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
                                    <input v-model="applicantsDate" @input="generalDate" type="date" placeholder="Set Date" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="msform">
                                    <label>Audition Time</label>
                                    <input class="" v-model="applicantsTime" @input="generalTime" type="time" placeholder="Set Time" />
                                </div>
                            </div>
                        </div>
                         <!-- <button @click="usePlace" class="btn btn-primary">Add Audition Location</button> -->
                            <br/>
                            <GmapMap style="width: 100%; height: 300px;" :zoom="5" :center="{lat:9.0820, lng:8.6753}">
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
                            <p class="cv1">
                                <b class="col-ppd">Schedule Date/Time for Applicants</b></p>
                            <div class="applicants">
                                <div class="msform">
                                    <label class="mb-0"><strong>Adeniran Opeyemi</strong></label>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="msform">
                                                <label class="mb-0">Audition Date</label>
                                                <input v-model="actorDate" class="" type="date" placeholder="Set Date" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="msform">
                                                <label class="mb-0">Audition Time</label>
                                                <input v-model="actorTime" class="" type="time" placeholder="Set Time" />
                                            </div>
                                        </div>
                                    </div><hr>
                                </div>
                            </div>

                            <a href="#" class="mdb btn-block sched float-right text-white">Schedule Now</a>
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
			loading: true,
			markers: [],
			applicantsDate: '',
			applicantsTime: '',
            actorDate: '',
            actorTime: '',
			genDate: '',
			place: null,
			token: '',
			error: '',
		};
	},
	components: {
		loader: Loader,
	},
	mounted() {
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
        generalDate (event) {
            console.log(event.target.value);
            this.actorDate = event.target.value;
        },
        generalTime(event){
            console.log(event.target.value);
            this.actorDate = event.target.value;
        },
		setDescription(description) {
			this.description = description;
		},
		setPlace(place) {
			this.place = place;
			console.log(this.place.formatted_address);
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
</style>