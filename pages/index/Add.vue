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
				<view>选择地区</view><input type="text"  @click="selectadd" disabled :value="area">
			</view>
			<view>
				<view>详细地址</view><input type="text" placeholder="请输入详细地址" v-model="home">
			</view>
			<view>
				<view>手机号</view><input type="number" placeholder="请输入手机号码" v-model="tel">
			</view>
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
				home:null,
				tel:null,
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
				that.home,
				that.tel,
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
						home:that.home,
						tel:that.tel,
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
	background:linear-gradient(90deg,#ffdc4d,#ffc64e);
	color: #fff;
}
</style>
