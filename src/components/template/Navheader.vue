<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top opaque-navbar r-navbar-shadow home-headerr">
			<div class="container">
				<a class="navbar-brand" href="index.html">
					<img src="../../assets/images/logo1.png">
				</a>
				<button class="navbar-toggler navbar-toggler-right r-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
				    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto mel">
						<!-- <li class="close-li">
							<img id="close-img" src="images/close.svg" />
						</li> -->
						<li class="castb-li d-md-none d-lg-none d-xl-none">
							<img id="close-img" src="../../assets/images/castb.png" />
						</li>
						<li class="nav-item">
							<router-link class="nav-link" v-bind:to="'/Home'">Home</router-link>
							
						</li>
						<li class="nav-item">
							<router-link class="nav-link" v-bind:to="'/About'">About Us</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" v-bind:to="'/Howit'">How it works</router-link>
						</li>
						<li class="nav-item">
						<router-link class="nav-link" v-bind:to="'/pricing'">Pricing</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" v-bind:to="'/blog'">Blog</router-link>
						</li>
						<li class="nav-item">
							<router-link class="btn btn-ppk1 ml-2" v-bind:to="'/register'">Register</router-link>
						</li>
						<li class="nav-item">
							<router-link class="btn btn-trans1 ml-2 r-btn-nav r-btn-nav" v-bind:to="'/Login'">Login </router-link>
						</li>

					</ul>
				</div>
			</div>
		</nav>
    </div>
</template>

<script>
    export default {
		name: 'navheader',
		mounted(){
			$('.navbar-collapse').click(function() {
			$("#navbarResponsive").toggleClass('hidee');
			$("#navbarResponsive").removeClass('show');
			});

			$(".navbar-toggler").click(function() {
			$("#navbarResponsive").removeClass('hidee');
			//   $("#navbarResponsive").addClass('show');
			});
		},
    }
</script>

<style>
.router-link-active{
	border-bottom: 2px solid #e7077d!important;
}

.sidebar-hidd{
	right: 100%!important;
}
</style>