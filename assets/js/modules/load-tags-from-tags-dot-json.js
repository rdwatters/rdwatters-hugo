// //Once the DOM content is loaded, run the checkHash function
// document.addEventListener('DOMContentLoaded', checkHash(), false);
// //Add listener to see if user clicks one of the tag buttons
// window.addEventListener('click', function(event) {
//   if (event.target.className == "tag-ajax") {
//     var theTag = event.target.id;
//     var tagString = event.target.dataset.tagstring;
//     getMatches(theTag, tagString);
//   } else {
//     return;
//   }
// }, false);

// window.onpopstate = function(event) {
//   if (currentHash.length > 0) {
//     checkHash();
//   }
//   currentHash = window.location.hash;
// };


// function checkHash() {
//   var urlTagTest = new RegExp(/tags/);
//   if (window.location.hash.length !== 0) {
//     var theTag = window.location.hash.split('#')[1];
//     var matchingAnchor = document.getElementById(theTag);
//     var theString = matchingAnchor.dataset.tagstring;
//     var theTagList = document.getElementsByTagName('a');
//     getMatches(theTag, theString);
//   } else if ((window.location.hash.length === 0 && urlTagTest.test(window.location.href)) && document.getElementById('selected-tag').textContent.length == 0) {
//     document.getElementById('selected-tag').innerHTML = "- Select a tag from below";
//   }
// }

// function getMatches(thetag, thestring) {
//   var tagId = thetag;
//   var idString = thestring;
//   var theIdSpan = document.getElementById('selected-tag');
//   var request = new XMLHttpRequest;
//   theIdSpan.innerHTML = '- ' + idString;
//   request.open('GET', '../assets/scripts/tags.json', true);
//   request.onreadystatechange = function() {
//     if ((request.status === 200) && (request.readyState === 4)) {
//       var rawContent = JSON.parse(request.responseText),
//         content = rawContent.siteContent,
//         matchingItems = document.querySelector('.matching-items');
//       matchingItems.innerHTML = '';
//       for (var i = 0; i < content.length; i++) {
//         if (content[i].tag == tagId) {
//           var iconTest = new RegExp(/icon/i);
//           var iconClass;
//           if (iconTest.test(content[i].image)) {
//             iconClass = 'icon';
//           } else {
//             iconClass = '';
//           }
//           matchingItems.innerHTML += '<li class=\"animated fadeInUp\"><a href=\"' + content[i].url + '\" class=\"tag-match\"><div class=\"tag-page-image ' + iconClass + '\" style=\"background-image:url(/assets/images/' + content[i].image + ');\"></div><section><h3>' + content[i].title + '</h3><div>' + content[i].description + '</div></section></a></li>';
//         }
//       }
//     }
//   }
//   request.send();
// }
