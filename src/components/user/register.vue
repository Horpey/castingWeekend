<template>
    <div>
        <styles/>
        <loader v-if="loading"/>
        <section class="sec-4">
            <div class="container">
                <div class="row">
                <div class="col-sm-12 col-12 col-md-6 col-lg-6 mb-5">
                    <div class="round1 text-center">

                    <i class="fa fa-users fa-3x"></i>
                    <h4 class="text-center title pt-3">ACTORS</h4>
                    <p>
                        Register now and get audition notices in a jiffy. Upload your reels and resume and start getting casting calls
                    </p>
                    <router-link class="nav-link1 btn btn-ppk" v-bind:to="'/Registeractor'">Register Here</router-link>
                 
                    </div>
                </div>

                <div class="col-sm-12 col-12 col-md-6 col-lg-6">
                    <div class="round2 text-center ">

                    <i class="fa fa-video-camera fa-3x"></i>
                    <h4 class="text-center title pt-3">CASTING DIRECTORS</h4>
                    <p>
                        Shortlist Actors and discover talents in a click. View actors headshots and resume. Make your selection process easy.
                    </p>
                    <router-link class="nav-link1 btn btn-ppk" v-bind:to="'/Registerdirector'">Register Here</router-link>
                 
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
import Styles from '../template/styles';

export default {
	name: 'register',
	data() {
		return {
			loading: true,
		};
	},
	components: {
		loader: Loader,
		styles: Styles,
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