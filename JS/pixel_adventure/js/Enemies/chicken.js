const Chicken = new Sprite(
    '../../assets/Enemies/Chicken/Idle (32x34).png',
    360,
    160,
    32,
    34,
    32 * 1.5,
    32 * 1.5
)
Chicken.totalFrame = 13
Chicken.velocity.x = -1

function chicken(){
  // console.log("chcicken : ",Chicken.position.y)
  // console.log("player : ",player.position.y)
    // console.log(Chicken)
    if(player.position.y == Chicken.position.y){
      if(player.position.x > Chicken.position.x - 200 && player.position.x < Chicken.position.x){
        Chicken.position.x += Chicken.velocity.x
        Chicken.spriteImg.src = '../assets/Enemies/Chicken/Run (32x34).png'
        if(onCollision(player, Chicken)){
          Chicken.spriteImg.src = '../../assets/Enemies/Chicken/Hit (32x34).png'
          Chicken.totalFrame = 5
        }
        // checkCollision('../../assets/Enemies/Chicken/Hit (32x34).png')
        if(Chicken.position.x < 100){
          Chicken.spriteImg.src = '../assets/Enemies/Chicken/Run (32x34) back.png'
          Chicken.velocity.x = 0
        }
        if(Chicken.position.x > 365){
          console.log(Chicken.position.x)
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
        }
      }
    }else if(player.position.x>Chicken.position.x){
        Chicken.spriteImg.src = '../../assets/Enemies/Chicken/idle-left.png'
    }
    else if(player.position.x<Chicken.position.x){
        Chicken.spriteImg.src = '../../assets/Enemies/Chicken/Idle (32x34).png'
    }
    spriteSlider(Chicken)
}