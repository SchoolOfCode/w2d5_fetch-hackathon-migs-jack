let tenTrivia = trivia();

async function trivia(){
    // fetch 10 random questions
let response = await fetch("https://opentdb.com/api.php?amount=10");
let data = await response.json();
return tenTrivia = data.results[3].category;
}

console.log(tenTrivia);

//function newTrivia(category){
  //  let entertainment = tenTrivia.data.results
   
//}