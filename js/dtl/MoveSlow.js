(function(){this['Turtle']['moveSlow']=dtlbind(this,function(){
var self=this;var 自分=self;
var d;
dtlbind(this,function(){
var self=this;var 自分=self;
return this['moveSlowMode'];
})['else']()['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
this['moveSlowMode']=root['true'];
d=this['createDeferred']();
this['promise']=d['promise']();
d['resolve']();
this['methodDict']=this['Dict']['create']();
this['methodNameList']=this['array']['create']("penUp","penDown","hide","show","setShape","lineColor");
this['methodNameList']['each'](dtlbind(this,function(methodName){
var self=this;var 自分=self;
var method;
method=this['system']['read']((this),(methodName))['bind']((this));
return this['methodDict']['write']((methodName),(method));
}));
this['methodNameList']['each'](dtlbind(this,function(methodName){
var self=this;var 自分=self;
var overwrite;
overwrite=dtlbind(this,function(){
var self=this;var 自分=self;
var d;
var p;
var args;
args=root['window']['Array']['prototype']['slice']['call']((arguments));
d=this['createDeferred']();
this['promise']['then']((dtlbind(this,function(){
var self=this;var 自分=self;
this['methodDict']['read']((methodName))['apply']((this),(args));
return d['resolve']();
})['bind']((this))));
this['promise']=d['promise']();
return this;
});
return this['system']['write']((this),(methodName),(overwrite));
}));
dtlbind(this,function(){
var self=this;var 自分=self;
var overwrite;
this['methodDict']['write']("makeFigure",(this['makeFigure']));
overwrite=dtlbind(this,function(){
var self=this;var 自分=self;
var d;
var p;
var args;
var df;
df=this['DummyFigure']['create']();
args=root['window']['Array']['prototype']['slice']['call']((arguments));
d=this['createDeferred']();
this['promise']['then']((dtlbind(this,function(){
var self=this;var 自分=self;
var tf;
tf=this['methodDict']['read']("makeFigure")['apply']((this),(args));
df['trueFigureSet']((tf));
return d['resolve']();
})['bind']((this))));
this['promise']=d['promise']();
return df;
});
return this['system']['write']((this),"makeFigure",(overwrite));
})['execute']();
this['slowMethodDict']=this['Dict']['create']();
this['slowMethodNameList']=this['array']['create']("forward","leftturn","rightturn");
this['slowMethodNameList']['each'](dtlbind(this,function(methodName){
var self=this;var 自分=self;
var method;
method=this['system']['read']((this),(methodName))['bind']((this));
return this['slowMethodDict']['write']((methodName),(method));
}));
return this['slowMethodNameList']['each'](dtlbind(this,function(methodName){
var self=this;var 自分=self;
var overwrite;
var clock;
var times;
dtlbind(this,function(){
var self=this;var 自分=self;
return (methodName==="forward");
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return times=(10);
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return times=(20);
}));
overwrite=dtlbind(this,function(arg){
var self=this;var 自分=self;
var d;
var p;
d=this['createDeferred']();
this['promise']['then']((dtlbind(this,function(){
var self=this;var 自分=self;
clock=this['timer']['create']()['times']((times));
return clock['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['slowMethodDict']['read']((methodName))['call']((this),((arg/times)));
}))['times']((1))['interval']((0))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return d['resolve']();
}));
})['bind']((this))));
this['promise']=d['promise']();
return this;
});
return this['system']['write']((this),(methodName),(overwrite));
}));
}));
return this;
});
this['Turtle']['createDeferred']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['system']['new']((root['window']['$']['Deferred']));
});
this['Turtle']['addAlias']("moveSlow","ゆっくり動く");
this['DummyFigure']=this['create']();
this['DummyFigure']['initialize']=dtlbind(this,function(){
var self=this;var 自分=self;
this['trueFigure']=root['undef'];
this['d']=this['createDeferred']();
this['promise']=this['d']['promise']();
return this['trueFigureSet']=dtlbind(this,function(tf){
var self=this;var 自分=self;
this['trueFigure']=tf;
return this['d']['resolve']();
});
});
this['DummyFigure']['methodNameList']=this['array']['create']("塗る","向き","拡大する","消える","現れる");
this['DummyFigure']['methodNameList']['each'](dtlbind(this,function(methodName){
var self=this;var 自分=self;
var method;
var d;
var p;
method=dtlbind(this,function(){
var self=this;var 自分=self;
var args;
args=root['window']['Array']['prototype']['slice']['call']((arguments));
d=this['createDeferred']();
this['promise']['then']((dtlbind(this,function(){
var self=this;var 自分=self;
this['system']['read']((this['trueFigure']),(methodName))['apply']((this['trueFigure']),(args));
return d['resolve']();
})['bind']((this))));
this['promise']=d['promise']();
return this;
});
return this['system']['write']((this),(methodName),(method));
}));
this['DummyFigure']['slowMethodNameList']=this['array']['create']("右回り","左回り","移動する","位置");
this['DummyFigure']['slowMethodNameList']['each'](dtlbind(this,function(methodName){
var self=this;var 自分=self;
var method;
var d;
var p;
method=dtlbind(this,function(){
var self=this;var 自分=self;
var args;
var times;
var d;
var p;
args=root['window']['Array']['prototype']['slice']['call']((arguments));
d=this['createDeferred']();
this['promise']['then']((dtlbind(this,function(){
var self=this;var 自分=self;
var clock;
dtlbind(this,function(){
var self=this;var 自分=self;
return this['or']['true'](((methodName==="左回り")),((methodName==="右回り")));
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
times=(20);
return args=this['array']['create']((((args['get']((1)))/times)));
}))['then'](dtlbind(this,function(){
var self=this;var 自分=self;
return (methodName==="位置");
}))['else'](dtlbind(this,function(){
var self=this;var 自分=self;
var x;
var y;
times=(10);
x=((args['get']((1)))-(this['trueFigure']['xpos?']()));
y=((args['get']((2)))-(this['trueFigure']['ypos?']()));
return args=this['array']['create'](((x/times)),((y/times)));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
var x;
var y;
times=(10);
x=args['get']((1));
y=args['get']((2));
return args=this['array']['create'](((x/times)),((y/times)));
}));
clock=this['timer']['create']()['times']((times));
return clock['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return dtlbind(this,function(){
var self=this;var 自分=self;
return (methodName==="位置");
})['then']()['else'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['system']['read']((this['trueFigure']),("移動する"))['apply']((this['trueFigure']),(args));
}))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return this['system']['read']((this['trueFigure']),(methodName))['apply']((this['trueFigure']),(args));
}));
}))['times']((1))['interval']((0))['execute'](dtlbind(this,function(){
var self=this;var 自分=self;
return d['resolve']();
}));
})['bind']((this))));
this['promise']=d['promise']();
return this;
});
return this['system']['write']((this),(methodName),(method));
}));
return this['DummyFigure']['createDeferred']=dtlbind(this,function(){
var self=this;var 自分=self;
return this['system']['new']((root['window']['$']['Deferred']));
});
}).checkerror().apply(root,[]);
//# sourceMappingURL=MoveSlow.js.map

