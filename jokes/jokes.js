/* <div id="joke" class="joke">Awesome Jokes is Loading...</div>
        <button id="jokeBtn" class="btn">Next Joke</button> */


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// function definned 

function generatejokes() {

    // convert Html Page Api Fromat 

    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }

    // fetch converted Api 

    fetch('https://icanhazdadjoke.com/', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;

        }).catch((error) => {
            console.log(error);
        })
}

jokeBtn.addEventListener('click', generatejokes);
generatejokes();