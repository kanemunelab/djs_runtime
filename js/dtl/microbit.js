root.system.run(function(){return AsyncByGenerator.toVal((function*() {return this['system']['setupper']['microbit']=dtlbind(this,function(resolver,rejecter){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,2);
var btn;
return AsyncByGenerator.toVal((function*() {root['microbit']=(yield* AsyncByGenerator.toGen(this['create']()));
root['microbit']['board']=this['undef'];
root['accelerometer']=(yield* AsyncByGenerator.toGen(this['create']()));
root['accelerometer']['x?']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['microbit']['board']['accelerometer']['x'];
}).apply(this));});
root['accelerometer']['y?']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['microbit']['board']['accelerometer']['y'];
}).apply(this));});
root['microbit']['board']=(yield* AsyncByGenerator.toGen(root['window']['eval']("(()=>new Microbit)()")));
btn=(yield* AsyncByGenerator.toGen(this['button']['create']("接続")));
(yield* AsyncByGenerator.toGen(btn['setAction'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {(yield* AsyncByGenerator.toGen((root['microbit']['board'])['connect']((resolver),(rejecter))));
return (yield* AsyncByGenerator.toGen(this['hide']()));
}).apply(this));}))));
(yield* AsyncByGenerator.toGen(this['root']['addAlias']("accelerometer","加速度センサ")));
(yield* AsyncByGenerator.toGen(this['accelerometer']['addAlias']("x?","横の傾き?")));
return (yield* AsyncByGenerator.toGen(this['accelerometer']['addAlias']("y?","縦の傾き?")));
}).apply(this));});
}).apply(this));});

/*
system:setupper:microbit=[|resolver rejecter;btn|
    :microbit=!create.
    :microbit:board=undef.
    :accelerometer=!create.
    :accelerometer:x?=[ microbit:board:accelerometer:x ].
    :accelerometer:y?=[ microbit:board:accelerometer:y ].

    :microbit:board=:window!"(()=>new Microbit)()"eval.
    btn=button!"接続" create.
    btn![
        (:microbit:board)!(resolver)(rejecter)connect.
        self!hide.
    ]setAction.
    
    root!"accelerometer" "加速度センサ" addAlias.
    accelerometer!"x?" "横の傾き?" addAlias.
    accelerometer!"y?" "縦の傾き?" addAlias.
].
*/