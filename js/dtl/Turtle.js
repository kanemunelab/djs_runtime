(function(){this['turtle']=this['Actor']['create']();
this['Turtle']=this['turtle'];
this['Turtle']['baseURL']=(this['window']['runtimePath']+"images/");
this['Turtle']['img']="ayumi.gif";
this['turtle']['action']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return });
this['turtle']['initialize']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var t;
t=this;
this['element']=this['createSVGElem']("image");
this['element']['get']((0))['setAttributeNS']("http://www.w3.org/1999/xlink","href",((this['baseURL']+this['img'])));
this['adjustImage']();
this['getImageSize'](((this['baseURL']+this['img'])));
this['element']['attr']("transform","scale(1,-1)");
this['element']['click'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return t['action']();
}));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['_lineCol'];
})['else']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['lineColor']("black");
}));
this['newLineG']();
this['isShowing']=this['false'];
this['appear']();
this['pos']=this['pos']['add']((this['Vec2']['O']));
return this['dir']=this['dir'];
});
this['turtle']['width']=(32);
this['turtle']['height']=(32);
this['turtle']['_lineWidth']=(3);
this['turtle']['isPenDown']=this['true'];
this['turtle']['adjustImage']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['element']['attr']("width",((this['width']+"px")))['attr']("height",((this['height']+"px")))['attr']("x",((-this['width']/(2))))['attr']("y",((-this['height']/(2))));
});
this['turtle']['getImageSize']=dtlbind(this,function(url){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var t;
t=this;
return this['$']['create']("<img>")['css']("display","none")['load'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var j;
j=(t['$'])['create']((this));
t['width']=j['width']();
t['height']=j['height']();
t['adjustImage']();
return j['remove']();
}))['attr']("src",(url))['appendTo']("body");
});
this['turtle']['newLineG']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
this['lineG']=this['createSVGElem']("g")['appendTo']((this['svg_g']));
this['lineG']['attr']("transform",((((("translate("+(this['pos']['x']))+" ")+(this['pos']['y']))+")")));
return this['lineOrig']=this['pos'];
});
this['turtle']['addPath']=dtlbind(this,function(pos1,pos2){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var line;
pos1=pos1['sub']((this['lineOrig']));
pos2=pos2['sub']((this['lineOrig']));
line=this['createSVGElem']("line")['attr']("x1",(pos1['x']))['attr']("y1",(pos1['y']))['attr']("x2",(pos2['x']))['attr']("y2",(pos2['y']))['attr']("style",(((("stroke:"+this['_lineCol'])+";stroke-width:")+this['_lineWidth'])))['attr']("data-width",(this['_lineWidth']))['appendTo']((this['lineG']));
return this;
});
this['turtle']['addPathAfterAction']=dtlbind(this,function(a){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var pos1;
pos1=this['pos'];
a['execute']();
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['isPenDown'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['addPath']((pos1),(this['pos']));
}));
return this;
});
this['turtle']['forward']=dtlbind(this,function(by){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['addPathAfterAction'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return (this['Actor']['forward'])['call']((this),(by));
}));
});
this['turtle']['moveTo']=dtlbind(this,function(x,y){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['addPathAfterAction'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return (this['Actor']['moveTo'])['call']((this),(x),(y));
}));
});
this['turtle']['circle']=dtlbind(this,function(r){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var d;
d=(r*(0.1745328));
this['backward'](((d/(2))));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['forward']((d))['rightTurn']((10));
})['repeat']((36));
return this['forward'](((d/(2))));
});
this['turtle']['closePath']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['isPenDown'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['moveTo']((this['lineOrig']['x']),(this['lineOrig']['y']));
}));
return this;
});
this['turtle']['addAlias']("closePath","close");
this['turtle']['lineColor']=dtlbind(this,function(col){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return col;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['_lineCol']=col;
}));
return this;
});
this['turtle']['lineWidth']=dtlbind(this,function(w){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
w=this['num']((w));
this['_lineWidth']=w;
return this;
});
this['turtle']['makeFigure']=dtlbind(this,function(col){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var r;
r=this['Figure']['create']((this));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return col;
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return r['paint']((col));
}));
this['newLineG']();
return r;
});
this['turtle']['paint']=dtlbind(this,function(col){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['makeFigure']((col));
});
this['turtle']['penDown']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['isPenDown'];
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return }))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
this['isPenDown']=this['true'];
return this['newLineG']();
}));
return this;
});
this['turtle']['penUp']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
this['isPenDown']=this['false'];
return this;
});
this['turtle']['setShape']=dtlbind(this,function(url){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
this['img']=url;
url=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return url['match']("https?");
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return url;
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return (this['baseURL']+url);
}));
this['element']['get']((0))['setAttributeNS']("http://www.w3.org/1999/xlink","href",(url));
this['getImageSize']((url));
return this;
});
this['turtle']['addAlias']("setShape","change");
this['turtle']['setTrans']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
var str;
str=(((("translate("+(this['pos']['x']))+" ")+(this['pos']['y']))+") ");
str=(((str+"rotate(")+this['dir'])+") ");
str=(((((str+"scale(")+this['_scale'])+" ")+(((0)-this['_scale'])))+") ");
this['element']['attr']("transform",(str))['attr']("data-trans",((((((this['pos']['x'])+",")+(this['pos']['y']))+",")+this['dir'])));
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['isShowing'];
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['checkCrash']();
}));
return this;
});
this['turtle']['polygon']=dtlbind(this,function(d,n){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['forward']((d))['rightturn']((((360)/n)));
})['repeat']((n));
});
root['action']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return });
root['action']['isEventHandler']=this['true'];
root['click']=dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return });
root['click']['isEventHandler']=this['true'];
return this['turtle']['setAction']=dtlbind(this,function(f){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return ((this['typeof']((f)))==="function");
})['then']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _rest=Array.prototype.slice.call(arguments);
return this['action']=f;
}));
return this;
});
}).checkerror().apply(root,[]);

