<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <h3>Project Roles
                    <router-link class="mdb role-add float-right" v-bind:to="'/project/addRole'">Add Role</router-link>

                </h3>
                <hr>
                <div class=" m-b-30">
                    <div class="">
                        <div class="row">

                            <div class="cv2 mt-2" v-for="role in detailsData.data.list">
                                <div class="col-md-12 mt-2">
                                    <h2>
                                        {{role.role_name}}
                                    </h2>
                                    <p>
                                        <b class="col-ppd">Description</b>: {{role.description}}</p>
                                    <p>
                                        <b class="col-ppd">Applicant</b>: {{role.applicants}}</p>
                                    <p>

                                        <router-link class="btn btn-primary btn-sm border-0" v-bind:to="'/project/editRole/'+role.id">Edit Role</router-link>

                                        <router-link class="btn btn-ppd btn-sm border-0" v-bind:to="'/project/applicants/'+role.id">View Applicants</router-link>

                                    </p>
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
    name: 'details',
    data() {
        return {
            loading: true,
            detailsData: "",
            token: '',
            detailID: '',
            siteUrl: "http://stage.cast.i.ng/",
        };
    },
    components: {
        loader: Loader,
    },
    mounted() {

        let projectID = this.$route.params.id ;

        this.detailID = projectID;

        this.token = JSON.parse(localStorage.getItem('token'));
        console.log(this.token);


        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        let userID = JSON.parse(localStorage.getItem('token'));

        axios({ method: "GET", "url": 'https://api.cast.i.ng/director/projectroles/'+projectID , config }).then(result => {
            
            this.detailsData = result;
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
};
</script>

<style>
</style>