<template>
	<view>
		<view class="title">
			<view>我的收益</view>
		</view>

    <!-- -->
    <view class="balance">
      可提现余额
      <view class="withdraw">
        <view class="num">￥ 0.00</view>
        <button>提现</button>
      </view>

    </view>

	<view class="nowandhistories">
		<view class="now">
			￥ 0.00
			待生效收益
		</view>
		<view class="historical">
			￥ 0.00
			历史总收益
		</view>
	</view>
    <!-- -->
    <view>
      <view class="incomeList">收益记录</view>
    </view>
    <view class="classification">
      <view class="comes">收益来源</view>
      <view class="profit">收益金额</view>
      <view class="status">收益状态</view>

    </view>
    <view class="details">暂无收益</view>

		
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

<style type="text/css">
.title{
  margin: 30rpx;
}
.balance{

  width: 100%;
  height: 100rpx;
}
.withdraw{
  display: flex;
  height: 80rpx;
}

.num{
  width: 50%;
}

button{
  display: block;

  height: 70rpx;

  border-radius: 35rpx;
  color: white;
  background-color: #007AFF;
}

.details{
  width:80%;
  height: 300rpx;
  margin: 20rpx auto;
  border: 1rpx solid #DEDEDE;
  padding: 20rpx;
}
.nowandhistories{
  padding:80rpx;
  display: flex;
}
.now,.historical{
  flex-flow: column;
}
.incomeList{
  padding: 100rpx;
}
.classification{
  display: flex;
}
.comes,.profit,.status{
  margin: 60rpx;
  color: #c8c7cc;
}

</style>
