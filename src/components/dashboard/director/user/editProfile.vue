<template>
    <div>
        <loader v-if="loading" />
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Edit Profile</b>
                    <router-link class="mdb float-right" v-bind:to="'/director/profile'">View</router-link>
                </p>

                <div class="mt-3">
                    <form class="msform mt-2" @submit.prevent="editProfile">
                        <div class="row">
                            <div class="col-lg-6">
                                <b>First Name:</b>
                                <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="firstname"
                                        placeholder="First Name"></span>
                            </div>
                            <div class="col-lg-6">
                                <b>Last Name:</b>
                                <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="lastname"
                                        placeholder="Last Name"></span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <b>Email:</b>
                                <span class="bmd-form-group is-filled"><input class="mb-2" type="text" disabled=""
                                        v-model="email"></span>
                            </div>

                            <div class="col-lg-6">
                                <b>Phone:</b>
                                <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="phone"
                                        placeholder="Phone Number"></span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <b>Gender:</b>
                                <span class="bmd-form-group is-filled"><select v-model="gender" class="mb-2" style="margin-top: 8px;">
                                        <option value="">Select Gender</option>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select></span>
                            </div>

                            <div class="col-lg-6">
                                <b>Location:</b>
                                <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="address"
                                        placeholder="Location"></span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div id="room_fileds">
                                    <b>Profile Picture:</b>
                                    <input class="mb-2" type="file" @change="processFile($event)" placeholder="Upload Picture"
                                        accept="image/*">
                                </div>
                            </div>
                        </div>

                        <hr>
                        <h3>Company</h3>
                        <div class="row">
                            <div class="col-lg-12">
                                <b>Name:</b>
                                <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="company_name"
                                        placeholder="Company Name"></span>
                            </div>
                            <div class="col-md-12">
                                <b>Description:</b>
                                <span class="bmd-form-group is-filled"><textarea v-model="description" id="input" class=""
                                        rows="3"></textarea></span>
                            </div>
                        </div>

                        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                            v-if="error">{{
                            error }}</div>

                        <button type="submit" class="btn btn-ppd wd">
                            <img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg"
                                alt="Loader" />
                            <span v-if="!formLoading">Save</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Loader from '../template/loader';
    export default {
        name: 'editProfile',
        data() {
            return {
                loading: true,
                profileData: '',
                token: '',
                error: '',
                formLoading: false,
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                gender: '',
                address: '',
                image: '',
                company_name: '',
                description: '',
                img: '',
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
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            };

            let userID = JSON.parse(localStorage.getItem('token'));
            // console.log(userID);

            axios({
                method: 'GET',
                url: 'http://api.cast.i.ng/userdetails/' + userID,
                config
            }).then(
                result => {
                    this.loading = false;
                    this.profileData = result;

                    this.firstname = this.profileData.data.profile.firstname;
                    this.lastname = this.profileData.data.profile.lastname;
                    this.email = this.profileData.data.profile.email;
                    this.phone = this.profileData.data.profile.phone;
                    this.gender = this.profileData.data.profile.gender;
                    this.address = this.profileData.data.profile.address;
                    this.image = this.profileData.data.profile.image;
                    this.company_name = this.profileData.data.profile.company;
                    this.description = this.profileData.data.profile.description;
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
            processFile(event) {
                event.target.files[0]
                this.img = event.target.files[0];
            },
            editProfile() {
                let form = new FormData();
                // console.log(this.img);

                form.append('image', this.img);
                form.append('firstname', this.firstname);
                form.append('lastname', this.lastname);
                form.append('email', this.email);
                form.append('phone', this.phone);
                form.append('gender', this.gender);
                form.append('company_name', this.company_name);
                form.append('address', this.address);
                form.append('description', this.description);

                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/editprofile/' + userID, form).then(result => {

                    this.formLoading = false;

                    // this.$router.replace(this.$route.query.redirect || '/director/profile')

                    console.log(result.data)
                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    this.$router.go(0);

                }, error => {
                    // () => this.registerFailed()
                    console.error(error);
                });
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