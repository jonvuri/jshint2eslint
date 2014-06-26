'use strict'

var map = require( 'json-map' )
var path = map.path
var val = map.val
var nomap = map.nomap

// The jshint options that are on by default, before any configuration
var eslintConfig = {

	'rules': {

		// Eslint errors that are on by default, differing from Jshint
		'no-comma-dangle': 0,
		'quotes': 0,
		'strict': 0,
		// TODO

		// Jshint warnings with no configuration option
		'no-catch-shadow': 2,  // W002
		'no-floating-decimal': 2,  // W008
		'no-array-constructor': 2,  // W009
		'no-new-object': 2,  // W010
		// TODO
		'no-octal': 2,  // W115 - Not a perfect map, W115 only triggers in strict mode

		// Enforcing options and environments will only be set if specified

		// Relaxing options - these are on by default unless overridden
		'semi': [ 2, 'always' ],  // relaxed with 'asi' jshint option
		'no-cond-assign': 2,  // relaxed with 'boss' jshint option
		'no-debugger': 2,  // relaxed with 'debug' jshint option
		'no-eq-null': 2,  // relaxed with 'eqnull' jshint option
		// no mapping for 'esnext'
		'no-eval': 2,  // relaxed with 'evil' jshint option
		'no-unused-expressions': 2,  // relaxed with 'expr' jshint option
		'block-scoped-var': 2,  // relaxed with 'funcscope' jshint option
		// no mapping for 'gcl'
		'no-global-strict': 2,  // relaxed with 'globalstrict' jshint option
		'no-iterator': 2,  // relaxed with 'iterator' jshint option
		// no mapping for 'lastsemic'
		// no mapping for 'laxbreak'
		// no mapping for 'laxcomma'
		'no-loop-func': 2,  // relaxed with 'loopfunc' jshint option
		// no mapping for 'maxerr' (not a linting option)
		// no mapping for 'moz'
		'no-multi-str': 2,  // relaxed with 'multistr' jshint option
		'valid-typeof': 2,  // relaxed with 'notypeof' jshint option
		'no-proto': 2,  // relaxed with 'proto' jshint option
		'no-script-url': 2,  // relaxed with 'scripturl' jshint option
		// no mapping for 'smarttabs'
		'no-shadow': 2,  // relaxed with 'shadow' jshint option
		'dot-notation': 2  // relaxed with 'sub' jshint option
		// no mapping for `new function () { ... }` warning for 'supernew'
		// no mapping for 'noyield'

	}

}


function rulepath( jsName, esName ) {

	return path( jsName, 'rules["' + esName + '"]' )
}

function simpleRuleMap( jsName, esName ) {

	return map( rulepath( jsName, esName ), [ val( false, 0 ), val( true, 2 ) ] )
}

function relaxRuleMap( jsName, esName ) {

	return map( rulepath( jsName, esName ), [ nomap( false ), val( true, 0 ) ] )
}

function numberRuleMap( jsName, esName ) {

	function numValue( value ) {
		if ( value === false ) {
			return 0
		} else {
			return [ 2, value ]
		}
	} 

	return map( rulepath( jsName, esName ), numValue )
}


