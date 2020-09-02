<!-- 医嘱管理界面 -->
<!--改个加号的按钮应该就可以了-->


<template>
	<view>
    <view class="title">医嘱管理</view>

    <view class="content">

        <view class="shadow" v-for="(i,id) in list" :key="id">
          <view class="text"><view :class="id">{{i.name}}</view></view>
          <view><view :class="id">{{i.date}}</view></view>

          </view>







    </view>
<!--    添加按钮-->
    <view class="addlogo">
      <icon type="success" size="50" class="post" bindtap="onPostClick"/>
    </view>
    </view>
</template>

<script>
	export default {
		data() {
      return {
        list:[
          {
            name:"11111",
            date:"x月x日   0:00"
          },
          {
            name:"222222",
            date:"x月x日   0:00"
          },
          {
            name:"3333333",
            date:"x月x日   0:00"
          },
          {
            name:"444444444",
            date:"x月x日   0:00"
          },
          {
            name:"55555555",
            date:"x月x日   0:00"
          },
        ]
      }
    }


		}

		methods: {

    }

</script>

<style>

.title{
  background-color: #0079FE;
  font-size: large;
  color: white;
  padding: 30rpx;
  text-align: center;
}
.text{
  font-size: x-large;
}
.shadow{
  margin:10rpx 14rpx 0rpx 14rpx;
  padding: 40rpx;
  border:1rpx solid #f0f0f0;
  border-radius: 20rpx;
}
.addlogo{
  float: right;
  background-color: #ffffff;
  position: fixed;
  bottom: 200rpx;
  right: 100rpx;
  border: 0 solid #ffffff;
  border-radius: 50%;
  box-shadow: 4rpx 1rpx 1rpx #cccccc;
}

</style>
