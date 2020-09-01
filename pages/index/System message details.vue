<!-- 系统通知详情界面 -->
<!--！！问题：1.点击查看详情跟图片做的不一样（不知道怎么做）-->
<!--     2.排版还是不一样。-->
<!--     3.悬浮按钮不会设置-->

<template>
	<view>
    <view class="title">系统通知</view>
    <view class="messages">
      <view v-for="(i,id) in list" :key="id">
        <view class="date"><view :class="id">{{i.date}}</view></view>
        <view class="passage">
          <view class="messagetitle"><view :class="id">{{i.messagetitle}}</view></view>
          <img src="/static/img1.png" alt="">
          <view :class="id">{{i.image}}</view>
        </view>
<!--        点击查看详情-->
          <view class="click">
            <button> <view :class="id">{{i.click}}</view>    </button>

          </view>


    </view>
		
	</view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
			  list:[
          {
           date:"08月30日",
           messagetitle:"系统消息1",
           click:"查看详情"
          },
          {
            date:"09月1日",
            messagetitle:"系统消息2",
            click:"查看详情"
          },
          {
            date:"09月2日",
            messagetitle:"系统消息3",
            click:"查看详情"
          },
        ]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.title{
  font-weight: bold;
  font-size: larger;
  text-align: center;
  padding: 30rpx;
}
.date{
  color: #DEDEDE;
}
.messagetitle{
  font-weight: bold;
  font-size: large;
}
.messages{
  width: 80%;
  height: 40%;
}
.passage{
  border-bottom:solid #DEDEDE;
  box-shadow:0rpx 2rpx 5rpx  #DEDEDE;
}
</style>
