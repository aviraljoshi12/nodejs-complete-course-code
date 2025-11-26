const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  console.log("h1 clicked");
});

//Here,
//h1: event emitter
//addEventListener: event listener
// () => {
//   console.log("h1 clicked");
// } : This fn is event handler
