goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21264 = arguments.length;
var i__5727__auto___21265 = (0);
while(true){
if((i__5727__auto___21265 < len__5726__auto___21264)){
args__5732__auto__.push((arguments[i__5727__auto___21265]));

var G__21266 = (i__5727__auto___21265 + (1));
i__5727__auto___21265 = G__21266;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20981){
var G__20982 = cljs.core.first(seq20981);
var seq20981__$1 = cljs.core.next(seq20981);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20982,seq20981__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20984 = cljs.core.seq(sources);
var chunk__20985 = null;
var count__20986 = (0);
var i__20987 = (0);
while(true){
if((i__20987 < count__20986)){
var map__20993 = chunk__20985.cljs$core$IIndexed$_nth$arity$2(null, i__20987);
var map__20993__$1 = cljs.core.__destructure_map(map__20993);
var src = map__20993__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20995){var e_21267 = e20995;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21267);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21267.message)].join('')));
}

var G__21268 = seq__20984;
var G__21269 = chunk__20985;
var G__21270 = count__20986;
var G__21271 = (i__20987 + (1));
seq__20984 = G__21268;
chunk__20985 = G__21269;
count__20986 = G__21270;
i__20987 = G__21271;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20984);
if(temp__5804__auto__){
var seq__20984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20984__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20984__$1);
var G__21272 = cljs.core.chunk_rest(seq__20984__$1);
var G__21273 = c__5525__auto__;
var G__21274 = cljs.core.count(c__5525__auto__);
var G__21275 = (0);
seq__20984 = G__21272;
chunk__20985 = G__21273;
count__20986 = G__21274;
i__20987 = G__21275;
continue;
} else {
var map__20996 = cljs.core.first(seq__20984__$1);
var map__20996__$1 = cljs.core.__destructure_map(map__20996);
var src = map__20996__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20997){var e_21276 = e20997;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21276);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21276.message)].join('')));
}

var G__21277 = cljs.core.next(seq__20984__$1);
var G__21278 = null;
var G__21279 = (0);
var G__21280 = (0);
seq__20984 = G__21277;
chunk__20985 = G__21278;
count__20986 = G__21279;
i__20987 = G__21280;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20998 = cljs.core.seq(js_requires);
var chunk__20999 = null;
var count__21000 = (0);
var i__21001 = (0);
while(true){
if((i__21001 < count__21000)){
var js_ns = chunk__20999.cljs$core$IIndexed$_nth$arity$2(null, i__21001);
var require_str_21281 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21281);


var G__21282 = seq__20998;
var G__21283 = chunk__20999;
var G__21284 = count__21000;
var G__21285 = (i__21001 + (1));
seq__20998 = G__21282;
chunk__20999 = G__21283;
count__21000 = G__21284;
i__21001 = G__21285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20998);
if(temp__5804__auto__){
var seq__20998__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20998__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20998__$1);
var G__21286 = cljs.core.chunk_rest(seq__20998__$1);
var G__21287 = c__5525__auto__;
var G__21288 = cljs.core.count(c__5525__auto__);
var G__21289 = (0);
seq__20998 = G__21286;
chunk__20999 = G__21287;
count__21000 = G__21288;
i__21001 = G__21289;
continue;
} else {
var js_ns = cljs.core.first(seq__20998__$1);
var require_str_21290 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21290);


