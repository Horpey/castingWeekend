<template>
    <div >
		<styles/>
		<loader v-if="loading"/>
        <header>
			<div id="carouselExampleFade" class="carousel slide carousel-fade bgg" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item" v-for="(slider, index) in sliderData.data.list" :class="{ 'active': index === 0 }" >
						<div class="clippath" alt="First slide" :style="{'background': 'linear-gradient(180deg, #0000, #00000080), url('+ slider.image + ')' }">
							<div class="container pt-c">
								<div class="row">
									<div class="col-lg-7 mx-auto text-white text-center">
										
										<h1 class="slider-head">{{slider.title}}</h1>
										<h5 class="r-14">{{slider.description}}</h5>
										
										<router-link class="r-btn hvr-sweep-to-left btn btn-bb2 mr-2" v-bind:to="'/Registeractor'">I am an Actor</router-link>

										<router-link class="r-btn hvr-sweep-to-left btn btn-bb2" v-bind:to="'/Registerdirector'">I am a Casting
											Director</router-link>

									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</header>

<section class="sec1">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 text-left">
                <h1 class="display-4 slider-head" style="text-align: left;">What makes casting manager so different?</h1>
                <p>
                    This premium platform showcases our actors in the most palatable way, and helps them to be seen by
                    the best producers and
                    casting directors. Our filtering and sorting system helps the casting directors not to miss that
                    particular talent
                    for that particular job.
                </p>

				<router-link class="btn btn-trans text-white" v-bind:to="'/Register'">Get Started Now</router-link>
            </div>
            <div class="col-lg-5 wow slideInRight d-none d-sm-block d-sm-none d-md-block" data-wow-duration="2s"
                data-wow-offset="10">
                <img src="../../assets/images/chiar.png" class="img-fluid imgv">
            </div>
        </div>
    </div>
</section>



<section class="sec5">
	<div class="container">
		<div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li v-for="(featured, index) in homeData.data.featured_projects" :class="{ 'active': index === 0 }" data-target="#carouselExampleIndicators2" :data-slide-to="index"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item" v-for="(featured, index) in homeData.data.featured_projects" :class="{ 'active': index === 0 }">
					<p>
						<img class="img-fluid slider-img float-left mr-4 imgcv" :src="siteUrl + featured.project_image" alt="">
						<h1 class="slider-head text-left">	{{featured.project_title}}</h1>

						<span v-html="featured.project_description"></span>
					</p>
					<button type="button" class="btn btn-trans">Read More</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section class="sec5">
	<div class="container">
		<div class="myslid">
			<div v-for="featured in homeData.data.featured_projects">
				<p>
					<img class="img-fluid slider-img float-left mr-4 imgcv" :src="siteUrl + featured.project_image" alt="">
					<h1 class="slider-head text-left">	{{featured.project_title}}</h1>

					<span v-html="featured.project_description"></span>
				</p>
				<button type="button" class="btn btn-trans">Read More</button>
			</div>
		</div>
	</div>
</section> -->

	<div class="container-fluid p-0">

		<div class="my-4" align="center">
			<small class="col-g r-small">CASTING BEST TALENT</small>
			<h1 class="col-p slider-head">Featured Actors
				<div class="uline"></div>
			</h1>
		</div>



		<div class="row no-gutters">
			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 hover-grid" v-for="actors in homeData.data.featured_actors" >
				<div class="hovereffect">
					<div class="overlay bggdd" :style="{'background': 'linear-gradient(rgba(63, 0, 72, 0.4),rgba(63, 0, 72, 0.4)), url('+ siteUrl + actors.user_image + ')'}">
						<h2 class="text-trans-none"> 
							{{actors.user_firstname}} {{actors.user_lastname}}
							<br>
						</h2>
						<a class="info text-trans-none">
							<small>{{actors.user_description}}
							</small>
						</a>
					</div>
				</div>
			</div>	
		</div>
	</div>


	<section class="sec">
		<div class="container-fluid p-0">
			<div class="row no-gutters">
				<div class="col-lg-6 wow slideInLeft d-none d-sm-block d-sm-none d-md-block" data-wow-duration="2s" data-wow-offset="10">
					<img src="../../assets/images/board3.png" class="img-fluid">
				</div>
				<div class="col-lg-6">
					<div class="wrd r-wrd">
						<h1 class="col-p slider-head hire-the">Hire the Best Casting Talent</h1>
						<!-- <h1>Loading is {{loading}}</h1> -->
						<ul>
							<li>
								<p class="mb-0">
									<b>UNLIMITED HEADSHOTS UPLOAD</b>
								</p>
								<p>Unlimited headshots upload and management.</p>
							</li>
							<li>
								<p class="mb-0">
									<b>UNLIMITED VIDEO REEL UPLOAD</b>
								</p>
								<p>Unlimited video reel upload and management.</p>
							</li>
							<li>
								<p class="mb-0">
									<b>AGENCY SERVICES FOR EXCEPTIONAL ACTORS</b>
								</p>
								<p>Agency services for exceptional actors if needed.</p>
							</li>
							<li>
								<p class="mb-0">
									<b>FULL SHAREABLE ACTOR’S PORTFOLIO & RESUME</b>
								</p>
								<p>Full shareable actor’s portfolio & management.</p>
							</li>
						</ul>

						
					</div>
				</div>
			</div>
		</div>
	</section>
    <section>
		<div class="container-fluid p-0">
		


			<div class="row no-gutters text-center">
				<div class="col-sm-4 col1 r-color-grid">
					<label class="cbox wow fadeIn" data-wow-duration="2s" data-wow-offset="10">
						<i class="fa fa-4x fa-laptop"></i>
					</label>
					<h3>Create Your Profile</h3>
					<p class="mb-0">Create your account in minutes and update your profile.</p>

				</div>
				<div class="col-sm-4 col2 r-color-grid">
					<label class="cbox wow fadeIn" data-wow-duration="3s" data-wow-offset="10">
						<i class="fa fa-4x fa-users"></i>
					</label>
					<h3>Get Countless Casting Calls</h3>
					<p class="mb-0">Upload your reels and resume and start getting casting calls.</p>

				</div>
				<div class="col-sm-4 col3 r-color-grid">
					<label class="cbox wow fadeIn" data-wow-duration="4s" data-wow-offset="10">
						<i class="fa fa-4x fa-list-alt"></i>
					</label>
					<h3>Discover & Hire Talents</h3>
					<p class="mb-0">View actors headshots and resume. Make your selection process easy.</p>

				</div>
			</div>
		</div>
	</section>


	<section class="sec3 r-sec3">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 mx-auto text-white text-left">
					<h1 class="slider-head text-left">What is Casting all about?</h1>
					<p>
						We provide a seamless process from audition notices, actor filtering, online video and audio auditions, actors screening
						and rating, audition scheduling, audition reminders, audition tagging, and history of actors, by project names. Here
						is the place to be if acting for you is more than a joke.
					</p>
					<button type="button" class="btn btn-trans">
						<router-link class="text-white" v-bind:to="'/About'">Read More</router-link>
						</button>
				</div>
				<div class="col-lg-4">
					<img class="r-pink-logo" src="../../assets/images/lgm1.png" width="">
				</div>
			</div>
		</div>
	</section>



	
