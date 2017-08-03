$("#move").on("touchstart", function(e) {
	//	 判断默认行为是否可以被禁用
//  if (e.cancelable) {
//      // 判断默认行为是否已经被禁用
//      if (!e.defaultPrevented) {
//          e.preventDefault();
//      }
//  }   
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("#move").on("touchend", function(e) {
//	//	 判断默认行为是否可以被禁用
//  if (e.cancelable) {
//      // 判断默认行为是否已经被禁用
//      if (!e.defaultPrevented) {
//          e.preventDefault();
//      }
//  }   
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
	    if(move>3){
	    	move=3;
	    }
    }
    $("#move").animate({"left":-move*10+"rem"},200);
    $("#select>div").animate({"left":move*2.5+0.5+"rem"},200);
    $("#select>li").eq(move).addClass("selectcurrent").siblings("#select>li").removeClass("selectcurrent");    
    
    
    //点击选取
    $("#one>ul>li").click(function(){
    	$(this).addClass("moneycurrent").siblings().removeClass("moneycurrent");
    });
    $("#two>ul>li").click(function(){
    	$(this).addClass("moneycurrent").siblings().removeClass("moneycurrent");
    });
    $("#three>ul>li").click(function(){
    	$(this).addClass("moneycurrent").siblings().removeClass("moneycurrent");
    });
    $("#four>ul>li").click(function(){
    	$(this).addClass("moneycurrent").siblings().removeClass("moneycurrent");
    });
    
   
});


//点击滑动
$("#select>li").click(function(){
	move=$(this).index()
	$("#move").animate({"left":-move*10+"rem"},200);
    $("#select>div").animate({"left":move*2.5+0.5+"rem"},200);
    $("#select>li").eq(move).addClass("selectcurrent").siblings("#select>li").removeClass("selectcurrent");   
})
$("#one>div>input").blur(function(){	 	
 	if($(this).val().match(/^(1[35789]\d{9})?(\d{6,11})?$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入手机号或QQ");
 	}
})
$("#two>div>input").blur(function(){	 	
 	if($(this).val().match(/^1[35789]\d{9}$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入手机号");
 	}
})
$("#three>.searchone>input").blur(function(){	 	
 	if($(this).val().match(/^1[35789]\d{9}$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入手机号");
 	}
})
$("#three>.searchtwo>input").blur(function(){	 	
 	if($(this).val().match(/^[\u4e00-\u9fa5]{2,5}$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入姓名");
 	}
})
$("#three>.searchthree>input").blur(function(){	 	
 	if($(this).val().match(/^\d{10}[01]\d[0123]\d{2}(\d{2}[0-9xX]$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入身份证号");
 	}
})
$("#four>div>input").blur(function(){	 	
 	if($(this).val().match(/^1[35789]\d{9}$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入手机号");
 	}
})