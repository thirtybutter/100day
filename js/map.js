//var zh ="阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
//$.each(zh, function(i){
//	$.each(cityJson, function(k,p) {
//		if(p.city.localeCompare(zh[i-1]) == -1 && p.city.localeCompare(zh[i]) >= 0) {
////			for(var j=0;j<i;j++){
////				if($("#citychoose ul").eq(j).children("li").text()!=p.city){
//					$("#citychoose ul").eq(i).append("<li>"+p.city+"</li>");
////				}
////			}
//		}
//	});
//});

/* 正则表达式 筛选中文城市名、拼音、首字母 */
//citys.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/;
var arr="abcdefghjklmnpqstwxyz".split(""),
	match,
	letter,
    regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i;   
//  console.log(arr);
for (var j = 0; j < citys.length; j++) {
    match = regEx.exec(citys[j]); //正则
    letter = match[3].toUpperCase(); //取出首字母，转换字母为大写
	$.each(arr,function(i){
		if(arr[i].toUpperCase()==letter){
			$("#citychoose ul").eq(i).append("<li><a href='index.html'>"+match[1]+"</a></a></li>");
		}
	})
}


//点击字母快速移动
$("#alphabet ul li").click(function(){
	var index=$(this).index();
	var cityheight=0;
	var localheight=$("#localtionhistory").height();//	热门,历史,当前的高
	if(index<=3){
		cityheight=-localheight;
	}else{
		for(var i=0;i<index-3;i++){
			cityheight+=$("#citychoose ul").eq(i).height();
		}
	}
	$("#mover").animate({"top":-(cityheight+localheight)+"px"},200);
//	$(this).addClass("betcurrent").siblings("#alphabet ul li").removeClass("betcurrent");
});


//历史搜索内容填充
$("#localtionhistory ul").text("");
var arr=["澄迈"];
if(!localStorage.getItem("history")){
	localStorage.setItem("history",arr);
}else{
	arr=localStorage.getItem("history").split(",");
//	console.log(arr);
	for(var y=0;y<arr.length;y++){
		$("#localtionhistory ul").append("<li><a href='index.html'>"+arr[y]+"</a></li>");
	}
}

//搜索动作
//搜索框改变
$("#search input").change(function(){
	$("#searchresult").text("");
	$("#searchresult").css("height","15.1rem");
	$(".close").css("display","block");
	for (var x = 0; x < citys.length; x++) {
	    match = regEx.exec(citys[x]); //正则
	    if($("#search input").val()==match[1]||$("#search input").val()==match[2]||$("#search input").val()==match[3]||$("#search input").val().toLowerCase()==match[3]){
	    	$("#searchresult").append("<a href='index.html'>"+match[1]+"</a>");
	    }
	}
	if($("#searchresult").find('a').length == 0){
		$("#searchresult").append("<p>没有相关信息</p>");
	}
	//搜索后选择当前地址，并添加到历史
	$("#searchresult a").click(function(){
//		改变当前选择的那个地址
		var tex=$(this).text();
		if(window.localStorage){
			localStorage.setItem("location",tex);
		}
//		数组添加元素
		arr.push(tex);
		if(arr.length>3){
			arr.shift();
		}
//		上传数组
		localStorage.setItem("history",arr);
//		清空
		$("#localtionhistory ul").text("");
//		添加到历史搜索
		for(var y=0;y<arr.length;y++){
			$("#localtionhistory ul").append("<li><a href='index.html'>"+arr[y]+"</a></li>");
		}
	});
});


//点放大镜
$(".open").click(function(){
	$("#searchresult").text("");
	$("#searchresult").css("height","15.1rem");
	$(".close").css("display","block");
	for (var x = 0; x < citys.length; x++) {
	    match = regEx.exec(citys[x]); //正则
	    if($("#search input").val()==match[1]||$("#search input").val()==match[2]||$("#search input").val()==match[3]||$("#search input").val().toLowerCase()==match[3]){
	    	$("#searchresult").append("<a href='index.html'>"+match[1]+"</a>");
	    }
	}
	if($("#searchresult").find('a').length == 0){
		$("#searchresult").append("<p>没有相关信息</p>");
	}
	//搜索后选择当前地址，并添加到历史
	$("#searchresult a").click(function(){
//		改变当前选择的那个地址
		var tex=$(this).text();
		if(window.localStorage){
			localStorage.setItem("location",tex);
		}
//		数组添加元素
		arr.push(tex);
		if(arr.length>3){
			arr.shift();
		}
//		上传数组
		localStorage.setItem("history",arr);
//		清空
		$("#localtionhistory ul").text("");
//		添加到历史
		for(var y=0;y<arr.length;y++){
			$("#localtionhistory ul").append("<li><a href='index.html'>"+arr[y]+"</a></li>");
		}
	});
});


//点×
$(".close").click(function(){
	$("#searchresult").css("height","0rem");
	$(".close").css("display","none");
	$("#search input").val("");
	$("#searchresult").text("");
});



//点击存储所选地址到localstorage
//当前
$("#citychoose ul li a").click(function(){
	var tex=$(this).text();
	if(window.localStorage){
		localStorage.setItem("location",tex);
	}
});
//历史
$("#localtionhistory>ul>li>a").click(function(){
	var tex=$(this).text();
	if(window.localStorage){
		localStorage.setItem("location",tex);
	}
});
//热门
$("#localtionhistory>ol>li>a").click(function(){
	var tex=$(this).text();
	if(window.localStorage){
		localStorage.setItem("location",tex);
	}
});
//滑动列表选择
$("#localtionhistory>div>a").click(function(){
	var tex=$(this).text();
	if(window.localStorage){
		localStorage.setItem("location",tex);
	}
});