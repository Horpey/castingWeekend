<template>
    <div>
        <loader v-if="loading"/>
        <div class="card m-b-30">
            <div class="card-body">

                <ul class="nav nav-tabs mb-4 bline" role="tablist">
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="add-profile.html" role="tab">Add Profile</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link active" href="edit-profile.html" role="tab">Edit Profile</a>
                    </li>
                </ul>

                <form class="msform mt-2" @submit.prevent="editProfile">
                    <h4>Attributes</h4>
                    <div class="bline"></div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>First Name:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="firstname"></span>
                        </div>

                        <div class="col-lg-6">
                            <b>Last Name:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="lastname"></span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Gender:</b>
                            <span class="bmd-form-group is-filled"><select v-model="gender" class="mb-2" style="margin-top: 8px;">
                                <option value="" disabled="">Select Gender</option>
                                <option value="0">Female</option>
                                <option value="1">Male</option>
                            </select></span>
                        </div>

                        <div class="col-lg-6">
                            <b>Email Address</b>
                            <div class="mb-4 ">
                                <span class="bmd-form-group is-filled"><input type="text" class="mb-2" v-model="email"></span> </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Mobile Number</b>
                            <div class="mb-4 tags-input">
                                <span class="bmd-form-group is-filled"><input type="text" class="mb-2" placeholder="Mobile Number" v-model="phone"></span>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <b>Optional Mobile Number</b>
                            <div class="mb-4 tags-input">
                                <span class="bmd-form-group is-filled"><input type="text" class="mb-2" placeholder="Mobile Number" v-model="phone2"></span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>State:</b>
                            <span class="bmd-form-group is-filled"><select v-model="state_id" class="mb-2" style="margin-top: 8px;">
                                    <option value="">Select State Of Residence</option>
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
                        
                        <div class="col-lg-6">
                            <b>Complexion</b>
                            <div class="mb-4 tags-input">
                                <span class="bmd-form-group is-filled"><select v-model="complexion_id" class="mb-2" style="margin-top: 8px;">
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
                    </div>
    

                    <div class="row">
                        <div class="col-md-6">
                            <b>Languages Spoken</b>
                            <div class="mb-4 tags-input">
                                <span class="bmd-form-group is-filled"><select v-model="language_id" multiple class="mb-2" style="margin-top: 8px;">
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
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Bio:</b>
                            <span class="bmd-form-group is-filled"><textarea v-model="description" id="input" class="mb-2" rows="3"
                                    required="required">

                            </textarea></span>
                        </div>
                        <div class="col-lg-6">
                            <b>Date Of Birth:</b><br>

                            <span class="bmd-form-group is-filled"><input class="mb-2 inputdatepicker is-datepick" type="date" v-model="dob"
                                    placeholder="Date Of Birth"></span>
                        </div>

                    </div>


                    <b>Height:</b>
                    <div class="row">
                        <div class="col-lg-6">
                            <b>Enter Feet:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="height" placeholder="Feet"></span>
                        </div>
                        <div class="col-lg-6">
                            <b>Weight (KG):</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="weight" placeholder="Body Mass"></span>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-lg-6">
                            <b>Shirt Size (Inches)</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="shirtsize" placeholder="Shirt Size"></span>
                        </div>
                        <div class="col-lg-6">
                            <b>Waist Size (Inches)</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="waistsize" placeholder="Waist Size"></span>
                        </div>
                    </div>



                    <h4>Sizes</h4>
                    <div class="bline"></div>
                    <div class="row">
                        <div class="col-lg-6">
                            <b>Trouser Length (Inches):</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="trouserlength" placeholder="Trouser Length"></span>
                        </div>
                        <div class="col-lg-6">
                            <b>Shoulder Length (Inches):</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="shoulderlength" placeholder="Shoulder Length"></span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Jacket Size:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="jacketsize" placeholder="Jacket Size"></span>
                        </div>
                        <div class="col-lg-6">
                            <b>Shoe Size:</b>
                            <span class="bmd-form-group is-filled"><input class="mb-2" type="text" v-model="shoesize" placeholder="Shoe Size"></span>
                        </div>
                    </div>

                    <h4>Social Handle</h4>
                    <div class="bline"></div>

                    <div class="row msform mt-2">
                        <div class="col-lg-6">
                            <b>Facebook:</b>
                            <span class="bmd-form-group"><input class="mb-2" type="text" v-model="facebook" placeholder="Facebook"></span>
                        </div>
                        <div class="col-lg-6">
                            <b>Twitter:</b>
                            <span class="bmd-form-group"><input class="mb-2" type="text" v-model="twitter" placeholder="Twitter"></span>
                        </div>
                        <div class="col-lg-6">
                            <b>LinkedIn:</b>
                            <span class="bmd-form-group"><input class="mb-2" type="text" v-model="linkedln" placeholder="LinkedIn"></span>
                        </div>
                        <div class="col-lg-6">
                            <b>Instagram:</b>
                            <span class="bmd-form-group"><input class="mb-2" type="text" v-model="instagram" placeholder="Instagram"></span>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-ppd wd">
                      <img v-if="formLoading" class="form-loader" src="../../../assets/images/white-loader.svg" alt="Loader" />
                      <span v-if="!formLoading">Save Profile</span>
                    </button>
                </form>

                <h4>Mentors</h4>
                <div class="bline"></div>

                <table id="mentortable" class="table table-striped mb-3 mt-3 mentor-table" style="display: ;">
                    <tbody>
                        <tr>
                            <td><b>Mentor Name</b></td>
                            <td><b>Reason</b></td>
                            <td><b>Action</b></td>
                        </tr>
                    </tbody>
                    <tbody id="mentorlist">
                        <tr v-for="mentor in mentorData.data.list">
                            <td>
                                <p class="mentor-name">{{mentor.name}}</p>
                            </td>
                            <td>
                                <p class="mentor-reason">{{mentor.reason}}</p>
                            </td>
                            <td>
                                <button v-on:click="deleteMentor(mentor.id)" class="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{ error }}</div>

                <div class="mentor-add">
                    <form @submit.prevent="addMentor">
                        <div class="row msform mt-2">
                            <div class="col-lg-6">
                                <span class="bmd-form-group"><input class="mb-2 mentorname-input" v-model="mentorName" type="text" placeholder="Mentor Name"></span>
                            </div>
                            <div class="col-lg-6">

                                <span class="bmd-form-group"><input class="mb-2 mentorreason-input" v-model="mentorReason" type="text" placeholder="Reason"></span>
                            </div>
                        </div>

                        <button id="addMentorForm" type="submit" class="btn btn-ppd border-0 mt-4 add-mentor" style="padding: 4px 9px; margin-top: 0px!important;">
                            Save Mentor
                        </button>
                        <hr>
                    </form>
                </div>

                <h4>Best 5 Films</h4>
                <div class="bline"></div>

                <table id="mentortable" class="table table-striped mb-3 mt-3 mentor-table" style="display: ;">
                    <tbody>
                        <tr>
                            <td><b>Film Name</b></td>
                            <td><b>Reason</b></td>
                            <td><b>Action</b></td>
                        </tr>
                    </tbody>
                    <tbody id="filmlist">
                        <tr v-for="film in filmData.data.list">
                            <td>
                                <p class="film-name">{{film.name}}</p>
                            </td>
                            <td>
                                <p class="film-reason">{{film.reason}}</p>
                            </td>
                            <td>
                                <button v-on:click="deleteFilm(film.id)"
                                    class="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{ error }}</div>

                <div class="mentor-add">
                    <form @submit.prevent="addFilm">
                        <div class="row msform mt-2">
                            <div class="col-lg-6">
                                <span class="bmd-form-group"><input class="mb-2 mentorname-input" v-model="filmName" type="text" placeholder="Film Name"></span>
                            </div>
                            <div class="col-lg-6">

                                <span class="bmd-form-group"><input class="mb-2 filmreason-input" v-model="filmReason" type="text" placeholder="Reason"></span>
                            </div>
                        </div>

                        <button id="addFilmForm" type="submit" class="btn btn-ppd border-0 mt-4 add-mentor" style="padding: 4px 9px; margin-top: 0px!important;">
                            Save Film
                        </button>
                        <hr>
                    </form>
                </div>

                <h4>Best 5 Director</h4>
                <div class="bline"></div>

                <table id="mentortable" class="table table-striped mb-3 mt-3 mentor-table" style="display: ;">
                    <tbody>
                        <tr>
                            <td><b>Director Name</b></td>
                            <td><b>Reason</b></td>
                            <td><b>Action</b></td>
                        </tr>
                    </tbody>
                    <tbody id="filmlist">
                        <tr v-for="Director in directorData.data.list">
                            <td>
                                <p class="Director-name">{{Director.name}}</p>
                            </td>
                            <td>
                                <p class="Director-reason">{{Director.reason}}</p>
                            </td>
                            <td>
                                <button  v-on:click="deleteDirector(Director.id)"
                                    class="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style="margin-top: 12px;" class="alert" v-bind:class="{ success: status, danger: !status }" v-if="error">{{ error }}</div>

                <div class="mentor-add">
                    <form @submit.prevent="addDirector">
                        <div class="row msform mt-2">
                            <div class="col-lg-6">
                                <span class="bmd-form-group"><input class="mb-2 mentorname-input" v-model="directorName" type="text" placeholder="Director Name"></span>
                            </div>
                            <div class="col-lg-6">

                                <span class="bmd-form-group"><input class="mb-2 directorreason-input" v-model="directorReason" type="text" placeholder="Reason"></span>
                            </div>
                        </div>

                        <button id="addFilmForm" type="submit" class="btn btn-ppd border-0 mt-4 add-mentor" style="padding: 4px 9px; margin-top: 0px!important;">
                            Save Director
                        </button>
                        <hr>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../template/loader';
