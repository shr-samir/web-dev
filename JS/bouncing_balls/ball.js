const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function createBall(speed) {
  const radius = getRandomRadius(5, 15) 
  return {
    x: Math.random() * (canvas.width - 2 * radius) + radius,
    y: Math.random() * (canvas.height - 2 * radius) + radius,
    dx: speed * (Math.random() - 0.5) * 2, 
    dy: speed * (Math.random() - 0.5) * 2, 
    radius: radius,
    color: getRandomColor(),
  }
}


function getRandomRadius(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function drawBall(ball) {
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
  ctx.fillStyle = ball.color
  ctx.fill()
}


function newBallPosition(ball) {
  ball.x += ball.dx
  ball.y += ball.dy

  // for collisions in x-axis with walls
  if (
    ball.x + ball.dx + ball.radius > canvas.width ||
    ball.x + ball.dx < ball.radius
  ) {
    ball.dx = -ball.dx
  }

  // for y-axis check

  if (
    ball.y + ball.dy + ball.radius > canvas.height ||
    ball.y + ball.dy < ball.radius
  ) {
    ball.dy = -ball.dy
  }

  // Check for collisions with other balls
  balls.forEach((otherBall) => {
    if (ball !== otherBall && ballsCollision(ball, otherBall)) {
      // formula for simple elastic collision effect
      [ball.dx, otherBall.dx] = [otherBall.dx, ball.dx]
      [ball.dy, otherBall.dy] = [otherBall.dy, ball.dy]
//      ball.dx = -ball.dx
//      otherBall.dx = -otherBall.dx
//      ball.dy = -ball.dy
//      otherBall.dy = -otherBall.dy
    }
  })
}



function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}


function ballsCollision(ball1, ball2) {
  const dist = distance(ball1.x, ball1.y, ball2.x, ball2.y);
  return dist < ball1.radius + ball2.radius;
}





const balls = []
const numberOfBalls = 100
const speed = 2;

for (let i = 0; i < numberOfBalls; i++) {
  balls.push(createBall(speed))
}


function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}


function animate() {
  clearCanvas()
  balls.forEach((ball) => {
    drawBall(ball)
    newBallPosition(ball)
  })
  requestAnimationFrame(animate) 
}

animate()
