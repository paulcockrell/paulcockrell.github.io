goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19216){
var map__19217 = p__19216;
var map__19217__$1 = cljs.core.__destructure_map(map__19217);
var m = map__19217__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19217__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19217__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19222_19621 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19223_19622 = null;
var count__19224_19623 = (0);
var i__19225_19624 = (0);
while(true){
if((i__19225_19624 < count__19224_19623)){
var f_19625 = chunk__19223_19622.cljs$core$IIndexed$_nth$arity$2(null, i__19225_19624);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19625], 0));


var G__19626 = seq__19222_19621;
var G__19627 = chunk__19223_19622;
var G__19628 = count__19224_19623;
var G__19630 = (i__19225_19624 + (1));
seq__19222_19621 = G__19626;
chunk__19223_19622 = G__19627;
count__19224_19623 = G__19628;
i__19225_19624 = G__19630;
continue;
} else {
var temp__5804__auto___19634 = cljs.core.seq(seq__19222_19621);
if(temp__5804__auto___19634){
var seq__19222_19635__$1 = temp__5804__auto___19634;
if(cljs.core.chunked_seq_QMARK_(seq__19222_19635__$1)){
var c__5525__auto___19636 = cljs.core.chunk_first(seq__19222_19635__$1);
var G__19641 = cljs.core.chunk_rest(seq__19222_19635__$1);
var G__19642 = c__5525__auto___19636;
var G__19643 = cljs.core.count(c__5525__auto___19636);
var G__19644 = (0);
seq__19222_19621 = G__19641;
chunk__19223_19622 = G__19642;
count__19224_19623 = G__19643;
i__19225_19624 = G__19644;
continue;
} else {
var f_19645 = cljs.core.first(seq__19222_19635__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19645], 0));


var G__19646 = cljs.core.next(seq__19222_19635__$1);
var G__19647 = null;
var G__19648 = (0);
var G__19649 = (0);
seq__19222_19621 = G__19646;
chunk__19223_19622 = G__19647;
count__19224_19623 = G__19648;
i__19225_19624 = G__19649;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19651 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19651], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19651)))?cljs.core.second(arglists_19651):arglists_19651)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19248_19656 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19249_19657 = null;
var count__19250_19658 = (0);
var i__19251_19659 = (0);
while(true){
if((i__19251_19659 < count__19250_19658)){
var vec__19292_19660 = chunk__19249_19657.cljs$core$IIndexed$_nth$arity$2(null, i__19251_19659);
var name_19661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292_19660,(0),null);
var map__19295_19662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292_19660,(1),null);
var map__19295_19663__$1 = cljs.core.__destructure_map(map__19295_19662);
var doc_19664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19295_19663__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19295_19663__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19661], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19665], 0));

if(cljs.core.truth_(doc_19664)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19664], 0));
} else {
}


var G__19666 = seq__19248_19656;
var G__19667 = chunk__19249_19657;
var G__19668 = count__19250_19658;
var G__19669 = (i__19251_19659 + (1));
seq__19248_19656 = G__19666;
chunk__19249_19657 = G__19667;
count__19250_19658 = G__19668;
i__19251_19659 = G__19669;
continue;
} else {
var temp__5804__auto___19670 = cljs.core.seq(seq__19248_19656);
if(temp__5804__auto___19670){
var seq__19248_19671__$1 = temp__5804__auto___19670;
if(cljs.core.chunked_seq_QMARK_(seq__19248_19671__$1)){
var c__5525__auto___19672 = cljs.core.chunk_first(seq__19248_19671__$1);
var G__19673 = cljs.core.chunk_rest(seq__19248_19671__$1);
var G__19674 = c__5525__auto___19672;
var G__19675 = cljs.core.count(c__5525__auto___19672);
var G__19676 = (0);
seq__19248_19656 = G__19673;
chunk__19249_19657 = G__19674;
count__19250_19658 = G__19675;
i__19251_19659 = G__19676;
continue;
} else {
var vec__19313_19677 = cljs.core.first(seq__19248_19671__$1);
var name_19678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19313_19677,(0),null);
var map__19316_19679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19313_19677,(1),null);
var map__19316_19680__$1 = cljs.core.__destructure_map(map__19316_19679);
var doc_19681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19316_19680__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19316_19680__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19678], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19682], 0));

if(cljs.core.truth_(doc_19681)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19681], 0));
} else {
}


var G__19683 = cljs.core.next(seq__19248_19671__$1);
var G__19684 = null;
var G__19685 = (0);
var G__19686 = (0);
seq__19248_19656 = G__19683;
chunk__19249_19657 = G__19684;
count__19250_19658 = G__19685;
i__19251_19659 = G__19686;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19319 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19320 = null;
var count__19321 = (0);
var i__19322 = (0);
while(true){
if((i__19322 < count__19321)){
var role = chunk__19320.cljs$core$IIndexed$_nth$arity$2(null, i__19322);
var temp__5804__auto___19690__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19690__$1)){
var spec_19691 = temp__5804__auto___19690__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19691)], 0));
} else {
}


