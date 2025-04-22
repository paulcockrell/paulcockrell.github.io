goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14615 = (function (f,blockable,meta14616){
this.f = f;
this.blockable = blockable;
this.meta14616 = meta14616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14617,meta14616__$1){
var self__ = this;
var _14617__$1 = this;
return (new cljs.core.async.t_cljs$core$async14615(self__.f,self__.blockable,meta14616__$1));
}));

(cljs.core.async.t_cljs$core$async14615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14617){
var self__ = this;
var _14617__$1 = this;
return self__.meta14616;
}));

(cljs.core.async.t_cljs$core$async14615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14616","meta14616",-1049700869,null)], null);
}));

(cljs.core.async.t_cljs$core$async14615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14615");

(cljs.core.async.t_cljs$core$async14615.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14615.
 */
cljs.core.async.__GT_t_cljs$core$async14615 = (function cljs$core$async$__GT_t_cljs$core$async14615(f,blockable,meta14616){
return (new cljs.core.async.t_cljs$core$async14615(f,blockable,meta14616));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14614 = arguments.length;
switch (G__14614) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14615(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14647 = arguments.length;
switch (G__14647) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14657 = arguments.length;
switch (G__14657) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14686 = arguments.length;
switch (G__14686) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17911 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17911) : fn1.call(null, val_17911));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17911) : fn1.call(null, val_17911));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14716 = arguments.length;
switch (G__14716) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17919 = n;
var x_17920 = (0);
while(true){
if((x_17920 < n__5593__auto___17919)){
(a[x_17920] = x_17920);

var G__17921 = (x_17920 + (1));
x_17920 = G__17921;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14752 = (function (flag,meta14753){
this.flag = flag;
this.meta14753 = meta14753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14754,meta14753__$1){
var self__ = this;
var _14754__$1 = this;
return (new cljs.core.async.t_cljs$core$async14752(self__.flag,meta14753__$1));
}));

(cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14754){
var self__ = this;
var _14754__$1 = this;
return self__.meta14753;
}));

(cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14753","meta14753",707436543,null)], null);
}));

