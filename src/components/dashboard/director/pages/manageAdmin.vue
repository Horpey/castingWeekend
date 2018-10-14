<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Manage Admins</b>

                    <button type="button" data-toggle="modal" data-target="#addrole" class="mdb float-right">Add</button>
                </p>    
                <div class="mt-2">
                        <table class="table table-striped mb-0">
                            <tbody><tr>
                                <td>
                                    <b>Name</b>
                                </td>
                                <td>
                                    <b>Role</b>
                                </td>
                                <td>
                                    <b>Email Address</b>
                                </td>
                                <td>
                                    <b>Phone Number</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>

                            </tbody><tbody>
                                <tr>
                                    <td>Tobi</td>
                                    <td>Editor</td>
                                    <td>tobi@casting.ng</td>
                                    <td>+2349199338292 </td>
                                    <td>
                                        <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                        <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
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
    name: 'manageAdmin',
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