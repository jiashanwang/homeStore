<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-area">
				<u-avatar 
					:mode="mode" 
					:size="size" 
					:src="src" 
					:text="text"
					:bgColor='bgColor'
				></u-avatar>
				<view class="u-font-xs u-text-center noactive u-font-md">{{ nickName }}</view>
			</view>
		</view>
		<!-- <view class="line-operate"></view> -->
		<u-gap height="8" bg-color="#f4f4f5"></u-gap>
		<view class="u-config-wrap">
			<view class="u-margin-top-50 u-margin-bottom-26 u-margin-left-20 u-font-md">
				我的订单
			</view>
			<u-line />
		</view>
		<view class="u-flex u-row-around order-wrap">
			<view class="u-flex-1 u-flex order-item" @tap="jumpToOrder(1)">
				<u-image :src="readyPayUrl" class="img" mode="widthFix"></u-image>
				<view class="order-types u-font-sm">待付款</view>
			</view>
			<view class="u-flex-1 u-flex order-item" @tap="jumpToOrder(2)">
				<u-image :src="readySendUrl"class="img" mode="widthFix"></u-image>
				<view class="order-types u-font-sm">待发货</view>
			</view>
			<view class="u-flex-1 u-flex order-item" @tap="jumpToOrder(3)">
				<u-image :src="readyReceiveUrl" class="img" mode="widthFix"></u-image>
				<view class="order-types u-font-sm">待收货</view>
			</view>
			<view class="u-flex-1 u-flex order-item" @tap="jumpToOrder(4)">
				<u-image :src="readyEvaluateUrl" class="img" mode="widthFix"></u-image>
				<view class="order-types u-font-sm">待评价</view>
			</view>
		</view>
		<!-- <view class="line-operate-mid"></view> -->
		<u-gap height="10" bg-color="#f4f4f5"></u-gap>
		<view class="u-config-wrap">
			<view class="u-margin-top-50 u-margin-bottom-26 u-margin-left-20 u-font-md">
				个人中心
			</view>
			<u-line />
			<u-cell-group>
				<u-cell-item title="我的卡券">
					<u-icon slot="icon" size="40" name="coupon" color="#1596db"></u-icon>
				</u-cell-item>
				<u-cell-item title="联系客服">
					<u-icon slot="icon" size="40" name="server-man" color="#2979ff"></u-icon>
				</u-cell-item>
				<u-cell-item title="售后电话">
					<u-icon slot="icon" size="40" name="server-fill" color="#f8cd82"></u-icon>
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'circle',
				// src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				src: '@/static/uview/example/user.png',
				text: '', // 优先级比src高
				size: '90',
				bgColor: '#fcbd71',
				nickName:"立即登陆",
				readyPayUrl:"../../static/uview/example/readyPay.png",
				readySendUrl:"../../static/uview/example/readySend.png",
				readyReceiveUrl:"../../static/uview/example/readyReceive.png",
				readyEvaluateUrl:"../../static/uview/example/readyEvaluate.png",
			}
		},
		methods: {
			jumpToOrder(type){
				this.$u.route("/pages/template/order/index",{type});
			},
		}
	}
</script>

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
	  margin-top:10rpx;
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
	.order-item{
		flex-direction: column;
	}
	.order-wrap{
		height:164rpx;
	}
	.order-wrap .img{
		width: 60rpx!important;
	}
	.order-types{
		color:$u-content-color;
	}
	.u-cell_title::v-deep{
		margin-left:18rpx!important;
	}
</style>
