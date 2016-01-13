/**
 * Blockquote styling function/IIFE that only runs on article pages/layouts (ie, including tutorial). This looks for a hyphen in block quotes, assumes the hyphen indicates quote attribution (requires one space on both sides of the hyphen), and then wraps the remaining text in cite.quote-attribution for additional styling. The text in the new span is preceded by a horizontal bar (aka "quotation dash" [&#x2015; in HTML]). This little script is a miniature, client-side extension of markdown's blockquote syntax.
 */
(function() {
  //set regex test for tutorials and articles in the current url
  var urlReggie = new RegExp(/(articles|tutorials)/),
    currentURL = window.location.href;
  //if the current page's url is a tutorial or article, run the following function
  if (urlReggie.test(currentURL)) {
    //assign all blockquote content to an html collection/variable 
    var blockQuotes = document.querySelectorAll('article blockquote > p');
    //create new regex test for ' - ' (with one whitespace on each side so as not to accidentally grab hyphenated words as well) 
    var hyphenTest = new RegExp(/\s\-\s/);
    //iterate through all html blocks within the blockquotes html collection
    for (var i = 0; i < blockQuotes.length; i++) {
      //check for ' - ' in the blockquote's text content
      if (hyphenTest.test(blockQuotes[i].textContent)) {
        //if true, split existing inner HTML into two-part array
        //newQuoteContent === text leading up to hyphen
        var newQuoteContent = blockQuotes[i].innerHTML.split(' - ')[0];
        //newAuthorAttr === text after hyphen
        var newAuthorAttr = blockQuotes[i].innerHTML.split(' - ')[1];
        //fille blockquote paragraph with new content, but now with a <cite> wrapper around the author callout. 
        blockQuotes[i].innerHTML = newQuoteContent + '<cite> &#x2015; ' + newAuthorAttr + '</cite>';
      }
    }
  }
})();
