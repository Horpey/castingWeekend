<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">

            <auditiontab/>

            <div class="mt-2">
                <div class="cv">
                        <div class="col-md-12 mt-2">
                            <img class="wdd1 float-left mr-4 rounded mb-3" src="../../../assets/images/ev1.jpg">
                            <h3>
                            
                            <a href="#" class="col-bb">Audition Title</a>
                            
                                    <div class="dropdown float-right">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                                    <i class="ti-bell noti-icon"></i>
                                    <span class="badge badge-danger noti-icon-badge">3</span>
                                    <span class="caret"></span></button>
                                    <div id="pos">
                                    <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="add-video.html">Upload video</a></li>
                                    <li><a class="dropdown-item" href="add-audio.html">Upload Audio</a></li>
                                    <li><a class="dropdown-item" href="appointment.html">Schedule for appointment</a></li>
                                    </ul>
                                    </div>
                                </div> 
                                
                            </h3>
                            
                            <p>
                                <b class="col-ppd">Role Description</b>: I am looking for a professional female actress that can play the role of a mother 
                                and sister in my upcoming movies, this indivdual should also have the ability to switch role.
                            </p>
                            <p class="mb-4">
                                <b class="col-ppd">Status</b>: <span class="badge badge-success">Approved</span>
                            </p>
                        </div>
                    </div>
                </div> 
                
                
                <ul class="pagination justify-content-center mt-4">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next<div class="ripple-container"></div></a>
                        </li>
                </ul>
            
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
import auditiontab from '../template/auditiontab';

export default {
	name: 'myauditions',
	components: {
		auditiontab: auditiontab,
		loader: Loader,
	},
	data() {
		return {
			loading: true,
		};
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