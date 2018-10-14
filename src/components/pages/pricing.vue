<template>
    <div>
        <styles/>
        <loader v-if="loading"/>
        <header class="sub-ban-2">
            <div class="container about-headd" style="padding-top: 175px;">
                <div class="row">
                    <div class="col-lg-7 mx-auto text-white text-center">
                        <h2>The best talents in the land get hired here</h2>
                        <p>We provide the the most convenient place for talented actors and the casting Directors who need their
                            services to meet, and get work started.</p>
                    </div>
                </div>
            </div>
        </header>


<section id="prices r-prices">
    <div class="container">
        <div class="my-4" align="center">
            <small class="r-small">SELECT A SUBCRIPTION PLAN</small>
            <h1 class="col-p slider-head">Subscription to a Package</h1>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-12">
                <div class="table-responsive">
                    <table class="pricing-table">
                        <tbody>
                            <tr>
                                <td width="30%" class="pricing-table-text">
                                    <h2 class="mr-1 table-nnn">Select the package that best suits your needs.</h2>
                                    <p id="col-pk">Pay monthly, or save big with an annual subscription.</p>
                                </td>
                                <td width="20%">
                                    <div class="pricing-table-item">
                                        <div class="pricing-table-item-head" id="bdg">
                                            <p>FREEMIUM</p>
                                        </div>
                                        <div class="pricing-table-item-purchase" style="padding: 0px; border-radius:  0px;">
                                            <button class="btn btn-ppd btn-block" style="border-radius:  0px; border-top: 2px solid #630071;">Register Now</button>
                                        </div>
                                    </div>
                                </td>
                                <td width="20%">
                                    <div class="pricing-table-item">
                                        <div class="pricing-table-item-head" id="bdg1">
                                            <p>PREMIUM</p>
                                        </div>
                                        <div class="pricing-table-item-purchase" style="padding:  0px;">
                                            <button type="button" data-toggle="modal" data-target="#exampleModal" class="myBtn btn btn-bb btn-primary" style="border-radius:  0px;width:  100%;border-top: 2px solid #52d4e6;">Get Started</button>
                                        </div>
                                    </div>
                                </td>
                                <td width="20%">
                                    <div class="pricing-table-item">
                                        <div class="pricing-table-item-head" id="bdg2" style="padding: 29px 0px;margin-top: 0px;">
                                            <p>TITANIUM</p>
                                        </div>
                                        
                                    </div>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Create a Full Profile Resume</td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Add Headshots</td>
                                <td>1</td>
                                <td>10</td>
                                <td>10</td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Add Video Reel</td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Add Voice Reel</td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>View Audition Notices</td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Apply and Book Unlimited Auditions</td>
                                <td>1</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Health Insurance</td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Monthly Spa Treatment</td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Gym Registration</td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Stylist and Wardrobe Consultation</td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                            <tr class="pricing-table-list">
                                <td>Voice training</td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-times text-danger"></i>
                                </td>
                                <td>
                                    <i class="fa fa-check text-success"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
	name: 'pricing',
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
.pricing-table {
	margin-bottom: 100px;
}
</style>