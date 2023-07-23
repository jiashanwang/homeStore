<template>
	<!--大牌卡劵购物车页面-->
	<view class="card-container">
	  <view class="card-header">
	    <view class="left-wrap">
	      <view class="img-wrap">
	        <image class="img" mode="heightFix" :src="orderData.icon"></image>
	      </view>
	      <view class="product-desc">
	        <view class="name">{{orderData.name}}</view>
	        <!-- <view class="face-value">面值：{{orderData.currSeletedItem.amount}}元</view> -->
	        <view class="price">{{orderData.name}} 积分</view>
	      </view>
	    </view>
	    <view class="notice-desc">支持 7 天无理由退换货</view>
	  </view>
	  <view class="line-operate"></view>
	  <view class="use-desc">支付成功后，可前往 "个人中心 - 我的订单 - 查看详情" 使用</view>
	  <!-- <u-line border-style="dashed"></u-line> -->
	 <view class="buy-wrap">
	    <view class="buy-title">购买数量</view>
	    <view class="buy-operate">
		  <u-number-box v-model="buyNum" @minus="minusClick" @plus="plusClick" :step="1" :min="1" :max="100" :size="26"></u-number-box>
	    </view>
	  </view>
	  <view class="line-operate-mid"></view>
	 <view class="total-wrap product-total">
	    <view class="title">商品合计</view>
	    <view class="total-style">¥ {{totalPrice}}</view>
	  </view>
	  <view class="total-wrap">
	    <view class="title">服务费</view>
	    <view class="total-style">¥ {{chargePrice}}</view>
	  </view>
	  <view class="footer-wrap">
	    <view class="left-box">
	      <view class="total-num">共 {{buyNum}} 件,</view>
	      <view class="total-money">合计 <i class="price-style">¥ {{totalPrice + chargePrice}}</i></view>
	    </view>
	    <view class="buy-btn" bindtap="exchangePay">立即兑换</view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsUrl:"",
				orderData:{},
				buyNum:0,
				totalPrice:0,
				chargePrice:0
			}
		},
		onLoad(option){
			console.log("接收到的option2== ",JSON.parse(decodeURIComponent(option.orderData)));
			this.orderData = JSON.parse(decodeURIComponent(option.orderData));
		},
		methods: {
			// 购买数量加事件
			plusClick(data){
				console.log(data)
				this.buyNum = data.value;
			},
			// 购买数量减事件
			minusClick(data){
				this.buyNum = data.value;
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.card-container{
  display: block;
  /* margin:0 24rpx; */
  background-color: #f5f5f5;
  position: relative;
}
.card-header{
  display: block;
  padding:0 24rpx;
  height:180rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: relative;
}
.left-wrap{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height:180rpx;
}
.product-desc{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left:15rpx;
  height:150rpx;
}
.img-wrap .img{
  height:150rpx;
  border-radius: 15rpx;
}
.face-value,.use-desc{
  color:#999999;
  font-size:24rpx;
}
.use-desc{
  background-color: #ffffff;
  padding:40rpx 24rpx;
}
.notice-desc{
  background-color: #fff6eb;
  color:#eb8013;
  height:40rpx;
  line-height: 40rpx;
  border-radius: 20rpx;
  padding-left:16rpx;
  padding-right:16rpx;
  font-size:20rpx;
  position: absolute;
  bottom:10rpx;
  right:24rpx;
}
.line-operate-mid{
	width:100%;
	height:10rpx;
	background-color: #f4f4f5;
}
.line-operate{
  height:30rpx;
  background-color: #ffffff;
  border-bottom:1rpx solid #eeeeee;
}
.buy-wrap{
  font-size:34rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:140rpx;
  line-height: 140rpx;
  background-color: #ffffff;
  padding:0rpx 24rpx;
}
.buy-operate{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
.buy-operate .reduce,.buy-operate .add{
  width:70rpx;
  height:80rpx;
  line-height: 80rpx;
  text-align:center;
  border:1rpx solid #f2f2f2;
}
.buy-operate .num-input{
  width:80rpx;
  height:80rpx;
  text-align: center;
  line-height: 80rpx;
  background-color: #f8f8f8;
  border-top:1rpx solid #f2f2f2;
  border-bottom:1rpx solid #f2f2f2;
}
.total-wrap{
  display: flex;
  justify-content: space-between;
  padding:0 24rpx;
  height:80rpx;
  line-height: 80rpx;
  background-color: #ffffff;
  font-size:34rpx;
}
.total-wrap .title{
  width:200rpx;
}
.footer-wrap{
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom:0rpx;
  left:24rpx;
  right:24rpx;
  height:140rpx;
  font-size:32rpx;
}
.left-box{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex:1;  
}
.price-style,.total-style{
  font-size:34rpx;
  color:#eb8013;
  width:100rpx;
  margin-left:10rpx;
}
.total-style{
  flex:1;
  text-align: right;
}
.buy-btn{
  width:230rpx;
  text-align: center;
  color:#ffffff;
  height:80rpx;
  line-height: 80rpx;
  background: linear-gradient(to right,#fdb208, #f97b04);
  letter-spacing: 5rpx;  
  border-radius: 40rpx;
  font-size:34rpx;
}
.total-num{
  margin-right:20rpx;
}
</style>
