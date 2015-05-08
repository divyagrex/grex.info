$(document).ready(function(){
	$("#header").load("header1.html"); 
	 $("#footer").load("footer.html");
	 
/*
	 $(".side-menu a").on("click",function(e){
	 	var html=$(this).data("html");
	 	$("#mainContent").load(html);
	 	$(".side-menu .active").removeClass("active");
	 	$(this).addClass("active");
	 	e.preventDefault();
	 	
	 }) */
	
	$(".showMore").on("click",function(e){
		var val=$(this).text();
		
		if(val==="More Info"){
			$(this).text("Less Info");
		}
		
		else{
			console.log(val);
			$(this).text("More Info");
		}
		e.preventDefault();
	});
	
	

});
