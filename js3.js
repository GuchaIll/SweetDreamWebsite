function setRandMessage()
{
  //access p element within the div
  //array of spooky message
  //randomly choose index
  //set the inner html of p to a message based on index
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
  //get the first class by class name
  //get random red, green, blue values 1-256
  let reciever = document.getElementsByClassName("SpookyMessage")[0]
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Construct the RGB color string
  //set background color of div to random color
  const color = `rgb(${red}, ${green}, ${blue})`;
  reciever.style.backgroundColor = color;
}

//set random message every 2 seconds
//call set random color every second
setInterval(setRandMessage, 2000);
setInterval(setRandomColor, 1000);
