goog.provide('zombiedice.entities.player');
zombiedice.entities.player.init_player = (function zombiedice$entities$player$init_player(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17491 = arguments.length;
var i__5727__auto___17492 = (0);
while(true){
if((i__5727__auto___17492 < len__5726__auto___17491)){
args__5732__auto__.push((arguments[i__5727__auto___17492]));

var G__17493 = (i__5727__auto___17492 + (1));
i__5727__auto___17492 = G__17493;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return zombiedice.entities.player.init_player.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(zombiedice.entities.player.init_player.cljs$core$IFn$_invoke$arity$variadic = (function (p__17489){
var map__17490 = p__17489;
var map__17490__$1 = cljs.core.__destructure_map(map__17490);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"brains","brains",-64810970),(0)], null);
}));

(zombiedice.entities.player.init_player.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zombiedice.entities.player.init_player.cljs$lang$applyTo = (function (seq17488){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17488));
}));

zombiedice.entities.player.add_brains = (function zombiedice$entities$player$add_brains(player,brains){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,new cljs.core.Keyword(null,"brains","brains",-64810970),((player.cljs$core$IFn$_invoke$arity$1 ? player.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"brains","brains",-64810970)) : player.call(null, new cljs.core.Keyword(null,"brains","brains",-64810970))) + brains));
});
zombiedice.entities.player.set_position = (function zombiedice$entities$player$set_position(player,position){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,new cljs.core.Keyword(null,"position","position",-2011731912),position);
});

//# sourceMappingURL=zombiedice.entities.player.js.map
