<template>
	<div>
		<div class="loader13 loader">
			<div class="loader-13">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default{

}
</script>

<style scoped>
	.loader {	
	width: 200px;
	height: 200px;
	margin: auto;
	display: -webkit-flex;/*safari弹性布局*/
	justify-content: center;
	display: flex;
	align-items: center;
   }
   @-webkit-keyframes loader13-1 {
	0% {
		-webkit-transform: rotate(270deg);
	}
	50% {
		-webkit-transform: rotate(360deg);
	}
	100% {
		-webkit-transform: rotate(270deg);
	}
}
@-webkit-keyframes loader13-2 {
	0% {
		-webkit-transform: rotate(90deg);
	}
	50% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(90deg);
	}
}
@-webkit-keyframes loader13-3 {
	0% {
		left: 100px;
	}
	100% {
		left: 20px;
	}
}
.loader-13 {
	position: relative;
	width: 100px;
	height: 100px;
}
.loader-13 div:nth-child(1), .loader-13 div:nth-child(2) {
	width: 0px;
	height: 0px;
	border: 25px solid  #51b1d9;
	border-right: 25px solid transparent;
	border-radius: 50%;
	position: absolute;
}
.loader-13 div:nth-child(1) {
	-webkit-animation: loader13-1 0.5s 0s infinite linear;
}
.loader-13 div:nth-child(2) {
	-webkit-animation: loader13-2 0.5s 0s infinite linear;
}
.loader-13 div:nth-child(3), .loader-13 div:nth-child(4), .loader-13 div:nth-child(5) {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background:  #51b1d9;
	position: absolute;
	left: 100px;
	top: 20px;
	opacity: 0.7;
}
.loader-13 div:nth-child(3) {
	-webkit-animation: loader13-3 1s -0.66s linear infinite;
}
.loader-13 div:nth-child(4) {
	-webkit-animation: loader13-3 1s -0.33s linear infinite;
}
.loader-13 div:nth-child(5) {
	-webkit-animation: loader13-3 1s 0s linear infinite;
}
</style>