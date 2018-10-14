<template>
    <div>
        <div class="card m-b-30">
            <div class="card-body">
                <img class="wdd float-left mr-4 rounded" src="http://stage.cast.i.ng/img/avatar.jpg" style=" height: 130px">
                <h4 class="mt-0 header-title">Pali</h4>
                <p class="text-muted font-14">
                </p><div class="limit-div">Mainframe Film</div>
                <br>
                
                <router-link class="btn btn-ppd btn-sm" v-bind:to="'/director/editProfile'">Edit</router-link>
                <router-link class="btn btn-blu btn-sm" v-bind:to="'/director/profile'">View</router-link>

                <br>
                
                <div class="bline mt-3"></div>
                <!-- <h5 class="col-ppd">SHORTCUTS</h5> -->


                <i class="mdi mdi-file-document col-pink mr-2"></i>  

                <router-link v-bind:to="'/director/addProject'">Add Project</router-link>

                <div class="bline"></div>   
                <i class="fa fa-user col-pink mr-2"></i>  

                <router-link v-bind:to="'/director/subAdmin'">Manage Admins</router-link>

                <div class="bline"></div>                                   
            </div>
        </div>

        <modal/>
    </div>
</template>

<script>
import Modal from './Modal';

export default {
    name: 'sidebar',
    components: {
        Modal: Modal
    },
};
</script>

<style>
</style>