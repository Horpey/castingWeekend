<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Recent Projects</b>

                <router-link class="mdb float-right" v-bind:to="'/director/addProject'">Add Project</router-link>
                </p>



                <div class="cv" v-for="recent in recentProject.data.list">
                    <div class="col-md-12 mt-2">
                        <div>
                           <div class="row">
                               <div class="col-md-4" style="overflow-y: hidden;">
                                    <img class="wdd1 float-left mr-4 rounded" :src="recent.image">
                                </div>
                                <div class="col-md-8">
                                     <h2>
                                        <router-link class="col-bb" v-bind:to="'/project/details/'+recent.id">{{recent.title}}</router-link>

                                        <div class="dropdown">
                                            <button class="float-right btn btn-ppd btn-sm dropdown-toggle" type="button" data-toggle="dropdown" style="bottom: 40px;">
                                                Action
                                                <span class="caret"></span>
                                            </button>
                                            <div id="pos">
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link class="dropdown-item" v-bind:to="'/project/edit/'+recent.id">Edit</router-link>
                                                    </li>
                                                    <li>

                                                        <router-link class="dropdown-item" v-bind:to="'/project/manageRole/'+recent.id">Manage
                                                            Roles</router-link>
                                                    </li>
                                                    <li>
                                                        <a style="cursor: pointer;" class="dropdown-item" v-on:click="deleteProject(recent.id)">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </h2>

                                    <p><b class="col-ppd">Description</b>: {{recent.description}}</p>
                                    <p><b class="col-ppd">Total Applicants</b>: {{recent.applicants}}</p>
                                    <p><b class="col-ppd">Total Roles</b>: {{recent.roles_created}}</p>
                                </div>
                           </div> 
                        </div>
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
    name: 'dirProjects',
    data() {
        return {
            loading: true,
            recentProject: "",
            qualifiedData: "",
            token: '',
            siteUrl: "http://stage.cast.i.ng/",
        };
    },
    components: {
        loader: Loader,
    },
    mounted() {

        this.token = JSON.parse(localStorage.getItem('token'));
        console.log(this.token);


        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        let userID = JSON.parse(localStorage.getItem('token'));

        axios({ method: "GET", "url": 'https://api.cast.i.ng/director/recentproject/'+userID, config }).then(result => {
            
            this.recentProject = result;
        }, error => {
            
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
    methods: {
            deleteProject(projectID) {
                // confirm('Are you sure?');
                var config = {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                };

                axios({
                    method: 'GET',
                    url: 'http://api.cast.i.ng/delete/project/' + projectID,
                    config
                }).then(
                    result => {
                        this.loading = false;
                        this.deleteData = result;
                        this.error = result.data.status_msg;

                        location.reload();

                        // this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                    },
                    error => {
                        this.loading = false;
                        console.log('API CALL FAILED');
                        // this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                        console.error(error);
                    }
                );
            },
        },
};
</script>

<style>
</style>