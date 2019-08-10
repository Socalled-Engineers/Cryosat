function init() {  
  main.classList.add("loading");
  setTimeout(function() { main.classList.remove("loading"); }, 900); 
}
window.onload = function() {
  document.body.addEventListener('click', () => init());
	init();
};