var G__21291 = cljs.core.next(seq__20998__$1);
var G__21292 = null;
var G__21293 = (0);
var G__21294 = (0);
seq__20998 = G__21291;
chunk__20999 = G__21292;
count__21000 = G__21293;
i__21001 = G__21294;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21003){
var map__21004 = p__21003;
var map__21004__$1 = cljs.core.__destructure_map(map__21004);
var msg = map__21004__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005(s__21006){
return (new cljs.core.LazySeq(null,(function (){
var s__21006__$1 = s__21006;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21006__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21011 = cljs.core.first(xs__6360__auto__);
var map__21011__$1 = cljs.core.__destructure_map(map__21011);
var src = map__21011__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005_$_iter__21007(s__21008){
return (new cljs.core.LazySeq(null,((function (s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info){
return (function (){
var s__21008__$1 = s__21008;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21008__$1);
if(temp__5804__auto____$1){
var s__21008__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21008__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21008__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21010 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21009 = (0);
while(true){
if((i__21009 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21009);
cljs.core.chunk_append(b__21010,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21295 = (i__21009 + (1));
i__21009 = G__21295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21010),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005_$_iter__21007(cljs.core.chunk_rest(s__21008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21010),null);
}
} else {
var warning = cljs.core.first(s__21008__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005_$_iter__21007(cljs.core.rest(s__21008__$2)));
}
} else {
return null;
}
break;
}
});})(s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info))
,null,null));
});})(s__21006__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21004,map__21004__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21005(cljs.core.rest(s__21006__$1)));
} else {
var G__21296 = cljs.core.rest(s__21006__$1);
s__21006__$1 = G__21296;
continue;
}
} else {
var G__21297 = cljs.core.rest(s__21006__$1);
s__21006__$1 = G__21297;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21012_21298 = cljs.core.seq(warnings);
var chunk__21013_21299 = null;
var count__21014_21300 = (0);
var i__21015_21301 = (0);
while(true){
if((i__21015_21301 < count__21014_21300)){
var map__21018_21302 = chunk__21013_21299.cljs$core$IIndexed$_nth$arity$2(null, i__21015_21301);
var map__21018_21303__$1 = cljs.core.__destructure_map(map__21018_21302);
var w_21304 = map__21018_21303__$1;
var msg_21305__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21303__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21303__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21303__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018_21303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21308)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21306),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21307),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21305__$1)].join(''));


var G__21309 = seq__21012_21298;
var G__21310 = chunk__21013_21299;
var G__21311 = count__21014_21300;
var G__21312 = (i__21015_21301 + (1));
seq__21012_21298 = G__21309;
chunk__21013_21299 = G__21310;
count__21014_21300 = G__21311;
i__21015_21301 = G__21312;
continue;
} else {
var temp__5804__auto___21313 = cljs.core.seq(seq__21012_21298);
if(temp__5804__auto___21313){
var seq__21012_21314__$1 = temp__5804__auto___21313;
if(cljs.core.chunked_seq_QMARK_(seq__21012_21314__$1)){
var c__5525__auto___21315 = cljs.core.chunk_first(seq__21012_21314__$1);
var G__21316 = cljs.core.chunk_rest(seq__21012_21314__$1);
var G__21317 = c__5525__auto___21315;
var G__21318 = cljs.core.count(c__5525__auto___21315);
var G__21319 = (0);
seq__21012_21298 = G__21316;
chunk__21013_21299 = G__21317;
count__21014_21300 = G__21318;
i__21015_21301 = G__21319;
continue;
} else {
var map__21019_21320 = cljs.core.first(seq__21012_21314__$1);
var map__21019_21321__$1 = cljs.core.__destructure_map(map__21019_21320);
var w_21322 = map__21019_21321__$1;
var msg_21323__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21321__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21321__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21321__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21321__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21326)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21324),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21325),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21323__$1)].join(''));


var G__21327 = cljs.core.next(seq__21012_21314__$1);
var G__21328 = null;
var G__21329 = (0);
var G__21330 = (0);
seq__21012_21298 = G__21327;
chunk__21013_21299 = G__21328;
count__21014_21300 = G__21329;
i__21015_21301 = G__21330;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21002_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21002_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21021 = node_uri;
G__21021.setQuery(null);

G__21021.setPath(new$);

