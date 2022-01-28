webpackJsonp([5],{"2del":function(t,e,a){"use strict";(function(t){var s=a("OHNh");e.a={name:"wladdressedit",data:function(){return{tableData:[{param:"addressInfo",desc:"地址对象数据",type:"{}",defaultVal:""}],tableDataEvent:[{eventName:"save",desc:"点击保存按钮时触发",backParams:"obj: 地址对象"}],tableDataAddress:[{key:"id",desc:"每条地址的唯一标识",type:"number | string"}]}},mounted:function(){this.doCode()},methods:{doCode:function(){t(".view-code-btn").click(function(){t(this).parent().find(".hb-code").slideToggle()})},save:function(t){alert("保存"),console.log(t)}},components:{AddressEdit:s.a}}}).call(e,a("7t+N"))},OHNh:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),l={name:"addressList",props:{addressInfo:{type:Object,default:{}}},computed:{},watch:{},data:function(){return{info:{}}},mounted:function(){this.doData()},methods:{doData:function(){this.info=i()({},this.addressInfo,{provinceArea:this.addressInfo.province+this.addressInfo.city+this.addressInfo.county})},save:function(){this.$emit("save",this.info)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address"},[a("div",{staticClass:"edit"},[a("div",{staticClass:"ed-lis"},[a("div",{staticClass:"ed-lis-key"},[t._v("收货人")]),t._v(" "),a("div",{staticClass:"ed-lis-val"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.name,expression:"info.name"}],attrs:{placeholder:"请输入收货人"},domProps:{value:t.info.name},on:{input:function(e){e.target.composing||t.$set(t.info,"name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"ed-lis"},[a("div",{staticClass:"ed-lis-key"},[t._v("手机号码")]),t._v(" "),a("div",{staticClass:"ed-lis-val"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.tel,expression:"info.tel"}],attrs:{placeholder:"请输入手机号码",type:"tel",maxlength:"11"},domProps:{value:t.info.tel},on:{input:function(e){e.target.composing||t.$set(t.info,"tel",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"ed-lis"},[a("div",{staticClass:"ed-lis-key"},[t._v("省市区")]),t._v(" "),a("div",{staticClass:"ed-lis-val"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.provinceArea,expression:"info.provinceArea"}],attrs:{placeholder:"请选中省市区"},domProps:{value:t.info.provinceArea},on:{input:function(e){e.target.composing||t.$set(t.info,"provinceArea",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"ed-lis"},[a("div",{staticClass:"ed-lis-key"},[t._v("详细地址")]),t._v(" "),a("div",{staticClass:"ed-lis-val"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.addressDetail,expression:"info.addressDetail"}],attrs:{placeholder:"街道门牌、楼层房间号等信息"},domProps:{value:t.info.addressDetail},on:{input:function(e){e.target.composing||t.$set(t.info,"addressDetail",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"add-address-btn",on:{click:t.save}},[t._v("保存")])])},staticRenderFns:[]};var d=a("VU/8")(l,n,!1,function(t){a("eXGM")},"data-v-3b631965",null);e.a=d.exports},"X1G+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("2del"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wl-txtlinkhref"},[a("div",{staticClass:"h-headtitle"},[t._v("AddressSelect 地址选择")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"h-blocks"},[a("div",{staticClass:"h-title"},[t._v("基础用法")]),t._v(" "),a("div",{staticClass:"hb-a"}),t._v(" "),a("div",{staticClass:"hb-code"},[a("div",{staticClass:"hb-cmain"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(1)])])]),t._v(" "),a("div",{staticClass:"hb-b view-code-btn"},[t._v("查看代码")])]),t._v(" "),a("div",{staticClass:"h-blocks"},[a("div",{staticClass:"h-title"},[t._v("属性")]),t._v(" "),a("div",{staticClass:"hb-a"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"param",label:"参数",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1)],1)]),t._v(" "),a("div",{staticClass:"h-blocks"},[a("div",{staticClass:"h-title"},[t._v("Events")]),t._v(" "),a("div",{staticClass:"hb-a"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataEvent}},[a("el-table-column",{attrs:{prop:"eventName",label:"事件名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"backParams",label:"回调参数"}})],1)],1)]),t._v(" "),a("div",{staticClass:"h-blocks"},[a("div",{staticClass:"h-title"},[t._v("Address 数据结构")]),t._v(" "),a("div",{staticClass:"hb-a"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataAddress}},[a("el-table-column",{attrs:{prop:"key",label:"键名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}})],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[this._v("介绍")]),this._v(" "),e("div",{staticClass:"h-main"},[this._v("\n            收货地址编辑组件，用于新建、更新收货地址。。\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v("\n\n                        ")]),this._v("\n                    ")])}]};var l=function(t){a("eDP3")},n=a("VU/8")(s.a,i,!1,l,"data-v-1a8703cd",null);e.default=n.exports},eDP3:function(t,e){},eXGM:function(t,e){}});
//# sourceMappingURL=5.d459d281cb524ede6edc.js.map