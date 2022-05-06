async function randomDadJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  let newJoke = document.querySelector("#new-joke");
  newJoke.innerText = data.joke;
}

document.querySelector("#new-joke-button").addEventListener("click", randomDadJoke);