return G__21021;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21022){
var map__21023 = p__21022;
var map__21023__$1 = cljs.core.__destructure_map(map__21023);
var msg = map__21023__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21024 = cljs.core.seq(updates);
var chunk__21026 = null;
var count__21027 = (0);
var i__21028 = (0);
while(true){
if((i__21028 < count__21027)){
var path = chunk__21026.cljs$core$IIndexed$_nth$arity$2(null, i__21028);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21138_21331 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21142_21332 = null;
var count__21143_21333 = (0);
var i__21144_21334 = (0);
while(true){
if((i__21144_21334 < count__21143_21333)){
var node_21335 = chunk__21142_21332.cljs$core$IIndexed$_nth$arity$2(null, i__21144_21334);
if(cljs.core.not(node_21335.shadow$old)){
var path_match_21336 = shadow.cljs.devtools.client.browser.match_paths(node_21335.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21336)){
var new_link_21337 = (function (){var G__21170 = node_21335.cloneNode(true);
G__21170.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21336),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21170;
})();
(node_21335.shadow$old = true);

(new_link_21337.onload = ((function (seq__21138_21331,chunk__21142_21332,count__21143_21333,i__21144_21334,seq__21024,chunk__21026,count__21027,i__21028,new_link_21337,path_match_21336,node_21335,path,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21171_21338 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21173_21339 = null;
var count__21174_21340 = (0);
var i__21175_21341 = (0);
while(true){
if((i__21175_21341 < count__21174_21340)){
var map__21179_21342 = chunk__21173_21339.cljs$core$IIndexed$_nth$arity$2(null, i__21175_21341);
var map__21179_21343__$1 = cljs.core.__destructure_map(map__21179_21342);
var task_21344 = map__21179_21343__$1;
var fn_str_21345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179_21343__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179_21343__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21347 = goog.getObjectByName(fn_str_21345,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21346)].join(''));

(fn_obj_21347.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21347.cljs$core$IFn$_invoke$arity$2(path,new_link_21337) : fn_obj_21347.call(null, path,new_link_21337));


var G__21348 = seq__21171_21338;
var G__21349 = chunk__21173_21339;
var G__21350 = count__21174_21340;
var G__21351 = (i__21175_21341 + (1));
seq__21171_21338 = G__21348;
chunk__21173_21339 = G__21349;
count__21174_21340 = G__21350;
i__21175_21341 = G__21351;
continue;
} else {
var temp__5804__auto___21352 = cljs.core.seq(seq__21171_21338);
if(temp__5804__auto___21352){
var seq__21171_21353__$1 = temp__5804__auto___21352;
if(cljs.core.chunked_seq_QMARK_(seq__21171_21353__$1)){
var c__5525__auto___21354 = cljs.core.chunk_first(seq__21171_21353__$1);
var G__21355 = cljs.core.chunk_rest(seq__21171_21353__$1);
var G__21356 = c__5525__auto___21354;
var G__21357 = cljs.core.count(c__5525__auto___21354);
var G__21358 = (0);
seq__21171_21338 = G__21355;
chunk__21173_21339 = G__21356;
count__21174_21340 = G__21357;
i__21175_21341 = G__21358;
continue;
} else {
var map__21180_21359 = cljs.core.first(seq__21171_21353__$1);
var map__21180_21360__$1 = cljs.core.__destructure_map(map__21180_21359);
var task_21361 = map__21180_21360__$1;
var fn_str_21362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21360__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21360__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21364 = goog.getObjectByName(fn_str_21362,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21363)].join(''));

(fn_obj_21364.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21364.cljs$core$IFn$_invoke$arity$2(path,new_link_21337) : fn_obj_21364.call(null, path,new_link_21337));


var G__21365 = cljs.core.next(seq__21171_21353__$1);
var G__21366 = null;
var G__21367 = (0);
var G__21368 = (0);
seq__21171_21338 = G__21365;
chunk__21173_21339 = G__21366;
count__21174_21340 = G__21367;
i__21175_21341 = G__21368;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21335);
});})(seq__21138_21331,chunk__21142_21332,count__21143_21333,i__21144_21334,seq__21024,chunk__21026,count__21027,i__21028,new_link_21337,path_match_21336,node_21335,path,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21336], 0));

goog.dom.insertSiblingAfter(new_link_21337,node_21335);


var G__21369 = seq__21138_21331;
var G__21370 = chunk__21142_21332;
var G__21371 = count__21143_21333;
var G__21372 = (i__21144_21334 + (1));
seq__21138_21331 = G__21369;
chunk__21142_21332 = G__21370;
count__21143_21333 = G__21371;
i__21144_21334 = G__21372;
continue;
} else {
var G__21373 = seq__21138_21331;
var G__21374 = chunk__21142_21332;
var G__21375 = count__21143_21333;
var G__21376 = (i__21144_21334 + (1));
seq__21138_21331 = G__21373;
chunk__21142_21332 = G__21374;
count__21143_21333 = G__21375;
i__21144_21334 = G__21376;
continue;
}
} else {
var G__21377 = seq__21138_21331;
var G__21378 = chunk__21142_21332;
var G__21379 = count__21143_21333;
var G__21380 = (i__21144_21334 + (1));
seq__21138_21331 = G__21377;
chunk__21142_21332 = G__21378;
count__21143_21333 = G__21379;
i__21144_21334 = G__21380;
continue;
}
} else {
var temp__5804__auto___21381 = cljs.core.seq(seq__21138_21331);
if(temp__5804__auto___21381){
var seq__21138_21382__$1 = temp__5804__auto___21381;
if(cljs.core.chunked_seq_QMARK_(seq__21138_21382__$1)){
var c__5525__auto___21383 = cljs.core.chunk_first(seq__21138_21382__$1);
var G__21384 = cljs.core.chunk_rest(seq__21138_21382__$1);
var G__21385 = c__5525__auto___21383;
var G__21386 = cljs.core.count(c__5525__auto___21383);
var G__21387 = (0);
seq__21138_21331 = G__21384;
chunk__21142_21332 = G__21385;
count__21143_21333 = G__21386;
i__21144_21334 = G__21387;
continue;
} else {
var node_21388 = cljs.core.first(seq__21138_21382__$1);
if(cljs.core.not(node_21388.shadow$old)){
var path_match_21389 = shadow.cljs.devtools.client.browser.match_paths(node_21388.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21389)){
var new_link_21390 = (function (){var G__21181 = node_21388.cloneNode(true);
G__21181.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21389),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21181;
})();
(node_21388.shadow$old = true);

(new_link_21390.onload = ((function (seq__21138_21331,chunk__21142_21332,count__21143_21333,i__21144_21334,seq__21024,chunk__21026,count__21027,i__21028,new_link_21390,path_match_21389,node_21388,seq__21138_21382__$1,temp__5804__auto___21381,path,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21182_21391 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21184_21392 = null;
var count__21185_21393 = (0);
var i__21186_21394 = (0);
while(true){
if((i__21186_21394 < count__21185_21393)){
var map__21190_21395 = chunk__21184_21392.cljs$core$IIndexed$_nth$arity$2(null, i__21186_21394);
var map__21190_21396__$1 = cljs.core.__destructure_map(map__21190_21395);
var task_21397 = map__21190_21396__$1;
var fn_str_21398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21190_21396__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21190_21396__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21400 = goog.getObjectByName(fn_str_21398,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21399)].join(''));

(fn_obj_21400.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21400.cljs$core$IFn$_invoke$arity$2(path,new_link_21390) : fn_obj_21400.call(null, path,new_link_21390));


var G__21401 = seq__21182_21391;
var G__21402 = chunk__21184_21392;
var G__21403 = count__21185_21393;
var G__21404 = (i__21186_21394 + (1));
seq__21182_21391 = G__21401;
chunk__21184_21392 = G__21402;
count__21185_21393 = G__21403;
i__21186_21394 = G__21404;
continue;
} else {
var temp__5804__auto___21405__$1 = cljs.core.seq(seq__21182_21391);
if(temp__5804__auto___21405__$1){
var seq__21182_21406__$1 = temp__5804__auto___21405__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21182_21406__$1)){
var c__5525__auto___21407 = cljs.core.chunk_first(seq__21182_21406__$1);
var G__21408 = cljs.core.chunk_rest(seq__21182_21406__$1);
var G__21409 = c__5525__auto___21407;
var G__21410 = cljs.core.count(c__5525__auto___21407);
var G__21411 = (0);
seq__21182_21391 = G__21408;
chunk__21184_21392 = G__21409;
count__21185_21393 = G__21410;
i__21186_21394 = G__21411;
continue;
} else {
var map__21191_21412 = cljs.core.first(seq__21182_21406__$1);
var map__21191_21413__$1 = cljs.core.__destructure_map(map__21191_21412);
var task_21414 = map__21191_21413__$1;
var fn_str_21415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191_21413__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191_21413__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21417 = goog.getObjectByName(fn_str_21415,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21416)].join(''));

(fn_obj_21417.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21417.cljs$core$IFn$_invoke$arity$2(path,new_link_21390) : fn_obj_21417.call(null, path,new_link_21390));


var G__21418 = cljs.core.next(seq__21182_21406__$1);
var G__21419 = null;
var G__21420 = (0);
var G__21421 = (0);
seq__21182_21391 = G__21418;
chunk__21184_21392 = G__21419;
count__21185_21393 = G__21420;
i__21186_21394 = G__21421;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21388);
});})(seq__21138_21331,chunk__21142_21332,count__21143_21333,i__21144_21334,seq__21024,chunk__21026,count__21027,i__21028,new_link_21390,path_match_21389,node_21388,seq__21138_21382__$1,temp__5804__auto___21381,path,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21389], 0));

