
$(document).ready(function()
{
	i=0;
	$(".firstName").on("click",function()
	{
		alert("First Name is clicked");
	})
	$(".lastName").dblclick(function()
	{
		alert("last Name is double clicked");

	})
	$("#paragraph").hover(function(){
  $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "pink");
})
	$(".Email").blur(function()
	{
		$(".Email").css("background-color","pink")
	})
	$(".Email").focus(function()
	{
		$(".Email").css("background-color","green")
	})
	$(".Email").on("keypress",function()
	{
		$("span").text(i+=1)
	})
	$(".Phone").keyup(function()
	{
		$(".Phone").css("background-color", "yellow");

	})
	$(".Phone").keydown(function()
	{
		$(".Phone").css("background-color", "red");
	})
	$(".but").click(function()
	{
		alert("Submit button is clicked");
	})

	$(".but2").click(function()
	{
		$(".Email").trigger("focus");
	})
	$(".Address").click(function(e)
	{
		console.log(e); //gives information about the event
		console.log(e.target); //gives information about the thing which we are clicking
		if(e.ctrlKey && e.)
		{
			alert("controlKey is pressed");

		}  
	})
	$(".button").click(function()
	{
		$(".button").hide();

	})
	$("#paragraph1").on("click",function()  //advantage of this thing is that we can bind multiple events and execute it                            
	{
		alert("Hello you clicked me ! ");
	});
	$(".but1").click(function()
	{
		$("#paragraph1").off("click")   //unbind method used for removing event from the binded events also popularly known as deregistering event
	})
	$("#paragraph2").mousedown(function()
	{
		alert("Mouse down over this paragraph!")
	});
	$("#paragr").mouseup(function()
	{
		alert("mouse up over this paragraph!")
	})
})
