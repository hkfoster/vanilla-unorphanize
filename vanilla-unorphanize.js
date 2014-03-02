/*
* Vanilla Unorphanize
* Based on https://github.com/simeydotme/jQuery-Unorphanize
* @author Kyle Foster (@hkfoster)
* @license MIT
*/
;(function( window, document, undefined ) {

  'use strict';

  // Extend function
  function extend( a, b ) {
    for ( var key in b ) {
      if ( b.hasOwnProperty( key ) ) {
        a[ key ] = b[ key ];
      }
    }
    return a;
  }

  // Main function definition
  function unorphanize( selector, options ) {
    this.selector = document.querySelectorAll( selector );
    this.options  = extend( this.defaults, options );
    this.init();
  }

  // Overridable defaults
  unorphanize.prototype = {
    defaults : {
      companions: 1 // Number of words added to orphans (overridable)
    },

    // Init function
    init : function( selector ) {
      var self     = this,
          selector = self.selector,
          options  = self.options;

      Array.prototype.forEach.call(
        selector, function( selectors ) {

          var htmlEls = [], text, els, i, lastIndex, lngth, replaceRegex;

          // Our go-to variable for string manipulation
          text = selectors.innerHTML;

          // Grab all html tag childnodes
          els = text.match(/<([A-Z][A-Z0-9]*)\b[^>]*>/gi);
          lngth = ( els !== null ) ? els.length : 0;

          // Throw them into an array and create a placeholder
          for ( i = 0; i < lngth; i++ ) {
            htmlEls.push( els[i] );
            text = text.replace( els[i] , "__"+i+"__");
          }

          // Insert a &nbsp; between orphan & companions
          for ( i = 0; i < options.companions; i++ ) {
            lastIndex = text.lastIndexOf(" ");
            if ( lastIndex > 0 ) {
              text = text.substring( 0, lastIndex ) + "&nbsp;" + text.substring( lastIndex + 1 );
            }
          }

          // Put original HTML tag childnodes back
          for ( i = 0; i < lngth; i++ ) {
            replaceRegex = new RegExp("__"+i+"__");
            text = text.replace( replaceRegex , htmlEls[i] );
          }

          // Replace the html with our new text string
          selectors.innerHTML = text;

        }, false
      );

    }
  };

  window.unorphanize = unorphanize;

})( window, document );

// Instantiate Unorphanize with two companions
new unorphanize( 'p:not(.excluded)', { companions: 2 } );