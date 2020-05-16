var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable;

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/head.jpg') {
      myImage.setAttribute ('src','images/mtb_pic2.jpg');
    } else {
      myImage.setAttribute ('src','images/head.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Let\'s go for a Group Ride, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Let\'s go for a Group Ride, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

