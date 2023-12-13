let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.8

// ------ sprite slider ------
let positionInSprite

// ------- map image ----------
const mapImage = new Image()
mapImage.src = '../assets/map1.png'

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
