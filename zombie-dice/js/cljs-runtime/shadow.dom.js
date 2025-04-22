goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12673 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12673(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12675 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12675(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11699 = coll;
var G__11700 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11699,G__11700) : shadow.dom.lazy_native_coll_seq.call(null, G__11699,G__11700));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11712 = arguments.length;
switch (G__11712) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11717 = arguments.length;
switch (G__11717) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11719 = arguments.length;
switch (G__11719) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11722 = arguments.length;
switch (G__11722) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11738 = arguments.length;
switch (G__11738) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11746 = arguments.length;
switch (G__11746) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11751){if((e11751 instanceof Object)){
var e = e11751;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11751;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11764 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11765 = null;
var count__11766 = (0);
var i__11767 = (0);
while(true){
if((i__11767 < count__11766)){
var el = chunk__11765.cljs$core$IIndexed$_nth$arity$2(null, i__11767);
var handler_12724__$1 = ((function (seq__11764,chunk__11765,count__11766,i__11767,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11764,chunk__11765,count__11766,i__11767,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12724__$1);


var G__12727 = seq__11764;
var G__12728 = chunk__11765;
var G__12729 = count__11766;
var G__12730 = (i__11767 + (1));
seq__11764 = G__12727;
chunk__11765 = G__12728;
count__11766 = G__12729;
i__11767 = G__12730;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11764);
if(temp__5804__auto__){
var seq__11764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11764__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11764__$1);
var G__12735 = cljs.core.chunk_rest(seq__11764__$1);
var G__12736 = c__5525__auto__;
var G__12737 = cljs.core.count(c__5525__auto__);
var G__12738 = (0);
seq__11764 = G__12735;
chunk__11765 = G__12736;
count__11766 = G__12737;
i__11767 = G__12738;
continue;
} else {
var el = cljs.core.first(seq__11764__$1);
var handler_12743__$1 = ((function (seq__11764,chunk__11765,count__11766,i__11767,el,seq__11764__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11764,chunk__11765,count__11766,i__11767,el,seq__11764__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12743__$1);


var G__12744 = cljs.core.next(seq__11764__$1);
var G__12745 = null;
var G__12746 = (0);
var G__12747 = (0);
seq__11764 = G__12744;
chunk__11765 = G__12745;
count__11766 = G__12746;
i__11767 = G__12747;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11773 = arguments.length;
switch (G__11773) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11787 = cljs.core.seq(events);
var chunk__11788 = null;
var count__11789 = (0);
var i__11790 = (0);
while(true){
if((i__11790 < count__11789)){
var vec__11805 = chunk__11788.cljs$core$IIndexed$_nth$arity$2(null, i__11790);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11805,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12756 = seq__11787;
var G__12757 = chunk__11788;
var G__12758 = count__11789;
var G__12759 = (i__11790 + (1));
seq__11787 = G__12756;
chunk__11788 = G__12757;
count__11789 = G__12758;
i__11790 = G__12759;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11787);
if(temp__5804__auto__){
var seq__11787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11787__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11787__$1);
var G__12762 = cljs.core.chunk_rest(seq__11787__$1);
var G__12763 = c__5525__auto__;
var G__12764 = cljs.core.count(c__5525__auto__);
var G__12765 = (0);
seq__11787 = G__12762;
chunk__11788 = G__12763;
count__11789 = G__12764;
i__11790 = G__12765;
continue;
} else {
var vec__11812 = cljs.core.first(seq__11787__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11812,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12767 = cljs.core.next(seq__11787__$1);
var G__12768 = null;
var G__12769 = (0);
var G__12770 = (0);
seq__11787 = G__12767;
chunk__11788 = G__12768;
count__11789 = G__12769;
i__11790 = G__12770;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11819 = cljs.core.seq(styles);
var chunk__11820 = null;
var count__11821 = (0);
var i__11822 = (0);
while(true){
if((i__11822 < count__11821)){
var vec__11833 = chunk__11820.cljs$core$IIndexed$_nth$arity$2(null, i__11822);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11833,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12772 = seq__11819;
var G__12773 = chunk__11820;
var G__12774 = count__11821;
var G__12775 = (i__11822 + (1));
seq__11819 = G__12772;
chunk__11820 = G__12773;
count__11821 = G__12774;
i__11822 = G__12775;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11819);
if(temp__5804__auto__){
var seq__11819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11819__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11819__$1);
var G__12778 = cljs.core.chunk_rest(seq__11819__$1);
var G__12779 = c__5525__auto__;
var G__12780 = cljs.core.count(c__5525__auto__);
var G__12781 = (0);
seq__11819 = G__12778;
chunk__11820 = G__12779;
count__11821 = G__12780;
i__11822 = G__12781;
continue;
} else {
var vec__11837 = cljs.core.first(seq__11819__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12783 = cljs.core.next(seq__11819__$1);
var G__12784 = null;
var G__12785 = (0);
var G__12786 = (0);
seq__11819 = G__12783;
chunk__11820 = G__12784;
count__11821 = G__12785;
i__11822 = G__12786;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11845_12788 = key;
var G__11845_12789__$1 = (((G__11845_12788 instanceof cljs.core.Keyword))?G__11845_12788.fqn:null);
switch (G__11845_12789__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12798 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12798,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12798,"aria-");
}
})())){
el.setAttribute(ks_12798,value);
} else {
(el[ks_12798] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11869){
var map__11871 = p__11869;
var map__11871__$1 = cljs.core.__destructure_map(map__11871);
var props = map__11871__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11871__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11876 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11883 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11883,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11883;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11885 = arguments.length;
switch (G__11885) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11897){
var vec__11898 = p__11897;
var seq__11899 = cljs.core.seq(vec__11898);
var first__11900 = cljs.core.first(seq__11899);
var seq__11899__$1 = cljs.core.next(seq__11899);
var nn = first__11900;
var first__11900__$1 = cljs.core.first(seq__11899__$1);
var seq__11899__$2 = cljs.core.next(seq__11899__$1);
var np = first__11900__$1;
var nc = seq__11899__$2;
var node = vec__11898;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11924 = nn;
var G__11925 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11924,G__11925) : create_fn.call(null, G__11924,G__11925));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11926 = nn;
var G__11927 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11926,G__11927) : create_fn.call(null, G__11926,G__11927));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11932 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
var seq__11935_12828 = cljs.core.seq(node_children);
var chunk__11936_12829 = null;
var count__11937_12830 = (0);
var i__11938_12831 = (0);
while(true){
if((i__11938_12831 < count__11937_12830)){
var child_struct_12834 = chunk__11936_12829.cljs$core$IIndexed$_nth$arity$2(null, i__11938_12831);
var children_12835 = shadow.dom.dom_node(child_struct_12834);
if(cljs.core.seq_QMARK_(children_12835)){
var seq__11965_12836 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12835));
var chunk__11967_12837 = null;
var count__11968_12838 = (0);
var i__11969_12839 = (0);
while(true){
if((i__11969_12839 < count__11968_12838)){
var child_12840 = chunk__11967_12837.cljs$core$IIndexed$_nth$arity$2(null, i__11969_12839);
if(cljs.core.truth_(child_12840)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12840);


var G__12841 = seq__11965_12836;
var G__12842 = chunk__11967_12837;
var G__12843 = count__11968_12838;
var G__12844 = (i__11969_12839 + (1));
seq__11965_12836 = G__12841;
chunk__11967_12837 = G__12842;
count__11968_12838 = G__12843;
i__11969_12839 = G__12844;
continue;
} else {
var G__12845 = seq__11965_12836;
var G__12846 = chunk__11967_12837;
var G__12847 = count__11968_12838;
var G__12848 = (i__11969_12839 + (1));
seq__11965_12836 = G__12845;
chunk__11967_12837 = G__12846;
count__11968_12838 = G__12847;
i__11969_12839 = G__12848;
continue;
}
} else {
var temp__5804__auto___12850 = cljs.core.seq(seq__11965_12836);
if(temp__5804__auto___12850){
var seq__11965_12851__$1 = temp__5804__auto___12850;
if(cljs.core.chunked_seq_QMARK_(seq__11965_12851__$1)){
var c__5525__auto___12852 = cljs.core.chunk_first(seq__11965_12851__$1);
var G__12857 = cljs.core.chunk_rest(seq__11965_12851__$1);
var G__12858 = c__5525__auto___12852;
var G__12859 = cljs.core.count(c__5525__auto___12852);
var G__12860 = (0);
seq__11965_12836 = G__12857;
chunk__11967_12837 = G__12858;
count__11968_12838 = G__12859;
i__11969_12839 = G__12860;
continue;
} else {
var child_12861 = cljs.core.first(seq__11965_12851__$1);
if(cljs.core.truth_(child_12861)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12861);


var G__12866 = cljs.core.next(seq__11965_12851__$1);
var G__12867 = null;
var G__12868 = (0);
var G__12869 = (0);
seq__11965_12836 = G__12866;
chunk__11967_12837 = G__12867;
count__11968_12838 = G__12868;
i__11969_12839 = G__12869;
continue;
} else {
var G__12871 = cljs.core.next(seq__11965_12851__$1);
var G__12872 = null;
var G__12873 = (0);
var G__12874 = (0);
seq__11965_12836 = G__12871;
chunk__11967_12837 = G__12872;
count__11968_12838 = G__12873;
i__11969_12839 = G__12874;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12835);
}


var G__12875 = seq__11935_12828;
var G__12876 = chunk__11936_12829;
var G__12877 = count__11937_12830;
var G__12878 = (i__11938_12831 + (1));
seq__11935_12828 = G__12875;
chunk__11936_12829 = G__12876;
count__11937_12830 = G__12877;
i__11938_12831 = G__12878;
continue;
} else {
var temp__5804__auto___12879 = cljs.core.seq(seq__11935_12828);
if(temp__5804__auto___12879){
var seq__11935_12880__$1 = temp__5804__auto___12879;
if(cljs.core.chunked_seq_QMARK_(seq__11935_12880__$1)){
var c__5525__auto___12881 = cljs.core.chunk_first(seq__11935_12880__$1);
var G__12883 = cljs.core.chunk_rest(seq__11935_12880__$1);
var G__12884 = c__5525__auto___12881;
var G__12885 = cljs.core.count(c__5525__auto___12881);
var G__12886 = (0);
seq__11935_12828 = G__12883;
chunk__11936_12829 = G__12884;
count__11937_12830 = G__12885;
i__11938_12831 = G__12886;
continue;
} else {
var child_struct_12887 = cljs.core.first(seq__11935_12880__$1);
var children_12888 = shadow.dom.dom_node(child_struct_12887);
if(cljs.core.seq_QMARK_(children_12888)){
var seq__11975_12889 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12888));
var chunk__11977_12890 = null;
var count__11978_12891 = (0);
var i__11979_12892 = (0);
while(true){
if((i__11979_12892 < count__11978_12891)){
var child_12894 = chunk__11977_12890.cljs$core$IIndexed$_nth$arity$2(null, i__11979_12892);
if(cljs.core.truth_(child_12894)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12894);


var G__12895 = seq__11975_12889;
var G__12896 = chunk__11977_12890;
var G__12897 = count__11978_12891;
var G__12898 = (i__11979_12892 + (1));
seq__11975_12889 = G__12895;
chunk__11977_12890 = G__12896;
count__11978_12891 = G__12897;
i__11979_12892 = G__12898;
continue;
} else {
var G__12900 = seq__11975_12889;
var G__12901 = chunk__11977_12890;
var G__12902 = count__11978_12891;
var G__12903 = (i__11979_12892 + (1));
seq__11975_12889 = G__12900;
chunk__11977_12890 = G__12901;
count__11978_12891 = G__12902;
i__11979_12892 = G__12903;
continue;
}
} else {
var temp__5804__auto___12904__$1 = cljs.core.seq(seq__11975_12889);
if(temp__5804__auto___12904__$1){
var seq__11975_12907__$1 = temp__5804__auto___12904__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11975_12907__$1)){
var c__5525__auto___12908 = cljs.core.chunk_first(seq__11975_12907__$1);
var G__12910 = cljs.core.chunk_rest(seq__11975_12907__$1);
var G__12911 = c__5525__auto___12908;
var G__12912 = cljs.core.count(c__5525__auto___12908);
var G__12913 = (0);
seq__11975_12889 = G__12910;
chunk__11977_12890 = G__12911;
count__11978_12891 = G__12912;
i__11979_12892 = G__12913;
continue;
} else {
var child_12914 = cljs.core.first(seq__11975_12907__$1);
if(cljs.core.truth_(child_12914)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12914);


var G__12916 = cljs.core.next(seq__11975_12907__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__11975_12889 = G__12916;
chunk__11977_12890 = G__12917;
count__11978_12891 = G__12918;
i__11979_12892 = G__12919;
continue;
} else {
var G__12920 = cljs.core.next(seq__11975_12907__$1);
var G__12921 = null;
var G__12922 = (0);
var G__12923 = (0);
seq__11975_12889 = G__12920;
chunk__11977_12890 = G__12921;
count__11978_12891 = G__12922;
i__11979_12892 = G__12923;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12888);
}


var G__12924 = cljs.core.next(seq__11935_12880__$1);
var G__12925 = null;
var G__12926 = (0);
var G__12927 = (0);
seq__11935_12828 = G__12924;
chunk__11936_12829 = G__12925;
count__11937_12830 = G__12926;
i__11938_12831 = G__12927;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__11991 = cljs.core.seq(node);
var chunk__11992 = null;
var count__11993 = (0);
var i__11994 = (0);
while(true){
if((i__11994 < count__11993)){
var n = chunk__11992.cljs$core$IIndexed$_nth$arity$2(null, i__11994);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12931 = seq__11991;
var G__12932 = chunk__11992;
var G__12933 = count__11993;
var G__12934 = (i__11994 + (1));
seq__11991 = G__12931;
chunk__11992 = G__12932;
count__11993 = G__12933;
i__11994 = G__12934;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11991);
if(temp__5804__auto__){
var seq__11991__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11991__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11991__$1);
var G__12935 = cljs.core.chunk_rest(seq__11991__$1);
var G__12936 = c__5525__auto__;
var G__12937 = cljs.core.count(c__5525__auto__);
var G__12938 = (0);
seq__11991 = G__12935;
chunk__11992 = G__12936;
count__11993 = G__12937;
i__11994 = G__12938;
continue;
} else {
var n = cljs.core.first(seq__11991__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12941 = cljs.core.next(seq__11991__$1);
var G__12942 = null;
var G__12943 = (0);
var G__12944 = (0);
seq__11991 = G__12941;
chunk__11992 = G__12942;
count__11993 = G__12943;
i__11994 = G__12944;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12000 = arguments.length;
switch (G__12000) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12005 = arguments.length;
switch (G__12005) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12015 = arguments.length;
switch (G__12015) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12973 = arguments.length;
var i__5727__auto___12974 = (0);
while(true){
if((i__5727__auto___12974 < len__5726__auto___12973)){
args__5732__auto__.push((arguments[i__5727__auto___12974]));

var G__12975 = (i__5727__auto___12974 + (1));
i__5727__auto___12974 = G__12975;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12029_12976 = cljs.core.seq(nodes);
var chunk__12031_12977 = null;
var count__12032_12978 = (0);
var i__12033_12979 = (0);
while(true){
if((i__12033_12979 < count__12032_12978)){
var node_12980 = chunk__12031_12977.cljs$core$IIndexed$_nth$arity$2(null, i__12033_12979);
fragment.appendChild(shadow.dom._to_dom(node_12980));


var G__12983 = seq__12029_12976;
var G__12984 = chunk__12031_12977;
var G__12985 = count__12032_12978;
var G__12986 = (i__12033_12979 + (1));
seq__12029_12976 = G__12983;
chunk__12031_12977 = G__12984;
count__12032_12978 = G__12985;
i__12033_12979 = G__12986;
continue;
} else {
var temp__5804__auto___12987 = cljs.core.seq(seq__12029_12976);
if(temp__5804__auto___12987){
var seq__12029_12988__$1 = temp__5804__auto___12987;
if(cljs.core.chunked_seq_QMARK_(seq__12029_12988__$1)){
var c__5525__auto___12989 = cljs.core.chunk_first(seq__12029_12988__$1);
var G__12990 = cljs.core.chunk_rest(seq__12029_12988__$1);
var G__12991 = c__5525__auto___12989;
var G__12992 = cljs.core.count(c__5525__auto___12989);
var G__12993 = (0);
seq__12029_12976 = G__12990;
chunk__12031_12977 = G__12991;
count__12032_12978 = G__12992;
i__12033_12979 = G__12993;
continue;
} else {
var node_12994 = cljs.core.first(seq__12029_12988__$1);
fragment.appendChild(shadow.dom._to_dom(node_12994));


var G__12995 = cljs.core.next(seq__12029_12988__$1);
var G__12996 = null;
var G__12997 = (0);
var G__12998 = (0);
seq__12029_12976 = G__12995;
chunk__12031_12977 = G__12996;
count__12032_12978 = G__12997;
i__12033_12979 = G__12998;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12026){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12026));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12040_13000 = cljs.core.seq(scripts);
var chunk__12041_13001 = null;
var count__12042_13002 = (0);
var i__12043_13003 = (0);
while(true){
if((i__12043_13003 < count__12042_13002)){
var vec__12069_13004 = chunk__12041_13001.cljs$core$IIndexed$_nth$arity$2(null, i__12043_13003);
var script_tag_13005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12069_13004,(0),null);
var script_body_13006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12069_13004,(1),null);
eval(script_body_13006);


var G__13009 = seq__12040_13000;
var G__13010 = chunk__12041_13001;
var G__13011 = count__12042_13002;
var G__13012 = (i__12043_13003 + (1));
seq__12040_13000 = G__13009;
chunk__12041_13001 = G__13010;
count__12042_13002 = G__13011;
i__12043_13003 = G__13012;
continue;
} else {
var temp__5804__auto___13013 = cljs.core.seq(seq__12040_13000);
if(temp__5804__auto___13013){
var seq__12040_13014__$1 = temp__5804__auto___13013;
if(cljs.core.chunked_seq_QMARK_(seq__12040_13014__$1)){
var c__5525__auto___13015 = cljs.core.chunk_first(seq__12040_13014__$1);
var G__13016 = cljs.core.chunk_rest(seq__12040_13014__$1);
var G__13017 = c__5525__auto___13015;
var G__13018 = cljs.core.count(c__5525__auto___13015);
var G__13019 = (0);
seq__12040_13000 = G__13016;
chunk__12041_13001 = G__13017;
count__12042_13002 = G__13018;
i__12043_13003 = G__13019;
continue;
} else {
var vec__12074_13020 = cljs.core.first(seq__12040_13014__$1);
var script_tag_13021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074_13020,(0),null);
var script_body_13022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074_13020,(1),null);
eval(script_body_13022);


var G__13023 = cljs.core.next(seq__12040_13014__$1);
var G__13024 = null;
var G__13025 = (0);
var G__13026 = (0);
seq__12040_13000 = G__13023;
chunk__12041_13001 = G__13024;
count__12042_13002 = G__13025;
i__12043_13003 = G__13026;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12077){
var vec__12078 = p__12077;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12078,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12078,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12092 = arguments.length;
switch (G__12092) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12170 = cljs.core.seq(style_keys);
var chunk__12171 = null;
var count__12172 = (0);
var i__12173 = (0);
while(true){
if((i__12173 < count__12172)){
var it = chunk__12171.cljs$core$IIndexed$_nth$arity$2(null, i__12173);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13033 = seq__12170;
var G__13034 = chunk__12171;
var G__13035 = count__12172;
var G__13036 = (i__12173 + (1));
seq__12170 = G__13033;
chunk__12171 = G__13034;
count__12172 = G__13035;
i__12173 = G__13036;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12170);
if(temp__5804__auto__){
var seq__12170__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12170__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12170__$1);
var G__13039 = cljs.core.chunk_rest(seq__12170__$1);
var G__13040 = c__5525__auto__;
var G__13041 = cljs.core.count(c__5525__auto__);
var G__13042 = (0);
seq__12170 = G__13039;
chunk__12171 = G__13040;
count__12172 = G__13041;
i__12173 = G__13042;
continue;
} else {
var it = cljs.core.first(seq__12170__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13043 = cljs.core.next(seq__12170__$1);
var G__13044 = null;
var G__13045 = (0);
var G__13046 = (0);
seq__12170 = G__13043;
chunk__12171 = G__13044;
count__12172 = G__13045;
i__12173 = G__13046;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12207,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12247 = k12207;
var G__12247__$1 = (((G__12247 instanceof cljs.core.Keyword))?G__12247.fqn:null);
switch (G__12247__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12207,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12248){
var vec__12249 = p__12248;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12249,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12249,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12206){
var self__ = this;
var G__12206__$1 = this;
return (new cljs.core.RecordIter((0),G__12206__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12208,other12209){
var self__ = this;
var this12208__$1 = this;
return (((!((other12209 == null)))) && ((((this12208__$1.constructor === other12209.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12208__$1.x,other12209.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12208__$1.y,other12209.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12208__$1.__extmap,other12209.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12207){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12291 = k12207;
var G__12291__$1 = (((G__12291 instanceof cljs.core.Keyword))?G__12291.fqn:null);
switch (G__12291__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12207);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12206){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12303 = cljs.core.keyword_identical_QMARK_;
var expr__12304 = k__5309__auto__;
if(cljs.core.truth_((pred__12303.cljs$core$IFn$_invoke$arity$2 ? pred__12303.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12304) : pred__12303.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12304)))){
return (new shadow.dom.Coordinate(G__12206,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12303.cljs$core$IFn$_invoke$arity$2 ? pred__12303.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12304) : pred__12303.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12304)))){
return (new shadow.dom.Coordinate(self__.x,G__12206,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12206),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12206){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12206,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12236){
var extmap__5342__auto__ = (function (){var G__12313 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12236,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12236)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12313);
} else {
return G__12313;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12236),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12236),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12333,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12356 = k12333;
var G__12356__$1 = (((G__12356 instanceof cljs.core.Keyword))?G__12356.fqn:null);
switch (G__12356__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12333,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12365){
var vec__12367 = p__12365;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12367,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12367,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12332){
var self__ = this;
var G__12332__$1 = this;
return (new cljs.core.RecordIter((0),G__12332__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12335,other12336){
var self__ = this;
var this12335__$1 = this;
return (((!((other12336 == null)))) && ((((this12335__$1.constructor === other12336.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.w,other12336.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.h,other12336.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.__extmap,other12336.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12333){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12397 = k12333;
var G__12397__$1 = (((G__12397 instanceof cljs.core.Keyword))?G__12397.fqn:null);
switch (G__12397__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12333);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12332){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12400 = cljs.core.keyword_identical_QMARK_;
var expr__12401 = k__5309__auto__;
if(cljs.core.truth_((pred__12400.cljs$core$IFn$_invoke$arity$2 ? pred__12400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12401) : pred__12400.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12401)))){
return (new shadow.dom.Size(G__12332,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12400.cljs$core$IFn$_invoke$arity$2 ? pred__12400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12401) : pred__12400.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12401)))){
return (new shadow.dom.Size(self__.w,G__12332,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12332),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12332){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12332,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12342){
var extmap__5342__auto__ = (function (){var G__12409 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12342,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12342)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12409);
} else {
return G__12409;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12342),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12342),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13130 = (i + (1));
var G__13131 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13130;
ret = G__13131;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12432){
var vec__12434 = p__12432;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12434,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12446 = arguments.length;
switch (G__12446) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13138 = ps;
var G__13139 = (i + (1));
el__$1 = G__13138;
i = G__13139;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12518 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12526_13141 = cljs.core.seq(props);
var chunk__12527_13142 = null;
var count__12528_13143 = (0);
var i__12529_13144 = (0);
while(true){
if((i__12529_13144 < count__12528_13143)){
var vec__12548_13145 = chunk__12527_13142.cljs$core$IIndexed$_nth$arity$2(null, i__12529_13144);
var k_13146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548_13145,(0),null);
var v_13147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548_13145,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13146);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13146),v_13147);


var G__13148 = seq__12526_13141;
var G__13149 = chunk__12527_13142;
var G__13150 = count__12528_13143;
var G__13151 = (i__12529_13144 + (1));
seq__12526_13141 = G__13148;
chunk__12527_13142 = G__13149;
count__12528_13143 = G__13150;
i__12529_13144 = G__13151;
continue;
} else {
var temp__5804__auto___13152 = cljs.core.seq(seq__12526_13141);
if(temp__5804__auto___13152){
var seq__12526_13153__$1 = temp__5804__auto___13152;
if(cljs.core.chunked_seq_QMARK_(seq__12526_13153__$1)){
var c__5525__auto___13156 = cljs.core.chunk_first(seq__12526_13153__$1);
var G__13157 = cljs.core.chunk_rest(seq__12526_13153__$1);
var G__13158 = c__5525__auto___13156;
var G__13159 = cljs.core.count(c__5525__auto___13156);
var G__13160 = (0);
seq__12526_13141 = G__13157;
chunk__12527_13142 = G__13158;
count__12528_13143 = G__13159;
i__12529_13144 = G__13160;
continue;
} else {
var vec__12554_13161 = cljs.core.first(seq__12526_13153__$1);
var k_13162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12554_13161,(0),null);
var v_13163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12554_13161,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13162);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13162),v_13163);


var G__13165 = cljs.core.next(seq__12526_13153__$1);
var G__13166 = null;
var G__13167 = (0);
var G__13168 = (0);
seq__12526_13141 = G__13165;
chunk__12527_13142 = G__13166;
count__12528_13143 = G__13167;
i__12529_13144 = G__13168;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12563 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(1),null);
var seq__12567_13170 = cljs.core.seq(node_children);
var chunk__12569_13171 = null;
var count__12570_13172 = (0);
var i__12571_13173 = (0);
while(true){
if((i__12571_13173 < count__12570_13172)){
var child_struct_13175 = chunk__12569_13171.cljs$core$IIndexed$_nth$arity$2(null, i__12571_13173);
if((!((child_struct_13175 == null)))){
if(typeof child_struct_13175 === 'string'){
var text_13178 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13178),child_struct_13175].join(''));
} else {
var children_13179 = shadow.dom.svg_node(child_struct_13175);
if(cljs.core.seq_QMARK_(children_13179)){
var seq__12600_13180 = cljs.core.seq(children_13179);
var chunk__12602_13181 = null;
var count__12603_13182 = (0);
var i__12604_13183 = (0);
while(true){
if((i__12604_13183 < count__12603_13182)){
var child_13186 = chunk__12602_13181.cljs$core$IIndexed$_nth$arity$2(null, i__12604_13183);
if(cljs.core.truth_(child_13186)){
node.appendChild(child_13186);


var G__13187 = seq__12600_13180;
var G__13188 = chunk__12602_13181;
var G__13189 = count__12603_13182;
var G__13190 = (i__12604_13183 + (1));
seq__12600_13180 = G__13187;
chunk__12602_13181 = G__13188;
count__12603_13182 = G__13189;
i__12604_13183 = G__13190;
continue;
} else {
var G__13191 = seq__12600_13180;
var G__13192 = chunk__12602_13181;
var G__13193 = count__12603_13182;
var G__13194 = (i__12604_13183 + (1));
seq__12600_13180 = G__13191;
chunk__12602_13181 = G__13192;
count__12603_13182 = G__13193;
i__12604_13183 = G__13194;
continue;
}
} else {
var temp__5804__auto___13195 = cljs.core.seq(seq__12600_13180);
if(temp__5804__auto___13195){
var seq__12600_13196__$1 = temp__5804__auto___13195;
if(cljs.core.chunked_seq_QMARK_(seq__12600_13196__$1)){
var c__5525__auto___13197 = cljs.core.chunk_first(seq__12600_13196__$1);
var G__13198 = cljs.core.chunk_rest(seq__12600_13196__$1);
var G__13199 = c__5525__auto___13197;
var G__13200 = cljs.core.count(c__5525__auto___13197);
var G__13201 = (0);
seq__12600_13180 = G__13198;
chunk__12602_13181 = G__13199;
count__12603_13182 = G__13200;
i__12604_13183 = G__13201;
continue;
} else {
var child_13203 = cljs.core.first(seq__12600_13196__$1);
if(cljs.core.truth_(child_13203)){
node.appendChild(child_13203);


var G__13205 = cljs.core.next(seq__12600_13196__$1);
var G__13206 = null;
var G__13207 = (0);
var G__13208 = (0);
seq__12600_13180 = G__13205;
chunk__12602_13181 = G__13206;
count__12603_13182 = G__13207;
i__12604_13183 = G__13208;
continue;
} else {
var G__13209 = cljs.core.next(seq__12600_13196__$1);
var G__13210 = null;
var G__13211 = (0);
var G__13212 = (0);
seq__12600_13180 = G__13209;
chunk__12602_13181 = G__13210;
count__12603_13182 = G__13211;
i__12604_13183 = G__13212;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13179);
}
}


var G__13213 = seq__12567_13170;
var G__13214 = chunk__12569_13171;
var G__13215 = count__12570_13172;
var G__13216 = (i__12571_13173 + (1));
seq__12567_13170 = G__13213;
chunk__12569_13171 = G__13214;
count__12570_13172 = G__13215;
i__12571_13173 = G__13216;
continue;
} else {
var G__13217 = seq__12567_13170;
var G__13218 = chunk__12569_13171;
var G__13219 = count__12570_13172;
var G__13220 = (i__12571_13173 + (1));
seq__12567_13170 = G__13217;
chunk__12569_13171 = G__13218;
count__12570_13172 = G__13219;
i__12571_13173 = G__13220;
continue;
}
} else {
var temp__5804__auto___13221 = cljs.core.seq(seq__12567_13170);
if(temp__5804__auto___13221){
var seq__12567_13222__$1 = temp__5804__auto___13221;
if(cljs.core.chunked_seq_QMARK_(seq__12567_13222__$1)){
var c__5525__auto___13223 = cljs.core.chunk_first(seq__12567_13222__$1);
var G__13224 = cljs.core.chunk_rest(seq__12567_13222__$1);
var G__13225 = c__5525__auto___13223;
var G__13226 = cljs.core.count(c__5525__auto___13223);
var G__13227 = (0);
seq__12567_13170 = G__13224;
chunk__12569_13171 = G__13225;
count__12570_13172 = G__13226;
i__12571_13173 = G__13227;
continue;
} else {
var child_struct_13228 = cljs.core.first(seq__12567_13222__$1);
if((!((child_struct_13228 == null)))){
if(typeof child_struct_13228 === 'string'){
var text_13229 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13229),child_struct_13228].join(''));
} else {
var children_13230 = shadow.dom.svg_node(child_struct_13228);
if(cljs.core.seq_QMARK_(children_13230)){
var seq__12623_13231 = cljs.core.seq(children_13230);
var chunk__12625_13232 = null;
var count__12626_13233 = (0);
var i__12627_13234 = (0);
while(true){
if((i__12627_13234 < count__12626_13233)){
var child_13235 = chunk__12625_13232.cljs$core$IIndexed$_nth$arity$2(null, i__12627_13234);
if(cljs.core.truth_(child_13235)){
node.appendChild(child_13235);


var G__13237 = seq__12623_13231;
var G__13238 = chunk__12625_13232;
var G__13239 = count__12626_13233;
var G__13240 = (i__12627_13234 + (1));
seq__12623_13231 = G__13237;
chunk__12625_13232 = G__13238;
count__12626_13233 = G__13239;
i__12627_13234 = G__13240;
continue;
} else {
var G__13241 = seq__12623_13231;
var G__13242 = chunk__12625_13232;
var G__13243 = count__12626_13233;
var G__13244 = (i__12627_13234 + (1));
seq__12623_13231 = G__13241;
chunk__12625_13232 = G__13242;
count__12626_13233 = G__13243;
i__12627_13234 = G__13244;
continue;
}
} else {
var temp__5804__auto___13245__$1 = cljs.core.seq(seq__12623_13231);
if(temp__5804__auto___13245__$1){
var seq__12623_13246__$1 = temp__5804__auto___13245__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12623_13246__$1)){
var c__5525__auto___13247 = cljs.core.chunk_first(seq__12623_13246__$1);
var G__13249 = cljs.core.chunk_rest(seq__12623_13246__$1);
var G__13250 = c__5525__auto___13247;
var G__13251 = cljs.core.count(c__5525__auto___13247);
var G__13252 = (0);
seq__12623_13231 = G__13249;
chunk__12625_13232 = G__13250;
count__12626_13233 = G__13251;
i__12627_13234 = G__13252;
continue;
} else {
var child_13253 = cljs.core.first(seq__12623_13246__$1);
if(cljs.core.truth_(child_13253)){
node.appendChild(child_13253);


var G__13254 = cljs.core.next(seq__12623_13246__$1);
var G__13255 = null;
var G__13256 = (0);
var G__13257 = (0);
seq__12623_13231 = G__13254;
chunk__12625_13232 = G__13255;
count__12626_13233 = G__13256;
i__12627_13234 = G__13257;
continue;
} else {
var G__13258 = cljs.core.next(seq__12623_13246__$1);
var G__13259 = null;
var G__13260 = (0);
var G__13261 = (0);
seq__12623_13231 = G__13258;
chunk__12625_13232 = G__13259;
count__12626_13233 = G__13260;
i__12627_13234 = G__13261;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13230);
}
}


var G__13262 = cljs.core.next(seq__12567_13222__$1);
var G__13263 = null;
var G__13264 = (0);
var G__13265 = (0);
seq__12567_13170 = G__13262;
chunk__12569_13171 = G__13263;
count__12570_13172 = G__13264;
i__12571_13173 = G__13265;
continue;
} else {
var G__13266 = cljs.core.next(seq__12567_13222__$1);
var G__13267 = null;
var G__13268 = (0);
var G__13269 = (0);
seq__12567_13170 = G__13266;
chunk__12569_13171 = G__13267;
count__12570_13172 = G__13268;
i__12571_13173 = G__13269;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13275 = arguments.length;
var i__5727__auto___13277 = (0);
while(true){
if((i__5727__auto___13277 < len__5726__auto___13275)){
args__5732__auto__.push((arguments[i__5727__auto___13277]));

var G__13278 = (i__5727__auto___13277 + (1));
i__5727__auto___13277 = G__13278;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12650){
var G__12651 = cljs.core.first(seq12650);
var seq12650__$1 = cljs.core.next(seq12650);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12651,seq12650__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