export default {
    name: 'editprofile',
    data() {
		return {
			loading: true,
            firstname: '',
            lastname: '',
            gender: '',
            email: '',
            phone: '',
            phone2: '',
            state_id: '',
            language_id: [],
            complexion_id: '',
            description: '',
            dob: '',
            height: '',
            weight: '',
            shirtsize: '',
            waistsize: '',
            trouserlength: '',
            jacketsize: '',
            shoesize: '',
            shoulderlength: '',
            facebook: '',
            linkedln: '',
            twitter: '',
            instagram: '',
            profileData: "",
            mentorData: '',
            filmData: '',
            directorData: '',
            mentorName: '',
            mentorReason: '',
            error: '',
            delmentError: '',
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

            // Pass Data to Input
            this.firstname = this.profileData.data.profile.firstname;
            this.lastname = this.profileData.data.profile.lastname;
            this.gender = this.profileData.data.attributes.gender;
            this.email = this.profileData.data.profile.email;
            this.phone = this.profileData.data.profile.phone;
            this.phone2 = this.profileData.data.profile.phone2;
            this.state_id = this.profileData.data.profile.state_id;
            this.language_id = this.profileData.data.profile.language_id;
            this.complexion_id = this.profileData.data.profile.complexion_id;
            this.description = this.profileData.data.profile.description;
            this.dob = this.profileData.data.profile.dob;
            this.height = this.profileData.data.attributes.height;
            this.weight = this.profileData.data.attributes.weight;
            this.shirtsize = this.profileData.data.attributes.shirt_size;
            this.waistsize = this.profileData.data.attributes.waist_size;
            this.shoulderlength = this.profileData.data.attributes.shoulder_length;
            this.trouserlength = this.profileData.data.attributes.trouser_length;
            this.jacketsize = this.profileData.data.attributes.jacket_size;
            this.shoesize = this.profileData.data.attributes.shoe_size;

            this.facebook = this.profileData.data.social.facebook;
            this.twitter = this.profileData.data.social.twitter;
            this.linkedln = this.profileData.data.social.linkedln;
            this.instagram = this.profileData.data.social.instagram;




        }, error => {
            this.loading = false;
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


        // Get Mentors
        axios({ method: "GET", "url": 'http://api.cast.i.ng/usermentors/'+userID , config }).then(result => {
            this.loading = false;
            this.mentorData = result;

        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });   

        // Get Film
        axios({ method: "GET", "url": 'http://api.cast.i.ng/userfilms/'+userID , config }).then(result => {
            this.loading = false;
            this.filmData = result;

        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });   

        // Get Film
        axios({ method: "GET", "url": 'http://api.cast.i.ng/userdirectors/'+userID , config }).then(result => {
            this.loading = false;
            this.directorData = result;

        }, error => {
            this.loading = false;
            console.log('API CALL FAILED');
            console.error(error);
        });            
	},
    methods: {

        addMentor(){
            let form = new FormData();

            form.append('title',this.mentorName );
            form.append('content',this.mentorReason );

            this.formLoading = true;

            this.formLoading = true;

              let userID = JSON.parse(localStorage.getItem('token'));

              const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

              axios.post(API_URL + '/addfavourite/'+userID+'/mentor', form).then(result => {

                  this.formLoading = false;

                  console.log(result.data)
                  this.error = result.data.status_msg;
                  this.status = result.data.status;

                  this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                  
                  }, error => {
                      console.error(error);
              });
        },

        addFilm(){
            let form = new FormData();

            form.append('title',this.filmName );
            form.append('content',this.filmReason );

            this.formLoading = true;

            this.formLoading = true;

              let userID = JSON.parse(localStorage.getItem('token'));

              const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

              axios.post(API_URL + '/addfavourite/'+userID+'/film', form).then(result => {

                  this.formLoading = false;

                  console.log(result.data)
                  this.error = result.data.status_msg;
                  this.status = result.data.status;

                  this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                  
                  }, error => {
                      console.error(error);
              });
        },

        addDirector(){
            let form = new FormData();

            form.append('title',this.directorName );
            form.append('content',this.directorReason );

            this.formLoading = true;
              let userID = JSON.parse(localStorage.getItem('token'));

              const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

              axios.post(API_URL + '/addfavourite/'+userID+'/dashboard', form).then(result => {

                  this.formLoading = false;

                  console.log(result.data)

                  this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                  this.error = result.data.status_msg;
                  this.status = result.data.status;
                  
                  }, error => {
                      console.error(error);
              });
        },

        editProfile () {

          let form = new FormData();

          form.append('firstname',this.firstname );
          form.append('lastname',this.lastname );
          form.append('email',this.email );
          form.append('phone',this.phone );
          form.append('phone2',this.phone2 );
          form.append('gender',this.gender );
          form.append('description',this.description );
          form.append('state_id',this.state_id );
          form.append('language_id',this.language_id );
          form.append('height',this.height );
          form.append('complexion_id',this.complexion_id );
          form.append('bodyweight',this.weight );
          form.append('shirtsize',this.shirtsize );
          form.append('waistsize',this.waistsize );
          form.append('shoulderlength',this.shoulderlength );
          form.append('trouserlength',this.trouserlength );

          form.append('shoesize',this.shoesize );
          form.append('jacketsize',this.jacketsize );

          form.append('facebook',this.facebook );
          form.append('twitter',this.twitter );
          form.append('linkedln',this.linkedln );
          form.append('instagram',this.instagram );



          this.formLoading = true;

          let userID = JSON.parse(localStorage.getItem('token'));

          const API_URL = process.env.API_URL || 'http://api.cast.i.ng'

          axios.post(API_URL + '/editprofile/'+userID, form).then(result => {

              this.formLoading = false;

              this.$router.replace(this.$route.query.redirect || '/dashboard/profile')
              
              console.log(result.data)
              this.error = result.data.status_msg;
              this.status = result.data.status;
              
              }, error => {
                  // () => this.registerFailed()
                  console.error(error);
          });
        },

        deleteMentor(mentorID){
            // confirm('Are you sure?');

            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };

            axios({ method: "GET", "url": 'http://api.cast.i.ng/delete/userfavourite/'+mentorID , config }).then(result => {
                this.loading = false;
                this.directorData = result;
                this.delmentError = result.data.status_msg;

                this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
            }, error => {
                this.loading = false;
                console.log('API CALL FAILED');
                this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                console.error(error);
            });  
        },
        deleteFilm(filmID){
            // confirm('Are you sure?');

            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };

            axios({ method: "GET", "url": 'http://api.cast.i.ng/delete/userfavourite/'+filmID , config }).then(result => {
                this.loading = false;
                this.directorData = result;
                this.delmentError = result.data.status_msg;

                this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
            }, error => {
                this.loading = false;
                console.log('API CALL FAILED');
                this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                console.error(error);
            });  
        },
        deleteDirector(directorID){

            // confirm('Are you sure?');

            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };

            axios({ method: "GET", "url": 'http://api.cast.i.ng/delete/userfavourite/'+directorID , config }).then(result => {
                this.loading = false;
                this.directorData = result;
                this.delmentError = result.data.status_msg;

                this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
            }, error => {
                this.loading = false;
                console.log('API CALL FAILED');
                this.$router.replace(this.$route.query.redirect || '/dashboard/profile');
                console.error(error);
            });  
        }
    }
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
.btn-ppd:hover{
    background-color: #3f0047!important;
    color: white!important;
}

</style>