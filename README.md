<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isDurationString

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a duration string.



<section class="usage">

## Usage

```javascript
import isDurationString from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-duration-string@deno/mod.js';
```

#### isDurationString( value )

Tests if a `value` is a duration `string`.

```javascript
var bool = isDurationString( '1d' );
// returns true

bool = isDurationString( '1d2h' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function validates that a `value` is a `string`. For all other types, the function returns `false`.

-   A duration string is a string containing a sequence of time units. A time unit is a non-negative integer followed by a unit identifier. The following unit identifiers are supported:

    -   `d`: days
    -   `h`: hours
    -   `m`: minutes
    -   `s`: seconds
    -   `ms`: milliseconds

    For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes). Time units must be supplied in descending order of magnitude (i.e., days, hours, minutes, seconds, milliseconds).

-   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import isDurationString from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-duration-string@deno/mod.js';

var bool = isDurationString( '1h' );
// returns true

bool = isDurationString( '1m20ms' );
// returns true

bool = isDurationString( '1d 2h 3m 4s' );
// returns false

bool = isDurationString( 'beep' );
// returns false

bool = isDurationString( null );
// returns false
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-duration-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-duration-string

[test-image]: https://github.com/stdlib-js/assert-is-duration-string/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/assert-is-duration-string/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-duration-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-duration-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-duration-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-duration-string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-duration-string/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-duration-string/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-duration-string/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-duration-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-duration-string/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
