<template>
    <div>
        <loader v-if="loading"/>
    
    <!-- {{allAudData}} -->
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
                        <a :href="allAudition.apply_link" class="btn btn-ppd border-0">Apply</a>
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
            allAudData: "",
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

        axios({ method: "GET", "url": 'http://api.cast.i.ng/auditions/available/'+userID , config }).then(result => {
            this.loading = false;
            this.allAudData = result;
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



