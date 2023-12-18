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
  1: {
    position: {
      x: 650,
      y: 510,
    },
    is_fired: false,
  },
}

// boundariesLeft.forEach((item, index) => {
//     setInterval(() => {

//     if (player.position.y >= plantImg.position.y || item.position.y >= plantImg.position.y){
//       moveBullet()
//     }
//   }, bulletTimer);
//   });

// draw()

// ------- camera -------
// const camera = {
//   position: {
//     x: 0,
//     y: 0,
//   },
// }

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // ctx.drawImage(mapImage, 455, 0, 4000, 720, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(mapImage, 0, 0)

  // ctx.translate(camera.position.x, 0)

  chicken()
  // console.log(plantImg1)
  plant(plantImg1, bulletImg1)
  plant(plantImg2, bulletImg2)

  fallingPlatform(player, platformImg)

  // plant()
  let [temp_x, temp_y] = oscillateSpikedChainBall(
    origin.x,
    origin.y,
    bob.x,
    bob.y
  )
  bob.x = temp_x
  bob.y = temp_y
  drawSpikedChainedBall(origin.x, origin.y, bob.x, bob.y)
  // plantImg.draw()

  // spriteSlider(plantImg)
  // bulletImg.draw()

  fallingPlatform(player, platformImg)

  move(player)
  update(player)

  // bulletImg.position.x = bulletImg.position.x - 2
  // setInterval((bulletImg) => {
  //   bulletImg.position.x = 350 - 16
  // }, 500);

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
      // if (keys.jump.pressed) {
      //   player.jump()
      // }
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
