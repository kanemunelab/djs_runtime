(function(){this['Screen']=this['create']();
this['Screen']['width?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['$']['create']((this['window']))['width']();
});
this['Screen']['height?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['$']['create']((this['window']))['height']();
});
this['Screen']['paint']=dtlbind(this,function(c){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['$']['create']("body")['css']("background-color",((c+"")));
});
this['addAlias']("Screen","Panel");
this['UI']=this['create']();
this['UI']['valueOf']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var ret;
var halfval;
ret=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['text'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['text']();
}));
})['or'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['val'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['val']();
}));
}),dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['innerHTML'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['innerHTML']();
}));
}));
halfval=((""+ret))['replace']((root['window']['RegExp']("[０-９．]","g")),dtlbind(this,function(tmpStr){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return root['window']['String']['fromCharCode']((((tmpStr['charCodeAt']((0)))-(65248))));
}));
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return root['window']['parseFloat']((halfval));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return root['window']['parseFloat']((halfval));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return ret;
}));
});
this['UI']['setTrans']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var str;
str=(((("postion:absolute;left:"+(this['pos']['x']))+";top:")+(this['pos']['y']))+";");
this['element']['attr']("transform",(str))['attr']("data-trans",((((this['pos']['x'])+",")+(this['pos']['y']))));
return this;
});
this['UI']['hide']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['hide']();
}));
return this;
});
this['UI']['show']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['show']();
}));
return this;
});
this['UI']['addAlias']("hide","die");
this['UI']['addAlias']("show","appear");
this['UI']['top']=((((this['Screen']['height?']())/(2)))-(20));
this['UI']['autoLayout']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
this['UILayout']['add']((this));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['last'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['moveTo']((((this['last']['right?']())+(10))),(this['last']['top?']()));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['moveTo']((((-(this['Screen']['width?']())/(2))+(20))),(this['top']));
}));
return this['UI']['last']=this;
});
this['UI']['moveTo']=dtlbind(this,function(left,top){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,2);
this['UILayout']['remove']((this),(left),(top));
return this;
});
this['UI']['moveBy']=dtlbind(this,function(dx,dy){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,2);
return this['moveTo']((((this['left?']())+dx)),(((this['top?']())+dy)));
});
this['UI']['left?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return ((this['element']['offset']())['left']-((this['UI']['container']['offset']())['left']));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (0);
}));
});
this['UI']['addAlias']("left?","xpos?");
this['UI']['right?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return ((this['left?']())+(this['width?']()));
});
this['UI']['top?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return -(((this['element']['offset']())['top']-((this['UI']['container']['offset']())['top'])));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (0);
}));
});
this['UI']['addAlias']("top?","ypos?");
this['UI']['bottom?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return ((this['top?']())-(this['height?']()));
});
this['UI']['width?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['outerWidth']();
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (0);
}));
});
this['UI']['height?']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['outerHeight']();
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (0);
}));
});
this['UI']['width']=dtlbind(this,function(w){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['width']((w));
}));
return this;
});
this['UI']['height']=dtlbind(this,function(w){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['height']((w));
}));
return this;
});
this['UI']['nextLine']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var top;
var left;
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['last'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
this['console']['log']("NL",(this['Screen']['width?']()),(this['last']['bottom?']()));
left=((-(this['Screen']['width?']())/(2))+(20));
top=this['last']['bottom?']();
return this['moveTo']((left),(top));
}));
return this;
});
this['UI']['write']=dtlbind(this,function(m){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (this['element']['get']((0)))['innerHTML']=this['num2str']((m));
}));
return this;
});
this['UI']['addAlias']("write","set");
this['UI']['add']=dtlbind(this,function(m){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['write'](((((this['element']['get']((0)))['innerHTML'])+m)));
}));
return this;
});
this['UI']['newLine']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
this['add']("<br>");
return this;
});
this['UI']['clear']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['write']("");
});
this['UI']['num2strDigits']=(1000000);
this['UI']['num2str']=dtlbind(this,function(v){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
var r;
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (v===this['null']);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return v="";
}));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (v===this['undef']);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return v="";
}));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return ((this['typeof']((v)))==="number");
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return v=(((this['window']['Math'])['round'](((v*this['num2strDigits']))))/this['num2strDigits']);
}));
return (v+"");
});
this['UI']['int2str']=this['UI']['num2str'];
this['UI']['str2num']=dtlbind(this,function(s){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
var r;
r=this['window']['parseFloat']((s));
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (r===r);
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return r;
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return s;
}));
});
this['UI']['str2int']=this['UI']['str2num'];
this['UI']['readString']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['text']();
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return "";
}));
});
this['UI']['read']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['str2num']((this['readString']()));
});
this['UI']['addAlias']("read","get");
this['UI']['inc']=dtlbind(this,function(by){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
by=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return by;
})['or'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (1);
}));
return this['write'](((((this['read']())-(0))+by)));
});
this['UI']['addAlias']("inc","increment");
this['UI']['dec']=dtlbind(this,function(by){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
by=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return by;
})['or'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (1);
}));
return this['write']((((this['read']())-by)));
});
this['UI']['addAlias']("dec","decrement");
this['UI']['paint']=dtlbind(this,function(r,g,b){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,3);
var args;
var c;
args=root['window']['Array']['prototype']['slice']['call']((arguments));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (args['length']===(1));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return c=r;
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return c=this['Color']['create']((r),(g),(b));
}));
this['element']['css']("background-color",(c));
return this;
});
this['UI']['fontColor']=dtlbind(this,function(r,g,b){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,3);
var args;
var c;
args=root['window']['Array']['prototype']['slice']['call']((arguments));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (args['length']===(1));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return c=r;
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return c=this['Color']['create']((r),(g),(b));
}));
this['element']['css']("color",(c));
return this;
});
this['UI']['fontSize']=dtlbind(this,function(s){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['element']['css']("font-size",(((s/(10))+"em")));
return this;
});
this['UI']['size']=dtlbind(this,function(w,h){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,2);
this['element']['css']("width",((w+"px")))['css']("height",((h+"px")));
return this;
});
this['UI']['attachEvent']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return });
this['UI']['container']=this['$']['create']("<div>")['appendTo']("body")['attr']("id","UI_div")['css']("position","absolute")['css']("left",(((this['Screen']['width?']())/(2))))['css']("top",(((this['Screen']['height?']())/(2))));
this['$']['create']((this['window']))['resize']((dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['UI']['container']['css']("left",(((this['Screen']['width?']())/(2))))['css']("top",(((this['Screen']['height?']())/(2))));
})['bind']((this))));
this['UILayout']=this['create']();
this['UILayout']['space']=(20);
this['UILayout']['initElem']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
this['element']=this['$']['create']("<div>")['appendTo']((this['UI']['container']));
this['element']['css']("white-space","nowrap")['css']("position","absolute")['css']("left",(((-(this['Screen']['width?']())/(2))+this['space'])))['css']("top",(((-(this['Screen']['height?']())/(2))+this['space'])));
return this['$']['create']((this['window']))['resize']((dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['css']("left",(((-(this['Screen']['width?']())/(2))+this['space'])))['css']("top",(((-(this['Screen']['height?']())/(2))+this['space'])));
})['bind']((this))));
});
this['UILayout']['initElem']();
this['UILayout']['add']=dtlbind(this,function(ui){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
ui['element']['remove']();
ui['inUILayout']=this;
this['element']['append']((ui['element']));
ui['attachEvent']();
return ui['element']['css']("position","static");
});
this['UILayout']['remove']=dtlbind(this,function(ui,left,top){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,3);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return ui['inUILayout'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
ui['element']['remove']();
ui['inUILayout']=this['false'];
this['UI']['container']['append']((ui['element']));
return ui['attachEvent']();
}));
return ui['element']['css']("position","absolute")['css']("left",(left))['css']("top",(-top));
});
this['UILayout']['br']=dtlbind(this,function(ui){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['$']['create']("<br>")['insertBefore']((ui['element']));
});
this['Label']=this['UI']['create']();
this['Label']['left']=(0);
this['Label']['initialize']=dtlbind(this,function(label){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
var t;
t=this;
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (label===this['undef']);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return label=this['read']();
}));
this['element']=this['$']['create']("<span>")['text']((this['num2str']((label))))['css']("font-size","1.0em")['css']("vertical-align","top")['css']("white-space","nowrap");
return this['autoLayout']();
});
this['Label']['fontColor']=dtlbind(this,function(r,g,b){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,3);
var args;
var c;
args=root['window']['Array']['prototype']['slice']['call']((arguments));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (args['length']===(1));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return c=r;
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return c=this['Color']['create']((r),(g),(b));
}));
this['element']['css']("color",(c));
return this;
});
this['Label']['fontSize']=dtlbind(this,function(s){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
var size;
size=(s/(10));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (size<(0.5));
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return size=(0.5);
}));
this['element']['css']("font-size",((size+"em")));
return this;
});
this['Button']=this['UI']['create']();
this['Button']['action']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return });
this['Button']['left']=(0);
this['Button']['attachEvent']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var t;
t=this;
return this['element']['click'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return t['action']['execute']();
}));
});
this['Button']['initialize']=dtlbind(this,function(label,key){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,2);
var t;
t=this;
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (label===this['undef']);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return label=this['read']();
}));
this['element']=this['$']['create']("<button>")['text']((this['num2str']((label))))['css']("vertical-align","top")['css']("white-space","nowrap");
this['autoLayout']();
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return key;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return root['window']['$'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return root['window']['document']['addEventListener']("keydown",dtlbind(this,function(k){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (k['keyCode']===(root['Button']['keyCodeDict']['read']((((key+""))['toUpperCase']()))));
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return t['action']['execute']();
}));
}),(root['true']));
}));
}));
});
this['Button']['setAction']=dtlbind(this,function(a){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['action']=a;
return this;
});
this['Button']['keyCodeDict']=this['Dict']['create']();
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var arr;
arr=this['Array']['create']("0","1","2","3","4","5","6","7","8","9");
dtlbind(this,function(n){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['Button']['keyCodeDict']['write']((arr['get']((n))),((n+(47))));
})['repeat']((arr['length?']()));
arr=this['Array']['create']("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
dtlbind(this,function(n){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['Button']['keyCodeDict']['write']((arr['get']((n))),((n+(64))));
})['repeat']((arr['length?']()));
arr=this['Array']['create']("F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12");
dtlbind(this,function(n){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['Button']['keyCodeDict']['write']((arr['get']((n))),((n+(111))));
})['repeat']((arr['length?']()));
return this['Button']['keyCodeDict']['write']("ESCAPE",(27))['write']("MINUS",(189))['write']("BACK_SLASH",(220))['write']("OPEN_BRACKET",(219))['write']("CLOSE_BRACKET",(221))['write']("SEMICOLON",(186))['write']("COMMA",(188))['write']("PERIOD",(190))['write']("SLASH",(191))['write']("ENTER",(13))['write']("PAGE_UP",(33))['write']("PAGE_DOWN",(34))['write']("END",(35))['write']("HOME",(36))['write']("LEFT",(37))['write']("UP",(38))['write']("RIGHT",(39))['write']("DOWN",(40))['write']("SPACE",(32))['write']("SHIFT",(16))['write']("CTRL",(17));
})['execute']();
this['Button']['inc']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var label;
label=(this['element']['get']((0)))['innerHTML'];
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return label['match']((root['window']['RegExp']("^([0-9０-９]+)$")));
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['text']((((root['window']['parseInt']((label)))+(1))));
}));
return this;
});
this['Field']=this['UI']['create']();
this['Field']['action']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return });
this['Field']['attachEvent']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var t;
t=this;
return this['element']['keypress'](dtlbind(this,function(key){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (key['which']===(13));
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return t['action']((t['readString']()));
}));
}));
});
this['Field']['setAction']=dtlbind(this,function(f){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['action']=f;
return this;
});
this['Field']['initialize']=dtlbind(this,function(label){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (label===this['undef']);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return label=this['read']();
}));
this['element']=this['$']['create']("<input>")['val']((this['num2str']((label))))['css']("vertical-align","top")['css']("white-space","nowrap");
return this['autoLayout']();
});
this['Field']['write']=dtlbind(this,function(m){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['val']((this['num2str']((m))));
}));
return this;
});
this['Field']['readString']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['val']();
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return "";
}));
});
this['TextArea']=this['UI']['create']();
this['ListBox']=this['TextArea']['create']();
this['TextArea']['initialize']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var label;
label=this['read']();
this['manualRow']=this['false'];
this['manualCol']=this['false'];
this['element']=this['$']['create']("<textarea>")['val']((label))['css']("vertical-align","top")['attr']("wrap","off");
this['element']['attr']("readonly",(this['isReadOnly']));
this['autoResize']();
this['autoLayout']();
return this['writeLn']['apply']((this),(arguments));
});
this['TextArea']['autoNewLine']=dtlbind(this,function(f){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (f===this['undef']);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return f=this['true'];
}));
this['isAutoBR']=f;
return this;
});
this['TextArea']['addAlias']("autoNewLine","autoBR");
this['TextArea']['setReadOnly']=dtlbind(this,function(f){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['isReadOnly']=f;
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['attr']("readonly",(f));
}));
return this;
});
this['TextArea']['readOnly']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['setReadOnly']((this['true']));
});
this['TextArea']['writable']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['setReadOnly']((this['false']));
});
this['TextArea']['addAlias']("writable","readWrite");
this['ListBox']['readOnly']()['autoBR']();
this['TextArea']['mblen']=dtlbind(this,function(s){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
var i;
var c;
var r;
i=(0);
r=(0);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (i<(s['length']));
})['while']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
c=s['charCodeAt']((i));
r=(r+(dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (c>=(128));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (2);
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (1);
}))));
return i=(i+(1));
}));
return r;
});
this['TextArea']['autoResize']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var r;
var c;
r=(1);
c=(1);
this['readString']()['split']("\n")['each'](dtlbind(this,function(s){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
var l;
l=this['mblen']((s));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return (l>c);
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return c=l;
}));
return r=(r+(1));
}));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['manualRow'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return }))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['attr']("rows",(r));
}));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['manualCol'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return }))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['attr']("cols",(c));
}));
return this;
});
this['TextArea']['setRow']=dtlbind(this,function(r){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['element']['attr']("rows",(r));
this['manualRow']=this['true'];
return this;
});
this['TextArea']['setCol']=dtlbind(this,function(c){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
this['element']['attr']("cols",(c));
this['manualCol']=this['true'];
return this;
});
this['TextArea']['overwrite']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var a;
var buf;
this['clear']();
return this['writeLn']['apply']((this),(arguments));
});
this['TextArea']['readString']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['val']();
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return "";
}));
});
this['TextArea']['read']=this['TextArea']['readString'];
this['TextArea']['write']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
(this['Array']['prototype']['slice'])['call']((arguments))['each'](dtlbind(this,function(cont){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['_write1']((cont),(this['isAutoBR']));
}));
return this['autoResize']();
});
this['TextArea']['rawOverwrite']=dtlbind(this,function(c){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['val']((c));
}));
return this;
});
this['TextArea']['rawAppend']=dtlbind(this,function(cont){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['rawOverwrite']((((this['readString']())+(this['num2str']((cont))))));
});
this['TextArea']['writeLn']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
(this['Array']['prototype']['slice'])['call']((arguments))['each'](dtlbind(this,function(cont){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['_write1']((cont),(this['true']));
}));
return this['autoResize']();
});
this['TextArea']['_write1']=dtlbind(this,function(cont,br){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,2);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['instanceof']((cont),(this['Array']));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return cont['each'](dtlbind(this,function(e){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['_write1']((e),(br));
}));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
this['rawAppend']((cont));
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return br;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['rawAppend']("\n");
}));
}));
return this;
});
this['TextArea']['newLine']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['rawAppend'](("\n"));
});
this['TextArea']['clear']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
this['rawOverwrite']("");
return this['autoResize']();
});
this['TextArea']['readAsArray']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['read']()['split']("\n")['select'](dtlbind(this,function(e){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return (e!=="");
}))['map']((dtlbind(this,function(e){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['str2num']((e));
})['bind']((this))));
});
this['TextArea']['changeLine']=dtlbind(this,function(no,line){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,2);
return this['overwrite']((this['readAsArray']()['set']((no),(line))));
});
this['SelectMenu']=this['UI']['create']();
this['SelectMenu']['action']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return });
this['SelectMenu']['attachEvent']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var t;
t=this;
this['element']['change'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var num;
var txt;
txt=t['element']['find']("option:selected")['text']();
num=t['element']['val']();
return t['action']((txt),(num));
}));
return this['element']['click']((dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return this['element']['val']("0");
})['bind']((this))));
});
this['SelectMenu']['initialize']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var args;
args=root['window']['Array']['prototype']['slice']['call']((arguments));
this['optNum']=(0);
this['element']=this['$']['create']("<select>")['val']((this['num2str']((this['label']))))['css']("min-width","100px")['css']("font-size","1.3em")['css']("vertical-align","top")['css']("white-space","nowrap");
this['autoLayout']();
return args['each'](dtlbind(this,function(e){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['add']((e));
}));
});
return this['SelectMenu']['add']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
var opt;
this['args']=root['window']['Array']['prototype']['slice']['call']((arguments));
this['args']['each'](dtlbind(this,function(e){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return root['window']['Array']['isArray']((e));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
return e['each'](dtlbind(this,function(e_e){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,1);
return this['add']((e_e));
}));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments,0);
opt=this['$']['create']("<option>");
opt['attr']("value",(this['optNum']));
opt['text']((e));
this['optNum']=(this['optNum']+(1));
return this['element']['append']((opt));
}));
}));
return this;
});
}).checkerror().apply(root,[]);

