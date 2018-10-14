<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <div class="row">
                    <p class="cv1">
                        <b>VIDEO</b>
                    </p>
                    <div class="col-md-6 bline" v-for="video in videoData.data.list">
                        <div class="row">
                            <div class="col-md-6 p-1">
                                 <a data-fancybox="gallery" :href='"https://www.youtube.com/watch?v=_sI_Ps7JSEk"+video.youtube_link'>         
                                    <img class="rounded  mx-auto d-block img-fluid" alt="200x200" :src="video.image" />  
                                </a>											
                            </div>
                   
                            <div class="col-md-6">
                                <p><b>Title:</b>{{video.title}}</p>
                                <p><b>Year:</b> {{video.year}}</p>
                                <p><b>Role:</b>{{video.type}}</p>
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
	name: 'video',
	data() {
		return {
			loading: true,
            videoData: "",
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

        axios({ method: "GET", "url": 'http://api.cast.i.ng/myvideo/'+userID , config }).then(result => {
            this.loading = false;
            this.videoData = result;
        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });
	},
};
</script>

<style>
</style>