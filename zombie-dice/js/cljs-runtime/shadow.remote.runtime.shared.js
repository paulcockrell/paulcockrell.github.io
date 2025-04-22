goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14428){
var map__14429 = p__14428;
var map__14429__$1 = cljs.core.__destructure_map(map__14429);
var runtime = map__14429__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14429__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14784 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14784)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14433 = runtime;
var G__14434 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14784);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14433,G__14434) : shadow.remote.runtime.shared.process.call(null, G__14433,G__14434));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14436,res){
var map__14437 = p__14436;
var map__14437__$1 = cljs.core.__destructure_map(map__14437);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14437__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14437__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14439 = res;
var G__14439__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14439,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14439);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14439__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14439__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14444 = arguments.length;
switch (G__14444) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14450,msg,handlers,timeout_after_ms){
var map__14459 = p__14450;
var map__14459__$1 = cljs.core.__destructure_map(map__14459);
var runtime = map__14459__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14459__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14819 = arguments.length;
var i__5727__auto___14820 = (0);
while(true){
if((i__5727__auto___14820 < len__5726__auto___14819)){
args__5732__auto__.push((arguments[i__5727__auto___14820]));

var G__14821 = (i__5727__auto___14820 + (1));
i__5727__auto___14820 = G__14821;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14475,ev,args){
var map__14476 = p__14475;
var map__14476__$1 = cljs.core.__destructure_map(map__14476);
var runtime = map__14476__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14476__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14477 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14480 = null;
var count__14481 = (0);
var i__14482 = (0);
while(true){
if((i__14482 < count__14481)){
var ext = chunk__14480.cljs$core$IIndexed$_nth$arity$2(null, i__14482);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14825 = seq__14477;
var G__14826 = chunk__14480;
var G__14827 = count__14481;
var G__14828 = (i__14482 + (1));
seq__14477 = G__14825;
chunk__14480 = G__14826;
count__14481 = G__14827;
i__14482 = G__14828;
continue;
} else {
var G__14829 = seq__14477;
var G__14830 = chunk__14480;
var G__14831 = count__14481;
var G__14832 = (i__14482 + (1));
seq__14477 = G__14829;
chunk__14480 = G__14830;
count__14481 = G__14831;
i__14482 = G__14832;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14477);
if(temp__5804__auto__){
var seq__14477__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14477__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14477__$1);
var G__14834 = cljs.core.chunk_rest(seq__14477__$1);
var G__14835 = c__5525__auto__;
var G__14836 = cljs.core.count(c__5525__auto__);
var G__14837 = (0);
seq__14477 = G__14834;
chunk__14480 = G__14835;
count__14481 = G__14836;
i__14482 = G__14837;
continue;
} else {
var ext = cljs.core.first(seq__14477__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14843 = cljs.core.next(seq__14477__$1);
var G__14844 = null;
var G__14845 = (0);
var G__14846 = (0);
seq__14477 = G__14843;
chunk__14480 = G__14844;
count__14481 = G__14845;
i__14482 = G__14846;
continue;
} else {
var G__14847 = cljs.core.next(seq__14477__$1);
var G__14848 = null;
var G__14849 = (0);
var G__14850 = (0);
seq__14477 = G__14847;
chunk__14480 = G__14848;
count__14481 = G__14849;
i__14482 = G__14850;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14465){
var G__14466 = cljs.core.first(seq14465);
var seq14465__$1 = cljs.core.next(seq14465);
var G__14467 = cljs.core.first(seq14465__$1);
var seq14465__$2 = cljs.core.next(seq14465__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14466,G__14467,seq14465__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14520,p__14521){
var map__14523 = p__14520;
var map__14523__$1 = cljs.core.__destructure_map(map__14523);
var runtime = map__14523__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14523__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14525 = p__14521;
var map__14525__$1 = cljs.core.__destructure_map(map__14525);
var msg = map__14525__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14525__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14527 = cljs.core.deref(state_ref);
var map__14527__$1 = cljs.core.__destructure_map(map__14527);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14527__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14527__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14533,msg){
var map__14534 = p__14533;
var map__14534__$1 = cljs.core.__destructure_map(map__14534);
var runtime = map__14534__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14534__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14543,key,p__14544){
var map__14550 = p__14543;
var map__14550__$1 = cljs.core.__destructure_map(map__14550);
var state = map__14550__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14550__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14551 = p__14544;
var map__14551__$1 = cljs.core.__destructure_map(map__14551);
var spec = map__14551__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14551__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14551__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14577,key,spec){
var map__14578 = p__14577;
var map__14578__$1 = cljs.core.__destructure_map(map__14578);
var runtime = map__14578__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14578__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14881 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14881 == null)){
} else {
var on_welcome_14882 = temp__5808__auto___14881;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14882.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14882.cljs$core$IFn$_invoke$arity$0() : on_welcome_14882.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14586_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14586_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14587_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14587_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14588_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14588_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14589_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14589_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14590_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14590_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14596,key){
var map__14597 = p__14596;
var map__14597__$1 = cljs.core.__destructure_map(map__14597);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14597__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14610,msg){
var map__14612 = p__14610;
var map__14612__$1 = cljs.core.__destructure_map(map__14612);
var runtime = map__14612__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14612__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14649,p__14650){
var map__14653 = p__14649;
var map__14653__$1 = cljs.core.__destructure_map(map__14653);
var runtime = map__14653__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14653__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14654 = p__14650;
var map__14654__$1 = cljs.core.__destructure_map(map__14654);
var msg = map__14654__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14654__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14654__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14724 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14726 = null;
var count__14727 = (0);
var i__14728 = (0);
while(true){
if((i__14728 < count__14727)){
var map__14750 = chunk__14726.cljs$core$IIndexed$_nth$arity$2(null, i__14728);
var map__14750__$1 = cljs.core.__destructure_map(map__14750);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14750__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14915 = seq__14724;
var G__14916 = chunk__14726;
var G__14917 = count__14727;
var G__14918 = (i__14728 + (1));
seq__14724 = G__14915;
chunk__14726 = G__14916;
count__14727 = G__14917;
i__14728 = G__14918;
continue;
} else {
var G__14919 = seq__14724;
var G__14920 = chunk__14726;
var G__14921 = count__14727;
var G__14922 = (i__14728 + (1));
seq__14724 = G__14919;
chunk__14726 = G__14920;
count__14727 = G__14921;
i__14728 = G__14922;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14724);
if(temp__5804__auto__){
var seq__14724__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14724__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14724__$1);
var G__14929 = cljs.core.chunk_rest(seq__14724__$1);
var G__14930 = c__5525__auto__;
var G__14931 = cljs.core.count(c__5525__auto__);
var G__14932 = (0);
seq__14724 = G__14929;
chunk__14726 = G__14930;
count__14727 = G__14931;
i__14728 = G__14932;
continue;
} else {
var map__14751 = cljs.core.first(seq__14724__$1);
var map__14751__$1 = cljs.core.__destructure_map(map__14751);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14751__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14933 = cljs.core.next(seq__14724__$1);
var G__14934 = null;
var G__14935 = (0);
var G__14936 = (0);
seq__14724 = G__14933;
chunk__14726 = G__14934;
count__14727 = G__14935;
i__14728 = G__14936;
continue;
} else {
var G__14938 = cljs.core.next(seq__14724__$1);
var G__14939 = null;
var G__14940 = (0);
var G__14941 = (0);
seq__14724 = G__14938;
chunk__14726 = G__14939;
count__14727 = G__14940;
i__14728 = G__14941;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
