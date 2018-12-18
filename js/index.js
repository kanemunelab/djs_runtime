$(function(){
  var get_arr=window.location.search.substring(1).split("&");
  var get_params={};
  for(var i=0;i<get_arr.length;i++){
    get_params[get_arr[i].split("=")[0]]=get_arr[i].split("=")[1];
  }
  var modules=[];
  if(get_params["lib"])modules.push("./js/dtl/"+get_params["lib"]);
  var options=[];
  if(get_params["opt"])options=(""+get_params["opt"]).split(",");
  require(modules,function(){
    startup(options);
    var src=localStorage.getItem("run.js");
    (new Function(src))();
  });
});
