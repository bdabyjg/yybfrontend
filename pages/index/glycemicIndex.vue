<!-- 血糖指数页面
 -->

<template>
	<view>
		<view class="results">

      <view class="text">最新血糖结果<br>
          108<br>
          毫摩尔/升</view>

    </view>
    <view>
<!--      血糖列表-->
      <view class="historical">
        <view v-for="(i,id) in List" :key="id">
          <view :class="id">{{i.num}}</view>
          <view :class="id">{{i.unit}}</view>
          <view :class="id">{{i.date}}</view>
        </view>
      </view>

      </view>

  </view>
</template>

<script>
	export default {
		data() {
			return {
			  List: [
          {
            num:"108",
            unit:"毫摩尔/升",
            date:"2020年8月30日"
          },
          {
            num:"108",
            unit:"毫摩尔/升",
            date:"2020年8月31日"
          },
          {
            num:"108",
            unit:"毫摩尔/升",
            date:"2020年9月1日"
          },
          {
            num:"108",
            unit:"毫摩尔/升",
            date:"2020年9月2日"
          },
          {
            num:"108",
            unit:"毫摩尔/升",
            date:"2020年9月2日"
          },
          {
            num:"108",
            unit:"毫摩尔/升",
            date:"2020年9月3日"
          },
        ]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style type="text/css">
.results{
  height: 300rpx;
  color: white;
  background-color: #dd524d;

}


/* 圆圈部分的布局*/
.text {

  border-radius: 50%;
  width: 200rpx;
  height: 200rpx;
  color: white;
  border: solid white;
  text-align: center;
  margin: 0 auto;

}
/*血糖列表不会排*/
.historical{
  color: #0079FE;
  background-color: white;
}

</style>
