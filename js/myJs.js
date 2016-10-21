$(function(){
	bookF();
	projectsF();
	//响应式图片轮播
	$(window).on("resize",CarouselFigure).trigger("resize");
	//刷新显示全部新闻
	$("#news .info .all-new").show();
	$("#projects-nav a").on("click",function(){
		$("#projects-nav li").removeClass('active');
		$(this).parent().addClass('active');
	});
	
});
//判断是否该执行：移动端导航
$(window).resize(function() { 
  if($(window).width()<767){
		MobileNav();
	}
}) 
//移动端导航
function MobileNav(){
	var n=0;
	$("#navAction").on("click",function(){
		if(n%2==0){
			$(".nav-m-header-show").slideDown(500);
		}else{
			$(".nav-m-header-show").slideUp(500);
		}
		n++;
	});
}
//响应式图片轮播
function CarouselFigure(){
	var windowWidth=$(window).width();
	//判断浏览器
	var xs=windowWidth<=766-17;
	var lg=windowWidth>=767-17;
	$("#banner .carousel-inner>.item").each(function(i,v){
		var $v=$(v).first();
		var imgSrc=$v.data(xs?"img-xs":"img-lg");
		if(xs){
			$v.html("<img src="+$v.data("img-xs")+">");
		}else{
			$v.html("");//清除img
			$v.css("backgroundImage","url("+imgSrc+")");
		}
	});
}
//新闻效果
var newsTitle="";
$("#news nav a").on({
	mousemove:function(){
		$("#news h3").html($(this).html());
	},
	mouseout:function(){
		if(newsTitle==""){
			$("#news h3").html($("#news .all").html());
			$("#news .info .all-new").show();
		}else{
			$("#news h3").html(newsTitle);
		}
	},
	click:function(){
		newsTitle=$(this).html();
		$("#news nav a").removeClass("action");
		$(this).addClass("action");
		$("#news .info li").hide();
		var className=this.getAttribute("class").split(" ")[0];
		$("#news .info ."+className+"-new").show();
	}
});
function bookF(){
	var info1="金房宝-房抵项目二百二十期，650,000，6个月，10.2%，月付息到期还本";
	var star="四";
	var time= 5;
	var client=285;
	var count=11275;
	var p1span=$("#book .info>.p1>span").html("新标预告："+info1+"，"+star+"星距上线：<i>"+time+"</i>分");
	var p3span=$("#book .info>.p3>span").prepend("现在有<i>"+client+"</i>人在排队，累计预约交易成功<i>"+count+"</i>次。");
};
function projectsF(){
	//新手体验标
	var novice_issue=1308;//期数
	var novice_yearOfYield =8;//年化收益率
	var novice_termOfLoan=10;//借款期限
	var novice_totalAmount=10000;//总金额
	var novice_minMoney=100;//最小起投金额
	var novice_maxMoney=5000;//最大起投金额
	var novice_alreadyVotedNumber=10;//已投人数
	var novice_investmentProgress=5;//已投金额占比
	var novice_surplusmount=novice_totalAmount-novice_totalAmount*(novice_investmentProgress/100);//剩余金额
	//月月盈
	var month_yearOfYield ="6.5-12.5";//年化收益率
	var month_termOfLoan="1-24个月";//借款期限
	var month_totalAmount="3.86万";//总金额
	//新手体验标--pc
	$("#pc-novice_issue").html("新手体验标"+novice_issue+"期");
	$("#pc-novice_yearOfYield").html(""+novice_yearOfYield+"");
	$("#pc-novice_termOfLoan").html(""+novice_termOfLoan+"天");
	$("#pc-novice_alreadyVotedNumber").html(""+novice_alreadyVotedNumber+"");
	$("#pc-novice_surplusmount").html("￥"+novice_surplusmount+"");

	$("#pc-novice_investmentProgress").html("投资进度："+novice_investmentProgress+"%");
	$("#pc-novice_Progress").attr("aria-valuenow",""+novice_investmentProgress+"").css("width",""+novice_investmentProgress+"");
	$("#pc-novice_minMoney").html("起投金额"+novice_minMoney+"元");
	$("#pc-novice_maxMoney").html("起投金额"+novice_maxMoney+"元");
	//新手体验标--m
	$("#m-novice_issue").html("新手体验标"+novice_issue+"期");
	$("#m-novice_yearOfYield").html(""+novice_yearOfYield+"");
	$("#m-novice_termOfLoan").html(""+novice_termOfLoan+"天");
	$("#m-novice_alreadyVotedNumber").html(""+novice_alreadyVotedNumber+"");
	$("#m-novice_surplusmount").html("￥"+novice_surplusmount+"");

	//月月盈--pc
	$("#pc-month_yearOfYield").html(""+month_yearOfYield+"");
	$("#pc-month_termOfLoan").html(""+month_termOfLoan+"");
	$("#pc-month_totalAmount").html(""+month_totalAmount+"");
	$("#pc-month_remark1").html("每半月可申请赎回一次");
	$("#pc-month_remark2").html("每半月加息0.5%");
	//月月盈--m
	$("#m-month_yearOfYield").html(""+month_yearOfYield+"");
	$("#m-month_termOfLoan").html(""+month_termOfLoan+"");
	$("#m-month_totalAmount").html(""+month_totalAmount+"");
}