let VX = 0
let VY = 0

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// console.log(ctx)

const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

//doodler size
let doodlerWidth = 62
let doodlerHeight = 60

//score
let score = 0
let maxScore = 0
let gameOver = false

// platforms
let platformArr = []
let noOfPlatform = 9
let spriteImg
const platformWidth = 64
const platformHeight = 18
let canvasX = Math.floor((Math.random() * CANVAS_WIDTH * 3) / 4)
let canvasY = Math.floor(Math.random() * CANVAS_HEIGHT - doodlerHeight)
let frameX = 0
let frameY = Math.floor(Math.random() * 4)

window.onload = () => {
  // ctx.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);

  // doodler right facing image
  doodlerImgR = new Image()
  doodlerImgR.src = './sprites/rightDoodler.png'
  doodler.img = doodlerImgR
  doodlerImgR.onload = () =>
    ctx.drawImage(
      doodler.img,
      doodler.x,
      doodler.y,
      doodler.width,
      doodler.height
    )

  // doodler left facing image
  doodlerImgL = new Image()
  doodlerImgL.src = './sprites/leftDoodler.png'

  // platform images
  spriteImg = new Image()
  spriteImg.src = './sprites/game-tiles.png'

  VY = initalVY

  placePlatforms()

  requestAnimationFrame(update)
  document.addEventListener('keydown', moveDoddler)
}

// update
function update() {
  requestAnimationFrame(update)
  if (gameOver) {
    return
  }
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  doodler.x += VX

  if (doodler.x > CANVAS_WIDTH) {
    doodler.x = 0
  } else if (doodler.x + doodler.width < 0) {
    doodler.x = CANVAS_WIDTH - doodlerWidth
  }

  if (doodler.y < 0) {
    doodler.y = 0  
  }

  VY += gravity
  doodler.y += VY - 2

  if (doodler.y > CANVAS_HEIGHT) {
    gameOver = true
  }

  ctx.drawImage(
    doodler.img,
    doodler.x,
    doodler.y,
    doodler.width,
    doodler.height
  )



  //   platforms

  for (let i = 0; i < platformArr.length; i++) {
    let platform = platformArr[i]

    if (VY < 0 && doodler.y < (CANVAS_HEIGHT * 2) / 4) {
      platform.y -= initalVY
    }

    if (detectCollision(doodler, platform) && VY >= 0) {
      VY = initalVY
    }

    ctx.drawImage(
      platform.img,
      platform.width * frameX,
      platform.height * frameY, //* i
      platform.width,
      platform.height,
      platform.x,
      platform.y,
      platformWidth,
      platformHeight
    )

    // new platform on top when bottom one is out of canvas
    while (platformArr.length > 0 && platformArr[0].y >= CANVAS_HEIGHT) {
      platformArr.shift()
      newPlatform()
    }

    
    // update the score
    updateScore()
    ctx.fillStyle = 'black'
    ctx.font = '16px sans-serif'
    ctx.fillText(score, 5, 20)

    if (gameOver) {
      const scoreDisplay = `Score: ${score}`
      ctx.fillText(scoreDisplay, CANVAS_WIDTH / 6, (CANVAS_HEIGHT * 6) / 8)
      ctx.fillText(
        "Game Over: Press 'Space' to Restart",
        CANVAS_WIDTH / 7,
        (CANVAS_HEIGHT * 7) / 8
      )
    }
  }
}

function updateScore() {
  let points = Math.floor(10 * Math.random())
  if (VY < 0) {
    maxScore += points
    if (score < maxScore) {
      score = maxScore
    }
  } else if (VY >= 0) {
    maxScore -= points
  }
}
