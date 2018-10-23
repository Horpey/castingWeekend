<template>
    <div>
        <navHeader/>
		<div class="wrapper">
            <div class="container">
                <div class="row">
					<div class="col-md-12 col-lg-12 col-xl-4" v-show="$route.path != '/project/createAudition/'">
						<sidebar/>
					</div>
					<!-- Condition for Create Audition -->
					<div v-bind:class="{ 'col-xl-8': $route.path != '/project/createAudition/' , 'col-xl-12': $route.path === '/project/createAudition/'}">
						<router-view></router-view>
					</div>
                </div>
            </div>
		</div>
        <siteFooter/>
    </div>
</template>

<script>
import navHeader from './template/navHeader';
import sidebar from './template/sidebar';
import siteFooter from './template/siteFooter';
import Loader from './template/loader';

export default {
	name: 'index',
	components: {
		navHeader: navHeader,
		sidebar: sidebar,
		siteFooter: siteFooter,
		loader: Loader,
	},
	data() {
		return {
			loading: true,
		};
	},
	mounted() {
		console.log(this.$route.path);
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
	updated() {
		console.log('Meant to go back');
		if (!localStorage.token && this.$route.path !== '/') {
			this.$router.push('/?redirect=' + this.$route.path);
		}
	},
};
</script>

<style>
/* Dashboard Styles */
@import '../../../assets/assets/css/bootstrap-material-design.min.css';
@import '../../../assets/assets/css/icons.css';
@import '../../../assets/assets/css/style.css';
@import '../../../assets/assets/css/sidebar.css';

.wrapper {
	padding-top: 160px !important;
}

.home-footer {
	display: none !important;
}

.home-headerr {
	display: none !important;
}

.slide-bg {
	height: 200px;
	width: 100%;
	background-size: cover !important;
	background-position: center !important;
}
.text-limit {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	line-height: 16px;
	max-height: 97px;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
}
.text-color {
	color: #e6077c;
}
.text-bold {
	font-weight: bold;
}
.router-link-active i {
	background-color: #22b3c6 !important;
}

.router-link-active {
	border-bottom: 0px !important;
}
</style>