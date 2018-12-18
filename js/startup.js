function isinclude(arr,name){var res=false;arr.forEach(function(e){if(e==name)res=true;});return res;}

function startup(options){
  console.log(options);
  if(isinclude(options,"grid"))grid_show();
}
