<!--绑卡页面-->

<template>
	<view>
<!--    绑卡提示-->
		<view class="associatedHint">
      <view class="title">添加银行卡</view>
      <view class="plz">请绑定持卡人本人的银行卡</view>
    </view>

    <view class="owner">
      持卡人：<input type="text"/>
    </view>

    <view class="cardnum">
      卡号： <input type="number"/>
    </view>

    <view class="fast">
      工商银行支持免输卡号快速添加
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
/*！！解决一下输入和那啥不在一行的问题*/

.associatedHint{
  margin: 200rpx;
  width: 100%;
  height: 60rpx;
  flex-flow: column;

}
/* 添加银行卡的样式*/
.title{
  font-style: inherit;
  font-family: "Arial Rounded MT Bold";
  font-size:xx-large;
  margin: 20rpx;

}
/*请绑定的样式*/
.plz{
  font-style: inherit;
  font-size: large;
}
/* 卡号和持卡人的线*/
.owner,.cardnum{
  border-top:1rpx solid #dedede;
}

/* 卡号的下面的线不知道咋设置，那个线老往上跑*/
.cardnum{
  margin:60rpx ;
  border-bottom:1rpx solid #DEDEDE;
}
.owner,.cardnum,.input{
  height: 30rpx;
  margin: 70rpx;
  display: block;
  justify-content: left;

}


</style>

