<template>
    <div> 
        <!-- Fix Appointment -->
        <div class="modal fade" id="fixappointment" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Schedule Audition</b>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/fixappointment">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Date:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="date" placeholder="Date" name="date">
                                            <input type="hidden" id="user_id" name="user_id">
                                            <input type="hidden" id="projectrole_user_id" name="projectrole_user_id">
                                        </span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Time :</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Time" name="time">
                                        </span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <b>Venue:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Venue" name="venue">
                                        </span>
                                    </div>
                                </div>


                            </div>
                            <div class="">
                                <input class="btn btn-ppd border-0" value="Schedule" type="submit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fix Appointment -->

        <!-- Add Filmography -->
         <div class="modal fade" id="addfilmo" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Add Filmography</b>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}</div>

                        <form class="msform mt-2" @submit.prevent="addFilm">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Year:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="number" placeholder="Film Year" v-model="year">
                                        </span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Film Name:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Film Name" v-model="title">
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div class="">
                                <button type="submit" class="btn btn-ppd wd">
                                    <img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg"
                                        alt="Loader" />
                                    <span v-if="!formLoading">Save Job</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         <!-- Add Filmography -->


         <!-- Add Admin -->
         <div class="modal fade" id="addAdmin" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Add Admin</b>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}</div>

                        <form class="msform mt-2" @submit.prevent="addAdmin">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>First Name:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="First Name" v-model="firstname">
                                        </span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Last Name:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Last Name" v-model="lastname">
                                        </span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <b>Email:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="email" placeholder="Email Address" v-model="email">
                                        </span>
                                    </div>

                                    <div class="col-md-6">
                                        <b>Phone:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Phone Number" v-model="phone">
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div class="">
                                <button type="submit" class="btn btn-ppd wd">
                                    <img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg"
                                        alt="Loader" />
                                    <span v-if="!formLoading">Save Admin</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         <!-- Add Admin -->

         <!-- Rate Applicant -->
         <div class="modal fade" id="rateApplicant" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Rate Applicant</b>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}</div>

                        <form class="msform mt-2" @submit.prevent="rateApplicant">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Performance:</b>
                                        <span class="bmd-form-group">
                                            <VueStars
                                                name="performance"
                                                v-model="perform"
                                                :readonly="false"
                                            />
                                        </span>
                                    </div>
                                    <hr>
                                    <div class="col-lg-6">
                                        <b>Team Play:</b>
                                        <span class="bmd-form-group">
                                            <VueStars
                                                name="teamplay"
                                                v-model="teamplay"
                                                :readonly="false"
                                            />
                                        </span>
                                    </div>
                                    <hr>
                                    <div class="col-lg-6">
                                        <b>Interaction:</b>
                                        <span class="bmd-form-group">
                                            <VueStars
                                                name="interaction"
                                                v-model="interaction"
                                                :readonly="false"
                                            />
                                        </span>
                                    </div>
                                    <hr>
                                    <div class="col-lg-6">
                                        <b>Role:</b>
                                        <span class="bmd-form-group">
                                            <VueStars
                                                name="role"
                                                v-model="role"
                                                :readonly="false"
                                            />
                                        </span>
                                    </div>
                                    <hr>
                                    <div class="col-lg-12">
                                        <b>Comment:</b>
                                        <span class="bmd-form-group is-filled"><textarea v-model="comment" id="input" class=""
                                                rows="3"></textarea></span>
                                    </div>
                                </div>

                            </div>
                            <div class="">
                                <button type="submit" class="btn btn-ppd wd">
                                    <img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg"
                                        alt="Loader" />
                                    <span v-if="!formLoading">Rate Applicant</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         <!-- Rate Applicant -->
    </div>
</template>

<script>
import axios from 'axios';
import VueStars from 'vue-stars';
export default {
	name: 'Modal',
	components: {
		VueStars: VueStars,
	},
	data() {
		return {
			loading: true,
			token: '',
			title: '',
			formLoading: '',
			year: '',
			status: '',
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			error: false,
			siteUrl: 'http://stage.cast.i.ng/',
			perform: '',
			teamplay: '',
			interaction: '',
			role: '',
			comment: '',
		};
	},
	methods: {
		rateApplicant() {
            let form = new FormData();
            
            console.log(this.perform);
            console.log(this.teamplay);
            console.log(this.interaction);
            console.log(this.role);
            console.log(this.comment);


            form.append('performance', this.perform);
            form.append('teamplay', this.teamplay);
            form.append('interaction', this.interaction);
            form.append('role', this.role);
            form.append('comment', this.comment);

			this.formLoading = true;

			let directorID = JSON.parse(localStorage.getItem('token'));

			let userID = this.$route.params.id;

			const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

			axios.post(API_URL + '/addrating/' + directorID + '/' + userID, form).then(
				result => {
					this.formLoading = false;

					console.log(result.data);

					this.error = result.data.status_msg;
					this.status = result.data.status;

					if (this.status) {
						// Clear data
						this.firstname = '';
					}
				},
				error => {
                    this.formLoading = false;
                    this.status = false;
                    this.error = 'Failed to Rate Actor';
					console.log('API CALL FAILED');
					console.error(error);
				}
			);
		},
		addAdmin() {
			let form = new FormData();

			form.append('firstname', this.firstname);
			form.append('lastname', this.lastname);
			form.append('email', this.email);
			form.append('phone', this.phone);

			this.formLoading = true;

			let userID = JSON.parse(localStorage.getItem('token'));

			const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

			axios.post(API_URL + '/director/addadmin/' + userID, form).then(
				result => {
					this.formLoading = false;

					console.log(result.data);

					this.error = result.data.status_msg;
					this.status = result.data.status;

					if (this.status) {
						// Clear data
						this.firstname = '';
						this.lastname = '';
						this.email = '';
						this.phone = '';
					}

					this.$router.go(0);
				},
				error => {
					console.log('API CALL FAILED');
					console.error(error);
				}
			);
		},
		addFilm() {
			let form = new FormData();

			form.append('title', this.title);
			form.append('year', this.year);

			this.formLoading = true;

			let userID = JSON.parse(localStorage.getItem('token'));

			const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

			axios.post(API_URL + '/addfilmography/' + userID, form).then(
				result => {
					this.formLoading = false;

					console.log(result.data);

					this.error = result.data.status_msg;
					this.status = result.data.status;

					if (this.status) {
						// Clear data
						this.title = '';
						this.year = '';
					}

					this.$router.go(0);
				},
				error => {
					console.error(error);
				}
			);
		},
	},
};
</script>

<style scoped>
.msform input[type='url'],
.msform input[type='number'],
.msform input[type='email'] {
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