function isinclude(arr,name){var res=false;arr.forEach(function(e){if(e==name)res=true;});return res;}

function startup(options){
  console.log(options);
  if(isinclude(options,"grid"))grid_show();

	if(isinclude(options,"moveslow")){
		root["_turtle"]=root["turtle"];
		root["turtle"]=root["create"]();
		root["turtle"]["create"]=dtlbind(root,function(){
			return root["_turtle"]["create"]()["moveSlow"]();
		});
		root["addAlias"]("turtle","Turtle","タートル","たーとる");
	}
}
