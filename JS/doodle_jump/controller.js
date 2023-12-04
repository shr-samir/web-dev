// physics

let initalVY = -8
let gravity = 0.5

function moveDoddler(e) {
  if (e.code == 'ArrowRight' || e.code == 'KeyD') {
    VX = 4
    doodler.img = doodlerImgR
  } else if (e.code == 'ArrowLeft' || e.code == 'KeyA') {
    VX = -4
    doodler.img = doodlerImgL
  } else if (e.code == 'Space' && gameOver) {
    doodler = {
      img: doodlerImgR,
      x: doodlerX,
      y: doodlerY,
      width: doodlerWidth,
      height: doodlerHeight,
    }

    VX = 0
    VY = initalVY
    score = 0
    maxScore  = 0
    gameOver = false
    placePlatforms()
  }
}

function placePlatforms() {
  platformArr = []

  for (let i = 0; i < noOfPlatform; i++) {
    canvasX = Math.floor((Math.random() * CANVAS_WIDTH * 3) / 4)

    let platform = {
      x: canvasX,
      y: CANVAS_HEIGHT - 80 * i - 100,
      width: platformWidth,
      height: platformHeight,
      img: spriteImg,
    }
    platformArr.push(platform)
  }

  canvasX = Math.floor(Math.random() * CANVAS_WIDTH)
  canvasY = Math.floor(Math.random() * CANVAS_HEIGHT)
}

function detectCollision(a, b) {
  // formula for detecting intersection between two rectangles
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  )
}

function newPlatform() {
  canvasX = Math.floor((Math.random() * CANVAS_WIDTH * 3) / 4)

  let platform = {
    x: canvasX,
    y: -platformHeight - 5,
    width: platformWidth,
    height: platformHeight,
    img: spriteImg,
  }

  platformArr.push(platform)
}


