(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-code"],{"02df":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-53a9fd8a], uni-scroll-view[data-v-53a9fd8a], uni-swiper-item[data-v-53a9fd8a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-code-input[data-v-53a9fd8a]{display:flex;flex-direction:row;position:relative;overflow:hidden}.u-code-input__item[data-v-53a9fd8a]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative}.u-code-input__item__text[data-v-53a9fd8a]{font-size:15px;color:#606266}.u-code-input__item__dot[data-v-53a9fd8a]{width:7px;height:7px;border-radius:100px;background-color:#606266}.u-code-input__item__line[data-v-53a9fd8a]{position:absolute;bottom:0;height:4px;border-radius:100px;width:40px;background-color:#606266}.u-code-input__item__cursor[data-v-53a9fd8a]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:1px;height:40%;-webkit-animation:1s u-cursor-flicker-data-v-53a9fd8a infinite;animation:1s u-cursor-flicker-data-v-53a9fd8a infinite}.u-code-input__input[data-v-53a9fd8a]{position:absolute;left:%?-750?%;width:%?1500?%;top:0;background-color:initial;text-align:left}@-webkit-keyframes u-cursor-flicker-data-v-53a9fd8a{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes u-cursor-flicker-data-v-53a9fd8a{0%{opacity:0}50%{opacity:1}100%{opacity:0}}',""]),t.exports=e},"0648":function(t,e,n){var i=n("a04f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("94002c06",i,!0,{sourceMap:!1,shadowMode:!1})},"0800":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={props:{adjustPosition:{type:Boolean,default:uni.$u.props.codeInput.adjustPosition},maxlength:{type:[String,Number],default:uni.$u.props.codeInput.maxlength},dot:{type:Boolean,default:uni.$u.props.codeInput.dot},mode:{type:String,default:uni.$u.props.codeInput.mode},hairline:{type:Boolean,default:uni.$u.props.codeInput.hairline},space:{type:[String,Number],default:uni.$u.props.codeInput.space},value:{type:[String,Number],default:uni.$u.props.codeInput.value},focus:{type:Boolean,default:uni.$u.props.codeInput.focus},bold:{type:Boolean,default:uni.$u.props.codeInput.bold},color:{type:String,default:uni.$u.props.codeInput.color},fontSize:{type:[String,Number],default:uni.$u.props.codeInput.fontSize},size:{type:[String,Number],default:uni.$u.props.codeInput.size},disabledKeyboard:{type:Boolean,default:uni.$u.props.codeInput.disabledKeyboard},borderColor:{type:String,default:uni.$u.props.codeInput.borderColor},disabledDot:{type:Boolean,default:uni.$u.props.codeInput.disabledDot}}};e.default=i},"1ed4":function(t,e,n){"use strict";n.r(e);var i=n("ae2d"),a=n("53a2");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("37f3");var u=n("f0c5"),d=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"53a9fd8a",null,!1,i["a"],void 0);e["default"]=d.exports},"1f12":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("99af"),n("ac1f"),n("5319");var a=i(n("0800")),o={name:"u-code-input",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{inputValue:"",isFocus:this.focus}},watch:{value:{immediate:!0,handler:function(t){this.inputValue=String(t).substring(0,this.maxlength)}}},computed:{codeLength:function(){return new Array(Number(this.maxlength))},itemStyle:function(){var t=this;return function(e){var n=uni.$u.addUnit,i={width:n(t.size),height:n(t.size)};return"box"===t.mode&&(i.border="".concat(t.hairline?.5:1,"px solid ").concat(t.borderColor),0===uni.$u.getPx(t.space)&&(0===e&&(i.borderTopLeftRadius="3px",i.borderBottomLeftRadius="3px"),e===t.codeLength.length-1&&(i.borderTopRightRadius="3px",i.borderBottomRightRadius="3px"),e!==t.codeLength.length-1&&(i.borderRight="none"))),e!==t.codeLength.length-1?i.marginRight=n(t.space):i.marginRight=0,i}},codeArray:function(){return String(this.inputValue).split("")},lineStyle:function(){var t={};return t.height=this.hairline?"2px":"4px",t.width=uni.$u.addUnit(this.size),t.backgroundColor=this.borderColor,t}},methods:{inputHandler:function(t){var e=this,n=t.detail.value;this.inputValue=n,this.disabledDot&&this.$nextTick((function(){e.inputValue=n.replace(".","")})),this.$emit("change",n),this.$emit("input",n),String(n).length>=Number(this.maxlength)&&this.$emit("finish",n)}}};e.default=o},2039:function(t,e,n){var i=n("02df");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("114dd5f4",i,!0,{sourceMap:!1,shadowMode:!1})},"37f3":function(t,e,n){"use strict";var i=n("2039"),a=n.n(i);a.a},"53a2":function(t,e,n){"use strict";n.r(e);var i=n("1f12"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7182:function(t,e,n){"use strict";n.r(e);var i=n("7708"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7708:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{maxlength:4,value:"",second:60,show:!1,error:!1,phone:""}},computed:{},onLoad:function(t){var e=this,n=JSON.parse(decodeURIComponent(t.phone));this.phone=n;var i=setInterval((function(){e.second--,e.second<=0&&(e.show=!0,4!=e.value.lenth&&(e.error=!0),clearInterval(i))}),1e3)},methods:{noCaptcha:function(){uni.showActionSheet({itemList:["重新获取验证码","接听语音验证码"],success:function(t){},fail:function(t){}})},change:function(e){t.log("change",e)},finish:function(t){this.$refs.uToast.show({loading:!0,type:"warning",title:"结束后跳转标签页",message:"正在校验中...",duration:8e4,iconUrl:"https://cdn.uviewui.com/uview/demo/toast/jump.png"})}}};e.default=i}).call(this,n("5a52")["default"])},a04f:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.wrap[data-v-38b9da96]{padding:%?80?%}.box[data-v-38b9da96]{margin:%?30?% 0;font-size:%?30?%;color:555}.key-input[data-v-38b9da96]{padding:%?30?% 0}.key-input uni-text[data-v-38b9da96]{display:none}.key-input .error[data-v-38b9da96]{display:block;color:red;font-size:%?30?%;margin:%?20?% 0}.title[data-v-38b9da96]{font-size:%?50?%;color:#333}.key-input .tips[data-v-38b9da96]{font-size:%?30?%;color:#333;margin-top:%?20?%;margin-bottom:%?60?%}.captcha[data-v-38b9da96]{color:#f9ae3d;font-size:%?30?%;margin-top:%?40?%}.captcha .noCaptcha[data-v-38b9da96]{display:block}.captcha .regain[data-v-38b9da96]{display:block}.u-code-input[data-v-38b9da96]{justify-content:space-between}',""]),t.exports=e},ae2d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-code-input"},[t._l(t.codeLength,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-code-input__item",style:[t.itemStyle(i)]},[t.dot&&t.codeArray.length>i?n("v-uni-view",{staticClass:"u-code-input__item__dot"}):n("v-uni-text",{style:{fontSize:t.$u.addUnit(t.fontSize),fontWeight:t.bold?"bold":"normal",color:t.color}},[t._v(t._s(t.codeArray[i]))]),"line"===t.mode?n("v-uni-view",{staticClass:"u-code-input__item__line",style:[t.lineStyle]}):t._e(),t.isFocus&&t.codeArray.length===i?n("v-uni-view",{staticClass:"u-code-input__item__cursor",style:{backgroundColor:t.color}}):t._e()],1)})),n("v-uni-input",{staticClass:"u-code-input__input",style:{height:t.$u.addUnit(t.size)},attrs:{disabled:t.disabledKeyboard,type:"number",focus:t.focus,value:t.inputValue,maxlength:t.maxlength,adjustPosition:t.adjustPosition},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputHandler.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.isFocus=!0},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.isFocus=!1}}})],2)},a=[]},c1f9:function(t,e,n){"use strict";n.r(e);var i=n("c8ee"),a=n("7182");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c930");var u=n("f0c5"),d=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"38b9da96",null,!1,i["a"],void 0);e["default"]=d.exports},c8ee:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uCodeInput:n("1ed4").default,uToast:n("81a9").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("v-uni-view",{staticClass:"key-input"},[n("v-uni-view",{staticClass:"title"},[t._v("输入验证码")]),n("v-uni-view",{staticClass:"tips"},[t._v("验证码已发送至 +"+t._s(t.phone))]),n("u-code-input",{attrs:{mode:"box",maxlength:t.maxlength,focus:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},finish:function(e){arguments[0]=e=t.$handleEvent(e),t.finish.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("v-uni-text",{class:{error:t.error}},[t._v("验证码错误，请重新输入")]),n("v-uni-view",{staticClass:"captcha"},[n("v-uni-text",{class:{noCaptcha:t.show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.noCaptcha.apply(void 0,arguments)}}},[t._v("收不到验证码点这里")]),n("v-uni-text",{class:{regain:!t.show}},[t._v(t._s(t.second)+"秒后重新获取验证码")])],1)],1),n("u-toast",{ref:"uToast"})],1)},o=[]},c930:function(t,e,n){"use strict";var i=n("0648"),a=n.n(i);a.a}}]);