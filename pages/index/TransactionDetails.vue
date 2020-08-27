<!--交易明细页面 -->

<template>
	<view>
    <!--第一行导航栏 -->
    <view class="navigation-bar">
      <view class="nb1">全部</view>
      <view class="nb2">服务中</view>
      <view class="nb3">待评价</view>
      <view class="nb4">筛选</view>
    </view>

<!--    第二行 灰色背景条-->
    <view class="2ndline">
      <!--月份选择 -->
      <view class="month">本月</view>
        <view class="outcome">支出 ￥</view>
        <view class="income">收入 ￥</view>
        <view class="monthlybill">月账单</view>

      </view>


<!--    明细-->
    <view class="transdetails">
      <view v-for="(i,id) in list" :key="id">
        <view :class="id">{{i.name}}</view>
        <view :class="id">{{i.sorts}}</view>
        <view :class="id">{{i.time}}</view>
        <view :class="id">{{i.income}}</view>


      </view>




    </view>


	</view>
</template>

<script type="text/javascript">
//尝试生成顺序id


	export default {
		data() {
			return {
				list:[
          {
            name:"余额宝",
            sorts:"投资理财",
            time:"今天02:50",
            income:"+2.54"
          },
          {
            name:"支出1",
            sorts:"fadfadf",
            time:"今天02:50",
            income:"-2.54"
          },
          {
            name:"sfafdfd",
            sorts:"投a财",
            time:"今天02:50",
            income:"+2.54"
          },
        ]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
