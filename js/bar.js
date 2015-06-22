$(function(){
	var index=location.hash.substring(1,location.hash.length);
	// alert(index);
	var sliderLeft=$(".nav a").eq(index).get(0).offsetLeft+($(".nav a").eq(index).width()/2)-($(".slider").outerWidth()/2);
	$(".slider").css({left:sliderLeft+"px"},500);
	
	$(".nav a").removeClass("active");
	$(".nav a").eq(index).addClass("active");
	$(".nav a").click(function(){
		window.localStorage.setItem("index",$(this).index());
	})
})
