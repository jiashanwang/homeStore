<template>
	<view class="wrap">
		<view class="key-input">
			<view class="title">输入验证码</view>
			<view class="tips">验证码已发送至 +{{phone}}</view>
			<u-message-input :focus="true" :value="value" @change="change" @finish="finish" mode="bottomLine" :maxlength="maxlength"></u-message-input>
			<text :class="{ error: error }">验证码错误，请重新输入</text>
			<view class="captcha">
				<text :class="{ noCaptcha: show }" @tap="noCaptcha">收不到验证码点这里</text>
				<text :class="{ regain: !show }">{{ second }}秒后重新获取验证码</text>
			</view>
		</view>
		
		<!-- ==== -->
			<view class="wrap">
				<u-toast ref="uToast"></u-toast>
				<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" 
				@change="codeChange"></u-code>
				<u-button @tap="getCode">{{tips}}</u-button>
			</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			maxlength: 4,
			value: '',
			second: 60,
			show: false,
			error: false,
			phone:"",// 手机号码
			
			// ===
			tips: '',
			// refCode: null,
			seconds: 10,
		};
	},
	computed: {},
	onLoad(option) {
		// this.getCaptcha()
		let phone = JSON.parse(decodeURIComponent(option.phone));
		debugger;
		this.phone = phone;
		let interval = setInterval(() => {
			this.second--;
			if (this.second <= 0) {
				this.show = true;
				if (this.value.lenth != 4) {
					this.error = true;
				}
				clearInterval(interval);
			}
		}, 1000);
	},
	methods: {
		codeChange(text) {
						this.tips = text;
					},
						getCode() {
									if(this.$refs.uCode.canGetCode) {
										// 模拟向后端请求验证码
										uni.showLoading({
											title: '正在获取验证码'
										})
										setTimeout(() => {
											uni.hideLoading();
											// 这里此提示会被this.start()方法中的提示覆盖
											uni.$u.toast('验证码已发送');
											// 通知验证码组件内部开始倒计时
											this.$refs.uCode.start();
										}, 2000);
									} else {
										uni.$u.toast('倒计时结束后再发送');
									}
								},
								end() {
									uni.$u.toast('倒计时结束');
								},
								start() {
									uni.$u.toast('倒计时开始');
								}
		
		// ======
		// 收不到验证码选择时的选择
		noCaptcha() {
			uni.showActionSheet({
				itemList: ['重新获取验证码', '接听语音验证码'],
				success: function(res) {
					
				},
				fail: function(res) {
					
				}
			});
		},
		// change事件侦听
		change(value) {
			// console.log('change', value);
		},
		// 输入完验证码最后一位执行
		finish(value) {
			// console.log('finish', value);
		}
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 80rpx;
}

.box {
	margin: 30rpx 0;
	font-size: 30rpx;
	color: 555;
}

.key-input {
	padding: 30rpx 0;
	text {
		display: none;
	}
	.error {
		display: block;
		color: red;
		font-size: 30rpx;
		margin: 20rpx 0;
	}
}

.title {
	font-size: 50rpx;
	color: #333;
}

.key-input .tips {
	font-size: 30rpx;
	color: #333;
	margin-top: 20rpx;
	margin-bottom: 60rpx;
}
.captcha {
	color: $u-type-warning;
	font-size: 30rpx;
	margin-top: 40rpx;
	.noCaptcha {
		display: block;
	}
	.regain {
		display: block;
	}
}
</style>
