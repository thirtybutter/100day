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
	    if(move>1){
	    	move=1;
	    };
    }
    $("#move").animate({"left":-move*10+"rem"},200);
    $("#select>div").animate({"left":move*5+1+"rem"},200);
    $("#select>li").eq(move).addClass("selectcurrent").siblings("#select>li").removeClass("selectcurrent");    
});

//点击滑动
$("#select>li").click(function(){
	move=$(this).index()
	$("#move").animate({"left":-move*10+"rem"},200,function(){
		if(move==1){
    		$(".footer").animate({"height":"1.2rem"},100)
    	}else{
    		$(".footer").animate({"height":"0rem"},100)
    	}
	});
    $("#select>div").animate({"left":move*5+1+"rem"},200);
    $("#select>li").eq(move).addClass("selectcurrent").siblings("#select>li").removeClass("selectcurrent");  
    
})
if(window.localStorage.getItem("account")){
	$("#alertbox").css("display","none");
}else{
	$("#alertbox").css("display","block");
}
