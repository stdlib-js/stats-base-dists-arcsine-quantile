<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Arcsine][arcsine-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for an [arcsine][arcsine-distribution] random variable is

<!-- <equation class="equation" label="eq:arcsine_quantile_function" align="center" raw="Q(p) = a + ( b - a ) \sin^2 \left( \tfrac{\pi}{2} p \right)" alt="Quantile function for an arcsine distribution."> -->

```math
Q(p) = a + ( b - a ) \sin^2 \left( \tfrac{\pi}{2} p \right)
```

<!-- <div class="equation" align="center" data-raw-text="Q(p) = a + ( b - a ) \sin^2 \left( \tfrac{\pi}{2} p \right)" data-equation="eq:arcsine_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/arcsine/quantile/docs/img/equation_arcsine_quantile_function.svg" alt="Quantile function for an arcsine distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p <= 1`, where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-quantile@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/tags). For example,

```javascript
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-quantile@v0.3.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-quantile@esm/index.mjs';
```

#### quantile( p, a, b )

Evaluates the [quantile function][quantile-function] for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns ~0.905

y = quantile( 0.5, 0.0, 10.0 );
// returns ~5.0
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 2.0, 1.0 );
// returns NaN
```

#### quantile.factory( a, b )

Returns a function for evaluating the quantile function of an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myquantile = quantile.factory( 0.0, 4.0 );

var y = myquantile( 0.8 );
// returns ~3.618
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@esm/index.mjs';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@esm/index.mjs';
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-quantile@esm/index.mjs';

var opts = {
    'dtype': 'float64'
};
var p = uniform( 25, 0.0, 1.0, opts );
var a = uniform( p.length, 0.0, 10.0, opts );
var b = uniform( a.length, 10.0, 50.0, opts );

logEachMap( 'p: %0.4f, a: %0.4f, b: %0.4f, Q(p;a,b): %0.4f', p, a, b, quantile );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-arcsine-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-arcsine-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-arcsine-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-arcsine-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-arcsine-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-arcsine-quantile/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-arcsine-quantile/main/LICENSE

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
