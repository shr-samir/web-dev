// ---------- movement ---------
function move(object) {
  moveRight(object)

  moveLeft(object)

  moveJump(object)

  spriteSlider(object)
}

function update(object) {
  object.position.x += object.velocity.x
  object.position.y += object.velocity.y
  if (object.position.y + object.height + object.velocity.y <= canvas.height)
    object.velocity.y += gravity
  else {
    object.velocity.y = 0
    object.isGrounded = true
  }
}

function spriteSlider(object) {
  positionInSprite =
    Math.floor(object.gameFrame / staggerFrames) % object.totalFrame
  object.frameX = object.spriteWidth * positionInSprite
  object.draw()
  object.gameFrame++
}

function moveRight(object) {
  if (keys.right.pressed) {
    object.spriteImg.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/run-right.png'
    object.velocity.x = 5
    object.totalFrame = 12
    object.lastKey = 'right'
  } else if (
    object.lastKey == 'right' &&
    !keys.right.pressed &&
    object.isGrounded
  ) {
    object.spriteImg.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/idle-right.png'
    object.velocity.x = 0
    object.totalFrame = 11
  }
}

function moveLeft(object) {
  if (keys.left.pressed) {
    object.spriteImg.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/run-left.png'
    object.velocity.x = -5
    object.totalFrame = 12
    object.lastKey = 'left'
  } else if (object.lastKey == 'left' && !keys.left.pressed) {
    object.spriteImg.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/idle-left.png'
    object.velocity.x = 0
    object.totalFrame = 11
  }
}

function moveJump(object) {
  if (keys.jump.pressed && object.isGrounded) {
    object.spriteImg.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/jump-right.png'
    object.velocity.y = -20
    object.totalFrame = 1
    object.isGrounded = false
  }
}

function slideRight(object) {
     // console.log(object.isGrounded)
  if (!object.isGrounded) {
    object.spriteImg.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/slide-right.png'
     //  console.log(object.velocity.y);
      object.velocity.y = 1
      object.totalFrame = 5
      if (keys.jump.pressed) {
          object.velocity.y = -15
          object.velocity.x = -5
          
     }
  }
  object.draw()
}

function slideLeft(object) {
  if (!object.isGrounded) {
     console.log('hadfha')
    object.spriteImg.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/slide-left.png'
    object.velocity.y = 1
    object.totalFrame = 5
    if (keys.jump.pressed) {
      object.velocity.y = -15
      object.velocity.x = 5
    }
  }
  object.draw()
}