webpackJsonp([6],{"0p2v":function(a,t,i){"use strict";(function(a){var e=i("G50z");t.a={name:"wlradio",data:function(){return{radio1:"1",radio2:"选中加禁用",tableData:[{param:"v-model",desc:"绑定值",type:"string / number",defaultVal:""},{param:"label",desc:"Radio 的 value",type:"string / number",defaultVal:""},{param:"disabled",desc:"是否禁用",type:"boolean",defaultVal:"false"}],tableDataEvent:[{eventName:"change",desc:"绑定值变化时触发的事件",backParams:"选中的 Radio label 值"}]}},mounted:function(){this.doCode()},methods:{doCode:function(){a(".view-code-btn").click(function(){a(this).parent().find(".hb-code").slideToggle()})}},components:{Radio:e.a}}}).call(t,i("7t+N"))},G50z:function(a,t,i){"use strict";var e={name:"radio",props:{label:{type:[String,Number],default:null},value:{type:[String,Number],default:null},disabled:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){},methods:{handleRadio:function(){this.$emit("input",this.label),this.$emit("change",this.label)}}},l={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"radio",class:{active:this.value==this.label,disabled:this.disabled},on:{click:this.handleRadio}},[t("span",{staticClass:"radio-icon"}),this._v(" "),t("span",{staticClass:"radio-txt"},[this._t("default")],2),this._v(" "),t("span",{staticClass:"over",on:{click:function(a){a.stopPropagation()}}})])},staticRenderFns:[]};var s=i("VU/8")(e,l,!1,function(a){i("pdDF")},"data-v-fce97108",null);t.a=s.exports},ODiF:function(a,t){},pdDF:function(a,t){},sOXD:function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i("0p2v"),l={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"wl-radio"},[i("div",{staticClass:"h-headtitle"},[a._v("Radio 单选框")]),a._v(" "),a._m(0),a._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[a._v("基础用法")]),a._v(" "),i("div",{staticClass:"hb-a"},[a._v("由于选项默认可见，不宜过多。")]),a._v(" "),i("div",{staticClass:"hb-a"},[i("Radio",{attrs:{label:1},model:{value:a.radio1,callback:function(t){a.radio1=t},expression:"radio1"}},[a._v("单选1")]),a._v(" "),i("Radio",{attrs:{label:2},model:{value:a.radio1,callback:function(t){a.radio1=t},expression:"radio1"}},[a._v("单选2")])],1),a._v(" "),i("div",{staticClass:"hb-a"},[a._v("要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number。")]),a._v(" "),i("div",{staticClass:"hb-code"},[i("div",{staticClass:"hb-cmain"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a._m(1)])])]),a._v(" "),i("div",{staticClass:"hb-b view-code-btn"},[a._v("查看代码")])]),a._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[a._v("禁用状态")]),a._v(" "),i("div",{staticClass:"hb-a"},[a._v("单选框不可用的状态。")]),a._v(" "),i("div",{staticClass:"hb-a"},[i("Radio",{attrs:{disabled:"",label:"禁用"},model:{value:a.radio2,callback:function(t){a.radio2=t},expression:"radio2"}},[a._v("单选1")]),a._v(" "),i("Radio",{attrs:{disabled:"",label:"选中加禁用"},model:{value:a.radio2,callback:function(t){a.radio2=t},expression:"radio2"}},[a._v("单选2")])],1),a._v(" "),i("div",{staticClass:"hb-a"},[a._v("只要在Radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。")]),a._v(" "),i("div",{staticClass:"hb-code"},[i("div",{staticClass:"hb-cmain"},[i("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a._m(2)])])]),a._v(" "),i("div",{staticClass:"hb-b view-code-btn"},[a._v("查看代码")])]),a._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[a._v("属性")]),a._v(" "),i("div",{staticClass:"hb-a"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData}},[i("el-table-column",{attrs:{prop:"param",label:"参数",width:"180"}}),a._v(" "),i("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),a._v(" "),i("el-table-column",{attrs:{prop:"type",label:"类型"}}),a._v(" "),i("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1)],1)]),a._v(" "),i("div",{staticClass:"h-blocks"},[i("div",{staticClass:"h-title"},[a._v("Events")]),a._v(" "),i("div",{staticClass:"hb-a"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableDataEvent}},[i("el-table-column",{attrs:{prop:"eventName",label:"事件名",width:"180"}}),a._v(" "),i("el-table-column",{attrs:{prop:"desc",label:"说明",width:"180"}}),a._v(" "),i("el-table-column",{attrs:{prop:"backParams",label:"回调参数"}})],1)],1)])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"h-blocks"},[t("div",{staticClass:"h-title"},[this._v("介绍")]),this._v(" "),t("div",{staticClass:"h-main"},[this._v("\n            在一组备选项中进行单选\n        ")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("pre",[this._v("                        "),t("code",[this._v('\n            <Radio v-model="radio1" :label="1">单选1</Radio>\n            <Radio v-model="radio1" :label="2">单选2</Radio>\n                        ')]),this._v("\n                    ")])},function(){var a=this.$createElement,t=this._self._c||a;return t("pre",[this._v("                        "),t("code",[this._v('\n            <Radio v-model="radio2" disabled label="禁用">单选1</Radio>\n            <Radio v-model="radio2" disabled label="选中加禁用">单选2</Radio>\n                        ')]),this._v("\n                    ")])}]};var s=function(a){i("ODiF")},d=i("VU/8")(e.a,l,!1,s,"data-v-61e1ee5e",null);t.default=d.exports}});
//# sourceMappingURL=6.e4fc6e024b0b96a113e2.js.map