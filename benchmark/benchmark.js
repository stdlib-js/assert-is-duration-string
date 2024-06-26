/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isDurationString = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'1d',
		'1d2h',
		'1d1ms',
		'1h30m',
		'5s',
		'1.5m',
		'1m',
		'2mi',
		'5m',
		'10m',
		'15m',
		'30m',
		'1h',
		'2h',
		'3h',
		'6h',
		'12h',
		'1d',
		'2d',
		'3d',
		'1w',
		'2w',
		'1mo',
		'2mo',
		'3mo',
		'1y',
		'2y',
		'3y',
		'4y',
		'5y',
		'6y',
		'7y',
		'8y',
		'9y',
		'10y'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isDurationString( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
