/**
 * All user interactions for the site are written in vanilla Javascript so as to preclude the jQuery dependency--although the Grunt build/concatenate will pull jquery through first, thereby allowing you to add additional scripts using jq syntax. If you decide to break the scripts up in the "gruntscripts" folder, be careful of adding the "async" attribute on your script tags, since this may have unreliable results if using jquery syntax before the jquery library has been loaded.
 */

//get the hash from the current URL and set it as a global variable
var currentHash = window.location.hash;
//add eventlistener for user pressing "s" on the keyboard
window.addEventListener('keyup', function(event) {
  //grab search form from site header
  var openSearchForm = document.getElementById('search-form');
  //if the user presses "s" and the search form is NOT already open OR if the user presses escape and the search form is open - init toggleSearch function
  if ((event.keyCode == 83 && !(openSearchForm.classList.contains('search-open'))) || (event.keyCode == 27 && openSearchForm.classList.contains('search-open'))) {
    toggleSearch();
  }
}, false);
window.onload = init;


//convenient hasClass function from toddmotto.com
function hasClass(elem, classn) {
  return new RegExp(' ' + classn + ' ').test('/' + elem.className + '/i');
}

function init() {
  var mobileToggle = document.getElementById('mobile-toggle'),
    searchToggle = document.getElementById('search-overlay-toggle'),
    searchClose = document.getElementById('close-search'),
    searchInput = document.getElementById('search-form');
  mobileToggle.onclick = toggleMenu;
  searchToggle.onclick = toggleSearch;
  searchClose.onclick = toggleSearch;
  searchInput.onsubmit = preventRefresh;
  targetBlank();
}
//toggle mobile menu/global navigation on <M screen sizes
//removed .classList on 2015/09/17 for better IE9 support
function toggleMenu() {
  var globalNav = document.getElementById('global-navigation'),
    menuButton = document.getElementById('mobile-toggle'),
    mainContent = document.getElementById('main');
  globalNav.classList.toggle('mobile-menu');
  menuButton.classList.toggle('mobile-menu');
  mainContent.classList.toggle('mobile-menu');
}

//add "target=_blank" attribute to all external links on page
function targetBlank() {
  // remove subdomain of current site's url and setup regex
  var internal = location.host.replace("www.", "");
  internal = new RegExp(internal, "i");
  var mailTo = new RegExp(/mailto/);

  var a = document.getElementsByTagName('a'); // then, grab every link on the page
  for (var i = 0; i < a.length; i++) {
    if (mailTo.test(a[i].href)) {
      continue;
    } else {
      var href = a[i].host; // set the host of each link
      if (!internal.test(href)) { // make sure the href doesn't contain current site's host
        a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
      }
    }
  }
}
//Toggle search overlay on all screen sizes
function toggleSearch() {
  var searchForm = document.querySelector("#search-form"),
    searchInput = document.getElementById('tipue_search_input'),
    searchFooter = document.getElementById('site-footer');
  searchForm.classList.toggle('search-open');
  searchInput.classList.toggle('search-open');
  searchFooter.classList.toggle('search-open');
  if (searchInput.classList.contains('search-open')) {
    searchInput.focus();
  }
  //change contentfooter to prevent svgs from leaking through on certain browsers
  if (document.querySelector('.content-footer')) {
    var contentFooter = document.querySelector('.content-footer');
    contentFooter.classList.toggle('search-open');
  }
}
//Prevents refreshing of page when the search item is entered into the tipue search input
function preventRefresh(enteredTerm) {
  enteredTerm.preventDefault();
}

