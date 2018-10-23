<template>
    <div>
        <loader v-if="loading" />
        <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{
            error }}</div>
        <div class="cv cv-pad" v-for="(allAudition, index) in allAudData.data.list">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid rounded mb-3" :src="allAudition.image">
                </div>
                <div class="col-md-8">
                    <h3><a href="#" class="col-bb">{{allAudition.name}}</a></h3>
                    <p>
                        <b class="col-ppd">Role Description</b>:
                        <span v-html="allAudition.description"></span>
                    </p>
                    <p v-if="!allAudition.applied">
                        <button v-on:click="applyAudtion(allAudition.id)" class="btn btn-ppd border-0">
                            <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg"
                                alt="Loader" />
                            <span v-if="!formLoading">Apply</span>
                        </button>
                    </p>

                    <p class="mb-4">
                        <b class="col-ppd">Status</b>:
                        <span class="badge badge-success">{{allAudition.status}}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import Loader from '../template/loader';

    export default {
        name: 'allAuditions',
        data() {
            return {
                loading: true,
                allAudData: '',
                token: '',
                formLoading: false,
                error: false,
                siteUrl: 'http://stage.cast.i.ng/',
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
                url: 'http://api.cast.i.ng/auditions/available/' + userID,
                config
            }).then(
                result => {
                    this.loading = false;
                    this.allAudData = result;
                },
                error => {
                    this.loading = false;
                    console.log('API CALL FAILED');
                    console.error(error);
                }
            );
        },
        methods: {
            applyAudtion(auditionID) {
                // confirm('Are you sure?');

                this.formLoading = true;
                var config = {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                };

                this.token = JSON.parse(localStorage.getItem('token'));

                let userID = JSON.parse(localStorage.getItem('token'));

                axios({
                    method: 'GET',
                    url: 'http://api.cast.i.ng/projectrole/apply/' + userID + '/' + auditionID,
                    config,
                }).then(
                    result => {
                        this.formLoading = false;
                        this.loading = false;
                        this.eduData = result;
                        this.error = result.data.status_msg;

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
    .cv-pad {
        padding: 10px 16px !important;
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