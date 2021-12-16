# Select first 'a' Tag
const link = document.querySelector('a');
# Change the text content and href of link
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';
# Get element with id 'some'
const elementRef = document.getElementById('some')
# Get element with TagName 'p'
const elementRefArray = document.getElementsByTagName('p')
# Sabai elements ko afnai property haru hunxa.. eg. style, width, height, appendChild, setAttribute.. etc.
elementRef.setAttribute('class','my-class')
elementRef.classList;
clementRef.classList.add('newClass')