<section class="sec6 r-sec6">
	<div class="container">
		<div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel" >
			<ol class="carousel-indicators">
				<li v-for="(testimonial, index) in homeData.data.featured_testimonial" :class="{ 'active': index === 0 }" data-target="#carouselExampleIndicators3" :data-slide-to="index"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item" v-for="(testimonial, index) in homeData.data.featured_testimonial" :class="{ 'active': index === 0 }">
					<div class="row">
						<div class="col-md-6" style="padding:50px 30px;">
							<img class="quote-mark" src="../../assets/images/quotes-1.png" alt="">
							<h2 class="r-slider-h2">
								<span v-html="testimonial.testimonial_content"></span>
							</h2>
							<img :src="siteUrl + testimonial.testimonial_image" class="rounded-circle float-left mr-2" width="70" height="70" />
							<b class="col-o">{{testimonial.testimonial_name}}</b>
							<br> {{testimonial.testimonial_role}}
						</div>

						<div class="col-md-5">
							<iframe class="embed-responsive-item rounded" width="500" height="350" :src="videoUrl + testimonial.testimonial_video" frameborder="0"
								allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



    </div>
</template>

<script>
import axios from 'axios';

// import homeService from '../../services/homeService'

import Loader from '../template/loader';
import Styles from '../template/styles';

export default {
	name: 'home',
	props: ['message'],
	data() {
		return {
			isActive: true,
			loading: true,
			homeData: "",
			sliderData: '',
			siteUrl: "http://stage.cast.i.ng/",
			videoUrl: "https://www.youtube.com/embed/"
		};
	},
	components: {
		loader: Loader,
		styles: Styles,
	},

	beforeCreate() {
		this.loading = true;
		var config = {
			headers: {'Access-Control-Allow-Origin': '*'}
		};


		axios({ method: "GET", "url": "http://api.cast.i.ng/slider", config }).then(result => {
			this.loading = false;
            this.sliderData = result;

        }, error => {
			this.loading = false;
            console.error(error);
        });
		

        axios({ method: "GET", "url": "http://api.cast.i.ng", config }).then(result => {
			this.loading = false;
            this.homeData = result;

        }, error => {
			this.loading = false;
            console.error(error);
        });
	},
	mounted(){

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


		// $('.carousel').carousel({
		// 	interval: 2000
		// })
	}	
};
</script>

<style>
.clippath {
	background-size: cover;
	-webkit-clip-path: polygon(100% 0, 100% 69%, 28% 100%, 0 79%, 0 0);
	clip-path: polygon(100% 0, 100% 69%, 28% 100%, 0 79%, 0 0);
}
.bgg {
	background-color: #e7077d;
}

.text-trans-none{
	text-transform: none!important;
}

.bggdd{
	background-size: cover!important;
    background-position: center!important;
    background-repeat: no-repeat!important;
}
.carousel-indicators{
	bottom: -40px!important;
}
.carousel-indicators li{
	width: 10px!important;
    height: 10px!important;
    border-radius: 100%;
	background-color: rgba(121, 121, 121, 0.5)!important;
}
.carousel-item {
    border-bottom: 0px!important;
}
</style>