<template>
	<view class="addressctn">
		<view 
		:class="{active:ct==index}" 
		@click.stop="act(index)"
		v-for="(item,index) in info"
		:key="index"
		>
			<view class="username">
				{{item.name}}<view>{{item.relationship}}</view>
			</view>
			<view class="info">
        <view class="gender">性别：{{item.gender}}</view>
        <view class="age">年龄</view>
        <view class="ethnicity">民族</view>
        <view class="origin">籍贯</view>

				<view>电话：{{item.tel}}</view>
				<view class="address">详细地址：{{item.area}}{{item.home}}</view>
			</view>

			<view class="btngrps">
                 <view @click.stop="goalter(index)">查看档案</view>
				 <view @click.stop="cancel(index)">解除绑定</view>
			</view>
		</view>
		
		<view :id="status">
			<view id="alert">
				<view>
					是否确认解除当前选中对象
				</view>
				<view class="btngrp">
					<view @click.stop="no">取消</view>
					<view @click.stop="yes">确定</view>
				</view>
			</view>
		</view>
			 <view @click="to" id="addbtn">添加服务对象</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid:null,
				status:'hide',
				ct:' ',
				info:[
									{
										name:'于谦',
										relationship:'本人',
										tel:'1234567886',
										area:'海口市',
										home:'皮条胡同',
                    gender:"男"
									},
									{
										name:'郭德纲',
										relationship:'父子',
										tel:'1234546403',
										area:'海口市',
										home:'德云社',
                    gender:"男"
									}
								],
				userInfo:''
			}
		},
		onLoad() {
			
		},
		// onShow() {
		// 	this.userInfo = uni.getStorageSync("userInfo")
		// 	this.getaddress()
			
		// },
		onUnload() {
			uni.removeStorageSync("back")
		},
		methods: {
			act(index){
				console.log(index);
			var that = this
				that.ct=index;
				let info = this.info[index]
				console.log(index,info)
				uni.setStorage({
					key:'userAddress',
					data:info
				})
				if(uni.getStorageSync("back") == "back"){
					uni.removeStorageSync("back")
					uni.navigateBack({})
				}
				console.log(uni.getStorageSync("back"))
			},
			cancel(index){
				this.status="show";
				let info = this.info[index]
				uni.setStorage({
					key:'userAddress',
					data:info
				})
				console.log(index);
				var that = this
				that.ct=index;
			},
			no(){
				this.status="hide";
			},
			yes(){
				var that = this;
				this.status="hide";
				console.log(that.ct)
				console.log('data:',that.info[that.ct]);
				var uaid = that.info[that.ct].ua_id;
				var url = 'front/useraddress/delete',
				data = {field:'ua_id',op:'=',value:uaid},
				callback = function(res){
					console.log(uaid)
					that.info.splice(that.ct,1)
				};
				that.$request(url,data,callback)
				console.log(data)
			},
			getaddress(){
				var that = this;
				var url = 'front/useraddress/Useraddress',
				data = {field:'u_id',op:'=',value:that.userInfo.u_id},
				callback = function(res){
					console.log(res.data)
					that.info = res.data
					
					uni.setStorage({
						key:'userAddress',
						data:res.data[0]
					})
				}
				this.$request(url,data,callback)
			},
			goalter(index){
				this.ct=index;
				let info = this.info[index]
				uni.setStorage({
					key:'userAddress',
					data:info
				})
				uni.navigateTo({
					url:'Alter'
				})
			},
			goto(){
				uni.navigateTo({
					url:"Add"
				})
			}
		}
	}
</script>

<style>
.addressctn{
	width: 100%;
	background-color: #f8f8f8;
	height: 100vh;
	overflow: scroll;
	padding-bottom: 140rpx;
}
.addressctn>view{
	background: #fff;
	width: 90%;
	margin: 30rpx auto;
	border-radius: 40rpx;
	overflow: hidden;
	border: 1rpx solid #fff;
}
.addressctn>view.active{
	border-color: #0079FE;
}
.addressctn .username{
	font-size: 36rpx;
	font-weight: bold;
	display: flex;
}   
.username>view{
	margin: auto;
	margin-right: 0;
	font-size: 34rpx;
}
.addressctn .info>view{
	line-height: 60rpx;
	font-size: 26rpx;
}
.addressctn>view>view{
	margin: 20rpx;
	padding: 0 40rpx;
}
.address{
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
	line-clamp: 1;
	text-overflow: ellipsis;
}
.addressctn .btngrps{
	display: flex;
	width: 100%;
	margin: 0;
	margin-top: 20rpx;
}
.btngrps view{
	flex: 1;
	width: 50%;
	text-align: center;
	line-height: 90rpx;
	font-size: 32rpx;
	color: #595757;
	border: 1rpx solid #dedede;
	border-bottom:none;
}
.btngrps view:nth-child(1){
	border-left: none;
	border-right: none;
}
.btngrps view:nth-child(2){
	border-right: none;
}

.addressctn #addbtn{
	border: none;
	width: 90%;
	margin: auto;
	position: fixed;
	bottom: 40rpx;
	left: 0;
	right: 0;
	font-size: 34rpx;
	line-height: 100rpx;
	background: linear-gradient(90deg,#18b5fe,#0079FE);
	color: #fff;
	text-align: center;
	border-radius: 40rpx;
}
#hide{
	display: none;
}
#show{
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
#alert{
	display: flex;
	flex-flow: column;
	margin: auto;
	width: 70%;
	background-color: #fff;
	border-radius: 40rpx;
	padding: 0;
}
#alert>view{
	padding: 0 20rpx;
	margin: auto;
	text-align: center;
	width: 100%;
	margin: 0;
	margin-bottom: 40rpx;
	font-size: 30rpx;
}
#alert>view:nth-child(1){
	font-size: 34rpx;
	font-weight: bold;
	margin-top: 40rpx;
}
#show .btngrp{
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
