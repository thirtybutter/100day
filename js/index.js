var timer=null;
var key=0;
var square=0;
//轮播图
timer=setInterval(function(){
	key++;
	square++;
	if(square>$("#banner>ul>li").length-1){
		square=1;
		$("#banner>ul").css("left",-(square-1)*10+"rem");
		key=1;
	}
	if(key>$("#banner>ol>li").length-1){
		key=0;
	}
	$("#banner>ul").animate({left:-square*10+"rem"},600);
	$("#banner>ol>li").eq(key).addClass("bannercurrent").siblings("#banner>ol>li").removeClass("bannercurrent");
},3000);
var move=0;

//点击滑动
$("#select li").click(function(){
	move=$(this).index()
	$("#nearby").animate({"left":-move*10+"rem"},200);
    $(".selectbg").animate({"left":move*3.3+0.5+"rem"},200);
    $("#select li").eq(move).addClass("selectcurrent").siblings("#select li").removeClass("selectcurrent");   
})

//左右滑动
$("#nearby").on("touchstart", function(e) {
	//	 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }   
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("#nearby").on("touchend", function(e) {
	//	 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }   
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
    //左滑
    if ( X > 0 ) {
        move--;
	    if(move<0){
	    	move=0;
	    }
    }
    //右滑
    else if ( X < 0 ) {
        move++;
	    if(move>2){
	    	move=2;
	    }
    }
    $("#nearby").animate({"left":-move*10+"rem"},200);
    $(".selectbg").animate({"left":move*3.3+0.5+"rem"},200);
    $("#select li").eq(move).addClass("selectcurrent").siblings("#select li").removeClass("selectcurrent");      
});


//从localstorage提取地点
if(localStorage.getItem("location")){
	$(".location p").text(localStorage.getItem("location"));
}
var sorthtml="";
//根据地店填充“附近”
$.each(objArray, function(k,p) {
	if(k==localStorage.getItem("location")){
		var city=objArray[k];
		console.log(city)
		city.sort(function(a,b){  
	        return a.distance - b.distance;  
	   });  
    	$(".distance").append(a(city));
	}
});
//根据赏金填充“附近”
$.each(objArray, function(k,p) {
	if(k==localStorage.getItem("location")){
		var city=objArray[k];
		city.sort(function(a,b){  
	        return a.money - b.money;  
	    });   
    	$(".money").append(a(city));
	}
});

//根据人气填充“附近”
$.each(objArray, function(k,p) {
	if(k==localStorage.getItem("location")){
		var city=objArray[k];
		city.sort(function(a,b){  
	        return a.fans - b.fans;  
	   });  
    	$(".fans").append(a(city));
	}
});
//其他情况
if(sorthtml==""){
	var city=objArray["其他"];
	city.sort(function(a,b){  
        return a.distance - b.distance;  
    });  
	$(".distance").append(a(city));
	city.sort(function(a,b){  
        return a.money - b.money;  
    });  
	$(".money").append(a(city));
	city.sort(function(a,b){  
        return a.fans - b.fans;  
    });  
	$(".fans").append(a(city));
}
//自动填充函数
function a(city){
    sorthtml = "<ol>";  
    sorthtml += "<li class='flash'><img src='img/COMMON/未标题-1.png'/>&nbsp;&nbsp;刷新中...</li>"; 
    for (var i = 0; i < city.length; i++) {  
        sorthtml += "<li><a href='#'>";  
        sorthtml += "<div style='background: url(img/index/"+city[i].sort+") no-repeat .1rem .1rem/.8rem .8rem;'></div>";
        sorthtml += "<p>"+city[i].name+"<br/><span>关注："+city[i].fans+"人 | 距离："+city[i].distance+"km</span></p>";  
        if(city[i].num==3){
        	sorthtml += "<ul><li>诚信考核任务，赢取诚信分数</li><li>lV0等级以上用户可收取赏金</li><li>首个任务赏金翻倍</li></ul>";  
        }else if(city[i].num==2){
        	sorthtml += "<ul><li>诚信考核任务，赢取诚信分数</li><li>lV0等级以上用户可收取赏金</li></ul>";  
        }
        sorthtml += "<h6>+"+city[i].money+"&nbsp;<span>赏金</span></h6>";  
        sorthtml += "<hr />";
        sorthtml += "</a></li>";  
    }  
    sorthtml += "<li class='libottom'>———————— &nbsp;&nbsp;&nbsp;找不到更多了&nbsp;&nbsp;&nbsp; ————————</li>";
    sorthtml += "</ol>";  
    return sorthtml;
}

//下拉刷新

$("#nearby li ol").on("touchstart", function(e) {
	//	 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }   
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("#nearby li ol").on("touchend", function(e) {
//	 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }   
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
    if ( Y > 0 ) {	
    	$("#nearby ol .flash").animate({"height":"1rem"},100);
    	var timer2=null;
    	var count=0;
    	timer2=setInterval(function(){
    		count+=10;
    		$("#nearby ol .flash img").css("transform","rotate("+count+"deg)");
    	},20);
        setTimeout(function(){
        	$("#nearby ol .flash").animate({"height":"0rem"},100);
        	clearInterval(timer2);
        },3000);
    } 
});