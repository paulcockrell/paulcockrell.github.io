goog.provide('zombiedice.frontend.kaplay');
var module$node_modules$kaplay$dist$kaplay_cjs=shadow.js.require("module$node_modules$kaplay$dist$kaplay_cjs", {});
zombiedice.frontend.kaplay.init = (function zombiedice$frontend$kaplay$init(config){
return module$node_modules$kaplay$dist$kaplay_cjs.default(cljs.core.clj__GT_js(config));
});
zombiedice.frontend.kaplay.sprite = (function zombiedice$frontend$kaplay$sprite(var_args){
var G__12019 = arguments.length;
switch (G__12019) {
case 2:
return zombiedice.frontend.kaplay.sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zombiedice.frontend.kaplay.sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.sprite.cljs$core$IFn$_invoke$arity$2 = (function (kaplay,name){
return kaplay.sprite(name);
}));

(zombiedice.frontend.kaplay.sprite.cljs$core$IFn$_invoke$arity$3 = (function (kaplay,name,opts){
return kaplay.sprite(name,cljs.core.clj__GT_js(opts));
}));

(zombiedice.frontend.kaplay.sprite.cljs$lang$maxFixedArity = 3);

zombiedice.frontend.kaplay.load_sprite = (function zombiedice$frontend$kaplay$load_sprite(var_args){
var G__12021 = arguments.length;
switch (G__12021) {
case 3:
return zombiedice.frontend.kaplay.load_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zombiedice.frontend.kaplay.load_sprite.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.load_sprite.cljs$core$IFn$_invoke$arity$3 = (function (kaplay,name,url){
return kaplay.loadSprite(name,url);
}));

(zombiedice.frontend.kaplay.load_sprite.cljs$core$IFn$_invoke$arity$4 = (function (kaplay,name,url,opts){
return kaplay.loadSprite(name,url,cljs.core.clj__GT_js(opts));
}));

(zombiedice.frontend.kaplay.load_sprite.cljs$lang$maxFixedArity = 4);

zombiedice.frontend.kaplay.set_gravity = (function zombiedice$frontend$kaplay$set_gravity(kaplay,val){
return kaplay.setGravity(val);
});
zombiedice.frontend.kaplay.add = (function zombiedice$frontend$kaplay$add(kaplay,component_array){
return kaplay.add(cljs.core.clj__GT_js(component_array));
});
zombiedice.frontend.kaplay.readd = (function zombiedice$frontend$kaplay$readd(kaplay,component_array){
return kaplay.readd(cljs.core.clj__GT_js(component_array));
});
zombiedice.frontend.kaplay.on_button_press = (function zombiedice$frontend$kaplay$on_button_press(kaplay,button,cb){
return kaplay.onButtonPress(button,cb);
});
zombiedice.frontend.kaplay.play_anim = (function zombiedice$frontend$kaplay$play_anim(component,anim){
return component.play(anim);
});
zombiedice.frontend.kaplay.play_sound = (function zombiedice$frontend$kaplay$play_sound(var_args){
var G__12023 = arguments.length;
switch (G__12023) {
case 2:
return zombiedice.frontend.kaplay.play_sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zombiedice.frontend.kaplay.play_sound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.play_sound.cljs$core$IFn$_invoke$arity$2 = (function (kaplay,sound){
return kaplay.play(sound);
}));

(zombiedice.frontend.kaplay.play_sound.cljs$core$IFn$_invoke$arity$3 = (function (kaplay,sound,opts){
return kaplay.play(sound,cljs.core.clj__GT_js(opts));
}));

(zombiedice.frontend.kaplay.play_sound.cljs$lang$maxFixedArity = 3);

zombiedice.frontend.kaplay.is_grounded = (function zombiedice$frontend$kaplay$is_grounded(component){
return component.isGrounded();
});
zombiedice.frontend.kaplay.jump = (function zombiedice$frontend$kaplay$jump(var_args){
var G__12025 = arguments.length;
switch (G__12025) {
case 1:
return zombiedice.frontend.kaplay.jump.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zombiedice.frontend.kaplay.jump.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.jump.cljs$core$IFn$_invoke$arity$1 = (function (component){
return component.jump();
}));

(zombiedice.frontend.kaplay.jump.cljs$core$IFn$_invoke$arity$2 = (function (component,force){
return component.jump(force);
}));

(zombiedice.frontend.kaplay.jump.cljs$lang$maxFixedArity = 2);

zombiedice.frontend.kaplay.on_ground = (function zombiedice$frontend$kaplay$on_ground(component,cb){
return component.onGround(cb);
});
zombiedice.frontend.kaplay.scale = (function zombiedice$frontend$kaplay$scale(kaplay,val){
return kaplay.scale(val);
});
zombiedice.frontend.kaplay.area = (function zombiedice$frontend$kaplay$area(var_args){
var G__12027 = arguments.length;
switch (G__12027) {
case 1:
return zombiedice.frontend.kaplay.area.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zombiedice.frontend.kaplay.area.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.area.cljs$core$IFn$_invoke$arity$1 = (function (kaplay){
return kaplay.area();
}));

(zombiedice.frontend.kaplay.area.cljs$core$IFn$_invoke$arity$2 = (function (kaplay,opts){
return kaplay.area(cljs.core.clj__GT_js(opts));
}));

(zombiedice.frontend.kaplay.area.cljs$lang$maxFixedArity = 2);

zombiedice.frontend.kaplay.anchor = (function zombiedice$frontend$kaplay$anchor(kaplay,pos){
return kaplay.anchor(pos);
});
zombiedice.frontend.kaplay.body = (function zombiedice$frontend$kaplay$body(kaplay,opts){
return kaplay.body(cljs.core.clj__GT_js(opts));
});
zombiedice.frontend.kaplay.pos = (function zombiedice$frontend$kaplay$pos(kaplay,x,y){
return kaplay.pos(x,y);
});
zombiedice.frontend.kaplay.opacity = (function zombiedice$frontend$kaplay$opacity(kaplay,val){
return kaplay.opacity(val);
});
zombiedice.frontend.kaplay.load_sound = (function zombiedice$frontend$kaplay$load_sound(kaplay,name,url){
return kaplay.loadSound(name,url);
});
zombiedice.frontend.kaplay.load_font = (function zombiedice$frontend$kaplay$load_font(kaplay,name,url){
return kaplay.loadFont(name,url);
});
zombiedice.frontend.kaplay.on_update = (function zombiedice$frontend$kaplay$on_update(kaplay,cb){
return kaplay.onUpdate(cb);
});
zombiedice.frontend.kaplay.move = (function zombiedice$frontend$kaplay$move(component,x,y){
return component.move(x,y);
});
zombiedice.frontend.kaplay.move_to = (function zombiedice$frontend$kaplay$move_to(component,x,y){
return component.moveTo(x,y);
});
zombiedice.frontend.kaplay.offscreen = (function zombiedice$frontend$kaplay$offscreen(kaplay,opts){
return kaplay.offscreen(cljs.core.clj__GT_js(opts));
});
zombiedice.frontend.kaplay.z_index = (function zombiedice$frontend$kaplay$z_index(k,idx){
return k.z(idx);
});
zombiedice.frontend.kaplay.vec2 = (function zombiedice$frontend$kaplay$vec2(var_args){
var G__12029 = arguments.length;
switch (G__12029) {
case 2:
return zombiedice.frontend.kaplay.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zombiedice.frontend.kaplay.vec2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.vec2.cljs$core$IFn$_invoke$arity$2 = (function (kaplay,val){
return zombiedice.frontend.kaplay.vec2.cljs$core$IFn$_invoke$arity$3(kaplay,val,val);
}));

(zombiedice.frontend.kaplay.vec2.cljs$core$IFn$_invoke$arity$3 = (function (kaplay,val_a,val_b){
return kaplay.vec2(val_a,val_b);
}));

(zombiedice.frontend.kaplay.vec2.cljs$lang$maxFixedArity = 3);

zombiedice.frontend.kaplay.rect = (function zombiedice$frontend$kaplay$rect(var_args){
var G__12031 = arguments.length;
switch (G__12031) {
case 3:
return zombiedice.frontend.kaplay.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return zombiedice.frontend.kaplay.rect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.rect.cljs$core$IFn$_invoke$arity$3 = (function (kaplay,w,h){
return kaplay.rect(w,h);
}));

(zombiedice.frontend.kaplay.rect.cljs$core$IFn$_invoke$arity$5 = (function (kaplay,x,y,w,h){
return kaplay.rect(zombiedice.frontend.kaplay.vec2.cljs$core$IFn$_invoke$arity$3(kaplay,x,y),w,h);
}));

(zombiedice.frontend.kaplay.rect.cljs$lang$maxFixedArity = 5);

zombiedice.frontend.kaplay.wait = (function zombiedice$frontend$kaplay$wait(kaplay,time,cb){
return kaplay.wait(time,cb);
});
zombiedice.frontend.kaplay.destroy = (function zombiedice$frontend$kaplay$destroy(component,cb){
return component.destroy(cb);
});
zombiedice.frontend.kaplay.on_collide = (function zombiedice$frontend$kaplay$on_collide(component,tag,cb){
return component.onCollide(tag,cb);
});
zombiedice.frontend.kaplay.k_rand = (function zombiedice$frontend$kaplay$k_rand(kaplay,min,max){
return kaplay.rand(min,max);
});
zombiedice.frontend.kaplay.scene = (function zombiedice$frontend$kaplay$scene(kaplay,scene_key,scene){
return kaplay.scene(scene_key,scene);
});
zombiedice.frontend.kaplay.go = (function zombiedice$frontend$kaplay$go(var_args){
var G__12033 = arguments.length;
switch (G__12033) {
case 2:
return zombiedice.frontend.kaplay.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zombiedice.frontend.kaplay.go.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombiedice.frontend.kaplay.go.cljs$core$IFn$_invoke$arity$2 = (function (kaplay,scene_key){
return kaplay.go(scene_key,kaplay);
}));

(zombiedice.frontend.kaplay.go.cljs$core$IFn$_invoke$arity$3 = (function (kaplay,scene_key,opts){
return kaplay.go(scene_key,kaplay,opts);
}));

(zombiedice.frontend.kaplay.go.cljs$lang$maxFixedArity = 3);

zombiedice.frontend.kaplay.text = (function zombiedice$frontend$kaplay$text(kaplay,str,opts){
return kaplay.text(str,cljs.core.clj__GT_js(opts));
});
zombiedice.frontend.kaplay.center = (function zombiedice$frontend$kaplay$center(kaplay){
return kaplay.center();
});
zombiedice.frontend.kaplay.color = (function zombiedice$frontend$kaplay$color(kaplay,r,g,b){
return kaplay.color(r,g,b);
});
zombiedice.frontend.kaplay.get_children = (function zombiedice$frontend$kaplay$get_children(component,key){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(component.get(key));
});
zombiedice.frontend.kaplay.kloop = (function zombiedice$frontend$kaplay$kloop(k,time,cb){
return k.loop(time,cb);
});

//# sourceMappingURL=zombiedice.frontend.kaplay.js.map
