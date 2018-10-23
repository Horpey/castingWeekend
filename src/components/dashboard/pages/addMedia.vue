<template>
    <div>
        <div class="card m-b-30">
            <div class="card-body">
                <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                            aria-controls="nav-home" aria-selected="true">Add Photo</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                            aria-controls="nav-profile" aria-selected="false">Add Video</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                            aria-controls="nav-contact" aria-selected="false">Add Audio</a>
                    </div>
                </nav>

                <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}</div>
                        <form class="msform mt-2">
                            <div id="room_fileds">

                                <input class="mb-2" type="file" @change="processFile($event)" placeholder="Upload Picture"
                                    accept="image/*" required>

                            </div>
                            <button type="submit" class="btn btn-ppd wd">
                                <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg"
                                    alt="Loader" />
                                <span v-if="!formLoading">Save Photo</span>
                            </button>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}</div>

                        <form class="msform mt-2" @submit.prevent="addVideo">
                            <div id="room_fileds">
                                <b>Title:</b>
                                <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Video Title"
                                        v-model="titleVid"></span>
                                <b>Year:</b>

                                <span class="bmd-form-group"><input class="mb-2" type="number" placeholder="Video Year"
                                        v-model="yearVid"></span>

                                <b>Role:</b>
                                <span class="bmd-form-group is-filled">
                                    <select v-model="projectrole_idVid" class="mb-2" style="margin-top: 8px;" required="">
                                        <option value="">--Select--</option>
                                        <option v-for="projectRole in projectRoles.data.list" :value="projectRole.id">{{projectRole.title}}</option>
                                    </select></span>
                                </span>
                                <b>Add Video URL:</b>
                                <span class="bmd-form-group"><input class="mb-2" type="url" placeholder="Video Url"
                                        v-model="linkVid"></span>
                            </div>
                            <button type="submit" class="btn btn-ppd wd">
                                <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg"
                                    alt="Loader" />
                                <span v-if="!formLoading">Save Audio</span>
                            </button>
                        </form>
                    </div>

                    <!-- Add Audio -->
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{ error }}</div>

                        <form class="msform mt-2" @submit.prevent="addAudio">
                            <div id="room_fileds">
                                <b>Title:</b>
                                <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Audio Title"
                                        v-model="title"></span>
                                <b>Year:</b>

                                <span class="bmd-form-group"><input class="mb-2" type="number" placeholder="Audio Year"
                                        v-model="year"></span>

                                <b>Role:</b>
                                <span class="bmd-form-group is-filled">
                                    <select v-model="projectrole_id" class="mb-2" style="margin-top: 8px;" required="">
                                        <option value="">--Select--</option>
                                        <option v-for="projectRole in projectRoles.data.list" :value="projectRole.id">{{projectRole.title}}</option>
                                    </select></span>
                                </span>
                                <b>Add Souncloud URL:</b>
                                <small>Upload Your audio to soundcloud and get the url</small>
                                <span class="bmd-form-group"><input class="mb-2" type="url" placeholder="Audio Url"
                                        v-model="link"></span>
                            </div>
                            <button type="submit" class="btn btn-ppd wd">
                                <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg"
                                    alt="Loader" />
                                <span v-if="!formLoading">Save Audio</span>
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
        name: 'addMedia',
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
                siteUrl: "http://stage.cast.i.ng/",
            };
        },
        methods: {
            processFile(event) {
                let form = new FormData();

                form.append('image', event.target.files[0]);


                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/addphoto/' + userID, form).then(result => {

                    this.formLoading = false;

                    console.log(result.data)

                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    if (this.status) {
                        // Clear data
                        this.image = '';
                    }

                }, error => {
                    console.error(error);
                });
            },
            addAudio() {
                let form = new FormData();

                form.append('title', this.title);
                form.append('year', this.year);
                form.append('projectrole_id', this.projectrole_id);
                form.append('link', this.link);


                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/addaudio/' + userID, form).then(result => {

                    this.formLoading = false;

                    console.log(result.data)

                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    if (this.status) {
                        // Clear data
                        this.title = '';
                        this.year = '';
                        this.projectrole_id = '';
                        this.link = '';
                    }

                    // this.$router.replace(this.$route.query.redirect || '/dashboard/profile');

                }, error => {
                    console.error(error);
                });
            },
            addVideo() {
                let form = new FormData();

                form.append('title', this.titleVid);
                form.append('year', this.yearVid);
                form.append('projectrole_id', this.projectrole_idVid);
                form.append('link', this.linkVid);


                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/addvideo/' + userID, form).then(result => {

                    this.formLoading = false;

                    console.log(result.data)

                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    if (this.status) {
                        // Clear data
                        this.titleVid = '';
                        this.yearVid = '';
                        this.projectrole_idVid = '';
                        this.linkVid = '';
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

    .msform input[type=url],
    .msform input[type=number] {
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
        box-sizing: border-box;
        color: #2C3E50;
        font-size: 13px;
    }
</style>