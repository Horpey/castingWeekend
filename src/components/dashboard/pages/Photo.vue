<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <div class="row">
                    <p class="cv1">
                        <b>PHOTO GALLERY</b>
                    </p>									
                    <div class="col-md-3 p-1" v-for="photo in photoData.data.list">
                        <a :href="siteUrl + photo.image" data-fancybox="gallery">
                            <img class="rounded mx-auto d-block img-fluid" alt="200x200" :src="siteUrl + photo.image" data-holder-rendered="true" /> 
                            <a href="#" class="mv"><i class="fa fa-trash-o"></i> Delete</a>
                        </a>
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
    name: 'photo',
    data() {
		return {
			loading: true,
            photoData: "",
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

        axios({ method: "GET", "url": 'http://api.cast.i.ng/myphoto/'+userID , config }).then(result => {
            this.loading = false;
            this.photoData = result;
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