class MapBoundary {
  static width = 16
  static height = 16

  constructor({ position }) {
    this.position = position
    this.width = 16
    this.height = 16
  }

  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

// boundary definition
let boundariesBottom = []
let boundariesTop = []
let boundariesLeft = []
let boundariesRight = []

// for boundary collision of map
let boundaryArray = []
for (let i = 0; i < boundaryData[level - 1].length; i += 85) {
  boundaryArray.push(boundaryData[level - 1].slice(i, i + 85)) // change index to 3 it is for map 3
}
// console.log(boundaryArray);

boundaryArray.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 306) {
      boundariesBottom.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
    if (symbol === 307) {
      boundariesTop.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
    if (symbol === 304) {
      boundariesLeft.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
    if (symbol === 305) {
      boundariesRight.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
  })
})

function boundariesCollision() {
  // bottom Boundary collision with
  boundariesBottom.forEach((boundaryBottom) => {
    // boundaryBottom.draw()
    if (
      boundaryCollisionBottom({
        rect1: player,
        rect2: boundaryBottom,
      })
    ) {
      // console.log('collision Bottom')
      player.position.y = boundaryBottom.position.y - player.height
      player.velocity.y = 0
      player.isGrounded = true
    }
  })

  // top Boundary collision with player
  boundariesTop.forEach((boundaryTop) => {
    // boundaryTop.draw()

    if (
      boundaryCollisionTop({
        rect1: player,
        rect2: boundaryTop,
      })
    ) {
      // console.log('collision Top')
      player.position.y = boundaryTop.position.y + MapBoundary.height
      player.velocity.y = 0
    }
  })

  // left Boundary collision with player
  boundariesLeft.forEach((boundaryLeft) => {
    // boundaryLeft.draw()

    if (
      boundaryCollisionLeft({
        rect1: player,
        rect2: boundaryLeft,
      })
    ) {
      player.position.x = boundaryLeft.position.x + MapBoundary.width // - 9
      if (keys.left.pressed) {
        player.velocity.x = 0

        // console.log('collision Left')
      }
      //  console.log('slideLeft');
      slideLeft(player)
      // player.slideLeft()
    }
  })

  // right Boundary collision with player
  boundariesRight.forEach((boundaryRight) => {
    //     boundaryRight.draw()

    if (
      boundaryCollisionRight({
        rect1: player,
        rect2: boundaryRight,
      })
    ) {
      player.position.x = boundaryRight.position.x - player.width // + 9
      if (keys.right.pressed) {
        player.velocity.x = 0
        // console.log('collision Right')
      }

      slideRight(player)
    }
  })
}

// ------------- bottom boundary collision check -------------
function boundaryCollisionBottom({ rect1, rect2 }) {
  return (
    rect1.position.x <= rect2.position.x + rect2.width &&
    rect1.position.x + rect1.width >= rect2.position.x &&
    rect1.position.y <= rect2.position.y + rect2.height &&
    rect1.position.y + rect1.height >= rect2.position.y
  )
}

// ------------ top boundary collision check -------------
function boundaryCollisionBottom_not_object(rect1, rect2) {
  return (
    rect1.position.x < rect2.position.x + rect2.width &&
    rect1.position.x + rect1.width > rect2.position.x &&
    rect1.position.y + rect1.height >= rect2.position.y &&
    rect1.position.y + rect1.height <= rect2.position.y + rect2.height / 4
  )
}

function boundaryCollisionTop({ rect1, rect2 }) {
  return (
    rect1.position.y <= rect2.position.y + MapBoundary.height &&
    rect1.position.x + rect1.width > rect2.position.x &&
    rect1.position.x < rect2.position.x + rect2.width &&
    rect1.position.y - rect1.velocity.y >= rect2.position.y + MapBoundary.height
  )
}

// ----------- left boundary collision check ------------
function boundaryCollisionLeft({ rect1, rect2 }) {
  return (
    rect1.position.x > rect2.position.x &&
    rect1.position.x <= rect2.position.x + MapBoundary.width &&
    rect1.position.y + rect1.height > rect2.position.y &&
    rect1.position.y < rect2.position.y + MapBoundary.height
  )
}
function boundaryCollisionLeft_not_object(rect1, rect2) {
  return (
    rect1.position.x > rect2.position.x &&
    rect1.position.x <= rect2.position.x + rect2.width &&
    rect1.position.y + rect1.height > rect2.position.y &&
    rect1.position.y < rect2.position.y + rect2.height
  )
}

// ------------ right boundary collision check -------------
function boundaryCollisionRight({ rect1, rect2 }) {
  return (
    rect1.position.x < rect2.position.x + MapBoundary.width &&
    rect1.position.x + rect1.width >= rect2.position.x &&
    rect1.position.y + rect1.height > rect2.position.y &&
    rect1.position.y < rect2.position.y + MapBoundary.height
  )
}
function boundaryCollisionRight_not_object(rect1, rect2) {
  return (
    rect1.position.x < rect2.position.x + rect2.width &&
    rect1.position.x + rect1.width >= rect2.position.x
    // rect1.position.y + rect1.height > rect2.position.y &&
    // rect1.position.y < rect2.position.y + rect2.height
  )
}

//////////////
function onCollision(player, obj) {
  return (
    player.position.x <= obj.position.x + obj.width &&
    player.position.x + player.width >= obj.position.x &&
    player.position.y <= obj.position.y + obj.height &&
    player.position.y + player.height >= obj.position.y
  )
}

// ------------------- Collision for Player Death ----

// function dieOnCollision(player, object) {
//   if (onCollision(player, object)) {
//     player.playerSprite.src =
//       '../assets/pixel_adventure_1/main_characters/virtual_guy/hit.png'
//     let positionInSprite =
//       Math.floor(player.gameFrame / staggerFrames) % player.totalFrame
//     player.frameX = player.playerSpriteWidth * positionInSprite
//     player.draw()
//     player.gameFrame++

//     player.velocity.y = -5
//   }
// }
