//here is the call to the student.js and controllers.js using the rquire function.
//which takes two parameter, the array of the modules we want to load(this should be relative to the entry point "main.js")
//And the function to call once when the dependency scripts are loaded (the parameter can have the same name as the modules name)
require(['Models/students','Controllers/ListController'], function(Students, ListController){
	//manually creating set of students
	var students=[new Students('Buba'), new Students('Jason'), new Students('Gopi')];
	for(var i=0, len=students.length; i<len; i++){
		console.log(students[i].name);
	}
	//serializing in JSON will make this array of students be store in local storage 
	//And be accessible just like a database
	localStorage.students=JSON.stringify(students);
	
	//this start function will run the ListController.js module.
	//declare as a dependency of require.
	ListController.start();
});
