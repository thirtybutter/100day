$(".search-bar").change(function(){
	$(".main").text("");
	var value=$(this).val();
	if(window.localStorage){
		var local=localStorage.getItem("location");
	}
	
	$.each(objArray[local], function(k,p) {
//		var city=objArray[k];
//		var sorthtml = "<li>";  
//	    for (var i = 0; i < city.length; i++) {  
//	        sorthtml += "<a href='#'>";  
//	        sorthtml += "<div style='background: url(img/index/"+city[i].sort+") no-repeat .1rem .1rem/.8rem .8rem;'></div>";
//	        sorthtml += "<p>"+city[i].name+"<br/><span>关注："+city[i].fans+"人 | 距离："+city[i].distance+"km</span></p>";  
//	        if(city[i].num==3){
//	        	sorthtml += "<ul><li>诚信考核任务，赢取诚信分数</li><li>lV0等级以上用户可收取赏金</li><li>首个任务赏金翻倍</li></ul>";  
//	        }else if(city[i].num==2){
//	        	sorthtml += "<ul><li>诚信考核任务，赢取诚信分数</li><li>lV0等级以上用户可收取赏金</li></ul>";  
//	        }
//	        sorthtml += "<h6>+"+city[i].money+"&nbsp;<span>赏金</span></h6>";  
//	        sorthtml += "<hr />";
//	        sorthtml += "</a></li>";  
//	    }  
//	    sorthtml += "</ol>";  
//	    return sorthtml;
//  	$(".fans").append(a(city));
//		console.log(k);
//		console.log(p);
		if(value==p.type||value==p.type1||value==p.type2||value==p.type3){
			$(".main").append("<li><a><p>"+p.name+"</p><span>距本地"+p.distance+"km</span></a></li>")
		}
	});
	if($(".main").text()==""){
		$(".main").append("<div class='nodata'>暂无相关数据，请重新查询</div>");
	}
});
