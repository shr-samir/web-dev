const Chicken = new Sprite(
    '../../assets/Enemies/Chicken/Idle (32x34).png',
    220,
    160,
    32,
    34,
    32 * 1.5,
    32 * 1.5
)
Chicken.totalFrame = 13
Chicken.velocity.x = -1
Chicken.collision_check = false

function chicken(){
    if(player.position.y == Chicken.position.y){
      if(player.position.x > Chicken.position.x - 200 && player.position.x < Chicken.position.x){
        Chicken.position.x += Chicken.velocity.x
        Chicken.spriteImg.src = '../assets/Enemies/Chicken/Run (32x34).png'
        if (
          boundaryCollisionLeft_not_object(player, Chicken) ||
          boundaryCollisionRight_not_object(player, Chicken)) {
          Chicken.spriteImg.src = '../../assets/Enemies/Chicken/Hit (32x34).png'
          Chicken.totalFrame = 5
          player.onHit()
          console.log('collsion 1')
        }
        // checkCollision('../../assets/Enemies/Chicken/Hit (32x34).png')
        if(Chicken.position.x < 100){
          Chicken.spriteImg.src = '../assets/Enemies/Chicken/Run (32x34) back.png'
          Chicken.velocity.x = 0
        }
        if(Chicken.position.x > 365){
          // console.log(Chicken.position.x)
          Chicken.spriteImg.src = '../assets/Enemies/Chicken/idle-left.png'
          Chicken.velocity.x = 0
        }
      }
      else if(player.position.x < Chicken.position.x + 200 && player.position.x > Chicken.position.x){
          Chicken.position.x -= Chicken.velocity.x
          Chicken.spriteImg.src = '../assets/Enemies/Chicken/run-left.png'
          if(onCollision(player, Chicken)){
            Chicken.spriteImg.src = '../../assets/Enemies/Chicken/hit-left.png'
            Chicken.totalFrame = 5
            console.log('collison 2');
            Chicken.collision_check = true
        }
      }
    }else if(player.position.x>Chicken.position.x){
        Chicken.spriteImg.src = '../../assets/Enemies/Chicken/idle-left.png'
    }
    else if(player.position.x<Chicken.position.x){
        Chicken.spriteImg.src = '../../assets/Enemies/Chicken/Idle (32x34).png'
    }

    if (Chicken.collision_check) {
      if (Chicken.position.y < canvas.height) {
        Chicken.position.y += 10
      } else {
        Chicken.collision_check = false; // Stop moving when lower limit is reached
      }
    }

    spriteSlider(Chicken)
}