class Sprite {
  constructor(image, x, y, spriteWidth, spriteHeight, width, height) {
    this.spriteImg = new Image()
    this.spriteImg.src = image
    this.spriteWidth = spriteWidth
    this.spriteHeight = spriteHeight
    this.frameX = 0
    this.frameY = 0
    this.totalFrame = 10
    this.gameFrame = 0
    this.frameCounter = 0

    this.position = {
      x: x,
      y: y,
    }
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.width = width
    this.height = height
    this.isGrounded = true
    this.lastKey = 'right'
  }

  draw() {
    // ctx.fillStyle = 'blue'
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

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
