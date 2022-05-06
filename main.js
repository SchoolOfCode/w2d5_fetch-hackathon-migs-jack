/*
X FETCH DAD JOKE
X CREATE RANDOM DAD JOKE BUTTON
- CREATE TOP 10 JOKE LIST
- INPUT 10 JOKES INTO LIST (1 0R 10 FUNCTION TO POPULATE)
- STYLE WITH CSS
- IF ENOUGH TIME, STRETCH JS MORE 

*/
async function randomDadJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  let newJoke = document.querySelector("#new-joke");
  newJoke.innerText = data.joke;
}

document
  .querySelector("#new-joke-button")
  .addEventListener("click", randomDadJoke);

async function firstJokeList() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  return data.joke;
}

/* 
- GENERATE EACH LIST ELEMENT THEN SAVE IN VARIABLE.
- CHANGE LISTS INNER TEXT TO FIRST JOKE ON LIST, THEN SAVE IN VARIABLE.
- APPENDED LISTS WITH NEW TEXT.
- APPEND ORDERED LISTS WITH TEXT.

*/

let extraTips = [
  "Keep your pennies in a glass jar",
  "Save money by not eating!",
  "Don't let your partner know...",
];
for (i = 0; i < extraTips.length; i++) {
  li = document.createElement("li");
  newTips = document.createTextNode(extraTips[i]);
  li.appendChild(newTips);
  document.querySelector("#tips-list").appendChild(li);
}
