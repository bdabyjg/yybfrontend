<template>
	<view>
    <view class="logo">
      <img src="/static/logo.PNG"/>
      版本号  10.2.0
    </view>

<!--    文字部分-->
    <view class="details">
      <p>
        <view class="update">检测更新</view> <br>
        <view class="version">已经是最新版</view>
        去评分  <br>
        <view class = "autodownload">自动下载安装包</view> <br>
        

        版权信息  <br>
        服务协议
      </p>
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
.logo{
  display: flex;
  flex-flow: column;
}

</style>
