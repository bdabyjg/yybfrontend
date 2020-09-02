<!--关于页面 -->
<!--问题：1.第一行加隐隐约约的背景图片忘了怎么弄
         2.去反馈的箭头做不出来，做了个按钮，以及如何跳转。-->


<template>
	<view class="ctn">
    <view class="logo">
		<view class="imgbox">
      <img src="/static/favicon.ico" alt="">
		</view>
		<view>

      <view class="line1">方克鑫科技</view>
      <view class="line2">海南方克鑫网络科技有限公司</view>
		</view>
    </view>

<!--    文字部分-->
    <view class="details">
		<view class="tr">
			<view>平台Logo</view>
			<view class="pic"><img src="/static/img2.png"></view>
		</view>
		<view class="tr">
			<view>平台名称</view>
      <view>医约宝</view>
		</view>

        <view class="tr">
			<view>版权所属</view>
          <view>海南方克鑫网络科技有限公司</view>
		</view>
        <view class="tr">
        	<view>公司网址</view>
          <view>www.funcnum.com</view>
        </view>
		<view class="tr">
			<view>联系方式</view>
      <view>13198910081</view>
		</view>
      <view class="tr">
        <view>地址</view>
        <view>海南省海口市海南医学院</view>
      </view>
      <view class="tr">
        <view>反馈问题</view>
        <view> <button bindtap="goToReport"> 去反馈</button></view>
      </view>
    </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.ctn{
	height: 100vh;
	overflow: scroll;
  text-align: center;
	background-color: #f5f5f5;
}
.line1{
  font-weight: bold;
  font-size: larger;
}
image{
	width: 100%;
	height: 100%;
}
.logo{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 400rpx;
  background-color: #fff;
}
.imgbox{
	width: 150rpx;
	height: 150rpx;
	flex-shrink: 0;
	margin-bottom: 20rpx;
}
.pic{
  width: 100rpx;
  height: 100rpx;
}
.tr{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30rpx;
	border-top: 1rpx solid #dedede;
  	background-color: #fff;
}
</style>
