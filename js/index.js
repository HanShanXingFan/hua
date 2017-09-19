!function(e,t){var n=e.documentElement,i=1/Math.min(t.devicePixelRatio,3),o="orientationchange"in window?"orientationchange":"resize",r=e.createElement("meta");r.name="viewport",r.content="initial-scale=1,maximum-scale="+i,n.firstElementChild.appendChild(r);var a=function(){var e=n.clientWidth;n.style.fontSize=e/375*100+"px"};a(),e.addEventListener&&t.addEventListener(o,a,!1)}(document,window);var app=angular.module("hua",["ui.router","ngAnimate","huaController","huaDirective"]);app.config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("start",{url:"/start",templateUrl:"view/start.html",controller:"start"}).state("start.home",{url:"/home",templateUrl:"view/home.html",controller:["$rootScope",function(e){e.back=0}]}).state("start.classify",{url:"/classify",templateUrl:"view/classify.html",controller:["$state",function(e){e.go("start.classify.hotcommend")}]}).state("start.classify.hotcommend",{url:"/hotcommend",templateUrl:"view/hotcommend.html",controller:"hotcommend"}).state("start.classify.flower",{url:"/flower",templateUrl:"view/flower.html"}).state("shoppingcar",{url:"/shoppingcar",templateUrl:"view/shoppingcar.html",controller:["$rootScope","$scope","$state",function(e,t,n){t.goBack=function(){0==e.back?(e.back=2,n.go("start")):1==e.back?(e.back=2,n.go("start.classify.hotcommend")):3==e.back&&(e.back=2,n.go("start.myself"))}}]}).state("start.myself",{url:"/myself",templateUrl:"view/myself.html",controller:"myself"}),t.otherwise("start")}]);var ctl=angular.module("huaController",["flowerServe"]);ctl.controller("start",["$scope","$state","routerNav","$rootScope",function(e,t,n,i){"start.myself"==n.index||3==i.back?t.go("start.myself"):t.go("start.home"),e.startscroll=["img/yongganai.png","img/m.jpg","img/chunv.jpg","img/bb.jpg"],e.firstimg=["img/logo@2x.png","img/icon_Search.png","永生花精选"],e.yongshen=[{img:"img/220.jpg",name:"玫瑰66枝：戴安娜粉玫瑰19枝，红玫瑰31枝",connect:"66支红玫瑰",price:"888"},{img:"img/221.jpg",name:"玫瑰66枝：戴安娜粉玫瑰19枝，红玫瑰31枝",connect:"66支红玫瑰",price:"666"},{img:"img/222.jpg",name:"玫瑰66枝：戴安娜粉玫瑰19枝，红玫瑰31枝",connect:"66支红玫瑰",price:"666"},{img:"img/223.jpg",name:"玫瑰66枝：戴安娜粉玫瑰19枝，红玫瑰31枝",connect:"66支红玫瑰",price:"666"}],e.guanlian=[{img:"img/1.png",imgatv:"img/1_1.png",worspe:"行业龙头"},{img:"img/2.png",imgatv:"img/2_2.png",worspe:"品牌理念"},{img:"img/3.png",imgatv:"img/3_3.png",worspe:"3小时送达"},{img:"img/4.png",imgatv:"img/4_4.png",worspe:"送前实拍"}]}]),ctl.controller("first",["$scope",function(e){e.bottomNav=[{img:"img/home_icon_new.png",imgact:"img/home.png",name:"首页"},{img:"img/classify.png",imgact:"img/classify_icon_click_new.png",name:"分类"},{img:"img/cart.png",imgact:"img/cart.png",name:"购物车"},{img:"img/my.png",imgact:"img/my_icon_new.png",name:"我的"}]}]),ctl.controller("gift",["$scope",function(e){e.giftNav=[{img:"img/xianhua_icon.png",name:"鲜花"},{img:"img/yongshenghua_icon.png",name:"永生花"},{img:"img/cake_icon.png",name:"蛋糕"},{img:"img/gift_icon.png",name:"礼品"},{img:"img/choclate_icon.png",name:"巧克力"}]}]),ctl.controller("flowershow",["$scope","flowerinform","$state",function(e,t,n){e.flowerNum=[],t.getFolwerDetail().success(function(t){e.flowerNum=t}).error(function(e){})}]),ctl.controller("hotcommend",["$scope","$state","routerNav","$rootScope",function(e,t,n,i){i.back=1}]),ctl.controller("myself",["$scope","routerNav","$rootScope","$state",function(e,t,n,i){console.log(n.back),t.index="",e.top="img/backgroundv3.png",e.bot="img/banner@2x.png",e.return=function(){0==n.back?(n.back=3,i.go("start.home")):1==n.back?(n.back=3,i.go("start.classify.hotcommend")):2==n.back&&(n.back=3,i.go("shoppingcar"))},e.cntedtarray=[{img:"img/iconPcObligation@2x.png",connect:"待付款"},{img:"img/iconPcExpress@2x.png",connect:"今日配送"},{img:"img/iconPcEvaluate@2x.png",connect:"待评价"},{img:"img/iconPcAllOrder@2x.png",connect:"全部订单"}],e.botdataarray=[{img:"img/iconPcTicket@2x.png",connect:"优惠"},{img:"img/iconPcIntegral@2x.png",connect:"积分"},{img:"img/iconClock@2x.png",connect:"生日/纪念日提醒"},{img:"img/star.png",connect:"我的收藏"},{img:"img/iconPcPay@2x.png",connect:"在线付款"},{img:"img/bottomIconSeviceDefault@2x.png",connect:"联系客服"},{img:"img/iconHelp@2x.png",connect:"帮助"},{img:"img/iconAbout@2x.png",connect:"关于花礼"}]}]);var dir=angular.module("huaDirective",["huaController","flowerServe"]);dir.directive("bottomNav",function(){return{restrict:"A",replace:!0,templateUrl:"view/template/first.html",controller:"first",link:function(){$(".bottomNav li").on("click",function(){$(this).addClass("activefirst").siblings().removeClass()}),$(window).scroll(function(){var e=$(".container").height(),t=$(".flowers").offset().top;$(window).scrollTop()>e/4&&$(".main").css("background","#FFFFFF"),$(window).scrollTop()>t?$(".returntop").css("display","block"):($(".returntop").css("display","none"),$(".main").css("background","transparent"))}),$(".returntop").on("click",function(){$(window).scrollTop(0)})}}}),dir.directive("centerNav",function(){return{restrict:"A",replace:!0,templateUrl:"view/template/gift.html",controller:"gift"}}),dir.directive("flowerChose",function(){return{restrict:"A",replace:!0,params:{id:null},templateUrl:"view/template/flowerchose.html"}}),dir.directive("flowerShow",function(){return{restrict:"A",replace:!0,templateUrl:"view/template/flowershow.html",controller:"flowershow"}}),dir.directive("guanLian",function(){return{restrict:"A",replace:!0,templateUrl:"view/template/swipers.html",controller:"start",link:function(){new Swiper(".swiper1",{autoplay:3e3,loop:!0,autoplayDisableOnInteraction:!1,pagination:".swiper-pagination1",paginationClickable:!0,observer:!0});var e=new Swiper(".swiper2",{pagination:".swiper-pagination2",onSlideChangeEnd:function(e){var t=e.activeIndex;$(".paginacon li").eq(t).addClass("active").siblings().removeClass(),$(".swibot li").eq(t).addClass("activetext").siblings().removeClass()}});$(".paginacon li").on("click",function(){var t=$(this).index();$(this).addClass("active").siblings().removeClass(),$(".swibot li").eq(t).addClass("activetext").siblings().removeClass(),e.slideTo(t,500,!1)})}}}),dir.directive("cruMbs",function(){return{restrict:"A",replace:!0,templateUrl:"view/template/crumbs.html",link:function(){$(".mianbaoNav li").on("click",function(){$(this).addClass("active").siblings().removeClass()})}}}),dir.directive("shopNav",function(){return{restrict:"A",replace:!0,templateUrl:"view/template/second.html",controller:["$scope","routerNav","$rootScope",function(e,t,n){e.changeBck=function(){n.back=2},e.changeIndex=function(e){n.back=2,t.index=e}}],link:function(){var e=!0;$(".shownav").on("click",function(){e?$(".fenyeNav").addClass("active").removeClass("shopnav"):$(".fenyeNav").removeClass("active").addClass("shopnav"),e=!e});new Swiper(".swiper3",{slidesPerView:4,paginationClickable:!0,spaceBetween:30,freeMode:!0})}}});var serve=angular.module("flowerServe",[]);serve.factory("routerNav",["$http",function(e){return{index:"start.home"}}]),serve.factory("flowerinform",["$http",function(e){return{getFolwerDetail:function(){return e({url:"data/flowercommond.php",method:"get"})}}}]);