goog.provide('zombiedice.frontend.app');
zombiedice.frontend.app.yield_turn_BANG_ = (function zombiedice$frontend$app$yield_turn_BANG_(game_state){
var new_game_state = zombiedice.state.state_manager.set_action(zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.update_round_counter(zombiedice.state.state_manager.reset_throws(zombiedice.state.state_manager.move_current_player_to_last(zombiedice.state.state_manager.update_player_brains(cljs.core.deref(game_state))))),zombiedice.entities.dice.init_dice()),new cljs.core.Keyword(null,"in-game","in-game",-1908519607));
return zombiedice.state.state_manager.save_game_state_BANG_(game_state,new_game_state);
});
zombiedice.frontend.app.reset_game_BANG_ = (function zombiedice$frontend$app$reset_game_BANG_(game_state){
var new_game_state = zombiedice.state.state_manager.add_dice.cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.initial_game_state,zombiedice.entities.dice.init_dice());
return zombiedice.state.state_manager.save_game_state_BANG_(game_state,new_game_state);
});
zombiedice.frontend.app.play_turn_BANG_ = (function zombiedice$frontend$app$play_turn_BANG_(game_state){
var new_game_state = zombiedice.state.state_manager.check_hand(zombiedice.state.state_manager.process_hand(cljs.core.deref(game_state)));
return zombiedice.state.state_manager.save_game_state_BANG_(game_state,new_game_state);
});
zombiedice.frontend.app.looser_alert_component = (function zombiedice$frontend$app$looser_alert_component(game_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-secondary/50 border-b border-secondary/40 text-amber-700 text-sm p-4 flex justify-between"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-4","span.pr-4",-260115100),"\uD83D\uDCA5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_current_player(cljs.core.deref(game_state))))," has been shot too many times!"].join('')], null)], null)], null)], null);
});
zombiedice.frontend.app.winner_alert_component = (function zombiedice$frontend$app$winner_alert_component(game_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-primary/50 border-b border-primary/40 text-lime-700 text-sm p-4 flex justify-between"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-4","span.pr-4",-260115100),"\uD83E\uDDDF\u200D\u2642\uFE0F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(zombiedice.state.state_manager.get_current_player(cljs.core.deref(game_state))))," has won!"].join('')], null)], null)], null)], null);
});
/**
 * Render a table of players in the game with their accumulated brain
 *   consumption tally
 */
