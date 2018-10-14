<template>
    <div>
        <loader v-if="loading"/>

        <div class="cv cv-pad" v-for="(myAudition, index) in myAudData.data.list">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid mr-4 rounded mb-3" :src="myAudition.image">
                </div>
                <div class="col-md-8">
                    <h3>
                    <a href="#" class="col-bb">{{myAudition.name}}</a>

                    <div class="dropdown float-right">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                            <i class="ti-bell noti-icon"></i>
                            <span class="badge badge-danger noti-icon-badge">{{myAudition.notification_count}}</span>
                            <span class="caret"></span>
                        </button>
                        <div id="pos">
                            <ul class="dropdown-menu">

                                <li v-for="notification in myAudition.notification_list"><a class="dropdown-item" href="#">{{notification.message}}</a></li>
                            </ul>
                        </div>
                    </div> 
                        
                    </h3>
                    <p>
                        <b class="col-ppd">Role Description</b>:
                        <span v-html="myAudition.description"></span>
                    </p>
                    <p class="mb-4">
                        <b class="col-ppd">Status</b>: <span class="badge badge-success">{{myAudition.status}}</span>
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
	name: 'myAuditions',
	data() {
		return {
			loading: true,
            myAudData: "",
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

        axios({ method: "GET", "url": 'http://api.cast.i.ng/auditions/applied/'+userID , config }).then(result => {
            this.loading = false;
            this.myAudData = result;
        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });
	},
};
</script>

<style>
.cv-pad{
    padding: 10px 16px!important;
}
</style>