goog.dom.insertSiblingAfter(new_link_21390,node_21388);


var G__21422 = cljs.core.next(seq__21138_21382__$1);
var G__21423 = null;
var G__21424 = (0);
var G__21425 = (0);
seq__21138_21331 = G__21422;
chunk__21142_21332 = G__21423;
count__21143_21333 = G__21424;
i__21144_21334 = G__21425;
continue;
} else {
var G__21426 = cljs.core.next(seq__21138_21382__$1);
var G__21427 = null;
var G__21428 = (0);
var G__21429 = (0);
seq__21138_21331 = G__21426;
chunk__21142_21332 = G__21427;
count__21143_21333 = G__21428;
i__21144_21334 = G__21429;
continue;
}
} else {
var G__21430 = cljs.core.next(seq__21138_21382__$1);
var G__21431 = null;
var G__21432 = (0);
var G__21433 = (0);
seq__21138_21331 = G__21430;
chunk__21142_21332 = G__21431;
count__21143_21333 = G__21432;
i__21144_21334 = G__21433;
continue;
}
}
} else {
}
}
break;
}


var G__21434 = seq__21024;
var G__21435 = chunk__21026;
var G__21436 = count__21027;
var G__21437 = (i__21028 + (1));
seq__21024 = G__21434;
chunk__21026 = G__21435;
count__21027 = G__21436;
i__21028 = G__21437;
continue;
} else {
var G__21438 = seq__21024;
var G__21439 = chunk__21026;
var G__21440 = count__21027;
var G__21441 = (i__21028 + (1));
seq__21024 = G__21438;
chunk__21026 = G__21439;
count__21027 = G__21440;
i__21028 = G__21441;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21024);
if(temp__5804__auto__){
var seq__21024__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21024__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21024__$1);
var G__21442 = cljs.core.chunk_rest(seq__21024__$1);
var G__21443 = c__5525__auto__;
var G__21444 = cljs.core.count(c__5525__auto__);
var G__21445 = (0);
seq__21024 = G__21442;
chunk__21026 = G__21443;
count__21027 = G__21444;
i__21028 = G__21445;
continue;
} else {
var path = cljs.core.first(seq__21024__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21192_21446 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21196_21447 = null;
var count__21197_21448 = (0);
var i__21198_21449 = (0);
while(true){
if((i__21198_21449 < count__21197_21448)){
var node_21450 = chunk__21196_21447.cljs$core$IIndexed$_nth$arity$2(null, i__21198_21449);
if(cljs.core.not(node_21450.shadow$old)){
var path_match_21451 = shadow.cljs.devtools.client.browser.match_paths(node_21450.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21451)){
var new_link_21452 = (function (){var G__21224 = node_21450.cloneNode(true);
G__21224.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21451),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21224;
})();
(node_21450.shadow$old = true);

(new_link_21452.onload = ((function (seq__21192_21446,chunk__21196_21447,count__21197_21448,i__21198_21449,seq__21024,chunk__21026,count__21027,i__21028,new_link_21452,path_match_21451,node_21450,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21225_21453 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21227_21454 = null;
var count__21228_21455 = (0);
var i__21229_21456 = (0);
while(true){
if((i__21229_21456 < count__21228_21455)){
var map__21233_21457 = chunk__21227_21454.cljs$core$IIndexed$_nth$arity$2(null, i__21229_21456);
var map__21233_21458__$1 = cljs.core.__destructure_map(map__21233_21457);
var task_21459 = map__21233_21458__$1;
var fn_str_21460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21233_21458__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21233_21458__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21462 = goog.getObjectByName(fn_str_21460,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21461)].join(''));

(fn_obj_21462.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21462.cljs$core$IFn$_invoke$arity$2(path,new_link_21452) : fn_obj_21462.call(null, path,new_link_21452));


var G__21463 = seq__21225_21453;
var G__21464 = chunk__21227_21454;
var G__21465 = count__21228_21455;
var G__21466 = (i__21229_21456 + (1));
seq__21225_21453 = G__21463;
chunk__21227_21454 = G__21464;
count__21228_21455 = G__21465;
i__21229_21456 = G__21466;
continue;
} else {
var temp__5804__auto___21467__$1 = cljs.core.seq(seq__21225_21453);
if(temp__5804__auto___21467__$1){
var seq__21225_21468__$1 = temp__5804__auto___21467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21225_21468__$1)){
var c__5525__auto___21469 = cljs.core.chunk_first(seq__21225_21468__$1);
var G__21470 = cljs.core.chunk_rest(seq__21225_21468__$1);
var G__21471 = c__5525__auto___21469;
var G__21472 = cljs.core.count(c__5525__auto___21469);
var G__21473 = (0);
seq__21225_21453 = G__21470;
chunk__21227_21454 = G__21471;
count__21228_21455 = G__21472;
i__21229_21456 = G__21473;
continue;
} else {
var map__21234_21474 = cljs.core.first(seq__21225_21468__$1);
var map__21234_21475__$1 = cljs.core.__destructure_map(map__21234_21474);
var task_21476 = map__21234_21475__$1;
var fn_str_21477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21234_21475__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21234_21475__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21479 = goog.getObjectByName(fn_str_21477,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21478)].join(''));

(fn_obj_21479.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21479.cljs$core$IFn$_invoke$arity$2(path,new_link_21452) : fn_obj_21479.call(null, path,new_link_21452));


var G__21480 = cljs.core.next(seq__21225_21468__$1);
var G__21481 = null;
var G__21482 = (0);
var G__21483 = (0);
seq__21225_21453 = G__21480;
chunk__21227_21454 = G__21481;
count__21228_21455 = G__21482;
i__21229_21456 = G__21483;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21450);
});})(seq__21192_21446,chunk__21196_21447,count__21197_21448,i__21198_21449,seq__21024,chunk__21026,count__21027,i__21028,new_link_21452,path_match_21451,node_21450,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21451], 0));

