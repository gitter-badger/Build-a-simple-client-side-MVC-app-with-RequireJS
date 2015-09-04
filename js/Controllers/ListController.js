//this just deserialize the students from localStorage and pass it
//to render as an object

define(['Views/ListView'], function(ListView){
	
	function start(){
		var students=JSON.parse(localStorage.students);
		ListView.render({students:students});
	}
	return{
		start:start
	};
});

