var arrowTop = document.getElementById("arrowTop");
//get the div arrow top 

arrowTop.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  //clicking on the arrow brings the user to the top of the page
};

//scroll event listener check if the user has scrolled half way through the home page
window.addEventListener('scroll', function() {
  arrowTop.hidden = (window.scrollY < document.documentElement.clientHeight);
});
