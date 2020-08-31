<template>
	<view class="addctn">
		<view class="tt">
			为您提供意外险、第三者责任险及医责险，请确保信息真实有效
		</view>

		<view class="addinfo">
            <view>
				<view>姓名</view><input type="text" placeholder="请输入真实姓名" v-model="name">
			</view>
			<view>
				<view>选择市县</view>
				<picker @change="cityslct" :value="city" :range="hnarea">
					<view>{{hnarea[city]}}</view>
				</picker>
			</view>
			<view>
<!--				<view>选择地区</view><input type="text"  @click="selectadd" disabled :value="area">-->
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
				<view>成员关系</view>
				<picker 
				mode="selector" 
				:range="relationship" 
				:value="relationshipct"
				@change="change"
				>
					<view>{{relationship[relationshipct]}}</view>
				</picker>
			</view>

		</view>

		<button id="save" @click="save">保存</button>
		<alert title="提示" msg="请填写正确,不能为空,保证号码正确" no="关闭" ref="hint"></alert>
	</view>
</template>

<script>
	import alert from '@/components/alert/alert.vue'
	export default {
		components:{alert},
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
				relationshipct:0,
				longitude:null,
				latitude:null,
				relationship:['本人','配偶','子女','孙子/孙女','父母','祖父母','朋友','亲戚','其他'],
				hnarea: ['海口', '三亚', '儋州', '陵水', '万宁', '五指山', '临高', '东方', '琼海', '文昌', '乐东', '定安', '澄迈', '白沙', '昌江', '琼中', '屯昌',
					'保亭', '三沙', '洋浦', '其他'
				],
				city: 0
			}
		},
		onLoad() {
			// this.userid = this.$getuserid
		},
		methods: {
		cityslct(e) {
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.city = e.target.value
		},
		selectadd(){
			var that=this;
			uni.chooseLocation({
			success:function(res) {
			console.log('位置名称：' + res.name);
			console.log('详细地址：' + res.address);
			console.log('纬度：' + res.latitude);
			console.log('经度：' + res.longitude);
			that.longitude =res.longitude
			that.latitude = res.latitude
			that.area=res.name+res.address;
			}
         });
		},
		
		save(){
			var count =0,
			that = this,
			datas = [
				that.name,
				that.area,
				that.gender,
        that.gender,  //性别
        that.age,
        that.ethnicity,  //民族
        that.origin,  //籍贯
        that.infectedDisease, //传染病史
        that.Allergies, //过敏史
        that.DoYouSmoke, //吸烟史
        that.surgeryHistory, //手术史
        that.injuryHistory,  //受伤史
        that.AlcoholConsumption, //是否饮酒
				that.relationship
				];
			    for(var i in datas){
			     if(!datas[i]){
			      count++
			     }
			    }
			    if(count > 0){
			     that.$refs.hint.alert()
				 return false
			    };
				if(that.area != "请点击选择的地址" && (/^1[3456789]\d{9}$/.test(that.tel)) ){
					var url = 'front/useraddress/addUseraddress',
					data = {
						u_id:that.userid,
						name:that.name,
						area:that.area,
            age:that.age,
            ethnicity:that.ethnicity,  //民族
            origin:that.origin,  //籍贯
            infectedDisease:that.infectedDisease, //传染病史
            Allergies:that.Allergies, //过敏史
            DoYouSmoke:that.DoYouSmoke, //吸烟史
            surgeryHistory:that.surgeryHistory, //手术史
            injuryHistory:that.injuryHistory,  //受伤史
            AlcoholConsumption:that.AlcoholConsumption, //是否饮酒



						longitude:that.longitude,
						latitude:that.latitude,
						relationship:that.relationship[that.relationshipct],
						city:that.hnarea[that.city]
						}
					var callBack = function(res){
						uni.navigateBack({})
					};
					console.log(data)
					that.$request(url,data,callBack)
				} else {
					that.$refs.hint.alert()
				}
		},
		change(e){
			this.relationshipct = e.target.value
		}
		
		}
		
	}
</script>

<style>

.infectedDisease, .Alergies,.DoYouSmoke,.surgeryHistory,.injuryHistory,.AlcoholConsumption{

  flex-flow: column;
}

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
