<template>
    <div>
        <styles/>
        <loader v-if="loading"/>
        <header class="sub-ban clippath" :style="{'background': 'linear-gradient(180deg, #000c, #00000080), url('+ require ('../../assets/images/ban1.jpg') + ')'}">
    <div class="container about-headd" style="padding-top: 175px;">
        <div class="row">
            <div class="col-lg-7 mx-auto text-white text-center">
                <h2>The best talents in the land get hired here</h2>
                <p>We provide the the most convenient place for talented actors and the casting Directors who need
                    their services
                    to meet, and get work started.</p>
            </div>
        </div>
    </div>
</header>


<section class="sec-1 line r-sec-1">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 text-left  wow slideInLeft" data-wow-duration="2s" data-wow-offset="10">
                <h1 class="col-p pt-5 slider-head">About cast.i.ng manager</h1>
                <p>
                    We provide a seamless process from audition notices, actor filtering, online video and audio
                    auditions, actors screening
                    and rating, audition scheduling, audition reminders, audition tagging, and history of actors, by
                    project names.
                    Here is the place to be if acting for you is more than a joke.
                </p>
                <p>
                    This premium platform showcases our actors in the most palatable way, and helps them to be seen by
                    the best producers and
                    casting directors. Our filtering and sorting system helps the casting directors not to miss that
                    particular
                    talent for that particular job.
                </p>

                <a href="#" class="btn btn-trans">Get Started Now</a>
            </div>
            <div class="col-lg-5 wow slideInRight" data-wow-duration="2s" data-wow-offset="10">
                <img  src="../../assets/images/castb.png" class="img-fluid imgv text-center pt-3 my-auto" width="50%">
            </div>
        </div>
    </div>
</section>


<section class="line">
    <div class="container-fluid p-0">

        <div class="row no-gutters text-center">
            <div class="col-sm-4 r-color-grid col1">
                <label class="cbox wow fadeIn" data-wow-duration="2s" data-wow-offset="10">
                    <i class="fa fa-4x fa-laptop"></i>
                </label>
                <h3>Create Your Profile</h3>
                <p class="mb-0">Create your account in minutes and update your profile.</p>

            </div>
            <div class="col-sm-4 r-color-grid col2">
                <label class="cbox wow fadeIn" data-wow-duration="3s" data-wow-offset="10">
                    <i class="fa fa-4x fa-users"></i>
                </label>
                <h3>Get Countless Casting Calls</h3>
                <p class="mb-0">Upload your reels and resume and start getting casting calls.</p>

            </div>
            <div class="col-sm-4 r-color-grid col3">
                <label class="cbox wow fadeIn" data-wow-duration="4s" data-wow-offset="10">
                    <i class="fa fa-4x fa-list-alt"></i>
                </label>
                <h3>Discover & Hire Talents</h3>
                <p class="mb-0">View actors headshots and resume. Make your selection process easy.</p>

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
	name: 'about',
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
.sub-ban {
	min-height: 400px;
}
.clippath {
	background-size: cover;
	-webkit-clip-path: polygon(100% 0, 100% 69%, 28% 100%, 0 79%, 0 0);
	clip-path: polygon(100% 0, 100% 69%, 28% 100%, 0 79%, 0 0);
}
</style>