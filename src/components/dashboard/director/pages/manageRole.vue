<template>
    <div>
        <loader v-if="loading" />
        <div class="card m-b-30">
            <div class="card-body">
                <h2>{{detailsData.data.project_title}}

                    <router-link class="mdb role-add float-right" v-bind:to="'/project/addRole/'+detailID">Add
                        Role</router-link>

                </h2>
                <hr>
                <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{
                    error }}</div>
                <div class="mt-4" style="width: 100%;">
                    <table class="table table-striped mb-0">
                        <tbody>
                            <tr>
                                <td>#</td>
                                <td><b>Role Name</b></td>
                                <td><b>Gender</b></td>
                                <td><b>Age Range</b></td>
                                <td><b>Complexion</b></td>
                                <td><b>Type</b></td>
                                <td><b>Action</b></td>
                            </tr>

                        </tbody>
                        <tbody>
                            <tr v-for="(role, index) in detailsData.data.list">
                                <td>
                                    <div class="form-check">
                                        <label class="form-check-label mb-3">
                                            {{index + 1}}</label>
                                    </div>
                                </td>
                                <td>{{role.role_name}}</td>
                                <td>{{role.gender}}</td>
                                <td>{{role.age_range}}</td>
                                <td>{{role.complexion}}</td>
                                <td>{{role.type}}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                                            aria-expanded="false">
                                            Action
                                            <span class="caret"></span>
                                            <div class="ripple-container"></div>
                                        </button>
                                        <div id="pos">
                                            <ul class="dropdown-menu" x-placement="bottom-start" style="position: absolute; top: 36px; left: 0px; will-change: top, left;">
                                                <li>
                                                    <router-link class="dropdown-item" v-bind:to="'/project/editRole/'+role.id">Edit
                                                        Role</router-link>
                                                </li>
                                                <li>
                                                    <router-link class="dropdown-item" v-bind:to="'/project/applicants/'+role.id">Applicants</router-link>
                                                </li>
                                                <li>
                                                    <a style="cursor: pointer" v-on:click="deleteRole(role.id)" class="dropdown-item">Delete
                                                        Role</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
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
        name: 'manageRole',
        data() {
            return {
                loading: true,
                editRoleData: "",
                token: '',
                detailsData: '',
                error: '',
                siteUrl: "http://stage.cast.i.ng/",
            };
        },
        components: {
            loader: Loader,
        },
        mounted() {
            let projectID = this.$route.params.id;

            this.detailID = projectID;

            this.token = JSON.parse(localStorage.getItem('token'));
            console.log(this.token);


            var config = {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            };

            let userID = JSON.parse(localStorage.getItem('token'));

            axios({
                method: "GET",
                "url": 'https://api.cast.i.ng/director/projectroles/' + projectID,
                config
            }).then(result => {

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
        methods: {
            deleteRole(roleID) {
                var config = {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                };

                axios({
                    method: 'GET',
                    url: 'http://api.cast.i.ng/delete/projectrole/' + roleID,
                    config
                }).then(
                    result => {
                        this.loading = false;
                        this.filmData = result;
                        this.error = result.data.status_msg;
                        this.$router.go(0);
                    },
                    error => {
                        this.loading = false;
                        console.log('API CALL FAILED');
                        console.error(error);
                    }
                );
            }
        }
    };
</script>

<style>
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