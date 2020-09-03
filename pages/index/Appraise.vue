<template>
	<view class="ctn">
		<view class="top" >
			<view class="info">
			<view class="icon">
				<image src="../../static/life/xing.png" mode=""></image>
			</view>
			<view>
                 姓名：郭千千<br>
				 年龄：xxx<br>
				 工龄：xxx
			</view>
			</view>
            <view class="btngrp">
				<view class="no" :class="{act:pj=='no'}" data-pj="no" @click="slct">
					
					<view><uni-icons :type="noicon" size="20"></uni-icons></view>
					<view>不满意</view></view>
				<view class="yes" :class="{act:pj=='yes'}" data-pj="yes" @click="slct">
					
					<view><uni-icons :type="yesicon" size="20"></uni-icons></view>
					<view>满意</view></view>
			</view>
			
			<view class="pjctn">
             <helang-checkbox ref="checkbox" @change="valueChange"></helang-checkbox>
			</view>
		</view>

        <view class="starctn"> 
				 <checkbox-group class="top">
					 <view>请您对本次服务进行评价</view>
					 <label>
						<text>匿名提交</text> <checkbox value='匿名提交' />
					 </label>
				 </checkbox-group>

				 <view class="mid">
					 <view class="info">
                     <view class="imgbox"><image :src="listData.img" mode="widthFix"></image></view>
					 <view class="tt">乳腺疏通服务</view>
					 </view>

					 <view class="stargrp">
					 <view>总体</view>
                     <uni-rate size="20" :mk="'总体'" :nameid="'one'"></uni-rate>
					 <view class="yj">非常满意</view>
					 </view>

					 <view class="stargrp">
					 <view>服务态度</view>
                     <uni-rate size="20" :mk="'服务态度'" :nameid="'two'"></uni-rate>
					 <view class="yj">非常满意</view>
					 </view>

					 <view class="stargrp">
					 <view>服务质量</view>
                     <uni-rate size="20" :mk="'服务质量'" :nameid="'three'"></uni-rate>
					 <view class="yj">非常满意</view>
					 </view>
				 </view>
			 </view>

			 <view class="down">
					 <view class="area">
                        <textarea placeholder="请输入评论" v-model="comment">
							
						</textarea>

		<view class="chenge">
		<view @click="getImg"><image src="../../static/common/add.png" mode=""></image></view>
		<view v-for="(item,index) in imgArr" :key="index">
			<image :src="item" @click="lookImg(index)"></image>
		</view>
	    </view>
					 </view>
				 </view>

				 <view class="btn" @click="sbmt">
                   评论
				 </view>
		</view>
		
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'
import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import helangCheckbox from "@/components/helang-checkbox/helang-checkbox.vue"
	export default {
		components: {
				"helang-checkbox":helangCheckbox,
				 "uni-rate":uniRate,
				 uniIcons
				 },
		data() {
			return {
				pj:'',
				yesicon:'hand-thumbsup',
				noicon:'hand-thumbsdown',
				imgArr: [],
				star:[],
				img:"",
				checkbox:[],
				is_visit:false,
				listData:{}
			}
		},
		onLoad(event){
			this.listData =JSON.parse(decodeURIComponent(event.query)) ;
			console.log('2',this.listData)
		this.$refs.checkbox.set({
			type:'checkbox',// 类型：单选框
			column:2,       // 分列
			list:[          // 列表数据
			{text:'态度友好'},
			{text:'技术娴熟'},
			{text:'服务专业'},
			{text:'体验很棒'}
		]   
		});
				uni.$on('one' , (val)=>{
					this.star[1] = val;
				});
				
				uni.$on('two' , (val)=>{
					this.star[2] = val;
				});
				
				uni.$on('three' , (val)=>{
					this.star[3] = val;
				});
		},
		methods: {
			valueChange(){
				let data = this.$refs.checkbox.get();   // 组件返回的数据
				var str = JSON.stringify(data);
				var json = JSON.parse(str);
				this.checkbox = json;
			},
			slct(e){
				console.log(e);
				this.pj=e.currentTarget.dataset.pj;
				if(this.pj=='no'){
					this.noicon='hand-thumbsdown-filled'
					this.yesicon='hand-thumbsup'
					
				}else{
					this.yesicon='hand-thumbsup-filled'
					this.noicon='hand-thumbsdown'
					
				};

				
			},
			getImg: function() {
				var that = this
				uni.chooseImage({
					count: 1,
					// sizeType压缩图片
					sizeType: "compressed",
					success: (res) => {
						that.imgArr = res.tempFilePaths
						console.log('add img:',res.tempFilePaths[0]);
						let callBack=function(data){
							console.log('img',data.data);
							that.img = data.data
							
						}
						that.uploadFile('image/upload',res.tempFilePaths[0],callBack)
					}
				})
			},
			lookImg: function(val) {
				const urls = this.imgArr
				const current = val
				uni.previewImage({
					urls,
					current
				})
			},
			sbmt(){
				var that = this
				if (this.comment){
					let data={
						o_id:this.listData.o_id,
						sl_id:this.listData.sl_id,
						content:this.comment,
						tel:this.listData.tel,
						img:that.img
					}
					console.log('data',data);
					console.log('img',that.imgArr)
					let url =that.$host+'order/appraise'
					let callback=function(res){
						console.log('ok',res.data)
						uni.showToast({
							title:'评论成功',
							success() {
								let d={id:that.listData.id}
								let a=function(){}
								let u =that.$host+'order/setAppraise'
								that.$request(u,d,a)
								uni.navigateBack({
								})
							}
						})
					}
					that.$request(url,data,callback)
				}else{
					uni.showModal({
						title:'提示',
						content:"评论不能为空"
					})
				}
				
				
				
			}
		}
	}