/*
Turtle:moveSlow=[|;d|
    //すでにゆっくり実行モードであれば無視する
    [self:moveSlowMode]!else[
        //ゆっくり実行モードとして登録しておく
        self:moveSlowMode=:true.
        //最初にdeferredを登録しておく
        d=self!createDeferred.
        //最初のdeferredのpromiseを保存
        self:promise=d!promise.
        //最初に登録したdeferredを解決しておく
        d!resolve.

        //ゆっくり実行しないメソッドを保存する辞書
        self:methodDict=Dict!create.
        //ゆっくり実行しないメソッドの名前配列
        self:methodNameList=array!"penUp" "penDown" "hide" "show" "setShape" "lineColor" create.
        //ゆっくり実行しないメソッドを辞書に保存
        self:methodNameList![|methodName;method|
            method=system!(self)(methodName)read (self)bind.
            self:methodDict!(methodName)(method)write.
        ]each.
        //ゆっくり実行しないメソッドを上書き
        self:methodNameList![|methodName;overwrite|
            //オーバーライトするメソッドを定義
            overwrite=[|;d p args|
                args=:window:Array:prototype:slice!(arguments)call.
                //新しいdeferredを生成
                d=self!createDeferred.
                //現在登録されているpromiseにメソッドをthenで登録
                self:promise!([
                    //methodDictに登録されているメソッドを実行
                    self:methodDict!(methodName)read(self)(args)apply.
                    //解決する
                    d!resolve.
                ]!(this)bind)then.
                //今回のpromiseへ更新
                self:promise=d!promise.
                self.
            ].
            //定義したメソッドで既存のメソッドを上書き
            system!(self)(methodName)(overwrite)write.
        ]each.

        //図形を作る を上書き
        [|;overwrite|
            //図形を作るメソッドを登録
            self:methodDict!"makeFigure"(self:makeFigure)write.
            //図形を作る をオーバーライトするメソッドを定義
            overwrite=[|;d p args df|
                //ダミーの図形オブジェクトを生成
                df=DummyFigure!create.
                args=:window:Array:prototype:slice!(arguments)call.
                //新しいdeferredを生成
                d=self!createDeferred.

                //現在登録されているpromiseにメソッドをthenで登録
                self:promise!([|;tf|
                    //methodDictに登録されているメソッドを実行
                    tf=self:methodDict!"makeFigure"read(self)(args)apply.
                    df!(tf)trueFigureSet.
                    //解決する
                    d!resolve.
                ]!(this)bind)then.

                //今回のpromiseへ更新
                self:promise=d!promise.
                //ダミーの図形オブジェクトを返す
                df.
            ].
            //定義したメソッドで既存のメソッドを上書き
            system!(self)"makeFigure"(overwrite)write.
        ]!execute.

        //ゆっくり実行するメソッドを保存する辞書
        self:slowMethodDict=Dict!create.
        //ゆっくり実行するメソッドの名前配列
        self:slowMethodNameList=array!"forward" "leftturn" "rightturn"create.
        //ゆっくり実行するメソッドを辞書に保存
        self:slowMethodNameList![|methodName;method|
            method=system!(self)(methodName)read (self)bind.
            self:slowMethodDict!(methodName)(method)write.
        ]each.
        //ゆっくり実行するメソッドを上書き
        self:slowMethodNameList![|methodName;overwrite clock times|
            //forwardは10回、それ以外は20回に分けて実行する
            [methodName=="forward"]!then[times=10]else[times=20]execute.

            //上書きするメソッドを定義
            overwrite=[|arg;d p|
                //新しいdeferredを生成
                d=self!createDeferred.

                //現在登録されているpromiseにメソッドをthenで登録
                self:promise!([
                    //ゆっくり実行するためのタイマーオブジェクトを定義
                    clock=timer!create (times) times.

                    clock![
                        //methodDictに登録されているメソッドを実行
                        self:slowMethodDict!(methodName)read(self)(arg/times)call.
                    ]execute 1 times 0 interval[
                        //解決する
                        d!resolve
                    ]execute.

                ]!(this)bind)then.

                //今回のpromiseへ更新
                self:promise=d!promise.
                self.
            ].
            //定義したメソッドで既存のメソッドを上書き
            system!(self)(methodName)(overwrite)write.
        ]each.
    ]execute.
    self.
].

//new $.Deferredを返す
Turtle:createDeferred=[system!(:window:$:Deferred)new].

Turtle!"moveSlow" "ゆっくり動く"addAlias.

//ダミー用の図形を生成
DummyFigure=!create.
DummyFigure:initialize=[
    //作られた本物の図形オブジェクトが入るプロパティ
    self:trueFigure=:undef.
    //最初にdeferredを登録しておく
    d=self!createDeferred.
    //最初のdeferredのpromiseを保存
    self:promise=d!promise.
    self:trueFigureSet=[|tf|
        self:trueFigure=tf.
        d!resolve.
    ].
].
//すぐ実行するメソッド名の一覧を取得
DummyFigure:methodNameList=array!"塗る" "向き" "拡大する" "消える" "現れる"create.
//Actorの全てのメソッド名で、タスクキューに登録するように命令を定義
DummyFigure:methodNameList![|methodName;method d p|
    method=[|;args|
        args=:window:Array:prototype:slice!(arguments)call.
        //新しいdeferredを生成
        d=self!createDeferred.
        //現在登録されているpromiseにメソッドをthenで登録
        self:promise!([
            //methodDictに登録されているメソッドを実行
            system!(self:trueFigure)(methodName)read (self:trueFigure)(args)apply.
            //解決する
            d!resolve.
        ]!(this)bind)then.
        //今回のpromiseへ更新
        self:promise=d!promise.
        self.
    ].
    system!(self)(methodName)(method)write.
]each.
DummyFigure:slowMethodNameList=array!"右回り" "左回り" "移動する" "位置"create.
//ゆっくり実行するメソッド名で、タスクキューに登録するように命令を定義
DummyFigure:slowMethodNameList![|methodName;method d p|
    method=[|;args times d p|
        args=:window:Array:prototype:slice!(arguments)call.
        //新しいdeferredを生成
        d=self!createDeferred.
        //現在登録されているpromiseにメソッドをthenで登録
        self:promise!([|;clock|
            // 引数を整える
            [or!(methodName=="左回り")(methodName=="右回り")true]!then[
                times=20.
                args=array!((args!1 get)/times)create.
            ]else[methodName=="位置"]then[|;x y|

                times=10.
                x=(args!1 get)-(self:trueFigure!xpos?).
                y=(args!2 get)-(self:trueFigure!ypos?).
                args=array!(x/times)(y/times)create.
            ]else[|;x y|
                times=10.
                x=args!1 get.
                y=args!2 get.
                args=array!(x/times)(y/times)create.
            ]execute.

            clock=timer!create (times)times.
            clock![
                //methodDictに登録されているメソッドを実行
                [methodName=="位置"]!then[
                    system!(self:trueFigure)("移動する")read (self:trueFigure)(args)apply.
                ]else[
                    system!(self:trueFigure)(methodName)read (self:trueFigure)(args)apply.
                ]execute.

            ]execute 1 times 0 interval[
                //解決する
                d!resolve.
            ]execute.
        ]!(this)bind)then.
        //今回のpromiseへ更新
        self:promise=d!promise.
        self.
    ].
    system!(self)(methodName)(method)write.
]each.
//new $.Deferredを返す
DummyFigure:createDeferred=[system!(:window:$:Deferred)new].


// かめ＝タートル！作る  ゆっくり動く。
// さんかく＝かめ！5０  歩く  ９０  左回り  5０  歩く 図形を作る。
// さんかく！ ９０  右回り（青）塗る 150 150 位置。
// さんかく！-100 -100 移動する 90 左回り 1.5 拡大する 135 向き。
*/
