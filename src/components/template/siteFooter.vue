<template>
    <div>
        <footer class="py-3 home-footer">
    <div class="container">
        <br>

        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <label>
                    <router-link class="text-white" v-bind:to="'/Home'">Home</router-link> |
                    <router-link class="text-white" v-bind:to="'/About'">About Us</router-link> |
                    <router-link class="text-white" v-bind:to="'/Blog'">Blog</router-link> |
                    <router-link class="text-white" v-bind:to="'/Contact'">Contact Us</router-link>

                    <div>Copyright &copy; 2018 Casting All Rights Reserved</div>
                </label>
            </div>

            <div class="col-lg-4 col-md-10 mx-auto">
                <ul class="list-inline text-center">
                    <li class="list-inline-item">
                        <a :href="homeData.data.twitter_link" target="_blank">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a :href="homeData.data.facebook_link">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a :href="homeData.data.linkedin_link">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a :href="homeData.data.instagram_link">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-instagram ins fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </div>


</template>

<script>
import axios from 'axios';

export default {
    name: 'siteFooter',
    data() {
		return {
			loading: true,
			homeData: "",
			siteUrl: "http://stage.cast.i.ng/",
			videoUrl: "https://www.youtube.com/embed/"
		};
	},
    beforeCreate() {
		this.loading = true;
		var config = {
			headers: {'Access-Control-Allow-Origin': '*'}
		};

        axios({ method: "GET", "url": "http://api.cast.i.ng", config }).then(result => {
			this.loading = false;
            this.homeData = result;
        }, error => {
			this.loading = false;
            console.error(error);
        });
	}
};
</script>

<style>
</style>