/*
// Dolittle
Screen=! create.
Screen:width?=[
    $ ! (window) create width.
].
Screen:height?=[
    $ ! (window) create height.
].
Screen:paint=[|c|
    $ ! "body" create "background-color" (c+"") css.
].
! "Screen" "Panel" addAlias.

UI=! create.
UI:valueOf=[|;ret halfval|
    ret=[[element:text]!then[element!text]execute.]
        ![[element:val]!then[element!val]execute]
        [[element:innerHTML]!then[element!innerHTML]execute]or.
    halfval=(""+ret)!(:window!"[０-９．]""g"RegExp)[|tmpStr|
        :window:String!((tmpStr!0 charCodeAt)-65248)fromCharCode
    ]replace.
    [:window!(halfval)parseFloat]!then[
        :window!(halfval)parseFloat
    ]else[ret]execute.
].
UI:setTrans=[|;str|
    str="postion:absolute;left:"+(pos:x)+";top:"+(pos:y)+";".
    element ! "transform" (str) attr
    "data-trans" ((pos:x)+","+(pos:y)) attr.
    this.
].
UI:hide=[
    [element] ! then [ element ! hide] execute.
    this.
].
UI:show=[
    [element] ! then [ element ! show] execute.
    this.
].
UI!"hide" "die" addAlias.
UI!"show" "appear" addAlias.

UI:top=((Screen! height?)/2) - 20.
UI:autoLayout=[
    UILayout! (this) add.
    [last] ! then [
        ! ((last ! right?)+10) (last ! top?) moveTo
    ] else [
        !  (-(Screen ! width?) / 2+20) (top) moveTo.
    ] execute.
    UI:last=this.
].
UI:moveTo=[|left top|
    UILayout! (this) (left) (top) remove.
    this.
].
UI:moveBy=[|dx dy|
    ! ((!left?)+dx) ((!top?)+dy) moveTo
].
UI:left?=[
    [element] ! then [
        (element ! offset):left-((UI:container ! offset):left)
    ] else [0] execute.
].
UI ! "left?" "xpos?" addAlias.
UI:right?=[
    (! left?) + (! width?)
].
UI:top?=[
    [element] ! then [
        -((element ! offset):top-((UI:container ! offset):top))
    ] else [0] execute.
].
UI ! "top?" "ypos?" addAlias.
UI:bottom?=[
    (! top?) - (! height?)
].
UI:width?=[//offsetWidth??
    [element] ! then [ element ! outerWidth] else [0] execute.
].
UI:height?=[
    [element] ! then [ element ! outerHeight] else [0] execute.
].
UI:width=[|w|
    [element] ! then [ element ! (w) width ] execute. this.
].
UI:height=[|w|
    [element] ! then [ element ! (w) height ] execute. this.
].
UI:nextLine=[|;top left|
    [last] ! then [
        console ! "NL" (Screen! width?) (last!bottom?) log.
        left=-(Screen! width?) /2 + 20.
        //top=(UI:top)-((UI:last) ! outerHeight).
        top=last ! bottom?.
        !(left) (top) moveTo.
    ] execute.
    //UILayout! (this) br.
    this.
].
UI:write=[|m|
    [element] ! then [ (element ! 0 get):innerHTML=! (m) num2str] execute.
    self
].
UI ! "write" "set" addAlias.
UI:add=[|m|
    [element]!then[!(((element!0 get):innerHTML)+m)write]execute.
    self
].
UI:newLine=[
    !"<br>"add.
    self
].
UI:clear=[!"" write].
UI:num2strDigits=1000000.
UI:num2str=[|v;r|
    [v==null]!then [v=""] execute.
    [v==undef]!then [v=""] execute.
    [(! (v) typeof)=="number"] ! then [
        v=((window:Math) ! (v*num2strDigits) round) /num2strDigits.
    ] execute.
    v+""
    //    [ (! (r-v) abs) <0.00000001 ] ! then [ r+"" ] else [v+""] execute.
].
UI:int2str=UI:num2str.
UI:str2num=[|s;r|
    r=window ! (s) parseFloat.
    [r==r] ! then [r] else [s] execute.
].
UI:str2int=UI:str2num.
UI:readString=[
    [element] ! then [element ! text] else [""] execute.
].
UI:read=[
    ! (! readString) str2num.
].
UI ! "read" "get" addAlias.
UI:inc=[|by|
    by=[by] ! [1] or.
    ! ( (! read)-0+by) write.
].
UI! "inc" "increment" addAlias.
UI:dec=[|by|
    by=[by] ! [1] or.
    ! ( (! read)-by) write.
].
UI! "dec" "decrement" addAlias.
//本多追加分
UI:paint=[|r g b;args c|
    args=:window:Array:prototype:slice!(arguments)call.
    [args:length==1]!then[
        c=r.
    ]else[
        c=Color!(r)(g)(b)create.
    ]execute.
    self:element!"background-color" (c)css .
    self
].
UI:fontColor=[|r g b;args c|
    args=:window:Array:prototype:slice!(arguments)call.
    [args:length==1]!then[
        c=r.
    ]else[
        c=Color!(r)(g)(b)create.
    ]execute.
    self:element!"color" (c)css.
    self
].
UI:fontSize=[|s|
    self:element!"font-size" (s/10+"em")css.
    self
].

UI:size=[|w h|
    self:element!"width" (w+"px") css
    "height" (h+"px") css.
    self
].
//以上

UI:attachEvent=[].
UI:container=$ ! "<div>" create "body" appendTo
"id" "UI_div" attr
"position" "absolute" css
"left" ( (Screen!width?) / 2) css
"top" ( (Screen!height?) / 2) css.
$ ! (window) create ([
    UI:container !
    "left" ( (Screen!width?) / 2) css
    "top" ( (Screen!height?) / 2) css.
] ! (this) bind) resize.
UILayout=!create.
UILayout:space=20.
UILayout:initElem=[
    element=$!"<div>" create (UI:container) appendTo.
    element !
    "white-space" "nowrap" css
    "position" "absolute" css
    "left" (-(Screen ! width?)/2 +space) css
    "top" (-(Screen! height?)/2+space) css.
    $ ! (window) create ([
        element !
        "left" (-(Screen ! width?)/2 +space) css
        "top" (-(Screen! height?)/2+space) css.
    ] ! (this) bind ) resize.
].
UILayout ! initElem.
UILayout:add=[|ui|
    ui:element ! remove.
    ui:inUILayout=this.
    element ! (ui:element) append.
    ui ! attachEvent.
    ui:element ! "position" "static" css.
].
UILayout:remove=[|ui left top|
    [ui:inUILayout] ! then [
        ui:element ! remove.
        ui:inUILayout=false.
        UI:container ! (ui:element) append.
        ui ! attachEvent.
    ] execute.
    ui:element ! "position" "absolute" css "left" (left) css "top" (-top) css.
].
UILayout:br=[|ui|
    $ ! "<br>" create (ui:element) insertBefore.
].

Label=UI!create.
Label:left=0.
Label:initialize=[|label;t|
    t=this.
    [label==undef]!then [label=! read] execute.
    element=$!"<span>"create
    (!(label) num2str) text
    //"position" "absolute" css
    "font-size" "1.0em" css
    "vertical-align" "top" css
    "white-space" "nowrap" css.
    //(container) appendTo.
    !autoLayout
].
Label:fontColor=[|r g b;args c|
    args=:window:Array:prototype:slice!(arguments)call.
    [args:length==1]!then[
        c=r.
    ]else[
        c=Color!(r)(g)(b)create.
    ]execute.
    self:element!"color" (c)css.
    self
].
Label:fontSize=[|s;size|
    size=s/10.
    [size<0.5]!then[size=0.5]execute.
    self:element!"font-size" (size+"em")css.
    self
].

Button=UI ! create.
Button:action=[].
//Button ! "action" addEventType.
Button:left=0.
Button:attachEvent=[|;t| t=this. element ! [t:action!execute] click].
Button:initialize=[|label key;t|
    t=this.
    [label==undef]!then [label=! read] execute.
    element=$!"<button>" create
    (! (label) num2str) text
    "vertical-align" "top" css
    "white-space" "nowrap" css.
    //"position" "absolute" css.
    //(container) appendTo.
    //! attachEvent.
    ! autoLayout.
    [key]!then[
        :window![:window:document!"keydown"[|k|
                [k:keyCode==(:Button:keyCodeDict!
                ((key+"")!toUpperCase)read)]!then[t:action!execute]execute.
        ](:true)addEventListener.]$.
    ]execute.
    // 以上
].
Button:setAction=[|a|
    action=a.this.
].

Button:keyCodeDict=Dict!create.
[|;arr|
    arr=Array!"0" "1" "2" "3" "4" "5" "6" "7" "8" "9"create.
    [|n|
        Button:keyCodeDict!(arr!(n)get)(n+47)write
    ]!(arr!length?)repeat.
    arr=Array!"A" "B" "C" "D" "E" "F" "G" "H" "I" "J"
    "K" "L" "M" "N" "O" "P" "Q" "R" "S" "T" "U"
    "V" "W" "X" "Y" "Z" create.
    [|n|
        Button:keyCodeDict!(arr!(n)get)(n+64)write
    ]!(arr!length?)repeat.
    arr=Array!"F1" "F2" "F3" "F4" "F5" "F6" "F7" "F8"
    "F9" "F10" "F11" "F12"create.
    [|n|
        Button:keyCodeDict!(arr!(n)get)(n+111)write
    ]!(arr!length?)repeat.
    Button:keyCodeDict!
    "ESCAPE" 27 write
    "MINUS" 189 write
    "BACK_SLASH" 220 write
    "OPEN_BRACKET" 219 write
    "CLOSE_BRACKET" 221 write
    "SEMICOLON" 186 write
    "COMMA" 188 write
    "PERIOD" 190 write
    "SLASH" 191 write
    "ENTER" 13 write
    "PAGE_UP" 33 write
    "PAGE_DOWN" 34 write
    "END" 35 write
    "HOME" 36 write
    "LEFT" 37 write
    "UP" 38 write
    "RIGHT" 39 write
    "DOWN" 40 write
    "SPACE" 32 write
    "SHIFT" 16 write
    "CTRL" 17 write.
]!execute.
// Button:keyCodeDict![|k|
    //     k=(k+"") ! toUpperCase.
    //     [k=="LEFT"]!then[37]
    //     else[k=="UP"]then[38]
    //     else[k=="RIGHT"]then[39]
    //     else[k=="DOWN"]then[40]
    //     else[k=="SPACE"]then[32]execute.
// ].
Button:inc=[|;label|
    label=(self:element!0 get):innerHTML.
    [label!(:window!"^([0-9０-９]+)$"RegExp)match]!then[
        self:element!((:window!(label)parseInt)+1)text.
    ]execute.
    self
].
// Button:write=[|m|
    //     [element] ! then [element ! (m) val] execute.
    //     self
// ].
// Button:read=[
    //     [element] ! then [element ! val] else [""] execute.
// ].

Field=UI! create.
Field:action=[].
Field:attachEvent=[|;t|
    t=this.
    element![|key|
        [key:which==13]!then[
            t!(t!readString)action
        ]execute.
    ]keypress.
].
Field:setAction=[|f|
    self:action=f.
    self.
].
Field:initialize=[|label|
    [label==undef]!then [label=! read] execute.
    element=$!"<input>" create
    (!(label) num2str) val
    "vertical-align" "top" css
    "white-space" "nowrap" css.
    //"position" "absolute" css.
    //(container) appendTo.
    ! autoLayout.
].
Field:write=[|m|
    [element] ! then [element ! (! (m) num2str) val] execute.
    self
].
Field:readString=[
    [element] ! then [element ! val] else [""] execute.
].

TextArea=UI! create.
ListBox=TextArea ! create.
TextArea:initialize=[|;label|
    label=! read.
    manualRow=false.
    manualCol=false.
    element=$!"<textarea>" create
    (label) val
    "vertical-align" "top" css
    "wrap" "off" attr.
    //"white-space" "nowrap" css.
    //"position" "absolute" css.
    //(container) appendTo.
    element ! "readonly" (isReadOnly) attr.
    ! autoResize.
    ! autoLayout.
    writeLn ! (self) (arguments) apply.
].
TextArea:autoNewLine=[|f|
    [f==undef] ! then [f=true] execute.
    isAutoBR=f.
    this.
].
TextArea ! "autoNewLine" "autoBR" addAlias.
TextArea:setReadOnly=[|f|
    isReadOnly=f.
    [element]!then[element ! "readonly" (f) attr]execute.
    this.
].
TextArea:readOnly=[!(true) setReadOnly].
TextArea:writable=[!(false) setReadOnly].
TextArea ! "writable" "readWrite" addAlias.
ListBox ! readOnly autoBR.
TextArea:mblen=[|s;i c r|
    i=0.r=0.
    [i<(s:length)] ! while [
        c=s ! (i) charCodeAt.
        r=r+([c>=128] ! then [2] else[1] execute).
        i=i+1.
    ] execute.
    r.
].
TextArea:autoResize=[|;r c|
    r=1.c=1.
    ! readString "\n" split [|s;l|
        l=! (s) mblen.
        [l>c] ! then [c=l] execute.
        r=r+1.
    ] each.
    [manualRow] ! then [] else [element ! "rows"(r) attr] execute.
    [manualCol] ! then [] else [element ! "cols"(c) attr] execute.
    this.
].
TextArea:setRow=[|r| element ! "rows"(r) attr. manualRow=true. self].
TextArea:setCol=[|c| element ! "cols"(c) attr. manualCol=true. self].
TextArea:overwrite=[|;a buf|
    ! clear.
    writeLn ! (self) (arguments) apply.
].
TextArea:readString=[
    [element] ! then [element ! val] else [""] execute.
].
TextArea:read=TextArea:readString.
TextArea:write=[
    (Array:prototype:slice) ! (arguments) call [|cont|
        // [cont==null]!then [cont=""] execute.
        // [cont==undef]!then [cont=""] execute.
        // [cont:each] ! then [
            //     cont ! [|e| ! (e) writeLn ] each.
        // ] else [
            //     ! ((!readString)+(!(cont) num2str)) rawOverwrite
        // ] execute.
        ! (cont) (isAutoBR) _write1
    ] each.
    ! autoResize.
].
TextArea:rawOverwrite=[|c|
    [element] ! then [element ! (c) val] execute.
    self.
].
TextArea:rawAppend=[|cont|
    ! ((!readString)+(!(cont) num2str)) rawOverwrite.
].
TextArea:writeLn=[
    (Array:prototype:slice) ! (arguments) call [|cont|
        // [cont==null]!then [cont=""] execute.
        // [cont==undef]!then [cont=""] execute.
        // [cont:each] ! then [
            //     cont ! [|e| ! (e) writeLn ] each.
        // ] else [
            //     ! (cont) write newLine.
        // ] execute.
        ! (cont) (true) _write1
    ] each.
    ! autoResize
].
TextArea:_write1=[|cont br|
    [!(cont) (Array) instanceof] ! then [
        cont ! [|e| ! (e) (br) _write1 ] each.
    ] else [
        ! (cont) rawAppend.
        [br]!then [! "\n" rawAppend] execute.
    ] execute.
    this.
].

TextArea:newLine=[
    ! ("\n") rawAppend.
].
TextArea:clear=[! "" rawOverwrite.  ! autoResize].

TextArea:readAsArray=[
    !read  "\n"  split [|e|e!=""] select ([|e|
        ! (e) str2num
    ]!(self) bind)  map
].
TextArea:changeLine=[|no line|
    !(! readAsArray(no) (line) set) overwrite
].

SelectMenu=UI!create.
SelectMenu:action=[].
SelectMenu:attachEvent=[|;t|
    t=this.
    element ! [|;num txt|
        txt=t:element!"option:selected" find text.
        num=t:element!val.
        t ! (txt)(num) action
    ] change.
    element!([
        element!"0"val.
    ]!(self)bind)click.
].
SelectMenu:initialize=[|;args|
    args=:window:Array:prototype:slice!(arguments)call.
    optNum=0.
    element=$!"<select>" create
    (!(label) num2str) val
    "min-width" "100px" css
    "font-size" "1.3em" css
    "vertical-align" "top" css
    "white-space" "nowrap" css.
    //"position" "absolute" css.
    //(container) appendTo.
    ! autoLayout.
    args![|e|self!(e)add]each.
].
SelectMenu:add=[|;opt|
    args=:window:Array:prototype:slice!(arguments)call.
    args![|e|
        [:window:Array!(e)isArray]!then[
            e![|e_e|self!(e_e)add]each.
        ]else[
            opt=$!"<option>"create.
            opt!"value"(self:optNum)attr.
            opt!(e)text.
            self:optNum=self:optNum+1.
            self:element!(opt)append.
        ]execute.
    ]each.
    self.
].

// !"SelectMenu" "選択メニュー"addAlias.
// SelectMenu!"add" "書く"addAlias.

// Field:inc=[|by|
    //     by=[by] ! [1] or.
    //     element ! ((element ! val)-0+by)  val.
    
// ].
*/
