const ghurra_const = {
  source: 'assets/Traps/Saw/On(38x38).png',
  // 360,
  pos_x: 195,
  // canvas_height - 190,
  pos_y: 400,
  width: 38,
  height: 38 / 2,
  moveDirection: 1,
  leftLimit: 195,
  rightLimit: 370,
  moveSpeed: .5,
}
const ghurraImg = new Sprite(
  '../../assets/Traps/Saw/On(38x38).png',
  // 360,
  195,
  // canvas.height - 190,
  400,
  38,
  38 / 2,
  38 * 0.8,
  38 * 0.8
)
ghurraImg.totalFrame = 8

ghurra_collision_check = false
player_collision_check = false

function ghurra() {
  spriteSlider(ghurraImg)
  // ghurraImg.position.x += 2

  // if (ghurraImg.position.x + ghurra_const.width>=410){
  // ghurraImg.position.x -= 2

  // }
  ghurraImg.position.x += ghurra_const.moveSpeed * ghurra_const.moveDirection

  // console.log(ghurraImg.position.x);
  if (
    ghurraImg.position.x >= ghurra_const.rightLimit ||
    ghurraImg.position.x <= ghurra_const.leftLimit
  ) {
    // console.log("inside");
    ghurra_const.moveDirection *= -1
    // ghurraImg.position.x = 200; // Reverse direction
  }

  // if (!player_collision_check){

  //     if (!ghurra_collision_check){
  //       if (boundaryCollisionBottom_not_object(player, ghurraImg)) {
  //         ghurraImg.spriteImg.src = 'assets/Enemies/ghurra/hit.png'
  //         ghurraImg.totalFrame = 5
  //         spriteSlider(ghurraImg)
  //         ghurraImg.position.y -= 50; // Update the y position
  //         animate_dead_ghurra()
  //         console.log('ghurra kill')
  //         ghurra_collision_check=true
  //         player_collision_check = true

  //       }
  //     }
  //   }

  //   function animate_dead_ghurra() {
  //     ghurraImg.position.y += 2; // Update the y position

  //           // Check if the object has moved out of the canvas
  //           if (ghurraImg.position.y - ghurraImg.height < canvas.height) {
  //               requestAnimationFrame(animate_dead_ghurra); // Continue the animation
  //           }
  //       }

  //   const bulletImg = new Sprite(
  //     '../assets/Enemies/ghurra/bullet.png',
  //     ghurraImg.position.x, // ghurra x - bullet
  //     // canvas.height - 160,
  //     ghurraImg.position.y + 20,
  //     16,
  //     16,
  //     16 * 2,
  //     16 * 2
  //   )

  //   // function drawBullet() {
  //   //   ctx.drawImage(
  //   //     bulletImg.spriteImg,
  //   //     bulletImg.position.x,
  //   //     bulletImg.position.y,
  //   //     bulletImg.width,
  //   //     bulletImg.height - 20
  //   //   )
  //   // }

  //   function moveBullet() {
  //     bulletImg.position.x -= 4
  //     // Reset the bullet's position after a certain interval
  //     if (bulletImg.position.x <= 0) {
  //       bulletImg.position.x = ghurraImg.position.x
  //     }
}
