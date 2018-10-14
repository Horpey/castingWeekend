<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
        <div class="card-body">
            <p class="cv1">
                <b class="col-ppd">Edit Profile</b>

                <router-link class="mdb float-right" v-bind:to="'/director/profile'">View</router-link>

            </p>

            <div class="mt-3">
                <form class="msform mt-2" method="post" action="" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-lg-6">
                            <b>First Name:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" value="Korede" name="firstname" placeholder="First Name"></span>
                        </div>

                        <div class="col-lg-6">
                            <b>Last Name:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" value="Oluwafemi" name="lastname" placeholder=":Last Name"></span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Email:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" disabled="" value="korede@gmail.com"></span>
                        </div>

                        <div class="col-lg-6">
                            <b>Phone:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" value="8130567241" name="phone"></span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Gender:</b>
                            <span class="bmd-form-group is-filled"><select name="gender" class="mb-2" style="margin-top: 8px;">
                                <option value="">Select Gender</option>
                                <option value="1">Male</option>
                                <option value="0" selected="selected">Female</option>
                            </select></span>
                        </div>

                        <div class="col-lg-6">
                            <b>Location:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" value="4, alfa nda street" name="address" placeholder="Location"></span>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-lg-12">
                            <b>Profile Photo:</b>
                            <input class="mb-2" type="file" name="image">
                        </div>
                    </div>

                    <hr>
                    <h3>Company</h3>
                    <div class="row">
                        <div class="col-lg-12">
                            <b>Name:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" value="Pali" name="company_name" placeholder="Company Name"></span>
                        </div>
                        <div class="col-md-12">
                            <b>Description:</b>
                            <span class="bmd-form-group is-filled"><textarea name="description" id="input" class="" rows="3">Mainframe Film and Television Productions, managed by Tunde Kelani is a film and television productions company which is based in Lagos, Nigeria.</textarea></span>
                        </div>
                    </div>

                    <input class="btn btn-ppd border-0 mt-4" value="Save" type="submit">
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
        };
    },
    components: {
        loader: Loader,
    },
    mounted() {
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