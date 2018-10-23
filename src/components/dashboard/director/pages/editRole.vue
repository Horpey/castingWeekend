<template>
    <div>
        <loader v-if="loading" />
        <div class="card m-b-30">
            <div class="card-body">

                <p class="cv1">
                    Edit <b class="col-ppd">{{project_title}}</b> Audition Role
                </p>
                <form class="msform mt-2" @submit.prevent="editRole">
                    <div id="room_fileds">
                        <b>Role name:</b>
                        <span class="bmd-form-group">
                            <input class="mb-2" placeholder="Role name" type="text" v-model="title" required="">
                        </span>

                        <div class="row" style="margin-bottom: 10px">
                            <div class="col-lg-11">
                                <b>Gender</b> <small><i>check box if attribute is compulsory</i></small>
                                <span class="bmd-form-group is-filled">
                                    <select class="mb-2" v-model="gender" required="">
                                        <option value="">Gender</option>
                                        <option value="0">Female</option>
                                        <option value="1">Male</option>
                                    </select>
                                </span>
                            </div>

                            <div class="col-lg-1">
                                <label class="form-check-label mt-4">
                                    <!-- <input type="checkbox" class="" v-model="attr_gender" value="1"> -->
                                </label>
                            </div>
                        </div>


                        <div class="row" style="margin-bottom: 10px">
                            <div class="col-lg-11">
                                <b>Complexion</b> <small><i>check box if attribute is compulsory</i></small>
                                <span class="bmd-form-group is-filled">
                                    <select class="mb-2" v-model="complexion_id">
                                        <option value="">Select Complexion</option>
                                        <option value="1">Light skin</option>
                                        <option value="2">Fair skin</option>
                                        <option value="3">Medium skin</option>
                                        <option value="4">Olive skin</option>
                                        <option value="5">Tan brown skin</option>
                                        <option value="6">Black brown skin</option>
                                    </select>
                                </span>
                            </div>

                            <div class="col-lg-1">
                                <label class="form-check-label mt-4">
                                    <!-- <input type="checkbox" class="" v-model="attr_complexion" value="1"> -->
                                </label>
                            </div>
                        </div>


                        <div class="row" style="margin-bottom: 10px">

                            <div class="col-lg-11">
                                <b>Languages: </b> <small><i>check box if attribute is compulsory</i></small>
                                <span class="bmd-form-group is-filled"><select v-model="language_id" multiple class="mb-2"
                                        style="margin-top: 8px;">
                                        <option value="">Select Language</option>
                                        <option value="1">English</option>
                                        <option value="2">Afar</option>
                                        <option value="3">Abkhazian</option>
                                        <option value="4">Afrikaans</option>
                                        <option value="5">Amharic</option>
                                        <option value="6">Arabic</option>
                                        <option value="7">Assamese</option>
                                        <option value="8">Aymara</option>
                                        <option value="9">Azerbaijani</option>
                                        <option value="10">Bashkir</option>
                                        <option value="11">Belarusian</option>
                                        <option value="12">Bulgarian</option>
                                        <option value="13">Bihari</option>
                                        <option value="14">Bislama</option>
                                        <option value="15">Bengali/Bangla</option>
                                        <option value="16">Tibetan</option>
                                        <option value="17">Breton</option>
                                        <option value="18">Catalan</option>
                                        <option value="19">Corsican</option>
                                        <option value="20">Czech</option>
                                        <option value="21">Welsh</option>
                                        <option value="22">Danish</option>
                                        <option value="23">German</option>
                                        <option value="24">Bhutani</option>
                                        <option value="25">Greek</option>
                                        <option value="26">Esperanto</option>
                                        <option value="27">Spanish</option>
                                        <option value="28">Estonian</option>
                                        <option value="29">Basque</option>
                                        <option value="30">Persian</option>
                                        <option value="31">Finnish</option>
                                        <option value="32">Fiji</option>
                                        <option value="33">Faeroese</option>
                                        <option value="34">French</option>
                                        <option value="35">Frisian</option>
                                        <option value="36">Irish</option>
                                        <option value="37">Scots/Gaelic</option>
                                        <option value="38">Galician</option>
                                        <option value="39">Guarani</option>
                                        <option value="40">Gujarati</option>
                                        <option value="41">Hausa</option>
                                        <option value="42">Hindi</option>
                                        <option value="43">Croatian</option>
                                        <option value="44">Hungarian</option>
                                        <option value="45">Armenian</option>
                                        <option value="46">Interlingua</option>
                                        <option value="47">Interlingue</option>
                                        <option value="48">Inupiak</option>
                                        <option value="49">Indonesian</option>
                                        <option value="50">Icelandic</option>
                                        <option value="51">Italian</option>
                                        <option value="52">Hebrew</option>
                                        <option value="53">Japanese</option>
                                        <option value="54">Yiddish</option>
                                        <option value="55">Javanese</option>
                                        <option value="56">Georgian</option>
                                        <option value="57">Kazakh</option>
                                        <option value="58">Greenlandic</option>
                                        <option value="59">Cambodian</option>
                                        <option value="60">Kannada</option>
                                        <option value="61">Korean</option>
                                        <option value="62">Kashmiri</option>
                                        <option value="63">Kurdish</option>
                                        <option value="64">Kirghiz</option>
                                        <option value="65">Latin</option>
                                        <option value="66">Lingala</option>
                                        <option value="67">Laothian</option>
                                        <option value="68">Lithuanian</option>
                                        <option value="69">Latvian/Lettish</option>
                                        <option value="70">Malagasy</option>
                                        <option value="71">Maori</option>
                                        <option value="72">Macedonian</option>
                                        <option value="73">Malayalam</option>
                                        <option value="74">Mongolian</option>
                                        <option value="75">Moldavian</option>
                                        <option value="76">Marathi</option>
                                        <option value="77">Malay</option>
                                        <option value="78">Maltese</option>
                                        <option value="79">Burmese</option>
                                        <option value="80">Nauru</option>
                                        <option value="81">Nepali</option>
                                        <option value="82">Dutch</option>
                                        <option value="83">Norwegian</option>
                                        <option value="84">Occitan</option>
                                        <option value="85">(Afan)/Oromoor/Oriya</option>
                                        <option value="86">Punjabi</option>
                                        <option value="87">Polish</option>
                                        <option value="88">Pashto/Pushto</option>
                                        <option value="89">Portuguese</option>
                                        <option value="90">Quechua</option>
                                        <option value="91">Rhaeto-Romance</option>
                                        <option value="92">Kirundi</option>
                                        <option value="93">Romanian</option>
                                        <option value="94">Russian</option>
                                        <option value="95">Kinyarwanda</option>
                                        <option value="96">Sanskrit</option>
                                        <option value="97">Sindhi</option>
                                        <option value="98">Sangro</option>
                                        <option value="99">Serbo-Croatian</option>
                                        <option value="100">Singhalese</option>
                                        <option value="101">Slovak</option>
                                        <option value="102">Slovenian</option>
                                        <option value="103">Samoan</option>
                                        <option value="104">Shona</option>
                                        <option value="105">Somali</option>
                                        <option value="106">Albanian</option>
                                        <option value="107">Serbian</option>
                                        <option value="108">Siswati</option>
                                        <option value="109">Sesotho</option>
                                        <option value="110">Sundanese</option>
                                        <option value="111">Swedish</option>
                                        <option value="112">Swahili</option>
                                        <option value="113">Tamil</option>
                                        <option value="114">Telugu</option>
                                        <option value="115">Tajik</option>
                                        <option value="116">Thai</option>
                                        <option value="117">Tigrinya</option>
                                        <option value="118">Turkmen</option>
                                        <option value="119">Tagalog</option>
                                        <option value="120">Setswana</option>
                                        <option value="121">Tonga</option>
                                        <option value="122">Turkish</option>
                                        <option value="123">Tsonga</option>
                                        <option value="124">Tatar</option>
                                        <option value="125">Twi</option>
                                        <option value="126">Ukrainian</option>
                                        <option value="127">Urdu</option>
                                        <option value="128">Uzbek</option>
                                        <option value="129">Vietnamese</option>
                                        <option value="130">Volapuk</option>
                                        <option value="131">Wolof</option>
                                        <option value="132">Xhosa</option>
                                        <option value="133">Yoruba</option>
                                        <option value="134">Chinese</option>
                                        <option value="135">Zulu</option>
                                    </select></span>
                            </div>
                            <div class="col-lg-1">
                                <label class="form-check-label mt-4">
                                    <!-- <input type="checkbox" class="" v-model="attr_language" value="1"> -->
                                </label>
                            </div>


                        </div>


                        <div class="row" style="margin-bottom: 10px">
                            <div class="col-lg-11">
                                <b>Age Range: </b> <small><i>check box if attribute is compulsory</i></small>

                                <span class="bmd-form-group">
                                    <input class="mb-2" placeholder="Minimum Age" type="number" v-model="age_min"
                                        required="">
                                </span>

                                <span class="bmd-form-group">
                                    <input class="mb-2" placeholder="Maximum Age" type="number" v-model="age_max"
                                        required="">
                                </span>
                            </div>
                            <div class="col-lg-1">
                                <label class="form-check-label mt-4">
                                    <!-- <input type="checkbox" class="" v-model="attr_age" value="1"> -->
                                </label>
                            </div>
                        </div>


                        <b>Description</b>
                        <span class="bmd-form-group">
                            <textarea class="mb-2" col="10" v-model="description"></textarea>
                        </span>

                        <b>Role Type</b>

                        <span class="bmd-form-group is-filled">
                            <select v-model="type_id" class="mb-2" required="">
                                <option value="">--Select--</option>
                                <option v-for="projectRole in projectRoles.data.list" :value="projectRole.id">{{projectRole.title}}</option>
                            </select></span>
                        </span>

                        <b>Attach Character Bible:</b>
                        <input class="mb-2" type="file" @change="processBible($event)">

                        <b>Attach Audition script:</b>
                        <input class="mb-2" type="file" @change="processScript($event)">

                    </div>

                    <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }"
                        v-if="error">{{
                        error }}</div>

                    <div class="">
                        <button type="submit" class="btn btn-ppd wd">
                            <img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg"
                                alt="Loader" />
                            <span v-if="!formLoading">Save Role</span>
                        </button>
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
        name: 'editRole',
        data() {
            return {
                loading: true,
                detailID: '',
                error: '',
                detailsData: '',
                formLoading: '',
                editRoleData: '',
                title: '',
                gender: '',
                attr_gender: '',
                age_min: '',
                age_max: '',
                attr_age: '',
                complexion_id: '',
                attr_complexion: '',
                description: '',
                type_id: '',
                language_id: [],
                attr_language: '',
                characterbible: '',
                script: '',
                projectRoles: '',
                project_title: ''
            };
        },
        components: {
            loader: Loader,
        },
        mounted() {
            let roleID = this.$route.params.id;

            // this.detailID = roleID;

            this.token = JSON.parse(localStorage.getItem('token'));
            console.log(this.token);


            var config = {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            };

            let userID = JSON.parse(localStorage.getItem('token'));
            axios({
                method: "GET",
                "url": 'https://api.cast.i.ng/project/viewrole/' + roleID,
                config
            }).then(result => {
                this.editRoleData = result;

                console.log(this.editRoleData.data.name);

                this.project_title = this.editRoleData.data.project_title;

                this.title = this.editRoleData.data.name;
                this.gender = this.editRoleData.data.gender;
                // this.attr_gender= this.editRoleData.data.;
                this.age_min = this.editRoleData.data.age_min;
                this.age_max = this.editRoleData.data.age_max;
                // this.attr_age= this.editRoleData.data.;
                this.complexion_id = this.editRoleData.data.complexion_id;
                // this.attr_complexion= this.editRoleData.data.;
                this.description = this.editRoleData.data.description;
                this.type_id = this.editRoleData.data.type_id;
                this.language_id = this.editRoleData.data.language;
                // this.attr_language= this.editRoleData.data.;
                this.characterbible = this.editRoleData.data.characterbible;
                this.script = this.editRoleData.data.script;
                this.projectRoles = this.editRoleData.data.type_id;



            }, error => {

                console.log('API CALL FAILED');
                console.error(error);
            });


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

            // Get Project Roles
            axios({
                method: "GET",
                "url": 'http://api.cast.i.ng/projectroles',
                config
            }).then(result => {
                this.loading = false;
                this.projectRoles = result;
            }, error => {
                this.loading = false;
                console.log('API CALL FAILED');
                console.error(error);
            });
        },
        methods: {
            editRole() {
                let form = new FormData();

                form.append('title', this.title);
                form.append('gender', this.gender);
                // form.append('attr_gender', this.attr_gender);
                form.append('age_min', this.age_min);
                form.append('age_max', this.age_max);
                // form.append('attr_age', this.attr_age);
                form.append('complexion_id', this.complexion_id);
                // form.append('attr_complexion', this.attr_complexion);
                form.append('description', this.description);
                form.append('type_id', this.type_id);
                form.append('language_id', this.language_id);
                // form.append('attr_language', this.attr_language);
                form.append('characterbible', this.characterbible);
                form.append('script', this.script);



                this.formLoading = true;

                let userID = JSON.parse(localStorage.getItem('token'));
                let projectID = this.$route.params.id;

                const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

                axios.post(API_URL + '/project/editrole/' + userID + '/' + projectID, form).then(result => {

                    console.log(userID);
                    this.formLoading = false;

                    console.log(result.data)

                    this.error = result.data.status_msg;
                    this.status = result.data.status;

                    // this.$router.replace(this.$route.query.redirect || '/director/profile')

                }, error => {
                    this.formLoading = false;
                    console.error(error);
                    console.log('API CALL FAILED')
                    this.error = "Failed to save Role";
                });
            }
        }
    };
</script>

<style>
    .msform input[type='url'],
    .msform input[type='number'] {
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
        box-sizing: border-box;
        color: #2c3e50;
        font-size: 13px;
    }

    .form-loader {
        width: 22px;
    }

    .success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }

    .danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }

    .btn-ppd:hover {
        background-color: #3f0047 !important;
        color: white !important;
    }
</style>