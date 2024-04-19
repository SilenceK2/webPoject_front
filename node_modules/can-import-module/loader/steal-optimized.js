var getGlobal = require("can-globals/global/global");
var global = getGlobal();

module.exports = function(moduleName, parentName){
	if (typeof global.stealRequire !== "undefined") {
		return steal.import(moduleName, { name: parentName });
	}
};
