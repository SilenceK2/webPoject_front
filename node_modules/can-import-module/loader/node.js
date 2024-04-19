var isNode = require("can-globals/is-node/is-node");
	
module.exports = function(moduleName) {
	if (isNode()) {
		return Promise.resolve(require(moduleName));
	}
};
