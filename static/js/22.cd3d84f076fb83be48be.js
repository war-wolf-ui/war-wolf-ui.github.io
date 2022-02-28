webpackJsonp([22],{VEqW:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ccode"},[e("div",{staticClass:"h-headtitle"},[t._v("常用javascript方法")]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("精确计算加减乘除")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(0)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("url参数格式化")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(1)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("对象转成url地址格式")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(2)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("对url里的参数删除指定某个参数")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(3)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("实现将本地资源图片转化成base64")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(4)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("日期时间转时间戳")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(5)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("时间戳转换成时间")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(6)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("时间对象转换成时间")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(7)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("判断小程序环境")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(8)])])]),t._v(" "),e("div",{staticClass:"h-blocks"},[e("div",{staticClass:"h-title"},[t._v("递归算法-遍历")]),t._v(" "),e("div",{staticClass:"h-main martop0"},[e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v('\n                        /**\n                         * 加法\n                         * @param arg1\n                         * @param arg2\n                        */\n                        function addition(arg1,arg2){\n                          let r1,r2,m;\n                          try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0};\n                          try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0};\n                          m=Math.pow(10,Math.max(r1,r2));\n                          return (arg1*m+arg2*m)/m;\n                        }\n\n                        /**\n                        * 减法\n                        * @param arg1\n                        * @param arg2\n                        */\n                        function subtraction(arg1,arg2){\n                          let r1,r2,m,n;\n                          try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}\n                          try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}\n                          m=Math.pow(10,Math.max(r1,r2));\n                          //动态控制精度长度\n                          n=(r1>=r2)?r1:r2;\n                          return ((arg1*m-arg2*m)/m).toFixed(n);\n                        }\n                        /***\n                        * 乘法，获取精确乘法的结果值\n                        * @param arg1\n                        * @param arg2\n                        */\n                        function multiplication(arg1,arg2){\n                          let m=0,s1=arg1.toString(),s2=arg2.toString();\n                          try{m+=s1.split(".")[1].length}catch(e){};\n                          try{m+=s2.split(".")[1].length}catch(e){};\n                          return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);\n                        }\n                        /***\n                        * 除法，获取精确乘法的结果值\n                        * @param arg1\n                        * @param arg2\n                        */\n                        function division(arg1,arg2){\n                          let t1=0,t2=0,r1,r2;\n                          try{t1=arg1.toString().split(".")[1].length}catch(e){}\n                          try{t2=arg2.toString().split(".")[1].length}catch(e){}\n                          r1=Number(arg1.toString().replace(".",""));\n                          r2=Number(arg2.toString().replace(".",""));\n                          return (r1/r2)*Math.pow(10,t2-t1);\n                        }\n                    ')]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v('\n                        /*url参数格式化\n                        * 如：www.xxx.com?id=1&age=20\n                        * 返回：{id:1,age:20}\n                        * */\n                        paramsFormat(url) {\n                            let qInd = url.indexOf("?");\n                            let sharpInd = url.indexOf("#"); //路由\n                            let search = "";\n                            let paramsList = [];\n                            let paramsObj = {};\n                            if (qInd >= 0) {\n                                if (sharpInd > 0) {\n                                    search = url.substring(qInd + 1, sharpInd);\n                                } else {\n                                    search = url.substring(qInd + 1);\n                                }\n                                //from跳转链接，不需要解析其他参数\n                                let reg = /\\?(from(?:url)?)=(.*\\.html)/i;\n                                if (reg.test(search)) {\n                                    let matches = search.match(reg);\n                                    paramsObj[matches[1]] = matches[2];\n                                } else {\n                                    paramsList = search.split("&");\n                                    for (var ind = 0; ind < paramsList.length; ind++) {\n                                        var param = paramsList[ind];\n                                        if (param) {\n                                            var pind = param.indexOf("=");\n                                            if (pind >= 0) {\n                                                let key = param.substring(0, pind);\n                                                let value = param.substr(pind + 1);\n                                                if (value == \'undefined\' || value == \'null\') value = null;//过滤字符串，否则接口报错\n                                                paramsObj[key] = value;\n                                            } else {\n                                                paramsObj[param] = "";\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                            return paramsObj;\n                        }\n                    ')]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v("\n                        /*对象转成url地址格式\n                        * 如：{id:1,age:20}\n                        * 返回：www.xxx.com?id=1&age=20\n                        * */\n                        jsonToParamsFormat(d) {\n                            let urls = '';\n                            if (!d) {\n                                return;\n                            }\n                            for (let key in d) {\n                                urls += `&${key}=${d[key]}`\n                            }\n                            let nUrls = '?' + urls.slice(1);  //去掉第一个&符号\n                            return nUrls;\n                        }\n                    ")]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v("\n                        /*\n                        * 如www.xxx.com/index?id=1&age=20，删除age\n                        * 返回 www.xxx.com?id=1\n                        *\n                        * url,字符串\n                        * paramArr 数组\n                        * */\n                        getNewUrls(url, paramArr) {\n                            let rPath = '';\n                            if (paramArr.length <= 0) {\n                                return;\n                            }\n                            let getParamArr = this.paramsFormat(url);   //获取url所以对象数据\n                            let getPathSliceIndex = url.indexOf('?');   //获取？的序号\n                            let getPathSliceTxt = url.slice(0, getPathSliceIndex);\n                            for (let i = 0; i < paramArr.length; i++) {\n                                delete getParamArr[paramArr[i]]\n                            }\n                            let paramUrlTxt = this.jsonToParamsFormat(getParamArr);\n                            rPath = getPathSliceTxt + paramUrlTxt\n                            return rPath;\n\n                        }\n                    ")]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v("\n                        function convertImgToBase64(url, callback, outputFormat) {\n                            let canvas = document.createElement('CANVAS'),\n                                ctx = canvas.getContext('2d'),\n                                img = new Image;\n                            img.crossOrigin = 'Anonymous';\n                            img.onload = function () {\n                                canvas.height = img.height;\n                                canvas.width = img.width;\n                                ctx.drawImage(img, 0, 0);\n                                var dataURL = canvas.toDataURL(outputFormat || 'image/png');\n                                callback.call(this, dataURL);\n                                canvas = null;\n                            };\n                            //console.log(url);\n                            img.src = url;\n                        },\n                    ")]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v("\n                        //时间--时间戳 2012-01-12 12:12:12  to  1514514514515\n                        time2timestamp(dateTime) {\n                            if (dateTime) {\n                                return new Date(dateTime.replace(/-/g, '/')).getTime();\n                            }\n                        },\n                    ")]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v("\n                        function timestamp2Time(stamp) {\n                            if (stamp) {\n                                let date = new Date(stamp);\n                                let y = date.getFullYear();\n                                let m = (date.getMonth() + 1) < 10 ? \"0\" + (date.getMonth() + 1) : (date.getMonth() + 1);\n                                let d = date.getDate() < 10 ? \"0\" + date.getDate() : date.getDate();\n                                let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();\n                                let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();\n                                let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();\n                                return y + \"-\" + m + '-' + d + ' ' + hour + ':' + mins + ':' + seconds;\n                            }\n                        },\n                    ")]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v("\n                        //new Date() to  2012-01-12 12:12:12\n                        function timeObj2Time(stamp) {\n                            if (stamp) {\n                                let dObj = stamp.getTime();\n                                let date = new Date(dObj);\n                                let y = date.getFullYear();\n                                let m = (date.getMonth() + 1) < 10 ? \"0\" + (date.getMonth() + 1) : (date.getMonth() + 1);\n                                let d = date.getDate() < 10 ? \"0\" + date.getDate() : date.getDate();\n                                let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();\n                                let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();\n                                let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();\n                                return y + \"-\" + m + '-' + d + ' ' + hour + ':' + mins + ':' + seconds;\n                            }\n                        },\n                    ")]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v('\n                        isWeChatMiniApp() {\n                            let ua = window.navigator.userAgent.toLowerCase();\n                            return new Promise((resolve) => {\n                                if (ua.indexOf(\'micromessenger\') == -1) {\n                                    //console.log("不在微信或者小程序中")\n                                    resolve(false);\n                                } else {\n                                    wx.miniProgram.getEnv((res) => {\n                                        if (res.miniprogram) {\n                                            //console.log("在小程序中")\n                                            resolve(true);\n                                        } else {//在微信中\n                                            //console.log("在微信中")\n                                            resolve(false);\n                                        }\n                                    });\n                                }\n                            });\n                        },\n                    ')]),this._v("\n                ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[this._v("                    "),n("code",[this._v("\n                        let arr = [\n                                {\n                                    id:'1',\n                                    name:'n1',\n                                    children:[\n                                        {\n                                            id:'1-1',\n                                            name:'n1-1',\n                                            children:[]\n                                        },\n                                        {\n                                            id:'1-2',\n                                            name:'n1-2',\n                                            children:[]\n                                        }\n                                    ]\n                                },\n                                {\n                                    id:'2',\n                                    name:'n2',\n                                    children:[\n                                        {\n                                            id:'2-1',\n                                            name:'n2-1',\n                                            children:[\n                                                {\n                                                    id:'2-1-1',\n                                                    name:'n2-1-1',\n                                                    children:[]\n                                                }\n                                            ]\n                                        },\n                                    ]\n                                },\n                                {\n                                    id:'3',\n                                    name:'n3',\n                                    children:[]\n                                }\n                            ];\n\n                            let getArray = (data,id)=>{\n                                for (let i in data) {\n                                    if (data[i].id == id) {\n                                        //console.log('找到了');\n                                        break;\n                                    } else {\n                                        //console.log('继续找');\n                                        getArray(data[i].children, id);\n                                    }\n                                }\n                            };\n                            getArray(arr,'2-1');\n                    ")]),this._v("\n                ")])}]};var i=e("VU/8")({name:"common-code",data:function(){return{}},mounted:function(){!function t(n,e){for(var a in n){if(n[a].id==e)break;t(n[a].children,e)}}([{id:"1",name:"n1",children:[{id:"1-1",name:"n1-1",children:[]},{id:"1-2",name:"n1-2",children:[]}]},{id:"2",name:"n2",children:[{id:"2-1",name:"n2-1",children:[{id:"2-1-1",name:"n2-1-1",children:[]}]}]},{id:"3",name:"n3",children:[]}],"2-1")},methods:{},components:{}},a,!1,function(t){e("VoDs")},"data-v-0b26ca83",null);n.default=i.exports},VoDs:function(t,n){}});
//# sourceMappingURL=22.cd3d84f076fb83be48be.js.map