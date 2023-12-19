// ---------- movement ---------
function move(object) {
  moveRight(object);

  moveLeft(object);

  moveJump(object);

  // checkCollision(object1, object2) {
  
  // if (onCollision(player, bulletImg) && player.lastKey == 'right') {
  //   player.spriteImg.src = '../assets/main_characters/virtual_guy/hit.png'
  //   player.totalFrame = 7
  // }

  // if (onCollision(player, bulletImg) && player.lastKey == 'left') {
  //   player.spriteImg.src = '../assets/main_characters/virtual_guy/hit-left.png'
  //   player.totalFrame = 7
  // }
  
  if (onCollision(player, ghurraImg)) {
    player.totalFrame = 7;
    player.spriteImg.src = "../assets/main_characters/virtual_guy/hit.png";
    player.onHit()
    console.log("Player kill");
  }

  spikesCollision();


  spriteSlider(object);
}

function update(object) {
  object.position.x += object.velocity.x;
  object.position.y += object.velocity.y;
  if (object.position.y + object.height + object.velocity.y <= canvas.height)
    object.velocity.y += gravity;
  else {
    object.velocity.y = 0;
    object.isGrounded = true;
  }

  // ---------- camera box ----------
  // object.updateCameraBox()

  // ctx.fillStyle = 'rgba(0, 0, 255, 0.2)'
  // ctx.fillRect(object.camerabox.position.x, object.camerabox.position.y, object.camerabox.width, object.camerabox.height)
}

// ---------------- to change any sprite image -------------------
function spriteSlider(object) {
  object.frameCounter++;
  {
    positionInSprite =
      Math.floor(object.gameFrame / staggerFrames) % object.totalFrame;
    object.frameX = object.spriteWidth * positionInSprite;

    object.draw();
    object.gameFrame++;
  }
}

// ------------------ player movement -------------------
function moveRight(object) {
  if (keys.right.pressed) {
    object.spriteImg.src =
      "../assets/main_characters/virtual_guy/run-right.png";
    object.velocity.x = 3;
    object.totalFrame = 12;
    object.lastKey = "right";
    // object?.slideCameraToLeft({canvas, camera})
  } else if (
    object.lastKey == "right" &&
    !keys.right.pressed &&
    object.isGrounded
  ) {
    object.spriteImg.src =
      "../assets/main_characters/virtual_guy/idle-right.png";
    object.velocity.x = 0;
    object.totalFrame = 11;
  }
}

function moveLeft(object) {
  if (keys.left.pressed) {
    object.spriteImg.src = "../assets/main_characters/virtual_guy/run-left.png";
    object.velocity.x = -3;
    object.totalFrame = 12;
    object.lastKey = "left";
    // object.slideCameraToRight({canvas, camera})
  } else if (object.lastKey == "left" && !keys.left.pressed) {
    object.spriteImg.src =
      "../assets/main_characters/virtual_guy/idle-left.png";
    object.velocity.x = 0;
    object.totalFrame = 11;
  }
}

function moveJump(object) {
  if (keys.jump.pressed && object.isGrounded) {
    object.spriteImg.src =
      "../assets/main_characters/virtual_guy/jump-right.png";
    object.velocity.y = -12;
    object.totalFrame = 1;
    object.isGrounded = false;
  }
}

function slideRight(object) {
  // console.log(object.isGrounded)
  if (!object.isGrounded) {
    object.spriteImg.src =
      "../assets/main_characters/virtual_guy/slide-right.png";
    //  console.log(object.velocity.y);
    object.velocity.y = 1;
    object.totalFrame = 5;
    if (keys.jump.pressed) {
      object.velocity.y = -8;
      object.velocity.x = -1;
    }
  }
  spriteSlider(object);
}

function slideLeft(object) {
  if (!object.isGrounded) {
    object.spriteImg.src =
      "../assets/main_characters/virtual_guy/slide-left.png";
    object.velocity.y = 1;
    object.totalFrame = 5;
    if (keys.jump.pressed) {
      object.velocity.y = -8;
      object.velocity.x = 1;
    }
  }
  spriteSlider(object);
}

// // ------------------ chicken movement -------------------

// if (onCollision(player, Chicken) && player.lastKey == 'right') {
//   player.spriteImg.src = '../assets/main_characters/virtual_guy/hit.png'
//   player.totalFrame = 7
// }

// if (onCollision(player, Chicken) && player.lastKey == 'left') {
//   player.spriteImg.src = '../assets/main_characters/virtual_guy/hit-left.png'
//   player.totalFrame = 7
// }
