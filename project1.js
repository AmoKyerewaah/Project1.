// Functie om een begroeting weer te geven
const showGreeting = () => {
    const name = prompt("Wat is jouw naam?");
    if (name) {
        alert(`Hallo ${name}, welkom op de pagina!`);
    } else {
        alert("Hallo bezoeker, welkom op de pagina!");
    }
};

// Functie om de achtergrondkleur te veranderen
const changeBackgroundColor = () => {
    const colors = ["lightblue", "lightgreen", "lightyellow", "pink", "lightcoral"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
};

// Event listeners toevoegen aan de knoppen
document.querySelector('#greeting-button').addEventListener('click', showGreeting);
document.querySelector('#color-button').addEventListener('click', changeBackgroundColor);
