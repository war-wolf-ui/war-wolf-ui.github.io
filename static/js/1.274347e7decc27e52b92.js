webpackJsonp([1],{"+uPl":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("psnM"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wl-checkbox"},[s("div",{staticClass:"h-headtitle"},[t._v("Checkbox 多选框")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"h-blocks"},[s("div",{staticClass:"h-title"},[t._v("基础用法")]),t._v(" "),s("div",{staticClass:"hb-a"},[t._v("用于在选中和非选中状态之间进行切换。。")]),t._v(" "),s("div",{staticClass:"hb-a"},[s("Checkbox",{attrs:{label:"1"},on:{change:t.handleChange1},model:{value:t.check1,callback:function(e){t.check1=e},expression:"check1"}},[t._v("复选框1")]),t._v(" "),s("Checkbox",{attrs:{label:"2"},on:{change:t.handleChange1},model:{value:t.check1,callback:function(e){t.check1=e},expression:"check1"}},[t._v("复选框2")])],1),t._v(" "),s("div",{staticClass:"hb-code"},[s("div",{staticClass:"hb-cmain"},[s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(1)])])]),t._v(" "),s("div",{staticClass:"hb-b view-code-btn"},[t._v("查看代码")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[this._v("介绍")]),this._v(" "),e("div",{staticClass:"h-main"},[this._v("\n            文字超链接\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                        "),e("code",[this._v('\n            <Checkbox v-model="check1" label="1" >复选框1</Checkbox>\n            <Checkbox v-model="check1" label="2" >复选框2</Checkbox>\n                        ')]),this._v("\n                    ")])}]};var n=function(t){s("LF1D")},l=s("VU/8")(a.a,i,!1,n,"data-v-89b76576",null);e.default=l.exports},LF1D:function(t,e){},f36A:function(t,e){},mvHQ:function(t,e,s){t.exports={default:s("qkKv"),__esModule:!0}},psnM:function(t,e,s){"use strict";(function(t){var a=s("s7Sp");e.a={name:"wlcheckbox",data:function(){return{check1:["1"],check2:[]}},mounted:function(){this.doCode()},methods:{doCode:function(){t(".view-code-btn").click(function(){t(this).parent().find(".hb-code").slideToggle()})},handleChange1:function(t){},handleChange2:function(t){}},components:{Checkbox:a.a}}}).call(e,s("7t+N"))},qkKv:function(t,e,s){var a=s("FeBl"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},s7Sp:function(t,e,s){"use strict";var a=s("mvHQ"),i=s.n(a),n={name:"radio",props:{label:{type:[String,Number],default:null},value:{type:Array,default:[]},disabled:{type:Boolean,default:!1}},data:function(){return{values:[],dValues:[]}},watch:{value:function(t){}},mounted:function(){this.doData()},methods:{doData:function(){this.values=this.value;for(var t=[],e=0;e<this.values.length;e++)t.push(parseFloat(this.values[e]));this.values=t,this.dValues=[],this.dValues=JSON.parse(i()(this.values))},selectCk:function(){if(-1===this.dValues.indexOf(parseFloat(this.label)))this.dValues.push(parseFloat(this.label)),JSON.parse(i()(this.dValues));else for(var t=0;t<this.dValues.length;t++)this.dValues[t]==parseFloat(this.label)&&this.dValues.splice(t,1);this.values=JSON.parse(i()(this.dValues)),console.log(this.values),this.$emit("change",this.values)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"check",class:{active:-1!=this.values.indexOf(parseFloat(this.label)),disabled:this.disabled},on:{click:this.selectCk}},[e("span",{staticClass:"check-icon"}),this._v(" "),e("span",{staticClass:"check-txt"},[this._t("default")],2),this._v(" "),e("span",{staticClass:"over",on:{click:function(t){t.stopPropagation()}}})])},staticRenderFns:[]};var c=s("VU/8")(n,l,!1,function(t){s("f36A")},"data-v-ab507892",null);e.a=c.exports}});
//# sourceMappingURL=1.274347e7decc27e52b92.js.map