goog.dom.insertSiblingAfter(new_link_21452,node_21450);


var G__21484 = seq__21192_21446;
var G__21485 = chunk__21196_21447;
var G__21486 = count__21197_21448;
var G__21487 = (i__21198_21449 + (1));
seq__21192_21446 = G__21484;
chunk__21196_21447 = G__21485;
count__21197_21448 = G__21486;
i__21198_21449 = G__21487;
continue;
} else {
var G__21488 = seq__21192_21446;
var G__21489 = chunk__21196_21447;
var G__21490 = count__21197_21448;
var G__21491 = (i__21198_21449 + (1));
seq__21192_21446 = G__21488;
chunk__21196_21447 = G__21489;
count__21197_21448 = G__21490;
i__21198_21449 = G__21491;
continue;
}
} else {
var G__21492 = seq__21192_21446;
var G__21493 = chunk__21196_21447;
var G__21494 = count__21197_21448;
var G__21495 = (i__21198_21449 + (1));
seq__21192_21446 = G__21492;
chunk__21196_21447 = G__21493;
count__21197_21448 = G__21494;
i__21198_21449 = G__21495;
continue;
}
} else {
var temp__5804__auto___21496__$1 = cljs.core.seq(seq__21192_21446);
if(temp__5804__auto___21496__$1){
var seq__21192_21497__$1 = temp__5804__auto___21496__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21192_21497__$1)){
var c__5525__auto___21498 = cljs.core.chunk_first(seq__21192_21497__$1);
var G__21499 = cljs.core.chunk_rest(seq__21192_21497__$1);
var G__21500 = c__5525__auto___21498;
var G__21501 = cljs.core.count(c__5525__auto___21498);
var G__21502 = (0);
seq__21192_21446 = G__21499;
chunk__21196_21447 = G__21500;
count__21197_21448 = G__21501;
i__21198_21449 = G__21502;
continue;
} else {
var node_21503 = cljs.core.first(seq__21192_21497__$1);
if(cljs.core.not(node_21503.shadow$old)){
var path_match_21504 = shadow.cljs.devtools.client.browser.match_paths(node_21503.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21504)){
var new_link_21505 = (function (){var G__21235 = node_21503.cloneNode(true);
G__21235.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21504),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21235;
})();
(node_21503.shadow$old = true);

(new_link_21505.onload = ((function (seq__21192_21446,chunk__21196_21447,count__21197_21448,i__21198_21449,seq__21024,chunk__21026,count__21027,i__21028,new_link_21505,path_match_21504,node_21503,seq__21192_21497__$1,temp__5804__auto___21496__$1,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21236_21506 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21238_21507 = null;
var count__21239_21508 = (0);
var i__21240_21509 = (0);
while(true){
if((i__21240_21509 < count__21239_21508)){
var map__21244_21510 = chunk__21238_21507.cljs$core$IIndexed$_nth$arity$2(null, i__21240_21509);
var map__21244_21511__$1 = cljs.core.__destructure_map(map__21244_21510);
var task_21512 = map__21244_21511__$1;
var fn_str_21513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244_21511__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244_21511__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21515 = goog.getObjectByName(fn_str_21513,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21514)].join(''));

(fn_obj_21515.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21515.cljs$core$IFn$_invoke$arity$2(path,new_link_21505) : fn_obj_21515.call(null, path,new_link_21505));


var G__21516 = seq__21236_21506;
var G__21517 = chunk__21238_21507;
var G__21518 = count__21239_21508;
var G__21519 = (i__21240_21509 + (1));
seq__21236_21506 = G__21516;
chunk__21238_21507 = G__21517;
count__21239_21508 = G__21518;
i__21240_21509 = G__21519;
continue;
} else {
var temp__5804__auto___21520__$2 = cljs.core.seq(seq__21236_21506);
if(temp__5804__auto___21520__$2){
var seq__21236_21521__$1 = temp__5804__auto___21520__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21236_21521__$1)){
var c__5525__auto___21522 = cljs.core.chunk_first(seq__21236_21521__$1);
var G__21523 = cljs.core.chunk_rest(seq__21236_21521__$1);
var G__21524 = c__5525__auto___21522;
var G__21525 = cljs.core.count(c__5525__auto___21522);
var G__21526 = (0);
seq__21236_21506 = G__21523;
chunk__21238_21507 = G__21524;
count__21239_21508 = G__21525;
i__21240_21509 = G__21526;
continue;
} else {
var map__21245_21527 = cljs.core.first(seq__21236_21521__$1);
var map__21245_21528__$1 = cljs.core.__destructure_map(map__21245_21527);
var task_21529 = map__21245_21528__$1;
var fn_str_21530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21528__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21528__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21532 = goog.getObjectByName(fn_str_21530,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21531)].join(''));

(fn_obj_21532.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21532.cljs$core$IFn$_invoke$arity$2(path,new_link_21505) : fn_obj_21532.call(null, path,new_link_21505));


var G__21533 = cljs.core.next(seq__21236_21521__$1);
var G__21534 = null;
var G__21535 = (0);
var G__21536 = (0);
seq__21236_21506 = G__21533;
chunk__21238_21507 = G__21534;
count__21239_21508 = G__21535;
i__21240_21509 = G__21536;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21503);
});})(seq__21192_21446,chunk__21196_21447,count__21197_21448,i__21198_21449,seq__21024,chunk__21026,count__21027,i__21028,new_link_21505,path_match_21504,node_21503,seq__21192_21497__$1,temp__5804__auto___21496__$1,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21504], 0));

