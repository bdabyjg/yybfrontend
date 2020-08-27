
<template>
	<view>
		<view class="avatar">
			<view class="upload">
				<image src="../../static/defaultavatar.jpg" ></image>
			</view>
			点击上传
			
		</view>
		<view class="text2">
			<view class="tech_title">
				职称：<input type="text"  />
			</view>
			<view class="school_major">
				毕业学校与专业:<input type="text"  />
			</view>
			<view class="certiicate">
				执业单位：<input type="text"  />
			</view>
			<view class="yearsfor">
				从业年限：<input type="number"/>
			</view>
			<view class="brief_intro">
				荣誉简介：
				<view class="kuang">
					<textarea value="" placeholder="不少于两条" />
				</view>
			</view>
		
			
			<view class="confirmbtn">
				去认证
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

<style style="text/css">
	.avatar{
		top: 20rpx;
		width: 80%;
		padding: 30rpx;
		display: flex;
		flex-flow: column;
		margin: auto;
		text-align: center;
		height: 300rpx;
		
		
	}
	.upload{
		top:20rpx;
		width:200rpx;
		height: 200rpx;
		border-radius: 100%;
		overflow: hidden;
		margin: auto;
		
	}
	.text2{
		position: relative;
		top:-22rpx;
	}
	.text2>view{
		border-bottom: 1rpx solid #dedede;
		margin: 35rpx;
		display: flex;
		padding: 30rpx;
		justify-content:flex-start;
	}
	textarea{
		width: 100%;
		height: 100%;
		
	}
	.kuang{
		width:80%;
		height: 200rpx;
		margin: 20rpx auto;
		border: 1rpx solid #DEDEDE;
		padding: 20rpx;
		
	}
	.brief_intro{
		border-bottom: none;
		flex-flow: column;
		
		
	}

	/*确认按钮样式*/
	.text2 .confirmbtn{
		display: block;
		width: 80%;
		height: 50rpx;
		margin: 50rpx auto;
		padding: 15rpx;
		border: 1rpx solid;
		border-radius: 35rpx;
		position: fixed;
		bottom: 20rpx;
		background-color: #007AFF;
		text-align: center;
		color: #FFFFFF;
		left: 0;
		right: 0;
	}
</style>