var maps = [

	// Enforcing options
	simpleRuleMap( 'bitwise', 'no-bitwise' ),
	simpleRuleMap( 'camelcase', 'camelcase' ),
	simpleRuleMap( 'curly', 'curly' ),
	simpleRuleMap( 'eqeqeq', 'eqeqeq' ),
	// no mapping for 'es3'
	simpleRuleMap( 'forin', 'guard-for-in' ),
	simpleRuleMap( 'freeze', 'no-extend-native' ),
	simpleRuleMap( 'immed', 'wrap-iife' ),
	// no mapping for 'indent'
	map( rulepath( 'latedef', 'no-use-before-define' ),
		[ val( false, 0 ), val( true, 2 ), val( 'nofunc', [ 2, 'nofunc' ] ) ] ),
	simpleRuleMap( 'newcap', 'new-cap' ),
	simpleRuleMap( 'noarg', 'no-caller' ),
	simpleRuleMap( 'noempty', 'no-empty' ),
	// no mapping for 'nonbsp'
	simpleRuleMap( 'nonew', 'no-new' ),
	simpleRuleMap( 'plusplus', 'no-plusplus' ),
	// no mapping for true value of 'quotmark'
	map( rulepath( 'quotmark', 'quotes' ),
		[ nomap( true ), val( 'single', [ 2, 'single' ] ), val( 'double', [ 2, 'double' ] ) ] ),
	simpleRuleMap( 'undef', 'no-undef' ),
	simpleRuleMap( 'unused', 'no-unused-vars' ),
	map( rulepath( 'unused', 'no-unused-vars' ),
		[ val( false, 0 ), val( true, 2 ), val( 'last-param', 2 ),
		  val( 'vars', [ 2, { vars: 'all', args: 'none' } ] ),
		  val( 'strict', [ 2, { vars: 'all', args: 'all' } ] ) ] ),
	simpleRuleMap( 'strict', 'strict' ),
	simpleRuleMap( 'strict', 'no-global-strict' ),
	numberRuleMap( 'maxparams', 'max-params' ),
	numberRuleMap( 'maxdepth', 'max-depth' ),
	numberRuleMap( 'maxstatements', 'max-statements' ),
	numberRuleMap( 'maxcomplexity', 'complexity' ),

	// Relaxing options
	relaxRuleMap( 'asi', 'semi' ),
	relaxRuleMap( 'boss', 'no-cond-assign' ),
	relaxRuleMap( 'debug', 'no-debugger' ),
	relaxRuleMap( 'eqnull', 'no-eq-null' ),
	// no mapping for 'esnext'
	relaxRuleMap( 'evil', 'no-eval' ),
	relaxRuleMap( 'expr', 'no-unused-expressions' ),
	relaxRuleMap( 'funcscope', 'block-scoped-var' ),
	// no mapping for 'gcl'
	relaxRuleMap( 'globalstrict', 'no-global-strict' ),
	relaxRuleMap( 'iterator', 'no-iterator' ),
	// no mapping for 'lastsemic'
	// no mapping for 'laxbreak'
	// no mapping for 'laxcomma'
	relaxRuleMap( 'loopfunc', 'no-loop-func' ),
	// no mapping for 'maxerr' (not a linting option)
	// no mapping for 'moz'
	relaxRuleMap( 'multistr', 'no-multi-str' ),
	relaxRuleMap( 'notypeof', 'valid-typeof' ),
	relaxRuleMap( 'proto', 'no-proto' ),
	relaxRuleMap( 'scripturl', 'no-script-url' ),
	// no mapping for 'smarttabs'
	relaxRuleMap( 'shadow', 'no-shadow' ),
	relaxRuleMap( 'sub', 'dot-notation' ),
	// no mapping for 'supernew'
	// no mapping for 'noyield'


	// Legacy options
	simpleRuleMap( 'nomen', 'no-underscore-dangle' ),
	simpleRuleMap( 'onevar', 'one-var' ),
	// no mapping for 'passfail' (not a linting option)
	// no mapping for 'white'


	// Environments
	map( path( 'browser', 'env.browser' ) ),
	// no mapping for 'couch'
	// no mapping for 'devel'
	// no mapping for 'dojo'
	// no mapping for 'jquery'
	// no mapping for 'mootools'
	map( path( 'node', 'env.node' ) ),
	// no mapping for 'nonstandard'
	// no mapping for 'phantom'
	// no mapping for 'prototypejs'
	// no mapping for 'rhino'
	// no mapping for 'worker'
	// no mapping for 'wsh'
	// no mapping for 'yui'


	// Environment config differences
	// TODO
	map( path( 'node', 'rules["no-catch-shadow"]' ), [ nomap( false ), val( true, 0 ) ] ),  // W002
	map( path( 'node', 'rules["no-global-strict"]' ), [ nomap( false ), val( true, 0 ) ] ),  // W097
	map( path( 'phantom', 'rules["no-global-strict"]' ), [ nomap( false ), val( true, 0 ) ] )  // W097


	// Environment predefined variables
	// TODO


	// TODO
	// no mapping for the following jshint warnings: W001, W005, W006, W007, W014, W018

]


module.exports = function jshint2eslint( jshintConfig ) {

	return maps.reduce( function ( eslintConfig, map ) {
		map( jshintConfig, eslintConfig )
	}, {} )

}
