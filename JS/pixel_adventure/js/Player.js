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
    this.width = 64 - 22
    this.height = 64
    this.isGrounded = true
    this.lastKey = 'right'
  }

  draw() {
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(
      this.spriteImg,
      this.frameX,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x - 9,
      this.position.y,
      this.spriteWidth * 2,
      this.height
    )
  }
}

