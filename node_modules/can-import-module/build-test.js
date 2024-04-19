var stealTools = require("steal-tools");

stealTools.build({
	main: "can-import-module/test",
	config: __dirname + "/package.json!npm"
},{
	minify: false,
	debug: true,
	bundleAssets: true
});
