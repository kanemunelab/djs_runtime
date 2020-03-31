root.eval=function(program){
	return new Promise(function(resolve,reject){
		$.post('https://api.eplang.jp/dolittle/transpile',{
			'program':program
		},function(responce){
            (new Function(responce))();
			resolve(responce);
		});
	});
};