(cljs.core.async.t_cljs$core$async14752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14752");

(cljs.core.async.t_cljs$core$async14752.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14752.
 */
cljs.core.async.__GT_t_cljs$core$async14752 = (function cljs$core$async$__GT_t_cljs$core$async14752(flag,meta14753){
return (new cljs.core.async.t_cljs$core$async14752(flag,meta14753));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14752(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14768 = (function (flag,cb,meta14770){
this.flag = flag;
this.cb = cb;
this.meta14770 = meta14770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14771,meta14770__$1){
var self__ = this;
var _14771__$1 = this;
return (new cljs.core.async.t_cljs$core$async14768(self__.flag,self__.cb,meta14770__$1));
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14771){
var self__ = this;
var _14771__$1 = this;
return self__.meta14770;
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14770","meta14770",21916102,null)], null);
}));

(cljs.core.async.t_cljs$core$async14768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14768");

(cljs.core.async.t_cljs$core$async14768.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14768.
 */
cljs.core.async.__GT_t_cljs$core$async14768 = (function cljs$core$async$__GT_t_cljs$core$async14768(flag,cb,meta14770){
return (new cljs.core.async.t_cljs$core$async14768(flag,cb,meta14770));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14768(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14785_SHARP_){
var G__14789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14785_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14789) : fret.call(null, G__14789));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14786_SHARP_){
var G__14790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14790) : fret.call(null, G__14790));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17949 = (i + (1));
i = G__17949;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17950 = arguments.length;
var i__5727__auto___17951 = (0);
while(true){
if((i__5727__auto___17951 < len__5726__auto___17950)){
args__5732__auto__.push((arguments[i__5727__auto___17951]));

var G__17952 = (i__5727__auto___17951 + (1));
i__5727__auto___17951 = G__17952;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14798){
var map__14799 = p__14798;
var map__14799__$1 = cljs.core.__destructure_map(map__14799);
var opts = map__14799__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14794){
var G__14795 = cljs.core.first(seq14794);
var seq14794__$1 = cljs.core.next(seq14794);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14795,seq14794__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14865 = arguments.length;
switch (G__14865) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14528__auto___17958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_14937){
var state_val_14943 = (state_14937[(1)]);
if((state_val_14943 === (7))){
var inst_14914 = (state_14937[(2)]);
var state_14937__$1 = state_14937;
var statearr_14958_17965 = state_14937__$1;
(statearr_14958_17965[(2)] = inst_14914);

(statearr_14958_17965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (1))){
var state_14937__$1 = state_14937;
var statearr_14960_17970 = state_14937__$1;
(statearr_14960_17970[(2)] = null);

(statearr_14960_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (4))){
var inst_14889 = (state_14937[(7)]);
var inst_14889__$1 = (state_14937[(2)]);
var inst_14892 = (inst_14889__$1 == null);
var state_14937__$1 = (function (){var statearr_14973 = state_14937;
(statearr_14973[(7)] = inst_14889__$1);

return statearr_14973;
})();
if(cljs.core.truth_(inst_14892)){
var statearr_14974_17974 = state_14937__$1;
(statearr_14974_17974[(1)] = (5));

} else {
var statearr_14975_17975 = state_14937__$1;
(statearr_14975_17975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (13))){
var state_14937__$1 = state_14937;
var statearr_14978_17980 = state_14937__$1;
(statearr_14978_17980[(2)] = null);

(statearr_14978_17980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (6))){
var inst_14889 = (state_14937[(7)]);
var state_14937__$1 = state_14937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14937__$1,(11),to,inst_14889);
} else {
if((state_val_14943 === (3))){
var inst_14927 = (state_14937[(2)]);
var state_14937__$1 = state_14937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14937__$1,inst_14927);
} else {
if((state_val_14943 === (12))){
var state_14937__$1 = state_14937;
var statearr_14984_17982 = state_14937__$1;
(statearr_14984_17982[(2)] = null);

(statearr_14984_17982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (2))){
var state_14937__$1 = state_14937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14937__$1,(4),from);
} else {
if((state_val_14943 === (11))){
var inst_14902 = (state_14937[(2)]);
var state_14937__$1 = state_14937;
if(cljs.core.truth_(inst_14902)){
var statearr_14987_17983 = state_14937__$1;
(statearr_14987_17983[(1)] = (12));

} else {
var statearr_14989_17984 = state_14937__$1;
(statearr_14989_17984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (9))){
var state_14937__$1 = state_14937;
var statearr_14991_17985 = state_14937__$1;
(statearr_14991_17985[(2)] = null);

(statearr_14991_17985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (5))){
var state_14937__$1 = state_14937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14993_17986 = state_14937__$1;
(statearr_14993_17986[(1)] = (8));

} else {
var statearr_14994_17987 = state_14937__$1;
(statearr_14994_17987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (14))){
var inst_14912 = (state_14937[(2)]);
var state_14937__$1 = state_14937;
var statearr_14995_17988 = state_14937__$1;
(statearr_14995_17988[(2)] = inst_14912);

(statearr_14995_17988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (10))){
var inst_14899 = (state_14937[(2)]);
var state_14937__$1 = state_14937;
var statearr_15000_17994 = state_14937__$1;
(statearr_15000_17994[(2)] = inst_14899);

(statearr_15000_17994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (8))){
var inst_14896 = cljs.core.async.close_BANG_(to);
var state_14937__$1 = state_14937;
var statearr_15001_17998 = state_14937__$1;
(statearr_15001_17998[(2)] = inst_14896);

(statearr_15001_17998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_15006 = [null,null,null,null,null,null,null,null];
(statearr_15006[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_15006[(1)] = (1));

return statearr_15006;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_14937){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_14937);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15011){var ex__14161__auto__ = e15011;
var statearr_15013_17999 = state_14937;
(statearr_15013_17999[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_14937[(4)]))){
var statearr_15014_18000 = state_14937;
(statearr_15014_18000[(1)] = cljs.core.first((state_14937[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18001 = state_14937;
state_14937 = G__18001;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_14937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_14937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15021 = f__14529__auto__();
(statearr_15021[(6)] = c__14528__auto___17958);

return statearr_15021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15057){
var vec__15058 = p__15057;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15058,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15058,(1),null);
var job = vec__15058;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14528__auto___18006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_15067){
var state_val_15068 = (state_15067[(1)]);
if((state_val_15068 === (1))){
var state_15067__$1 = state_15067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15067__$1,(2),res,v);
} else {
if((state_val_15068 === (2))){
var inst_15062 = (state_15067[(2)]);
var inst_15064 = cljs.core.async.close_BANG_(res);
var state_15067__$1 = (function (){var statearr_15073 = state_15067;
(statearr_15073[(7)] = inst_15062);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15067__$1,inst_15064);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0 = (function (){
var statearr_15078 = [null,null,null,null,null,null,null,null];
(statearr_15078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__);

(statearr_15078[(1)] = (1));

return statearr_15078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1 = (function (state_15067){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15067);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15079){var ex__14161__auto__ = e15079;
var statearr_15081_18016 = state_15067;
(statearr_15081_18016[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15067[(4)]))){
var statearr_15083_18017 = state_15067;
(statearr_15083_18017[(1)] = cljs.core.first((state_15067[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18018 = state_15067;
state_15067 = G__18018;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = function(state_15067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1.call(this,state_15067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15088 = f__14529__auto__();
(statearr_15088[(6)] = c__14528__auto___18006);

return statearr_15088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15089){
var vec__15091 = p__15089;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15091,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15091,(1),null);
var job = vec__15091;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18020 = n;
var __18021 = (0);
while(true){
if((__18021 < n__5593__auto___18020)){
var G__15095_18022 = type;
var G__15095_18023__$1 = (((G__15095_18022 instanceof cljs.core.Keyword))?G__15095_18022.fqn:null);
switch (G__15095_18023__$1) {
case "compute":
var c__14528__auto___18025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18021,c__14528__auto___18025,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async){
return (function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = ((function (__18021,c__14528__auto___18025,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async){
return (function (state_15109){
var state_val_15110 = (state_15109[(1)]);
if((state_val_15110 === (1))){
var state_15109__$1 = state_15109;
var statearr_15111_18027 = state_15109__$1;
(statearr_15111_18027[(2)] = null);

(statearr_15111_18027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (2))){
var state_15109__$1 = state_15109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15109__$1,(4),jobs);
} else {
if((state_val_15110 === (3))){
var inst_15107 = (state_15109[(2)]);
var state_15109__$1 = state_15109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15109__$1,inst_15107);
} else {
if((state_val_15110 === (4))){
var inst_15099 = (state_15109[(2)]);
var inst_15100 = process__$1(inst_15099);
var state_15109__$1 = state_15109;
if(cljs.core.truth_(inst_15100)){
var statearr_15114_18036 = state_15109__$1;
(statearr_15114_18036[(1)] = (5));

} else {
var statearr_15115_18037 = state_15109__$1;
(statearr_15115_18037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (5))){
var state_15109__$1 = state_15109;
var statearr_15118_18038 = state_15109__$1;
(statearr_15118_18038[(2)] = null);

(statearr_15118_18038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (6))){
var state_15109__$1 = state_15109;
var statearr_15121_18041 = state_15109__$1;
(statearr_15121_18041[(2)] = null);

(statearr_15121_18041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (7))){
var inst_15105 = (state_15109[(2)]);
var state_15109__$1 = state_15109;
var statearr_15123_18043 = state_15109__$1;
(statearr_15123_18043[(2)] = inst_15105);

(statearr_15123_18043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18021,c__14528__auto___18025,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async))
;
return ((function (__18021,switch__14154__auto__,c__14528__auto___18025,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0 = (function (){
var statearr_15124 = [null,null,null,null,null,null,null];
(statearr_15124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__);

(statearr_15124[(1)] = (1));

return statearr_15124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1 = (function (state_15109){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15109);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15125){var ex__14161__auto__ = e15125;
var statearr_15126_18044 = state_15109;
(statearr_15126_18044[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15109[(4)]))){
var statearr_15130_18045 = state_15109;
(statearr_15130_18045[(1)] = cljs.core.first((state_15109[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18046 = state_15109;
state_15109 = G__18046;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = function(state_15109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1.call(this,state_15109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__;
})()
;})(__18021,switch__14154__auto__,c__14528__auto___18025,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async))
})();
var state__14530__auto__ = (function (){var statearr_15145 = f__14529__auto__();
(statearr_15145[(6)] = c__14528__auto___18025);

return statearr_15145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
});})(__18021,c__14528__auto___18025,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async))
);


break;
case "async":
var c__14528__auto___18047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18021,c__14528__auto___18047,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async){
return (function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = ((function (__18021,c__14528__auto___18047,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async){
return (function (state_15171){
var state_val_15172 = (state_15171[(1)]);
if((state_val_15172 === (1))){
var state_15171__$1 = state_15171;
var statearr_15182_18050 = state_15171__$1;
(statearr_15182_18050[(2)] = null);

(statearr_15182_18050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (2))){
var state_15171__$1 = state_15171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15171__$1,(4),jobs);
} else {
if((state_val_15172 === (3))){
var inst_15169 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15171__$1,inst_15169);
} else {
if((state_val_15172 === (4))){
var inst_15159 = (state_15171[(2)]);
var inst_15160 = async(inst_15159);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15160)){
var statearr_15192_18057 = state_15171__$1;
(statearr_15192_18057[(1)] = (5));

} else {
var statearr_15193_18067 = state_15171__$1;
(statearr_15193_18067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (5))){
var state_15171__$1 = state_15171;
var statearr_15197_18068 = state_15171__$1;
(statearr_15197_18068[(2)] = null);

(statearr_15197_18068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (6))){
var state_15171__$1 = state_15171;
var statearr_15203_18070 = state_15171__$1;
(statearr_15203_18070[(2)] = null);

(statearr_15203_18070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (7))){
var inst_15166 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15210_18071 = state_15171__$1;
(statearr_15210_18071[(2)] = inst_15166);

(statearr_15210_18071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18021,c__14528__auto___18047,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async))
;
return ((function (__18021,switch__14154__auto__,c__14528__auto___18047,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0 = (function (){
var statearr_15212 = [null,null,null,null,null,null,null];
(statearr_15212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__);

(statearr_15212[(1)] = (1));

return statearr_15212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1 = (function (state_15171){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15171);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15214){var ex__14161__auto__ = e15214;
var statearr_15216_18072 = state_15171;
(statearr_15216_18072[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15171[(4)]))){
var statearr_15219_18073 = state_15171;
(statearr_15219_18073[(1)] = cljs.core.first((state_15171[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18074 = state_15171;
state_15171 = G__18074;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = function(state_15171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1.call(this,state_15171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__;
})()
;})(__18021,switch__14154__auto__,c__14528__auto___18047,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async))
})();
var state__14530__auto__ = (function (){var statearr_15223 = f__14529__auto__();
(statearr_15223[(6)] = c__14528__auto___18047);

return statearr_15223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
});})(__18021,c__14528__auto___18047,G__15095_18022,G__15095_18023__$1,n__5593__auto___18020,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15095_18023__$1)].join('')));

}

var G__18075 = (__18021 + (1));
__18021 = G__18075;
continue;
} else {
}
break;
}

var c__14528__auto___18076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_15254){
var state_val_15256 = (state_15254[(1)]);
if((state_val_15256 === (7))){
var inst_15250 = (state_15254[(2)]);
var state_15254__$1 = state_15254;
var statearr_15264_18078 = state_15254__$1;
(statearr_15264_18078[(2)] = inst_15250);

(statearr_15264_18078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (1))){
var state_15254__$1 = state_15254;
var statearr_15265_18079 = state_15254__$1;
(statearr_15265_18079[(2)] = null);

(statearr_15265_18079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (4))){
var inst_15229 = (state_15254[(7)]);
var inst_15229__$1 = (state_15254[(2)]);
var inst_15230 = (inst_15229__$1 == null);
var state_15254__$1 = (function (){var statearr_15268 = state_15254;
(statearr_15268[(7)] = inst_15229__$1);

return statearr_15268;
})();
if(cljs.core.truth_(inst_15230)){
var statearr_15269_18080 = state_15254__$1;
(statearr_15269_18080[(1)] = (5));

} else {
var statearr_15273_18081 = state_15254__$1;
(statearr_15273_18081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (6))){
var inst_15229 = (state_15254[(7)]);
var inst_15236 = (state_15254[(8)]);
var inst_15236__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15242 = [inst_15229,inst_15236__$1];
var inst_15243 = (new cljs.core.PersistentVector(null,2,(5),inst_15241,inst_15242,null));
var state_15254__$1 = (function (){var statearr_15275 = state_15254;
(statearr_15275[(8)] = inst_15236__$1);

return statearr_15275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15254__$1,(8),jobs,inst_15243);
} else {
if((state_val_15256 === (3))){
var inst_15252 = (state_15254[(2)]);
var state_15254__$1 = state_15254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15254__$1,inst_15252);
} else {
if((state_val_15256 === (2))){
var state_15254__$1 = state_15254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15254__$1,(4),from);
} else {
if((state_val_15256 === (9))){
var inst_15247 = (state_15254[(2)]);
var state_15254__$1 = (function (){var statearr_15278 = state_15254;
(statearr_15278[(9)] = inst_15247);

return statearr_15278;
})();
var statearr_15280_18084 = state_15254__$1;
(statearr_15280_18084[(2)] = null);

(statearr_15280_18084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (5))){
var inst_15234 = cljs.core.async.close_BANG_(jobs);
var state_15254__$1 = state_15254;
var statearr_15283_18086 = state_15254__$1;
(statearr_15283_18086[(2)] = inst_15234);

(statearr_15283_18086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (8))){
var inst_15236 = (state_15254[(8)]);
var inst_15245 = (state_15254[(2)]);
var state_15254__$1 = (function (){var statearr_15285 = state_15254;
(statearr_15285[(10)] = inst_15245);

return statearr_15285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15254__$1,(9),results,inst_15236);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0 = (function (){
var statearr_15289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__);

(statearr_15289[(1)] = (1));

return statearr_15289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1 = (function (state_15254){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15254);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15290){var ex__14161__auto__ = e15290;
var statearr_15292_18090 = state_15254;
(statearr_15292_18090[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15254[(4)]))){
var statearr_15296_18091 = state_15254;
(statearr_15296_18091[(1)] = cljs.core.first((state_15254[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18092 = state_15254;
state_15254 = G__18092;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = function(state_15254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1.call(this,state_15254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15303 = f__14529__auto__();
(statearr_15303[(6)] = c__14528__auto___18076);

return statearr_15303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


var c__14528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_15353){
var state_val_15354 = (state_15353[(1)]);
if((state_val_15354 === (7))){
var inst_15349 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15361_18096 = state_15353__$1;
(statearr_15361_18096[(2)] = inst_15349);

(statearr_15361_18096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (20))){
var state_15353__$1 = state_15353;
var statearr_15363_18097 = state_15353__$1;
(statearr_15363_18097[(2)] = null);

(statearr_15363_18097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (1))){
var state_15353__$1 = state_15353;
var statearr_15366_18098 = state_15353__$1;
(statearr_15366_18098[(2)] = null);

(statearr_15366_18098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (4))){
var inst_15307 = (state_15353[(7)]);
var inst_15307__$1 = (state_15353[(2)]);
var inst_15308 = (inst_15307__$1 == null);
var state_15353__$1 = (function (){var statearr_15373 = state_15353;
(statearr_15373[(7)] = inst_15307__$1);

return statearr_15373;
})();
if(cljs.core.truth_(inst_15308)){
var statearr_15375_18102 = state_15353__$1;
(statearr_15375_18102[(1)] = (5));

} else {
var statearr_15376_18103 = state_15353__$1;
(statearr_15376_18103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (15))){
var inst_15327 = (state_15353[(8)]);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15353__$1,(18),to,inst_15327);
} else {
if((state_val_15354 === (21))){
var inst_15343 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15385_18106 = state_15353__$1;
(statearr_15385_18106[(2)] = inst_15343);

(statearr_15385_18106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (13))){
var inst_15346 = (state_15353[(2)]);
var state_15353__$1 = (function (){var statearr_15386 = state_15353;
(statearr_15386[(9)] = inst_15346);

return statearr_15386;
})();
var statearr_15394_18107 = state_15353__$1;
(statearr_15394_18107[(2)] = null);

(statearr_15394_18107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (6))){
var inst_15307 = (state_15353[(7)]);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15353__$1,(11),inst_15307);
} else {
if((state_val_15354 === (17))){
var inst_15338 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
if(cljs.core.truth_(inst_15338)){
var statearr_15396_18110 = state_15353__$1;
(statearr_15396_18110[(1)] = (19));

} else {
var statearr_15397_18111 = state_15353__$1;
(statearr_15397_18111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (3))){
var inst_15351 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15353__$1,inst_15351);
} else {
if((state_val_15354 === (12))){
var inst_15322 = (state_15353[(10)]);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15353__$1,(14),inst_15322);
} else {
if((state_val_15354 === (2))){
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15353__$1,(4),results);
} else {
if((state_val_15354 === (19))){
var state_15353__$1 = state_15353;
var statearr_15409_18115 = state_15353__$1;
(statearr_15409_18115[(2)] = null);

(statearr_15409_18115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (11))){
var inst_15322 = (state_15353[(2)]);
var state_15353__$1 = (function (){var statearr_15420 = state_15353;
(statearr_15420[(10)] = inst_15322);

return statearr_15420;
})();
var statearr_15421_18116 = state_15353__$1;
(statearr_15421_18116[(2)] = null);

(statearr_15421_18116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (9))){
var state_15353__$1 = state_15353;
var statearr_15426_18117 = state_15353__$1;
(statearr_15426_18117[(2)] = null);

(statearr_15426_18117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (5))){
var state_15353__$1 = state_15353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15427_18118 = state_15353__$1;
(statearr_15427_18118[(1)] = (8));

} else {
var statearr_15428_18119 = state_15353__$1;
(statearr_15428_18119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (14))){
var inst_15327 = (state_15353[(8)]);
var inst_15329 = (state_15353[(11)]);
var inst_15327__$1 = (state_15353[(2)]);
var inst_15328 = (inst_15327__$1 == null);
var inst_15329__$1 = cljs.core.not(inst_15328);
var state_15353__$1 = (function (){var statearr_15435 = state_15353;
(statearr_15435[(8)] = inst_15327__$1);

(statearr_15435[(11)] = inst_15329__$1);

return statearr_15435;
})();
if(inst_15329__$1){
var statearr_15439_18120 = state_15353__$1;
(statearr_15439_18120[(1)] = (15));

} else {
var statearr_15440_18121 = state_15353__$1;
(statearr_15440_18121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (16))){
var inst_15329 = (state_15353[(11)]);
var state_15353__$1 = state_15353;
var statearr_15444_18125 = state_15353__$1;
(statearr_15444_18125[(2)] = inst_15329);

(statearr_15444_18125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (10))){
var inst_15318 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15445_18127 = state_15353__$1;
(statearr_15445_18127[(2)] = inst_15318);

(statearr_15445_18127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (18))){
var inst_15332 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15450_18128 = state_15353__$1;
(statearr_15450_18128[(2)] = inst_15332);

(statearr_15450_18128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (8))){
var inst_15311 = cljs.core.async.close_BANG_(to);
var state_15353__$1 = state_15353;
var statearr_15454_18129 = state_15353__$1;
(statearr_15454_18129[(2)] = inst_15311);

(statearr_15454_18129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0 = (function (){
var statearr_15455 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__);

(statearr_15455[(1)] = (1));

return statearr_15455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1 = (function (state_15353){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15353);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15456){var ex__14161__auto__ = e15456;
var statearr_15457_18131 = state_15353;
(statearr_15457_18131[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15353[(4)]))){
var statearr_15458_18132 = state_15353;
(statearr_15458_18132[(1)] = cljs.core.first((state_15353[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18137 = state_15353;
state_15353 = G__18137;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__ = function(state_15353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1.call(this,state_15353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15460 = f__14529__auto__();
(statearr_15460[(6)] = c__14528__auto__);

return statearr_15460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));

return c__14528__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15466 = arguments.length;
switch (G__15466) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15469 = arguments.length;
switch (G__15469) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15476 = arguments.length;
switch (G__15476) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14528__auto___18151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_15509){
var state_val_15510 = (state_15509[(1)]);
if((state_val_15510 === (7))){
var inst_15505 = (state_15509[(2)]);
var state_15509__$1 = state_15509;
var statearr_15513_18152 = state_15509__$1;
(statearr_15513_18152[(2)] = inst_15505);

(statearr_15513_18152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (1))){
var state_15509__$1 = state_15509;
var statearr_15516_18153 = state_15509__$1;
(statearr_15516_18153[(2)] = null);

(statearr_15516_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (4))){
var inst_15486 = (state_15509[(7)]);
var inst_15486__$1 = (state_15509[(2)]);
var inst_15487 = (inst_15486__$1 == null);
var state_15509__$1 = (function (){var statearr_15519 = state_15509;
(statearr_15519[(7)] = inst_15486__$1);

return statearr_15519;
})();
if(cljs.core.truth_(inst_15487)){
var statearr_15520_18155 = state_15509__$1;
(statearr_15520_18155[(1)] = (5));

} else {
var statearr_15522_18156 = state_15509__$1;
(statearr_15522_18156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (13))){
var state_15509__$1 = state_15509;
var statearr_15523_18157 = state_15509__$1;
(statearr_15523_18157[(2)] = null);

(statearr_15523_18157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (6))){
var inst_15486 = (state_15509[(7)]);
var inst_15492 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15486) : p.call(null, inst_15486));
var state_15509__$1 = state_15509;
if(cljs.core.truth_(inst_15492)){
var statearr_15525_18158 = state_15509__$1;
(statearr_15525_18158[(1)] = (9));

} else {
var statearr_15527_18159 = state_15509__$1;
(statearr_15527_18159[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (3))){
var inst_15507 = (state_15509[(2)]);
var state_15509__$1 = state_15509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15509__$1,inst_15507);
} else {
if((state_val_15510 === (12))){
var state_15509__$1 = state_15509;
var statearr_15529_18167 = state_15509__$1;
(statearr_15529_18167[(2)] = null);

(statearr_15529_18167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (2))){
var state_15509__$1 = state_15509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15509__$1,(4),ch);
} else {
if((state_val_15510 === (11))){
var inst_15486 = (state_15509[(7)]);
var inst_15496 = (state_15509[(2)]);
var state_15509__$1 = state_15509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15509__$1,(8),inst_15496,inst_15486);
} else {
if((state_val_15510 === (9))){
var state_15509__$1 = state_15509;
var statearr_15539_18176 = state_15509__$1;
(statearr_15539_18176[(2)] = tc);

(statearr_15539_18176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (5))){
var inst_15489 = cljs.core.async.close_BANG_(tc);
var inst_15490 = cljs.core.async.close_BANG_(fc);
var state_15509__$1 = (function (){var statearr_15540 = state_15509;
(statearr_15540[(8)] = inst_15489);

return statearr_15540;
})();
var statearr_15541_18177 = state_15509__$1;
(statearr_15541_18177[(2)] = inst_15490);

(statearr_15541_18177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (14))){
var inst_15503 = (state_15509[(2)]);
var state_15509__$1 = state_15509;
var statearr_15542_18179 = state_15509__$1;
(statearr_15542_18179[(2)] = inst_15503);

(statearr_15542_18179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (10))){
var state_15509__$1 = state_15509;
var statearr_15543_18180 = state_15509__$1;
(statearr_15543_18180[(2)] = fc);

(statearr_15543_18180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15510 === (8))){
var inst_15498 = (state_15509[(2)]);
var state_15509__$1 = state_15509;
if(cljs.core.truth_(inst_15498)){
var statearr_15544_18181 = state_15509__$1;
(statearr_15544_18181[(1)] = (12));

} else {
var statearr_15545_18182 = state_15509__$1;
(statearr_15545_18182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_15551 = [null,null,null,null,null,null,null,null,null];
(statearr_15551[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_15551[(1)] = (1));

return statearr_15551;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_15509){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15509);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15553){var ex__14161__auto__ = e15553;
var statearr_15555_18184 = state_15509;
(statearr_15555_18184[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15509[(4)]))){
var statearr_15558_18185 = state_15509;
(statearr_15558_18185[(1)] = cljs.core.first((state_15509[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18187 = state_15509;
state_15509 = G__18187;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_15509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_15509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15559 = f__14529__auto__();
(statearr_15559[(6)] = c__14528__auto___18151);

return statearr_15559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_15595){
var state_val_15597 = (state_15595[(1)]);
if((state_val_15597 === (7))){
var inst_15589 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
var statearr_15599_18191 = state_15595__$1;
(statearr_15599_18191[(2)] = inst_15589);

(statearr_15599_18191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (1))){
var inst_15566 = init;
var inst_15567 = inst_15566;
var state_15595__$1 = (function (){var statearr_15602 = state_15595;
(statearr_15602[(7)] = inst_15567);

return statearr_15602;
})();
var statearr_15604_18194 = state_15595__$1;
(statearr_15604_18194[(2)] = null);

(statearr_15604_18194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (4))){
var inst_15572 = (state_15595[(8)]);
var inst_15572__$1 = (state_15595[(2)]);
var inst_15576 = (inst_15572__$1 == null);
var state_15595__$1 = (function (){var statearr_15608 = state_15595;
(statearr_15608[(8)] = inst_15572__$1);

return statearr_15608;
})();
if(cljs.core.truth_(inst_15576)){
var statearr_15609_18195 = state_15595__$1;
(statearr_15609_18195[(1)] = (5));

} else {
var statearr_15610_18196 = state_15595__$1;
(statearr_15610_18196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (6))){
var inst_15567 = (state_15595[(7)]);
var inst_15572 = (state_15595[(8)]);
var inst_15579 = (state_15595[(9)]);
var inst_15579__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15567,inst_15572) : f.call(null, inst_15567,inst_15572));
var inst_15580 = cljs.core.reduced_QMARK_(inst_15579__$1);
var state_15595__$1 = (function (){var statearr_15615 = state_15595;
(statearr_15615[(9)] = inst_15579__$1);

return statearr_15615;
})();
if(inst_15580){
var statearr_15616_18201 = state_15595__$1;
(statearr_15616_18201[(1)] = (8));

} else {
var statearr_15618_18202 = state_15595__$1;
(statearr_15618_18202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (3))){
var inst_15592 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15595__$1,inst_15592);
} else {
if((state_val_15597 === (2))){
var state_15595__$1 = state_15595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15595__$1,(4),ch);
} else {
if((state_val_15597 === (9))){
var inst_15579 = (state_15595[(9)]);
var inst_15567 = inst_15579;
var state_15595__$1 = (function (){var statearr_15620 = state_15595;
(statearr_15620[(7)] = inst_15567);

return statearr_15620;
})();
var statearr_15621_18205 = state_15595__$1;
(statearr_15621_18205[(2)] = null);

(statearr_15621_18205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (5))){
var inst_15567 = (state_15595[(7)]);
var state_15595__$1 = state_15595;
var statearr_15626_18206 = state_15595__$1;
(statearr_15626_18206[(2)] = inst_15567);

(statearr_15626_18206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (10))){
var inst_15587 = (state_15595[(2)]);
var state_15595__$1 = state_15595;
var statearr_15627_18207 = state_15595__$1;
(statearr_15627_18207[(2)] = inst_15587);

(statearr_15627_18207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (8))){
var inst_15579 = (state_15595[(9)]);
var inst_15582 = cljs.core.deref(inst_15579);
var state_15595__$1 = state_15595;
var statearr_15628_18209 = state_15595__$1;
(statearr_15628_18209[(2)] = inst_15582);

(statearr_15628_18209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14158__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14158__auto____0 = (function (){
var statearr_15630 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15630[(0)] = cljs$core$async$reduce_$_state_machine__14158__auto__);

(statearr_15630[(1)] = (1));

return statearr_15630;
});
var cljs$core$async$reduce_$_state_machine__14158__auto____1 = (function (state_15595){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15595);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15631){var ex__14161__auto__ = e15631;
var statearr_15632_18212 = state_15595;
(statearr_15632_18212[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15595[(4)]))){
var statearr_15633_18213 = state_15595;
(statearr_15633_18213[(1)] = cljs.core.first((state_15595[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18214 = state_15595;
state_15595 = G__18214;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14158__auto__ = function(state_15595){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14158__auto____1.call(this,state_15595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14158__auto____0;
cljs$core$async$reduce_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14158__auto____1;
return cljs$core$async$reduce_$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15635 = f__14529__auto__();
(statearr_15635[(6)] = c__14528__auto__);

return statearr_15635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));

return c__14528__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_15646){
var state_val_15647 = (state_15646[(1)]);
if((state_val_15647 === (1))){
var inst_15641 = cljs.core.async.reduce(f__$1,init,ch);
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15646__$1,(2),inst_15641);
} else {
if((state_val_15647 === (2))){
var inst_15643 = (state_15646[(2)]);
var inst_15644 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15643) : f__$1.call(null, inst_15643));
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15646__$1,inst_15644);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14158__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14158__auto____0 = (function (){
var statearr_15654 = [null,null,null,null,null,null,null];
(statearr_15654[(0)] = cljs$core$async$transduce_$_state_machine__14158__auto__);

(statearr_15654[(1)] = (1));

return statearr_15654;
});
var cljs$core$async$transduce_$_state_machine__14158__auto____1 = (function (state_15646){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15646);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15655){var ex__14161__auto__ = e15655;
var statearr_15656_18215 = state_15646;
(statearr_15656_18215[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15646[(4)]))){
var statearr_15658_18217 = state_15646;
(statearr_15658_18217[(1)] = cljs.core.first((state_15646[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18218 = state_15646;
state_15646 = G__18218;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14158__auto__ = function(state_15646){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14158__auto____1.call(this,state_15646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14158__auto____0;
cljs$core$async$transduce_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14158__auto____1;
return cljs$core$async$transduce_$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15662 = f__14529__auto__();
(statearr_15662[(6)] = c__14528__auto__);

return statearr_15662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));

return c__14528__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15670 = arguments.length;
switch (G__15670) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_15704){
var state_val_15705 = (state_15704[(1)]);
if((state_val_15705 === (7))){
var inst_15685 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
var statearr_15706_18224 = state_15704__$1;
(statearr_15706_18224[(2)] = inst_15685);

(statearr_15706_18224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (1))){
var inst_15679 = cljs.core.seq(coll);
var inst_15680 = inst_15679;
var state_15704__$1 = (function (){var statearr_15707 = state_15704;
(statearr_15707[(7)] = inst_15680);

return statearr_15707;
})();
var statearr_15708_18225 = state_15704__$1;
(statearr_15708_18225[(2)] = null);

(statearr_15708_18225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (4))){
var inst_15680 = (state_15704[(7)]);
var inst_15683 = cljs.core.first(inst_15680);
var state_15704__$1 = state_15704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15704__$1,(7),ch,inst_15683);
} else {
if((state_val_15705 === (13))){
var inst_15697 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
var statearr_15712_18227 = state_15704__$1;
(statearr_15712_18227[(2)] = inst_15697);

(statearr_15712_18227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (6))){
var inst_15688 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
if(cljs.core.truth_(inst_15688)){
var statearr_15713_18229 = state_15704__$1;
(statearr_15713_18229[(1)] = (8));

} else {
var statearr_15714_18231 = state_15704__$1;
(statearr_15714_18231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (3))){
var inst_15701 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15704__$1,inst_15701);
} else {
if((state_val_15705 === (12))){
var state_15704__$1 = state_15704;
var statearr_15716_18236 = state_15704__$1;
(statearr_15716_18236[(2)] = null);

(statearr_15716_18236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (2))){
var inst_15680 = (state_15704[(7)]);
var state_15704__$1 = state_15704;
if(cljs.core.truth_(inst_15680)){
var statearr_15719_18238 = state_15704__$1;
(statearr_15719_18238[(1)] = (4));

} else {
var statearr_15720_18239 = state_15704__$1;
(statearr_15720_18239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (11))){
var inst_15694 = cljs.core.async.close_BANG_(ch);
var state_15704__$1 = state_15704;
var statearr_15721_18240 = state_15704__$1;
(statearr_15721_18240[(2)] = inst_15694);

(statearr_15721_18240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (9))){
var state_15704__$1 = state_15704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15723_18241 = state_15704__$1;
(statearr_15723_18241[(1)] = (11));

} else {
var statearr_15724_18242 = state_15704__$1;
(statearr_15724_18242[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (5))){
var inst_15680 = (state_15704[(7)]);
var state_15704__$1 = state_15704;
var statearr_15727_18244 = state_15704__$1;
(statearr_15727_18244[(2)] = inst_15680);

(statearr_15727_18244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (10))){
var inst_15699 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
var statearr_15729_18247 = state_15704__$1;
(statearr_15729_18247[(2)] = inst_15699);

(statearr_15729_18247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (8))){
var inst_15680 = (state_15704[(7)]);
var inst_15690 = cljs.core.next(inst_15680);
var inst_15680__$1 = inst_15690;
var state_15704__$1 = (function (){var statearr_15730 = state_15704;
(statearr_15730[(7)] = inst_15680__$1);

return statearr_15730;
})();
var statearr_15733_18251 = state_15704__$1;
(statearr_15733_18251[(2)] = null);

(statearr_15733_18251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_15742 = [null,null,null,null,null,null,null,null];
(statearr_15742[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_15742[(1)] = (1));

return statearr_15742;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_15704){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_15704);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e15744){var ex__14161__auto__ = e15744;
var statearr_15745_18258 = state_15704;
(statearr_15745_18258[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_15704[(4)]))){
var statearr_15746_18259 = state_15704;
(statearr_15746_18259[(1)] = cljs.core.first((state_15704[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18261 = state_15704;
state_15704 = G__18261;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_15704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_15704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_15749 = f__14529__auto__();
(statearr_15749[(6)] = c__14528__auto__);

return statearr_15749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));

return c__14528__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15762 = arguments.length;
switch (G__15762) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18265 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18265(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18272 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18272(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18276 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18276(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18282 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18282(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15815 = (function (ch,cs,meta15816){
this.ch = ch;
this.cs = cs;
this.meta15816 = meta15816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15817,meta15816__$1){
var self__ = this;
var _15817__$1 = this;
return (new cljs.core.async.t_cljs$core$async15815(self__.ch,self__.cs,meta15816__$1));
}));

(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15817){
var self__ = this;
var _15817__$1 = this;
return self__.meta15816;
}));

(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15815.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15816","meta15816",-1842039113,null)], null);
}));

(cljs.core.async.t_cljs$core$async15815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15815");

(cljs.core.async.t_cljs$core$async15815.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15815.
 */
cljs.core.async.__GT_t_cljs$core$async15815 = (function cljs$core$async$__GT_t_cljs$core$async15815(ch,cs,meta15816){
return (new cljs.core.async.t_cljs$core$async15815(ch,cs,meta15816));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15815(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14528__auto___18295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_16001){
var state_val_16004 = (state_16001[(1)]);
if((state_val_16004 === (7))){
var inst_15995 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16013_18296 = state_16001__$1;
(statearr_16013_18296[(2)] = inst_15995);

(statearr_16013_18296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (20))){
var inst_15896 = (state_16001[(7)]);
var inst_15910 = cljs.core.first(inst_15896);
var inst_15911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15910,(0),null);
var inst_15912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15910,(1),null);
var state_16001__$1 = (function (){var statearr_16020 = state_16001;
(statearr_16020[(8)] = inst_15911);

return statearr_16020;
})();
if(cljs.core.truth_(inst_15912)){
var statearr_16021_18301 = state_16001__$1;
(statearr_16021_18301[(1)] = (22));

} else {
var statearr_16022_18302 = state_16001__$1;
(statearr_16022_18302[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (27))){
var inst_15941 = (state_16001[(9)]);
var inst_15943 = (state_16001[(10)]);
var inst_15948 = (state_16001[(11)]);
var inst_15856 = (state_16001[(12)]);
var inst_15948__$1 = cljs.core._nth(inst_15941,inst_15943);
var inst_15949 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15948__$1,inst_15856,done);
var state_16001__$1 = (function (){var statearr_16027 = state_16001;
(statearr_16027[(11)] = inst_15948__$1);

return statearr_16027;
})();
if(cljs.core.truth_(inst_15949)){
var statearr_16029_18314 = state_16001__$1;
(statearr_16029_18314[(1)] = (30));

} else {
var statearr_16030_18316 = state_16001__$1;
(statearr_16030_18316[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (1))){
var state_16001__$1 = state_16001;
var statearr_16034_18317 = state_16001__$1;
(statearr_16034_18317[(2)] = null);

(statearr_16034_18317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (24))){
var inst_15896 = (state_16001[(7)]);
var inst_15917 = (state_16001[(2)]);
var inst_15918 = cljs.core.next(inst_15896);
var inst_15867 = inst_15918;
var inst_15868 = null;
var inst_15869 = (0);
var inst_15870 = (0);
var state_16001__$1 = (function (){var statearr_16036 = state_16001;
(statearr_16036[(13)] = inst_15917);

(statearr_16036[(14)] = inst_15867);

(statearr_16036[(15)] = inst_15869);

(statearr_16036[(16)] = inst_15870);

(statearr_16036[(17)] = inst_15868);

return statearr_16036;
})();
var statearr_16040_18318 = state_16001__$1;
(statearr_16040_18318[(2)] = null);

(statearr_16040_18318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (39))){
var state_16001__$1 = state_16001;
var statearr_16046_18319 = state_16001__$1;
(statearr_16046_18319[(2)] = null);

(statearr_16046_18319[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (4))){
var inst_15856 = (state_16001[(12)]);
var inst_15856__$1 = (state_16001[(2)]);
var inst_15857 = (inst_15856__$1 == null);
var state_16001__$1 = (function (){var statearr_16050 = state_16001;
(statearr_16050[(12)] = inst_15856__$1);

return statearr_16050;
})();
if(cljs.core.truth_(inst_15857)){
var statearr_16051_18323 = state_16001__$1;
(statearr_16051_18323[(1)] = (5));

} else {
var statearr_16052_18324 = state_16001__$1;
(statearr_16052_18324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (15))){
var inst_15867 = (state_16001[(14)]);
var inst_15869 = (state_16001[(15)]);
var inst_15870 = (state_16001[(16)]);
var inst_15868 = (state_16001[(17)]);
var inst_15891 = (state_16001[(2)]);
var inst_15892 = (inst_15870 + (1));
var tmp16041 = inst_15867;
var tmp16042 = inst_15869;
var tmp16043 = inst_15868;
var inst_15867__$1 = tmp16041;
var inst_15868__$1 = tmp16043;
var inst_15869__$1 = tmp16042;
var inst_15870__$1 = inst_15892;
var state_16001__$1 = (function (){var statearr_16055 = state_16001;
(statearr_16055[(14)] = inst_15867__$1);

(statearr_16055[(15)] = inst_15869__$1);

(statearr_16055[(16)] = inst_15870__$1);

(statearr_16055[(17)] = inst_15868__$1);

(statearr_16055[(18)] = inst_15891);

return statearr_16055;
})();
var statearr_16059_18325 = state_16001__$1;
(statearr_16059_18325[(2)] = null);

(statearr_16059_18325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (21))){
var inst_15921 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16068_18326 = state_16001__$1;
(statearr_16068_18326[(2)] = inst_15921);

(statearr_16068_18326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (31))){
var inst_15948 = (state_16001[(11)]);
var inst_15952 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15948);
var state_16001__$1 = state_16001;
var statearr_16069_18327 = state_16001__$1;
(statearr_16069_18327[(2)] = inst_15952);

(statearr_16069_18327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (32))){
var inst_15940 = (state_16001[(19)]);
var inst_15941 = (state_16001[(9)]);
var inst_15943 = (state_16001[(10)]);
var inst_15942 = (state_16001[(20)]);
var inst_15954 = (state_16001[(2)]);
var inst_15955 = (inst_15943 + (1));
var tmp16060 = inst_15940;
var tmp16061 = inst_15941;
var tmp16062 = inst_15942;
var inst_15940__$1 = tmp16060;
var inst_15941__$1 = tmp16061;
var inst_15942__$1 = tmp16062;
var inst_15943__$1 = inst_15955;
var state_16001__$1 = (function (){var statearr_16075 = state_16001;
(statearr_16075[(21)] = inst_15954);

(statearr_16075[(19)] = inst_15940__$1);

(statearr_16075[(9)] = inst_15941__$1);

(statearr_16075[(10)] = inst_15943__$1);

(statearr_16075[(20)] = inst_15942__$1);

return statearr_16075;
})();
var statearr_16076_18328 = state_16001__$1;
(statearr_16076_18328[(2)] = null);

(statearr_16076_18328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (40))){
var inst_15968 = (state_16001[(22)]);
var inst_15972 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15968);
var state_16001__$1 = state_16001;
var statearr_16081_18329 = state_16001__$1;
(statearr_16081_18329[(2)] = inst_15972);

(statearr_16081_18329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (33))){
var inst_15958 = (state_16001[(23)]);
var inst_15961 = cljs.core.chunked_seq_QMARK_(inst_15958);
var state_16001__$1 = state_16001;
if(inst_15961){
var statearr_16087_18335 = state_16001__$1;
(statearr_16087_18335[(1)] = (36));

} else {
var statearr_16088_18337 = state_16001__$1;
(statearr_16088_18337[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (13))){
var inst_15885 = (state_16001[(24)]);
var inst_15888 = cljs.core.async.close_BANG_(inst_15885);
var state_16001__$1 = state_16001;
var statearr_16090_18341 = state_16001__$1;
(statearr_16090_18341[(2)] = inst_15888);

(statearr_16090_18341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (22))){
var inst_15911 = (state_16001[(8)]);
var inst_15914 = cljs.core.async.close_BANG_(inst_15911);
var state_16001__$1 = state_16001;
var statearr_16097_18347 = state_16001__$1;
(statearr_16097_18347[(2)] = inst_15914);

(statearr_16097_18347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (36))){
var inst_15958 = (state_16001[(23)]);
var inst_15963 = cljs.core.chunk_first(inst_15958);
var inst_15964 = cljs.core.chunk_rest(inst_15958);
var inst_15965 = cljs.core.count(inst_15963);
var inst_15940 = inst_15964;
var inst_15941 = inst_15963;
var inst_15942 = inst_15965;
var inst_15943 = (0);
var state_16001__$1 = (function (){var statearr_16100 = state_16001;
(statearr_16100[(19)] = inst_15940);

(statearr_16100[(9)] = inst_15941);

(statearr_16100[(10)] = inst_15943);

(statearr_16100[(20)] = inst_15942);

return statearr_16100;
})();
var statearr_16102_18350 = state_16001__$1;
(statearr_16102_18350[(2)] = null);

(statearr_16102_18350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (41))){
var inst_15958 = (state_16001[(23)]);
var inst_15974 = (state_16001[(2)]);
var inst_15975 = cljs.core.next(inst_15958);
var inst_15940 = inst_15975;
var inst_15941 = null;
var inst_15942 = (0);
var inst_15943 = (0);
var state_16001__$1 = (function (){var statearr_16106 = state_16001;
(statearr_16106[(19)] = inst_15940);

(statearr_16106[(9)] = inst_15941);

(statearr_16106[(10)] = inst_15943);

(statearr_16106[(25)] = inst_15974);

(statearr_16106[(20)] = inst_15942);

return statearr_16106;
})();
var statearr_16107_18352 = state_16001__$1;
(statearr_16107_18352[(2)] = null);

(statearr_16107_18352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (43))){
var state_16001__$1 = state_16001;
var statearr_16109_18357 = state_16001__$1;
(statearr_16109_18357[(2)] = null);

(statearr_16109_18357[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (29))){
var inst_15983 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16112_18362 = state_16001__$1;
(statearr_16112_18362[(2)] = inst_15983);

(statearr_16112_18362[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (44))){
var inst_15992 = (state_16001[(2)]);
var state_16001__$1 = (function (){var statearr_16114 = state_16001;
(statearr_16114[(26)] = inst_15992);

return statearr_16114;
})();
var statearr_16115_18367 = state_16001__$1;
(statearr_16115_18367[(2)] = null);

(statearr_16115_18367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (6))){
var inst_15931 = (state_16001[(27)]);
var inst_15930 = cljs.core.deref(cs);
var inst_15931__$1 = cljs.core.keys(inst_15930);
var inst_15932 = cljs.core.count(inst_15931__$1);
var inst_15933 = cljs.core.reset_BANG_(dctr,inst_15932);
var inst_15939 = cljs.core.seq(inst_15931__$1);
var inst_15940 = inst_15939;
var inst_15941 = null;
var inst_15942 = (0);
var inst_15943 = (0);
var state_16001__$1 = (function (){var statearr_16120 = state_16001;
(statearr_16120[(28)] = inst_15933);

(statearr_16120[(27)] = inst_15931__$1);

(statearr_16120[(19)] = inst_15940);

(statearr_16120[(9)] = inst_15941);

(statearr_16120[(10)] = inst_15943);

(statearr_16120[(20)] = inst_15942);

return statearr_16120;
})();
var statearr_16123_18368 = state_16001__$1;
(statearr_16123_18368[(2)] = null);

(statearr_16123_18368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (28))){
var inst_15958 = (state_16001[(23)]);
var inst_15940 = (state_16001[(19)]);
var inst_15958__$1 = cljs.core.seq(inst_15940);
var state_16001__$1 = (function (){var statearr_16125 = state_16001;
(statearr_16125[(23)] = inst_15958__$1);

return statearr_16125;
})();
if(inst_15958__$1){
var statearr_16128_18381 = state_16001__$1;
(statearr_16128_18381[(1)] = (33));

} else {
var statearr_16129_18382 = state_16001__$1;
(statearr_16129_18382[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (25))){
var inst_15943 = (state_16001[(10)]);
var inst_15942 = (state_16001[(20)]);
var inst_15945 = (inst_15943 < inst_15942);
var inst_15946 = inst_15945;
var state_16001__$1 = state_16001;
if(cljs.core.truth_(inst_15946)){
var statearr_16136_18383 = state_16001__$1;
(statearr_16136_18383[(1)] = (27));

} else {
var statearr_16137_18384 = state_16001__$1;
(statearr_16137_18384[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (34))){
var state_16001__$1 = state_16001;
var statearr_16138_18388 = state_16001__$1;
(statearr_16138_18388[(2)] = null);

(statearr_16138_18388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (17))){
var state_16001__$1 = state_16001;
var statearr_16140_18389 = state_16001__$1;
(statearr_16140_18389[(2)] = null);

(statearr_16140_18389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (3))){
var inst_15997 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16001__$1,inst_15997);
} else {
if((state_val_16004 === (12))){
var inst_15926 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16147_18396 = state_16001__$1;
(statearr_16147_18396[(2)] = inst_15926);

(statearr_16147_18396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (2))){
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16001__$1,(4),ch);
} else {
if((state_val_16004 === (23))){
var state_16001__$1 = state_16001;
var statearr_16150_18397 = state_16001__$1;
(statearr_16150_18397[(2)] = null);

(statearr_16150_18397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (35))){
var inst_15981 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16156_18401 = state_16001__$1;
(statearr_16156_18401[(2)] = inst_15981);

(statearr_16156_18401[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (19))){
var inst_15896 = (state_16001[(7)]);
var inst_15900 = cljs.core.chunk_first(inst_15896);
var inst_15903 = cljs.core.chunk_rest(inst_15896);
var inst_15904 = cljs.core.count(inst_15900);
var inst_15867 = inst_15903;
var inst_15868 = inst_15900;
var inst_15869 = inst_15904;
var inst_15870 = (0);
var state_16001__$1 = (function (){var statearr_16159 = state_16001;
(statearr_16159[(14)] = inst_15867);

(statearr_16159[(15)] = inst_15869);

(statearr_16159[(16)] = inst_15870);

(statearr_16159[(17)] = inst_15868);

return statearr_16159;
})();
var statearr_16160_18402 = state_16001__$1;
(statearr_16160_18402[(2)] = null);

(statearr_16160_18402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (11))){
var inst_15896 = (state_16001[(7)]);
var inst_15867 = (state_16001[(14)]);
var inst_15896__$1 = cljs.core.seq(inst_15867);
var state_16001__$1 = (function (){var statearr_16165 = state_16001;
(statearr_16165[(7)] = inst_15896__$1);

return statearr_16165;
})();
if(inst_15896__$1){
var statearr_16166_18403 = state_16001__$1;
(statearr_16166_18403[(1)] = (16));

} else {
var statearr_16167_18404 = state_16001__$1;
(statearr_16167_18404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (9))){
var inst_15928 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16169_18405 = state_16001__$1;
(statearr_16169_18405[(2)] = inst_15928);

(statearr_16169_18405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (5))){
var inst_15865 = cljs.core.deref(cs);
var inst_15866 = cljs.core.seq(inst_15865);
var inst_15867 = inst_15866;
var inst_15868 = null;
var inst_15869 = (0);
var inst_15870 = (0);
var state_16001__$1 = (function (){var statearr_16172 = state_16001;
(statearr_16172[(14)] = inst_15867);

(statearr_16172[(15)] = inst_15869);

(statearr_16172[(16)] = inst_15870);

(statearr_16172[(17)] = inst_15868);

return statearr_16172;
})();
var statearr_16178_18407 = state_16001__$1;
(statearr_16178_18407[(2)] = null);

(statearr_16178_18407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (14))){
var state_16001__$1 = state_16001;
var statearr_16179_18408 = state_16001__$1;
(statearr_16179_18408[(2)] = null);

(statearr_16179_18408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (45))){
var inst_15989 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16181_18409 = state_16001__$1;
(statearr_16181_18409[(2)] = inst_15989);

(statearr_16181_18409[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (26))){
var inst_15931 = (state_16001[(27)]);
var inst_15985 = (state_16001[(2)]);
var inst_15986 = cljs.core.seq(inst_15931);
var state_16001__$1 = (function (){var statearr_16185 = state_16001;
(statearr_16185[(29)] = inst_15985);

return statearr_16185;
})();
if(inst_15986){
var statearr_16186_18416 = state_16001__$1;
(statearr_16186_18416[(1)] = (42));

} else {
var statearr_16187_18417 = state_16001__$1;
(statearr_16187_18417[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (16))){
var inst_15896 = (state_16001[(7)]);
var inst_15898 = cljs.core.chunked_seq_QMARK_(inst_15896);
var state_16001__$1 = state_16001;
if(inst_15898){
var statearr_16188_18418 = state_16001__$1;
(statearr_16188_18418[(1)] = (19));

} else {
var statearr_16189_18419 = state_16001__$1;
(statearr_16189_18419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (38))){
var inst_15978 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16191_18420 = state_16001__$1;
(statearr_16191_18420[(2)] = inst_15978);

(statearr_16191_18420[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (30))){
var state_16001__$1 = state_16001;
var statearr_16194_18421 = state_16001__$1;
(statearr_16194_18421[(2)] = null);

(statearr_16194_18421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (10))){
var inst_15870 = (state_16001[(16)]);
var inst_15868 = (state_16001[(17)]);
var inst_15883 = cljs.core._nth(inst_15868,inst_15870);
var inst_15885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15883,(0),null);
var inst_15886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15883,(1),null);
var state_16001__$1 = (function (){var statearr_16201 = state_16001;
(statearr_16201[(24)] = inst_15885);

return statearr_16201;
})();
if(cljs.core.truth_(inst_15886)){
var statearr_16203_18422 = state_16001__$1;
(statearr_16203_18422[(1)] = (13));

} else {
var statearr_16204_18423 = state_16001__$1;
(statearr_16204_18423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (18))){
var inst_15924 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16207_18428 = state_16001__$1;
(statearr_16207_18428[(2)] = inst_15924);

(statearr_16207_18428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (42))){
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16001__$1,(45),dchan);
} else {
if((state_val_16004 === (37))){
var inst_15958 = (state_16001[(23)]);
var inst_15968 = (state_16001[(22)]);
var inst_15856 = (state_16001[(12)]);
var inst_15968__$1 = cljs.core.first(inst_15958);
var inst_15969 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15968__$1,inst_15856,done);
var state_16001__$1 = (function (){var statearr_16209 = state_16001;
(statearr_16209[(22)] = inst_15968__$1);

return statearr_16209;
})();
if(cljs.core.truth_(inst_15969)){
var statearr_16210_18441 = state_16001__$1;
(statearr_16210_18441[(1)] = (39));

} else {
var statearr_16211_18442 = state_16001__$1;
(statearr_16211_18442[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (8))){
var inst_15869 = (state_16001[(15)]);
var inst_15870 = (state_16001[(16)]);
var inst_15874 = (inst_15870 < inst_15869);
var inst_15875 = inst_15874;
var state_16001__$1 = state_16001;
if(cljs.core.truth_(inst_15875)){
var statearr_16212_18443 = state_16001__$1;
(statearr_16212_18443[(1)] = (10));

} else {
var statearr_16213_18444 = state_16001__$1;
(statearr_16213_18444[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14158__auto__ = null;
var cljs$core$async$mult_$_state_machine__14158__auto____0 = (function (){
var statearr_16216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16216[(0)] = cljs$core$async$mult_$_state_machine__14158__auto__);

(statearr_16216[(1)] = (1));

return statearr_16216;
});
var cljs$core$async$mult_$_state_machine__14158__auto____1 = (function (state_16001){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_16001);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e16217){var ex__14161__auto__ = e16217;
var statearr_16218_18446 = state_16001;
(statearr_16218_18446[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_16001[(4)]))){
var statearr_16219_18447 = state_16001;
(statearr_16219_18447[(1)] = cljs.core.first((state_16001[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_16001;
state_16001 = G__18451;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14158__auto__ = function(state_16001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14158__auto____1.call(this,state_16001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14158__auto____0;
cljs$core$async$mult_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14158__auto____1;
return cljs$core$async$mult_$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_16230 = f__14529__auto__();
(statearr_16230[(6)] = c__14528__auto___18295);

return statearr_16230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16235 = arguments.length;
switch (G__16235) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18458 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18458(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18462 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18462(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18463 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18463(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18493 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18493(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18497 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18497(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18507 = arguments.length;
var i__5727__auto___18508 = (0);
while(true){
if((i__5727__auto___18508 < len__5726__auto___18507)){
args__5732__auto__.push((arguments[i__5727__auto___18508]));

var G__18510 = (i__5727__auto___18508 + (1));
i__5727__auto___18508 = G__18510;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16291){
var map__16292 = p__16291;
var map__16292__$1 = cljs.core.__destructure_map(map__16292);
var opts = map__16292__$1;
var statearr_16295_18514 = state;
(statearr_16295_18514[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16301_18515 = state;
(statearr_16301_18515[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16303_18516 = state;
(statearr_16303_18516[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16279){
var G__16280 = cljs.core.first(seq16279);
var seq16279__$1 = cljs.core.next(seq16279);
var G__16281 = cljs.core.first(seq16279__$1);
var seq16279__$2 = cljs.core.next(seq16279__$1);
var G__16282 = cljs.core.first(seq16279__$2);
var seq16279__$3 = cljs.core.next(seq16279__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16280,G__16281,G__16282,seq16279__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16346 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16347){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16347 = meta16347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16348,meta16347__$1){
var self__ = this;
var _16348__$1 = this;
return (new cljs.core.async.t_cljs$core$async16346(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16347__$1));
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16348){
var self__ = this;
var _16348__$1 = this;
return self__.meta16347;
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16347","meta16347",-328658132,null)], null);
}));

(cljs.core.async.t_cljs$core$async16346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16346");

(cljs.core.async.t_cljs$core$async16346.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16346.
 */
cljs.core.async.__GT_t_cljs$core$async16346 = (function cljs$core$async$__GT_t_cljs$core$async16346(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16347){
return (new cljs.core.async.t_cljs$core$async16346(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16347));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16346(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14528__auto___18537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_16454){
var state_val_16455 = (state_16454[(1)]);
if((state_val_16455 === (7))){
var inst_16400 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
if(cljs.core.truth_(inst_16400)){
var statearr_16459_18538 = state_16454__$1;
(statearr_16459_18538[(1)] = (8));

} else {
var statearr_16461_18539 = state_16454__$1;
(statearr_16461_18539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (20))){
var inst_16393 = (state_16454[(7)]);
var state_16454__$1 = state_16454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16454__$1,(23),out,inst_16393);
} else {
if((state_val_16455 === (1))){
var inst_16366 = calc_state();
var inst_16367 = cljs.core.__destructure_map(inst_16366);
var inst_16373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16367,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16367,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16367,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16376 = inst_16366;
var state_16454__$1 = (function (){var statearr_16463 = state_16454;
(statearr_16463[(8)] = inst_16376);

(statearr_16463[(9)] = inst_16375);

(statearr_16463[(10)] = inst_16374);

(statearr_16463[(11)] = inst_16373);

return statearr_16463;
})();
var statearr_16464_18540 = state_16454__$1;
(statearr_16464_18540[(2)] = null);

(statearr_16464_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (24))){
var inst_16382 = (state_16454[(12)]);
var inst_16376 = inst_16382;
var state_16454__$1 = (function (){var statearr_16465 = state_16454;
(statearr_16465[(8)] = inst_16376);

return statearr_16465;
})();
var statearr_16466_18541 = state_16454__$1;
(statearr_16466_18541[(2)] = null);

(statearr_16466_18541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (4))){
var inst_16395 = (state_16454[(13)]);
var inst_16393 = (state_16454[(7)]);
var inst_16391 = (state_16454[(2)]);
var inst_16393__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16391,(0),null);
var inst_16394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16391,(1),null);
var inst_16395__$1 = (inst_16393__$1 == null);
var state_16454__$1 = (function (){var statearr_16468 = state_16454;
(statearr_16468[(13)] = inst_16395__$1);

(statearr_16468[(14)] = inst_16394);

(statearr_16468[(7)] = inst_16393__$1);

return statearr_16468;
})();
if(cljs.core.truth_(inst_16395__$1)){
var statearr_16473_18542 = state_16454__$1;
(statearr_16473_18542[(1)] = (5));

} else {
var statearr_16474_18543 = state_16454__$1;
(statearr_16474_18543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (15))){
var inst_16383 = (state_16454[(15)]);
var inst_16423 = (state_16454[(16)]);
var inst_16423__$1 = cljs.core.empty_QMARK_(inst_16383);
var state_16454__$1 = (function (){var statearr_16480 = state_16454;
(statearr_16480[(16)] = inst_16423__$1);

return statearr_16480;
})();
if(inst_16423__$1){
var statearr_16481_18544 = state_16454__$1;
(statearr_16481_18544[(1)] = (17));

} else {
var statearr_16482_18545 = state_16454__$1;
(statearr_16482_18545[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (21))){
var inst_16382 = (state_16454[(12)]);
var inst_16376 = inst_16382;
var state_16454__$1 = (function (){var statearr_16483 = state_16454;
(statearr_16483[(8)] = inst_16376);

return statearr_16483;
})();
var statearr_16484_18546 = state_16454__$1;
(statearr_16484_18546[(2)] = null);

(statearr_16484_18546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (13))){
var inst_16407 = (state_16454[(2)]);
var inst_16408 = calc_state();
var inst_16376 = inst_16408;
var state_16454__$1 = (function (){var statearr_16491 = state_16454;
(statearr_16491[(17)] = inst_16407);

(statearr_16491[(8)] = inst_16376);

return statearr_16491;
})();
var statearr_16502_18547 = state_16454__$1;
(statearr_16502_18547[(2)] = null);

(statearr_16502_18547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (22))){
var inst_16444 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
var statearr_16508_18548 = state_16454__$1;
(statearr_16508_18548[(2)] = inst_16444);

(statearr_16508_18548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (6))){
var inst_16394 = (state_16454[(14)]);
var inst_16398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16394,change);
var state_16454__$1 = state_16454;
var statearr_16510_18549 = state_16454__$1;
(statearr_16510_18549[(2)] = inst_16398);

(statearr_16510_18549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (25))){
var state_16454__$1 = state_16454;
var statearr_16516_18552 = state_16454__$1;
(statearr_16516_18552[(2)] = null);

(statearr_16516_18552[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (17))){
var inst_16394 = (state_16454[(14)]);
var inst_16384 = (state_16454[(18)]);
var inst_16426 = (inst_16384.cljs$core$IFn$_invoke$arity$1 ? inst_16384.cljs$core$IFn$_invoke$arity$1(inst_16394) : inst_16384.call(null, inst_16394));
var inst_16427 = cljs.core.not(inst_16426);
var state_16454__$1 = state_16454;
var statearr_16525_18556 = state_16454__$1;
(statearr_16525_18556[(2)] = inst_16427);

(statearr_16525_18556[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (3))){
var inst_16448 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16454__$1,inst_16448);
} else {
if((state_val_16455 === (12))){
var state_16454__$1 = state_16454;
var statearr_16526_18573 = state_16454__$1;
(statearr_16526_18573[(2)] = null);

(statearr_16526_18573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (2))){
var inst_16382 = (state_16454[(12)]);
var inst_16376 = (state_16454[(8)]);
var inst_16382__$1 = cljs.core.__destructure_map(inst_16376);
var inst_16383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16382__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16382__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16382__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16454__$1 = (function (){var statearr_16531 = state_16454;
(statearr_16531[(15)] = inst_16383);

(statearr_16531[(12)] = inst_16382__$1);

(statearr_16531[(18)] = inst_16384);

return statearr_16531;
})();
return cljs.core.async.ioc_alts_BANG_(state_16454__$1,(4),inst_16385);
} else {
if((state_val_16455 === (23))){
var inst_16435 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
if(cljs.core.truth_(inst_16435)){
var statearr_16535_18577 = state_16454__$1;
(statearr_16535_18577[(1)] = (24));

} else {
var statearr_16540_18581 = state_16454__$1;
(statearr_16540_18581[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (19))){
var inst_16430 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
var statearr_16542_18582 = state_16454__$1;
(statearr_16542_18582[(2)] = inst_16430);

(statearr_16542_18582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (11))){
var inst_16394 = (state_16454[(14)]);
var inst_16404 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16394);
var state_16454__$1 = state_16454;
var statearr_16543_18593 = state_16454__$1;
(statearr_16543_18593[(2)] = inst_16404);

(statearr_16543_18593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (9))){
var inst_16383 = (state_16454[(15)]);
var inst_16394 = (state_16454[(14)]);
var inst_16420 = (state_16454[(19)]);
var inst_16420__$1 = (inst_16383.cljs$core$IFn$_invoke$arity$1 ? inst_16383.cljs$core$IFn$_invoke$arity$1(inst_16394) : inst_16383.call(null, inst_16394));
var state_16454__$1 = (function (){var statearr_16547 = state_16454;
(statearr_16547[(19)] = inst_16420__$1);

return statearr_16547;
})();
if(cljs.core.truth_(inst_16420__$1)){
var statearr_16548_18597 = state_16454__$1;
(statearr_16548_18597[(1)] = (14));

} else {
var statearr_16550_18598 = state_16454__$1;
(statearr_16550_18598[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (5))){
var inst_16395 = (state_16454[(13)]);
var state_16454__$1 = state_16454;
var statearr_16551_18599 = state_16454__$1;
(statearr_16551_18599[(2)] = inst_16395);

(statearr_16551_18599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (14))){
var inst_16420 = (state_16454[(19)]);
var state_16454__$1 = state_16454;
var statearr_16553_18600 = state_16454__$1;
(statearr_16553_18600[(2)] = inst_16420);

(statearr_16553_18600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (26))){
var inst_16440 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
var statearr_16554_18607 = state_16454__$1;
(statearr_16554_18607[(2)] = inst_16440);

(statearr_16554_18607[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (16))){
var inst_16432 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
if(cljs.core.truth_(inst_16432)){
var statearr_16555_18612 = state_16454__$1;
(statearr_16555_18612[(1)] = (20));

} else {
var statearr_16556_18613 = state_16454__$1;
(statearr_16556_18613[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (10))){
var inst_16446 = (state_16454[(2)]);
var state_16454__$1 = state_16454;
var statearr_16557_18614 = state_16454__$1;
(statearr_16557_18614[(2)] = inst_16446);

(statearr_16557_18614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (18))){
var inst_16423 = (state_16454[(16)]);
var state_16454__$1 = state_16454;
var statearr_16558_18615 = state_16454__$1;
(statearr_16558_18615[(2)] = inst_16423);

(statearr_16558_18615[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16455 === (8))){
var inst_16393 = (state_16454[(7)]);
var inst_16402 = (inst_16393 == null);
var state_16454__$1 = state_16454;
if(cljs.core.truth_(inst_16402)){
var statearr_16559_18616 = state_16454__$1;
(statearr_16559_18616[(1)] = (11));

} else {
var statearr_16560_18617 = state_16454__$1;
(statearr_16560_18617[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14158__auto__ = null;
var cljs$core$async$mix_$_state_machine__14158__auto____0 = (function (){
var statearr_16566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16566[(0)] = cljs$core$async$mix_$_state_machine__14158__auto__);

(statearr_16566[(1)] = (1));

return statearr_16566;
});
var cljs$core$async$mix_$_state_machine__14158__auto____1 = (function (state_16454){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_16454);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e16568){var ex__14161__auto__ = e16568;
var statearr_16569_18621 = state_16454;
(statearr_16569_18621[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_16454[(4)]))){
var statearr_16570_18622 = state_16454;
(statearr_16570_18622[(1)] = cljs.core.first((state_16454[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18624 = state_16454;
state_16454 = G__18624;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14158__auto__ = function(state_16454){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14158__auto____1.call(this,state_16454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14158__auto____0;
cljs$core$async$mix_$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14158__auto____1;
return cljs$core$async$mix_$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_16571 = f__14529__auto__();
(statearr_16571[(6)] = c__14528__auto___18537);

return statearr_16571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18626 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18626(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18629 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18629(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18635 = (function() {
var G__18636 = null;
var G__18636__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18636__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18636 = function(p,v){
switch(arguments.length){
case 1:
return G__18636__1.call(this,p);
case 2:
return G__18636__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18636.cljs$core$IFn$_invoke$arity$1 = G__18636__1;
G__18636.cljs$core$IFn$_invoke$arity$2 = G__18636__2;
return G__18636;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16583 = arguments.length;
switch (G__16583) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18635(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18635(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16595 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16596){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16596 = meta16596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16597,meta16596__$1){
var self__ = this;
var _16597__$1 = this;
return (new cljs.core.async.t_cljs$core$async16595(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16596__$1));
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16597){
var self__ = this;
var _16597__$1 = this;
return self__.meta16596;
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16596","meta16596",1028164073,null)], null);
}));

(cljs.core.async.t_cljs$core$async16595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16595");

(cljs.core.async.t_cljs$core$async16595.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16595.
 */
cljs.core.async.__GT_t_cljs$core$async16595 = (function cljs$core$async$__GT_t_cljs$core$async16595(ch,topic_fn,buf_fn,mults,ensure_mult,meta16596){
return (new cljs.core.async.t_cljs$core$async16595(ch,topic_fn,buf_fn,mults,ensure_mult,meta16596));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16592 = arguments.length;
switch (G__16592) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16590_SHARP_){
if(cljs.core.truth_((p1__16590_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16590_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16590_SHARP_.call(null, topic)))){
return p1__16590_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16590_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16595(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14528__auto___18647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_16689){
var state_val_16690 = (state_16689[(1)]);
if((state_val_16690 === (7))){
var inst_16685 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16691_18648 = state_16689__$1;
(statearr_16691_18648[(2)] = inst_16685);

(statearr_16691_18648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (20))){
var state_16689__$1 = state_16689;
var statearr_16692_18649 = state_16689__$1;
(statearr_16692_18649[(2)] = null);

(statearr_16692_18649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (1))){
var state_16689__$1 = state_16689;
var statearr_16693_18650 = state_16689__$1;
(statearr_16693_18650[(2)] = null);

(statearr_16693_18650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (24))){
var inst_16666 = (state_16689[(7)]);
var inst_16677 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16666);
var state_16689__$1 = state_16689;
var statearr_16694_18651 = state_16689__$1;
(statearr_16694_18651[(2)] = inst_16677);

(statearr_16694_18651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (4))){
var inst_16613 = (state_16689[(8)]);
var inst_16613__$1 = (state_16689[(2)]);
var inst_16614 = (inst_16613__$1 == null);
var state_16689__$1 = (function (){var statearr_16701 = state_16689;
(statearr_16701[(8)] = inst_16613__$1);

return statearr_16701;
})();
if(cljs.core.truth_(inst_16614)){
var statearr_16702_18656 = state_16689__$1;
(statearr_16702_18656[(1)] = (5));

} else {
var statearr_16703_18660 = state_16689__$1;
(statearr_16703_18660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (15))){
var inst_16660 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16705_18661 = state_16689__$1;
(statearr_16705_18661[(2)] = inst_16660);

(statearr_16705_18661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (21))){
var inst_16682 = (state_16689[(2)]);
var state_16689__$1 = (function (){var statearr_16706 = state_16689;
(statearr_16706[(9)] = inst_16682);

return statearr_16706;
})();
var statearr_16707_18666 = state_16689__$1;
(statearr_16707_18666[(2)] = null);

(statearr_16707_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (13))){
var inst_16639 = (state_16689[(10)]);
var inst_16641 = cljs.core.chunked_seq_QMARK_(inst_16639);
var state_16689__$1 = state_16689;
if(inst_16641){
var statearr_16708_18667 = state_16689__$1;
(statearr_16708_18667[(1)] = (16));

} else {
var statearr_16709_18668 = state_16689__$1;
(statearr_16709_18668[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (22))){
var inst_16674 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
if(cljs.core.truth_(inst_16674)){
var statearr_16711_18673 = state_16689__$1;
(statearr_16711_18673[(1)] = (23));

} else {
var statearr_16712_18676 = state_16689__$1;
(statearr_16712_18676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (6))){
var inst_16669 = (state_16689[(11)]);
var inst_16613 = (state_16689[(8)]);
var inst_16666 = (state_16689[(7)]);
var inst_16666__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16613) : topic_fn.call(null, inst_16613));
var inst_16668 = cljs.core.deref(mults);
var inst_16669__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16668,inst_16666__$1);
var state_16689__$1 = (function (){var statearr_16714 = state_16689;
(statearr_16714[(11)] = inst_16669__$1);

(statearr_16714[(7)] = inst_16666__$1);

return statearr_16714;
})();
if(cljs.core.truth_(inst_16669__$1)){
var statearr_16715_18680 = state_16689__$1;
(statearr_16715_18680[(1)] = (19));

} else {
var statearr_16716_18681 = state_16689__$1;
(statearr_16716_18681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (25))){
var inst_16679 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16717_18682 = state_16689__$1;
(statearr_16717_18682[(2)] = inst_16679);

(statearr_16717_18682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (17))){
var inst_16639 = (state_16689[(10)]);
var inst_16649 = cljs.core.first(inst_16639);
var inst_16651 = cljs.core.async.muxch_STAR_(inst_16649);
var inst_16652 = cljs.core.async.close_BANG_(inst_16651);
var inst_16654 = cljs.core.next(inst_16639);
var inst_16623 = inst_16654;
var inst_16624 = null;
var inst_16625 = (0);
var inst_16626 = (0);
var state_16689__$1 = (function (){var statearr_16718 = state_16689;
(statearr_16718[(12)] = inst_16623);

(statearr_16718[(13)] = inst_16652);

(statearr_16718[(14)] = inst_16625);

(statearr_16718[(15)] = inst_16624);

(statearr_16718[(16)] = inst_16626);

return statearr_16718;
})();
var statearr_16719_18687 = state_16689__$1;
(statearr_16719_18687[(2)] = null);

(statearr_16719_18687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (3))){
var inst_16687 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16689__$1,inst_16687);
} else {
if((state_val_16690 === (12))){
var inst_16662 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16720_18690 = state_16689__$1;
(statearr_16720_18690[(2)] = inst_16662);

(statearr_16720_18690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (2))){
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16689__$1,(4),ch);
} else {
if((state_val_16690 === (23))){
var state_16689__$1 = state_16689;
var statearr_16721_18691 = state_16689__$1;
(statearr_16721_18691[(2)] = null);

(statearr_16721_18691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (19))){
var inst_16669 = (state_16689[(11)]);
var inst_16613 = (state_16689[(8)]);
var inst_16672 = cljs.core.async.muxch_STAR_(inst_16669);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16689__$1,(22),inst_16672,inst_16613);
} else {
if((state_val_16690 === (11))){
var inst_16623 = (state_16689[(12)]);
var inst_16639 = (state_16689[(10)]);
var inst_16639__$1 = cljs.core.seq(inst_16623);
var state_16689__$1 = (function (){var statearr_16723 = state_16689;
(statearr_16723[(10)] = inst_16639__$1);

return statearr_16723;
})();
if(inst_16639__$1){
var statearr_16724_18696 = state_16689__$1;
(statearr_16724_18696[(1)] = (13));

} else {
var statearr_16726_18700 = state_16689__$1;
(statearr_16726_18700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (9))){
var inst_16664 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16727_18704 = state_16689__$1;
(statearr_16727_18704[(2)] = inst_16664);

(statearr_16727_18704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (5))){
var inst_16620 = cljs.core.deref(mults);
var inst_16621 = cljs.core.vals(inst_16620);
var inst_16622 = cljs.core.seq(inst_16621);
var inst_16623 = inst_16622;
var inst_16624 = null;
var inst_16625 = (0);
var inst_16626 = (0);
var state_16689__$1 = (function (){var statearr_16728 = state_16689;
(statearr_16728[(12)] = inst_16623);

(statearr_16728[(14)] = inst_16625);

(statearr_16728[(15)] = inst_16624);

(statearr_16728[(16)] = inst_16626);

return statearr_16728;
})();
var statearr_16729_18716 = state_16689__$1;
(statearr_16729_18716[(2)] = null);

(statearr_16729_18716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (14))){
var state_16689__$1 = state_16689;
var statearr_16737_18728 = state_16689__$1;
(statearr_16737_18728[(2)] = null);

(statearr_16737_18728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (16))){
var inst_16639 = (state_16689[(10)]);
var inst_16643 = cljs.core.chunk_first(inst_16639);
var inst_16644 = cljs.core.chunk_rest(inst_16639);
var inst_16645 = cljs.core.count(inst_16643);
var inst_16623 = inst_16644;
var inst_16624 = inst_16643;
var inst_16625 = inst_16645;
var inst_16626 = (0);
var state_16689__$1 = (function (){var statearr_16741 = state_16689;
(statearr_16741[(12)] = inst_16623);

(statearr_16741[(14)] = inst_16625);

(statearr_16741[(15)] = inst_16624);

(statearr_16741[(16)] = inst_16626);

return statearr_16741;
})();
var statearr_16742_18740 = state_16689__$1;
(statearr_16742_18740[(2)] = null);

(statearr_16742_18740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (10))){
var inst_16623 = (state_16689[(12)]);
var inst_16625 = (state_16689[(14)]);
var inst_16624 = (state_16689[(15)]);
var inst_16626 = (state_16689[(16)]);
var inst_16631 = cljs.core._nth(inst_16624,inst_16626);
var inst_16633 = cljs.core.async.muxch_STAR_(inst_16631);
var inst_16634 = cljs.core.async.close_BANG_(inst_16633);
var inst_16636 = (inst_16626 + (1));
var tmp16730 = inst_16623;
var tmp16731 = inst_16625;
var tmp16732 = inst_16624;
var inst_16623__$1 = tmp16730;
var inst_16624__$1 = tmp16732;
var inst_16625__$1 = tmp16731;
var inst_16626__$1 = inst_16636;
var state_16689__$1 = (function (){var statearr_16744 = state_16689;
(statearr_16744[(12)] = inst_16623__$1);

(statearr_16744[(17)] = inst_16634);

(statearr_16744[(14)] = inst_16625__$1);

(statearr_16744[(15)] = inst_16624__$1);

(statearr_16744[(16)] = inst_16626__$1);

return statearr_16744;
})();
var statearr_16748_18744 = state_16689__$1;
(statearr_16748_18744[(2)] = null);

(statearr_16748_18744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (18))){
var inst_16657 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16750_18745 = state_16689__$1;
(statearr_16750_18745[(2)] = inst_16657);

(statearr_16750_18745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (8))){
var inst_16625 = (state_16689[(14)]);
var inst_16626 = (state_16689[(16)]);
var inst_16628 = (inst_16626 < inst_16625);
var inst_16629 = inst_16628;
var state_16689__$1 = state_16689;
if(cljs.core.truth_(inst_16629)){
var statearr_16751_18750 = state_16689__$1;
(statearr_16751_18750[(1)] = (10));

} else {
var statearr_16752_18751 = state_16689__$1;
(statearr_16752_18751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_16755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16755[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_16755[(1)] = (1));

return statearr_16755;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_16689){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_16689);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e16757){var ex__14161__auto__ = e16757;
var statearr_16758_18768 = state_16689;
(statearr_16758_18768[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_16689[(4)]))){
var statearr_16759_18773 = state_16689;
(statearr_16759_18773[(1)] = cljs.core.first((state_16689[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18777 = state_16689;
state_16689 = G__18777;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_16689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_16689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_16760 = f__14529__auto__();
(statearr_16760[(6)] = c__14528__auto___18647);

return statearr_16760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16765 = arguments.length;
switch (G__16765) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16780 = arguments.length;
switch (G__16780) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16800 = arguments.length;
switch (G__16800) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14528__auto___18817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_16885){
var state_val_16886 = (state_16885[(1)]);
if((state_val_16886 === (7))){
var state_16885__$1 = state_16885;
var statearr_16895_18818 = state_16885__$1;
(statearr_16895_18818[(2)] = null);

(statearr_16895_18818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (1))){
var state_16885__$1 = state_16885;
var statearr_16896_18819 = state_16885__$1;
(statearr_16896_18819[(2)] = null);

(statearr_16896_18819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (4))){
var inst_16806 = (state_16885[(7)]);
var inst_16807 = (state_16885[(8)]);
var inst_16811 = (inst_16807 < inst_16806);
var state_16885__$1 = state_16885;
if(cljs.core.truth_(inst_16811)){
var statearr_16906_18828 = state_16885__$1;
(statearr_16906_18828[(1)] = (6));

} else {
var statearr_16908_18829 = state_16885__$1;
(statearr_16908_18829[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (15))){
var inst_16865 = (state_16885[(9)]);
var inst_16876 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16865);
var state_16885__$1 = state_16885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16885__$1,(17),out,inst_16876);
} else {
if((state_val_16886 === (13))){
var inst_16865 = (state_16885[(9)]);
var inst_16865__$1 = (state_16885[(2)]);
var inst_16869 = cljs.core.some(cljs.core.nil_QMARK_,inst_16865__$1);
var state_16885__$1 = (function (){var statearr_16915 = state_16885;
(statearr_16915[(9)] = inst_16865__$1);

return statearr_16915;
})();
if(cljs.core.truth_(inst_16869)){
var statearr_16917_18835 = state_16885__$1;
(statearr_16917_18835[(1)] = (14));

} else {
var statearr_16918_18836 = state_16885__$1;
(statearr_16918_18836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (6))){
var state_16885__$1 = state_16885;
var statearr_16920_18837 = state_16885__$1;
(statearr_16920_18837[(2)] = null);

(statearr_16920_18837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (17))){
var inst_16878 = (state_16885[(2)]);
var state_16885__$1 = (function (){var statearr_16952 = state_16885;
(statearr_16952[(10)] = inst_16878);

return statearr_16952;
})();
var statearr_16953_18840 = state_16885__$1;
(statearr_16953_18840[(2)] = null);

(statearr_16953_18840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (3))){
var inst_16883 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16885__$1,inst_16883);
} else {
if((state_val_16886 === (12))){
var _ = (function (){var statearr_16954 = state_16885;
(statearr_16954[(4)] = cljs.core.rest((state_16885[(4)])));

return statearr_16954;
})();
var state_16885__$1 = state_16885;
var ex16926 = (state_16885__$1[(2)]);
var statearr_16959_18842 = state_16885__$1;
(statearr_16959_18842[(5)] = ex16926);


if((ex16926 instanceof Object)){
var statearr_16961_18843 = state_16885__$1;
(statearr_16961_18843[(1)] = (11));

(statearr_16961_18843[(5)] = null);

} else {
throw ex16926;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (2))){
var inst_16805 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16806 = cnt;
var inst_16807 = (0);
var state_16885__$1 = (function (){var statearr_16972 = state_16885;
(statearr_16972[(7)] = inst_16806);

(statearr_16972[(8)] = inst_16807);

(statearr_16972[(11)] = inst_16805);

return statearr_16972;
})();
var statearr_16973_18845 = state_16885__$1;
(statearr_16973_18845[(2)] = null);

(statearr_16973_18845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (11))){
var inst_16834 = (state_16885[(2)]);
var inst_16835 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16885__$1 = (function (){var statearr_16976 = state_16885;
(statearr_16976[(12)] = inst_16834);

return statearr_16976;
})();
var statearr_16977_18847 = state_16885__$1;
(statearr_16977_18847[(2)] = inst_16835);

(statearr_16977_18847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (9))){
var inst_16807 = (state_16885[(8)]);
var _ = (function (){var statearr_16982 = state_16885;
(statearr_16982[(4)] = cljs.core.cons((12),(state_16885[(4)])));

return statearr_16982;
})();
var inst_16841 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16807) : chs__$1.call(null, inst_16807));
var inst_16842 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16807) : done.call(null, inst_16807));
var inst_16843 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16841,inst_16842);
var ___$1 = (function (){var statearr_16983 = state_16885;
(statearr_16983[(4)] = cljs.core.rest((state_16885[(4)])));

return statearr_16983;
})();
var state_16885__$1 = state_16885;
var statearr_16984_18854 = state_16885__$1;
(statearr_16984_18854[(2)] = inst_16843);

(statearr_16984_18854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (5))){
var inst_16857 = (state_16885[(2)]);
var state_16885__$1 = (function (){var statearr_16989 = state_16885;
(statearr_16989[(13)] = inst_16857);

return statearr_16989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16885__$1,(13),dchan);
} else {
if((state_val_16886 === (14))){
var inst_16873 = cljs.core.async.close_BANG_(out);
var state_16885__$1 = state_16885;
var statearr_16990_18861 = state_16885__$1;
(statearr_16990_18861[(2)] = inst_16873);

(statearr_16990_18861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (16))){
var inst_16881 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
var statearr_16991_18867 = state_16885__$1;
(statearr_16991_18867[(2)] = inst_16881);

(statearr_16991_18867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (10))){
var inst_16807 = (state_16885[(8)]);
var inst_16846 = (state_16885[(2)]);
var inst_16848 = (inst_16807 + (1));
var inst_16807__$1 = inst_16848;
var state_16885__$1 = (function (){var statearr_16992 = state_16885;
(statearr_16992[(14)] = inst_16846);

(statearr_16992[(8)] = inst_16807__$1);

return statearr_16992;
})();
var statearr_16993_18870 = state_16885__$1;
(statearr_16993_18870[(2)] = null);

(statearr_16993_18870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (8))){
var inst_16855 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
var statearr_16994_18872 = state_16885__$1;
(statearr_16994_18872[(2)] = inst_16855);

(statearr_16994_18872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_16999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16999[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_16999[(1)] = (1));

return statearr_16999;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_16885){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_16885);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17001){var ex__14161__auto__ = e17001;
var statearr_17002_18880 = state_16885;
(statearr_17002_18880[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_16885[(4)]))){
var statearr_17003_18882 = state_16885;
(statearr_17003_18882[(1)] = cljs.core.first((state_16885[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18886 = state_16885;
state_16885 = G__18886;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_16885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_16885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17010 = f__14529__auto__();
(statearr_17010[(6)] = c__14528__auto___18817);

return statearr_17010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17020 = arguments.length;
switch (G__17020) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14528__auto___18907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_17066){
var state_val_17067 = (state_17066[(1)]);
if((state_val_17067 === (7))){
var inst_17041 = (state_17066[(7)]);
var inst_17040 = (state_17066[(8)]);
var inst_17040__$1 = (state_17066[(2)]);
var inst_17041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17040__$1,(0),null);
var inst_17042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17040__$1,(1),null);
var inst_17043 = (inst_17041__$1 == null);
var state_17066__$1 = (function (){var statearr_17073 = state_17066;
(statearr_17073[(9)] = inst_17042);

(statearr_17073[(7)] = inst_17041__$1);

(statearr_17073[(8)] = inst_17040__$1);

return statearr_17073;
})();
if(cljs.core.truth_(inst_17043)){
var statearr_17074_18913 = state_17066__$1;
(statearr_17074_18913[(1)] = (8));

} else {
var statearr_17075_18914 = state_17066__$1;
(statearr_17075_18914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17067 === (1))){
var inst_17030 = cljs.core.vec(chs);
var inst_17031 = inst_17030;
var state_17066__$1 = (function (){var statearr_17084 = state_17066;
(statearr_17084[(10)] = inst_17031);

return statearr_17084;
})();
var statearr_17091_18915 = state_17066__$1;
(statearr_17091_18915[(2)] = null);

(statearr_17091_18915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17067 === (4))){
var inst_17031 = (state_17066[(10)]);
var state_17066__$1 = state_17066;
return cljs.core.async.ioc_alts_BANG_(state_17066__$1,(7),inst_17031);
} else {
if((state_val_17067 === (6))){
var inst_17061 = (state_17066[(2)]);
var state_17066__$1 = state_17066;
var statearr_17092_18916 = state_17066__$1;
(statearr_17092_18916[(2)] = inst_17061);

(statearr_17092_18916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17067 === (3))){
var inst_17063 = (state_17066[(2)]);
var state_17066__$1 = state_17066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17066__$1,inst_17063);
} else {
if((state_val_17067 === (2))){
var inst_17031 = (state_17066[(10)]);
var inst_17033 = cljs.core.count(inst_17031);
var inst_17034 = (inst_17033 > (0));
var state_17066__$1 = state_17066;
if(cljs.core.truth_(inst_17034)){
var statearr_17094_18923 = state_17066__$1;
(statearr_17094_18923[(1)] = (4));

} else {
var statearr_17095_18924 = state_17066__$1;
(statearr_17095_18924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17067 === (11))){
var inst_17031 = (state_17066[(10)]);
var inst_17054 = (state_17066[(2)]);
var tmp17093 = inst_17031;
var inst_17031__$1 = tmp17093;
var state_17066__$1 = (function (){var statearr_17099 = state_17066;
(statearr_17099[(11)] = inst_17054);

(statearr_17099[(10)] = inst_17031__$1);

return statearr_17099;
})();
var statearr_17101_18925 = state_17066__$1;
(statearr_17101_18925[(2)] = null);

(statearr_17101_18925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17067 === (9))){
var inst_17041 = (state_17066[(7)]);
var state_17066__$1 = state_17066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17066__$1,(11),out,inst_17041);
} else {
if((state_val_17067 === (5))){
var inst_17059 = cljs.core.async.close_BANG_(out);
var state_17066__$1 = state_17066;
var statearr_17104_18926 = state_17066__$1;
(statearr_17104_18926[(2)] = inst_17059);

(statearr_17104_18926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17067 === (10))){
var inst_17057 = (state_17066[(2)]);
var state_17066__$1 = state_17066;
var statearr_17105_18927 = state_17066__$1;
(statearr_17105_18927[(2)] = inst_17057);

(statearr_17105_18927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17067 === (8))){
var inst_17042 = (state_17066[(9)]);
var inst_17041 = (state_17066[(7)]);
var inst_17031 = (state_17066[(10)]);
var inst_17040 = (state_17066[(8)]);
var inst_17049 = (function (){var cs = inst_17031;
var vec__17036 = inst_17040;
var v = inst_17041;
var c = inst_17042;
return (function (p1__17013_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17013_SHARP_);
});
})();
var inst_17050 = cljs.core.filterv(inst_17049,inst_17031);
var inst_17031__$1 = inst_17050;
var state_17066__$1 = (function (){var statearr_17114 = state_17066;
(statearr_17114[(10)] = inst_17031__$1);

return statearr_17114;
})();
var statearr_17115_18928 = state_17066__$1;
(statearr_17115_18928[(2)] = null);

(statearr_17115_18928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_17116 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17116[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_17116[(1)] = (1));

return statearr_17116;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_17066){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_17066);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17117){var ex__14161__auto__ = e17117;
var statearr_17118_18929 = state_17066;
(statearr_17118_18929[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_17066[(4)]))){
var statearr_17119_18930 = state_17066;
(statearr_17119_18930[(1)] = cljs.core.first((state_17066[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18931 = state_17066;
state_17066 = G__18931;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_17066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_17066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17120 = f__14529__auto__();
(statearr_17120[(6)] = c__14528__auto___18907);

return statearr_17120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17123 = arguments.length;
switch (G__17123) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14528__auto___18935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_17148){
var state_val_17149 = (state_17148[(1)]);
if((state_val_17149 === (7))){
var inst_17130 = (state_17148[(7)]);
var inst_17130__$1 = (state_17148[(2)]);
var inst_17131 = (inst_17130__$1 == null);
var inst_17132 = cljs.core.not(inst_17131);
var state_17148__$1 = (function (){var statearr_17155 = state_17148;
(statearr_17155[(7)] = inst_17130__$1);

return statearr_17155;
})();
if(inst_17132){
var statearr_17156_18937 = state_17148__$1;
(statearr_17156_18937[(1)] = (8));

} else {
var statearr_17157_18939 = state_17148__$1;
(statearr_17157_18939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (1))){
var inst_17125 = (0);
var state_17148__$1 = (function (){var statearr_17158 = state_17148;
(statearr_17158[(8)] = inst_17125);

return statearr_17158;
})();
var statearr_17161_18946 = state_17148__$1;
(statearr_17161_18946[(2)] = null);

(statearr_17161_18946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (4))){
var state_17148__$1 = state_17148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17148__$1,(7),ch);
} else {
if((state_val_17149 === (6))){
var inst_17143 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17162_18947 = state_17148__$1;
(statearr_17162_18947[(2)] = inst_17143);

(statearr_17162_18947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (3))){
var inst_17145 = (state_17148[(2)]);
var inst_17146 = cljs.core.async.close_BANG_(out);
var state_17148__$1 = (function (){var statearr_17163 = state_17148;
(statearr_17163[(9)] = inst_17145);

return statearr_17163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17148__$1,inst_17146);
} else {
if((state_val_17149 === (2))){
var inst_17125 = (state_17148[(8)]);
var inst_17127 = (inst_17125 < n);
var state_17148__$1 = state_17148;
if(cljs.core.truth_(inst_17127)){
var statearr_17164_18950 = state_17148__$1;
(statearr_17164_18950[(1)] = (4));

} else {
var statearr_17169_18951 = state_17148__$1;
(statearr_17169_18951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (11))){
var inst_17125 = (state_17148[(8)]);
var inst_17135 = (state_17148[(2)]);
var inst_17136 = (inst_17125 + (1));
var inst_17125__$1 = inst_17136;
var state_17148__$1 = (function (){var statearr_17170 = state_17148;
(statearr_17170[(8)] = inst_17125__$1);

(statearr_17170[(10)] = inst_17135);

return statearr_17170;
})();
var statearr_17172_18955 = state_17148__$1;
(statearr_17172_18955[(2)] = null);

(statearr_17172_18955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (9))){
var state_17148__$1 = state_17148;
var statearr_17173_18956 = state_17148__$1;
(statearr_17173_18956[(2)] = null);

(statearr_17173_18956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (5))){
var state_17148__$1 = state_17148;
var statearr_17174_18957 = state_17148__$1;
(statearr_17174_18957[(2)] = null);

(statearr_17174_18957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (10))){
var inst_17140 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17176_18958 = state_17148__$1;
(statearr_17176_18958[(2)] = inst_17140);

(statearr_17176_18958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (8))){
var inst_17130 = (state_17148[(7)]);
var state_17148__$1 = state_17148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17148__$1,(11),out,inst_17130);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_17178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17178[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_17178[(1)] = (1));

return statearr_17178;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_17148){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_17148);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17181){var ex__14161__auto__ = e17181;
var statearr_17182_18959 = state_17148;
(statearr_17182_18959[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_17148[(4)]))){
var statearr_17184_18960 = state_17148;
(statearr_17184_18960[(1)] = cljs.core.first((state_17148[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18961 = state_17148;
state_17148 = G__18961;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_17148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_17148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17190 = f__14529__auto__();
(statearr_17190[(6)] = c__14528__auto___18935);

return statearr_17190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17196 = (function (f,ch,meta17193,_,fn1,meta17197){
this.f = f;
this.ch = ch;
this.meta17193 = meta17193;
this._ = _;
this.fn1 = fn1;
this.meta17197 = meta17197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17198,meta17197__$1){
var self__ = this;
var _17198__$1 = this;
return (new cljs.core.async.t_cljs$core$async17196(self__.f,self__.ch,self__.meta17193,self__._,self__.fn1,meta17197__$1));
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17198){
var self__ = this;
var _17198__$1 = this;
return self__.meta17197;
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17191_SHARP_){
var G__17202 = (((p1__17191_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17191_SHARP_) : self__.f.call(null, p1__17191_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17202) : f1.call(null, G__17202));
});
}));

(cljs.core.async.t_cljs$core$async17196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17193","meta17193",1026530232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17192","cljs.core.async/t_cljs$core$async17192",1265308618,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17197","meta17197",512835304,null)], null);
}));

(cljs.core.async.t_cljs$core$async17196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17196");

(cljs.core.async.t_cljs$core$async17196.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17196.
 */
cljs.core.async.__GT_t_cljs$core$async17196 = (function cljs$core$async$__GT_t_cljs$core$async17196(f,ch,meta17193,_,fn1,meta17197){
return (new cljs.core.async.t_cljs$core$async17196(f,ch,meta17193,_,fn1,meta17197));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17192 = (function (f,ch,meta17193){
this.f = f;
this.ch = ch;
this.meta17193 = meta17193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17194,meta17193__$1){
var self__ = this;
var _17194__$1 = this;
return (new cljs.core.async.t_cljs$core$async17192(self__.f,self__.ch,meta17193__$1));
}));

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17194){
var self__ = this;
var _17194__$1 = this;
return self__.meta17193;
}));

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17196(self__.f,self__.ch,self__.meta17193,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17219 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17219) : self__.f.call(null, G__17219));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17193","meta17193",1026530232,null)], null);
}));

(cljs.core.async.t_cljs$core$async17192.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17192");

(cljs.core.async.t_cljs$core$async17192.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17192");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17192.
 */
cljs.core.async.__GT_t_cljs$core$async17192 = (function cljs$core$async$__GT_t_cljs$core$async17192(f,ch,meta17193){
return (new cljs.core.async.t_cljs$core$async17192(f,ch,meta17193));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17192(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17223 = (function (f,ch,meta17224){
this.f = f;
this.ch = ch;
this.meta17224 = meta17224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17225,meta17224__$1){
var self__ = this;
var _17225__$1 = this;
return (new cljs.core.async.t_cljs$core$async17223(self__.f,self__.ch,meta17224__$1));
}));

(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17225){
var self__ = this;
var _17225__$1 = this;
return self__.meta17224;
}));

(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17224","meta17224",-1602456049,null)], null);
}));

(cljs.core.async.t_cljs$core$async17223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17223");

(cljs.core.async.t_cljs$core$async17223.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17223.
 */
cljs.core.async.__GT_t_cljs$core$async17223 = (function cljs$core$async$__GT_t_cljs$core$async17223(f,ch,meta17224){
return (new cljs.core.async.t_cljs$core$async17223(f,ch,meta17224));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17223(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17250 = (function (p,ch,meta17251){
this.p = p;
this.ch = ch;
this.meta17251 = meta17251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17252,meta17251__$1){
var self__ = this;
var _17252__$1 = this;
return (new cljs.core.async.t_cljs$core$async17250(self__.p,self__.ch,meta17251__$1));
}));

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17252){
var self__ = this;
var _17252__$1 = this;
return self__.meta17251;
}));

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17251","meta17251",410859383,null)], null);
}));

(cljs.core.async.t_cljs$core$async17250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17250");

(cljs.core.async.t_cljs$core$async17250.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17250.
 */
cljs.core.async.__GT_t_cljs$core$async17250 = (function cljs$core$async$__GT_t_cljs$core$async17250(p,ch,meta17251){
return (new cljs.core.async.t_cljs$core$async17250(p,ch,meta17251));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17250(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17279 = arguments.length;
switch (G__17279) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14528__auto___18973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_17316){
var state_val_17317 = (state_17316[(1)]);
if((state_val_17317 === (7))){
var inst_17304 = (state_17316[(2)]);
var state_17316__$1 = state_17316;
var statearr_17330_18974 = state_17316__$1;
(statearr_17330_18974[(2)] = inst_17304);

(statearr_17330_18974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (1))){
var state_17316__$1 = state_17316;
var statearr_17331_18975 = state_17316__$1;
(statearr_17331_18975[(2)] = null);

(statearr_17331_18975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (4))){
var inst_17290 = (state_17316[(7)]);
var inst_17290__$1 = (state_17316[(2)]);
var inst_17291 = (inst_17290__$1 == null);
var state_17316__$1 = (function (){var statearr_17333 = state_17316;
(statearr_17333[(7)] = inst_17290__$1);

return statearr_17333;
})();
if(cljs.core.truth_(inst_17291)){
var statearr_17334_18976 = state_17316__$1;
(statearr_17334_18976[(1)] = (5));

} else {
var statearr_17335_18977 = state_17316__$1;
(statearr_17335_18977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (6))){
var inst_17290 = (state_17316[(7)]);
var inst_17295 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17290) : p.call(null, inst_17290));
var state_17316__$1 = state_17316;
if(cljs.core.truth_(inst_17295)){
var statearr_17336_18978 = state_17316__$1;
(statearr_17336_18978[(1)] = (8));

} else {
var statearr_17339_18979 = state_17316__$1;
(statearr_17339_18979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (3))){
var inst_17306 = (state_17316[(2)]);
var state_17316__$1 = state_17316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17316__$1,inst_17306);
} else {
if((state_val_17317 === (2))){
var state_17316__$1 = state_17316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17316__$1,(4),ch);
} else {
if((state_val_17317 === (11))){
var inst_17298 = (state_17316[(2)]);
var state_17316__$1 = state_17316;
var statearr_17340_18980 = state_17316__$1;
(statearr_17340_18980[(2)] = inst_17298);

(statearr_17340_18980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (9))){
var state_17316__$1 = state_17316;
var statearr_17342_18981 = state_17316__$1;
(statearr_17342_18981[(2)] = null);

(statearr_17342_18981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (5))){
var inst_17293 = cljs.core.async.close_BANG_(out);
var state_17316__$1 = state_17316;
var statearr_17343_18982 = state_17316__$1;
(statearr_17343_18982[(2)] = inst_17293);

(statearr_17343_18982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (10))){
var inst_17301 = (state_17316[(2)]);
var state_17316__$1 = (function (){var statearr_17344 = state_17316;
(statearr_17344[(8)] = inst_17301);

return statearr_17344;
})();
var statearr_17345_18983 = state_17316__$1;
(statearr_17345_18983[(2)] = null);

(statearr_17345_18983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (8))){
var inst_17290 = (state_17316[(7)]);
var state_17316__$1 = state_17316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17316__$1,(11),out,inst_17290);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_17346 = [null,null,null,null,null,null,null,null,null];
(statearr_17346[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_17346[(1)] = (1));

return statearr_17346;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_17316){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_17316);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17347){var ex__14161__auto__ = e17347;
var statearr_17349_18984 = state_17316;
(statearr_17349_18984[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_17316[(4)]))){
var statearr_17354_18985 = state_17316;
(statearr_17354_18985[(1)] = cljs.core.first((state_17316[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18986 = state_17316;
state_17316 = G__18986;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_17316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_17316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17356 = f__14529__auto__();
(statearr_17356[(6)] = c__14528__auto___18973);

return statearr_17356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17359 = arguments.length;
switch (G__17359) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14528__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_17422){
var state_val_17423 = (state_17422[(1)]);
if((state_val_17423 === (7))){
var inst_17418 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17428_18993 = state_17422__$1;
(statearr_17428_18993[(2)] = inst_17418);

(statearr_17428_18993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (20))){
var inst_17387 = (state_17422[(7)]);
var inst_17399 = (state_17422[(2)]);
var inst_17400 = cljs.core.next(inst_17387);
var inst_17373 = inst_17400;
var inst_17374 = null;
var inst_17375 = (0);
var inst_17376 = (0);
var state_17422__$1 = (function (){var statearr_17429 = state_17422;
(statearr_17429[(8)] = inst_17374);

(statearr_17429[(9)] = inst_17373);

(statearr_17429[(10)] = inst_17376);

(statearr_17429[(11)] = inst_17375);

(statearr_17429[(12)] = inst_17399);

return statearr_17429;
})();
var statearr_17430_18994 = state_17422__$1;
(statearr_17430_18994[(2)] = null);

(statearr_17430_18994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (1))){
var state_17422__$1 = state_17422;
var statearr_17434_18995 = state_17422__$1;
(statearr_17434_18995[(2)] = null);

(statearr_17434_18995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (4))){
var inst_17362 = (state_17422[(13)]);
var inst_17362__$1 = (state_17422[(2)]);
var inst_17363 = (inst_17362__$1 == null);
var state_17422__$1 = (function (){var statearr_17435 = state_17422;
(statearr_17435[(13)] = inst_17362__$1);

return statearr_17435;
})();
if(cljs.core.truth_(inst_17363)){
var statearr_17436_18996 = state_17422__$1;
(statearr_17436_18996[(1)] = (5));

} else {
var statearr_17437_18997 = state_17422__$1;
(statearr_17437_18997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (15))){
var state_17422__$1 = state_17422;
var statearr_17441_18998 = state_17422__$1;
(statearr_17441_18998[(2)] = null);

(statearr_17441_18998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (21))){
var state_17422__$1 = state_17422;
var statearr_17442_18999 = state_17422__$1;
(statearr_17442_18999[(2)] = null);

(statearr_17442_18999[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (13))){
var inst_17374 = (state_17422[(8)]);
var inst_17373 = (state_17422[(9)]);
var inst_17376 = (state_17422[(10)]);
var inst_17375 = (state_17422[(11)]);
var inst_17383 = (state_17422[(2)]);
var inst_17384 = (inst_17376 + (1));
var tmp17438 = inst_17374;
var tmp17439 = inst_17373;
var tmp17440 = inst_17375;
var inst_17373__$1 = tmp17439;
var inst_17374__$1 = tmp17438;
var inst_17375__$1 = tmp17440;
var inst_17376__$1 = inst_17384;
var state_17422__$1 = (function (){var statearr_17443 = state_17422;
(statearr_17443[(14)] = inst_17383);

(statearr_17443[(8)] = inst_17374__$1);

(statearr_17443[(9)] = inst_17373__$1);

(statearr_17443[(10)] = inst_17376__$1);

(statearr_17443[(11)] = inst_17375__$1);

return statearr_17443;
})();
var statearr_17444_19039 = state_17422__$1;
(statearr_17444_19039[(2)] = null);

(statearr_17444_19039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (22))){
var state_17422__$1 = state_17422;
var statearr_17445_19046 = state_17422__$1;
(statearr_17445_19046[(2)] = null);

(statearr_17445_19046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (6))){
var inst_17362 = (state_17422[(13)]);
var inst_17371 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17362) : f.call(null, inst_17362));
var inst_17372 = cljs.core.seq(inst_17371);
var inst_17373 = inst_17372;
var inst_17374 = null;
var inst_17375 = (0);
var inst_17376 = (0);
var state_17422__$1 = (function (){var statearr_17446 = state_17422;
(statearr_17446[(8)] = inst_17374);

(statearr_17446[(9)] = inst_17373);

(statearr_17446[(10)] = inst_17376);

(statearr_17446[(11)] = inst_17375);

return statearr_17446;
})();
var statearr_17447_19052 = state_17422__$1;
(statearr_17447_19052[(2)] = null);

(statearr_17447_19052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (17))){
var inst_17387 = (state_17422[(7)]);
var inst_17392 = cljs.core.chunk_first(inst_17387);
var inst_17393 = cljs.core.chunk_rest(inst_17387);
var inst_17394 = cljs.core.count(inst_17392);
var inst_17373 = inst_17393;
var inst_17374 = inst_17392;
var inst_17375 = inst_17394;
var inst_17376 = (0);
var state_17422__$1 = (function (){var statearr_17451 = state_17422;
(statearr_17451[(8)] = inst_17374);

(statearr_17451[(9)] = inst_17373);

(statearr_17451[(10)] = inst_17376);

(statearr_17451[(11)] = inst_17375);

return statearr_17451;
})();
var statearr_17456_19053 = state_17422__$1;
(statearr_17456_19053[(2)] = null);

(statearr_17456_19053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (3))){
var inst_17420 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17422__$1,inst_17420);
} else {
if((state_val_17423 === (12))){
var inst_17408 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17459_19057 = state_17422__$1;
(statearr_17459_19057[(2)] = inst_17408);

(statearr_17459_19057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (2))){
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17422__$1,(4),in$);
} else {
if((state_val_17423 === (23))){
var inst_17416 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17463_19058 = state_17422__$1;
(statearr_17463_19058[(2)] = inst_17416);

(statearr_17463_19058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (19))){
var inst_17403 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17464_19059 = state_17422__$1;
(statearr_17464_19059[(2)] = inst_17403);

(statearr_17464_19059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (11))){
var inst_17387 = (state_17422[(7)]);
var inst_17373 = (state_17422[(9)]);
var inst_17387__$1 = cljs.core.seq(inst_17373);
var state_17422__$1 = (function (){var statearr_17465 = state_17422;
(statearr_17465[(7)] = inst_17387__$1);

return statearr_17465;
})();
if(inst_17387__$1){
var statearr_17466_19060 = state_17422__$1;
(statearr_17466_19060[(1)] = (14));

} else {
var statearr_17467_19062 = state_17422__$1;
(statearr_17467_19062[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (9))){
var inst_17410 = (state_17422[(2)]);
var inst_17411 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17422__$1 = (function (){var statearr_17468 = state_17422;
(statearr_17468[(15)] = inst_17410);

return statearr_17468;
})();
if(cljs.core.truth_(inst_17411)){
var statearr_17469_19064 = state_17422__$1;
(statearr_17469_19064[(1)] = (21));

} else {
var statearr_17470_19065 = state_17422__$1;
(statearr_17470_19065[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (5))){
var inst_17365 = cljs.core.async.close_BANG_(out);
var state_17422__$1 = state_17422;
var statearr_17471_19066 = state_17422__$1;
(statearr_17471_19066[(2)] = inst_17365);

(statearr_17471_19066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (14))){
var inst_17387 = (state_17422[(7)]);
var inst_17390 = cljs.core.chunked_seq_QMARK_(inst_17387);
var state_17422__$1 = state_17422;
if(inst_17390){
var statearr_17472_19068 = state_17422__$1;
(statearr_17472_19068[(1)] = (17));

} else {
var statearr_17473_19069 = state_17422__$1;
(statearr_17473_19069[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (16))){
var inst_17406 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17474_19071 = state_17422__$1;
(statearr_17474_19071[(2)] = inst_17406);

(statearr_17474_19071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (10))){
var inst_17374 = (state_17422[(8)]);
var inst_17376 = (state_17422[(10)]);
var inst_17381 = cljs.core._nth(inst_17374,inst_17376);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17422__$1,(13),out,inst_17381);
} else {
if((state_val_17423 === (18))){
var inst_17387 = (state_17422[(7)]);
var inst_17397 = cljs.core.first(inst_17387);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17422__$1,(20),out,inst_17397);
} else {
if((state_val_17423 === (8))){
var inst_17376 = (state_17422[(10)]);
var inst_17375 = (state_17422[(11)]);
var inst_17378 = (inst_17376 < inst_17375);
var inst_17379 = inst_17378;
var state_17422__$1 = state_17422;
if(cljs.core.truth_(inst_17379)){
var statearr_17475_19072 = state_17422__$1;
(statearr_17475_19072[(1)] = (10));

} else {
var statearr_17476_19073 = state_17422__$1;
(statearr_17476_19073[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14158__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14158__auto____0 = (function (){
var statearr_17477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17477[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14158__auto__);

(statearr_17477[(1)] = (1));

return statearr_17477;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14158__auto____1 = (function (state_17422){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_17422);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17478){var ex__14161__auto__ = e17478;
var statearr_17483_19077 = state_17422;
(statearr_17483_19077[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_17422[(4)]))){
var statearr_17488_19081 = state_17422;
(statearr_17488_19081[(1)] = cljs.core.first((state_17422[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19082 = state_17422;
state_17422 = G__19082;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14158__auto__ = function(state_17422){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14158__auto____1.call(this,state_17422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14158__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14158__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17493 = f__14529__auto__();
(statearr_17493[(6)] = c__14528__auto__);

return statearr_17493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));

return c__14528__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17498 = arguments.length;
switch (G__17498) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17503 = arguments.length;
switch (G__17503) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17510 = arguments.length;
switch (G__17510) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14528__auto___19088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_17546){
var state_val_17547 = (state_17546[(1)]);
if((state_val_17547 === (7))){
var inst_17539 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17551_19090 = state_17546__$1;
(statearr_17551_19090[(2)] = inst_17539);

(statearr_17551_19090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (1))){
var inst_17521 = null;
var state_17546__$1 = (function (){var statearr_17555 = state_17546;
(statearr_17555[(7)] = inst_17521);

return statearr_17555;
})();
var statearr_17556_19091 = state_17546__$1;
(statearr_17556_19091[(2)] = null);

(statearr_17556_19091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (4))){
var inst_17524 = (state_17546[(8)]);
var inst_17524__$1 = (state_17546[(2)]);
var inst_17525 = (inst_17524__$1 == null);
var inst_17526 = cljs.core.not(inst_17525);
var state_17546__$1 = (function (){var statearr_17557 = state_17546;
(statearr_17557[(8)] = inst_17524__$1);

return statearr_17557;
})();
if(inst_17526){
var statearr_17558_19093 = state_17546__$1;
(statearr_17558_19093[(1)] = (5));

} else {
var statearr_17560_19094 = state_17546__$1;
(statearr_17560_19094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (6))){
var state_17546__$1 = state_17546;
var statearr_17563_19095 = state_17546__$1;
(statearr_17563_19095[(2)] = null);

(statearr_17563_19095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (3))){
var inst_17541 = (state_17546[(2)]);
var inst_17543 = cljs.core.async.close_BANG_(out);
var state_17546__$1 = (function (){var statearr_17565 = state_17546;
(statearr_17565[(9)] = inst_17541);

return statearr_17565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17546__$1,inst_17543);
} else {
if((state_val_17547 === (2))){
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17546__$1,(4),ch);
} else {
if((state_val_17547 === (11))){
var inst_17524 = (state_17546[(8)]);
var inst_17533 = (state_17546[(2)]);
var inst_17521 = inst_17524;
var state_17546__$1 = (function (){var statearr_17572 = state_17546;
(statearr_17572[(10)] = inst_17533);

(statearr_17572[(7)] = inst_17521);

return statearr_17572;
})();
var statearr_17573_19096 = state_17546__$1;
(statearr_17573_19096[(2)] = null);

(statearr_17573_19096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (9))){
var inst_17524 = (state_17546[(8)]);
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17546__$1,(11),out,inst_17524);
} else {
if((state_val_17547 === (5))){
var inst_17524 = (state_17546[(8)]);
var inst_17521 = (state_17546[(7)]);
var inst_17528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17524,inst_17521);
var state_17546__$1 = state_17546;
if(inst_17528){
var statearr_17583_19098 = state_17546__$1;
(statearr_17583_19098[(1)] = (8));

} else {
var statearr_17584_19102 = state_17546__$1;
(statearr_17584_19102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (10))){
var inst_17536 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17587_19103 = state_17546__$1;
(statearr_17587_19103[(2)] = inst_17536);

(statearr_17587_19103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (8))){
var inst_17521 = (state_17546[(7)]);
var tmp17578 = inst_17521;
var inst_17521__$1 = tmp17578;
var state_17546__$1 = (function (){var statearr_17588 = state_17546;
(statearr_17588[(7)] = inst_17521__$1);

return statearr_17588;
})();
var statearr_17590_19120 = state_17546__$1;
(statearr_17590_19120[(2)] = null);

(statearr_17590_19120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_17592 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17592[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_17592[(1)] = (1));

return statearr_17592;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_17546){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_17546);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17593){var ex__14161__auto__ = e17593;
var statearr_17594_19123 = state_17546;
(statearr_17594_19123[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_17546[(4)]))){
var statearr_17595_19125 = state_17546;
(statearr_17595_19125[(1)] = cljs.core.first((state_17546[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19130 = state_17546;
state_17546 = G__19130;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_17546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_17546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17599 = f__14529__auto__();
(statearr_17599[(6)] = c__14528__auto___19088);

return statearr_17599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17611 = arguments.length;
switch (G__17611) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14528__auto___19152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_17659){
var state_val_17660 = (state_17659[(1)]);
if((state_val_17660 === (7))){
var inst_17655 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
var statearr_17664_19157 = state_17659__$1;
(statearr_17664_19157[(2)] = inst_17655);

(statearr_17664_19157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (1))){
var inst_17616 = (new Array(n));
var inst_17617 = inst_17616;
var inst_17618 = (0);
var state_17659__$1 = (function (){var statearr_17672 = state_17659;
(statearr_17672[(7)] = inst_17618);

(statearr_17672[(8)] = inst_17617);

return statearr_17672;
})();
var statearr_17673_19158 = state_17659__$1;
(statearr_17673_19158[(2)] = null);

(statearr_17673_19158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (4))){
var inst_17624 = (state_17659[(9)]);
var inst_17624__$1 = (state_17659[(2)]);
var inst_17625 = (inst_17624__$1 == null);
var inst_17626 = cljs.core.not(inst_17625);
var state_17659__$1 = (function (){var statearr_17681 = state_17659;
(statearr_17681[(9)] = inst_17624__$1);

return statearr_17681;
})();
if(inst_17626){
var statearr_17682_19159 = state_17659__$1;
(statearr_17682_19159[(1)] = (5));

} else {
var statearr_17683_19160 = state_17659__$1;
(statearr_17683_19160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (15))){
var inst_17649 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
var statearr_17684_19162 = state_17659__$1;
(statearr_17684_19162[(2)] = inst_17649);

(statearr_17684_19162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (13))){
var state_17659__$1 = state_17659;
var statearr_17685_19164 = state_17659__$1;
(statearr_17685_19164[(2)] = null);

(statearr_17685_19164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (6))){
var inst_17618 = (state_17659[(7)]);
var inst_17645 = (inst_17618 > (0));
var state_17659__$1 = state_17659;
if(cljs.core.truth_(inst_17645)){
var statearr_17691_19165 = state_17659__$1;
(statearr_17691_19165[(1)] = (12));

} else {
var statearr_17692_19166 = state_17659__$1;
(statearr_17692_19166[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (3))){
var inst_17657 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17659__$1,inst_17657);
} else {
if((state_val_17660 === (12))){
var inst_17617 = (state_17659[(8)]);
var inst_17647 = cljs.core.vec(inst_17617);
var state_17659__$1 = state_17659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17659__$1,(15),out,inst_17647);
} else {
if((state_val_17660 === (2))){
var state_17659__$1 = state_17659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17659__$1,(4),ch);
} else {
if((state_val_17660 === (11))){
var inst_17639 = (state_17659[(2)]);
var inst_17640 = (new Array(n));
var inst_17617 = inst_17640;
var inst_17618 = (0);
var state_17659__$1 = (function (){var statearr_17694 = state_17659;
(statearr_17694[(10)] = inst_17639);

(statearr_17694[(7)] = inst_17618);

(statearr_17694[(8)] = inst_17617);

return statearr_17694;
})();
var statearr_17695_19173 = state_17659__$1;
(statearr_17695_19173[(2)] = null);

(statearr_17695_19173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (9))){
var inst_17617 = (state_17659[(8)]);
var inst_17637 = cljs.core.vec(inst_17617);
var state_17659__$1 = state_17659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17659__$1,(11),out,inst_17637);
} else {
if((state_val_17660 === (5))){
var inst_17629 = (state_17659[(11)]);
var inst_17624 = (state_17659[(9)]);
var inst_17618 = (state_17659[(7)]);
var inst_17617 = (state_17659[(8)]);
var inst_17628 = (inst_17617[inst_17618] = inst_17624);
var inst_17629__$1 = (inst_17618 + (1));
var inst_17633 = (inst_17629__$1 < n);
var state_17659__$1 = (function (){var statearr_17697 = state_17659;
(statearr_17697[(11)] = inst_17629__$1);

(statearr_17697[(12)] = inst_17628);

return statearr_17697;
})();
if(cljs.core.truth_(inst_17633)){
var statearr_17698_19192 = state_17659__$1;
(statearr_17698_19192[(1)] = (8));

} else {
var statearr_17699_19193 = state_17659__$1;
(statearr_17699_19193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (14))){
var inst_17652 = (state_17659[(2)]);
var inst_17653 = cljs.core.async.close_BANG_(out);
var state_17659__$1 = (function (){var statearr_17701 = state_17659;
(statearr_17701[(13)] = inst_17652);

return statearr_17701;
})();
var statearr_17702_19194 = state_17659__$1;
(statearr_17702_19194[(2)] = inst_17653);

(statearr_17702_19194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (10))){
var inst_17643 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
var statearr_17703_19199 = state_17659__$1;
(statearr_17703_19199[(2)] = inst_17643);

(statearr_17703_19199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17660 === (8))){
var inst_17629 = (state_17659[(11)]);
var inst_17617 = (state_17659[(8)]);
var tmp17700 = inst_17617;
var inst_17617__$1 = tmp17700;
var inst_17618 = inst_17629;
var state_17659__$1 = (function (){var statearr_17704 = state_17659;
(statearr_17704[(7)] = inst_17618);

(statearr_17704[(8)] = inst_17617__$1);

return statearr_17704;
})();
var statearr_17705_19210 = state_17659__$1;
(statearr_17705_19210[(2)] = null);

(statearr_17705_19210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_17706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17706[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_17706[(1)] = (1));

return statearr_17706;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_17659){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_17659);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17707){var ex__14161__auto__ = e17707;
var statearr_17708_19212 = state_17659;
(statearr_17708_19212[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_17659[(4)]))){
var statearr_17709_19213 = state_17659;
(statearr_17709_19213[(1)] = cljs.core.first((state_17659[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19214 = state_17659;
state_17659 = G__19214;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_17659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_17659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17710 = f__14529__auto__();
(statearr_17710[(6)] = c__14528__auto___19152);

return statearr_17710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17715 = arguments.length;
switch (G__17715) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14528__auto___19219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14529__auto__ = (function (){var switch__14154__auto__ = (function (state_17762){
var state_val_17763 = (state_17762[(1)]);
if((state_val_17763 === (7))){
var inst_17758 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17766_19221 = state_17762__$1;
(statearr_17766_19221[(2)] = inst_17758);

(statearr_17766_19221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (1))){
var inst_17716 = [];
var inst_17717 = inst_17716;
var inst_17718 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17762__$1 = (function (){var statearr_17778 = state_17762;
(statearr_17778[(7)] = inst_17717);

(statearr_17778[(8)] = inst_17718);

return statearr_17778;
})();
var statearr_17780_19232 = state_17762__$1;
(statearr_17780_19232[(2)] = null);

(statearr_17780_19232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (4))){
var inst_17721 = (state_17762[(9)]);
var inst_17721__$1 = (state_17762[(2)]);
var inst_17722 = (inst_17721__$1 == null);
var inst_17723 = cljs.core.not(inst_17722);
var state_17762__$1 = (function (){var statearr_17784 = state_17762;
(statearr_17784[(9)] = inst_17721__$1);

return statearr_17784;
})();
if(inst_17723){
var statearr_17785_19234 = state_17762__$1;
(statearr_17785_19234[(1)] = (5));

} else {
var statearr_17786_19235 = state_17762__$1;
(statearr_17786_19235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (15))){
var inst_17717 = (state_17762[(7)]);
var inst_17750 = cljs.core.vec(inst_17717);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17762__$1,(18),out,inst_17750);
} else {
if((state_val_17763 === (13))){
var inst_17745 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17788_19237 = state_17762__$1;
(statearr_17788_19237[(2)] = inst_17745);

(statearr_17788_19237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (6))){
var inst_17717 = (state_17762[(7)]);
var inst_17747 = inst_17717.length;
var inst_17748 = (inst_17747 > (0));
var state_17762__$1 = state_17762;
if(cljs.core.truth_(inst_17748)){
var statearr_17790_19243 = state_17762__$1;
(statearr_17790_19243[(1)] = (15));

} else {
var statearr_17791_19247 = state_17762__$1;
(statearr_17791_19247[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (17))){
var inst_17755 = (state_17762[(2)]);
var inst_17756 = cljs.core.async.close_BANG_(out);
var state_17762__$1 = (function (){var statearr_17794 = state_17762;
(statearr_17794[(10)] = inst_17755);

return statearr_17794;
})();
var statearr_17799_19261 = state_17762__$1;
(statearr_17799_19261[(2)] = inst_17756);

(statearr_17799_19261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (3))){
var inst_17760 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17762__$1,inst_17760);
} else {
if((state_val_17763 === (12))){
var inst_17717 = (state_17762[(7)]);
var inst_17738 = cljs.core.vec(inst_17717);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17762__$1,(14),out,inst_17738);
} else {
if((state_val_17763 === (2))){
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17762__$1,(4),ch);
} else {
if((state_val_17763 === (11))){
var inst_17717 = (state_17762[(7)]);
var inst_17725 = (state_17762[(11)]);
var inst_17721 = (state_17762[(9)]);
var inst_17734 = inst_17717.push(inst_17721);
var tmp17805 = inst_17717;
var inst_17717__$1 = tmp17805;
var inst_17718 = inst_17725;
var state_17762__$1 = (function (){var statearr_17810 = state_17762;
(statearr_17810[(12)] = inst_17734);

(statearr_17810[(7)] = inst_17717__$1);

(statearr_17810[(8)] = inst_17718);

return statearr_17810;
})();
var statearr_17811_19305 = state_17762__$1;
(statearr_17811_19305[(2)] = null);

(statearr_17811_19305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (9))){
var inst_17718 = (state_17762[(8)]);
var inst_17729 = cljs.core.keyword_identical_QMARK_(inst_17718,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17762__$1 = state_17762;
var statearr_17815_19317 = state_17762__$1;
(statearr_17815_19317[(2)] = inst_17729);

(statearr_17815_19317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (5))){
var inst_17726 = (state_17762[(13)]);
var inst_17725 = (state_17762[(11)]);
var inst_17721 = (state_17762[(9)]);
var inst_17718 = (state_17762[(8)]);
var inst_17725__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17721) : f.call(null, inst_17721));
var inst_17726__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17725__$1,inst_17718);
var state_17762__$1 = (function (){var statearr_17816 = state_17762;
(statearr_17816[(13)] = inst_17726__$1);

(statearr_17816[(11)] = inst_17725__$1);

return statearr_17816;
})();
if(inst_17726__$1){
var statearr_17817_19318 = state_17762__$1;
(statearr_17817_19318[(1)] = (8));

} else {
var statearr_17818_19323 = state_17762__$1;
(statearr_17818_19323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (14))){
var inst_17725 = (state_17762[(11)]);
var inst_17721 = (state_17762[(9)]);
var inst_17740 = (state_17762[(2)]);
var inst_17741 = [];
var inst_17742 = inst_17741.push(inst_17721);
var inst_17717 = inst_17741;
var inst_17718 = inst_17725;
var state_17762__$1 = (function (){var statearr_17823 = state_17762;
(statearr_17823[(7)] = inst_17717);

(statearr_17823[(14)] = inst_17740);

(statearr_17823[(15)] = inst_17742);

(statearr_17823[(8)] = inst_17718);

return statearr_17823;
})();
var statearr_17828_19324 = state_17762__$1;
(statearr_17828_19324[(2)] = null);

(statearr_17828_19324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (16))){
var state_17762__$1 = state_17762;
var statearr_17833_19325 = state_17762__$1;
(statearr_17833_19325[(2)] = null);

(statearr_17833_19325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (10))){
var inst_17732 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
if(cljs.core.truth_(inst_17732)){
var statearr_17834_19326 = state_17762__$1;
(statearr_17834_19326[(1)] = (11));

} else {
var statearr_17841_19327 = state_17762__$1;
(statearr_17841_19327[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (18))){
var inst_17752 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17842_19332 = state_17762__$1;
(statearr_17842_19332[(2)] = inst_17752);

(statearr_17842_19332[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (8))){
var inst_17726 = (state_17762[(13)]);
var state_17762__$1 = state_17762;
var statearr_17843_19337 = state_17762__$1;
(statearr_17843_19337[(2)] = inst_17726);

(statearr_17843_19337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14158__auto__ = null;
var cljs$core$async$state_machine__14158__auto____0 = (function (){
var statearr_17844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17844[(0)] = cljs$core$async$state_machine__14158__auto__);

(statearr_17844[(1)] = (1));

return statearr_17844;
});
var cljs$core$async$state_machine__14158__auto____1 = (function (state_17762){
while(true){
var ret_value__14159__auto__ = (function (){try{while(true){
var result__14160__auto__ = switch__14154__auto__(state_17762);
if(cljs.core.keyword_identical_QMARK_(result__14160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14160__auto__;
}
break;
}
}catch (e17845){var ex__14161__auto__ = e17845;
var statearr_17846_19347 = state_17762;
(statearr_17846_19347[(2)] = ex__14161__auto__);


if(cljs.core.seq((state_17762[(4)]))){
var statearr_17847_19348 = state_17762;
(statearr_17847_19348[(1)] = cljs.core.first((state_17762[(4)])));

} else {
throw ex__14161__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19349 = state_17762;
state_17762 = G__19349;
continue;
} else {
return ret_value__14159__auto__;
}
break;
}
});
cljs$core$async$state_machine__14158__auto__ = function(state_17762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14158__auto____1.call(this,state_17762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14158__auto____0;
cljs$core$async$state_machine__14158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14158__auto____1;
return cljs$core$async$state_machine__14158__auto__;
})()
})();
var state__14530__auto__ = (function (){var statearr_17849 = f__14529__auto__();
(statearr_17849[(6)] = c__14528__auto___19219);

return statearr_17849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14530__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
