<template>
    <div> 
      <div class="card m-b-30">
        <div class="card-body">
            <nav>
                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Add Photo</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Add Video</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Add Audio</a>
                </div>
            </nav>

            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <form class="msform mt-2" method="post" enctype="multipart/form-data" action="#">
                        <div id="room_fileds">
                            <input class="mb-2" type="file" name="image">
                        </div>
                        <input class="btn btn-ppd border-0" value="Upload Photo" type="submit">
                    </form>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <form class="msform mt-2" method="post" action="#">
                        <div id="room_fileds">
                            <b>Title:</b>
                            <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Video Title" name="title"></span>
                            <b>Year:</b>
                            <span class="bmd-form-group"><input class="mb-2 form-control" type="number" placeholder="Video Year" name="year"></span>
                            <b>Role:</b>
                            <span class="bmd-form-group is-filled"><select name="projectrole_id" class="mb-2" style="margin-top: 8px;" required="">
                            <option value="">Select Role</option>
                                <option value="4">Lead</option>
                                <option value="5">Supporting</option>
                                <option value="6">Extra</option>
                                <option value="7">Non Speaking Background</option>
                                <option value="8">Cameo Appearance</option>
                            </select></span>
                            <b>Add Video URL:</b>
                            <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Video URL" name="link"></span>
                        </div>
                        
                        <input class="btn btn-ppd border-0 mt-3" value="Submit Video" type="submit">
                    </form>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <form class="msform mt-2" method="post" action="#">
                        <div id="room_fileds">
                            <b>Title:</b>
                            <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Audio Title" name="title"></span>
                            <b>Year:</b>
                            <span class="bmd-form-group"><input class="mb-2 form-control" type="number" placeholder="Audio Year" name="year"></span>
                            <b>Role:</b>
                            <span class="bmd-form-group is-filled"><select name="projectrole_id" class="mb-2" style="margin-top: 8px;" required="">
                            <option value="">Select Role</option>
                                <option value="4">Lead</option>
                                <option value="5">Supporting</option>
                                <option value="6">Extra</option>
                                <option value="7">Non Speaking Background</option>
                                <option value="8">Cameo Appearance</option>
                            </select></span>
                            <b>Add Souncloud URL:</b>
                            <small>Upload Your audio to soundcloud and get the url</small>
                            <span class="bmd-form-group"><input class="mb-2" type="text" placeholder="Audio Url" name="link"></span>
                        </div>
                        <input class="btn btn-ppd border-0 mt-3" value="Submit Audio" type="submit">
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'addMedia',
};
</script>

<style scoped>
</style>