<template>
    <div>
		<loader v-if="loading"/>
        <div class="card m-b-30">
			<div class="card-body">
				<div class="row">
					<p class="cv1">
					<b>AUDIO</b>
					</p>		
				</div>
				<table class="table table-striped mb-0">
					<tbody><tr>
						<td><b>Year</b></td>
						<td><b>Title</b></td>
						<td><b>Role</b></td>
						<td><b>Listen</b></td>
						<td><b>Action</b></td>
					</tr>

					</tbody><tbody>
						<tr v-for="audio in audioData.data.list">
							<td>{{audio.year}}</td>
							<td>{{audio.title}}</td>
							<td>{{audio.type}}</td>
							<td><a :href="audio.youtube_link" class="btn" target="_blank">Click To Listen</a></td>
							<td>
								<a href="#" class="btn btn-outline-success btn-sm">Edit</a>
							<a href="#" onclick="return confirm('Are you sure?');" class="btn btn-outline-danger btn-sm">Delete</a>
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
	name: 'audio',
	data() {
		return {
			loading: true,
            audioData: "",
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

        axios({ method: "GET", "url": 'http://api.cast.i.ng/myaudio/'+userID , config }).then(result => {
            this.loading = false;
            this.audioData = result;
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