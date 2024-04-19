var getGlobal = require("can-globals/global/global");
var global = getGlobal();

// AMD loader
module.exports = function(moduleName){
	if(global.define && global.define.amd){
		return new Promise(function(resolve, reject) {
			global.require([moduleName], function(value){
				resolve(value);
			});
		});
	}
};
