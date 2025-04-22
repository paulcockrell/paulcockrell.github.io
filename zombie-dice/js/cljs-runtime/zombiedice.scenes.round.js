goog.provide('zombiedice.scenes.round');
zombiedice.scenes.round.make_round = (function zombiedice$scenes$round$make_round(k){
var state = (zombiedice.state.state_manager.load_state.cljs$core$IFn$_invoke$arity$1 ? zombiedice.state.state_manager.load_state.cljs$core$IFn$_invoke$arity$1(k) : zombiedice.state.state_manager.load_state.call(null, k));
zombiedice.frontend.kaplay.add(k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.kaplay.text(k,"ZOMBIE DICE",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"mainia",new cljs.core.Keyword(null,"size","size",1098693007),(96)], null)),zombiedice.frontend.kaplay.pos(k,zombiedice.frontend.kaplay.center(k).x,(200))], null));

var player_12212 = zombiedice.state.state_manager.get_current_player(state);
zombiedice.frontend.kaplay.add(k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.kaplay.text(k,["Current Player: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player_12212))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"mainia",new cljs.core.Keyword(null,"size","size",1098693007),(50)], null)),zombiedice.frontend.kaplay.pos(k,zombiedice.frontend.kaplay.center(k).x,(300))], null));

zombiedice.frontend.kaplay.add(k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.kaplay.text(k,"Press space/click to roll dice",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"mainia",new cljs.core.Keyword(null,"size","size",1098693007),(50)], null)),zombiedice.frontend.kaplay.pos(k,zombiedice.frontend.kaplay.center(k).x,(350))], null));

return zombiedice.frontend.kaplay.on_button_press(k,"roll",(function (){
var vec__12209 = zombiedice.entities.dice.take_dice(new cljs.core.Keyword(null,"remaining-dice","remaining-dice",1021652685).cljs$core$IFn$_invoke$arity$1(state),(3));
var current_dice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(0),null);
var remaining_dice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(1),null);
var hand = zombiedice.entities.dice.roll_dices(current_dice);
return console.log("Roll the dice!",cljs.core.clj__GT_js(hand));
}));
});

//# sourceMappingURL=zombiedice.scenes.round.js.map
