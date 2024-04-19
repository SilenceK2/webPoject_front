'use strict';

var namespace = require("can-namespace");

/**
 * @module {function} can-util/js/import/import import
 * @parent can-util/js
 * @signature `importModule(moduleName, parentName)`
 * @hide
 *
 * ```js
 * var importModule = require("can-util/js/import/import");
 *
 * importModule("foo.stache").then(function(){
 *   // module was imported
 * });
 * ```
 *
 * @param {String} moduleName The module to be imported.
 * @param {String} [parentName] A parent module that will be used as a reference for resolving relative module imports.
 * @return {Promise} A Promise that will resolve when the module has been imported.
 */

// array of loader functions, last in first out
var loader = [];

/**
 * add a loader-function to the list of loader
 * the function should return a promise that resolves when the module has been loaded
 * otherwise the loader function should return null or undefined
 * 
 * @signature `import.addLoader(loader)`
 * @param fn callable
 */
function addLoader(fn){
	if(typeof fn === "function"){
		loader.push(fn);
	}
}

/**
 * clear the list of loaders
 */
function flushLoader(){
	loader = [];
}

/**
 * a bunch of presets that can be used in a certain environment 
 * 
 * @param preset string
 */
function preset(preset){
	flushLoader();
	
	switch (preset){
		case "stealjs":
			addLoader(require("./loader/steal-optimized"));
			addLoader(require("./loader/system"));
			break;
		case "ES2020":
		case "es2020":
		case "dynamic-import":
			addLoader(require("./loader/es6"));
			break;
		case "node":
			addLoader(require("./loader/node"));
			break;
		case "all":
		default:
			addLoader(require("./loader/steal-optimized"));
			addLoader(require("./loader/es6"));
			addLoader(require("./loader/node"));
			addLoader(require("./loader/require"));
			addLoader(require("./loader/system"));
			break;
	}
}

// by default, add all available loaders to the list
preset('all');

module.exports = namespace.import = function(moduleName, parentName) {
	return new Promise(function(resolve, reject) {
		try {
			var loaderPromise;
			// last added loader will be called first
			for (var i = loader.length - 1; i >= 0; i--) {
				loaderPromise = loader[i](moduleName, parentName);
				if (loaderPromise) {
					break;
				}
			}

			if(loaderPromise){
				loaderPromise.then(resolve, reject);
			}else{
				reject("no proper module-loader available");
			}
		} catch(err) {
			reject(err);
		}
	});
};
module.exports.addLoader = addLoader;
module.exports.flushLoader = flushLoader;
module.exports.preset = preset;