var G__19692 = seq__19319;
var G__19693 = chunk__19320;
var G__19694 = count__19321;
var G__19695 = (i__19322 + (1));
seq__19319 = G__19692;
chunk__19320 = G__19693;
count__19321 = G__19694;
i__19322 = G__19695;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19319);
if(temp__5804__auto____$1){
var seq__19319__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19319__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19319__$1);
var G__19697 = cljs.core.chunk_rest(seq__19319__$1);
var G__19698 = c__5525__auto__;
var G__19699 = cljs.core.count(c__5525__auto__);
var G__19700 = (0);
seq__19319 = G__19697;
chunk__19320 = G__19698;
count__19321 = G__19699;
i__19322 = G__19700;
continue;
} else {
var role = cljs.core.first(seq__19319__$1);
var temp__5804__auto___19704__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19704__$2)){
var spec_19705 = temp__5804__auto___19704__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19705)], 0));
} else {
}


var G__19706 = cljs.core.next(seq__19319__$1);
var G__19707 = null;
var G__19708 = (0);
var G__19709 = (0);
seq__19319 = G__19706;
chunk__19320 = G__19707;
count__19321 = G__19708;
i__19322 = G__19709;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19404 = datafied_throwable;
var map__19404__$1 = cljs.core.__destructure_map(map__19404);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19404__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19407 = cljs.core.last(via);
var map__19407__$1 = cljs.core.__destructure_map(map__19407);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19407__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19407__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19407__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19408 = data;
var map__19408__$1 = cljs.core.__destructure_map(map__19408);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19408__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19408__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19408__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19409 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19409__$1 = cljs.core.__destructure_map(map__19409);
var top_data = map__19409__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19409__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19447 = phase;
var G__19447__$1 = (((G__19447 instanceof cljs.core.Keyword))?G__19447.fqn:null);
switch (G__19447__$1) {
case "read-source":
var map__19450 = data;
var map__19450__$1 = cljs.core.__destructure_map(map__19450);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19450__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19450__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19458__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19458,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19458);
var G__19458__$2 = (cljs.core.truth_((function (){var fexpr__19461 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19461.cljs$core$IFn$_invoke$arity$1 ? fexpr__19461.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19461.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19458__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19458__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19458__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19458__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19465 = top_data;
var G__19465__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19465,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19465);
var G__19465__$2 = (cljs.core.truth_((function (){var fexpr__19467 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19467.cljs$core$IFn$_invoke$arity$1 ? fexpr__19467.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19467.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19465__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19465__$1);
var G__19465__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19465__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19465__$2);
var G__19465__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19465__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19465__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19465__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19465__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19470 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19470,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19470,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19470,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19470,(3),null);
var G__19476 = top_data;
var G__19476__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19476,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19476);
var G__19476__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19476__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19476__$1);
var G__19476__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19476__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19476__$2);
var G__19476__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19476__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19476__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19476__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19476__$4;
}

break;
case "execution":
var vec__19479 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19479,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19479,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19479,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19479,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19363_SHARP_){
var or__5002__auto__ = (p1__19363_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19486 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19486.cljs$core$IFn$_invoke$arity$1 ? fexpr__19486.cljs$core$IFn$_invoke$arity$1(p1__19363_SHARP_) : fexpr__19486.call(null, p1__19363_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19492 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19492__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19492,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19492);
var G__19492__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19492__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19492__$1);
var G__19492__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19492__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19492__$2);
var G__19492__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19492__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19492__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19492__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19492__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19447__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19547){
var map__19549 = p__19547;
var map__19549__$1 = cljs.core.__destructure_map(map__19549);
var triage_data = map__19549__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19556 = phase;
var G__19556__$1 = (((G__19556 instanceof cljs.core.Keyword))?G__19556.fqn:null);
switch (G__19556__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19559 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19560 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19561 = loc;
var G__19562 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19563_19737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19564_19738 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19565_19739 = true;
var _STAR_print_fn_STAR__temp_val__19566_19740 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19565_19739);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19566_19740);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19532_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19532_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19564_19738);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19563_19737);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19559,G__19560,G__19561,G__19562) : format.call(null, G__19559,G__19560,G__19561,G__19562));

break;
case "macroexpansion":
var G__19572 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19573 = cause_type;
var G__19574 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19575 = loc;
var G__19576 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19572,G__19573,G__19574,G__19575,G__19576) : format.call(null, G__19572,G__19573,G__19574,G__19575,G__19576));

break;
case "compile-syntax-check":
var G__19577 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19578 = cause_type;
var G__19579 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19580 = loc;
var G__19581 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19577,G__19578,G__19579,G__19580,G__19581) : format.call(null, G__19577,G__19578,G__19579,G__19580,G__19581));

break;
case "compilation":
var G__19592 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19593 = cause_type;
var G__19594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19595 = loc;
var G__19596 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19592,G__19593,G__19594,G__19595,G__19596) : format.call(null, G__19592,G__19593,G__19594,G__19595,G__19596));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19597 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19598 = symbol;
var G__19599 = loc;
var G__19600 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19602_19744 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19603_19745 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19604_19746 = true;
var _STAR_print_fn_STAR__temp_val__19605_19747 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19604_19746);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19605_19747);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19540_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19540_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19603_19745);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19602_19744);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19597,G__19598,G__19599,G__19600) : format.call(null, G__19597,G__19598,G__19599,G__19600));
} else {
var G__19612 = "Execution error%s at %s(%s).\n%s\n";
var G__19613 = cause_type;
var G__19614 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19615 = loc;
var G__19616 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19612,G__19613,G__19614,G__19615,G__19616) : format.call(null, G__19612,G__19613,G__19614,G__19615,G__19616));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19556__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
