<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">

                <div class=" m-b-30">
                    <div class="card-body">
                        <div class="row">
                            <div class="cv" style="width: 100%;">
                                <div class="col-md-12">
                                    <h2>{{applicantData.data.projectrole.role_name}}</h2>
                                    <p>
                                        <b class="col-ppd">Description</b>: {{applicantData.data.projectrole.description}}</p>
                                    <p>
                                        <b class="col-ppd">Number of Applicants</b>: {{applicantData.data.projectrole.applicants}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="cv1 mt-2">
                                <form class="msform mt-4" method="post" action="">
                                    <b>filter:</b>
                                    <span class="bmd-form-group is-filled"><select class="col-md-3" name="rating_star">
                                        <option>Select One</option>
                                        <option value="1">One Star</option>
                                        <option value="2">Two Star</option>
                                        <option value="3">Three Star</option>
                                        <option value="4">Four Star</option>
                                        <option value="5">Five Star</option>
                                    </select></span>
                                    <span class="bmd-form-group"><input name="cpass" type="text" class="col-md-3 float-right" placeholder="Search"></span>
                                </form>
                            </div>
                            <!-- Table  -->
                            <div class="mt-4" style="width: 100%;">
                                <table class="table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input all-check" name="" id="" value="checkedValue">
                                                        <b> All</b>
                                                    </label>
                                                </div>
                                            </td>
                                            <td><b>Applicant Name</b></td>
                                            <td><b>Applicant Rating</b></td>
                                            <td><b>Status</b> </td>
                                            <!-- <td><b>Actor Upload</b> </td> -->
                                            <td>
                                                <b>Action</b>
                                            </td>
                                        </tr>

                                    </tbody>
                                    <tbody>
                                            <tr v-for="applicant in applicantData.data.list">
                                                <td>
                                                <div class="form-check">
                                                    <label class="form-check-label mb-3">
                                                        <input type="checkbox" class="form-check-input all-checked" name="" id="" value="checkedValue">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                            <a>{{applicant.name}}</a>
                                            </td>
                                            <td>
                                                <span style="cursor: default;"><div class="rating-symbol" style="display: inline-block; position: relative;"><div class="rating-symbol-background mdi mdi-star-outline font-20 text-muted" style="visibility: hidden;"></div><div class="rating-symbol-foreground" style="display: inline-block; position: absolute; overflow: hidden; left: 0px; right: 0px; width: auto;"><span class="mdi mdi-star font-20 text-warning"></span></div></div><div class="rating-symbol" style="display: inline-block; position: relative;"><div class="rating-symbol-background mdi mdi-star-outline font-20 text-muted" style="visibility: hidden;"></div><div class="rating-symbol-foreground" style="display: inline-block; position: absolute; overflow: hidden; left: 0px; right: 0px; width: auto;"><span class="mdi mdi-star font-20 text-warning"></span></div></div><div class="rating-symbol" style="display: inline-block; position: relative;"><div class="rating-symbol-background mdi mdi-star-outline font-20 text-muted" style="visibility: hidden;"></div><div class="rating-symbol-foreground" style="display: inline-block; position: absolute; overflow: hidden; left: 0px; right: 0px; width: auto;"><span class="mdi mdi-star font-20 text-warning"></span></div></div><div class="rating-symbol" style="display: inline-block; position: relative;"><div class="rating-symbol-background mdi mdi-star-outline font-20 text-muted" style="visibility: hidden;"></div><div class="rating-symbol-foreground" style="display: inline-block; position: absolute; overflow: hidden; left: 0px; right: 0px; width: auto;"><span class="mdi mdi-star font-20 text-warning"></span></div></div><div class="rating-symbol" style="display: inline-block; position: relative;"><div class="rating-symbol-background mdi mdi-star-outline font-20 text-muted" style="visibility: visible;"></div><div class="rating-symbol-foreground" style="display: inline-block; position: absolute; overflow: hidden; left: 0px; right: 0px; width: 0%;"><span></span></div></div></span><input type="hidden" class="rating" data-filled="mdi mdi-star font-20 text-warning" data-empty="mdi mdi-star-outline font-20 text-muted" data-readonly="" :value="applicant.rating"><span class="badge badge-info">{{applicant.rating}}</span>
                                            </td>
                                            <td>
                                                <span class="badge badge-success">{{applicant.status}}</span></td>
                                            
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                                                        Action<span class="badge badge-danger noti-icon-badge">1</span><span class="caret"></span>
                                                    </button>
                                                    <div id="pos">
                                                        <ul class="dropdown-menu">
                                                            <li>
                                                                <a style="font-weight: 700; font-size: 16px" class="dropdown-item" href="http://stage.cast.i.ng/projectrole/viewupload/3">View Upload</a>
                                                            </li>
                                                            <li>
                                                                <a class="dropdown-item" href="http://stage.cast.i.ng/request/video/12/3">Request for video upload</a>
                                                            </li>
                                                            <li>
                                                                <a class="dropdown-item" href="http://stage.cast.i.ng/request/audio/12/3">Request for audio upload</a>
                                                            </li>
                                                            <li>
                                                                <a class="dropdown-item" onclick="return confirm('Are you sure');" href="http://stage.cast.i.ng/audition/decline/12/3">Decline</a>
                                                            </li>
                                                            <li>
                                                                <a onclick="fix_appointment(12, 3)" class="dropdown-item" href="javascript:void(0)">Fix Appointment</a>
                                                            </li>
                                                            <li>
                                                                <a class="dropdown-item" onclick="return confirm('Are you sure');" href="http://stage.cast.i.ng/audition/accept/12/3">
                                                                Accept Actor For Role</a>
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
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
    name: 'applicants',
    data() {
        return {
            loading: true,
            applicantData: "",
            token: '',
            applicantID: '',
            siteUrl: "http://stage.cast.i.ng/",
        };
    },
    components: {
        loader: Loader,
    },
    mounted() {

        let applicantID = this.$route.params.id ;

        this.detailID = applicantID;

        this.token = JSON.parse(localStorage.getItem('token'));
        console.log(this.token);


        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        let userID = JSON.parse(localStorage.getItem('token'));

        axios({ method: "GET", "url": 'https://api.cast.i.ng/projectrole/applicants/'+applicantID , config }).then(result => {
            
            this.applicantData = result;
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