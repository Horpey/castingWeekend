<template>
    <div>
		<styles/>
        <loader v-if="loading"/>
         <section>
            <div class="container">
                <div class="row">
                <div id="page2">
                    <div class="round" align="center">

                    <h3 class="text-center col-p">Forgot Password</h3>
                    <small class="text-center col-pk">RESET YOUR PASSWORD</small>
                    <form class="msform mt-4" method="post" action="dashboard.html">
                        <input class="mb-2" type="text" placeholder="Email" />
                        <button type="submit" class="btn btn-ppd btn-block wd">Reset Password</button>

                        Don't have an account?
                        <router-link class="col-pk" v-bind:to="'/register'">Create an account</router-link>
                    </form>
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
	name: 'Forgotpassword',
	components: {
		loader: Loader,
		styles: Styles,
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