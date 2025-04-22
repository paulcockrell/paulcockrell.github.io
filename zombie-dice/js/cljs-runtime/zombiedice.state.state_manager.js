goog.provide('zombiedice.state.state_manager');
zombiedice.state.state_manager.initial_game_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-dice","current-dice",-1885981762),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remaining-dice","remaining-dice",1021652685),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"throws","throws",-562342583),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"adding-players","adding-players",-1752232424),new cljs.core.Keyword(null,"round","round",2009433328),(1)], null);
if((typeof zombiedice !== 'undefined') && (typeof zombiedice.state !== 'undefined') && (typeof zombiedice.state.state_manager !== 'undefined') && (typeof zombiedice.state.state_manager.game_state !== 'undefined')){
} else {
zombiedice.state.state_manager.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.initial_game_state);
}
zombiedice.state.state_manager.save_game_state_BANG_ = (function zombiedice$state$state_manager$save_game_state_BANG_(game_state,new_game_state){
return cljs.core.reset_BANG_(game_state,new_game_state);
});
zombiedice.state.state_manager.allowed_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"turn-over","turn-over",225020578),null,new cljs.core.Keyword(null,"in-game","in-game",-1908519607),null,new cljs.core.Keyword(null,"adding-players","adding-players",-1752232424),null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),null], null), null);
zombiedice.state.state_manager.transition_rules = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"adding-players","adding-players",-1752232424),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in-game","in-game",-1908519607),null], null), null),new cljs.core.Keyword(null,"in-game","in-game",-1908519607),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"turn-over","turn-over",225020578),null,new cljs.core.Keyword(null,"in-game","in-game",-1908519607),null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),null], null), null),new cljs.core.Keyword(null,"turn-over","turn-over",225020578),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in-game","in-game",-1908519607),null], null), null),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"adding-players","adding-players",-1752232424),null], null), null)], null);
zombiedice.state.state_manager.valid_transition_QMARK_ = (function zombiedice$state$state_manager$valid_transition_QMARK_(from,to){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(zombiedice.state.state_manager.transition_rules,from,cljs.core.PersistentHashSet.EMPTY),to);
});
zombiedice.state.state_manager.get_action = (function zombiedice$state$state_manager$get_action(game_state){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state));
});
zombiedice.state.state_manager.set_action = (function zombiedice$state$state_manager$set_action(game_state,new_action){
var current_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.not((zombiedice.state.state_manager.allowed_actions.cljs$core$IFn$_invoke$arity$1 ? zombiedice.state.state_manager.allowed_actions.cljs$core$IFn$_invoke$arity$1(new_action) : zombiedice.state.state_manager.allowed_actions.call(null, new_action)))){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid action",new_action], 0));
} else {
if((!(zombiedice.state.state_manager.valid_transition_QMARK_(current_action,new_action)))){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid state transition:",current_action,"\u2192",new_action], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"action","action",-811238024),new_action);

}
}
});
zombiedice.state.state_manager.get_round = (function zombiedice$state$state_manager$get_round(game_state){
return new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(game_state);
});
zombiedice.state.state_manager.get_players = (function zombiedice$state$state_manager$get_players(game_state){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game_state);
});
zombiedice.state.state_manager.get_players_sorted = (function zombiedice$state$state_manager$get_players_sorted(game_state){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),zombiedice.state.state_manager.get_players(game_state));
});
zombiedice.state.state_manager.get_active_players = (function zombiedice$state$state_manager$get_active_players(game_state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return ((13) > new cljs.core.Keyword(null,"brains","brains",-64810970).cljs$core$IFn$_invoke$arity$1(p));
}),zombiedice.state.state_manager.get_players(game_state));
});
zombiedice.state.state_manager.get_current_player = (function zombiedice$state$state_manager$get_current_player(game_state){
return cljs.core.first(zombiedice.state.state_manager.get_players(game_state));
});
zombiedice.state.state_manager.get_current_dice = (function zombiedice$state$state_manager$get_current_dice(game_state){
return new cljs.core.Keyword(null,"current-dice","current-dice",-1885981762).cljs$core$IFn$_invoke$arity$1(game_state);
});
zombiedice.state.state_manager.invalid_name_size_QMARK_ = (function zombiedice$state$state_manager$invalid_name_size_QMARK_(name){
return (((cljs.core.count(name) < (2))) || ((cljs.core.count(name) > (10))));
});
zombiedice.state.state_manager.name_taken_QMARK_ = (function zombiedice$state$state_manager$name_taken_QMARK_(game_state,name){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,name),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),zombiedice.state.state_manager.get_players(game_state)));
});
zombiedice.state.state_manager.max_players_QMARK_ = (function zombiedice$state$state_manager$max_players_QMARK_(game_state){
return ((5) <= cljs.core.count(zombiedice.state.state_manager.get_players(game_state)));
});
zombiedice.state.state_manager.valid_name_QMARK_ = (function zombiedice$state$state_manager$valid_name_QMARK_(game_state,name){
if(zombiedice.state.state_manager.invalid_name_size_QMARK_(name)){
return false;
} else {
if(cljs.core.truth_(zombiedice.state.state_manager.name_taken_QMARK_(game_state,name))){
return false;
} else {
if(zombiedice.state.state_manager.max_players_QMARK_(game_state)){
return false;
} else {
return true;

}
}
}
});
/**
 * Add player to the game states players key
 */
