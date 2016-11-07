$(function(){
	var iNum=0;
	var timer=0;
	function tab(){
		if(iNum>=$(".banner li").size()){
			iNum=0;
		}
		$(".banner li").eq(iNum).attr("class","act").siblings("li").attr("class","");
		$(".banner a").eq(iNum).fadeIn(500).siblings("a").fadeOut(500);
	}
	function setIntTimer(){
		iNum++;
		tab()
	}
	timer=setInterval(setIntTimer,4000)
	//li控制
	$(".banner li").click(function(){
		iNum=$(this).index();
		tab()
	})
	//按钮控制
	$(".banner").mouseenter(function(){
		$(this).find("p").css("display","block");
	}).mouseleave(function(){
		$(this).find("p").css("display","")
	})
	$(".banLeft").click(function(){
		iNum--;
		if(iNum<0){
			iNum = $(".banner li").size()-1;
		}
		$(".banner li").eq(iNum).attr("class","act").siblings("li").attr("class","");
		$(".banner a").eq(iNum).fadeIn(500).siblings("a").fadeOut(500);
	})
	$(".banRight").click(function(){
		iNum++;
		tab()
	})
	
	$.ajax({
		type:"get",
		url:"json/sale1.json",
		async:true,
		success:function(data){
			var goodhtml="";
			for(var i in data){
				goodhtml+="<dl><dt><img src='img/"+data[i].img+"'/></dt><dd><h5><span><img src='img/"+
				data[i].icon+"'/></span>"+data[i].bar+"</h5><h3>"+data[i].intro+"</h3><p class='price'>￥<span>"
				+data[i].price+"</span><br/><s>"+data[i].cost+"</s></p></dd><div id='"+data[i].id
				+"'>立即抢购</div></dl>"

			}
			$("#concent1").html(goodhtml)
			$(".concentnode").eq(0).css("display","block")
			$(".mainCon").find("span").click(function(){
				$(this).css("color","#fff").css("background","#e10482").siblings("span").css("background","#fff").css("color","#000")
				$("#concent").find(".concentnode").eq($(this).index()).css("display","block").siblings(".concentnode").css("display","none")
			});
			$("#concent dl").mouseenter(function(){
				$(this).css("box-shadow","7px 7px 7px #ccc");
				$(this).find("dt img").animate({"width":150,"height":240,"margin-top":0},800)
				
			}).mouseleave(function(){
				$(this).css("box-shadow","");
				$(this).find("dt img").animate({"width":120,"height":200,"margin-top":32},800)
			})
		}
		})
	
	$.ajax({
		type:"get",
		url:"json/sale2.json",
		async:true,
		success:function(data){
			var good2html="";
			for(var i in data){
				good2html+="<dl><dt><img src='img/"+data[i].img+"'/><p></p></dt><dd><h5><span><img src='img/"+
				data[i].icon+"'/></span>"+data[i].bar+"</h5><h3>"+data[i].intro+"</h3><p class='price'>￥<span>"
				+data[i].price+"</span><s>"+data[i].cost+"</s></p><p class='timers'></p></dd><div id='"+data[i].id
				+"'>开团提醒</div></dl>"

			}
			$("#concent2").html(good2html)	
			
			function timers(){
				var d1=new Date();
				var d2=new Date(2016,10,25)-d1;
				var s=1000,m=60*s,h=60*m,d=24*h;
				var day=parseInt(d2/d),
					houer=parseInt(d2%d/h),
					minute=parseInt(d2%d%h/m),
					second=parseInt(d2%d%h%m/s);
					if(day < 10) {
						day = "0" + day;
					}
					if(houer < 10) {
						houer = "0" + houer;
					}
					if(minute < 10) {
						minute = "0" + minute;
					}
					if(second < 10) {
						second = "0" + second;
					}
					 var str="距开售"+day+"天"+houer+"时"+minute+"分"+second+"秒";
	            
	                 $(".timers").html(str)
			}
			timers()
			setInterval(function(){
				timers()
				
			},1000)
			
			$("#concent dl").mouseenter(function(){
				$(this).css("box-shadow","7px 7px 7px #ccc");
				$(this).find("dt img").animate({"width":150,"height":240,"margin-top":0},800)
				
			}).mouseleave(function(){
				$(this).css("box-shadow","");
				$(this).find("dt img").animate({"width":120,"height":200,"margin-top":32},800)
			})
		}
	});
	
})
