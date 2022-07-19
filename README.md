# react-embed-video
[![NPM version][npm-image]][npm-url]
![npm-typescript]
[![License][github-license]][github-license-url]

An easy to slot in component that renders a video embed of popular streaming services.

Currently supports the following services:
- YouTube

Definition of support means a service's URL is recognized, transformed to an embed URL (if not already), and passed to a basic iframe amongst other configurations. Extended embed support from services such as advanced Twitch iframes, require additional `.js` libraries to be loaded. Apart from that, any service's url can be used if URL processing is disabled.

| Prop | Type | Required | Description |
| ---- | ---- | ---- | --- |
| allow      | string  | :x: | Allows feature policies to be defined for an iframe. Documentation for this is [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy).|
| disableURLProcessing | boolean | :x: <br> <em>Default: `false`</em> | When true, allows the implementer to force the use of the `url` prop provided to be the `src` of the iframe, skipping all URL processing. |
| height | number | :x: <br> <em>Default: 300</em> | Height of iframe embed.
| lazy | boolean | :x: <br> <em>Default: `false`</em> | Appends experimental `loading` attribute to iframe, allowing it to load only when within a determined distance from the user's visible viewport. Documentation for this is [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-loading).
| title | string | :x: | Fills `title` attribute, useful for accessibility.
| url | string | :heavy_check_mark: | Corresponding URL to be feed to the iframe `src`. Normally will be transformed to a valid embed URL if it is from a supported service. If the URL is invalid or unsupported, `EmbedVideo` will render `null`.
| width | number | :x: <br> <em>Default: 500</em> | Width of iframe embed.

[npm-url]: https://www.npmjs.com/package/react-embed-video
[npm-image]: https://img.shields.io/npm/v/react-embed-video
[npm-typescript]: https://img.shields.io/npm/types/react-embed-video
[github-license]:  https://img.shields.io/github/license/nathanalkurdi/react-embed-video
[github-license-url]: https://github.com/NathanAlkurdi/react-embed-video/blob/main/LICENSE