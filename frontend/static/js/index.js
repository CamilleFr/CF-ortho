"use strict";

const router = async () => {
  const routes = [
    { path: "/" },
    { path: "/presentation"},
    { path: "/traitements"},
    { path: "/contact"}
  ]

  const potentialMatches = routes.map((route) => {
    const result = {
      route,
      result: location.pathname
    }
    return result
  })

  let match = potentialMatches.find( potentialMatch => potentialMatch.result !== null)
  /* Route not found - return first route OR a specific "not-found" route */
  if(!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    }
  }
}

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router()
}

function animateText() {
  let delay = 100,
    delay_start = 0,
    contents,
    letters;

  document.querySelectorAll('.animate-text').forEach(function (elem) {
    contents = elem.textContent.trim()

    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        var span = document.createElement('span');
        span.innerHTML = letter.replace(/ /, '&nbsp;');
        elem.appendChild(span);
      }, delay_start + delay * index_1)
    });
    delay_start += delay * letters.length;
  })
}

window.addEventListener('DOMContentLoaded', async (event) => {
  document.body.addEventListener('click', e => {
    if (e.target.matches['data-link']) {
      e.preventDefault();
      navigateTo(e.target.href)
    }
  });
  /* Document has loaded -  run the router! */
  router();

  /* Enables to run the router when the user navigates with the back and forward buttons */
  document;addEventListener('popstate', router);
  animateText();
});
