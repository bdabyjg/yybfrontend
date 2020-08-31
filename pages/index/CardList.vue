<!--银行卡界面
    多张银行卡排列的界面
    不会排版

-->


<template>
	<view>
		  <view class="title">
			<h1>银行卡</h1>
      </view>
      <view class="List">

        <view v-for="(i,id) in List":key="id">
          <img src="/static/defaultavatar.jpg" alt="">
          <view class="id">{{i.name}}</view>
          <view class="id">{{i.sorts}}</view>
          <view class="id">{{i.num}}</view>
        </view>


      </view>

		
	</view>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
        List:[
          {
            name:"工商银行",
            sorts:"储蓄卡",
            num:"27439849037"

          },
          {
            name:"交通银行",
            sorts:"信用卡",
            num:"77549302874"

          },
          {
            name:"平安银行",
            sorts:"储蓄卡",
            num:"809854387453"
          },
        ]
			}
		},
		methods: {
			
		}
	}
</script>

<style type="text/css">
.title{
  margin: 40rpx;
  font-size: x-large;
}
image{
  width:200rpx;
  height: 200rpx;
  border-radius: 100%;
}
.List{
  margin: 30rpx;
  padding: 30rpx;
  display: grid;
}
/*完全不知道怎么排 我尽力了*/
</style>
