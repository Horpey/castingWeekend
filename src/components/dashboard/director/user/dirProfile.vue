<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Profile</b>

                <router-link class="mdb float-right" v-bind:to="'/director/editprofile'">Edit Profile</router-link>

                </p>
                <div class="mt-3">
                    <div class="mt-2">
                        <table class="table table-striped mb-0">
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Name</b>
                                        <p>{{profileData.data.profile.firstname}} {{profileData.data.profile.lastname}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Gender</b>
                                        <p>{{profileData.data.profile.gender}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Location</b>
                                        <p>{{profileData.data.profile.address}}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="mt-2">
                        <table class="table table-striped mb-0">

                            <tbody>
                                <tr>
                                    <td>
                                        <b>Company Name</b>
                                        <p>{{profileData.data.profile.company}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Description</b>
                                        <p>{{profileData.data.profile.description}}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-3">
                    <p class="cv1">
                        <b class="col-ppd">FILMOGRAPHY</b>
                        <button type="button" data-toggle="modal" data-target="#addfilmo" class="mdb float-right">Add</button>
                    </p>
                    <table class="table table-striped mb-0">
                        <tbody><tr>
                            <td>
                                <b>Year</b>
                            </td>
                            <td>
                                <b>Film</b>
                            </td>
                            <td>
                                <b>Manage</b>
                            </td>

                        </tr>
                        </tbody><tbody>
                             <tr v-for="film in profileData.data.filmography">
                                <td><i class="fa fa-calendar"></i> 
                                    {{film.year}} 
                                </td>
                                <td>{{film.name}}</td>
                                <td>
                                    <a href="#" class="btn btn-outline-danger btn-sm" onclick="return confirm('Are you sure?');"><i class="fa fa-bin"> Delete</i></a><i class="fa fa-bin">
                                </i></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
    name: 'dirProfile',
    data() {
        return {
            loading: true,
            profileData: "",
            token: '',
            photoData: '',
            videoData: '',
            audioData: '',
            siteUrl: "http://stage.cast.i.ng/",
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
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        let userID = JSON.parse(localStorage.getItem('token'));
        // console.log(userID);

        axios({ method: "GET", "url": 'http://api.cast.i.ng/userdetails/'+userID , config }).then(result => {
            this.loading = false;
            this.profileData = result;
        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });


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
};
</script>

<style>
</style>