// Player class
class Player {
  constructor() {
    this.spriteImg = new Image()
    this.spriteWidth = 32
    this.spriteHeight = 32
    this.frameX = 0
    this.frameY = 0
    this.totalFrame = 10
    this.gameFrame = 0

    this.position = {
      x: 100,
      y: 100,
    }
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.width = 64
    this.height = 64
    this.isGrounded = true
    this.lastKey = 'right'
  }

  draw() {
    ctx.drawImage(
      this.spriteImg,
      this.frameX,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
}

