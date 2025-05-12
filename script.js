const button = document.getElementById("wish-button");

function moveButtonRandomly() {
  const container = document.querySelector(".container");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Calculer des positions aléatoires en gardant le bouton à l'intérieur
  const maxX = containerWidth - buttonWidth;
  const maxY = containerHeight - buttonHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

button.addEventListener("mouseenter", moveButtonRandomly);

button.addEventListener("click", () => {
  alert("Envoie ton vœu au 06 49 31 19 50 pour qu’il soit exaucé ");
});
