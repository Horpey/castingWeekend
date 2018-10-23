<template>
    <div>
        <loader v-if="loading" />
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Add Project</b>
                    <router-link class="mdb float-right" v-bind:to="'/director/projects'">View Project</router-link>

                </p>



                <form class="msform mt-2" @submit.prevent="addProject">
                    <div class="add-project-group">
                        <b>Project Title:</b>
                        <input class="mb-2" type="text" placeholder="Project Title" v-model="title" required="">
                        <b>Project type</b>
                        <select class="mb-2" v-model="type_id" required="">
                            <option value="">--Select--</option>
                            <option v-for="projectType in projectTypes.data.list" :value="projectType.id">{{projectType.title}}</option>
                        </select>

                        <b>Project description</b>
                        <textarea class="mb-2" col="10" v-model="description" required=""></textarea>
                        <div class="row">
                            <div class="col-lg-6">
                                <b>Minimum Pay</b>
                                <input class="mb-2" type="number" placeholder="Minimum Pay" v-model="payrange_min"
                                    required="">
                            </div>

                            <div class="col-lg-6">
                                <b>Maximum Pay</b>
                                <input class="mb-2" type="number" placeholder="Maximum Pay" v-model="payrange_max"
                                    required="">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <b>City of audition:</b>
                                <input class="mb-2" type="text" placeholder="City of audition" v-model="project_city"
                                    required="">
                            </div>

                            <div class="col-lg-6">
                                <b>City of shoot:</b>
                                <input class="mb-2" type="text" placeholder="City of shoot" v-model="shoot_city"
                                    required="">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <b>Speculated Date of shoot:</b>
                                <input class="mb-2 inputdatepicker" type="date" placeholder="Speculated Date of shoot"
                                    v-model="shoot_date" required="">
                            </div>
                            <div class="col-lg-6">
                                <b>Date to take down ad:</b>
                                <input class="mb-2 inputdatepicker" type="date" placeholder="Date to take down ad"
                                    v-model="expire_date" required="">
                            </div>
                        </div>

                        <b>How did you hear about us?</b>
                        <textarea class="mb-2" col="10" v-model="hearabout"></textarea>

                        <b>Project Image</b>
                        <input class="" type="file" @change="processFile($event)" accept="image/*">
                    </div>

                    <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                        v-if="error">{{
                        error }}</div>

                    <div class="" style="margin-top: 15px;">
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
</template>

<script>
    import axios from 'axios';
    import Loader from '../template/loader';
    export default {
        name: 'addProject',
        data() {
            return {
                loading: true,
                error: false,
                formLoading: '',
                projectTypes: '',
                token: '',
                title: '',
                type_id: '',
                description: '',
                payrange_min: '',
                payrange_max: '',
                project_city: '',
                shoot_city: '',
                shoot_date: '',
                expire_date: '',
                hearabout: '',
                image: '',
                img: '',
                siteUrl: "http://stage.cast.i.ng/",
            };
        },
        components: {
            loader: Loader,
        },
        mounted() {

            var config = {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            };

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

        },
        methods: {
            processFile(event) {
                event.target.files[0]
                this.img = event.target.files[0];
            },
            addProject() {
                let form = new FormData();

                form.append('title', this.title);
                form.append('type_id', this.type_id);
                form.append('description', this.description);
                form.append('payrange_min', this.payrange_min);
                form.append('payrange_max', this.payrange_max);
                form.append('project_city', this.project_city);
                form.append('shoot_city', this.shoot_city);
                form.append('shoot_date', this.shoot_date);
                form.append('expire_date', this.expire_date);
                form.append('hearabout', this.hearabout);
                form.append('image', this.img);

                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/saveproject/' + userID, form).then(result => {

                    console.log(userID);
                    this.formLoading = false;

                    console.log(result.data)

                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    if (result.data.payment_needed) {

                        let paystackUrl = 'http://stage.cast.i.ng/' + result.data.redirect;

                        console.log(paystackUrl);
                        window.location.href = paystackUrl;

                        // this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                    }

                    if (this.status) {
                        // Clear data
                        this.title = '';
                        this.type_id = '';
                        this.description = '';
                        this.payrange_min = '';
                        this.payrange_max = '';
                        this.project_city = '';
                        this.shoot_city = '';
                        this.shoot_date = '';
                        this.expire_date = '';
                        this.hearabout = '';
                        this.image = '';
                    }

                }, error => {
                    this.formLoading = false;
                    console.error(error);
                    this.error = "Failed to save Project";
                });
            }
        }
    };
</script>

<style>
    .msform input[type='url'],
    .msform input[type='number'],
    .msform input[type='date'] {
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