<template name="alert">
	<view :class="status">
		<view class="alert">
			<view v-if="title != null">
				{{title}}
			</view>
			<view v-if="msg != null">
				{{msg}}
			</view>
			<view class="btngrp">
				<view @click.stop="nof" v-if="no != null">{{no}}</view>
				<view @click.stop="yesf" v-if="yes != null">{{yes}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"alert",
		props:{
			title:null,
			msg:null,
			no:null,
			yes:null
		},
		data() {
			return {
				status:'hide',
			}
		},
		methods: {
			nof(){
				this.status="hide";
				this.$emit("nof")
			},
			yesf(){
				this.status="hide";
				this.$emit("yesf")
			},
			alert(){
				this.status="show";
			}
		}
	}
</script>

<style>
.hide{
	display: none;
}
.show{
	display: flex;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 20%);
	height: 100vh;
	width: 100%;
	margin: 0;
	padding: 0;
	border-radius: 0;
}
.alert{
	display: flex;
	flex-flow: column;
	margin: auto;
	width: 85%;
	background-color: #fff;
	border-radius: 40rpx;
	padding: 0;
	overflow: hidden;
}
.alert>view{
	padding: 0 20rpx;
	margin: auto;
	text-align: center;
	width: 100%;
	margin: 0;
	margin-bottom: 40rpx;
	font-size: 30rpx;
	white-space: pre-line;
}
.alert>view:nth-child(1){
	font-size: 34rpx;
	font-weight: bold;
	margin-top: 40rpx;
}
.show .btngrp{
	display: flex;
	margin: unset;
	border-top: 1rpx solid #f5f5f5;
	padding: 0;
}
.btngrp>view{
	margin: auto;
	width: 50%;
	text-align: center;
	padding: 30rpx 0;
	color: #387aef;
}
.btngrp>view:nth-child(2){
	border-left: 1rpx solid #f5f5f5;
	font-weight: bold;
}
</style>
