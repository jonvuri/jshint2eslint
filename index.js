#!/usr/bin/env node

'use strict'

var fs = require( 'fs' )

var commander = require( 'commander' )
var stripJsonComments = require( 'strip-json-comments' )

var jshint2eslint = require( './jshint2eslint' )


// TODO: Add options for indent, vanilla (empty) config, custom output, directory traverse
commander
	.version( '0.0.1' )
	.parse( process.argv )


var jshintConfig = JSON.parse( stripJsonComments( fs.readFileSync( commander.args[0], 'utf8' ) ) )

var eslintConfig = jshint2eslint( jshintConfig )

console.log( JSON.stringify( eslintConfig, null, 2 ) )
