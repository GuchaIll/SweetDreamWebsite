function hideAnswer()
{
  let answer = document.getElementById("answer");
  answer.classList.add("hidden");
}

function showText()
{
  let answer = document.getElementById("answer");
  answer.classList.remove("hidden");
}

function toggleAnswer() {
  let answer = document.getElementById("answer");
    answer.classList.toggle("hidden");
}

document.getElementById("mysterious").addEventListener('click', toggleAnswer);

document.getElementById("mysterious").addEventListener('mouseover', showText);

document.getElementById("mysterious").addEventListener('mouseout', hideAnswer);

function showText()
{
  document.getElementById("textonly").classList.remove("hidden");
document.getElementById("imageonly").classList.add("hidden");
}

function showImage()
{
  document.getElementById("textonly").classList.add("hidden");
document.getElementById("imageonly").classList.remove("hidden");
}

function toggleContent()
{
  let imageContainer = document.getElementById("imageContainer");
  let textContent = document.getElementById("textContent");
  imageContainer.classList.toggle("hidden");
  textContainer.classList.toggle("hidden");
}

document.getElementById("imagetext").addEventListener('touchstart', toggleContent);

document.getElementById("imagetext").addEventListener('mouseover', showImage);

document.getElementById("imagetext").addEventListener('mouseout', showText);


function setRandMessage()
{
   let messageContainer = document.querySelector(".SpookyMessage p");
  let messages = ["Spooky ooh ohh ",
                 "I'm watching you",
                 "I'm right behind you",
                  "I'm within you",
                 "I'm you"];
  let index = Math.floor(Math.random()*messages.length);
  messageContainer.innerHTML = messages[index];
}
function setRandomColor()
{
  let reciever = document.getElementsByClassName("SpookyMessage")[0]
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Construct the RGB color string
  const color = `rgb(${red}, ${green}, ${blue})`;
  reciever.style.backgroundColor = color;
}

setInterval(setRandMessage, 2000);
setInterval(setRandomColor, 1000);

var arrowTop = document.getElementById("arrowTop");

arrowTop.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
 
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (window.scrollY < document.documentElement.clientHeight);
});
