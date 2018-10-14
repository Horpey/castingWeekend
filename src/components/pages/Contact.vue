<template>
    <div>
      <styles/>
      <loader v-if="loading"/>
         <header class="sub-ban1 clippath" :style="{'background': 'linear-gradient(180deg, #000c, #00000080), url('+ require ('../../assets/images/ban1.jpg') + ')'}">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mx-auto text-white pt-c2">
            <h4>Contact Us</h4>
            <small>HOME</small>
            <i class="fa fa-angle-double-right mr-2 ml-2"></i>
            <small>Contact</small>
          </div>
        </div>
      </div>
    </header>


    <section class="sec-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <form class="msform mt-4" method="post">
              <div class="row">
                <div class="col-lg-12">
                  <b>Type of Enquiry</b>
                  <select name="">
                    <option value=" ">-- Please select --</option>
                    <option value="Technical Enquiry">Technical Enquiry</option>
                    <option value="Application Enquiry">Application Enquiry</option>
                    <option value="Accounts Enquiry">Accounts Enquiry</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <b>Full Name</b>
                  <input class="mb-2" type="text" placeholder="Full Name" />
                  <b>Company</b>
                  <input class="mb-2" type="password" placeholder="Password" />
                </div>
                <div class="col-lg-6">
                  <b>Email Address</b>
                  <input class="mb-2" type="text" placeholder="Email Address" />
                  <b>Contact Number</b>
                  <input class="mb-2" type="password" placeholder="Password" />
                </div>
                <div class="col-lg-12">
                  <b>Your Message</b>
                  <textarea class="mb-2" row=""></textarea>
                  <button type="submit" class="btn btn-ppd mt-3">Send Message</button>
                </div>
              </div>
            </form>
          </div>


          <div class="col-lg-4">
            <h2 class="col-p slider-head mt-5">Cast.i.ing Contact Details</h2>
            <p>Feel free to contact us for questions</p>
            <b>Address:</b> info@cast.ing.com
            <br>
            <b>Email:</b> info@cast.ing.com
            <br>
            <b>Phone:</b> 08073678212, 09083792998
            <br>
            <br>

            <a href="#">
              <i class="fa fa-2x fa-facebook-square" style="color:#3b5998;"></i>
            </a>
            <a href="#">
              <i class="fa fa-2x fa-twitter-square" style="color:#08a0e9;"></i>
            </a>
            <a href="#">
              <i class="fa fa-2x fa-linkedin-square" style="color:#0077b5;"></i>
            </a>
            <a href="#">
              <i class="fa fa-2x fa-instagram" style="color:#da1a42;"></i>
            </a>

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
	name: 'Contact',
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
</style>