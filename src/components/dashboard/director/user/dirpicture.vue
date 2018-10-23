<template>
    <div>
        Edit Pic
    </div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'dirpicture',
	data() {
		return {
			l,
		};
	},
};
</script>

<style scoped>
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
</style>