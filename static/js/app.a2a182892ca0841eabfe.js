webpackJsonp([2,0],[function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(3),n=a(i),r=s(38),o=a(r);s(82);var c=s(25),l=a(c),u=s(92),p=a(u);n.default.use(o.default),new n.default({el:"#vpic",store:l.default,template:"<VPic/>",components:{VPic:p.default}})},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),n=a(i),r=s(108),o=a(r);n.default.use(o.default),e.default=new o.default.Store({state:{uploaded:!1,cropping:!1,actionType:"",imgMsg:{type:"",name:"",url:""},cropper:null,imgArguments:{brightness:0,contrast:0,hue:0,saturation:0},storeUrl:""},getters:{},mutations:{storeResult:function(t,e){t.storeUrl=e},setImgMsg:function(t,e){t.imgMsg=e},setImgUrl:function(t,e){t.imgMsg.url=e},cropImgMsg:function(t,e){t.imgMsg.url=e.url,t.imgMsg.name=e.name},setUpload:function(t){t.uploaded=!0},cancelUpload:function(t){t.uploaded=!1},setCropping:function(t){t.cropping=!0},cancelCropping:function(t){t.cropping=!1},setActionType:function(t,e){t.actionType=e},setCropper:function(t,e){t.cropper=e},setBrightness:function(t,e){t.imgArguments.brightness=e},setContrast:function(t,e){t.imgArguments.contrast=e},setHue:function(t,e){t.imgArguments.hue=e},setSaturation:function(t,e){t.imgArguments.saturation=e}},actions:{storeResult:function(t,e){var s=t.commit;s("storeResult",e)},setImgMsg:function(t,e){var s=t.commit;s("setImgMsg",e)},setImgUrl:function(t,e){var s=t.commit;s("setImgUrl",e)},cropImgMsg:function(t,e){var s=t.commit;s("cropImgMsg",e)},setUpload:function(t){var e=t.commit;e("setUpload")},setCropping:function(t){var e=t.commit;e("setCropping")},cancelUpload:function(t){var e=t.commit;e("cancelUpload")},cancelCropping:function(t){var e=t.commit;e("cancelCropping")},setActionType:function(t,e){var s=t.commit;s("setActionType",e)},setCropper:function(t,e){var s=t.commit;s("setCropper",e)},setBrightness:function(t,e){var s=t.commit;s("setBrightness",e)},setContrast:function(t,e){var s=t.commit;s("setContrast",e)},setHue:function(t,e){var s=t.commit;s("setHue",e)},setSaturation:function(t,e){var s=t.commit;s("setSaturation",e)}}})},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(16),n=a(i);s(74);var r=s(99),o=a(r),c=s(97),l=a(c),u=s(94),p=a(u);e.default={name:"vpic",components:{Cropper:n.default,Vtoolbar:o.default,Vsidebar:l.default,Veditor:p.default}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(16),n=a(i),r=s(83),o=a(r),c=window.Caman;e.default={data:function(){return{uploaded:!1,cropper:!1,data:null,canvasData:null,cropBoxData:null,image:null,type:"",name:"",url:"",originalUrl:""}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("keydown",t.keydown,!1)})},beforeDestory:function(){window.removeEventListener("keydown",this.keydown,!1)},computed:{editable:function(){return this.$store.state.uploaded},lisenActionType:function(){return this.$store.state.actionType},vGrayscale:function(){return{brightness:this.$store.state.imgArguments.brightness,contrast:this.$store.state.imgArguments.contrast}}},watch:{editable:function(t){this.uploaded=t,t&&this.initPaper()},lisenActionType:function(t){var e={remove:this.remove,clear:this.clear,crop:this.crop};e[t.actionType]()},vGrayscale:function(t){this.uploaded&&this.setGrayscale(t)}},methods:{setGrayscale:function(t){var e=this,s=this,a="";this.imgPaper=c(".cropper-canvas .canvas-img"),this.imgPaper.revert(!1),o.default.map(t,function(t,s){e.imgPaper[s](t)}),this.imgPaper.render(function(){a=s.imgPaper.toBase64(s.$store.state.imgMsg.type),s.$store.dispatch("storeResult",a)})},initPaper:function(){var t=this.$store.state.imgMsg;this.type=t.type,this.name=t.name,this.url=t.url},load:function(t){this.image||(this.image=t.target,this.start())},click:function(t){var e=this.$store.state.cropper,s=t.target,a="";if(e)switch(a=s.dataset.action||s.parentNode.dataset.action){case"move":case"crop":e.setDragMode(a);break;case"zoom-in":e.zoom(.1);break;case"zoom-out":e.zoom(-.1);break;case"rotate-left":e.rotate(-90);break;case"rotate-right":e.rotate(90);break;case"flip-horizontal":e.scaleX(-this.$store.state.cropper.getData().scaleX||-1);break;case"flip-vertical":e.scaleY(-this.$store.state.cropper.getData().scaleY||-1)}},keydown:function(t){var e=this.$store.state.cropper,s=t.key||t.keyCode||t.which||t.charCode;switch(s){case 90:t.ctrlKey&&(t.preventDefault(),this.restore(!0));break;case 46:this.remove(!0)}if(e)switch(s){case 13:this.crop(!0);break;case 27:this.clear(!0);break;case 37:t.preventDefault(),e.move(-1,0);break;case 38:t.preventDefault(),e.move(0,-1);break;case 39:t.preventDefault(),e.move(1,0);break;case 40:t.preventDefault(),e.move(0,1);break;case 67:e.setDragMode("crop");break;case 77:e.setDragMode("move");break;case 73:e.zoom(.1);break;case 79:e.zoom(-.1);break;case 76:e.rotate(-90);break;case 82:e.rotate(90);break;case 72:e.scaleX(-this.$store.state.cropper.getData().scaleX||-1);break;case 86:e.scaleY(-this.$store.state.cropper.getData().scaleY||-1)}},dblclick:function(t){t.target.className.indexOf("cropper-face")>=0&&(t.preventDefault(),t.stopPropagation(),this.crop(!0))},start:function(){var t=this;if(!this.$store.state.cropper){var e=new n.default(this.image,{autoCrop:!1,dragMode:"move",background:!1,built:function(){t.data&&(this.$store.state.cropper.crop().setData(t.data).setCanvasData(t.canvasData).setCropBoxData(t.cropBoxData),t.data=null,t.canvasData=null,t.cropBoxData=null)},crop:function(e){e.detail.width>0&&e.detail.height>0&&!t.$store.state.cropping&&t.$store.dispatch("setCropping")}});this.$store.dispatch("setCropper",e)}},stop:function(){this.$store.state.cropper&&(this.$store.state.cropper.destroy(),this.$store.state.cropper=null,this.$store.dispatch("cancelCropping"))},nextCrop:function(){this.$store.state.cropper.replace(this.url),this.$store.dispatch("cancelCropping")},crop:function(){var t=this.$store.state.cropper,e=this.type;this.$store.state.cropping&&(this.originalUrl=this.url,this.data=t.getData(),this.canvasData=t.getCanvasData(),this.cropBoxData=t.getCropBoxData(),this.url=t.getCroppedCanvas("image/png"===e?null:{fillColor:"#fff"}).toDataURL(e),this.$notify({title:"提示",message:"图片剪裁成功",type:"success",duration:1500}),this.nextCrop(),this.$store.dispatch("cropImgMsg",{url:this.url,name:this.name}))},clear:function(){this.$store.state.cropping&&(this.$store.state.cropper.clear(),this.$store.dispatch("cancelCropping"))},restore:function(t){this.$store.state.cropper||(this.image=null,this.url=this.originalUrl,this.originalUrl="",t&&this.$dispatch("broadcast","restored"))},remove:function(){this.$store.state.cropping||(this.stop(),this.data=null,this.image=null,this.$store.dispatch("setImgMsg",{type:"",name:"",url:""}),this.originalUrl="",this.$notify({title:"提示",message:"清空画布成功 可导入新的图片",type:"success",duration:3500}),this.$store.dispatch("cancelUpload"))}}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(95),n=a(i),r=s(96),o=a(r),c=s(93),l=a(c);e.default={name:"Veditor",components:{Vactiontip:n.default,Vupload:o.default,Vcanvas:l.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{successTip:{title:"图片导入成功",desc:"1.按住鼠标左键拖动图片； 2.滑动滚轮缩放至最佳视角；3.鼠标双击切换至截图工具；"},importTip:{title:"请导入图片",desc:"1.可直接拖入图片至下方区域； 2.可点击下方导入按钮选取图片；"}}},computed:{uploaded:function(){return this.$store.state.uploaded}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{dialogTableVisible:!1}},computed:{uploaded:function(){return this.$store.state.uploaded}},methods:{read:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=/^image\/\w+$/,i=null;t?a.test(t.type)?(i=new FileReader,i.onload=function(){e.$store.dispatch("setUpload"),e.$store.dispatch("setImgMsg",{type:t.type,name:t.name,url:i.result}),s()},i.readAsDataURL(t)):(this.$message({message:"请选择图片文件",type:"warning"}),s()):s()},change:function(t){var e=t.target,s=e.files;this.read(s&&s[0],function(){e.value=""})},dragover:function(t){t.preventDefault()},drop:function(t){var e=t.dataTransfer.files;t.preventDefault(),this.read(e&&e[0])},selectImg:function(t){var e=t.target,s=this.getBase64Image(e);this.$store.dispatch("setUpload"),this.$store.dispatch("setImgMsg",{type:"image/jpeg",name:"test",url:s})},getBase64Image:function(t){var e=document.createElement("canvas");e.width=t.dataset.width,e.height=t.dataset.height;var s=e.getContext("2d");s.drawImage(t,0,0,t.dataset.width,t.dataset.height);var a=e.toDataURL("image/jpeg");return a}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{brightness:0,contrast:0,hue:0,saturation:0}},methods:{setAspectRatio:function(t){var e={"16/9":16/9,"4/3":4/3,"1/1":1,"2/3":2/3,NaN:NaN};this.$store.state.uploaded?this.$store.state.cropper.setAspectRatio(e[t.$el.dataset.aspectratio]):this.$message({message:"请先导入图片哦",type:"warning"})},setBrightness:function(){this.$store.dispatch("setBrightness",this.brightness)},setContrast:function(){this.$store.dispatch("setContrast",this.contrast)},setHue:function(){this.$store.dispatch("setHue",this.hue)},setSaturation:function(){this.$store.dispatch("setSaturation",this.saturation)},saveResult:function(){var t=this.$store.state.storeUrl;this.$store.dispatch("setImgUrl",t)},resetGrayscale:function(){this.brightness=0,this.contrast=0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{uploaded:function(){return this.$store.state.uploaded},cropping:function(){return this.$store.state.cropping},url:function(){return this.$store.state.imgMsg.url},name:function(){return this.$store.state.imgMsg.name}},methods:{click:function(t){var e=t.target.dataset.action,s={remove:this.remove,clear:this.clear,crop:this.crop};e&&s[e]()},remove:function(){this.$store.state.cropping||this.$store.dispatch("setActionType",{actionType:"remove"})},clear:function(){this.$store.dispatch("setActionType",{actionType:"clear"})},crop:function(){this.$store.dispatch("setActionType",{actionType:"crop"})}}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(98),n=a(i);e.default={components:{Vaction:n.default},methods:{handleSelect:function(t,e){console.log(t,e)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){t.exports=s.p+"static/img/test-1.e18a6d3.jpg"},function(t,e,s){t.exports=s.p+"static/img/test-2.dedf80e.jpg"},function(t,e,s){t.exports=s.p+"static/img/test-3.d7cf418.jpg"},function(t,e,s){t.exports=s.p+"static/img/test-4.c9ccad6.jpg"},function(t,e,s){t.exports=s.p+"static/img/test-5.47f23ce.jpg"},function(t,e,s){t.exports=s.p+"static/img/test-6.984b328.jpg"},function(t,e,s){t.exports=s.p+"static/img/test-7.ce2b2bb.jpg"},function(t,e,s){t.exports=s.p+"static/img/test-8.4570f27.jpg"},function(t,e,s){s(81);var a=s(4)(s(26),s(107),null,null);t.exports=a.exports},function(t,e,s){s(77);var a=s(4)(s(27),s(103),null,null);t.exports=a.exports},function(t,e,s){s(75);var a=s(4)(s(28),s(101),null,null);t.exports=a.exports},function(t,e,s){s(76);var a=s(4)(s(29),s(102),null,null);t.exports=a.exports},function(t,e,s){s(79);var a=s(4)(s(30),s(105),null,null);t.exports=a.exports},function(t,e,s){s(78);var a=s(4)(s(31),s(104),null,null);t.exports=a.exports},function(t,e,s){s(80);var a=s(4)(s(32),s(106),null,null);t.exports=a.exports},function(t,e,s){var a=s(4)(s(33),s(100),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clearfix",attrs:{id:"vtoolbar"}},[s("vaction")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"veditor"}},[s("vactiontip"),t._v(" "),s("vupload"),t._v(" "),s("vcanvas")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-alert",{directives:[{name:"show",rawName:"v-show",value:t.uploaded,expression:"uploaded"}],attrs:{type:"success",title:t.successTip.title,description:t.successTip.desc}}),t._v(" "),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:!t.uploaded,expression:"!uploaded"}],attrs:{type:"info",title:t.importTip.title,description:t.importTip.desc}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.editable,expression:"editable"}],staticClass:"canvas"},[s("div",{staticClass:"editor",on:{dblclick:t.dblclick}},[t.url?[s("img",{attrs:{src:t.url,alt:t.name},on:{load:t.load}})]:t._e()],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"tac custom-scrollbar",attrs:{id:"vpic_sidebar"}},[s("el-col",{attrs:{span:24}},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":"",theme:"dark"}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("i",{staticClass:"my-icon-cut my-icon"}),t._v("裁切")]),t._v(" "),s("el-submenu",{attrs:{index:"1-1"}},[s("template",{slot:"title"},[t._v("固定比例")]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"1-1-1","data-aspectratio":"16/9"},on:{click:t.setAspectRatio}},[t._v("宽屏/16:9")]),t._v(" "),s("el-menu-item",{attrs:{index:"1-1-2","data-aspectratio":"4/3"},on:{click:t.setAspectRatio}},[t._v("标准/4:3")]),t._v(" "),s("el-menu-item",{attrs:{index:"1-1-3","data-aspectratio":"1/1"},on:{click:t.setAspectRatio}},[t._v("正方形")]),t._v(" "),s("el-menu-item",{attrs:{index:"1-1-4","data-aspectratio":"2/3"},on:{click:t.setAspectRatio}},[t._v("2:3")])],1)],2),t._v(" "),s("el-menu-item",{attrs:{index:"1-2","data-aspectratio":"NaN"},on:{click:t.setAspectRatio}},[t._v("自由裁切")])],2),t._v(" "),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[s("i",{staticClass:"my-icon-edit my-icon"}),t._v("调整")]),t._v(" "),s("el-submenu",{attrs:{index:"2-1"}},[s("template",{slot:"title"},[t._v("亮度 / 对比度")]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"2-1-1"}},[s("div",{staticClass:"val-tag clearfix"},[s("span",{staticClass:"fl"},[t._v("亮度")]),t._v(" "),s("span",{staticClass:"fr"},[t._v(t._s(t.brightness))])]),t._v(" "),s("el-slider",{attrs:{min:-50,max:50,"show-tooltip":!1},on:{change:t.setBrightness},model:{value:t.brightness,callback:function(e){t.brightness=e},expression:"brightness"}})],1),t._v(" "),s("el-menu-item",{attrs:{index:"2-1-2"}},[s("div",{staticClass:"val-tag clearfix"},[s("span",{staticClass:"fl"},[t._v("对比度")]),t._v(" "),s("span",{staticClass:"fr"},[t._v(t._s(t.contrast))])]),t._v(" "),s("el-slider",{attrs:{min:-50,max:50,"show-tooltip":!1},on:{change:t.setContrast},model:{value:t.contrast,callback:function(e){t.contrast=e},expression:"contrast"}})],1),t._v(" "),s("el-menu-item",{attrs:{index:"2-1-3"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.saveResult}},[t._v("确定")]),t._v(" "),s("el-button",{on:{click:t.resetGrayscale}},[t._v("重置")])],1)],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"2-2"}},[s("template",{slot:"title"},[t._v("色调 / 饱和度")]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"2-2-1"}},[s("div",{staticClass:"val-tag clearfix"},[s("span",{staticClass:"fl"},[t._v("色调")]),t._v(" "),s("span",{staticClass:"fr"},[t._v(t._s(t.hue))])]),t._v(" "),s("el-slider",{attrs:{min:0,max:100,"show-tooltip":!1},on:{change:t.setHue},model:{value:t.hue,callback:function(e){t.hue=e},expression:"hue"}})],1),t._v(" "),s("el-menu-item",{attrs:{index:"2-2-2"}},[s("div",{staticClass:"val-tag clearfix"},[s("span",{staticClass:"fl"},[t._v("饱和度")]),t._v(" "),s("span",{staticClass:"fr"},[t._v(t._s(t.saturation))])]),t._v(" "),s("el-slider",{attrs:{min:-50,max:50,"show-tooltip":!1},on:{change:t.setSaturation},model:{value:t.saturation,callback:function(e){t.saturation=e},expression:"saturation"}})],1),t._v(" "),s("el-menu-item",{attrs:{index:"2-2-3"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.saveResult}},[t._v("确定")]),t._v(" "),s("el-button",{on:{click:t.resetGrayscale}},[t._v("重置")])],1)],1)],2)],2),t._v(" "),s("el-submenu",{attrs:{index:"3"}},[s("template",{slot:"title"},[s("i",{staticClass:"my-icon-blur my-icon"}),t._v("模糊")])],2),t._v(" "),s("el-submenu",{attrs:{index:"4"}},[s("template",{slot:"title"},[s("i",{staticClass:"my-icon-fun my-icon"}),t._v("Fun")])],2)],1)],1)],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.uploaded?t._e():a("div",{staticClass:"upload",on:{change:t.change,dragover:t.dragover,drop:t.drop}},[a("el-dialog",{attrs:{title:"图片导入",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"2000","data-height":"1125",src:s(84)},on:{click:t.selectImg}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"1600","data-height":"900",src:s(85)},on:{click:t.selectImg}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"4871","data-height":"3237",src:s(86)},on:{click:t.selectImg}})])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"1920","data-height":"1080",src:s(87)},on:{click:t.selectImg}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"1920","data-height":"1200",src:s(88)},on:{click:t.selectImg}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"2560","data-height":"1440",src:s(89)},on:{click:t.selectImg}})])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"2048","data-height":"1367",src:s(90)},on:{click:t.selectImg}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("img",{staticClass:"select-img",attrs:{"data-width":"1600","data-height":"900",src:s(91)},on:{click:t.selectImg}})]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"upload-btn J-upload",attrs:{title:"选择本地图片"}},[a("span",{staticClass:"upload-icon"}),t._v(" "),a("input",{staticClass:"sr-only",attrs:{id:"file",type:"file",accept:"image/*"}})])])],1)],1),t._v(" "),a("div",{staticClass:"import-area J-import",on:{click:function(e){t.dialogTableVisible=!0}}},[a("span",{staticClass:"icon"}),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"tip"},[t._v("拖入图片或 "),s("span",{staticClass:"browse"},[t._v("点击导入")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"action-list fr",on:{click:t.click}},[s("li",{staticClass:"fr"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],staticClass:"save-btn btn",attrs:{href:t.url,download:t.name,title:"下载保存"}},[s("span",{staticClass:"icon"})])]),t._v(" "),s("li",{staticClass:"fr"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.cropping,expression:"cropping"}],staticClass:"crop-btn btn",attrs:{"data-action":"crop",title:"确认剪裁"}},[s("span",{staticClass:"icon"})])]),t._v(" "),s("li",{staticClass:"fr"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.uploaded&&!t.cropping,expression:"uploaded && !cropping"}],staticClass:"delete-btn btn",attrs:{"data-action":"remove",title:"清空画布"}},[s("span",{staticClass:"icon"})])]),t._v(" "),s("li",{staticClass:"fr"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.cropping,expression:"cropping"}],staticClass:"cancel-btn btn",attrs:{"data-action":"clear",title:"取消操作"}},[s("span",{staticClass:"icon"})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"clearfix",attrs:{id:"vpic"}},[s("div",{staticClass:"fl",attrs:{id:"vmenu"}},[s("div",{staticClass:"logo"}),t._v(" "),s("vsidebar")],1),t._v(" "),s("div",{attrs:{id:"vmain"}},[s("vtoolbar"),t._v(" "),s("veditor")],1)])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.a2a182892ca0841eabfe.js.map