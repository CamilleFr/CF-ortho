"use strict";
window.addEventListener('DOMContentLoaded', (event) => {
  // animate_text();
  console.log('passing in DOMCONTENTLOADED')
  console.log(document)

  let delay = 100,
    delay_start = 0,
    contents,
    letters;

  document.querySelectorAll('.animate-text').forEach(function (elem) {
    console.log('TRYING TO LOG ELEMENT', elem)
    contents = elem.textContent.trim()
    console.log('contents', contents)

    // contents = elem.innerHTML.trim()
    // console.log('CONTENTS', contents)

    elem.textContent = "";
    letters = contents.split("");
    // console.log('letters', letters)
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
  });