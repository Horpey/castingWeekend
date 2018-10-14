<template>
    <div>
        <loader v-if="loading"/>
        
        <div class="card m-b-30">
            <div class="card-body">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <div class="row">
                        <ol class="carousel-indicators">
                            <li v-for="(qualified, index) in qualifiedData.data.list" :class="{ 'active': index === 0 }" data-target="#carouselExampleIndicators" :data-slide-to="index"></li>
                        </ol>
                    </div>


                    <div class="carousel-inner mb-3" role="listbox">
                        <div class="carousel-item" v-for="(qualified, index) in qualifiedData.data.list" :class="{ 'active': index === 0 }" >
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="slide-bg" :style="{'background': 'url('+ qualified.image + ')'}"></div>
                                </div>
                                <div class="col-md-8">
                                    <a href="#" class="col-ppd">
                                        <h3>{{qualified.name}}</h3>
                                    </a>
                                    <p class="text-limit">
                                        <span class="text-limit" v-html="qualified.description"></span>
                                    </p>
                                    <!-- <a class="text-color text-bold" href="#">Read More >></a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Applied Roles</b>
                     <router-link class="mdb float-right" v-bind:to="'/dashboard/auditions'">View All</router-link>
                </p>
                <div class="mt-2">
                    <div class="cv cv-pad" v-for="applied in dashData.data.list">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="img-full float-left mr-4 rounded mb-3 img-responsive" :src="applied.image"/>
                            </div>
                            <div class="col-md-8">
                                <h3><a href="#" class="col-bb">{{applied.name}}</a>
                                    <div class="dropdown float-right">
                                      <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                            <i class="ti-bell noti-icon"></i>
                                            <span class="badge badge-danger noti-icon-badge">{{applied.notification_count}}</span> 
                                    </button>
                                    <div id="pos">
                                      <ul class="dropdown-menu" x-placement="top-start" style="position: absolute; top: -1085px; left: 0px; will-change: top, left;" x-out-of-boundaries="">

                                            <li v-for="notification in applied.notification_list"><a class="dropdown-item" href="#">{{notification.message}}</a></li>


                                        </ul>
                                      </div>
                                    </div> 
                                </h3>
                                <p>
                                    <b class="col-ppd">Role Description</b>: 
                                    <span v-html="applied.description"></span>
                                </p>
                                <p class="mb-4">
                                    <b class="col-ppd">Status</b>: 
                                    <span class="badge badge-success">{{applied.status}}</span>
                                </p>
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

// Authentication
// import { getIdToken } from '../../../utils/auth';

export default {
	name: 'Home',
	data() {
		return {
			loading: true,
            dashData: "",
            qualifiedData: "",
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


        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        let userID = JSON.parse(localStorage.getItem('token'));
        // console.log(userID);

        axios({ method: "GET", "url": 'http://api.cast.i.ng/auditions/applied/'+userID , config }).then(result => {
            
            this.dashData = result;
        }, error => {
            
            console.log('API CALL FAILED');
            console.error(error);
        });

        axios({ method: "GET", "url": 'http://api.cast.i.ng/qualifiedproject/'+userID , config }).then(result => {
            this.qualifiedData = result;
        }, error => {
            console.log('API CALL FAILED');
            console.error(error);
        });
	}
};
</script>

<style>
.img-full{
    width: 100%;
}
.cv-pad{
    padding: 10px 16px!important;
}
</style>