$(function(){
	$(".tabImg img").mouseenter(function(){
		var urlImg=$(this).attr("src");
		$(".bigPic img").attr("src",urlImg)
	})
	$("#subtion").click(function(){
		var numT=parseInt($("#numTxt").val());	
		if(numT>1){
			numT--;			
		}
		$("#numTxt").val(numT);
	})
	$("#add").click(function(){
		var numT=parseInt($("#numTxt").val());
		numT++;
		$("#numTxt").val(numT);
	})
	$(".li6").find("div").mouseenter(function(){
		$(this).css("opacity","0.6").css("cursor","pointer")
	}).mouseleave(function(){
		$(this).css("opacity","")
	})
	
	
	 $.ajax({
		type:"GET",
		url:"json/details1.json",
		success:function(data){
			var preHtml="",
			preHtml="<h3>"+data[0].exp+"</h3><ul><li class='liImg'><img src='img/"+data[0].img1
			+"'/></li><li><span>"+data[0].ed+"</span>"+data[0].year+"</li><li><span>"
			+data[0].nor+"</span>"+data[0].norms+"</li><li><span>"+data[0].sort1+"</span>"+data[0].sort2+
			"</li><li><span>"+data[0].net1+"</span>"+data[0].net2+"</li><li><span>"+data[0].place1+"</span>"+data[0].place2+
			"</li><li><span>"+data[0].skin1+"</span>"+data[0].skin2+"</li><li><span>"+data[0].sex1+"</span>"+data[0].sex2
			+"</li></ul><h3>"+data[0].de+"</h3><img class='deImg' src='img/"+data[0].img2+"'/>"
		  
		  $("#present").html(preHtml)
		  
		  var appHtml="";
		  for(var i=0;i<=10;i++){
		  	appHtml+="<dl><dt><img src='img/"+data[1].img+"'/></dt><dd><span>"+data[1].daten+"</span>"
		  	+data[1].namen+"<br/>"+data[1].con+"</dd></dl>"
		  }
		  
		  $("#appraise").html(appHtml)
		  $("#appraise").find("dl").first().css("margin-top","50px")
		  $("#concentRight").find(".conFot").eq(0).css("display","block")
		  $("#concentRight>h4").find("span").click(function(){
		  	$("span").attr("class","");
		  	$("#concentRight").find(".conFot").css("display","none");
		  	$(this).attr("class","span1");
		  	$("#concentRight").find(".conFot").eq($(this).index()).css("display","block")
		  })
		
		
		}
		
		
		
	})
})
