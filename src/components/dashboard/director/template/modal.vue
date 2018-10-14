<template>
    <div> 
        <!-- Fix Appointment -->
        <div class="modal fade" id="fixappointment" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p class="cv1">
                            <b class="col-ppd">Schedule Audition</b>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </p>

                        <form class="msform mt-2" method="post" action="http://stage.cast.i.ng/fixappointment">
                            <div class="add-project-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <b>Date:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="date" placeholder="Date" name="date">
                                            <input type="hidden" id="user_id" name="user_id">
                                            <input type="hidden" id="projectrole_user_id" name="projectrole_user_id">
                                        </span>
                                    </div>

                                    <div class="col-lg-6">
                                        <b>Time :</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Time" name="time">
                                        </span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <b>Venue:</b>
                                        <span class="bmd-form-group">
                                            <input class="mb-2" type="text" placeholder="Venue" name="venue">
                                        </span>
                                    </div>
                                </div>


                            </div>
                            <div class="">
                                <input class="btn btn-ppd border-0" value="Schedule" type="submit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fix Appointment -->
    </div>
</template>

<script>
export default {
    name: 'Modal',
};
</script>

<style scoped>
</style>