if ((window.location.href.indexOf("http://www.youtube.") === 0) || (window.location.href.indexOf("https://www.youtube.") === 0)){
	a();
}
function a(){
	var elementExists = document.getElementsByClassName("watch-title ");
	if (elementExists !== null){
		var scriptToAdd='$(function(){$(".watch-title ").innerHTML = "<a href=\'http://clipconverter.cc/?url=" + window.location + "\'>" + document.title.replace(\' - YouTube\', \'\') + \' <div style="font-size: 11px; color: red;">Download</div></a>\';});';
		var script = document.createElement('script');
		script.textContent = scriptToAdd;
		(document.head||document.documentElement).appendChild(script);
		script.parentNode.removeChild(script);
		console.log(1);
	}
}