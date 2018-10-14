<template>
    <div>
        <styles/>
        <styles/>
        <loader v-if="loading"/>
         <section>
            <div class="container">
                <div class="row">
                <div id="page1">
                    <div class="round" align="center">
                
                    <h3 class="text-center col-p">Login to Cast.i.ng Manager</h3>
                    <small class="text-center col-pk">ACCESS YOUR ACCOUNT LOGIN TODAY</small>

                    <div style="margin-top: 12px;" class="alert alert-danger" v-if="error">{{ error }}</div>

                    <form class="msform mt-4" @submit.prevent="login">
                        
                        <input v-model="email" class="mb-2" type="email" placeholder="Email" />
                        
                        <input v-model="password" class="mb-2" type="password" placeholder="Password" />

                        <button type="submit" class="btn btn-ppd btn-block wd">
                            <img v-if="formLoading" class="form-loader" src="../../assets/images/white-loader.svg" alt="Loader" />
                            <span v-if="!formLoading">Log In</span>
                        </button>

                        Don't have an account?
                        <router-link class="col-pk" v-bind:to="'/register'">Create an account</router-link>
                        <br>
                        <router-link class="col-pk" v-bind:to="'/Forgotpassword'">Forgot Password?</router-link>
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
	name: 'Login',
	components: {
		loader: Loader,
		styles: Styles,
	},
	data() {
		return {
            loading: true,
            email: '',
            password: '',
            formLoading: false,
            error: false,
            notExist: ""
		};
    },
    methods: {
        login () {

           let form = new FormData();

           form.append('email',this.email );
           form.append('password',this.password );

            // this.$http.post('/login', { email: this.email, password: this.password })
            // .then(request => this.loginSuccessful(request))
            // .catch(() => this.loginFailed())

            // this.$http.post('/create', { name: this.name, salary: this.salary, age: this.age })
            // .then(request => this.loginSuccessful(request))
            // .catch(() => this.loginFailed())

            // axios.post('http://api.cast.i.ng/login', form)
            // .then(function(response){
            //     console.log(response);
            //      this.notExist = response;
            // })
            // .catch(
            //     () => this.loginFailed()
            // )        

            this.formLoading = true;

            const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

            axios.post(API_URL + '/login', form).then(result => {

                this.formLoading = false;

                if(!result.data.status_msg){
                    this.loginSuccessful(result.data)
                }
                
                console.log(result.data)
                this.error = result.data.status_msg;
                }, error => {
                    () => this.loginFailed()
                    console.error(error);
                });
        },


        loginSuccessful (req) {
            console.log(req.role);
            
            if (!req.user_id) {
                this.loginFailed()
                return
            }

            if (req.role == "actor") {
                localStorage.token = req.user_id
                this.error = false  
                this.$router.replace(this.$route.query.redirect || '/dashboard/home')
            } 
            else if(req.role == "casting-director"){
                localStorage.token = req.user_id
                this.error = false  
                this.$router.replace(this.$route.query.redirect || '/director/home')
            }

        },

        loginFailed () {
            this.error = 'Login failed!'
            delete localStorage.token
        },

        checkCurrentLogin (req) {
            if (localStorage.token) {
                if(req.role == "actor"){
                    this.$router.replace(this.$route.query.redirect || '/dashboard/home')
                } else if(req.role == "casting-director"){
                    this.$router.replace(this.$route.query.redirect || '/director/home')
                }
            }
        }
    },
    updated () {
        this.checkCurrentLogin()
    },
    created () {
        this.checkCurrentLogin()
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

.form-loader{
    width: 22px;
}
</style>