zombiedice.state.state_manager.add_player = (function zombiedice$state$state_manager$add_player(game_state,name){
if(zombiedice.state.state_manager.valid_name_QMARK_(game_state,name)){
var players = zombiedice.state.state_manager.get_players(game_state);
var position = ((1) + cljs.core.count(players));
var new_player = zombiedice.entities.player.init_player.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"position","position",-2011731912),position], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(players,new_player));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid name. Must be between 2 and 10 characters and not be taken."], 0));

return game_state;
}
});
zombiedice.state.state_manager.add_dice = (function zombiedice$state$state_manager$add_dice(var_args){
var G__12531 = arguments.length;
switch (G__12531) {
case 2:
return zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$2 = (function (game_state,dice){
return zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$3(game_state,cljs.core.PersistentVector.EMPTY,dice);
}));

(zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$3 = (function (game_state,current_dice,remaining_dice){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game_state,new cljs.core.Keyword(null,"current-dice","current-dice",-1885981762),current_dice,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remaining-dice","remaining-dice",1021652685),remaining_dice], 0));
}));

(zombiedice.state.state_manager.add_dice.cljs$lang$maxFixedArity = 3);

/**
 * Take 3 dice from the pot of dice and roll them. Returns list of current
 *   (rolled) dice and remaining dice. If your current dice have 'feet' these will
 *   be kept for the next roll and the others replaced from the pot
 */
zombiedice.state.state_manager.roll_dice = (function zombiedice$state$state_manager$roll_dice(game_state){
var last_round_feet_dice = zombiedice.entities.dice.filter_feet(new cljs.core.Keyword(null,"current-dice","current-dice",-1885981762).cljs$core$IFn$_invoke$arity$1(game_state));
var number_of_new_dices_to_take = ((((0) < cljs.core.count(last_round_feet_dice)))?((3) - cljs.core.count(last_round_feet_dice)):(3));
var vec__12532 = zombiedice.entities.dice.take_dice(new cljs.core.Keyword(null,"remaining-dice","remaining-dice",1021652685).cljs$core$IFn$_invoke$arity$1(game_state),number_of_new_dices_to_take);
var current_dice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(0),null);
var remaining_dice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(1),null);
var new_dice = cljs.core.into.cljs$core$IFn$_invoke$arity$2(current_dice,zombiedice.entities.dice.get_colors(last_round_feet_dice));
return zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$3(game_state,zombiedice.entities.dice.roll_dices(new_dice),remaining_dice);
});
zombiedice.state.state_manager.record_throw = (function zombiedice$state$state_manager$record_throw(game_state){
var dice = zombiedice.state.state_manager.get_current_dice(game_state);
var feet_count = zombiedice.entities.dice.count_feet(dice);
var shot_count = zombiedice.entities.dice.count_shots(dice);
var brain_count = zombiedice.entities.dice.count_brains(dice);
var current_throws = new cljs.core.Keyword(null,"throws","throws",-562342583).cljs$core$IFn$_invoke$arity$1(game_state);
var new_throw = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"throw","throw",-1044625833),((1) + cljs.core.count(current_throws)),new cljs.core.Keyword(null,"feet","feet",-92616651),feet_count,new cljs.core.Keyword(null,"shots","shots",-1155689265),shot_count,new cljs.core.Keyword(null,"brains","brains",-64810970),brain_count], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"throws","throws",-562342583),cljs.core.cons(new_throw,current_throws));
});
zombiedice.state.state_manager.reset_throws = (function zombiedice$state$state_manager$reset_throws(game_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"throws","throws",-562342583),cljs.core.List.EMPTY);
});
zombiedice.state.state_manager.get_throws = (function zombiedice$state$state_manager$get_throws(game_state){
return new cljs.core.Keyword(null,"throws","throws",-562342583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state));
});
zombiedice.state.state_manager.merge_sum = (function zombiedice$state$state_manager$merge_sum(maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,m){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,m], 0));
}),cljs.core.PersistentArrayMap.EMPTY,maps);
});
zombiedice.state.state_manager.get_throw_totals = (function zombiedice$state$state_manager$get_throw_totals(game_state){
return zombiedice.state.state_manager.merge_sum(new cljs.core.Keyword(null,"throws","throws",-562342583).cljs$core$IFn$_invoke$arity$1(game_state));
});
zombiedice.state.state_manager.get_current_player_brains = (function zombiedice$state$state_manager$get_current_player_brains(game_state){
return new cljs.core.Keyword(null,"brains","brains",-64810970).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_current_player(game_state));
});
/**
 * Saves current round brains to player brain tally
 */
