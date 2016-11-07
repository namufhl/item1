$(function(){
	     $.ajax({
		type:"GET",
		url:"json/data2.json",
		success:function(data){
			var imgs1="";
			var imgs2="";
			for(var i in data[0].img){
				imgs1+="<img src = 'img/"+data[0].img[i]+"'/>"	
			}
			for(var i in data[1].img){
				imgs2+="<img src = 'img/"+data[1].img[i]+"'/>"	
				
			}
			
			$("#commoTop").append(imgs1)
			$("#commoCon").html(imgs2)
			$("#commoTop").find("img").eq(0).css("float","left").css("margin-left","-15px")
			$("#commoTop").find("img").hover(function(){
				$(this).animate({"top":-10},500)
			},function(){
					$(this).animate({"top":0},500)
				
			})
			$("#commoCon").find("img").hover(function(){
				$(this).stop().animate({"opacity":0.5},500)},function(){
					$(this).stop().animate({"opacity":1},500)
				})
	
		}
	});
	
	 $.ajax({
		type:"GET",
		url:"json/data3.json",
		success:function(data){
			var list=""
			for(var i in data){
				list+="<dl><dt><img src='img/"+data[i].img+"'/></dt><dd><p class='sp'><img src='img/"+data[i].ico+"'/>"+data[i].stream+"<span>"+data[i].time+"<strong></strong></span></p><h3>"+data[i].tag+
				"</h3><p class='concent'>"+data[i].intro+"</p><p class='price'>￥<span>"
				       +data[i].ruling+"</span><s>"+data[i].cost+"</s></p><a href=''>"+data[i].shop+"</a></dd></dl>"
			}
			
			$(".comLeft").append(list)
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
					 var str=day+"天"+houer+"时"+minute+"分"+second+"秒";
	            
	                 $(".sp>span>strong ").html(str)
			}
			timers()
			setInterval(function(){
				timers()
				
			},1000)
			$(".comLeft>h2>a").css("text-decoration","none")
            $(".comLeft>h2>a").hover(function(){$(this).css("text-decoration","underline")},function(){
            	$(this).css("text-decoration","none")
            })
             $(".comLeft h3").hover(function(){$(this).css("text-decoration","underline").css("cursor","pointer")},function(){
            	$(this).css("text-decoration","none")
            })
            $(".comLeft dt img").mouseenter(function(){
            	$(this).animate({"width":150,"height":250,"margin-top":7},800)
            }).mouseleave(function(){
            	$(this).animate({"width":120,"height":200,"margin-top":30},800)
            })
            
			}
		
	});
	
	
	 $.ajax({
		type:"GET",
		url:"json/data4.json",
		success:function(data){
			var brand="";
			for(var i=0;i<data.length-1;i++){
				brand+="<li><img src='img/"+data[i].img+"'/><span>"+data[i].tag+"</span></li>"
			}
			var subImg="";
			for(var j in data[12].img){
				subImg+="<img src='img/"+data[12].img[j]+"'/>"
			}
			 
			
			$(".comRight ul").append(brand)
			$(".comRight .sunImg").append(subImg)
			$(".comRight>ul").find("li").mouseenter(function(){
				$(this).css("box-shadow","0 0 3px rgba(50, 50, 50, 0.5)");
				$(this).find("span").css("bottom","0")
				
			}).mouseleave(function(){
				$(this).css("box-shadow","");
				$(this).find("span").css("bottom","")
				
			})
			$(".comRight .sunImg").find("img").hover(function(){
				$(this).css("box-shadow","0 0 5px rgba(70, 70, 50, 0.7)")},
				function(){
					$(this).css("box-shadow","")
			})
			}
		
	});
	
	
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
