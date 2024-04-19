var getGlobal = require("can-globals/global/global");
var global = getGlobal();

function isFunction(fn) {
	return typeof fn === "function";
}
// since stealJS uses a SystemJS fork and SystemJS is exposed globally we can use this loader for SystemJS or stealJS
module.exports = function(moduleName, parentName) {
	if(typeof global.System === "object" && isFunction(global.System["import"])) {
		return global.System["import"](moduleName, {
			name: parentName
		});
	}
};
