let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 1360
canvas.height = 720

const gravity = 0.8
// ------ sprite slider ------
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
