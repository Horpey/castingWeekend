<template>
    <div>
        <loader v-if="loading" />
        <div class="card m-b-30">
            <div class="card-body">

                <div class=" m-b-30">
                    <div class="card-body">
                        <div class="row">
                            <div class="cv" style="width: 100%;">
                                <div class="col-md-12">
                                    <h2>{{applicantData.data.projectrole.role_name}}</h2>
                                    <p>
                                        <b class="col-ppd">Description</b>:
                                        {{applicantData.data.projectrole.description}}</p>
                                    <p>
                                        <b class="col-ppd">Number of Applicants</b>:
                                        {{applicantData.data.projectrole.applicants}}</p>
                                </div>
                            </div>
                        </div>

                        
                        <router-link class="dropdown-item view-upload" v-bind:to="'/project/createAudition/'" >Create Audition
                                                                    </router-link>
                        <div class="row">
                            <div class="applicantFilter">
                                <form class="msform mt-4" @submit.prevent="queryApplicant">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="filterRate">
                                                <b>Rating:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_star">
                                                        <option>Select One</option>
                                                        <option value="1">One Star</option>
                                                        <option value="2">Two Star</option>
                                                        <option value="3">Three Star</option>
                                                        <option value="4">Four Star</option>
                                                        <option value="5">Five Star</option>
                                                    </select></span>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="filterAge">
                                                <b>Minimum Age:</b><br>
                                                <span class="bmd-form-group is-filled">
                                                    <input v-model="rating_min_age" type="number" placeholder="Age" min="0" max="50" maxlength="2"/>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="filterAge">
                                                <b>Maximum Age:</b><br>
                                                <span class="bmd-form-group is-filled">
                                                    <input v-model="rating_max_age" type="number" placeholder="Age" min="0" max="50" maxlength="2"/>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="filterState">
                                                <b>State:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_state">
                                                        <option value="" disabled>Select State</option>
                                                        <option value="1">Abia State</option>
                                                        <option value="2">Adamawa State</option>
                                                        <option value="3">Akwa Ibom State</option>
                                                        <option value="4">Anambra State</option>
                                                        <option value="5">Bauchi State</option>
                                                        <option value="6">Bayelsa State</option>
                                                        <option value="7">Benue State</option>
                                                        <option value="8">Borno State</option>
                                                        <option value="9">Cross River State</option>
                                                        <option value="10">Delta State</option>
                                                        <option value="11">Ebonyi State</option>
                                                        <option value="12">Edo State</option>
                                                        <option value="13">Ekiti State</option>
                                                        <option value="14">Enugu State</option>
                                                        <option value="15">FCT</option>
                                                        <option value="16">Gombe State</option>
                                                        <option value="17">Imo State</option>
                                                        <option value="18">Jigawa State</option>
                                                        <option value="19">Kaduna State</option>
                                                        <option value="20">Kano State</option>
                                                        <option value="21">Katsina State</option>
                                                        <option value="22">Kebbi State</option>
                                                        <option value="23">Kogi State</option>
                                                        <option value="24">Kwara State</option>
                                                        <option value="25">Lagos State</option>
                                                        <option value="26">Nasarawa State</option>
                                                        <option value="27">Niger State</option>
                                                        <option value="28">Ogun State</option>
                                                        <option value="29">Ondo State</option>
                                                        <option value="30">Osun State</option>
                                                        <option value="31">Oyo State</option>
                                                        <option value="32">Plateau State</option>
                                                        <option value="33">Rivers State</option>
                                                        <option value="34">Sokoto State</option>
                                                        <option value="35">Taraba State</option>
                                                        <option value="36">Yobe State</option>
                                                        <option value="37">Zamfara State</option>
                                                    </select></span>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="filterLanguage">
                                                <b>Language:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_language">
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
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="filterLanguage">
                                                <b>Complexion:</b><br>
                                                <span class="bmd-form-group is-filled"><select v-model="rating_complexion">
                                                        <option disabled="" value="">--Select--</option>
                                                        <option value="1">Light skin</option>
                                                        <option value="2">Fair skin</option>
                                                        <option value="3">Medium skin</option>
                                                        <option value="4">Olive skin</option>
                                                        <option value="5">Tan brown skin</option>
                                                        <option value="6">Black brown skin</option>
                                                    </select></span>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-6 col-xs-6">
                                            <div class="filterLanguage">
                                                <button class="btn btn-primary btn-filter" type="submit">
                                                    <img v-if="formLoading" class="form-loader" src="../../../../assets/images/white-loader.svg"
                                                        alt="Loader" />
                                                        <span class="fa fa-filter"></span> 
                                                    <span v-if="!formLoading">Filter Applicants</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-sm-6 col-xs-6">
                                            <a style="margin-top: 16px;" class="btn btn-primary" v-on:click="clearFilter">
                                                Clear Filter
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="applicantFilter text-right">

                                <a v-if="createAud" style="margin-bottom: 15px;" class="btn btn-primary btn-filter" v-on:click="redirectCreate"><span class="fa fa-plus"></span> <span>Create Auditions for Results</span></a>

                                <!-- <router-link v-if="createAud" class="btn btn-primary btn-filter" v-bind:to="'/project/createAudition/'+createid" style="margin-bottom: 15px;"><span class="fa fa-plus"></span> <span>Create Auditions for Results</span></router-link> -->
                            </div>

                            <!-- Table  -->
                            <div class="mt-4" style="width: 100%;">
                                <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{ error }}</div>

                                <table class="table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input all-check" name=""
                                                            id="" value="checkedValue">
                                                        <b> All</b>
                                                    </label>
                                                </div>
                                            </td>
                                            <td><b>Applicant Name</b></td>
                                            <td><b>Applicant Rating</b></td>
                                            <td><b>Status</b> </td>
                                            <!-- <td><b>Actor Upload</b> </td> -->
                                            <td>
                                                <b>Action</b>
                                            </td>
                                        </tr>

                                    </tbody>
                                    <tbody>
                                        <tr v-if="defaultTable" v-for="applicant in applicantData.data.list">
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label mb-3">
                                                        <input type="checkbox" class="form-check-input all-checked"
                                                            name="" id="" value="checkedValue">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <router-link v-bind:to="'/project/applicantProfile/'+applicant.id">{{applicant.name}}
                                                                    </router-link>
                                            </td>
                                            <td>
                                                <VueStars
                                                    name="demo"
                                                    :max="5"
                                                    :readonly="true"
                                                    :value="applicant.rating"
                                                />
                                                {{applicant.rating}}
                                            </td>
                                            <td>
                                                <span class="badge badge-success">{{applicant.status}}</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        data-toggle="dropdown">
                                                        Action<span class="badge badge-danger noti-icon-badge">1</span><span
                                                            class="caret"></span>
                                                    </button>
                                                    <div id="pos">
                                                        <ul class="dropdown-menu">
                                                            <li>
                                                                    <router-link class="dropdown-item view-upload" v-bind:to="'/project/viewUpload/'+applicant.projectrole_user_id">View Upload
                                                                    </router-link>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="requestVideo(applicant.projectrole_user_id)" class="dropdown-item">Request
                                                                    for video upload</a>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="requestAudio(applicant.projectrole_user_id)" class="dropdown-item">Request
                                                                    for audio upload</a>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="decline(applicant.projectrole_user_id)" class="dropdown-item">Decline</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <!-- Query Table -->
                                        <tr v-if="queryTable" v-for="applicant in filterApplicants">
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label mb-3">
                                                        <input type="checkbox" class="form-check-input all-checked"
                                                            name="" id="" value="checkedValue">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <router-link v-bind:to="'/project/applicantProfile/'+applicant.id">{{applicant.name}}
                                                                    </router-link>
                                            </td>
                                            <td>
                                                <VueStars
                                                    name="applicant.id"
                                                    :max="5"
                                                    :readonly="true"
                                                    :value="applicant.rating"
                                                />
                                                {{applicant.rating}}
                                            </td>
                                            <td>
                                                <span class="badge badge-success">{{applicant.status}}</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        data-toggle="dropdown">
                                                        Action<span class="badge badge-danger noti-icon-badge">1</span><span
                                                            class="caret"></span>
                                                    </button>
                                                    <div id="pos">
                                                        <ul class="dropdown-menu">
                                                            <li>
                                                                    <router-link class="dropdown-item view-upload" v-bind:to="'/project/viewUpload/'+applicant.projectrole_user_id">View Upload
                                                                    </router-link>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="requestVideo(applicant.projectrole_user_id)" class="dropdown-item">Request
                                                                    for video upload</a>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="requestAudio(applicant.projectrole_user_id)" class="dropdown-item">Request
                                                                    for audio upload</a>
                                                            </li>
                                                            <li>
                                                                <a v-on:click="decline(applicant.projectrole_user_id)" class="dropdown-item">Decline</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <!-- Query Table -->
                                    </tbody>
                                </table>
                            </div>

                            

                            <!-- Good Table -->
                            <div class="" style="margin-top: 20px;">
                                <vue-good-table style="width: 100%" :columns="columns" :rows="rows" :fixed-header="true"
                                    @on-row-click="onRowClick" @on-select-all="onSelectAll" @on-selected-rows-change="selectionChanged"
                                    :search-options="{
                                        enabled: true,
                                        placeholder: 'Search for Applicants',
                                      }"
                                    :pagination-options="{
                                        enabled: true,
                                        mode: 'records',
                                        perPage: 5,
                                        position: 'bottom',
                                        perPageDropdown: [3, 7, 9],
                                        dropdownAllowAll: false,
                                        setCurrentPage: 1,
                                        nextLabel: 'next',
                                        prevLabel: 'prev',
                                        rowsPerPageLabel: 'Rows per page',
                                        ofLabel: 'of',
                                        pageLabel: 'page', // for 'pages' mode
                                        allLabel: 'All',
                                      }"
                                    :selectOptions="{
                                        enabled: true,
                                        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                                        selectionInfoClass: 'custom-class',
                                        selectionText: 'rows selected',
                                        clearSelectionText: 'clear',
                                      }">

                                    <div slot="selected-row-actions">
                                        <button class="table-action">Action 1</button>
                                    </div>

                                </vue-good-table>
                            </div>
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
import VueStars from 'vue-stars';
export default {
	name: 'applicants',
	data() {
		return {
			filterIDs: [],
			createAud: false,
			createid: '',
			filterApplicants: '',
			defaultTable: true,
			queryTable: false,
			formLoading: false,
			loading: true,
			applicantData: '',
			token: '',
			roleID: '',
			filterSelect: '',
			showStar: false,
			showRating: false,
			showStatus: false,
			showState: false,
			showAge: false,
			rating_star: '',
			rating_complexion: '',
			error: '',
			status: '',
			requestData: '',
			rating_minage: '',
			rating_maxage: '',
			rating_language: '',
			rating_state: '',
            rating_min_age: '',
            rating_max_age: '',

			siteUrl: 'http://stage.cast.i.ng/',
			columns: [
				{
					label: 'id',
					field: 'id',
					hidden: true,
				},
				{
					label: 'Applicant Name',
					field: 'applicantName',
				},
				{
					label: 'Rating',
					field: 'rating',
					type: 'number',
				},
				{
					label: 'Status',
					field: 'status',
				},
				{
					label: 'Action',
					field: 'action',
					html: true,
				},
			],
			rows: [
				{
					id: 1,
					applicantName: 'John',
					rating: 20,
					status: 'Approved',
					action: '<button class="table-action">Action</button>',
				},
				{
					id: 2,
					applicantName: 'Jane',
					rating: 24,
					status: 'Shortlisted',
					action: '<button class="table-action">Action</button>',
				},
				{
					id: 3,
					applicantName: 'Susan',
					rating: 16,
					status: 'Declined',
					action: '<button class="table-action">Action</button>',
				},
				{
					id: 4,
					applicantName: 'Chris',
					rating: 55,
					status: 'Pending',
					action: '<button class="table-action">Action</button>',
				},
				{
					id: 5,
					applicantName: 'Dan',
					rating: 40,
					status: 'Shortlisted',
					action: '<button class="table-action">Action</button>',
				},
				{
					id: 6,
					applicantName: 'John',
					rating: 20,
					status: 'Approved',
					action: '<button class="table-action">Action</button>',
				},
			],
		};
	},
	components: {
		loader: Loader,
		VueStars: VueStars,
	},
	mounted() {
		let roleID = this.$route.params.id;

        localStorage.projectRoleID = roleID

		this.detailID = roleID;


		this.token = JSON.parse(localStorage.getItem('token'));
		console.log(this.token);

		var config = {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		};

		let userID = JSON.parse(localStorage.getItem('token'));

		axios({
			method: 'GET',
			url: 'https://api.cast.i.ng/projectrole/applicants/' + roleID,
			config,
		}).then(
			result => {
				this.applicantData = result;
			},
			error => {
				console.log('API CALL FAILED');
				console.error(error);
			}
		);

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
	methods: {
		requestVideo(requestID) {
			var config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};

			let userID = JSON.parse(localStorage.getItem('token'));

			axios({
				method: 'GET',
				url: 'http://api.cast.i.ng/request/video/' + userID + '/' + requestID,
				config,
			}).then(
				result => {
					this.loading = false;
					this.requestData = result;
					this.error = result.data.status_msg;
					this.status = result.data.status;
				},
				error => {
					this.loading = false;
					console.log('API CALL FAILED');
					this.error = 'Request Failed';
					this.status = false;
					console.error(error);
				}
			);
		},
		requestAudio(requestID) {
			var config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};

			let userID = JSON.parse(localStorage.getItem('token'));

			axios({
				method: 'GET',
				url: 'http://api.cast.i.ng/request/audio/' + userID + '/' + requestID,
				config,
			}).then(
				result => {
					this.loading = false;
					this.requestData = result;
					this.error = result.data.status_msg;
					this.status = result.data.status;
				},
				error => {
					this.loading = false;
					console.log('API CALL FAILED');
					this.error = 'Request Failed';
					this.status = false;
					console.error(error);
				}
			);
		},
		decline(requestID) {
			var config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};

			let userID = JSON.parse(localStorage.getItem('token'));

			axios({
				method: 'GET',
				url: 'http://api.cast.i.ng/audition/decline/' + userID + '/' + requestID,
				config,
			}).then(
				result => {
					this.loading = false;
					this.requestData = result;
					this.error = result.data.status_msg;
					this.status = result.data.status;
				},
				error => {
					this.loading = false;
					console.log('API CALL FAILED');
					this.error = 'Request Failed';
					this.status = false;
					console.error(error);
				}
			);
		},
		onRowClick(params) {
			console.log(params.row);
			// params.row - row object
			// params.pageIndex - index of this row on the current page.
			// params.selected - if selection is enabled this argument
			// indicates selected or not
			// params.event - click event
		},
		onSelectAll(params) {
			console.log(params.selected);
			// params.selected - whether the select-all checkbox is checked or unchecked
			// params.selectedRows - all rows that are selected (this page)
		},
		selectionChanged(params) {
			// params.selectedRows - all rows that are selected (this page)
		},
		queryApplicant() {
			this.defaultTable = false;
			this.queryTable = true;

			this.filterIDs.length = 0;

			let roleID = this.$route.params.id;

			this.formLoading = true;

			var config = {
				headers: { 'Access-Control-Allow-Origin': '*' },
			};

			let userID = JSON.parse(localStorage.getItem('token'));

			let complexion = this.rating_complexion;
			let min_age = this.rating_min_age;
			let max_age = this.rating_max_age;
			let rating = this.rating_star;
			let state = this.rating_state;
			let language = this.rating_language;

			axios({
				method: 'GET',
				url:
					'http://api.cast.i.ng/filterusers/' +
					roleID +
					'?complexion=' +
					complexion +
					'&min_age=' +
					min_age +
					'&max_age=' +
					max_age +
					'&rating=' +
					rating +
					'&state=' +
					state +
					'&language=' +
					language,
				config,
			}).then(
				result => {
					this.formLoading = false;
					this.createAud = true;
					console.log(result.data.list);
					this.filterApplicants = result.data.list;

					var filterId = 0;

					for (filterId in this.filterApplicants) {
						this.filterIDs.push(this.filterApplicants[filterId].id);
					}
					console.log(this.filterIDs);
				},
				error => {
					this.formLoading = false;
					console.log('API CALL FAILED');
					this.error = 'Request Failed';
					this.status = false;
					console.error(error);
				}
			);
		},
		redirectCreate() {
			console.log(this.filterIDs);

			localStorage.setItem("applicantsID", JSON.stringify(this.filterIDs));

			// localStorage.applicantID = this.filterIDs;
			this.$router.replace(this.$route.query.redirect || '/project/createAudition/');

			// let form = new FormData();
			// form.append('users', this.filterIDs);

			// let userID = JSON.parse(localStorage.getItem('token'));

			// const API_URL = process.env.API_URL || 'http://api.cast.i.ng';

			// axios.post(API_URL + '/getusers', form).then(
			// 	result => {
			// 		console.log(result.data);
			//         this.$router.push({ name: 'createAudition'});
			// 	},
			// 	error => {
			// 		console.error(error);
			// 	}
			// );
		},
		filterChange() {
			if (this.filterSelect == 'rate') {
				this.showRating = true;
				this.showAge = false;
				this.showState = false;
				this.showStatus = false;
			} else if (this.filterSelect == 'age') {
				this.showRating = false;
				this.showAge = true;
				this.showState = false;
				this.showStatus = false;
			} else if (this.filterSelect == 'status') {
				this.showRating = false;
				this.showAge = false;
				this.showState = false;
				this.showStatus = true;
			} else if (this.filterSelect == 'state') {
				this.showRating = false;
				this.showAge = false;
				this.showState = true;
				this.showStatus = false;
			} else {
				this.showRating = false;
				this.showAge = false;
				this.showState = false;
				this.showStatus = false;
			}
			console.log(this.filterSelect);
		},
		clearFilter() {
			this.createAud = false;
			this.queryTable = false;
			this.defaultTable = true;
			this.rating_complexion = '';
			this.rating_age = '';
			this.rating_star = '';
			this.rating_state = '';
			this.rating_language = '';
		},
	},
};
</script>

<style>
.msform input[type='url'],
.msform input[type='number'],
.msform input[type='email'] {
	padding: 6px;
	border: 1px solid #ccc;
	border-radius: 3px;
	width: 100%;
	box-sizing: border-box;
	color: #2c3e50;
	font-size: 13px;
}
.table-action {
	font-size: 12px;
	color: white;
	border: 0px;
	background-color: #7b7bde;
	cursor: pointer;
}

.applicantFilter {
	padding: 0px 26px;
	background-color: #f3f4f7;
	width: 100%;
	margin-top: 20px;
	border: 1px solid gainsboro;
}

.vgt-wrap {
	width: 681px !important;
}
.view-upload,
.view-upload:hover {
	background: #e7077d;
	color: white;
}
.dropdown-item {
	cursor: pointer;
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
.btn-filter {
	margin-top: 16px;
	background-color: #e7077d !important;
	border-color: #e7077d !important;
}
.form-loader {
	width: 22px;
}
</style>