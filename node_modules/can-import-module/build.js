"use strict";
var stealTools = require("steal-tools");
var path = require("path");

function ignorer(path) {
	return path.indexOf("can-import-module") < 0;
}

stealTools.export({
	steal: {
		config: __dirname + "/package.json!npm"
	},
	outputs: {
		"+bundled-cjs": {
			modules: ["can-import-module/can-import-module"],
			dest: path.join(__dirname, "dist", "cjs", "can-import-module.js"),
	    ignore: ignorer
		},
		"+bundled-amd": {
			modules: ["can-import-module/can-import-module"],
			dest: path.join(__dirname, "dist", "amd", "can-import-module.js"),
	    ignore: ignorer
		},
		"+global-js": {}
	}
}).catch(function(e){
	
	setTimeout(function(){
		throw e;
	},1);
	
});
