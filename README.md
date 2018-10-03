# Sheetbase Module: polyfill-server

Es6 Shim for Google Apps Script. See: https://github.com/paulmillr/es6-shim

[![License][license_badge]][license_url] [![clasp][clasp_badge]][clasp_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

## Install

- NPM: ``$ npm install --save @sheetbase/polyfill-server``

- As library: ``1YGFR9Mv-chy7B419d-PrTX8a_Cwg2QWJM1g2qpgVzUNXJM1L5-0D77dC`` ([view code](https://script.google.com/d/1YGFR9Mv-chy7B419d-PrTX8a_Cwg2QWJM1g2qpgVzUNXJM1L5-0D77dC/edit?usp=sharing))

## Usage

```ts
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3};
const obj3 = Object.assign(obj1, obj2);
Logger.log(obj3);
```

## License

[MIT][license_url]

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/module-polyfill-server/blob/master/LICENSE

[clasp_badge]: https://img.shields.io/badge/built%20with-clasp-4285f4.svg
[clasp_url]: https://github.com/google/clasp

[patreon_badge]: https://ionicabizau.github.io/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan

[paypal_donate_badge]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan

[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase