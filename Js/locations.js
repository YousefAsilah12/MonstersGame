const topLeftBtn = document.getElementById("top-left");
const topRightBtn = document.getElementById("top-right");
const bottomLeftBtn = document.getElementById("bottom-left");
const bottomRightBtn = document.getElementById("bottom-right");
const image = document.querySelector("img");
const imgContainer = document.querySelector(".img-container");



let adjectives = ["beautiful", "charming", "spectacular", "gorgeous", "breathtaking", "stunning", "romantic", "exotic", "mysterious", "mystical", "adventurous", "serene", "peaceful", "majestic", "luxurious"];
let placeNames = ["mountain", "beach", "forest", "island", "canyon", "river", "lake", "valley", "desert", "oasis", "jungle", "waterfall", "cave", "volcano", "lagoon"];

function getRandomLocation() {
  let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let randomPlace = placeNames[Math.floor(Math.random() * placeNames.length)];
  return `The ${randomAdjective} ${randomPlace}`;
};


topLeftBtn.textContent = `${getRandomLocation()}`;
topRightBtn.textContent = `${getRandomLocation()}`;
bottomRightBtn.textContent = `${getRandomLocation()}`;
bottomLeftBtn.textContent = `${getRandomLocation()}`;

topLeftBtn.addEventListener('mouseover', function () {
  if (image.src.includes("001")) {
    image.src = "/imgs/image_part_001.jpg";
  }
  else {
    image.src = "/imgs/image_part_001.jpg"
  }
});

topRightBtn.addEventListener('mouseover', function () {
  if (image.src.includes("002")) {
    image.src = "/imgs/image_part_002.jpg";
  }
  else {
    image.src = "/imgs/image_part_002.jpg"
  }
});
bottomLeftBtn.addEventListener('mouseover', function () {
  if (image.src.includes("003")) {
    image.src = "/imgs/image_part_003.jpg";
  }
  else {
    image.src = "/imgs/image_part_003.jpg"
  }
});
bottomRightBtn.addEventListener('mouseover', function () {
  if (image.src.includes("004")) {
    image.src = "/imgs/image_part_004.jpg";
  }
  else {
    image.src = "/imgs/image_part_004.jpg"
  }
});