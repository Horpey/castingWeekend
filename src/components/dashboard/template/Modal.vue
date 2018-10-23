<template>
    <div>
        <!-- Add Job Modal -->
        <div class="modal fade" id="addjob" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" style="display: none;"
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

                        <form class="msform mt-2" @submit.prevent="addJob">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Year:</b>
                                        <span class="bmd-form-group">
                                            <input required="" class="mb-2" type="text" placeholder="Year" v-model="year">
                                        </span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Title:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Title" v-model="title"
                                                required="">
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Role:</b>
                                        <span class="bmd-form-group is-filled">
                                            <select v-model="projectrole_id" class="mb-2" style="margin-top: 8px;"
                                                required="">
                                                <option value="">--Select--</option>
                                                <option v-for="projectRole in projectRoles.data.list" :value="projectRole.id">{{projectRole.title}}</option>
                                            </select></span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Job Type:</b>
                                        <span class="bmd-form-group is-filled">
                                            <select v-model="projecttype_id" class="mb-2" style="margin-top: 8px;"
                                                required="">
                                                <option value="">--Select--</option>
                                                <option v-for="projectType in projectTypes.data.list" :value="projectType.id">{{projectType.title}}</option>
                                            </select></span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Director:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" v-model="director" placeholder="Film Director">
                                        </span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Production Company:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" v-model="company" placeholder="Production Company">
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div class="">
                                <button type="submit" class="btn btn-ppd wd">
                                    <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg"
                                        alt="Loader" />
                                    <span v-if="!formLoading">Save Job</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Job Modal -->

        <!-- Add Education Modal -->

        <div class="modal fade" id="addeducation" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Add Education</b>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}</div>

                        <form class="msform mt-2" @submit.prevent="addEducation">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Year:</b>
                                        <span class="bmd-form-group">
                                            <input required="" class="mb-2" type="text" placeholder="Year" v-model="education_year">
                                        </span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>School:</b>
                                        <span class="bmd-form-group">
                                            <input required="" class="mb-2" type="text" v-model="education_school"
                                                placeholder="School Name">
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Certificate Earned:</b>
                                        <span class="bmd-form-group">
                                            <input required="" class="mb-2" type="text" placeholder="Certificate Earned "
                                                v-model="education_certificate">
                                        </span>
                                    </div>
                                </div>


                            </div>
                            <div class="">
                                <button type="submit" class="btn btn-ppd wd">
                                    <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg"
                                        alt="Loader" />
                                    <span v-if="!formLoading">Save Education</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Education Modal -->

        <!-- Add Actor Modal -->

        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Rate Actor</b>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <form class="msform mt-4 mb-5" method="post" action="">


                            <div class="bline mb-2 mt-2">
                                <b>Comment</b>
                                <span class="bmd-form-group">
                                    <textarea class="mb-2" col="10" name="comment"></textarea>
                                </span>
                            </div>

                            <input class="btn btn-ppd border-0 mt-3" value="Submit Rating" type="submit">
                            <div class="ripple-container"></div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


        <!-- Add Event -->
        <div class="modal fade" id="EventModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Add Event </b>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/saveevent">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <b>Event:</b>
                                        <span class="bmd-form-group">
                                            <!-- <input class="mb-2 form-control" type="text" placeholder="" name="title"> -->
                                            <textarea class="mb-2" name="event" cols="20" rows="5"></textarea>
                                        </span>
                                    </div>

                                    <div class="col-lg-12">
                                        <b>Date:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="date" name="date">
                                        </span>
                                    </div>
                                    <!-- </div>

                                <div class="row"> -->
                                    <div class="col-lg-12">
                                        <b>Time:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2 " id="timepicker1" type="text" name="time">
                                        </span>
                                    </div>
                                </div>



                            </div>
                            <div class="">
                                <input class="btn btn-ppd border-0" value="Save" type="submit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add Event -->
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Modal',
        data() {
            return {
                loading: true,
                token: '',
                education_year: '',
                education_school: '',
                formLoading: '',
                education_certificate: '',
                projecttype_id: '',
                title: '',
                projectrole_id: '',
                director: '',
                company: '',
                year: '',
                status: '',
                error: false,
                projectRoles: '',
                projectTypes: '',
                siteUrl: "http://stage.cast.i.ng/",
            };
        },
        methods: {

            addEducation() {
                let form = new FormData();

                form.append('education_year', this.education_year);
                form.append('education_school', this.education_school);
                form.append('education_certificate', this.education_certificate);

                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/addeducation/' + userID, form).then(result => {

                    this.formLoading = false;

                    console.log(result.data)

                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    if (this.status) {
                        // Clear data
                        this.education_year = '';
                        this.education_school = '';
                        this.education_certificate = '';
                    }

                    // this.$router.replace(this.$route.query.redirect || '/dashboard/profile');

                }, error => {
                    console.error(error);
                });
            },

            addJob() {
                let form = new FormData();

                form.append('projecttype_id', this.projecttype_id);
                form.append('title', this.title);
                form.append('projectrole_id', this.projectrole_id);

                form.append('director', this.director);
                form.append('company', this.company);
                form.append('year', this.year);


                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/addjob/' + userID, form).then(result => {

                    console.log(userID);
                    this.formLoading = false;

                    console.log(result.data)

                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    if (this.status) {
                        // Clear data
                        this.projecttype_id = '';
                        this.title = '';
                        this.projectrole_id = '';
                        this.director = '';
                        this.company = '';
                        this.year = '';

                    }

                    // this.$router.replace(this.$route.query.redirect || '/dashboard/profile');

                }, error => {
                    console.error(error);
                });

            }
        },
        mounted() {

            this.loading = true;

            var config = {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            };

            // Get Project Roles
            axios({
                method: "GET",
                "url": 'http://api.cast.i.ng/projectroles',
                config
            }).then(result => {
                this.loading = false;
                this.projectRoles = result;
            }, error => {
                this.loading = false;
                console.log('API CALL FAILED');
                console.error(error);
            });

            // Get Project Types
            axios({
                method: "GET",
                "url": 'http://api.cast.i.ng/projecttypes',
                config
            }).then(result => {
                this.loading = false;
                this.projectTypes = result;
            }, error => {
                this.loading = false;
                console.log('API CALL FAILED');
                console.error(error);
            });

        }
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
</style>