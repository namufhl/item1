$(function(){
	
	//侧边栏
	$(".sideTop").mouseenter(function(){
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
	$("#sideFotLast").click(function(){
		$("body,html").animate({"scrollTop":0},1000)
		
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
	})
	
	//传入数据
		$.ajax({
		type:"GET",
  		url:"json/data.json",
  		async:true,
  		success:function(data){
  			var  nvarchar="";
  			var  nvarDivs=""
  			for(var i=0;i<data.length;i++){ 
  			    var htmlCon="";
  			    nvarchar += "<li><h4><img src='img/"+data[i].img+"'/><span>"+data[i].title+"</span></h4></li>"
  			    for(var j=0;j<data[i].child.length;j++){
  			    	var htmlConA="";
  			    	for(var k in data[i].child[j].goods){
  			    		htmlConA += "<a href='#'>" + data[i].child[j].goods[k] + "</a>"
  			    	}
  			    	htmlCon += "<li><h4><a href='#'>"+data[i].child[j].title+"</a></h4><p>"+
  			    	htmlConA + "</p></li>"
  			    }	
  			 nvarDivs+="<div>" +htmlCon +"<span><a href=''>"+data[i].check+"</a></span></div>"
  			}
  			$(".list ul").html(nvarchar)
  			$(".list").find(".mainList").html(nvarDivs);
  			var clicklock = true;
  			$(".sort").click(function(){
  				if(clicklock){
  					clicklock = false;
  					$(this).children("span").text("收起分类").end().children("img").attr("src", "img/icon14.png").end().find(".list").css("display", "block");
  					$(".mainList").find("div").eq(0).css("display","block");
  						$(".list ul li").find("li").eq(0).attr("class","active");
  					$(this).find("ul").find("li").mouseenter(function(){
  						var num=$(this).index();
  						$(".divs").eq(num).show().end().siblings().hide();
  					})
				}else{
					$(this).children("span").text("查看列表").end().children("img").attr("src", "img/icon.png").end().find(".list").css("display", "none");
					clicklock = true;
	
				}
		
  			})
  			$(".list ul li").mouseenter(function(){
  				
  				$(".list ul li").attr("class","");
  				$(".mainList").find("div").css("display","none");
  				$(this).attr("class","active");
  				$(".mainList").find("div").eq($(this).index()).css("display","block");
  			})
  			
  		}
	})
		 $.ajax({
		type:"GET",
		url:"json/data5.json",
		success:function(data){
			var guide="";
			for(var i=0;i<data.length;i++){
				var tag="";
				for(var j in data[i].tag){
					tag+="<dd>"+data[i].tag[j]+"</dd>"
				}
				guide+="<dl><dt>"+data[i].title+"</dt>"+tag+"</dl>"
			}
			  $("#fotter .fotTop").prepend(guide)
			}
		
	});
})
		  					