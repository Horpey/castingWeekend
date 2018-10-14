<template>
    <div>
		<styles/>
		<loader v-if="loading"/>
        <header class="sub-ban1 clippath" :style="{'background': 'linear-gradient(180deg, #000c, #00000080), url('+ require ('../../assets/images/ban1.jpg') + ')'}">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 mx-auto text-white pt-c2">
						<h4>Blog</h4>
						<router-link class="text-white" v-bind:to="'/Home'">Home</router-link>
						<i class="fa fa-angle-double-right mr-2 ml-2"></i>
						<small>BLOG</small>
					</div>
				</div>
			</div>
		</header>


		<section class="sec-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="blog-section">
							<div class="row">
								<div class="col-md-4">
									
									<div class="blog-img" :style="{'background': 'url('+ require ('../../assets/images/blog1.jpg') + ')'}"></div>
								</div>
								<div class="col-md-8">
									<h4 class="col-pk slider-head">Picture Perfect set for premiere</h4>
									<p class="mt-2">
										A new movie from award-winning filmmaker, Biodun Stephen, Picture Perfect, is set to hit the cinemas nationwide from July.
										It features Bisola Aiyeola, Mary Remmy Njoku, Bolanle Ninalowo, Ronke Oshodi Oke, and others.Picture Perfect is
										a blend of comedy, reality and a jot of romance. It tells the story of a fashion designer (Mary Remmy Njoku) ...
									</p>
									<p class="blog-dd" style="font-size: 15px;  color: #a9a9a9;">
										<i class="fa fa-calendar"></i> Sept 16th, 2018 &nbsp;&nbsp;
										<i class="fa fa-user"></i> Adebola Ogun
									</p>

                                    <router-link class="btn btn-ppk btn-sm" v-bind:to="'/blogdetails'">Continue Reading <i class="fa fa-angle-double-right"></i></router-link>

								</div>
							</div>
						</div>
						<div class="blog-section">
							<div class="row">
								<div class="col-md-4">
									<div class="blog-img" :style="{'background': 'url('+ require ('../../assets/images/blog2.jpg') + ')'}"></div>
                                    
								</div>
								<div class="col-md-8">
									<h4 class="col-pk slider-head">No better time to be in Nollywood than now</h4>
									<p class="mt-2">
										As a kid, I wanted to be an actor," Biodun Stephen said. "I featured in a few projects: Spider and Emerald, both TV series,
										but it seemed my acting career was having a difficult time getting off. After a while I gave up. I went back to
										working nine-to-five as a copywriter with Insight Communication, an advertising agency. I also had a stint as a
										radio ...
									</p>
									<p class="blog-dd" style="font-size: 15px;  color: #a9a9a9;">
										<i class="fa fa-calendar"></i> Sept 16th, 2018 &nbsp;&nbsp;
										<i class="fa fa-user"></i> Adebola Ogun
									</p>
									<router-link class="btn btn-ppk btn-sm" v-bind:to="'/blogdetails'">Continue Reading <i class="fa fa-angle-double-right"></i></router-link>
								</div>
							</div>
						</div>

						<div class="blog-section">
							<div class="row">
								<div class="col-md-4">
									
									<div class="blog-img" :style="{'background': 'url('+ require ('../../assets/images/blog1.jpg') + ')'}"></div>
								</div>
								<div class="col-md-8">
									<h4 class="col-pk slider-head">No better time to be in Nollywood than now</h4>
									<p class="mt-2">
										As a kid, I wanted to be an actor," Biodun Stephen said. "I featured in a few projects: Spider and Emerald, both TV series,
										but it seemed my acting career was having a difficult time getting off. After a while I gave up. I went back to
										working nine-to-five as a copywriter with Insight Communication, an advertising agency. I also had a stint ...
									</p>
									<p class="blog-dd" style="font-size: 15px;  color: #a9a9a9;">
										<i class="fa fa-calendar"></i> Sept 16th, 2018 &nbsp;&nbsp;
										<i class="fa fa-user"></i> Adebola Ogun
									</p>
									<router-link class="btn btn-ppk btn-sm" v-bind:to="'/blogdetails'">Continue Reading <i class="fa fa-angle-double-right"></i></router-link>
								</div>
							</div>
						</div>

						<nav aria-label="Page navigation example">
							<ul class="pagination justify-content-center">
								<li class="page-item">
									<a class="page-link" href="#">Previous</a>
								</li>
								<li class="page-item">
									<a class="page-link" href="#">1</a>
								</li>
								<li class="page-item">
									<a class="page-link" href="#">2</a>
								</li>
								<li class="page-item">
									<a class="page-link" href="#">3</a>
								</li>
								<li class="page-item">
									<a class="page-link" href="#">Next</a>
								</li>
							</ul>
						</nav>
					</div>


					<div class="col-lg-4">
						<h4 class="col-p">Popular Post</h4>

						<div class="row">
							<div class="col-lg-12 mb-2">
								<img src="../../assets/images/blog2.jpg" width="120" height="70" class="rounded float-left mr-2" /> No better time to be in Nollywood than now</br>
								<i class="fa fa-calendar col-b"></i> Sept 16th, 2018
								<div class="bline"></div>
							</div>

							<div class="col-lg-12 mb-2">
								<img src="../../assets/images/blog1.jpg" width="120" height="70" class="rounded float-left mr-2" /> Picture Perfect set for premiere</br>
								<i class="fa fa-calendar col-b"></i> Jun 16th, 2018
								<div class="bline"></div>
							</div>

							<div class="col-lg-12 mb-2">
								<img src="../../assets/images/about-video1.jpg" width="120" height="70" class="rounded float-left mr-2" /> Film-making makes me complete</br>
								<i class="fa fa-calendar col-b"></i> Nov 16th, 2018
								<div class="bline"></div>
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
import Loader from '../template/loader';
import Styles from '../template/styles';
export default {
	name: 'blog',
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
.sub-ban1 {
	min-height: 230px;
}
.clippath {
	background-size: cover;
	-webkit-clip-path: polygon(100% 0, 100% 69%, 28% 100%, 0 79%, 0 0);
	clip-path: polygon(100% 0, 100% 69%, 28% 100%, 0 79%, 0 0);
}
.blog-img {
	width: 100%;
	height: 193px;
	background-size: cover !important;
	background-position: center !important;
	background-repeat: no-repeat !important;
	margin-bottom: 19px;
}
</style>