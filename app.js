const endpoint = "https://icanhazdadjoke.com/";
const btn = document.getElementById('new-joke');
const jokeEl = document.querySelector('.wrapper .joke-content');

async function fetchJoke() {
    const headers = {
        'Accept': 'application/json'
    }

    const response = await fetch(`${endpoint}`, {
        headers
    });

    const data = await response.json();
    console.log({
        data
    })

    return data;
}

async function clickHandler() {
    jokeEl.textContent = '...';
    btn.setAttribute('disabled', true);
    const {
        joke
    } = await fetchJoke();
    jokeEl.textContent = joke;
    btn.removeAttribute('disabled');
}

btn.addEventListener('click', clickHandler);