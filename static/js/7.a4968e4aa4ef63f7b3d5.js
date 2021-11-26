webpackJsonp([7],{"7VV+":function(t,e){},v9UL:function(t,e,i){"use strict";(function(t){e.a={name:"wltxtlinkhref",data:function(){return{}},mounted:function(){this.doCode()},methods:{doCode:function(){t(".view-code-btn").click(function(){t(this).parent().find(".hb-code").slideToggle()})}},components:{}}}).call(e,i("7t+N"))},x36B:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("v9UL"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wl-txtlinkhref"},[i("div",{staticClass:"h-headtitle"},[t._v("Pay 支付（微信公众号，微信H5,微信小程序支付，微信扫码付，支付宝H5，支付宝扫码付）")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[t._v("1.微信公众号支付")]),t._v(" "),i("div",{staticClass:"hb-a"},[i("p",[t._v("微信公众号支付场景是在微信内打开的H5地址，既然在微信内打开就要按照微信的要求操作。")]),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("a.需要有效期内的微信服务号。")]),t._v(" "),i("p",[t._v("b.域名已经备案，并已经加入在微信公众号白名单里，业务域名，接口安全域名等已经加入。")]),t._v(" "),i("p",[t._v("开发步骤：")]),t._v(" "),i("p",[t._v("a.获取appId（根据具体业务，此步骤不一定需要）")]),t._v(" "),i("p",[t._v("b.获取code （微信提供）")]),t._v(" "),i("p",[t._v("前端把回调地址写好")]),t._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(2)]),t._v(" "),i("p",[t._v("c.到wxPayRecharge回调支付页面里")]),t._v(" "),i("p",[t._v("根据code 获取 openid （后端接口提供）")]),t._v(" "),i("p",[t._v("d.根据openid 请求后端接口 获取appid,timestamp,nonceStr,sign(给jsapi那个接口使用)，才能调用微信公众号支付的方法（wx.chooseWXPay）")]),t._v(" "),i("p",[t._v("e.唤起微信支付")]),t._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(3)])])]),t._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[t._v("2.微信H5支付")]),t._v(" "),i("div",{staticClass:"hb-a"},[i("p",[t._v("微信H5支付场景是在非微信内打开的H5地址，比如用手机浏览器访问H5地址，通过浏览器拉起微信支付的功能。")]),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("a.根据后端接口返回的url地址，前端重定向")]),t._v(" "),i("p",[t._v("b.支付结果后跳转的页面，需要后端配置")]),t._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(5)])])]),t._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[t._v("3.微信小程序支付")]),t._v(" "),i("div",{staticClass:"hb-a"},[i("p",[t._v("微信小程序支付场景是在微信小程序环境里。只能用小程序特有的支付方法，才能完成支付。")]),t._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(6)])])]),t._v(" "),t._m(7),t._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[t._v("5.支付宝H5支付")]),t._v(" "),i("div",{staticClass:"hb-a"},[i("p",[t._v("支付宝H5支付场景是在手机浏览器内打开H5地址，通过浏览器拉起支付宝支付的功能。")]),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("a.根据后端接口返回的url地址，前端重定向")]),t._v(" "),i("p",[t._v("b.支付结果后跳转的页面，需要后端配置")]),t._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(9)]),t._v(" "),i("p",[t._v("c.再调用支付结果接口跳转，然后处理业务逻辑。")])])]),t._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[t._v("6.支付宝扫码付")]),t._v(" "),i("div",{staticClass:"hb-a"},[i("p",[t._v("a.支付宝扫码付场景是在PC端商城等。")]),t._v(" "),i("p",[t._v("b.根据后端接口返回的数据，前端生成二维码，并把参数放在二维码里。")]),t._v(" "),t._m(10),t._v(" "),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(11)]),t._v(" "),i("p",[t._v("c.再调用支付结果接口跳转，然后处理业务逻辑。")])])]),t._v(" "),t._m(12)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[this._v("介绍")]),this._v(" "),e("div",{staticClass:"h-main"},[this._v("\n            支付组件，将针对常用的前端支付方式进行梳理，微信公众号，微信H5,微信小程序支付，微信扫码付，支付宝H5，支付宝扫码付。\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("开发前要求：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v("\n            //根据业务 写好回调地址及参数\n            let redirectURI = encodeURIComponent(`${location.origin}/wxPayRecharge?payAmount=${this.chargeMoney}`);\n            //通过location 页面跳转到微信支付页，\n            //只需要把 appid 和 redirect_uri 绑进去\n            window.location = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectURI}&response_type=code&scope=snsapi_base&state=WXPaySTATE#wechat_redirect`;\n            //跳转到设定好的地址里 wxPayRecharge，url里 会带有code 参数\n                        ")]),this._v("\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v('\n            //timeStamp，nonceStr，package，signType，paySign 后端接口提供，d步接口返回\n            wx.chooseWXPay({\n                timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符\n                nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位\n                package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\\*\\*\\*）\n                signType: data.signType, // 微信支付V3的传入RSA,微信支付V2的传入格式与V2统一下单的签名格式保持一致\n                paySign: data.paySign, // 支付签名\n                success: function (res) {\n                    // 支付成功后的回调函数\n                    if (res.err_msg == "get_brand_wcpay_request:ok") {\n                        location.href = `${location.origin}/storedValueCard`,   //根据业务要求 支付后返回地址\n\n                    } else {\n                        location.href = `${location.origin}/storedValueCard?status=err`,    //根据业务要求 支付后返回地址\n                    }\n                }\n            });\n                        ')]),this._v("\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("开发步骤：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v("\n            location.href = `${url}`;\n                        ")]),this._v("\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v("\n            wx.requestPayment({\n              timeStamp: '',\n              nonceStr: '',\n              package: '',\n              signType: 'MD5',\n              paySign: '',\n              success (res) { },\n              fail (res) { }\n            })\n                        ")]),this._v("\n                    ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[t._v("4.微信扫码付")]),t._v(" "),i("div",{staticClass:"hb-a"},[i("p",[t._v("微信扫码付场景是在PC端商城等。")]),t._v(" "),i("p",[t._v("根据后端接口返回的数据，前端生成二维码，并把参数放在二维码里。")]),t._v(" "),i("p",[i("img",{attrs:{src:"http://zsbg001.oss-cn-hangzhou.aliyuncs.com/base/1637897572310_93.23523587470972_eed3e88a-bfd1-4755-955f-6e245de69d25.png"}})]),t._v(" "),i("p",[t._v("在调用支付结果接口跳转，然后处理业务逻辑。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("开发步骤：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v('\n            const form = url; //url为接口返回的地址\n            const div = document.createElement("div");\n            div.id = "alipay-recharge";\n            div.innerHTML = form;\n            document.body.appendChild(div);\n            document.querySelector("#alipay-recharge").children[0].submit();\n                        ')]),this._v("\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://zsbg001.oss-cn-hangzhou.aliyuncs.com/base/1637898044849_10.848060848183316_276e524d-03be-43c5-8e2c-5c1373e56c07.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v("\n            const div=document.createElement('div');\n            div.innerHTML=d.data.url;\n            $('body').prepend(div); //放在body里的最前面\n                        ")]),this._v("\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[this._v("7.其他")]),this._v(" "),e("div",{staticClass:"hb-a"},[e("p",[e("a",{staticClass:"download-files",attrs:{href:"../../../static/files/paycode.zip"}},[this._v("下载文件")])])])])}]};var a=function(t){i("7VV+")},c=i("VU/8")(s.a,n,!1,a,"data-v-60e7e8c4",null);e.default=c.exports}});
//# sourceMappingURL=7.a4968e4aa4ef63f7b3d5.js.map