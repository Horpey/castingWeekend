<template>
    <div>
        <loader v-if="loading" />
        <div class="card m-b-30">
            <div class="card-body">
                <div>
                    <p class="cv1">
                        <b class="col-ppd">Notifications</b>
                    </p>
                    <div class="mt-2">
                        <table class="table table-striped mb-0">
                            <tbody>
                                <tr>
                                    <td><b>Project</b></td>
                                    <td><b>Role</b></td>
                                    <td><b>Type</b></td>
                                    <td><b>Message</b></td>
                                    <!-- <td><b>Action</b></td> -->
                                </tr>

                            </tbody>
                            <tbody>
                                <tr v-for="notification in notifications.data.list">
                                    <td>{{notification.project}}</td>
                                    <td>{{notification.role}}</td>
                                    <td><b>{{notification.type}}</b> </td>
                                    <td>{{notification.message}}</td>
                                </tr>
                            </tbody>
                        </table>
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
        name: 'notifications',
        data() {
            return {
                loading: true,
                dashData: '',
                notifications: '',
                token: '',
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
                url: 'http://api.cast.i.ng/user/notification/list/' + userID + '?pt=all',
                config
            }).then(
                result => {
                    this.loading = false;
                    this.notifications = result;
                },
                error => {
                    console.log('API CALL FAILED');
                    console.error(error);
                }
            );
        },
    };
</script>

<style>
    .img-full {
        width: 100%;
    }

    .cv-pad {
        padding: 10px 16px !important;
    }
</style>