zombiedice.state.state_manager.update_player_brains = (function zombiedice$state$state_manager$update_player_brains(game_state){
var current_player = zombiedice.state.state_manager.get_current_player(game_state);
var players = zombiedice.state.state_manager.get_players(game_state);
var brains = new cljs.core.Keyword(null,"brains","brains",-64810970).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_throw_totals(game_state));
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"in-game","in-game",-1908519607))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(players,(0),zombiedice.entities.player.add_brains(current_player,brains)));
} else {
return game_state;
}
});
zombiedice.state.state_manager.process_hand = (function zombiedice$state$state_manager$process_hand(game_state){
return zombiedice.state.state_manager.record_throw(zombiedice.state.state_manager.roll_dice(game_state));
});
zombiedice.state.state_manager.move_current_player_to_last = (function zombiedice$state$state_manager$move_current_player_to_last(game_state){
var players = zombiedice.state.state_manager.get_active_players(game_state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(players),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(players)], null))));
});
zombiedice.state.state_manager.update_round_counter = (function zombiedice$state$state_manager$update_round_counter(game_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_current_player(game_state)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"round","round",2009433328),(new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(game_state) + (1)));
} else {
return game_state;
}
});
zombiedice.state.state_manager.start_game_BANG_ = (function zombiedice$state$state_manager$start_game_BANG_(game_state){
var new_state = zombiedice.state.state_manager.set_action(cljs.core.deref(game_state),new cljs.core.Keyword(null,"in-game","in-game",-1908519607));
return zombiedice.state.state_manager.save_game_state_BANG_(game_state,new_state);
});
zombiedice.state.state_manager.loose_turn = (function zombiedice$state$state_manager$loose_turn(game_state){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Oh no you got shot too many times, you loose all your brains from this round!"], 0));

return zombiedice.state.state_manager.set_action(game_state,new cljs.core.Keyword(null,"turn-over","turn-over",225020578));
});
zombiedice.state.state_manager.win_game = (function zombiedice$state$state_manager$win_game(game_state){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_current_player(game_state)))," has won the game!"].join('')], 0));

return zombiedice.state.state_manager.set_action(game_state,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
});
zombiedice.state.state_manager.check_hand = (function zombiedice$state$state_manager$check_hand(game_state){
var current_player_brains = zombiedice.state.state_manager.get_current_player_brains(game_state);
var throw_brains = new cljs.core.Keyword(null,"brains","brains",-64810970).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_throw_totals(game_state));
var throw_shots = new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_throw_totals(game_state));
var player_total_brains = (current_player_brains + throw_brains);
if(((3) <= throw_shots)){
return zombiedice.state.state_manager.loose_turn(game_state);
} else {
if(((13) <= player_total_brains)){
return zombiedice.state.state_manager.win_game(game_state);
} else {
return game_state;

}
}
});

//# sourceMappingURL=zombiedice.state.state_manager.js.map
