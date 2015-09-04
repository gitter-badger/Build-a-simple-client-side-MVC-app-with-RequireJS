//this method simply loops on each students and concatenate them in an HTML
//string injected in the #app (project.html)
define(function(){
	function render(parameters){
		var appDiv=document.getElementById('app');
		
		var students=parameters.students;
		
		var html='<ul>';
		for(var i=0, len=students.length; i<len; i++){
			html += '<li>'  + students[i].name + '</li>';
		}
		html+='</ul>';
		appDiv.innerHTML=html;
	}
	return{
		render:render
	};
	
});
