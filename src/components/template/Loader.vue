<template>
    <div> 
      <div class="loader"></div>
      <div class="circle-loader">
        <img class="loader-icon" src="../../assets/images/loader.svg"/>  
      </div>
    </div>
</template>

<script>
export default {
	name: 'loader',
};
</script>

<style>
/* Loader Styles */
.circle-loader {
	position: fixed;
	right: 0;
	top: 0;
	z-index: 999!important;
}
.loader {
	height: 10px;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 999;
	overflow: hidden;
	pointer-events: none;
	transition: 0.3s ease;
	-webkit-transition: 0.3s ease;
	-moz-transition: 0.3s ease;
}
.loader.loader--fade {
	transition: none;
	-webkit-transition: none;
	opacity: 0;
}
.loader.loader--fade:before {
	animation: none;
}
.loader:before {
	display: block;
	position: absolute;
	content: '';
	left: -40%;
	width: 40%;
	height: 4px;
	background-color: #e7077d;
	animation: loading 2s linear infinite;
}
@keyframes loading {
	from {
		left: -40%;
	}
	to {
		left: 140%;
	}
}

/* Loader Styles */
.circle-loader {
	position: fixed;
	right: 30px;
	top: 8px;
	z-index: 1;
}
.circle-loader img {
	width: 40px;
}
@media only screen and (max-width: 768px) {
	/* For mobile phones: */
	.circle-loader{
		display: none;
	}
}

</style>