/*
// system ! "Actor" use.
//test3
turtle=Actor ! create.
Turtle=turtle.
Turtle:baseURL=window:runtimePath+"images/".
Turtle:img="ayumi.gif".
turtle:action=[/*:window!"aa"alert* /].
turtle:initialize=[|;t|
    t=this.//@hoge1e3
    element= ! "image" createSVGElem.
    element ! 0 get 
    "http://www.w3.org/1999/xlink" "href" 
    (baseURL+img) setAttributeNS.
    !adjustImage.
    ! (baseURL+img) getImageSize .
    element ! "transform" "scale(1,-1)" attr.
    element ! [t!action] click.//@hoge1e3
    [_lineCol]!else[! "black" lineColor]execute.
    !newLineG.
    isShowing=false.
    !appear.
    self:pos=self:pos!(Vec2:O)add.
    self:dir=self:dir.
].
turtle:width=32.
turtle:height=32.
turtle:_lineWidth=3.
turtle:isPenDown=true.

turtle:adjustImage=[
    element ! "width" (width+"px") attr
    "height" (height+"px") attr
    "x" (-width/2) attr
    "y" (-height/2) attr.
].
turtle:getImageSize=[|url;t|
    t=this.
    $ ! "<img>" create "display" "none" css [|;j|
        j=(t:$) ! (this) create.
        t:width=j ! width.
        t:height=j ! height.
        //(t:console) ! "getims" (t:width) (t:height) log.
        t!adjustImage.
        j!remove.
    ] load "src" (url) attr "body" appendTo.
].
turtle:newLineG=[
    lineG=! "g" createSVGElem (svg_g) appendTo.
    lineG ! "transform" ("translate("+(pos:x)+" "+(pos:y)+")") attr.
    lineOrig=pos.
].
turtle:addPath=[|pos1 pos2;line|// pos:world coord
    pos1=pos1 ! (lineOrig) sub.
    pos2=pos2 ! (lineOrig) sub.
    line=! "line" createSVGElem
    "x1" (pos1:x) attr "y1" (pos1:y) attr
    "x2" (pos2:x) attr "y2" (pos2:y) attr 
    "style" ("stroke:"+_lineCol+";stroke-width:"+_lineWidth) attr
    "data-width" (_lineWidth) attr
    (lineG) appendTo.
    this.
].
turtle:addPathAfterAction=[|a;pos1|
    pos1=pos.
    a ! execute.
    //console ! "PEND" (isPenDown) log.
    //[[isShowing]![isPendown]or] ! then  // <-これだとペンなしが効かなくなるよー
    [isPenDown] ! then [
        ! (pos1) (pos) addPath.
    ] execute.
    this.
].
turtle:forward=[|by|
    ! [(Actor:forward) ! (this) (by) call.] addPathAfterAction.
].
turtle:moveTo=[|x y|
    ! [(Actor:moveTo) ! (this) (x) (y) call.] addPathAfterAction.
].
turtle:circle=[|r;d|
    d=r * 0.1745328.
    !(d/2)backward.
    [!(d)forward 10 rightTurn] !36 repeat。
    !(d/2)forward
].
turtle:closePath=[
    [isPenDown]!then[
        //! (pos) (lineOrig) addPath.
        ! (lineOrig:x)(lineOrig:y)moveTo.
    ]execute.
    self.
].
turtle!"closePath" "close" addAlias.
turtle:lineColor=[|col|
	[col]!then[_lineCol=col]execute.
	this.
].
turtle:lineWidth=[|w|
    w=!(w)num.
    _lineWidth=w.this.
].
turtle:makeFigure=[|col;r|
    r=Figure ! (this) create.
    [col]! then[r!(col) paint]execute.
    ! newLineG.
    r.
].
turtle:paint=[|col|
    !(col) makeFigure.
].
turtle:penDown=[
    [isPenDown]!then [] else [isPenDown=true. !newLineG] execute. 
    this
].
turtle:penUp=[isPenDown=false.this.].
turtle:setShape=[|url|
    self:img=url.
    url=[url ! "https?" match] ! then [url] else [baseURL+url] execute.
    element ! 0 get 
    "http://www.w3.org/1999/xlink" "href" 
    (url) setAttributeNS.
    ! (url) getImageSize.
    this.
].
turtle ! "setShape" "change" addAlias.
turtle:setTrans=[|;str|
    str="translate("+(pos:x)+" "+(pos:y)+") ".
    str=str+"rotate("+dir+") ".
    str=str+"scale("+_scale+" "+(0-_scale)+") ".
    element ! "transform" (str) attr
    "data-trans" ((pos:x)+","+(pos:y)+","+dir) attr.
    [isShowing] ! then [ ! checkCrash ] execute.
    this.
].
turtle:polygon=[|d n|
    [self!(d)forward(360/n)rightturn]!(n)repeat.
].
:action=[].
:action:isEventHandler=true.
:click=[].
:click:isEventHandler=true.
turtle:setAction=[|f|
    [(!(f)typeof)=="function"]!then[
        self:action=f.    
    ]execute.
    self.
].
*/