zombiedice.frontend.app.score_board_table = (function zombiedice$frontend$app$score_board_table(game_state){
var players = zombiedice.state.state_manager.get_players_sorted(cljs.core.deref(game_state));
var current_player = zombiedice.state.state_manager.get_current_player(cljs.core.deref(game_state));
if(((0) < cljs.core.count(players))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full caption-bottom text-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"[&_tr]:border-b"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 text-left align-middle font-medium text-muted-foreground w-[100px]"], null),"Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 align-middle font-medium text-muted-foreground text-right"], null),"Position"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 align-middle font-medium text-muted-foreground text-right"], null),"Rank"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 align-middle font-medium text-muted-foreground text-right"], null),"Brains"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"[&_tr:last-child]:border-0"], null),(function (){var iter__5480__auto__ = (function zombiedice$frontend$app$score_board_table_$_iter__13350(s__13351){
return (new cljs.core.LazySeq(null,(function (){
var s__13351__$1 = s__13351;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13351__$1);
if(temp__5804__auto__){
var s__13351__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13351__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13351__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13353 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13352 = (0);
while(true){
if((i__13352 < size__5479__auto__)){
var map__13354 = cljs.core._nth(c__5478__auto__,i__13352);
var map__13354__$1 = cljs.core.__destructure_map(map__13354);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13354__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var brains = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13354__$1,new cljs.core.Keyword(null,"brains","brains",-64810970));
cljs.core.chunk_append(b__13353,(function (){var is_current_player_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_player));
var tr_class = ((is_current_player_QMARK_)?"border-b bg-primary/10":"border-b");
var player_name = ((is_current_player_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," \uD83C\uDFB2"].join(''):name);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"class","class",-2030961996),tr_class], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle font-medium"], null),player_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),position], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),brains], null)], null);
})());

var G__13367 = (i__13352 + (1));
i__13352 = G__13367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13353),zombiedice$frontend$app$score_board_table_$_iter__13350(cljs.core.chunk_rest(s__13351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13353),null);
}
} else {
var map__13355 = cljs.core.first(s__13351__$2);
var map__13355__$1 = cljs.core.__destructure_map(map__13355);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var brains = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,new cljs.core.Keyword(null,"brains","brains",-64810970));
return cljs.core.cons((function (){var is_current_player_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_player));
var tr_class = ((is_current_player_QMARK_)?"border-b bg-primary/10":"border-b");
var player_name = ((is_current_player_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," \uD83C\uDFB2"].join(''):name);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"class","class",-2030961996),tr_class], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle font-medium"], null),player_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),position], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),brains], null)], null);
})(),zombiedice$frontend$app$score_board_table_$_iter__13350(cljs.core.rest(s__13351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(players);
})()], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full caption-bottom text-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"[&_tr:last-child]:border-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"No players - add between 2 and 5 to start"], null)], null)], null)], null);
}
});
zombiedice.frontend.app.current_round_stats_table = (function zombiedice$frontend$app$current_round_stats_table(game_state){
var throws$ = zombiedice.state.state_manager.get_throws(game_state);
var throw_totals = zombiedice.state.state_manager.get_throw_totals(cljs.core.deref(game_state));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full caption-bottom text-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"[&_tr]:border-b"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 text-left align-middle font-medium text-muted-foreground w-[100px]"], null),"Throw"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 align-middle font-medium text-muted-foreground text-right"], null),"Feet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 align-middle font-medium text-muted-foreground text-right"], null),"Shotguns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-2 align-middle font-medium text-muted-foreground text-right"], null),"Brains"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"[&_tr:last-child]:border-0"], null),(function (){var iter__5480__auto__ = (function zombiedice$frontend$app$current_round_stats_table_$_iter__13356(s__13357){
return (new cljs.core.LazySeq(null,(function (){
var s__13357__$1 = s__13357;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13357__$1);
if(temp__5804__auto__){
var s__13357__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13357__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13357__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13359 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13358 = (0);
while(true){
if((i__13358 < size__5479__auto__)){
var map__13360 = cljs.core._nth(c__5478__auto__,i__13358);
var map__13360__$1 = cljs.core.__destructure_map(map__13360);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13360__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var feet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13360__$1,new cljs.core.Keyword(null,"feet","feet",-92616651));
var shots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13360__$1,new cljs.core.Keyword(null,"shots","shots",-1155689265));
var brains = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13360__$1,new cljs.core.Keyword(null,"brains","brains",-64810970));
cljs.core.chunk_append(b__13359,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle font-medium"], null),throw$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),feet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),shots], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),brains], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__13368 = (i__13358 + (1));
i__13358 = G__13368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13359),zombiedice$frontend$app$current_round_stats_table_$_iter__13356(cljs.core.chunk_rest(s__13357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13359),null);
}
} else {
var map__13361 = cljs.core.first(s__13357__$2);
var map__13361__$1 = cljs.core.__destructure_map(map__13361);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var feet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"feet","feet",-92616651));
var shots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"shots","shots",-1155689265));
var brains = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"brains","brains",-64810970));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle font-medium"], null),throw$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),feet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),shots], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),brains], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),zombiedice$frontend$app$current_round_stats_table_$_iter__13356(cljs.core.rest(s__13357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(throws$);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t bg-primary/10 font-medium [&>tr]:last:border-b-0"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle"], null),"Total"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),new cljs.core.Keyword(null,"feet","feet",-92616651).cljs$core$IFn$_invoke$arity$1(throw_totals)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(throw_totals)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 align-middle text-right"], null),new cljs.core.Keyword(null,"brains","brains",-64810970).cljs$core$IFn$_invoke$arity$1(throw_totals)], null)], null)], null)], null);
});
zombiedice.frontend.app.update_players = (function zombiedice$frontend$app$update_players(game_state,new_player){
var new_game_state = zombiedice.state.state_manager.add_player(cljs.core.deref(game_state),cljs.core.deref(new_player));
return zombiedice.state.state_manager.save_game_state_BANG_(game_state,new_game_state);
});
zombiedice.frontend.app.add_player_component = (function zombiedice$frontend$app$add_player_component(game_state){
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state)),new cljs.core.Keyword(null,"adding-players","adding-players",-1752232424))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.divider_horizontal], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-flow-col grid-rows-1 gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Player name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13362_SHARP_){
return cljs.core.reset_BANG_(name,p1__13362_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
zombiedice.frontend.app.update_players(game_state,name);

return cljs.core.reset_BANG_(name,"");
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Add",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
zombiedice.frontend.app.update_players(game_state,name);

return cljs.core.reset_BANG_(name,"");
})], null)], null)], null)], null);
} else {
return null;
}
});
});
zombiedice.frontend.app.start_game_component = (function zombiedice$frontend$app$start_game_component(game_state){
var is_adding_players_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state)),new cljs.core.Keyword(null,"adding-players","adding-players",-1752232424));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),((is_adding_players_QMARK_)?"Start game":"Restart game"),new cljs.core.Keyword(null,"full-width","full-width",1911330562),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.count(zombiedice.state.state_manager.get_players(cljs.core.deref(game_state))) < (2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(is_adding_players_QMARK_){
return zombiedice.state.state_manager.start_game_BANG_(game_state);
} else {
return zombiedice.frontend.app.reset_game_BANG_(zombiedice.state.state_manager.game_state);
}
})], null)], null);
});
zombiedice.frontend.app.stats_component = (function zombiedice$frontend$app$stats_component(game_state){
var round = zombiedice.state.state_manager.get_round(cljs.core.deref(game_state));
var players_count = cljs.core.count(zombiedice.state.state_manager.get_players(cljs.core.deref(game_state)));
var current_player = zombiedice.state.state_manager.get_current_player(cljs.core.deref(game_state));
var player_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(current_player);
var remaining_dice = cljs.core.count(new cljs.core.Keyword(null,"remaining-dice","remaining-dice",1021652685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 grid-rows-2 gap-0"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-30 flex flex-1 flex-col justify-center gap-1 border-t rounded-tl-lg border-primary text-left even:border sm:border sm:px-4 sm:py-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-600"], null),"Round"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold leading-none sm:text-lg text-center"], null),round], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-30 flex flex-1 flex-col justify-center gap-1 border-t rounded-tr-lg border-primary text-left sm:border sm:border-l-0 sm:px-4 sm:py-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-600"], null),"Turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold leading-none sm:text-lg text-center"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_position)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(players_count)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-30 flex flex-1 flex-col justify-center gap-1 border-t rounded-bl-lg border-primary text-left sm:border sm:border-t-0 sm:px-4 sm:py-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-600"], null),"Throw"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold leading-none sm:text-lg text-center"], null),cljs.core.count(new cljs.core.Keyword(null,"throws","throws",-562342583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-30 flex flex-1 flex-col justify-center gap-1 border-t rounded-br-lg border-primary text-left sm:border sm:border-t-0 sm:border-l-0 sm:px-4 sm:py-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-600"], null),"Dice remaining"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold leading-none sm:text-lg text-center"], null),remaining_dice], null)], null)], null);
});
zombiedice.frontend.app.current_dice_component = (function zombiedice$frontend$app$current_dice_component(game_state){
var dices = zombiedice.state.state_manager.get_current_dice(cljs.core.deref(game_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center gap-4 text-4xl"], null),(function (){var iter__5480__auto__ = (function zombiedice$frontend$app$current_dice_component_$_iter__13363(s__13364){
return (new cljs.core.LazySeq(null,(function (){
var s__13364__$1 = s__13364;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13364__$1);
if(temp__5804__auto__){
var s__13364__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13364__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13364__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13366 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13365 = (0);
while(true){
if((i__13365 < size__5479__auto__)){
var dice = cljs.core._nth(c__5478__auto__,i__13365);
cljs.core.chunk_append(b__13366,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["/images/dice-",cljs.core.name(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(dice)),"-",cljs.core.name(new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(dice)),".png"].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),"Descriptive text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"80px",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__13369 = (i__13365 + (1));
i__13365 = G__13369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13366),zombiedice$frontend$app$current_dice_component_$_iter__13363(cljs.core.chunk_rest(s__13364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13366),null);
}
} else {
var dice = cljs.core.first(s__13364__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["/images/dice-",cljs.core.name(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(dice)),"-",cljs.core.name(new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(dice)),".png"].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),"Descriptive text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"80px",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),zombiedice$frontend$app$current_dice_component_$_iter__13363(cljs.core.rest(s__13364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(dices);
})()], null);
});
zombiedice.frontend.app.game_ui_component = (function zombiedice$frontend$app$game_ui_component(game_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.get_action(game_state),new cljs.core.Keyword(null,"adding-players","adding-players",-1752232424))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.stats_component,game_state], null),(function (){var player_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.get_current_player(cljs.core.deref(game_state)),"n/a");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.section_title,["Current zombie - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.current_round_stats_table,game_state], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.section_title,"Dice rolled"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.current_dice_component,game_state], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.get_action(game_state),new cljs.core.Keyword(null,"turn-over","turn-over",225020578)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.looser_alert_component,game_state], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.get_action(game_state),new cljs.core.Keyword(null,"game-over","game-over",-607322695)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.winner_alert_component,game_state], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col sm:flex-row gap-2 justify-around"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Roll dice",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state)),new cljs.core.Keyword(null,"turn-over","turn-over",225020578))) || ((((cljs.core.count(new cljs.core.Keyword(null,"remaining-dice","remaining-dice",1021652685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game_state))) <= (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.get_action(game_state),new cljs.core.Keyword(null,"game-over","game-over",-607322695)))))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return zombiedice.frontend.app.play_turn_BANG_(game_state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Yield turn",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zombiedice.state.state_manager.get_action(game_state),new cljs.core.Keyword(null,"game-over","game-over",-607322695)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return zombiedice.frontend.app.yield_turn_BANG_(game_state);
})], null)], null)], null)], null);
} else {
return null;
}
});
zombiedice.frontend.app.players_ui_component = (function zombiedice$frontend$app$players_ui_component(game_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.card,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.section_title,"Score board"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.components.section_subtitle,"The first to eat at least 13 brains wins the game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.score_board_table,game_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.add_player_component,game_state], null)], null)], null);
});
zombiedice.frontend.app.zombie_dice_ui = (function zombiedice$frontend$app$zombie_dice_ui(game_state){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4 space-y-4 max-w-md mx-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold text-center"], null),"Zombie Dice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.players_ui_component,game_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.start_game_component,game_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombiedice.frontend.app.game_ui_component,game_state], null)], null);
});
zombiedice.frontend.app.mount_root = (function zombiedice$frontend$app$mount_root(){
var root = reagent.dom.client.create_root(document.getElementById("root"));
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(root,zombiedice.frontend.app.zombie_dice_ui(zombiedice.state.state_manager.game_state));
});
zombiedice.frontend.app.start = (function zombiedice$frontend$app$start(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Zombie Dice starting"], 0));

zombiedice.frontend.app.reset_game_BANG_(zombiedice.state.state_manager.game_state);

return zombiedice.frontend.app.mount_root();
});
zombiedice.frontend.app.init = (function zombiedice$frontend$app$init(){
return zombiedice.frontend.app.start();
});
zombiedice.frontend.app.stop = (function zombiedice$frontend$app$stop(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=zombiedice.frontend.app.js.map
