var getGlobal = require("can-globals/global/global");

// check for `noModule` in HTMLScriptElement. if its present, then the browser can handle dynamic loading because if
// HTMLScriptElement.noModule is `true` the browser used to run fallback scripts in older browsers that do not support JavaScript modules
if ("HTMLScriptElement" in getGlobal() && "noModule" in HTMLScriptElement.prototype) {
	// "import()" is a syntax error on some platforms and will cause issues if this module is bundled
	//  into a larger script bundle, so only eval it to code if the platform is known to support it.
	module.exports = new Function(
		"moduleName",
		// if moduleName has no extension, treat it as a javascript file and add .js extension
		"if (!(moduleName.match(/[^\\\\\\/]\\.([^.\\\\\\/]+)$/) || [null]).pop()) {\n" +
			"moduleName += '.js';\n" +
		"}\n" +
		"return import(moduleName.replace(/['\"]+/g, ''));\n"
	);
} else {
	module.exports = function() {};
}
