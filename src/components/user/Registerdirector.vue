<template>
    <div>
      <styles/>
      <loader v-if="loading"/>
<section>
      <div class="container">
        <div class="row">
          <div id="page1">
            <div class="round" align="center">
              <h3 class="text-center col-p">Casting Directors</h3>
              <small class="text-center col-pk">REGISTER TODAY AS AN CASTING DIRECTORS IN CAST.I.NG MANAGER</small>
              <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{ error }}</div>
              <form class="msform mt-4" @submit.prevent="registerActor">
                <input class="mb-2" type="text" v-model="firstname" placeholder="First Name" required="">
                <input class="mb-2" type="text" v-model="lastname" placeholder="Last Name" required="">
                <input class="mb-2" type="text" v-model="username" placeholder="Username" required="">
                <input class="mb-2" type="text" v-model="phone" placeholder="Phone Number" required="">
                <input class="mb-2" type="email" v-model="email" placeholder="Email" required="">  
                <select class="mb-2" v-model="gender" required="">
                  <option value="">Select Gender</option>
                  <option value="0">Female</option>
                  <option value="1">Male</option>
                </select>

               <input class="mb-2" type="password" v-model="password" placeholder="Password" required="">
               <input class="mb-2" type="password" v-model="password2" placeholder="Confirm Password" required="">
               <input class="mb-2" type="file" @change="processFile($event)" placeholder="Upload Picture" accept="image/*">

                <button type="submit" class="btn btn-ppd btn-block wd">
                  <img v-if="formLoading" class="form-loader" src="../../assets/images/white-loader.svg" alt="Loader" />
                  <span v-if="!formLoading">Create an Account</span>
                </button>
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
  name: 'Registerdirector',
  data() {
    return {
      loading: true,
      firstname: '',
      lastname: '',
      username: '',
      phone: '',
      gender: '',
      password: '',
      password2: '',
      image: '',
      email: '',
      status: '',
      formLoading: false,
      error: false,
      notExist: ""
    };
  },
  components: {
    loader: Loader,
    styles: Styles,
  },
  methods: {
    processFile(event) {
      form.append('image', event.target.files[0])
    },

    registerActor () {

      let form = new FormData();

      form.append('firstname',this.firstname );
      form.append('lastname',this.lastname );
      form.append('username',this.username );
      form.append('phone',this.phone );
      form.append('gender',this.gender );
      form.append('password',this.password );
      form.append('password2',this.password2 );
      form.append('email',this.email );
      

      this.formLoading = true;

      console.log(form);

      const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

      axios.post(API_URL + '/signup/director', form).then(result => {

          this.formLoading = false;

          if(!result.data.status_msg){
            this.registerSuccessful(result.data)
          }
          
          console.log(result.data)
          this.error = result.data.status_msg;
          this.status = result.data.status;
          if(this.status){
            // Clear data
            this.firstname = '';
            this.lastname = '';
            this.username = '';
            this.phone = '';
            this.gender = '';
            this.password = '';
            this.password2 = '';
            this.email = '';
            this.image = '';
          }


          }, error => {
              () => this.registerFailed()
              console.error(error);
      });
    },

    registerSuccessful (req) {

      // Clear data
      this.firstname = '';
      this.lastname = '';
      this.username = '';
      this.gender = '';
      this.password = '';
      this.password2 = '';
      this.email = '';
      this.image = '',

        console.log(req.page_type);
        
        if (!req.user_id) {
            this.registerFailed()
            return
        }

        if (req.page_type == "actor") {
            localStorage.token = req.user_id
            this.error = false  
            this.$router.replace(this.$route.query.redirect || '/dashboard/home')
        } 
        else if(req.page_type == "casting-director"){
            localStorage.token = req.user_id
            this.error = false  
            this.$router.replace(this.$route.query.redirect || '/director/home')
        }
    },

    registerFailed () {
      // Clear data
      this.firstname = '';
      this.lastname = '';
      this.username = '';
      this.gender = '';
      this.password = '';
      this.password2 = '';
      this.email = '';
      this.image = '',

        this.error = 'Registration failed!'
        delete localStorage.token
    },
    checkCurrentLogin (req) {

        if (localStorage.token) {
            if(req.page_type == "actor"){
                this.$router.replace(this.$route.query.redirect || '/dashboard/home')
            } else if(req.page_type == "casting-director"){
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
.success{
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.danger{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
</style>