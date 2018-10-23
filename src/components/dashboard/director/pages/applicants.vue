<template>
    <div>
        <loader v-if="loading" />
        <div class="card m-b-30">
            <div class="card-body">

                <div class=" m-b-30">
                    <div class="card-body">
                        <div class="row">
                            <div class="cv" style="width: 100%;">
                                <div class="col-md-12">
                                    <h2>{{applicantData.data.projectrole.role_name}}</h2>
                                    <p>
                                        <b class="col-ppd">Description</b>:
                                        {{applicantData.data.projectrole.description}}</p>
                                    <p>
                                        <b class="col-ppd">Number of Applicants</b>:
                                        {{applicantData.data.projectrole.applicants}}</p>
                                </div>
                            </div>
                        </div>
                        <router-link class="dropdown-item view-upload" v-bind:to="'/project/createAudition/'">Create Audition
                                                                    </router-link>
                        <div class="row">
                            <div class="applicantFilter">
                                <form class="msform mt-4" @submit.prevent="queryApplicant">
                                    <div class="row">
                                        <!-- <div class="col-md-3">
                                            <b>Filter by:</b><br>
                                            <span class="bmd-form-group is-filled"><select v-on:change="filterChange"
                                                    v-model="filterSelect">
                                                    <option>Fliter by</option>
                                                    <option value="rate">Rating</option>
                                                    <option value="age">Age</option>
                                                    <option value="status">Status</option>
                                                    <option value="state">State</option>
                                                </select></span>
                                        </div> -->
                                        <div class="col-md-3">
                                            <div class="filterRate">
                                                <b>Rating:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_star" v-on:change="filterStars">
                                                        <option>Select One</option>
                                                        <option value="1">One Star</option>
                                                        <option value="2">Two Star</option>
                                                        <option value="3">Three Star</option>
                                                        <option value="4">Four Star</option>
                                                        <option value="5">Five Star</option>
                                                    </select></span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="filterAge">
                                                <b>Age:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_age" v-on:change="filterAge">
                                                        <option>Select One</option>
                                                        <option value="1">12 - 15</option>
                                                        <option value="2">15 - 20</option>
                                                        <option value="2">20 - 25</option>
                                                    </select></span>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="filterState">
                                                <b>State:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_state" v-on:change="filterState">
                                                        <option>Select One</option>
                                                        <option value="1">Lagos</option>
                                                        <option value="2">Oyo</option>
                                                        <option value="2">Abia</option>
                                                    </select></span>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="filterLanguage">
                                                <b>Language:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_language" v-on:change="filterLanguage">
                                                        <option>Select One</option>
                                                        <option value="1">English</option>
                                                        <option value="2">Igbo</option>
                                                        <option value="2">Hausa</option>
                                                    </select></span>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="filterLanguage">
                                                <b>Complexion:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_complexion" v-on:change="filterComplexion">
                                                        <option>Select One</option>
                                                        <option value="1">Dark Brown</option>
                                                        <option value="2">Olive</option>
                                                        <option value="2">Light</option>
                                                    </select></span>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="filterLanguage">
                                                <button class="btn btn-primary btn-filter" type="submit">
                                                    <img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg"
                                                        alt="Loader" />
                                                        <span class="fa fa-filter"></span> 
                                                    <span v-if="!formLoading">Filter Applicants</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <!-- Table  -->
                            <div class="mt-4" style="width: 100%;">
                                <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{ error }}</div>

                                <table class="table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input all-check" name=""
                                                            id="" value="checkedValue">
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
                                                        <input type="checkbox" class="form-check-input all-checked"
                                                            name="" id="" value="checkedValue">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <router-link v-bind:to="'/project/applicantProfile/'+applicant.id">{{applicant.name}}
                                                                    </router-link>
                                            </td>
                                            <td>
                                                <VueStars
                                                    name="demo"
                                                    :max="5"
                                                    :readonly="true"
                                                    :value="applicant.rating"
                                                />
                                                {{applicant.rating}}
                                            </td>
                                            <td>
                                                <span class="badge badge-success">{{applicant.status}}</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        data-toggle="dropdown">
                                                        Action<span class="badge badge-danger noti-icon-badge">1</span><span
                                                            class="caret"></span>
                                                    </button>
                                                    <div id="pos">
                                                        <ul class="dropdown-menu">
                                                            <li>
                                                                    <router-link class="dropdown-item view-upload" v-bind:to="'/project/viewUpload/'+applicant.projectrole_user_id">View Upload
                                                                    </router-link>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="requestVideo(applicant.projectrole_user_id)" class="dropdown-item">Request
                                                                    for video upload</a>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="requestAudio(applicant.projectrole_user_id)" class="dropdown-item">Request
                                                                    for audio upload</a>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="decline(applicant.projectrole_user_id)" class="dropdown-item">Decline</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            

                            <!-- Good Table -->
                            <div class="" style="margin-top: 20px;">
                                <vue-good-table style="width: 100%" :columns="columns" :rows="rows" :fixed-header="true"
                                    @on-row-click="onRowClick" @on-select-all="onSelectAll" @on-selected-rows-change="selectionChanged"
                                    :search-options="{
                                        enabled: true,
                                        placeholder: 'Search for Applicants',
                                      }"
                                    :pagination-options="{
                                        enabled: true,
                                        mode: 'records',
                                        perPage: 5,
                                        position: 'bottom',
                                        perPageDropdown: [3, 7, 9],
                                        dropdownAllowAll: false,
                                        setCurrentPage: 1,
                                        nextLabel: 'next',
                                        prevLabel: 'prev',
                                        rowsPerPageLabel: 'Rows per page',
                                        ofLabel: 'of',
                                        pageLabel: 'page', // for 'pages' mode
                                        allLabel: 'All',
                                      }"
                                    :selectOptions="{
                                        enabled: true,
                                        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                                        selectionInfoClass: 'custom-class',
                                        selectionText: 'rows selected',
                                        clearSelectionText: 'clear',
                                      }">

                                    <div slot="selected-row-actions">
                                        <button class="table-action">Action 1</button>
                                    </div>

                                </vue-good-table>
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
    import VueStars from 'vue-stars';
    export default {
        name: 'applicants',
        data() {
            return {
                formLoading: false,
                loading: true,
                applicantData: '',
                token: '',
                roleID: '',
                filterSelect: '',
                showStar: false,
                showRating: false,
                showStatus: false,
                showState: false,
                showAge: false,
                rating_star: '',
                rating_complexion: '',
                error: '',
                status: '',
                requestData: '',
                rating_age: '',
                rating_language: '',
                rating_state: '',
                rating_age: '',

                siteUrl: 'http://stage.cast.i.ng/',
                columns: [{
                        label: 'id',
                        field: 'id',
                        hidden: true,
                    },
                    {
                        label: 'Applicant Name',
                        field: 'applicantName',
                    },
                    {
                        label: 'Rating',
                        field: 'rating',
                        type: 'number',
                    },
                    {
                        label: 'Status',
                        field: 'status',
                    },
                    {
                        label: 'Action',
                        field: 'action',
                        html: true,
                    },
                ],
                rows: [{
                        id: 1,
                        applicantName: 'John',
                        rating: 20,
                        status: 'Approved',
                        action: '<button class="table-action">Action</button>',
                    },
                    {
                        id: 2,
                        applicantName: 'Jane',
                        rating: 24,
                        status: 'Shortlisted',
                        action: '<button class="table-action">Action</button>',
                    },
                    {
                        id: 3,
                        applicantName: 'Susan',
                        rating: 16,
                        status: 'Declined',
                        action: '<button class="table-action">Action</button>',
                    },
                    {
                        id: 4,
                        applicantName: 'Chris',
                        rating: 55,
                        status: 'Pending',
                        action: '<button class="table-action">Action</button>',
                    },
                    {
                        id: 5,
                        applicantName: 'Dan',
                        rating: 40,
                        status: 'Shortlisted',
                        action: '<button class="table-action">Action</button>',
                    },
                    {
                        id: 6,
                        applicantName: 'John',
                        rating: 20,
                        status: 'Approved',
                        action: '<button class="table-action">Action</button>',
                    },
                ],
            };
        },
        components: {
            loader: Loader,
            VueStars: VueStars,
        },
        mounted() {
            let roleID = this.$route.params.id;

            this.detailID = roleID;

            this.token = JSON.parse(localStorage.getItem('token'));
            console.log(this.token);

            var config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            };

            let userID = JSON.parse(localStorage.getItem('token'));

            axios({
                method: 'GET',
                url: 'https://api.cast.i.ng/projectrole/applicants/' + roleID,
                config,
            }).then(
                result => {
                    this.applicantData = result;
                },
                error => {
                    console.log('API CALL FAILED');
                    console.error(error);
                }
            );

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
            requestVideo(requestID){
                var config = {
                    headers: {'Access-Control-Allow-Origin': '*'}
                };

                let userID = JSON.parse(localStorage.getItem('token'));

                axios({ method: "GET", "url": 'http://api.cast.i.ng/request/video/'+ userID + '/' +requestID , config }).then(result => {
                    this.loading = false;
                    this.requestData = result;
                    this.error = result.data.status_msg;
                    this.status = result.data.status;
                }, error => {
                    this.loading = false;
                    console.log('API CALL FAILED');
                    this.error = 'Request Failed';
                    this.status = false;
                    console.error(error);
                });  
            },
            requestAudio(requestID){
                var config = {
                    headers: {'Access-Control-Allow-Origin': '*'}
                };

                let userID = JSON.parse(localStorage.getItem('token'));

                axios({ method: "GET", "url": 'http://api.cast.i.ng/request/audio/'+ userID + '/' +requestID , config }).then(result => {
                    this.loading = false;
                    this.requestData = result;
                    this.error = result.data.status_msg;
                    this.status = result.data.status;
                }, error => {
                    this.loading = false;
                    console.log('API CALL FAILED');
                    this.error = 'Request Failed';
                    this.status = false;
                    console.error(error);
                });  
            },
            decline(requestID){
                var config = {
                    headers: {'Access-Control-Allow-Origin': '*'}
                };

                let userID = JSON.parse(localStorage.getItem('token'));

                axios({ method: "GET", "url": 'http://api.cast.i.ng/audition/decline/'+ userID + '/' +requestID , config }).then(result => {
                    this.loading = false;
                    this.requestData = result;
                    this.error = result.data.status_msg;
                    this.status = result.data.status;
                }, error => {
                    this.loading = false;
                    console.log('API CALL FAILED');
                    this.error = 'Request Failed';
                    this.status = false;
                    console.error(error);
                });  
            },
            onRowClick(params) {
                console.log(params.row);
                // params.row - row object
                // params.pageIndex - index of this row on the current page.
                // params.selected - if selection is enabled this argument
                // indicates selected or not
                // params.event - click event
            },
            onSelectAll(params) {
                console.log(params.selected);
                // params.selected - whether the select-all checkbox is checked or unchecked
                // params.selectedRows - all rows that are selected (this page)
            },
            selectionChanged(params) {
                // params.selectedRows - all rows that are selected (this page)
            },
            queryApplicant(){
                let form = new FormData();
                // form.append('firstname', this.firstname);
                // form.append('lastname', this.lastname);
                // form.append('email', this.email);
                // form.append('phone', this.phone);

                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

                axios.post(API_URL + '/director/addadmin/' + userID, form).then(
                    result => {
                        this.formLoading = false;

                        console.log(result.data);

                        this.error = result.data.status_msg;
                        this.status = result.data.status;
                    },
                    error => {
                        console.log('API CALL FAILED');
                        console.error(error);
                    }
                );
            },
            filterChange() {
                if (this.filterSelect == "rate") {
                    this.showRating = true;
                    this.showAge = false;
                    this.showState = false;
                    this.showStatus = false;
                } else if (this.filterSelect == "age") {
                    this.showRating = false;
                    this.showAge = true;
                    this.showState = false;
                    this.showStatus = false;
                } else if (this.filterSelect == "status") {
                    this.showRating = false;
                    this.showAge = false;
                    this.showState = false;
                    this.showStatus = true;
                } else if (this.filterSelect == "state") {
                    this.showRating = false;
                    this.showAge = false;
                    this.showState = true;
                    this.showStatus = false;
                } else {
                    this.showRating = false;
                    this.showAge = false;
                    this.showState = false;
                    this.showStatus = false;
                }
                console.log(this.filterSelect)
            },
            filterAge(){
                console.log(this.rating_age);
            },
            filterStars(){
                console.log(this.rating_star);
            },
            filterState(){
                console.log(this.rating_state);
            },
            filterLanguage(){
                console.log(this.rating_language);
            },
            filterComplexion(){
                console.log(this.rating_complexion);
            }
        },
    };
</script>

<style>
    .table-action {
        font-size: 12px;
        color: white;
        border: 0px;
        background-color: #7b7bde;
        cursor: pointer;
    }

    .applicantFilter {
        padding: 0px 26px;
        background-color: #f3f4f7;
        width: 100%;
        margin-top: 20px;
        border: 1px solid gainsboro;
    }

    .vgt-wrap {
        width: 681px !important;
    }
    .view-upload, .view-upload:hover{
        background: #e7077d;
        color: white;
    }
    .dropdown-item{
        cursor: pointer;
    }
    .form-loader{
    width: 22px;
}
.success{
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.danger{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
.btn-filter{
    margin-top: 16px;
    background-color: #e7077d!important;
    border-color: #e7077d!important;
}
.form-loader {
	width: 22px;
}
</style>