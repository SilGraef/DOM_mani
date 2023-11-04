// Select an element by ID
const header = document.getElementById('header');


// Select all elements with a class name
const paragraphs = document.getElementsByClassName('paragraph');


// Select all elements with a tag name
const asideElements = document.getElementsByTagName('aside');


// Select the first element that matches a CSS selector
const firstMatchingElement = document.querySelector('#footer');


// Select all elements that match a CSS selector
const allMatchingElements = document.querySelectorAll('.p2');



// getElementById event listener
header.addEventListener('click', () => {

   header.style.backgroundColor = "lightseagreen";

});



// getElementsByClassName event listener
for (i = 0; i < paragraphs.length; i++) { 
  paragraphs[i].addEventListener('click', (e) => {
    
    e.target.classList.toggle('purple');

  });
}


// getElementsByTagName event listener
for (i = 0; i < asideElements.length; i++) {
  asideElements[i].addEventListener('click', (e) => {

    e.target.classList.add('coral')

  });
}



// querySelector event listener
firstMatchingElement.addEventListener('click', () => {

  firstMatchingElement.style.backgroundColor = "lightseagreen";

});



// querySelectorAll event listener
for (i = 0; i < allMatchingElements.length; i++) {
  allMatchingElements[i].addEventListener('click', (e) => {

   e.target.style.textTransform = 'uppercase';

  });
}
