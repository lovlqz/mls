function flash(){
	//轮播图
	var timer=null;
	var index=1;
	//鼠标在小圆点上切换
	$(".banner-nav li").mouseover(function(){
		clearInterval(timer)
		 index=$(this).index();
		$(this).addClass("banner-select").siblings().removeClass("banner-select");
		$(".banner-con li").eq(index).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
		$(".banner-con li img").stop().animate({"width":"896px","height":"447px"},1000).eq(index).stop().animate({"width":"916px","height":"467px"},1500);
	}).mouseout(function(){
		start()
	});
	start();
	function start(){
		clearInterval(timer)
		timer=setInterval(function(){
			$(".banner-nav li").eq(index).addClass("banner-select").siblings().removeClass("banner-select");
			$(".banner-con li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$(".banner-con li img").stop().animate({"width":"896px","height":"447px"},1000).eq(index).stop().animate({"width":"916px","height":"467px"},1500);	
			index++;
			if(index>=$(".banner-con li").length-1){
				index=0
			}
		},3000)
	}	
	//鼠标放在图上放图片放大
	$(".top-banner").eq(0).mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		start();
	})
}


//添加楼层
function build(n){	
        var req = new XMLHttpRequest();
        req.open("get", "date/index-storey.json", true);
        req.send();
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    var result = req.responseText;
//                    alert(typeof  result);
                    var obj = JSON.parse(result);
                    var oIn=obj[n];
                    if(oIn){
                    var html="",html1="",html2="",html3="";
                    var list1 = oIn["001"];//获取全部的数据源
                        var src1 = list1.src;  
                        var des1=list1.des;
                    html1="<h2><img alt='"+des1+"' src='img/"+src1+"'/></h2>";
         
                    var list2=oIn["002"]; 
                    html2="<div class='common-box'><div class='sad-t'><a class='ad1' href='javascript:;'><img src='img/"+list2[0]+"'/></a><a class='ad2' href='javascript:;'><img src='img/"+list2[1]+"'/></a><a class='ad2' href='javascript:;'><img src='img/"+list2[2]+"'/></a><a class='ad2' href='javascript:;'><img src='img/"+list2[3]+"'/></a></div>";
                    
                     var list3=oIn["003"]; 
                    html3="<div class='sad-b'><div class='sad-attr-box'><a herf='javascript:;' target='_blank'>"+list3[0]+"</a><a herf='javascript:;' target='_blank'>"+list3[1]+"</a><a herf='javascript:;' target='_blank'>"+list3[2]+"</a><a herf='javascript:;' target='_blank'>"+list3[3]+"</a><a herf='javascript:;' target='_blank' >"+list3[4]+"</a><a herf='javascript:;' target='_blank' >"+list3[5]+"</a><a href='javascript:;' target='_blank'>"+list3[6]+"</a><a href='javascript:;' target='_blank'>"+list3[7]+"</a><a href='javascript:;' target='_blank'>"+list3[8]+"</a><a href='javascript:;' target='_blank'>"+list3[9]+"</a><a href='javascript:;' target='_blank'>"+list3[10]+"</a><a href='javascript:;' target='_blank'>"+list3[11]+"</a><a href='javascript:;' target='_blank'>"+list3[12]+"</a><a href='javascript:;' target='_blank'>"+list3[13]+"</a><a href='javascript:;' target='_blank'>"+list3[14]+"</a><a href='javascript:;' target='_blank'>"+list3[15]+"</a></div><a class='sad-3' href='javascript'><img src='img/"+list3[16]+"'/></a><a class='sad-3' href='javascript'><img src='img/"+list3[17]+"'/></a><a class='sad-3' href='javascript'><img src='img/"+list3[18]+"'/></a></div>"
                    
                    html=html1+html2+html3;
                   $forputin.append(html); 
                    //alert(html+""+html1+""+html2)
                   }
                }
            }
        }
}

//正在流行物品添加
function nowPopular(){
var goods_list=document.getElementsByClassName("product-ul")[0];
		 var req = new XMLHttpRequest();
		    req.open("get", "date/detail-goods.json", true);
		    req.send();
		    req.onreadystatechange = function () {
		        if (req.readyState == 4) {
		            if (req.status == 200) {
		                var result = req.responseText;
		                var list = JSON.parse(result);
		                var html = "";
		                var arr=[];
		                for (var i=0;i<list.length;i++) {
		                	var id=list[i]["id"];
		                	arr.push(id);
		                    var src = list[i]["src"];
		                    var dis = list[i]["dis"];
		                    var prise=list[i]["prise"];		                   
		                    var volume=list[i]["volume"];
		                    
		                    html +="<li class='product-list' date_prise="+prise+" date_popular="+volume+"><div class='img-size'><img src='img/"+src+"'/></div><div class='product-info'><div class='aprice f1'><em class='price-u'>￥</em><span class='price-n'>"+prise+"</span></div><div class='fav fr'><em class='fav-i'></em><span class='fav-n'>"+volume+"</span></div></div><a class='text-link' href='javascript:;'>"+dis+"</a></li>";
		                }
		                goods_list.innerHTML = html;                
						
						//鼠标进入图片放大
						$(".product-list .img-size").mouseover(function(){
					$(this).find("img").stop().animate({"width":"244px","height":"360px","margin-left":"-10px","margin-top":"-10px"},1000)
				}).mouseout(function(){
					$(this).find("img").stop().animate({"width":"224px","height":"340px","margin-left":"0","margin-top":"0"},1000)
				})
		            }
		        }
		    }
}
