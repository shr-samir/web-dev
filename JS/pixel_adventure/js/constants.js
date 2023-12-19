let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 1360
canvas.height = 720

// Load and draw the background image
const bgImage = new Image()
bgImage.onload = function () {
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height)
  // You can start your game rendering loop here
}
bgImage.src = '../assets/mapXL-1.png' // Set the path to your background image






// Play background music
const audio = new Audio()
audio.src = '../assets/sounds/mario_theme.mp3'
audio.addEventListener(
  'canplaythrough',
  () => {
  },
  false
)



document.getElementById('start-game').addEventListener('click', function() {
    document.getElementById('homepage-overlay').style.display = 'none';
    const canvas = document.getElementById('canvas');
    canvas.style.display = 'block';
    initializeGame();
});

function initializeGame() {
    animate();
}

document.getElementById('end-game').addEventListener('click', function () {
  window.close()
})










const gravity = 0.4



// ------ sprite slider defn------
let positionInSprite

// ------- map image ----------

let level = 1

const mapImage = new Image()
if (level === 3) {
  mapImage.src = '../assets/mapXL-3.png'
} else if (level === 2) {
  mapImage.src = '../assets/mapXL-2.png'
} else {
  level = 1
  mapImage.src = '../assets/mapXL-1.png'
}
// mapImage.src = '../assets/mapXL.png'

mapImage.onload = () => {
  ctx.drawImage(mapImage, 0, 0)
}

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  jump: {
    pressed: false,
  },
}

// to delay frames
const staggerFrames = 3
