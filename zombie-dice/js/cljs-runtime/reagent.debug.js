goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11828__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11829__i = 0, G__11829__a = new Array(arguments.length -  0);
while (G__11829__i < G__11829__a.length) {G__11829__a[G__11829__i] = arguments[G__11829__i + 0]; ++G__11829__i;}
  args = new cljs.core.IndexedSeq(G__11829__a,0,null);
} 
return G__11828__delegate.call(this,args);};
G__11828.cljs$lang$maxFixedArity = 0;
G__11828.cljs$lang$applyTo = (function (arglist__11830){
var args = cljs.core.seq(arglist__11830);
return G__11828__delegate(args);
});
G__11828.cljs$core$IFn$_invoke$arity$variadic = G__11828__delegate;
return G__11828;
})()
);

(o.error = (function() { 
var G__11831__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11832__i = 0, G__11832__a = new Array(arguments.length -  0);
while (G__11832__i < G__11832__a.length) {G__11832__a[G__11832__i] = arguments[G__11832__i + 0]; ++G__11832__i;}
  args = new cljs.core.IndexedSeq(G__11832__a,0,null);
} 
return G__11831__delegate.call(this,args);};
G__11831.cljs$lang$maxFixedArity = 0;
G__11831.cljs$lang$applyTo = (function (arglist__11833){
var args = cljs.core.seq(arglist__11833);
return G__11831__delegate(args);
});
G__11831.cljs$core$IFn$_invoke$arity$variadic = G__11831__delegate;
return G__11831;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
