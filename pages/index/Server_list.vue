<!--查看签约界面-->

<!--！！是否开启咨询和签约医生申请不知道怎么对齐-->

<template>
  <view>
    <view class="banner">
     我的服务
    </view>
  <view class="question">
    是否开启咨询
    <view class="qsbtn"><!--  开启咨询按钮-->
      <switch checked bindchange="switch1Change"/>
    </view>
    </view>

<!--    签约医生申请-->
    <view class="apply">
      签约医生申请
    </view>


	<view class="ctn">
		<checkbox-group class="listctn" @change="getchenge">
			<view class="tr" v-for="(item, index) in list" :key="index" @click="show(index)">
				<view class="info">
					<view class="arrow"><uni-icons :type="item.status == true ? 'arrowdown': 'arrowright'" size="18"></uni-icons></view>
					<view>{{item.name}}</view>
<!--					<view><checkbox :value='item.name' /></view>-->
				</view>
				<view class="msg" :class="{showmsg:item.status == true}">
					{{item.info}}
				</view>
			</view>

			<view class="tr" v-for="(item, index) in custom" :key="index">
				<view class="info">
					<view class="arrow"><uni-icons type="arrowright" size="18"></uni-icons></view>
					<view><input type="text" placeholder="自定义服务" v-model="custom.name"></view>
<!--					<view><checkbox :value='custom.name' /></view>-->
				</view>
			</view>

			<view @click="add(item)"  class="tr add" >
				添加新自定义
			</view>
		</checkbox-group>

		<view class="btn">完成</view>
	</view>
  </view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
   		components: {uniIcons},
		data() {
			return {
				list:[
					{
						name:'签约服务',
						status:false,
						info:"测试详情测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
					},
					{
						name:'签约服务',
						status:false,
						info:"测试详情测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
					},
					{
						name:'签约服务',
						status:false,
						info:"测试详情测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
					}
				],
				custom: [
					{
						name:'自定义',
						status:false,
						info: '请自定义'
					}
				]
			}
		},
		methods: {
			getchenge(e){
				console.log(e.detail.value)
			},
			show(id){
				this.list[id].status = !this.list[id].status
			},
			add(id){
			console.log(id)
			var obj={
						name:'自定义',
						status:false,
						info: '请自定义'
					}
					this.custom.push(obj)
				}
		}
	}
</script>

<style>
.banner{
  color: white;
  background-color: #0079FE;
  height: 200rpx;
  text-align: center;

}
.question{
  display: flex;
  margin: 30rpx;
  justify-content: space-between;
  color: #DEDEDE;
}
.apply{
  color: #DEDEDE;
  border-bottom:solid 1rpx #DEDEDE;
  padding:0 40rpx;
  justify-content: space-between;
}
.ctn{
	height: 100vh;
	overflow: scroll;
	padding: 0 40rpx;
	/*background: linear-gradient(120deg,#487db0,#fbc531);*/

}
.listctn{
	box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	margin-top: 40rpx;
	margin-bottom: 160rpx;
}
.tr{
	display: flex;
	font-size: 36rpx;
	padding: 20rpx;
	border-top: 1rpx solid #dedede;
	background: rgba(255, 255, 255, 0.5);
	margin: 10rpx 0;
	flex-flow: column;
	transition: all 2s;
}
.info{
	display: flex;
	align-items: center;
	flex-grow: 1;
}
.info:nth-child(1){
	border-top: none;
}
.info>view:nth-child(3){
	margin-left: auto;
}
.arrow{
	margin-right: 20rpx;
}
.msg{
	font-size: 28rpx;
	margin-top: 20rpx;
	display: none;
	height: 0;
}
.tr .showmsg{
	display: block;
	height: auto;
}
.btn {
		position: fixed;
		bottom: 40rpx;
		width: 80%;
		color: #fff;
		background-color: #0079FE;
		left: 0;
		right: 0;
		padding: 20rpx;
		text-align: center;
		border-radius: 40rpx;
		margin: auto;
	}
.add{
	text-align: center;
}
</style>