</script>

<style>
page,view{
		display: block;
	}
image{
	width: 100%;
	height: 100%;
}
.ctn{
	background-color: #f5f5f5;
	padding: 20rpx 0;
	height: 100vh;
	overflow: scroll;
}
.top {
	width: 90%;
	margin:auto;
	padding: 20rpx;
	background-color: #fff;
	border-radius: 40rpx;
}
.info{
	display: flex;
}
.info>view{
	width: 40%;
	height: 200rpx;
	line-height: 70rpx;
	margin: auto;
}
.btngrp{
	display: flex;
}
.btngrp>view{
	margin: auto;
	width: 45%;
	margin-top: 40rpx;
	text-align: center;
	border-radius: 20rpx;
	background-color: #f5f5f6;
	font-weight: bold;
	line-height: 60rpx;
	padding: 10rpx;
	display: flex;
}
.btngrp>view>view:nth-child(1){
	width: 45%;
}
uni-icons{
	vertical-align: middle;
}
.btngrp .yes.act{
    background-color: #0079FE;
	color: #ffffff;
}
.btngrp .no.act{
	background-color:#ff3f04 ;
	color: white;
}
.pjctn{
	width: 100%;
	margin-top: 20rpx;
}
.pjctn helang-checkbox{
	width: 90%;
}
.starctn{
	width: 90%;
	margin: auto;
	border-radius: 40rpx;
	background-color: #fff;
	margin-top: 20rpx;
	padding: 20rpx;
}
.starctn .top{
    font-size: 36rpx;
}
.starctn .top>view{
	display: inline-block;
	line-height: 50rpx;
}
.starctn .top label{
	float: right;
	line-height: 50rpx;
}
.starctn .top label text{
	margin-right: 20rpx;
}
.starctn .info{
	display: flex;
	margin: 20rpx 0;
	display: none;
}
.starctn .info .tt{
	margin: auto;
	margin-left: 0;
	width: 50%;
	font-size: 30rpx;
}
.starctn .info .imgbox{
	width: 30%;
	height: 170rpx;
	margin: auto;
}
.starctn .stargrp{
	width: 90%;
	margin: 20rpx auto;
	font-size: 34rpx;
	display: flex;
}
.starctn .stargrp>view{
	margin: auto;
	line-height: 80rpx;
}
uni-rate{
display: flex;
width: 55%;
}
.uni-rate{
	margin: auto;
}
.uni-rate>view{
	margin: auto;
}
.down{
	width: 90%;
	margin: 20rpx auto;
	background-color: #fff;
	border-radius: 40rpx;
	padding:20rpx
	}
.down .area{
	padding: 40rpx;
	margin: auto;
	font-size: 32rpx;
}
.down .area>textarea{
	width: 100%;
	height: 200rpx;
	margin: auto;
}
.down .area .chenge{
	display: flex;
	flex-wrap: wrap;
}
.chenge view{
	width: 32%;
	height: 200rpx;
	margin:.5%
}
.btn{
	background: linear-gradient(45deg,#2f9bfe,#0079FE);
	width: 90%;
	margin: auto;
	line-height: 80rpx;
	color: #fff;
	text-align: center;
	font-size: 34rpx;
	border-radius: 20rpx;
}
</style>
