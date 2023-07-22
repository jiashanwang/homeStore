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
				<view class="u-font-xs u-text-center noactive">{{ nickName }}</view>
			</view>
		</view>
		<view class="line-operate"></view>
		<view class="u-config-wrap">
			<view class="u-margin-top-50 u-margin-bottom-30 u-margin-left-20">
				我的订单
			</view>
			<u-line />
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
				nickName:"立即登陆"
			}
		},
		methods: {
			styleChange(index) {
				if(index == 0) {
					this.text = '';
					this.src = 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg';
				} else {
					this.text = '无头像';
				}
			},
			sizeChange(index) {
				this.size = index == 0 ? 'large' : index == 1 ? 'default' : index == 2 ? 'mini' : 160;
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
		background-color: #e4e7ed;
	}
	.u-demo{
		padding:0;
	}
	.u-demo-wrap{
		border-radius: unset;
	}
</style>
