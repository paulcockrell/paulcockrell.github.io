goog.provide('zombiedice.entities.dice');
if((typeof zombiedice !== 'undefined') && (typeof zombiedice.entities !== 'undefined') && (typeof zombiedice.entities.dice !== 'undefined') && (typeof zombiedice.entities.dice.red_dice !== 'undefined')){
} else {
zombiedice.entities.dice.red_dice = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shotgun","shotgun",396735416),new cljs.core.Keyword(null,"shotgun","shotgun",396735416),new cljs.core.Keyword(null,"shotgun","shotgun",396735416),new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"brains","brains",-64810970)], null);
}
if((typeof zombiedice !== 'undefined') && (typeof zombiedice.entities !== 'undefined') && (typeof zombiedice.entities.dice !== 'undefined') && (typeof zombiedice.entities.dice.yellow_dice !== 'undefined')){
} else {
zombiedice.entities.dice.yellow_dice = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shotgun","shotgun",396735416),new cljs.core.Keyword(null,"shotgun","shotgun",396735416),new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"brains","brains",-64810970),new cljs.core.Keyword(null,"brains","brains",-64810970)], null);
}
if((typeof zombiedice !== 'undefined') && (typeof zombiedice.entities !== 'undefined') && (typeof zombiedice.entities.dice !== 'undefined') && (typeof zombiedice.entities.dice.green_dice !== 'undefined')){
} else {
zombiedice.entities.dice.green_dice = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shotgun","shotgun",396735416),new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"brains","brains",-64810970),new cljs.core.Keyword(null,"brains","brains",-64810970),new cljs.core.Keyword(null,"brains","brains",-64810970)], null);
}
/**
 * Gets a dices faces by color. Can be red yellow or green
 */
zombiedice.entities.dice.get_dice = (function zombiedice$entities$dice$get_dice(dice_color){
var G__16751 = dice_color;
var G__16751__$1 = (((G__16751 instanceof cljs.core.Keyword))?G__16751.fqn:null);
switch (G__16751__$1) {
case "red":
return zombiedice.entities.dice.red_dice;

break;
case "yellow":
return zombiedice.entities.dice.yellow_dice;

break;
case "green":
return zombiedice.entities.dice.green_dice;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16751__$1)].join('')));

}
});
/**
 * There are 13 dice to start each play, 3 red, 4 yellow and 6 green. Create shuffled vector
 */
zombiedice.entities.dice.init_dice = (function zombiedice$entities$dice$init_dice(){
return cljs.core.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),new cljs.core.Keyword(null,"red","red",-969428204)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),new cljs.core.Keyword(null,"yellow","yellow",-881035449)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),new cljs.core.Keyword(null,"green","green",-945526839))], 0)));
});
/**
 * Take n dices from the current dice array
 */
zombiedice.entities.dice.take_dice = (function zombiedice$entities$dice$take_dice(dice_pot,count){
return cljs.core.split_at(count,dice_pot);
});
/**
 * Return the dice color and randomly chosen face
 */
zombiedice.entities.dice.roll_dice = (function zombiedice$entities$dice$roll_dice(d){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),d,new cljs.core.Keyword(null,"face","face",-1356480717),cljs.core.rand_nth(zombiedice.entities.dice.get_dice(d))], null);
});
zombiedice.entities.dice.roll_dices = (function zombiedice$entities$dice$roll_dices(dices){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(zombiedice.entities.dice.roll_dice,dices);
});
zombiedice.entities.dice.filter_shots = (function zombiedice$entities$dice$filter_shots(dices){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shotgun","shotgun",396735416),new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(x));
}),dices);
});
zombiedice.entities.dice.count_shots = (function zombiedice$entities$dice$count_shots(dices){
return cljs.core.count(zombiedice.entities.dice.filter_shots(dices));
});
zombiedice.entities.dice.filter_brains = (function zombiedice$entities$dice$filter_brains(dices){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brains","brains",-64810970),new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(x));
}),dices);
});
zombiedice.entities.dice.count_brains = (function zombiedice$entities$dice$count_brains(dices){
return cljs.core.count(zombiedice.entities.dice.filter_brains(dices));
});
zombiedice.entities.dice.filter_feet = (function zombiedice$entities$dice$filter_feet(dices){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(x));
}),dices);
});
zombiedice.entities.dice.count_feet = (function zombiedice$entities$dice$count_feet(dices){
return cljs.core.count(zombiedice.entities.dice.filter_feet(dices));
});
zombiedice.entities.dice.get_colors = (function zombiedice$entities$dice$get_colors(dices){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(d);
}),dices);
});

//# sourceMappingURL=zombiedice.entities.dice.js.map
