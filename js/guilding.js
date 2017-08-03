var move=0;
$("ul").on("touchstart", function(e) {
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("ul").on("touchend", function(e) {
//	// 判断默认行为是否可以被禁用
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
	    if(move>2){
	    	move=2;
	    }
    }
    $("ul").animate({"left":-move*10+"rem"},200);
    $("ol li").eq(move).addClass("current").siblings("ol li").removeClass("current");      
});
