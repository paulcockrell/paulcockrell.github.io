goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__12172 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12173 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12173);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__12175 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12176 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12176);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12175);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12172);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__12188 = arguments.length;
switch (G__12188) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__12195 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12195,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12195,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12209_12230 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__12210_12231 = null;
var count__12211_12232 = (0);
var i__12212_12233 = (0);
while(true){
if((i__12212_12233 < count__12211_12232)){
var vec__12219_12234 = chunk__12210_12231.cljs$core$IIndexed$_nth$arity$2(null, i__12212_12233);
var container_12235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12219_12234,(0),null);
var comp_12236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12219_12234,(1),null);
reagent.dom.re_render_component(comp_12236,container_12235);


var G__12237 = seq__12209_12230;
var G__12238 = chunk__12210_12231;
var G__12239 = count__12211_12232;
var G__12240 = (i__12212_12233 + (1));
seq__12209_12230 = G__12237;
chunk__12210_12231 = G__12238;
count__12211_12232 = G__12239;
i__12212_12233 = G__12240;
continue;
} else {
var temp__5804__auto___12241 = cljs.core.seq(seq__12209_12230);
if(temp__5804__auto___12241){
var seq__12209_12242__$1 = temp__5804__auto___12241;
if(cljs.core.chunked_seq_QMARK_(seq__12209_12242__$1)){
var c__5525__auto___12243 = cljs.core.chunk_first(seq__12209_12242__$1);
var G__12244 = cljs.core.chunk_rest(seq__12209_12242__$1);
var G__12246 = c__5525__auto___12243;
var G__12247 = cljs.core.count(c__5525__auto___12243);
var G__12248 = (0);
seq__12209_12230 = G__12244;
chunk__12210_12231 = G__12246;
count__12211_12232 = G__12247;
i__12212_12233 = G__12248;
continue;
} else {
var vec__12222_12249 = cljs.core.first(seq__12209_12242__$1);
var container_12250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12222_12249,(0),null);
var comp_12251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12222_12249,(1),null);
reagent.dom.re_render_component(comp_12251,container_12250);


var G__12252 = cljs.core.next(seq__12209_12242__$1);
var G__12253 = null;
var G__12254 = (0);
var G__12255 = (0);
seq__12209_12230 = G__12252;
chunk__12210_12231 = G__12253;
count__12211_12232 = G__12254;
i__12212_12233 = G__12255;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