goog.dom.insertSiblingAfter(new_link_21505,node_21503);


var G__21537 = cljs.core.next(seq__21192_21497__$1);
var G__21538 = null;
var G__21539 = (0);
var G__21540 = (0);
seq__21192_21446 = G__21537;
chunk__21196_21447 = G__21538;
count__21197_21448 = G__21539;
i__21198_21449 = G__21540;
continue;
} else {
var G__21541 = cljs.core.next(seq__21192_21497__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__21192_21446 = G__21541;
chunk__21196_21447 = G__21542;
count__21197_21448 = G__21543;
i__21198_21449 = G__21544;
continue;
}
} else {
var G__21545 = cljs.core.next(seq__21192_21497__$1);
var G__21546 = null;
var G__21547 = (0);
var G__21548 = (0);
seq__21192_21446 = G__21545;
chunk__21196_21447 = G__21546;
count__21197_21448 = G__21547;
i__21198_21449 = G__21548;
continue;
}
}
} else {
}
}
break;
}


var G__21549 = cljs.core.next(seq__21024__$1);
var G__21550 = null;
var G__21551 = (0);
var G__21552 = (0);
seq__21024 = G__21549;
chunk__21026 = G__21550;
count__21027 = G__21551;
i__21028 = G__21552;
continue;
} else {
var G__21553 = cljs.core.next(seq__21024__$1);
var G__21554 = null;
var G__21555 = (0);
var G__21556 = (0);
seq__21024 = G__21553;
chunk__21026 = G__21554;
count__21027 = G__21555;
i__21028 = G__21556;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21246){
var map__21247 = p__21246;
var map__21247__$1 = cljs.core.__destructure_map(map__21247);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21248,done,error){
var map__21249 = p__21248;
var map__21249__$1 = cljs.core.__destructure_map(map__21249);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21250,done,error){
var map__21251 = p__21250;
var map__21251__$1 = cljs.core.__destructure_map(map__21251);
var msg = map__21251__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21252){
var map__21253 = p__21252;
var map__21253__$1 = cljs.core.__destructure_map(map__21253);
var src = map__21253__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21253__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21254 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21254) : done.call(null, G__21254));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21255){
var map__21256 = p__21255;
var map__21256__$1 = cljs.core.__destructure_map(map__21256);
var msg__$1 = map__21256__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21256__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21257){var ex = e21257;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21258){
var map__21259 = p__21258;
var map__21259__$1 = cljs.core.__destructure_map(map__21259);
var env = map__21259__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21260){
var map__21261 = p__21260;
var map__21261__$1 = cljs.core.__destructure_map(map__21261);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21262){
var map__21263 = p__21262;
var map__21263__$1 = cljs.core.__destructure_map(map__21263);
var svc = map__21263__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21263__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
