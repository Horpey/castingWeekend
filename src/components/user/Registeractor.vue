<template>
    <div>
      <styles/>
      <loader v-if="loading"/>
         <section>
      <div class="container">
        <div class="row">
          <div id="page1">
            <div class="round" align="center">

              <h3 class="text-center col-p">Actors</h3>
              <small class="text-center col-pk">REGISTER TODAY AS AN ACTORS IN CAST.I.NG MANAGER</small>
              <form class="msform mt-4" method="post" action="#">
                <input class="mb-2" type="text" placeholder="First Name" />
                <input class="mb-2" type="text" placeholder="Last Name" />
                <input class="mb-2" type="text" placeholder="Email" />
                <input class="mb-2" type="text" placeholder="Mobile Number" />
                <input class="mb-2" type="text" placeholder="Date of Birth" />
                <input class="mb-2" type="password" placeholder="Password" />
                <button type="submit" class="btn btn-ppd btn-block wd">Create an Account</button>
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
	name: 'Registeractor',
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