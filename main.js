/*
X FETCH DAD JOKE
X CREATE RANDOM DAD JOKE BUTTON
X GENERATE RANDOM DAD JOKE
X CREATE TOP 10 JOKE LIST 
X INPUT 10 JOKES INTO LIST (1 0R 10 FUNCTION TO POPULATE)
X STYLE WITH CSS
- IF ENOUGH TIME, STRETCH JS MORE 

*/



async function randomDadJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  let newJoke = document.querySelector("#new-joke");
  newJoke.innerText = data.joke;
  //console.log(intervalId);
}


async function firstListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-one");
    listJoke.innerText = data.joke;
}

async function secondListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-two");
    listJoke.innerText = data.joke;
}

async function thirdListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-three");
    listJoke.innerText = data.joke;
}

async function fourthListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-four");
    listJoke.innerText = data.joke;
}

async function fifthListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-five");
    listJoke.innerText = data.joke;
}

async function sixthListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-six");
    listJoke.innerText = data.joke;
}

async function seventhListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-seven");
    listJoke.innerText = data.joke;
}

async function eigthListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-eight");
    listJoke.innerText = data.joke;
}

async function ninthListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-nine");
    listJoke.innerText = data.joke;
}

async function tenthListJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await response.json();
    let listJoke = document.querySelector("#joke-ten");
    listJoke.innerText = data.joke;
}

firstListJoke();
secondListJoke();
thirdListJoke();
fourthListJoke();
fifthListJoke();
sixthListJoke();
seventhListJoke();
eigthListJoke();
ninthListJoke();
tenthListJoke();


function intervalJoke() {  
//let intervalId = 
setInterval(randomDadJoke, 5000);
};


document
 .querySelector("#new-joke-button")
 .addEventListener("click", intervalJoke);

