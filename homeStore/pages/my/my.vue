<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-flex-column">
				<u-avatar :src="src" :size="size" ></u-avatar>
				<view class="noactive u-margin-top-10" @tap="loginClick">{{ nickName }}</view>
			</view>
		</view>
		<!-- <view class="line-operate"></view> -->
		<u-gap height="8" bg-color="#f4f4f5"></u-gap>
		<view>
			<view class="u-margin-left-20 u-margin-top-20 u-padding-bottom-10 u-font-xl">
				我的订单
			</view>
			<u-line></u-line>
		</view>
	<view class="u-flex-row u-row-around order-wrap u-flex-nowrap">
			<view class="u-flex-1 u-flex-column" @tap="jumpToOrder(1)">
				<view>
					<u-image :src="readyPayUrl" width="70rpx" height="70rpx" shape="circle" mode="widthFix"></u-image>
				</view>
				<view class="order-types u-margin-top-5 u-font-md">待付款</view>
			</view>
			<view class="u-flex-1 u-flex-column" @tap="jumpToOrder(2)">
				<u-image :src="readySendUrl" width="70rpx" height="70rpx" shape="circle" mode="widthFix"></u-image>
				<view class="order-types u-margin-top-5 u-font-md">待发货</view>
			</view>
			<view class="u-flex-1 u-flex-column" @tap="jumpToOrder(3)">
				<u-image :src="readyReceiveUrl" width="70rpx" height="70rpx" shape="circle" mode="widthFix"></u-image>
				<view class="order-types u-margin-top-5 u-font-md">待收货</view>
			</view>
			<view class="u-flex-1 u-flex-column" @tap="jumpToOrder(4)">
				<u-image :src="readyEvaluateUrl" width="70rpx" height="70rpx" shape="circle" mode="widthFix"></u-image>
				<view class="order-types u-margin-top-5 u-font-md">待评价</view>
			</view>
		</view>
		<u-gap height="10" bgColor="#f4f4f5"></u-gap>
		<view class="u-config-wrap cellGroup">
			<view class="u-margin-left-20 u-margin-top-20 u-padding-bottom-10 u-font-xl">
				个人中心
			</view>
			<u-line />
			<u-cell-group>
				<u-cell title="我的卡券" size="20" clickable="true" :isLink="true" rightIconStyle="font-size:34rpx;">
					<u-icon slot="icon" size="40" name="coupon" color="#1596db"></u-icon>
				</u-cell>
				<u-cell title="联系客服" clickable="true" :isLink="true" rightIconStyle="font-size:34rpx;">
					<u-icon slot="icon" size="40" name="server-man" color="#2979ff"></u-icon>
				</u-cell>
				<u-cell title="售后电话" size="20" clickable="true" :isLink="true" rightIconStyle="font-size:34rpx;">
					<u-icon slot="icon" size="40" name="server-fill" color="#f8cd82"></u-icon>
				</u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'circle',
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				size: '90',
				bgColor: '#fcbd71',
				nickName:"立即登陆",
				loginType:"unLogin",//unlogin 未登录
				readyPayUrl:require("@/static/images/readyPay.png"),
				readySendUrl:require("@/static/images/readySend.png"),
				readyReceiveUrl:require("@/static/images/readyReceive.png"),
				readyEvaluateUrl:require("@/static/images/readyEvaluate.png"),
				checked:true
			}
		},
		methods: {
			// 立即登录
			loginClick(){
				if (this.loginType == "unLogin"){
					// this.$u.route("/pages/template/login/index");
				}
			},
			jumpToOrder(type){
				this.$u.route("/pages/order/order",{type});
			},
		}
	}
</script>
<style>
	.cellGroup .u-cell__title-text{
		font-size:30rpx!important;
	}
</style>
<style lang="scss" scoped>
	.u-demo-wrap{
		background-image:url("https://changhe-1304185974.cos.ap-nanjing.myqcloud.com/changhebgimg.jpg") ;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 100%;
		border-style:none;
		padding: 40px 0;
	}
	.noactive {
	  color:#ffffff;
	  font-size:32rpx;
	}
	.line-operate{
		width:100%;
		height:8rpx;
		background-color: #f4f4f5;
	}
	.line-operate-mid{
		width:100%;
		height:10rpx;
		background-color: #f4f4f5;
	}
	.u-demo{
		padding:0;
	}
	.u-demo-wrap{
		border-radius: unset;
	}
	.order-wrap{
		height:164rpx;
		.img{
			width: 60rpx!important;
		}
	}
	.order-types{
		color:$u-content-color;
		font-size:30rpx;
	}
	.u-cell_title::v-deep{
		margin-left:18rpx!important;
	}
	
	
</style>
