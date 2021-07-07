const messages = [
    "David",
    "Irene",
    "Pepe",
    "Antonio",
    "Paco",
    "Mari Loli"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };