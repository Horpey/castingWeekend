<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <auditiontab/>
                <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-auditions" role="tabpanel" aria-labelledby="nav-auditions-tab">
                        <div class="mt-2">
                            <allAuditions/>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-my-auditions" role="tabpanel" aria-labelledby="nav-my-auditions-tab">
                    <div class="mt-2">
                            <myAuditions/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
import auditiontab from '../template/auditiontab';

import allAuditions from './allAuditions';
import myAuditions from './myAuditions';

export default {
	name: 'auditions',
	data() {
		return {
			loading: true,
		};
	},
	components: {
		auditiontab: auditiontab,
		allAuditions: allAuditions,
		myAuditions: myAuditions,
		loader: Loader,
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
.img-fluid{
	width: 100%!important;
}
</style>