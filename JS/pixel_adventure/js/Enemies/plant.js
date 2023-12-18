// let bulletTimer = 25
const plantParam = {
  src: '../assets/Enemies/Plant/idle.png',
  width: 44,
  height: 42,
  position: {
    x: 640,
    y: 530,
  },
}
function createPlant(x, y) {
  const plantImgg = new Sprite(
    plantParam.src,
    x,
    y,
    plantParam.width,
    plantParam.height,
    plantParam.width * 1.5,
    plantParam.height * 1.5
    // 360,
    // 640,
    // // canvas.height - 190,
    // 530,
    // 44,
    // 42,
    // 44 * 1.5,
    // 42 * 1.5
  )
  plantImgg.totalFrame = 11
  return plantImgg
}
plant_collision_check = false
player_collision_check = false
const plantImg1 = createPlant(plantParam.position.x, plantParam.position.y)
const plantImg2 = createPlant(580, 257)

function plant(plantImg, bulletImg) {
  spriteSlider(plantImg)
  let diff_x = 0
  let temp_diff = 5000
  boundariesLeft.forEach((item, index) => {
    diff_x = plantImg.position.x - item.position.x
    if (
      diff_x > 0 &&
      temp_diff > diff_x &&
      item.position.y >= plantImg.position.y
    ) {
      temp_diff = diff_x
      leftBoundry = item
    }
  })
  if (player.position.y >= plantImg.position.y) {
    plants[1].is_fired = true
  }
  let isBulletFired = plants[1].is_fired
  if (isBulletFired) {
    moveBullet(bulletImg1, plantImg1)
    moveBullet(bulletImg2, plantImg2)
  }
  if (player.position.x + 64 >= bulletImg.position.x) {
    plants[1].is_fired = false
  } else if (
    leftBoundry &&
    leftBoundry.position.x + 16 >= bulletImg.position.x
  ) {
    plants[1].is_fired = false
  }
  if (!player_collision_check) {
    if (boundaryCollisionLeft_not_object(player, plantImg)) {
      player.spriteImg.src = 'assets/main_characters/virtual_guy/hit.png'
      player.totalFrame = 7
      player.position.y -= 150
      spriteSlider(player)
      console.log('Player kill')
      player_collision_check = true
    }
  }
  if (!plant_collision_check) {
    if (boundaryCollisionBottom_not_object(player, plantImg)) {
      plantImg.spriteImg.src = 'assets/Enemies/Plant/hit.png'
      plantImg.totalFrame = 5
      spriteSlider(plantImg)
      plantImg.position.y -= 50 // Update the y position
      animate_dead_plant()
      console.log('plant kill')
      plant_collision_check = true
      player_collision_check = true
    }
  }
}

// function animate_dead_plant() {
//   plantImg.position.y += 2 // Update the y position

//   // Check if the object has moved out of the canvas
//   if (plantImg.position.y - plantImg.height < canvas.height) {
//     requestAnimationFrame(animate_dead_plant) // Continue the animation
//   }
// }

function createBullet(plantImg) {
  const bulletImg = new Sprite(
    '../assets/Enemies/Plant/bullet.png',
    plantImg.position.x, // plant x - bullet
    // canvas.height - 160,
    plantImg.position.y + 20,
    16,
    16,
    16 * 2,
    16 * 2
  )
  return bulletImg
}

const bulletImg1 = createBullet(plantImg1)
const bulletImg2 = createBullet(plantImg2)

function drawBullet(bulletImg) {
  ctx.drawImage(
    bulletImg.spriteImg,
    bulletImg.position.x,
    bulletImg.position.y,
    bulletImg.width,
    bulletImg.height - 20
  )
}

function moveBullet(bulletImg, plantImg) {
  bulletImg.position.x -= 4
  // Reset the bullet's position after a certain interval
  if (
    bulletImg.position.x <= player.position.x + 32 ||
    bulletImg.position <= leftBoundry.position.x
  ) {
    bulletImg.position.x = plantImg.position.x
  }
  bulletImg.draw()
}
