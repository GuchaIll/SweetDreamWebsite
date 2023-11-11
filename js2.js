function showText()
{
  //show text by adding hidden class to text container and remove for image container
  document.getElementById("textonly").classList.remove("hidden");
document.getElementById("imageonly").classList.add("hidden");
}

function showImage()
{
  //show image by adding hidden class to image container and remove for text container
  document.getElementById("textonly").classList.add("hidden");
document.getElementById("imageonly").classList.remove("hidden");
}

function toggleContent()
{
  //add/remove hidden class based on previous state of hidden class (toggle on and off)
  let imageContainer = document.getElementById("imageContainer");
  let textContent = document.getElementById("textContent");
  imageContainer.classList.toggle("hidden");
  textContainer.classList.toggle("hidden");
}

//touch start toggles the event on and off
//mouse over mouse out show the image or the text
document.getElementById("imagetext").addEventListener('touchstart', toggleContent);

document.getElementById("imagetext").addEventListener('mouseover', showImage);

document.getElementById("imagetext").addEventListener('mouseout', showText);
