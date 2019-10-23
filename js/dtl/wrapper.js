(function(){
string=root.create();
string.initialize=function(str){
	this.valueOf=function(){return ''+str;};
};
string.add=function(r){
	return string.create(''+this.valueOf()+r.valueOf());
};
string.split=function(r){
	return string.create(this.valueOf().split(r));
};
window.string=root.string=string;

})();
