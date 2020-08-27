<!--正在交易和历史交易页面-->
<template>
  <view>
    <view class="bkg">

      <!-- 蓝色一个实体背景 -->
    </view>

    <!-- 现在进行的任务 now下面标记 -->
    <view class="now">
      <view class="ing">
        正在进行的任务

      </view>
      <view class="ingLists">

        <view class="nowimg">
          <image src="../../static/img1.png"/>
        </view>

        <view class="textnow">
          <view class="ingDetails">
            免费测血糖
          </view>
          <view class="ingPrice">
            ￥ 23.00       X 1
          </view>
        </view>

      </view>
    </view>
    <!-- 现在进行的任务部分结束-->


    <!-- 历史任务用histories标记 -->
    <view class="histories">
      <view class="hst">
        历史任务
      </view>
      <view class="hstimg">
        <image src="../../static/img1.png" mode=""/>
      </view>


      <view class="texthst">
        <view class="historyDetails">
          1-3月
          小儿推拿
        </view>
        <view class="historicalPrice">
          ￥  23.00     X 2
        </view>
      </view>


    </view>
    <!-- 历史任务部分结束-->
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
.bkg{
  background-color: #007AFF;
  display: flex;
  width: 100%;
  padding: 150rpx;

}
.now,.histories{
  width: 100%;
}
.ing .hst{
  margin: auto;
}
.nowimg,.hstimg{
  width: 200rpx;
  height: 150rpx;
}
.ingLists,.hst{
  display: flex;

}
.textnow,.texthst{
  flex-flow: column;
}
image{
  width: 100%;
  height: 100%;
}

</style>
