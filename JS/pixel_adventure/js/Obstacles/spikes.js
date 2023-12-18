let terrainArray = []
for (let i = 0; i < terrainData.length; i += 250) {
  terrainArray.push(terrainData.slice(i, i + 250))
}

// console.log(terrainArray);

const spikesArray = []

terrainArray.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 255 || symbol === 1073742079) {
      spikesArray.push(
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


function spikesCollision() {
  spikesArray.forEach((spike) => {
    if (
      onCollision(
         player,
         spike,
      )
    ) {
      // console.log('spike collision ')
      player.spriteImg.src = '../assets/main_characters/virtual_guy/hit.png'
      player.totalFrame = 7
      spriteSlider(player)
    }
  })
}


