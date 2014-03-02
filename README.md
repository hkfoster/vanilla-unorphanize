## Unorphanize: Vanilla Edition

#### Prevent orphans with zero dependencies

Based on https://github.com/simeydotme/jQuery-Unorphanize, this plugin weighs in at `~ 840 bytes minified` and works without the need for a JavaScript library.

### How it Works

**Vanilla Unorphanize** will take the supplied selector(s) `new unorphanize( 'selector, selector, selector' );` and **replace the last space** with a `&nbsp;`, preventing an [orphan](http://en.wikipedia.org/wiki/Widows_and_orphans) from occurring. All without disturbing any inner HTML elements.

#### Basic Usage

```js
// Prevent orphans in all paragraphs
new unorphanize( 'p' );
```
#### Custom Usage

```js
// Prevent orphans in all paragraphs w/ 2 companions
new unorphanize( 'p', { companions: 2 } );
```

Pretty easy, right? Feel free to share, modify, and use this plugin in all your projects. I only ask that you let me know what you build! Thanks.