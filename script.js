// Get the image element
const movingImage = document.getElementById("movingImage");
const gameContainer = document.querySelector(".game-container");

// Move the image randomly
function moveImage() {
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;

  const randomX = Math.floor(Math.random() * (containerWidth - movingImage.offsetWidth));
  const randomY = Math.floor(Math.random() * (containerHeight - movingImage.offsetHeight));

  movingImage.style.left = `${randomX}px`;
  movingImage.style.top = `${randomY}px`;
}

// Move the image every second
setInterval(moveImage, 1000);

// Add a click event to the image to increase speed
movingImage.addEventListener("click", () => {
  alert("Nice catch!");
});
