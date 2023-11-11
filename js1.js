//orginal state of answer is hidden

function hideAnswer()
{
  //when mouse is out of container hide answer
  //hiding here just means adding the hidden class in the css file
  let answer = document.getElementById("answer");
  answer.classList.add("hidden");
}

function showText()
{
  //when mouse is within of container show answer
  //remove hidden class
  let answer = document.getElementById("answer");
  answer.classList.remove("hidden");
}

function toggleAnswer() {
  //toggle hidden on and off based on mouse click
  let answer = document.getElementById("answer");
    answer.classList.toggle("hidden");
}

//use event listener to get mouse status(click, mouseover, mouseout)
document.getElementById("mysterious").addEventListener('click', toggleAnswer);

document.getElementById("mysterious").addEventListener('mouseover', showText);

document.getElementById("mysterious").addEventListener('mouseout', hideAnswer);