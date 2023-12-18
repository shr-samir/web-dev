

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
    this.frameCounter = 0

    this.position = {
      x: 100,
      y: 100,
    }
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.width = 32 * 1.5 
    this.height = 32 * 1.5
    this.isGrounded = true
    this.lastKey = 'right'

    // ---------- camera box ----------

    this.camerabox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 200,
      height: 80,
    }
  }

  draw() {
    // ctx.fillStyle = 'blue'
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(
      this.spriteImg,
      this.frameX ,
      this.frameY * this.spriteHeight  ,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x ,
      this.position.y,
      this.width ,
      this.height
    )
  }

  // updateCameraBox() {
  //   this.camerabox = {
  //     position: {
  //       x: this.position.x - 75,
  //       y: this.position.y,
  //     },
  //     width: 200,
  //     height: 80,
  //   }
  // }

  // slideCameraToLeft({ canvas, camera }) {
  //   const cameraBoxRight = this.camerabox.position.x + this.camerabox.width
  //   const scaledDownCanvasWidth = canvas.width / 2

  //   // if (cameraBoxRight >= 4000) return
  //   if (cameraBoxRight >= scaledDownCanvasWidth + Math.abs(camera.position.x)) {
  //     // console.log('to left');
  //     camera.position.x -= this.velocity.x
  //   }
  // }

  // slideCameraToRight(camera) {
  //   if (this.camerabox.position.x <= 0) return

  //   if (this.camerabox.position.x <= Math.abs(camera.position.x)) {
  //     camera.position.x -= this.velocity.x
  //   }
  // }
}
