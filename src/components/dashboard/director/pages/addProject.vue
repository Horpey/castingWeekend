<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">
                <p class="cv1">
                    <b class="col-ppd">Add Project</b>
                <router-link class="mdb float-right" v-bind:to="'/director/projects'">View Project</router-link>

                </p>

                <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/saveproject" enctype="multipart/form-data" _lpchecked="1">
                <div class="add-project-group">
                        <b>Project Title:</b>
                        <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Project Title" name="title" required=""></span>   
                        
                        <b>Project type</b>
                        <span class="bmd-form-group is-filled">
                        <select class="mb-2" name="type_id" required="">
                            <option value="">Select Project Type</option>
                                <option value="1">TV Series</option>
                                <option value="2">Sitcom</option>
                                <option value="3">Feature Film</option>
                                <option value="9">Web Series</option>
                                <option value="10">Theater</option>
                        </select></span>
                        <b>Project description</b>
                        <span class="bmd-form-group"><textarea class="mb-2" col="10" name="description" required=""></textarea></span>

                        <div class="row">
                            <div class="col-lg-6">
                                <b>Minimum Pay</b>
                                <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Minimum Pay" name="payrange_min" required=""></span>  
                            </div>

                            <div class="col-lg-6">
                                <b>Maximum Pay</b>
                                <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Maximum Pay" name="payrange_max" required=""></span>  
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-lg-6">
                                <b>City of audition:</b>
                                <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="City of audition" name="project_city" required=""></span>
                            </div>

                            <div class="col-lg-6">
                                <b>City of shoot:</b>
                                <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="City of shoot" name="shoot_city" required=""></span>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-6">
                                <b>Speculated Date of shoot:</b>
                                <span class="bmd-form-group"><input class="mb-2 inputdatepicker is-datepick" type="text" placeholder="Speculated Date of shoot" name="shoot_date" required=""></span>
                            </div>
                            
                            <div class="col-lg-6">
                                <b>Date to take down ad:</b>
                                <span class="bmd-form-group"><input class="mb-2 inputdatepicker is-datepick" type="text" placeholder="Date to take down ad" name="expire_date" required=""></span>
                            </div>
                        </div>      

                        <b>How did you hear about us?</b>
                        <span class="bmd-form-group"><textarea class="mb-2" col="10" name="hearabout"></textarea></span>


                        <!-- <div class="row"> -->
                            <!-- <div class="col-lg-6"> -->
                        <b>Project Image</b>
                        <input class="" type="file" name="image" required="">
                            <!-- </div> -->
                        <!-- </div>  -->

                        <!-- <div class="mb-4 tags-input" style="margin-top: 10px">
                            <input type="text" value="" data-role="tagsinput" placeholder="Add Tags" name="tags" /> </div> -->
                    </div>
                    <!-- <div class="cloned-add">
                    </div> -->
                    <div class="">
                        <!-- <button class="btn btn-blu border-0 addmore-btn"> -->
                            <!-- <span class="fa fa-plus mr-3"></span>Add More</button> -->
                        <input class="btn btn-ppd border-0" value="Submit Project" type="submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
    name: 'addProject',
    data() {
        return {
            loading: true,
        };
    },
    components: {
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
</style>