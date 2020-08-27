<template>
	<view class="content">
<view class="bg">
	

	<view class="firstline">实名认证</view>
	<view class="img1">
		<image class="confirmed" src="../../static/ticklogo.png" mode="aspectFill"></image>
		
	</view>
	<view class="confirmed">
		认证成功
	</view>
</view>
	
	<view class="realname">
		<view class="text1">
			真实姓名:
		</view>
		<view class="">
			<input type="text" />
		</view></view>
	 <br/>
	<view class="idtnumber">
		<view class="text1">
		身份证号码：	
		</view>
		<view class="">
			<input type="idcard" >
		</view> </view>
	<br>
	<view class="zhifubao">
		<view class="text1">
			认证支付宝号码：
		</view>
		<view class="">
			<input type="text"  />
		</view></view>
	 <br/>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style type="text/css">
// ticklogo和实名认证的背景都是蓝色,且居中.
.bg{
	padding: 40rpx;
	background-color:#007AFF;
	display: flex;
	flex-flow: column;
}

.bg>view{
	margin: 20rpx auto;
}
.firstline,.confirmed {
	color: #FFFFFF;
	text-align: center;
	
}
.img1{
	width: 50%;
	height: 300rpx;
}
.confirmed{
	width: 100%;
	height: 100%;
}
.realname,.idtnumber,.zhifubao{
	color: #333333;
	display: flex;
	justify-content: center;
}
.text1{
	width: 40%;
	margin:20rpx;
}
</style>
