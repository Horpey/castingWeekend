<template>
    <div>
		<styles/>
		<loader v-if="loading"/>
        <header class="sub-ban clippath" :style="{'background': 'linear-gradient(180deg, #000c, #00000080), url('+ require ('../../assets/images/ban1.jpg') + ')'}">
			<div class="container about-headd" style="padding-top: 175px;">
				<div class="row">
					<div class="col-lg-7 mx-auto text-white text-center">
						<h2>The best talents in the land get hired here</h2>
						<p>We provide the the most convenient place for talented actors and the casting Directors who need their services to meet,
							and get work started.</p>
					</div>
				</div>
			</div>
		</header>


		<section class="sec-1" style="padding: 0 0 10px 0;">
			<!-- Timeline Section -->
			<div class="container">
				<div id="steps">
					<div class="wrapper home-section">
						<div class="steps-section">
							<h2>How Cast.i.ng Works</h2>
						</div>
						<div id="s11" class="steps-block">
							<div class="steps-content">
								<h3>Start Your Auditions</h3>
								<p>
									We provide a seamless process from audition notices, actor filtering, online video and audio auditions, actors screening
									and rating, audition scheduling, audition reminders, audition tagging, and history of actors, by project names.
									Here is the place to be if acting for you is more than a joke.
								</p>
							</div>
							<div class="steps-icon" data-index="0"></div>
							<div id="video1" class="videoframe steps-img">
								<div>
									<img class="img-responsive timeline-image" src="../../assets/images/timeline-img.png" />
								</div>
							</div>
						</div>
						<div id="s12" class="steps-block">
							<div class="steps-content">
								<h3>Hold Call Backs</h3>
								<p>
									We provide a seamless process from audition notices, actor filtering, online video and audio auditions, actors screening
									and rating, audition scheduling, audition reminders, audition tagging, and history of actors, by project names.
									Here is the place to be if acting for you is more than a joke.
								</p>
							</div>
							<div class="steps-icon" data-index="1"></div>
							<div id="video2" class="videoframe steps-img">
								<div>
									<img class="img-responsive timeline-image" src="../../assets/images/timeline-img.png" />
								</div>
							</div>
						</div>
						<div id="s13" class="steps-block">
							<div class="steps-content">
								<h3>Cast Your Show!</h3>
								<p>
									We provide a seamless process from audition notices, actor filtering, online video and audio auditions, actors screening
									and rating, audition scheduling, audition reminders, audition tagging, and history of actors, by project names.
									Here is the place to be if acting for you is more than a joke.
								</p>
							</div>
							<div class="steps-icon" data-index="2"></div>
							<div id="video3" class="videoframe steps-img">
								<div>
									<img class="img-responsive timeline-image" src="../../assets/images/timeline-img.png" />
								</div>
							</div>
						</div>
						<!-- <div class="steps-section">
                    <h2>2. Add your content.</h2>
                </div> -->
						<div id="s21" class="steps-block">
							<div class="steps-content">
								<h3> How it works for actors</h3>
								<p>
									We provide a seamless process from audition notices, actor filtering, online video and audio auditions, actors screening
									and rating, audition scheduling, audition reminders, audition tagging, and history of actors.
								</p>
							</div>
							<div class="steps-icon" data-index="3"></div>
							<div id="video3" class="videoframe steps-img">
								<div>
									<img class="img-responsive timeline-image" src="../../assets/images/timeline-img.png" />
								</div>
							</div>
						</div>
						<div id="s22" class="steps-block">
							<div class="steps-content">
								<h3>How it works for actors</h3>
								<p>
									We provide a seamless process from audition notices, actor filtering, online video and audio auditions, actors screening
									and rating, audition scheduling, audition reminders, audition tagging, and history of actors.
								</p>
							</div>
							<div class="steps-icon" data-index="4"></div>
							<div id="video3" class="videoframe steps-img">
								<div>
									<img class="img-responsive timeline-image" src="../../assets/images/timeline-img.png" />
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
import Loader from '../template/loader';
import Styles from '../template/styles';

export default {
	name: 'howit',
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