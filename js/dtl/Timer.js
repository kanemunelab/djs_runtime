(function(){this['alltimer']=this['create']();
this['alltimer']['list']=this['Array']['create']();
this['alltimer']['stop']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
this['list']['each'](dtlbind(this,function(i){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return i['stop']();
}));
return this;
});
this['Timer']=this['create']();
this['Timer']['i']=(100);
this['Timer']['t']=(100);
this['Timer']['interval']=dtlbind(this,function(i){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (i>=(0.001));
})['or'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return i=(0.001);
}));
this['i']=(i*(1000));
return this;
});
this['Timer']['times']=dtlbind(this,function(t){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['t']=t;
return this;
});
this['Timer']['duration']=dtlbind(this,function(t){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['t']=((t*(1000))/this['i']);
return this;
});
this['Timer']['d']=root['system']['new']((root['window']['$']['Deferred']))['resolve']();
this['Timer']['skip']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return });
this['Timer']['abort']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return });
this['Timer']['addAlias']("abort","stop");
this['Timer']['execute']=dtlbind(this,function(f){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
var s;
var t;
var i;
var c;
s=this;
t=s['t'];
i=s['i'];
c=(1);
root['alltimer']['list']['add']((s));
s['d']=s['d']['then'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var d;
s['abort']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return root['window']['clearInterval']((s['id']));
});
s['skip']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
root['window']['clearInterval']((s['id']));
return d['resolve']();
});
d=root['system']['new']((root['window']['$']['Deferred']));
s['id']=(root['window'])['setInterval'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return f['execute']((c));
})['try']()['catch'](dtlbind(this,function(e){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
s['abort']();
return this['window']['onerror']("","","","",(e));
}));
c=(c+(1));
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (c>t);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return s['skip']();
}));
}),(i));
return d;
}));
return this;
});
this['Timer']['next_execute']=this['Timer']['execute'];
this['Timer']['after_execute']=dtlbind(this,function(f){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['d']['then'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return f['execute']();
}));
return this;
});
this['Timer']['wait']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['DtlPromise']['new'](dtlbind(this,function(succ){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['after_execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return succ['execute']((this));
}));
}));
});
this['Timer']['addAlias']("after_execute","execute_once");
return this['addAlias']("Timer","timer");
}).checkerror().apply(root,[]);

/*
//NOGENERATOR
// Dolittle
alltimer=!create.
alltimer:list=Array!create.
alltimer:stop=[
    self:list![|i|i!stop.]each.
    self.
].

Timer=!create.
Timer:i=100.
Timer:t=100.
Timer:interval=[|i|
    [i>=0.001]![i=0.001]or.
    self:i=i*1000.
    self
].
Timer:times=[|t|self:t=t.self].
Timer:duration=[|t|self:t=t*1000/self:i.self].
Timer:d=:system!(:window:$:Deferred)new resolve.
Timer:skip=[].
Timer:abort=[].
Timer ! "abort" "stop" addAlias.
Timer:execute=[|f;s t i c|
    s=self.
    t=s:t.
    i=s:i.
    c=1.
    :alltimer:list!(s)add.
    s:d=s:d![|;d|
        s:abort=[:window!(s:id)clearInterval].
        s:skip=[:window!(s:id)clearInterval.d!resolve].
        d=:system!(:window:$:Deferred)new.
        s:id=(:window)![
            [f!(c)execute.]!try[|e|
                s!abort.
                window ! "" "" "" "" (e) onerror.
                //:system!(e)throw.
            ]catch.
            c=c+1.
            [c>t]!then[
                s!skip.
            ]execute.
        ] (i) setInterval.
        d.
    ]then.
    self.
].
Timer:next_execute=Timer:execute.
Timer:after_execute=[|f|
    self:d![f!execute]then.
    self.
].
Timer:wait=[
    DtlPromise ! [|succ|
        ! [
            succ! (self) execute
        ] after_execute 
    ] new.
].
Timer ! "after_execute" "execute_once" addAlias. 
! "Timer" "timer" addAlias.
*/