import Vue from 'vue'
Vue.prototype.$request=function(url,data,callback){
	uni.request({
		url:this.$domain + url,
		data: data,
		method:'POST',
		success: callback
	});
}