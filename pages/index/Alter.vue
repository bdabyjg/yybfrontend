<template>
	<view class="addctn">
		<view class="tt">
			为您提供意外险、第三者责任险及医责险，请确保信息真实有效
		</view>

		<view class="addinfo">
            <view>
				<view>姓名</view><input type="text" placeholder="请输入真实姓名" v-model="info.name">
			</view>
			<view>
				<view>选择市县</view>
				<picker @change="cityslct" :value="city" :range="hnarea">
					<view>{{info.city}}</view>
				</picker>
			</view>
      <view>
        <view class="gender">性别</view>

      </view>
      <view>
        <view class="age">年龄</view>
      </view>

      <view>
        <view class="ethnicity">民族</view><input type="text" placeholder=" " v-model="home">
      </view>
      <view>
        <view class="origin">籍贯</view><input type="number" placeholder=" " v-model="tel">
      </view>
      <view><view class="infectedDisease">有无既往传染病史?</view> </view>
      <view><view class="Allergies">有无过敏史？</view> </view>
      <view><view class="DoYouSmoke">是否吸烟？</view> </view>
      <view><view class="surgeryHistory">是否有手术史？</view></view>
      <view><view class="injuryHistory">是否有重大外伤史？</view> </view>
      <view><view class="AlcoholConsumption">是否饮酒？</view> </view>

      <view>
			<view>
				<view>成员关系</view><picker 
				mode="selector" 
				:range="relationships" 
				:value="relationshipct"
				@change="changect"
				>
					<view>{{info.relationship}}</view>
				</picker>
			</view>

		</view>

		<button id="save" @click="change">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        userid:null,
        area:'请点击选择的地址',
        name:null,
        gender:null,  //性别
        age:null,
        ethnicity:null,  //民族
        origin:null,  //籍贯
        infectedDisease:null, //传染病史
        Allergies:null, //过敏史
        DoYouSmoke:null, //吸烟史
        surgeryHistory:null, //手术史
        injuryHistory:null,  //受伤史
        AlcoholConsumption:null, //是否饮酒
        longitude:null,
        latitude:null,
				relationships:['本人','配偶','子女','孙子/孙女','父母','祖父母','朋友','亲戚','其他'],
				relationshipct:null,
				info:[],
				hnarea: ['海口', '三亚', '儋州', '陵水', '万宁', '五指山', '临高', '东方', '琼海', '文昌', '乐东', '定安', '澄迈', '白沙', '昌江', '琼中', '屯昌',
					'保亭', '三沙', '洋浦', '其他'
				],
				city: null
			}
		},
		onLoad() {
			this.info=uni.getStorageSync("userAddress")
			console.log(this.info)
		},
		methods: {
			cityslct(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.city = e.target.value
				this.info.city = this.hnarea[this.city]
			},
		selectadd(){
			var that=this;
			uni.chooseLocation({
			success: function (res) {
			console.log('位置名称：' + res.name);
			console.log('详细地址：' + res.address);
			console.log('纬度：' + res.latitude);
			console.log('经度：' + res.longitude);
			that.info.area=res.name+res.address;
			that.info.latitude=res.latitude;
			that.info.longitude=res.longitude;
			}
			 });
		},
		
		change(){
			var that = this,
			url = 'front/Useraddress/updateUserAddress',
			data = {
				field:'ua_id',
				value:that.info.ua_id,
				name:that.info.name,
				area:that.info.area,
        gender:that.info.gender,
        age:that.info.age,
        ethnicity:that.info.ethnicity,  //民族
        origin:that.info.origin,  //籍贯
        infectedDisease:that.info.infectedDisease, //传染病史
        Allergies:that.info.Allergies, //过敏史
        DoYouSmoke:that.info.DoYouSmoke, //吸烟史
        surgeryHistory:that.info.surgeryHistory, //手术史
        injuryHistory:that.info.injuryHistory,  //受伤史
        AlcoholConsumption:that.info.AlcoholConsumption, //是否饮酒
				latitude:that.info.latitude,
				longitude:that.info.longitude,
				home:that.info.home,
				tel:that.info.tel,
				relationship:that.info.relationship,
				city:that.info.city
				},
			callback = function(res){
				console.log(res)
				uni.navigateBack({
				})
			};
			var count =0
			for(var i in data){
			 if(!data[i]){
			  count++
			 }
			}
			if(count > 0){
				uni.showToast({
					title:"不能为空"
				})
			 return false
			};
			if( (/^1[3456789]\d{9}$/.test(data.tel)) ){
				console.log(data)
				that.$request(url,data,callback)
			}else{
				uni.showToast({
					title:'请检查号码是否正确'
				})
			}
		
		},
		changect(e){
			console.log(e)
			var that = this;
			that.relationshipct = e.target.value
			that.info.relationship = that.relationships[that.relationshipct]
		}
		}
		
	}
</script>

<style>
.addctn{
	width: 100%;
	background-color: #f8f8f8;
	height: 100vh;
}
.addctn .tt{
	font-size: 28rpx;
	color: #595757;
	width: 100%;
	padding: 20rpx;
}
.addinfo>view{
    background-color: #fff;
	width: 100%;
	display: flex;
	line-height: 80rpx;
	padding: 10rpx 30rpx;
	margin: 10rpx 0;
}
.addinfo>view>view{
	width: 20%;
}
.addinfo>view>input{
	height: 80rpx;
	width: 80%;
}
picker{
	width: 80%;
}
#save{
    width: 90%;
	margin: 80rpx auto;
	background:linear-gradient(90deg,#18b5fe,#0079FE);
	color: #fff;
}
</style>
