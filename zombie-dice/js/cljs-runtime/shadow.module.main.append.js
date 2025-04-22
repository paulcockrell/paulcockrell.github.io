
shadow.cljs.devtools.client.env.module_loaded('main');

try { zombiedice.frontend.app.init(); } catch (e) { console.error("An error occurred when calling (zombiedice.frontend.app/init)"); console.error(e); }