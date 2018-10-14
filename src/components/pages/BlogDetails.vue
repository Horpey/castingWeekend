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
            <router-link class="text-white" v-bind:to="'/Blog'">Blog</router-link>
            <i class="fa fa-angle-double-right mr-2 ml-2"></i>
            <small>Picture Perfect Set for Premiere</small>
          </div>
        </div>
      </div>
    </header>


    <section class="sec-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">

            <h3 class="col-p slider-head">Picture Perfect set for premiere</h3>
            <label>
              <i class="fa fa-calendar"></i> Sept 16th, 2018 &nbsp;&nbsp;
              <i class="fa fa-user"></i> Adebola Ogun
            </label>
            <img src="../../assets/images/blog1.jpg" class="rounded img-fluid" />
            <p class="mt-2">
              A new movie from award-winning filmmaker, Biodun Stephen, Picture Perfect, is set to hit the cinemas nationwide from July.
              It features Bisola Aiyeola, Mary Remmy Njoku, Bolanle Ninalowo, Ronke Oshodi Oke, and others.
              <br>
              <br> Picture Perfect is a blend of comedy, reality and a jot of romance. It tells the story of a fashion designer
              (Mary Remmy Njoku), who meets a notorious area boy, Jobe (Bolanle Ninalowo), when her car breaks down in his
              neighbourhood. What seems to be a distressing situation turns out to be a blessing, only to go completely sideways
              when he sets his home beside her shop. Written and produced by Stephen, who has also produced other movies
              such as Ovy’s Voice, Tiwa’s Baggage and The Visit, it is directed by Tope Alake, with Mary Remmy Njoku-led
              ROK Studios as co-executive producer.
              <br>
              <br> Shortly after the press premiere, Stephen said, “The movie was inspired by my tailor. At first glance, the
              story seems like one of a damsel in distress, but it is more than that. It is not just your regular story.
              Picture Perfect is about what makes a perfect father figure. Sometimes the picture perfect fathers are found
              in the most imperfect human beings.”
              <br>
              <br> Stephen said the movie would change how citizens perceive thugs; it also tries to reveal the unfortunate situations
              many find themselves by no fault of theirs. Many of them have good values that cannot easily be found in people
              that are properly clothed. The movie explores different themes such as comedy, love and more.
            </p>

          </div>


          <div class="col-lg-4">
            <h3 class="col-p">Popular Post</h3>

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
	name: 'blogdetails',
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