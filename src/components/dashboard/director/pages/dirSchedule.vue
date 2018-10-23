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
                        <tr v-for="(schedule, index) in scheduleData.data.list">
                            <td>{{index}}</td>
                            <td>{{schedule.title}}</td>
                            <td>{{schedule.date}}</td>
                            <td>{{schedule.time}}</td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                                        Action
                                        <span class="caret"></span>
                                    </button>
                                    <div id="pos">
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="http://stage.cast.i.ng/delete/event/4" onclick="return confirm('Are you sure?');">Delete</a>
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
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
    name: 'dirSchedule',
    data() {
        return {
            loading: true,
            scheduleData: "",
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

        this.loading = true;

        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        let userID = JSON.parse(localStorage.getItem('token'));
        // console.log(userID);

        axios({ method: "GET", "url": 'https://api.cast.i.ng/event/schedules/'+userID , config }).then(result => {
            this.loading = false;
            this.scheduleData = result;
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