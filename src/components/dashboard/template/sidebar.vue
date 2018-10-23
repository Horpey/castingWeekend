<template>
    <div>
        <div class="card m-b-30">

            <div class="card-body">
                <div class="row">
                    <div class="col-md-5">
                        <div class="dp" :style="{'background': ' url('+ bioData.data.profile.image + ')' }">
                            <!-- <img class="w-full float-left mr-4 rounded mb-3" :src="bioData.data.profile.image" /> -->
                            <router-link v-bind:to="'/dashboard/editpicture'" class="edit-p">
                                <span class=" fa fa-pencil"></span>
                            </router-link>

                        </div>
                    </div>
                    <div class="col-md-7">
                        <h4 class="mt-0 header-title">{{bioData.data.profile.firstname}}
                            {{bioData.data.profile.lastname}}</h4>
                        <p class="text-muted font-14">
                            {{bioData.data.profile.description}}<br>
                            <div class="pt-2">
                                <router-link class="btn btn-ppd btn-sm" v-bind:to="'/dashboard/editProfile'">Edit</router-link>
                                <router-link class="btn btn-blu btn-sm" v-bind:to="'/dashboard/profile'">View</router-link>
                            </div>
                        </p>
                    </div>
                </div>




                <div class="bline"></div>
                <!-- <p>Your profile <b>50%</b> complete</p> -->
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div class="bline mt-3"></div>

                <!-- <attributes/> -->

                <div class="profile-comp">
                    <h5 class="col-ppd">Profile</h5>
                    <p style="display: inline-block;">
                        <i class="fa fa-user col-pink mr-2"></i>
                        <a data-toggle="modal" data-target="#addeducation" style="cursor: pointer;">Add Education</a>
                        <a data-toggle="modal" data-target="#addjob" style="cursor: pointer;">| Add Job </a>
                    </p>
                    <div class="bline"></div>
                    <p style="display: inline-block;">
                        <i class="fa fa-user col-pink mr-2"></i> Add
                        <router-link v-bind:to="'/dashboard/addMedia'">Photo | Video | Audio</router-link>
                    </p>
                </div>

            </div>
        </div>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">PHOTO GALLERY</b>
                    <router-link class="mdb float-right" v-bind:to="'/dashboard/photo'">View All</router-link>
                </p>

                <div class="row no-gutters mt-2">
                    <div class="col-md-4 p-1" v-for="photo in photoData.data.list">
                        <img class="rounded mx-auto d-block img-fluid" alt="200x200" :src="siteUrl + photo.image"
                            data-holder-rendered="true">
                    </div>

                </div>
            </div>
        </div>

        <!-- Modals -->
        <Modal />

    </div>
</template>

<script>
    import Modal from './Modal';
    import axios from 'axios';
    import Loader from '../template/loader';
    import Attributes from './Attributes';

    export default {
        name: 'sidebar',
        components: {
            Modal: Modal,
            Attributes: Attributes,
        },
        data() {
            return {
                loading: true,
                photoData: '',
                bioData: '',
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
                    'Access-Control-Allow-Origin': '*'
                },
            };

            let userID = JSON.parse(localStorage.getItem('token'));
            // console.log(userID);

            axios({
                method: 'GET',
                url: 'http://api.cast.i.ng/myphoto/' + userID + '?limit=3',
                config
            }).then(
                result => {
                    this.loading = false;
                    this.photoData = result;
                },
                error => {
                    this.loading = false;
                    console.log('API CALL FAILED');
                    console.error(error);
                }
            );



            // User Details
            axios({
                method: 'GET',
                url: 'http://api.cast.i.ng/userdetails/' + userID,
                config
            }).then(
                result => {
                    this.loading = false;
                    this.bioData = result;
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