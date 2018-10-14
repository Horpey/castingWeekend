<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">

                <div>
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-6">
                            <p class="cv1">
                                <b class="col-ppd">Attributes</b>
                            </p>
                            <div>

                                <b>Gender:</b> 
                                <span class="float-right">{{profileData.data.attributes.gender}}</span> 

                                <div class="bline"></div>
                                <b>Height:</b> <span class="float-right">{{profileData.data.attributes.height}} </span> 

                                <div class="bline"></div> 
                                <b>Weight:</b> <span class="float-right">{{profileData.data.attributes.weight}}</span> 
                                
                                <div class="bline"></div> 
                                <b>Body Mass (in KG):</b> <span class="float-right">{{profileData.data.attributes.body_mass}} kg</span>      
                            </div>

                        </div>
                        
                        <div class="col-md-6">
                            <p class="cv1">
                                <b class="col-ppd">Sizes</b>
                            </p>
                            <div>

                                 <div class="bline"></div> 
                                 <b>Shirt Size (in Inches):</b> <span class="float-right">{{profileData.data.attributes.shirt_size}} In</span> 

                                 <div class="bline"></div> 
                                 <b>Waist Size (in Inches):</b> <span class="float-right">{{profileData.data.attributes.shirt_size}} In</span>

                                <div class="bline"></div>
                                <b>Trouser length (in Inches):</b> 
                                <span class="float-right">{{profileData.data.attributes.trouser_length}} In</span> 

                                <div class="bline"></div>
                                <b>Shoulder length (in Inches):</b> <span class="float-right">{{profileData.data.attributes.shoulder_length}} In</span> 

                                <div class="bline"></div> 
                                <b>Jacket size:</b> <span class="float-right">{{profileData.data.attributes.jacket_size}} In</span> 

                                <div class="bline"></div> 
                                <b>Shoe Size:</b> <span class="float-right">{{profileData.data.attributes.shoe_size}} In</span>

                            </div>
                        </div>
                    </div>
                    <p class="cv1">
                        <b class="col-ppd">Feature Film</b>

                        <a class="mdb float-right text-white" data-toggle="modal" data-target="#addfilm" style="cursor: pointer;">Add Film</a>

                    </p>

                    <div class="mt-2">
                        <table class="table table-striped mb-0">
                            <tr>
                                <td>
                                    <b>Year</b>
                                </td>
                                <td>
                                    <b>Film</b>
                                </td>
                                <td>
                                    <b>Role</b>
                                </td>
                                <td>
                                    <b>Director</b>
                                </td>
                                <td>
                                    <b>Production Company</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>

                            <tbody>
                                <tr v-for="feature in profileData.data.featurefilm">
                                    <td>
                                        <i class="fa fa-calendar"></i> {{feature.year}}</td>
                                    <td>{{feature.film}}</td>
                                    <td>{{feature.role}}</td>
                                    <td>{{feature.director}}</td>
                                    <td>{{feature.production_company}}</td>
                                    <td>
                                        <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                        <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">TV Series</b>

                            <a class="mdb float-right text-white" data-toggle="modal" data-target="#addtv" style="cursor: pointer;">Add TV</a>

                        </p>
                        <table class="table table-striped mb-0">
                            <tr>
                                <td>
                                    <b>Year</b>
                                </td>
                                <td>
                                    <b>Film</b>
                                </td>
                                <td>
                                    <b>Role</b>
                                </td>
                                <td>
                                    <b>Director</b>
                                </td>
                                <td>
                                    <b>Production Company</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>
                            <tbody>
                                <tr v-for="tv in profileData.data.tvseries">
                                    <td>
                                        <i class="fa fa-calendar"></i> {{tv.year}}</td>
                                    <td>{{tv.film}}</td>
                                    <td>{{tv.role}}</td>
                                    <td>{{tv.director}}</td>
                                    <td>{{tv.production_company}}</td>
                                    <td>
                                        <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                        <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">Web Series</b>

                            <a class="mdb float-right text-white" data-toggle="modal" data-target="#addweb" style="cursor: pointer;">Add WEB</a>
                        </p>
                        <table class="table table-striped mb-0">
                            <tr>
                                <td>
                                    <b>Year</b>
                                </td>
                                <td>
                                    <b>Film</b>
                                </td>
                                <td>
                                    <b>Role</b>
                                </td>
                                <td>
                                    <b>Director</b>
                                </td>
                                <td>
                                    <b>Production Company</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>
                            <tbody>
                                <tr v-for="web in profileData.data.webseries">
                                    <td>
                                        <i class="fa fa-calendar"></i> {{web.year}}</td>
                                    <td>{{web.film}}</td>
                                    <td>{{web.role}}</td>
                                    <td>{{web.director}}</td>
                                    <td>{{web.production_company}}</td>
                                    <td>
                                        <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                        <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">Theater/Stage Plays</b>

                            <a class="mdb float-right text-white" data-toggle="modal" data-target="#addtheater" style="cursor: pointer;">Add Theatre</a>
                        </p>

                        <div class="mt-2">
                            <table class="table table-striped mb-0">
                                <tr>
                                    <td>
                                        <b>Year</b>
                                    </td>
                                    <td>
                                        <b>Film</b>
                                    </td>
                                    <td>
                                        <b>Role</b>
                                    </td>
                                    <td>
                                        <b>Director</b>
                                    </td>
                                     <td>
                                        <b>Production Company</b>
                                    </td>
                                    <td>
                                        <b>Action</b>
                                    </td>
                                </tr>
                                <tbody>
                                    <tr v-for="theater in profileData.data.theater">
                                        <td>
                                            <i class="fa fa-calendar"></i> {{theater.year}}</td>
                                        <td>{{theater.film}}</td>
                                        <td>{{theater.role}}</td>
                                        <td>{{theater.director}}</td>
                                        <td>{{theater.production_company}}</td>
                                        <td>
                                            <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                            <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">Social Handles</b>
                            <a class="mdb float-right text-white" data-toggle="modal" data-target="#addsocial" style="cursor: pointer;">Add</a>
                        </p>

                        <a :href="profileData.data.social.facebook">
                            <i class="fa fa-2x fa-facebook-square" style="color:#3b5998;"></i>
                        </a>
                        <a :href="profileData.data.social.twitter">
                            <i class="fa fa-2x fa-twitter-square" style="color:#08a0e9;"></i>
                        </a>
                        <a :href="profileData.data.social.linkedln">
                            <i class="fa fa-2x fa-linkedin-square" style="color:#0077b5;"></i>
                        </a>
                        <a :href="profileData.data.social.instagram">
                            <i class="fa fa-2x fa-instagram" style="color:#da1a42;"></i>
                        </a>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">Trainings And Education</b>

                            <a class="mdb float-right text-white" data-toggle="modal" data-target="#addeducation" style="cursor: pointer;">Add Education</a>
                        </p>

                        <table class="table table-striped mb-0">

                            <tbody>
                                <tr v-for="education in profileData.data.education">
                                    <td>
                                        <i class="fa fa-calendar"></i> {{education.year}}</td>
                                    <td>{{education.school}}</td>
                                    <td>{{education.certificate}}</td>
                                    <td class="float-right">
                                        <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                        <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">Photo</b>
                            <router-link class="mdb float-right" v-bind:to="'/dashboard/photo'">View All Photo</router-link>
                        </p>

                        <div class="row no-gutters mt-2">
                            <div class="col-md-3 p-1" v-for="photo in photoData.data.list">
                                <a :href="siteUrl + photo.image" data-fancybox="gallery">
                                    <img class="rounded mx-auto d-block img-fluid" alt="200x200" :src="siteUrl + photo.image" data-holder-rendered="true" /> 
                                    <a href="#" class="mv"><i class="fa fa-trash-o"></i> Delete</a>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">Video</b>

                            <router-link class="mdb float-right" v-bind:to="'/dashboard/video'">View All Video</router-link>

                        </p>


                        <div class="row no-gutters mt-2">
                            <div class="col-md-6 bline" v-for="video in videoData.data.list">
                                <div class="row">
                                    <div class="col-md-6 p-1">
                                         <a data-fancybox="gallery" :href='"https://www.youtube.com/watch?v=_sI_Ps7JSEk"+video.youtube_link'>         
                                            <img class="rounded  mx-auto d-block img-fluid" alt="200x200" :src="video.image" />  
                                        </a>                                            
                                    </div>
                           
                                    <div class="col-md-6">
                                        <p><b>Title:</b>{{video.title}}</p>
                                        <p><b>Year:</b> {{video.year}}</p>
                                        <p><b>Role:</b>{{video.type}}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="mt-3">
                        <p class="cv1">
                            <b class="col-ppd">Audio</b>
                             <router-link class="mdb float-right" v-bind:to="'/dashboard/audio'">View All Audio</router-link>
                        </p>

                        <table class="table table-striped mb-0">
                            <tbody><tr>
                                <td><b>Year</b></td>
                                <td><b>Title</b></td>
                                <td><b>Role</b></td>
                                <td><b>Listen</b></td>
                                <td><b>Action</b></td>
                            </tr>

                            </tbody><tbody>
                                <tr v-for="audio in audioData.data.list">
                                    <td>{{audio.year}}</td>
                                    <td>{{audio.title}}</td>
                                    <td>{{audio.type}}</td>
                                    <td><a :href="audio.youtube_link" class="btn" target="_blank">Click To Listen</a></td>
                                    <td>
                                        <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                    <a href="#" onclick="return confirm('Are you sure?');" class="btn btn-outline-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
	name: 'profile',
	data() {
		return {
			loading: true,
            profileData: "",
            token: '',
            photoData: '',
            videoData: '',
            audioData: '',
            siteUrl: "http://stage.cast.i.ng/",
		};
	},
	components: {
		loader: Loader,
	},
	mounted() {
        this.token = JSON.parse(localStorage.getItem('token'));
        console.log(this.token);

        this.loading = true;

        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        let userID = JSON.parse(localStorage.getItem('token'));
        // console.log(userID);

        axios({ method: "GET", "url": 'http://api.cast.i.ng/userdetails/'+userID , config }).then(result => {
            this.loading = false;
            this.profileData = result;
        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });

        // Photos API
        axios({ method: "GET", "url": 'http://api.cast.i.ng/myphoto/'+userID+'?limit=3' , config }).then(result => {
            this.loading = false;
            this.photoData = result;
        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });

        // Video API
        axios({ method: "GET", "url": 'http://api.cast.i.ng/myvideo/'+userID+'?limit=2' , config }).then(result => {
            this.loading = false;
            this.videoData = result;
        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });

        // Audio API
        axios({ method: "GET", "url": 'http://api.cast.i.ng/myaudio/'+userID , config }).then(result => {
            this.loading = false;
            this.audioData = result;
        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });

	},
};
</script>

<style>
</style>