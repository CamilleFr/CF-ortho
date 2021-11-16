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
  animateText();
  router();
});
