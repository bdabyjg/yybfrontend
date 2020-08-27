<!--提现界面 -->
<!--注释中带感叹号的地方表示有问题未解决 -->

<template>
	<view>
    <!-- 银行卡栏 -->
    <view class="card">
      <img src="/static/boc.jpg" alt="">
      <view class="specified">中国银行</view>
      <view class="sorts">尾号8787 储蓄卡</view>
    </view>

    <!--提现金额栏 -->
    <view class="withdrawAmount">
      <!-- 提现金额提示-->
      <view class="wdhints">提现金额
          <view class="wdamount">￥<input type="number"/></view>
        <!--余额提示 -->
        <view class="balanceHint">可用余额 0.00元</view>
      </view>

    </view>


    <!--确认提现按钮，蓝色背景 -->
    <view class="wdcomfirmbtn">
      预计两小时内到账，确认提现
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

<style type="text/css">
image{
  width: 200rpx;
  height: 150rpx;
  float: left;
}
.card{
  margin: 150rpx;

}
/*！
*无法将图片、中国银行等字左对齐，变得居中了


*/
image,.specified{
  flex-flow: row;
}
.specified,.sorts{
  flex-flow: column;
}


.wdamount{
  font-family: "Arial Rounded MT Bold";
  font-size: xx-large;
  border-bottom:1rpx solid #dedede;
}
/*确认按钮格式*/
.wdcomfirmbtn{
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
