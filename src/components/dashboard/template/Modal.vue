<template>
    <div> 
        <!-- Add Job Modal -->
      <div class="modal fade" id="addjob" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" style="display: none;" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">

                        </div>
                        <div class="modal-body">
                            <p class="cv1">
                                <b class="col-ppd">Add Job</b>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </p>

                            <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/addjob">
                                <div class="add-project-group">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <b>Year:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2 form-control" type="number" placeholder="Year" name="year">
                                            </span>
                                        </div>

                                        <div class="col-lg-6">
                                            <b>Title:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2" type="text" placeholder="Title" name="title">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <b>Role:</b>
                                            <span class="bmd-form-group is-filled">
                                            <select name="projectrole_id" class="mb-2" style="margin-top: 8px;" required="">
                            <option value="">--Select--</option>
                                                        <option value="4">Lead</option>
                                                        <option value="5">Supporting</option>
                                                        <option value="6">Extra</option>
                                                        <option value="7">Non Speaking Background</option>
                                                        <option value="8">Cameo Appearance</option>
                                                        </select></span>
                                        </div>

                                        <div class="col-lg-6">
                                            <b>Job Type:</b>
                                            <span class="bmd-form-group is-filled">
                                            <select name="projecttype_id" class="mb-2" style="margin-top: 8px;" required="">
                            <option value="">--Select--</option>
                                                        </select></span>
                                        </div>

                                        <div class="col-lg-6">
                                            <b>Director:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2" type="text" name="director" placeholder="Film Director">
                                            </span>
                                        </div>

                                        <div class="col-lg-6">
                                            <b>Production Company:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2" type="text" name="company" placeholder="Production Company">
                                            </span>
                                        </div>
                                    </div>


                                </div>
                                <div class="">
                                    <input class="btn btn-ppd border-0" value="Save" type="submit">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add Job Modal -->

            <!-- Add Education Modal -->

            <div class="modal fade" id="addeducation" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" style="display: none;" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">

                        </div>
                        <div class="modal-body">
                            <p class="cv1">
                                <b class="col-ppd">Add Education</b>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </p>

                            <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/addeducation">
                                <div class="add-project-group">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <b>Year:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2" type="text" placeholder="Year" name="education_year">
                                            </span>
                                        </div>

                                        <div class="col-lg-6">
                                            <b>School:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2" type="text" name="education_school" placeholder="School Name">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <b>Certificate Earned:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2" type="text" placeholder="Certificate Earned " name="education_certificate">
                                            </span>
                                        </div>
                                    </div>


                                </div>
                                <div class="">
                                    <input name="educationForm" class="btn btn-ppd border-0" value="Save" type="submit">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add Education Modal -->

            <!-- Add Actor Modal -->

            <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            
                        </div>
                        <div class="modal-body">
                            <p class="cv1">
                                <b class="col-ppd">Rate Actor</b>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            </p>

                            <form class="msform mt-4 mb-5" method="post" action="">
                                

                                <div class="bline mb-2 mt-2">
                                    <b>Comment</b>
                                    <span class="bmd-form-group">
                                        <textarea class="mb-2" col="10" name="comment"></textarea>
                                    </span>
                                </div>
                                
                                <input class="btn btn-ppd border-0 mt-3" value="Submit Rating" type="submit">
                                <div class="ripple-container"></div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add Actor Modal -->

            <!-- Add Filmography Modal -->
            <div class="modal fade" id="addfilm" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">

                        </div>
                        <div class="modal-body">
                            <p class="cv1">
                                <b class="col-ppd">Add Filmography</b>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </p>

                            <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/addfilmography">
                                <div class="add-project-group">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <b>Year:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2 form-control" type="number" placeholder="Film Year" name="year">
                                            </span>
                                        </div>

                                        <div class="col-lg-6">
                                            <b>Film Name:</b>
                                            <span class="bmd-form-group">
                                                <input class="mb-2" type="text" placeholder="Film Name" name="title">
                                            </span>
                                        </div>
                                    </div>


                                </div>
                                <div class="">
                                    <input class="btn btn-ppd border-0" value="Save" type="submit">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <!-- Add Filmography Modal -->

        

        <!-- Add Event -->
        <div class="modal fade" id="EventModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Add Event </b>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/saveevent">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <b>Event:</b>
                                        <span class="bmd-form-group">
                                            <!-- <input class="mb-2 form-control" type="text" placeholder="" name="title"> -->
                                            <textarea class="mb-2" name="event" cols="20" rows="5"></textarea>
                                        </span>
                                    </div>

                                    <div class="col-lg-12">
                                        <b>Date:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="date" name="date">
                                        </span>
                                    </div>
                                <!-- </div>

                                <div class="row"> -->
                                    <div class="col-lg-12">
                                         <b>Time:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2 " id="timepicker1" type="text" name="time">
                                        </span>
                                    </div>
                                </div>



                            </div>
                            <div class="">
                                <input class="btn btn-ppd border-0" value="Save" type="submit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add Event -->
    </div>
</template>

<script>
export default {
	name: 'Modal',
};
</script>

<style scoped>
</style>