<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Event Schedules</b>

                    <a data-toggle="modal" data-target="#fixappointment" class="mdb float-right text-white" style="cursor: pointer;">Add</a>

                </p>

                <table class="table table-striped mb-0">
                    <tbody>
                        <tr>
                            <td>S/N</td>
                            <td><b>Event</b></td>
                            <td><b>Date</b></td>
                            <td><b>Time</b></td>
                            <td><b>Action</b></td>
                        </tr>

                    </tbody>
                    <tbody>

                                                
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
    name: 'dirSchedule',
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