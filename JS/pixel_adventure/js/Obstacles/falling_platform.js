const platform = {
  position: {
    x: 730,
    y: 320,
  },
  status: true,
  width: 32,
  height: 10,
  isMovingDown: false,
  lowerLimit: canvas.height, // Ensure 'canvas' is defined in your context
  moveSpeed: 2
};

const platformImg = new Sprite(
  "../assets/Traps/FallingPlatforms/On(32x10).png",
  platform.position.x,
  platform.position.y,
  platform.width,
  platform.height,
  platform.width * 1.5,
  platform.height * 1.5
);
platformImg.totalFrame = 4;

function fallingPlatform(player, platformImg) {
  player.onPlatfrom = false;

  // platformImg.draw();

  if (Collision(player, platformImg)) {
    if (player.velocity.y > 0) {
      player.onPlatfrom = true;

      // Consider using setTimeout instead of setInterval, and clear it appropriately
        player.velocity.y = 0;
        player.velocity.x = 0;

      player.position.y = platformImg.position.y - player.height; // Adjust player position to be on top of the platform
      platform.isMovingDown = true;
    } else {
      // Collision from below, player should fall down
      player.velocity.y = -player.velocity.y; // Reverse the vertical velocity to simulate a bounce effect
    }
  }

  if (platform.isMovingDown) {
    if (platformImg.position.y < platform.lowerLimit) {
      platformImg.position.y += platform.moveSpeed;
    } else {
      platform.isMovingDown = false; // Stop moving when lower limit is reached
    }
  }
  if (keys.jump.pressed  && player.onPlatfrom) {
    player.velocity.y = -20; // Adjust the value as needed for the jump strength
    player.onPlatfrom = false;
  }

  spriteSlider(platformImg); // Ensure 'spriteSlider' function is defined in your context
}

function Collision(rect1, rect2) {
  return (
    rect1.position.x < rect2.position.x + rect2.width &&
    rect1.position.x + rect1.width > rect2.position.x &&
    rect1.position.y < rect2.position.y + rect2.height &&
    rect1.position.y + rect1.height > rect2.position.y
  );
}


