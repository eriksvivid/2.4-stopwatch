'use strirct';

var myStartButton;

console.log(document);

myStartButton = document.querySelector('.start');
console.log(myStartButton)

function startButtonHandler(event){
  console.log('I was just clicked!');
  var startButton = document.querySelector('.start');
  startButton.style.backgroundColor = 'red';
  startButton.textcontent = 'Stop';
  //alert(startButton.textContent);


  var pageTitle = document.querySelector('.page-title');
  console.log(pageTitle.textContent);


]
  myStartButton.addEventListener('click', startButtonHandler);
