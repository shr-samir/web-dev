const player = new Player()

let origin = {
  x: 1083,
  y: 127,
}

let bob = {
  x: 1183,
  y: 227,
}

// ---- for bullet animation ----
let bulletTimer = 25
let leftBoundry = null
let plants = {
  position: {
    x: 650,
    y: 510,
  },
  is_fired: false,
}

function drawScore() {
  ctx.font = '24px Retro Gaming'
  ctx.fillStyle = '#000'
  ctx.fillText('Score: ' + player.score, canvas.width - 300, 80) // Position the score at the top left

  if (player.score >= 220) {
    ctx.font = '24px Retro Gaming'
    ctx.fillStyle = 'red'

    ctx.fillText(
      `Your Score: ${player.score}`,
      canvas.width / 2 - 100,
      canvas.height / 2
    )
    ctx.fillText(
      'Congratulations',
      canvas.width / 2 - 100,
      canvas.height / 2 + 50
    )
  }
  // console.log('score call');
}

function drawLives() {
  ctx.font = '24px Retro Gaming'
  ctx.fillStyle = '#000'
  ctx.fillText('Lives: ' + player.lives, 60, 80) // Position top right
}

// ----------- game over -----------
function gameOver() {
  console.log('Game Over triggered')
  cancelAnimationFrame(animate)

  ctx.font = '24px Retro Gaming'
  ctx.fillStyle = 'red'
  ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2)

  document.getElementById('restart-game').style.display = 'block'
}

function restartGame() {
  player.lives = 3
  player.score = 0
  player.position.x = 0
  player.position.y = 0
}

document
  .getElementById('restart-button')
  .addEventListener('click', function () {
    restartGame()
  })

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // ctx.drawImage(mapImage, 455, 0, 4000, 720, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(mapImage, 0, 0)

  // ------------- level 1 -------------

  if (level === 1) {
    drawFruits()

    chicken()

    ghurra()

    fallingPlatform(player, platformImg)

    plant(plantImg1, bulletImg1)
    plant(plantImg2, bulletImg2)

    fallingPlatform(player, platformImg)

    move(player)
    update(player)

    let [temp_x, temp_y] = oscillateSpikedChainBall(
      origin.x,
      origin.y,
      bob.x,
      bob.y
    )
    bob.x = temp_x
    bob.y = temp_y
    drawSpikedChainedBall(origin.x, origin.y, bob.x, bob.y)

    drawScore()
    drawLives()
  }

  // drawSpikeHead()

  if (level === 2) {
    drawFruits()
    chicken()
    ghurra()
    fallingPlatform()
    move(player)
    update(player)

    let [temp_x, temp_y] = oscillateSpikedChainBall(
      origin.x,
      origin.y,
      bob.x,
      bob.y
    )
    bob.x = temp_x
    bob.y = temp_y
    drawSpikedChainedBall(origin.x, origin.y, bob.x, bob.y)
  }

  if (level === 3) {
  }

  spikesCollision()
  boundariesCollision()
}

animate()

// while pressing key
window.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
    case 'KeyD':
      keys.right.pressed = true
      break
    case 'ArrowLeft':
    case 'KeyA':
      keys.left.pressed = true
      break
    case 'ArrowUp':
    case 'KeyW':
      keys.jump.pressed = true
      break
  }
})

// while releasing key
window.addEventListener('keyup', (e) => {
  // console.log(keyCode);

  switch (e.code) {
    case 'ArrowRight':
    case 'KeyD':
      keys.right.pressed = false
      break
    case 'ArrowLeft':
    case 'KeyA':
      keys.left.pressed = false
      break
    case 'ArrowUp':
    case 'KeyW':
      player.velocity.y += gravity
      keys.jump.pressed = false
      break
  }
})
