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
    plantParam.height * 1.5,
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
  plantImgg.plant_collision_check = false
  return plantImgg
}
// plant_collision_check = false
player_collision_check = false

// --------- create instance of plant ---------------
const plantImg1 = createPlant(plantParam.position.x, plantParam.position.y)
const plantImg2 = createPlant(580, 257)

function plant(plantImg, bulletImg) {
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
    plants.is_fired = true
  }
  let isBulletFired = plants.is_fired
  if (isBulletFired) {
    moveBullet(bulletImg, plantImg)
    // moveBullet(bulletImg2, plantImg2)
  }
  if (player.position.x + 64 >= bulletImg.position.x) {
    plants.is_fired = false
  } else if (
    leftBoundry &&
    leftBoundry.position.x + 16 >= bulletImg.position.x
  ) {
    plants.is_fired = false
  }
  if (!player_collision_check) {
    if (boundaryCollisionLeft_not_object(player, plantImg)) {
      player.spriteImg.src = 'assets/main_characters/virtual_guy/hit.png'
      player.totalFrame = 7
      player.position.y += 150
      spriteSlider(player)
      player.onHit()
      console.log('Player kill')
      player_collision_check = true
    }
  }
    if (boundaryCollisionBottom_not_object(player, plantImg)) {
      player.score +=50
      plantImg.spriteImg.src = 'assets/Enemies/Plant/hit.png'
      plantImg.totalFrame = 5
      // console.log('plant kill')
      plantImg.plant_collision_check = true
      player_collision_check = true
    }
    
    if (plantImg.plant_collision_check) {
      if (plantImg.position.y < canvas.height) {
        plantImg.position.y += 2;
      } else {
        plant_collision_check = false; // Stop moving when lower limit is reached
      }
    }
  spriteSlider(plantImg)
}

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
  bulletImg.position.x -= 1.5
  // Reset the bullet's position after a certain interval
  if (player.position.y >= plantImg.position.y) {
    // console.log('bullet')
    bulletImg.draw()
    bulletImg.hasLaunched = true
  }
  if (onCollision(player, bulletImg)) {
    if (player.position.x + player.width === bulletImg.position.x) {
      player.onHit()
      bulletImg.hasLaunched = false
    }
  }

  if (bulletImg.hasLaunched) {
    bulletImg.draw()
    if (bulletImg.position.x <= leftBoundry.position.x) {
      bulletImg.position.x = plantImg.position.x
    }
  }
}



