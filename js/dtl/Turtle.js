root.system.run(function(){return AsyncByGenerator.toVal((function*() {this['turtle']=(yield* AsyncByGenerator.toGen(this['Actor']['create']()));
this['Turtle']=this['turtle'];
this['Turtle']['baseURL']=(this['window']['runtimePath']+"images/");
this['Turtle']['img']="ayumi.gif";
this['turtle']['action']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return }).apply(this));});
this['turtle']['initialize']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
var t;
return AsyncByGenerator.toVal((function*() {t=this;
this['element']=(yield* AsyncByGenerator.toGen(this['createSVGElem']("image")));
(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['element']['get']((0))))['setAttributeNS']("http://www.w3.org/1999/xlink","href",((this['baseURL']+this['img'])))));
(yield* AsyncByGenerator.toGen(this['adjustImage']()));
(yield* AsyncByGenerator.toGen(this['getImageSize'](((this['baseURL']+this['img'])))));
(yield* AsyncByGenerator.toGen(this['element']['attr']("transform","scale(1,-1)")));
(yield* AsyncByGenerator.toGen(this['element']['click'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(t['action']()));
}).apply(this));}))));
(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['_lineCol'];
}).apply(this));})['else']()))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['lineColor']("black")));
}).apply(this));}))));
(yield* AsyncByGenerator.toGen(this['newLineG']()));
this['isShowing']=this['false'];
(yield* AsyncByGenerator.toGen(this['appear']()));
this['pos']=(yield* AsyncByGenerator.toGen(this['pos']['add']((this['Vec2']['O']))));
return this['dir']=this['dir'];
}).apply(this));});
this['turtle']['width']=(32);
this['turtle']['height']=(32);
this['turtle']['_lineWidth']=(3);
this['turtle']['isPenDown']=this['true'];
this['turtle']['adjustImage']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['element']['attr']("width",((this['width']+"px")))))['attr']("height",((this['height']+"px")))))['attr']("x",((-this['width']/(2))))))['attr']("y",((-this['height']/(2))))));
}).apply(this));});
this['turtle']['getImageSize']=dtlbind(this,function(url){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
var t;
return AsyncByGenerator.toVal((function*() {t=this;
return (yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['$']['create']("<img>")))['css']("display","none")))['load'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
var j;
return AsyncByGenerator.toVal((function*() {j=(yield* AsyncByGenerator.toGen((t['$'])['create']((this))));
t['width']=(yield* AsyncByGenerator.toGen(j['width']()));
t['height']=(yield* AsyncByGenerator.toGen(j['height']()));
(yield* AsyncByGenerator.toGen(t['adjustImage']()));
return (yield* AsyncByGenerator.toGen(j['remove']()));
}).apply(this));}))))['attr']("src",(url))))['appendTo']("body")));
}).apply(this));});
this['turtle']['newLineG']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {this['lineG']=(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['createSVGElem']("g")))['appendTo']((this['svg_g']))));
(yield* AsyncByGenerator.toGen(this['lineG']['attr']("transform",((((("translate("+(this['pos']['x']))+" ")+(this['pos']['y']))+")")))));
return this['lineOrig']=this['pos'];
}).apply(this));});
this['turtle']['addPath']=dtlbind(this,function(pos1,pos2){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,2);
var line;
return AsyncByGenerator.toVal((function*() {pos1=(yield* AsyncByGenerator.toGen(pos1['sub']((this['lineOrig']))));
pos2=(yield* AsyncByGenerator.toGen(pos2['sub']((this['lineOrig']))));
line=(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['createSVGElem']("line")))['attr']("x1",(pos1['x']))))['attr']("y1",(pos1['y']))))['attr']("x2",(pos2['x']))))['attr']("y2",(pos2['y']))))['attr']("style",(((("stroke:"+this['_lineCol'])+";stroke-width:")+this['_lineWidth'])))))['attr']("data-width",(this['_lineWidth']))))['appendTo']((this['lineG']))));
return this;
}).apply(this));});
this['turtle']['addPathAfterAction']=dtlbind(this,function(a){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
var pos1;
return AsyncByGenerator.toVal((function*() {pos1=this['pos'];
(yield* AsyncByGenerator.toGen(a['execute']()));
(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['isPenDown'];
}).apply(this));})['then']()))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['addPath']((pos1),(this['pos']))));
}).apply(this));}))));
return this;
}).apply(this));});
this['turtle']['forward']=dtlbind(this,function(by){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['addPathAfterAction'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen((this['Actor']['forward'])['call']((this),(by))));
}).apply(this));}))));
}).apply(this));});
this['turtle']['moveTo']=dtlbind(this,function(x,y){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,2);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['addPathAfterAction'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen((this['Actor']['moveTo'])['call']((this),(x),(y))));
}).apply(this));}))));
}).apply(this));});
this['turtle']['circle']=dtlbind(this,function(r){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
var d;
return AsyncByGenerator.toVal((function*() {d=(r*(0.1745328));
(yield* AsyncByGenerator.toGen(this['backward'](((d/(2))))));
(yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['forward']((d))))['rightTurn']((10))));
}).apply(this));})['repeat']((36))));
return (yield* AsyncByGenerator.toGen(this['forward'](((d/(2))))));
}).apply(this));});
this['turtle']['closePath']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['isPenDown'];
}).apply(this));})['then']()))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['moveTo']((this['lineOrig']['x']),(this['lineOrig']['y']))));
}).apply(this));}))));
return this;
}).apply(this));});
(yield* AsyncByGenerator.toGen(this['turtle']['addAlias']("closePath","close")));
this['turtle']['lineColor']=dtlbind(this,function(col){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
return AsyncByGenerator.toVal((function*() {(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return col;
}).apply(this));})['then']()))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['_lineCol']=col;
}).apply(this));}))));
return this;
}).apply(this));});
this['turtle']['lineWidth']=dtlbind(this,function(w){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
return AsyncByGenerator.toVal((function*() {w=(yield* AsyncByGenerator.toGen(this['num']((w))));
this['_lineWidth']=w;
return this;
}).apply(this));});
this['turtle']['makeFigure']=dtlbind(this,function(col){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
var r;
return AsyncByGenerator.toVal((function*() {r=(yield* AsyncByGenerator.toGen(this['Figure']['create']((this))));
(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return col;
}).apply(this));})['then']()))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(r['paint']((col))));
}).apply(this));}))));
(yield* AsyncByGenerator.toGen(this['newLineG']()));
return r;
}).apply(this));});
this['turtle']['paint']=dtlbind(this,function(col){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['makeFigure']((col))));
}).apply(this));});
this['turtle']['penDown']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['isPenDown'];
}).apply(this));})['then']()))['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return }).apply(this));}))))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {this['isPenDown']=this['true'];
return (yield* AsyncByGenerator.toGen(this['newLineG']()));
}).apply(this));}))));
return this;
}).apply(this));});
this['turtle']['penUp']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {this['isPenDown']=this['false'];
return this;
}).apply(this));});
this['turtle']['setShape']=dtlbind(this,function(url){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
return AsyncByGenerator.toVal((function*() {this['img']=url;
url=(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['or']['true'](((yield* AsyncByGenerator.toGen(url['match']("https?")))),((yield* AsyncByGenerator.toGen(url['match']("^data:")))))));
}).apply(this));})['then']()))['else'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return url;
}).apply(this));}))))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (this['baseURL']+url);
}).apply(this));}))));
(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['element']['get']((0))))['setAttributeNS']("http://www.w3.org/1999/xlink","href",(url))));
(yield* AsyncByGenerator.toGen(this['getImageSize']((url))));
return this;
}).apply(this));});
(yield* AsyncByGenerator.toGen(this['turtle']['addAlias']("setShape","change")));
this['turtle']['setTrans']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
var str;
return AsyncByGenerator.toVal((function*() {str=(((("translate("+(this['pos']['x']))+" ")+(this['pos']['y']))+") ");
str=(((str+"rotate(")+this['dir'])+") ");
str=(((((str+"scale(")+this['_scale'])+" ")+(((0)-this['_scale'])))+") ");
(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['element']['attr']("transform",(str))))['attr']("data-trans",((((((this['pos']['x'])+",")+(this['pos']['y']))+",")+this['dir'])))));
(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['isShowing'];
}).apply(this));})['then']()))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(this['checkCrash']()));
}).apply(this));}))));
return this;
}).apply(this));});
this['turtle']['polygon']=dtlbind(this,function(d,n){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,2);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(this['forward']((d))))['rightturn']((((360)/n)))));
}).apply(this));})['repeat']((n))));
}).apply(this));});
root['action']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return }).apply(this));});
root['action']['isEventHandler']=this['true'];
root['click']=dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return }).apply(this));});
root['click']['isEventHandler']=this['true'];
return this['turtle']['setAction']=dtlbind(this,function(f){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,1);
return AsyncByGenerator.toVal((function*() {(yield* AsyncByGenerator.toGen((yield* AsyncByGenerator.toGen(dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return (((yield* AsyncByGenerator.toGen(this['typeof']((f)))))==="function");
}).apply(this));})['then']()))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;var _args=Array.prototype.slice.call(arguments);var _rest=Array.prototype.slice.call(arguments,0);
return AsyncByGenerator.toVal((function*() {return this['action']=f;
}).apply(this));}))));
return this;
}).apply(this));});
}).apply(this));});

/*
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
    url=[
        or!(url ! "https?" match)
            (url ! "^data:" match)true
    ] ! then [url] else [baseURL+url] execute.
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