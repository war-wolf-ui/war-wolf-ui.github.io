webpackJsonp([8],{J613:function(t,e){},Jgji:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("s15t"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wl-txtlinkhref"},[s("div",{staticClass:"h-headtitle"},[t._v("AddressEdit 地址编辑")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"h-blocks"},[s("div",{staticClass:"h-title"},[t._v("基础用法")]),t._v(" "),s("div",{staticClass:"hb-a"},[s("div",{staticStyle:{width:"350px",border:"1px solid #ccc",padding:"10px","border-radius":"10px",height:"350px"}},[s("AddressEdit",{attrs:{addressInfo:t.addressInfo},on:{save:t.save}})],1)]),t._v(" "),s("div",{staticClass:"hb-code"},[s("div",{staticClass:"hb-cmain"},[s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(1)])])]),t._v(" "),s("div",{staticClass:"hb-b view-code-btn"},[t._v("查看代码")])]),t._v(" "),s("div",{staticClass:"h-blocks"},[s("div",{staticClass:"h-title"},[t._v("属性")]),t._v(" "),s("div",{staticClass:"hb-a"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[s("el-table-column",{attrs:{prop:"param",label:"参数",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),s("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1)],1)]),t._v(" "),s("div",{staticClass:"h-blocks"},[s("div",{staticClass:"h-title"},[t._v("Events")]),t._v(" "),s("div",{staticClass:"hb-a"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataEvent}},[s("el-table-column",{attrs:{prop:"eventName",label:"事件名",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"backParams",label:"回调参数"}})],1)],1)]),t._v(" "),s("div",{staticClass:"h-blocks"},[s("div",{staticClass:"h-title"},[t._v("Address 数据结构")]),t._v(" "),s("div",{staticClass:"hb-a"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataAddress}},[s("el-table-column",{attrs:{prop:"key",label:"键名",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"type",label:"类型"}})],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[this._v("介绍")]),this._v(" "),e("div",{staticClass:"h-main"},[this._v("\n            收货地址编辑组件，用于新建、更新收货地址。。\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v("\n                            <AddressEdit\n                                    :addressInfo=\"addressInfo\"\n                                    @save=\"save\"\n                            >\n                            </AddressEdit>\n                             data() {\n                                return {\n                                    addressInfo:{\n                                        id:'',\n                                        name:\"张三\",\n                                        tel:'15556666768',\n                                        province:'江苏省',\n                                        city:'南京市',\n                                        county:'玄武区',\n                                        addressDetail:'钟灵街50号'\n                                    }\n                                }\n                            },\n                            methods: {\n                                //保存回调\n                                save(d){\n                                    alert('保存');\n                                    console.log(d);\n                                }\n                            },\n                        ")]),this._v("\n                    ")])}]};var n=function(t){s("J613")},d=s("VU/8")(a.a,i,!1,n,"data-v-0499ecb3",null);e.default=d.exports},OHNh:function(t,e,s){"use strict";var a=s("Dd8w"),i=s.n(a),n={name:"addressList",props:{addressInfo:{type:Object,default:{}}},computed:{},watch:{},data:function(){return{info:{}}},mounted:function(){this.doData()},methods:{doData:function(){this.info=i()({},this.addressInfo,{provinceArea:this.addressInfo.province+this.addressInfo.city+this.addressInfo.county})},save:function(){this.$emit("save",this.info)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address"},[s("div",{staticClass:"edit"},[s("div",{staticClass:"ed-lis"},[s("div",{staticClass:"ed-lis-key"},[t._v("收货人")]),t._v(" "),s("div",{staticClass:"ed-lis-val"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.name,expression:"info.name"}],attrs:{placeholder:"请输入收货人"},domProps:{value:t.info.name},on:{input:function(e){e.target.composing||t.$set(t.info,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"ed-lis"},[s("div",{staticClass:"ed-lis-key"},[t._v("手机号码")]),t._v(" "),s("div",{staticClass:"ed-lis-val"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.tel,expression:"info.tel"}],attrs:{placeholder:"请输入手机号码",type:"tel",maxlength:"11"},domProps:{value:t.info.tel},on:{input:function(e){e.target.composing||t.$set(t.info,"tel",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"ed-lis"},[s("div",{staticClass:"ed-lis-key"},[t._v("省市区")]),t._v(" "),s("div",{staticClass:"ed-lis-val"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.provinceArea,expression:"info.provinceArea"}],attrs:{placeholder:"请选中省市区"},domProps:{value:t.info.provinceArea},on:{input:function(e){e.target.composing||t.$set(t.info,"provinceArea",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"ed-lis"},[s("div",{staticClass:"ed-lis-key"},[t._v("详细地址")]),t._v(" "),s("div",{staticClass:"ed-lis-val"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.info.addressDetail,expression:"info.addressDetail"}],attrs:{placeholder:"街道门牌、楼层房间号等信息"},domProps:{value:t.info.addressDetail},on:{input:function(e){e.target.composing||t.$set(t.info,"addressDetail",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"add-address-btn",on:{click:t.save}},[t._v("保存")])])},staticRenderFns:[]};var l=s("VU/8")(n,d,!1,function(t){s("eXGM")},"data-v-3b631965",null);e.a=l.exports},eXGM:function(t,e){},s15t:function(t,e,s){"use strict";(function(t){var a=s("OHNh");e.a={name:"wladdressedit",data:function(){return{addressInfo:{id:"",name:"张三",tel:"15556666768",province:"江苏省",city:"南京市",county:"玄武区",provinceArea:"江苏省南京市玄武区",addressDetail:"钟灵街50号"},tableData:[{param:"addressInfo",desc:"地址对象数据",type:"{}",defaultVal:""}],tableDataEvent:[{eventName:"save",desc:"点击保存按钮时触发",backParams:"obj: 地址对象"}],tableDataAddress:[{key:"id",desc:"每条地址的唯一标识",type:"number | string"},{key:"name",desc:"收货人姓名",type:"string"},{key:"tel",desc:"收货人手机号",type:"number | string"},{key:"province",desc:"省份",type:"string"},{key:"city",desc:"地市",type:"string"},{key:"county",desc:"区县",type:"string"},{key:"provinceArea",desc:"省市区",type:"string"},{key:"addressDetail",desc:"详细地址",type:"string"}]}},mounted:function(){this.doCode()},methods:{doCode:function(){t(".view-code-btn").click(function(){t(this).parent().find(".hb-code").slideToggle()})},save:function(t){alert("保存"),console.log(t)}},components:{AddressEdit:a.a}}}).call(e,s("7t+N"))}});
//# sourceMappingURL=8.070fffca27bd8a1aadd3.js.map