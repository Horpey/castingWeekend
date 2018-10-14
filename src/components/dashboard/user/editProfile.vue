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

                <form class="msform mt-2" method="post">
                    <h4>Attributes</h4>
                    <div class="bline"></div>


                    <div class="row">
                        <div class="col-lg-6">
                            <b>First Name:</b>
                            <input class="mb-2" type="text" value="James" name="" placeholder="First Name" />
                        </div>

                        <div class="col-lg-6">
                            <b>Last Name:</b>
                            <input class="mb-2" type="text" value="Obalola" name="" placeholder=":Last Name" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Gender:</b>
                            <select name="gender" class="mb-2" style="margin-top: 8px;">
                                <option value="">Select Gender</option>
                                <option value="#">Male</option>
                                <option value="#">Female</option>
                            </select>
                        </div>

                        <div class="col-lg-6">
                            <b>Email Address</b>
                            <div class="mb-4 tags-input">
                                <input type="text" placeholder="Email Address" /> </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Mobile Number</b>
                            <div class="mb-4 tags-input">
                                <input type="text" placeholder="Mobile Number" /> </div>
                        </div>
                        <div class="col-lg-6">
                            <b>Optional Mobile Number</b>
                            <div class="mb-4 tags-input">
                                <input type="text" placeholder="Mobile Number" /> </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-6">
                            <b>Languages Spoke</b>
                            <div class="mb-4 tags-input">
                                <input type="text" value="English,Yoruba" data-role="tagsinput" placeholder="Add Language" /> </div>
                        </div>
                        <div class="col-lg-6">
                            <b>Bio:</b>

                            <textarea name="" id="input" class="mb-2" rows="3" required="required"></textarea>
                        </div>

                    </div>



                    <b>Height:</b>
                    <div class="row">
                        <div class="col-lg-6">
                            <b>Enter Feet:</b>
                            <input class="mb-2" type="text" value="5" name="" placeholder="Feet" />
                        </div>
                        <div class="col-lg-6">
                            <b>Enter inch:</b>
                            <input class="mb-2" type="text" value="4" name="" placeholder="Inch" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Body Mass (in KG):</b>
                            <input class="mb-2" type="text" value="250" name="" placeholder="Body Mass" />
                        </div>
                        <div class="col-lg-6">
                            <b>Shirt Size (in Inches)</b>
                            <input class="mb-2" type="text" value="32" name="" placeholder="Shirt Size" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Weight:</b>
                            <select name="gender" class="mb-2">
                                <option value="">Select Weight</option>
                                <option value="#">100lbs</option>
                                <option value="#">200lbs</option>
                                <option value="#">300lbs</option>
                                <option value="#">400lbs</option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <b>Waist Size (in Inches)</b>
                            <input class="mb-2" type="text" value="44" name="" placeholder="Waist Size" />
                        </div>
                    </div>

                    <h4>Sizes</h4>
                    <div class="bline"></div>
                    <div class="row">
                        <div class="col-lg-6">
                            <b>Trouser Length (in Inches):</b>
                            <input class="mb-2" type="text" value="40" name="" placeholder="Trouser Length" />
                        </div>
                        <div class="col-lg-6">
                            <b>Shoulder Length (in Inches):</b>
                            <input class="mb-2" type="text" value="31" name="" placeholder="Shoulder Length" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <b>Jacket Size:</b>
                            <input class="mb-2" type="text" value="24" name="" placeholder="Jacket Size" />
                        </div>
                        <div class="col-lg-6">
                            <b>Shoe Size:</b>
                            <input class="mb-2" type="text" value="40" name="" placeholder="Shoe Size" />
                        </div>
                    </div>

                    <h4>Social Handle</h4>
                    <div class="bline"></div>
                    <div class="row">
                        <div class="col-lg-6">
                            <b>Facebook:</b>
                            <input class="mb-2" type="text" name="" placeholder="Facebook" />
                        </div>
                        <div class="col-lg-6">
                            <b>Twitter:</b>
                            <input class="mb-2" type="text" name="" placeholder="Twitter" />
                        </div>
                        <div class="col-lg-6">
                            <b>LinkedIn:</b>
                            <input class="mb-2" type="text" name="" placeholder="LinkedIn" />
                        </div>
                        <div class="col-lg-6">
                            <b>Instagram:</b>
                            <input class="mb-2" type="text" name="" placeholder="Instagram" />
                        </div>
                    </div>

                    <h4>Mentor</h4>
                    <div class="bline"></div>
                    <!-- Mentor Table -->
                    <table class="table table-striped mb-3 mt-3 mentor-table">
                        <tbody>
                            <tr>
                                <td>
                                    <b>Mentor Name</b>
                                </td>
                                <td>
                                    <b>Reason</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    <p class="mentor-name">Tunde Kelanu</p>
                                </td>
                                <td>
                                    <p class="mentor-reason">Good Script Writing</p>
                                </td>
                                <td>
                                    <button style="cursor: pointer;" class="edit-mentor btn btn-outline-success btn-sm">Edit</button>
                                    <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Mentor Table -->
                    <div class="mentor-add">
                        <div class="row">
                            <div class="col-lg-6">
                                <b>Mentor Name:</b>
                                <input class="mb-2 mentorname-input" type="text" name="" placeholder="Mentor Name" />
                            </div>
                            <div class="col-lg-6">
                                <b>Reason Why:</b>

                                <input class="mb-2 mentorreason-input" type="text" name="" placeholder="Reason" />
                            </div>
                        </div>
                        <button class="btn btn-ppd border-0 mt-4 add-mentor" style="padding: 4px 9px;
                        margin-top: 0px!important;"> Save Mentor</button>
                        <hr>
                    </div>


                    <!-- Best Film -->
                    <h4>Film</h4>
                    <div class="bline"></div>
                    <!-- Mentor Table -->
                    <table class="table table-striped mb-3 mt-3 film-table" style="display: none;">
                        <tbody>
                            <tr>
                                <td>
                                    <b>Film Name</b>
                                </td>
                                <td>
                                    <b>Reason</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    Darkest Minds</td>
                                <td>Good Script Writing</td>
                                <td>
                                    <a href="#" class=" btn btn-outline-success btn-sm">Edit</a>
                                    <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Film Table -->
                    <div class="mentor-add">
                        <div class="row">
                            <div class="col-lg-6">
                                <b>Film Name:</b>
                                <input class="mb-2" type="text" name="" placeholder="Film Name" />
                            </div>
                            <div class="col-lg-6">
                                <b>Reason Why:</b>
                                <input class="mb-2" type="text" name="" placeholder="Reason" />
                            </div>
                        </div>
                        <button class="btn btn-ppd border-0 mt-4 add-film" style="padding: 4px 9px;
                        margin-top: 0px!important;"> Save Film</button>
                        <hr>
                    </div>

                    <!-- Directors -->
                    <!-- Best Film -->
                    <h4>Director</h4>
                    <div class="bline"></div>
                    <!-- Mentor Table -->
                    <table class="table table-striped mb-3 mt-3 director-table" style="display: none;">
                        <tbody>
                            <tr>
                                <td>
                                    <b>Director Name</b>
                                </td>
                                <td>
                                    <b>Reason</b>
                                </td>
                                <td>
                                    <b>Action</b>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    Tunde Kelani</td>
                                <td>Good Script Writing</td>
                                <td>
                                    <a href="#" class="btn btn-outline-success btn-sm">Edit</a>
                                    <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Film Table -->
                    <div class="director-add">
                        <div class="row">
                            <div class="col-lg-6">
                                <b>Director Name:</b>
                                <input class="mb-2" type="text" name="" placeholder="Director Name" />
                            </div>
                            <div class="col-lg-6">
                                <b>Reason Why:</b>
                                <input class="mb-2" type="text" name="" placeholder="Reason" />
                            </div>
                        </div>
                        <button class="btn btn-ppd border-0 mt-4 add-director" style="padding: 4px 9px;
                            margin-top: 0px!important;"> Save Director</button>
                        <hr>
                    </div>
                    <input class="btn btn-ppd border-0 mt-4" value="Submit" type="submit">
                </form>

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