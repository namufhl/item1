$(function(){
	//侧边栏
	/*$(".sideTop").mouseenter(function(){
		$(".sideTopChild").show().stop().animate({
		"right": 34,
		"opacity": 0.85
	}, 800)
		}).mouseleave(function(){
		$(".sideTopChild").hide().stop().animate({
		"right": 80,
		"opacity": 0
	}, 800);
	})
		$(".sideFot").mouseenter(function(){
		$(this).find(".sideFotChild").show().stop().animate({
		"right": 39,
		"opacity": 0.85
	}, 800)
		}).mouseleave(function(){
		$(this).find(".sideFotChild").hide().stop().animate({
		"right": 80,
		"opacity": 0
	}, 800);
	})
	
	
	
	//头
	$(".nav").find(".lis").hover(function(){
	   $(this).css("background","#E10482")},
	   function(){
	   	$(this).css("background","")
	   
	})
	$(".headTop").find("a").hover(function(){
		$(this).css("color","#E10482")
	},function(){
		$(this).css("color","black")
	})
	$(".headCon").find("a").hover(function(){
		$(this).css("color","#E10482")
	},function(){
		$(this).css("color","")
	})*/
	//轮播图
	var iNum=0;
	var timer=0;
	var aBtn=$("#banner").find(".sub").find("li");
    var ali=$("#banner").find(".pic").find("li");
    //li控制
	aBtn.click(function(){
		iNum = $(this).index();
		tab();
		})
	//定时器
    timer=setInterval(interTimer,4000)	
    $("#banner").hover(function(){
    	clearInterval(timer)},function(){timer=setInterval(interTimer,4000)	})
    
	function tab(){
		if(iNum==ali.size()-1){
		iNum = 0;
		}
	  	    aBtn.attr("class", "");
			aBtn.eq(iNum).attr("class", "act");
	  	    $("#banner").find(".pic").find("li").eq(iNum).fadeIn().siblings("li").fadeOut();
	    }
	function interTimer(){
		iNum++;
		tab();
	}
	$(".banner").mouseenter(function(){
		$(this).find("p").css("display","block");
	}).mouseleave(function(){
		$(this).find("p").css("display","")
	})
	$(".banLeft").click(function(){
		iNum--;
		if(iNum<0){
			iNum = $(".pic li").size()-2;
		}
		$(".sub li").eq(iNum).attr("class","act").siblings("li").attr("class","");
		$(".pic li").eq(iNum).fadeIn(500).siblings("li").fadeOut(500);
	})
	$(".banRight").click(function(){
		iNum++;
		tab()
	})
	
//  官方授权
    $(".gridCon>ul").find("li").mouseenter(function() {
	$(this).stop().animate({
		"top": -10
	}, 500).siblings("li").animate({
		"top": 0
	}, 500);
    }).mouseleave(function() {
	$(this).animate({
		"top": 0
	}, 500);
})
 })