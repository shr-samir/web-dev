let collectedFruits = [];

function createFruitSprite(name, x, y) {
  return new Sprite(
    `../../assets/Items/Fruits/${name}.png`,
    x,
    y,
    32,
    32,
    32 * 1.5,
    32 * 1.5
  );
}

let fruits = [
  'Apple',
  'Bananas',
  'Orange',
  'Pineapple',
  'Strawberry',
  'Melon',
  'Kiwi',
  'Cherries'
].map(name => ({
  name: name,
  sprite: (x, y) => createFruitSprite(name, x, y)
}));

function generateFruitCoordinates(index, startX, startY, stepX, stepY, count) {
  const coordinates = [];

  for (let i = 0; i < count; i++) {
    coordinates.push({
      index: index,
      x1: startX + i * stepX,
      y1: startY + i * stepY
    });
  }

  return coordinates;
}

let fruitsCordinates = [
  //map1--fruits coordinates
  [
    ...generateFruitCoordinates(4, 225, 100, 64, 0, 3),
    ...generateFruitCoordinates(1, 225, 375, 64, 0, 3),
    ...generateFruitCoordinates(0, 450, 200, 60, -80, 2),
    ...generateFruitCoordinates(0, 570, 200, 60, 0, 1),
    ...generateFruitCoordinates(3, 700, 200, 70, 0, 3),
    ...generateFruitCoordinates(4, 1000, 400, 70, 0, 1),
    ...generateFruitCoordinates(4, 1020, 490, 70, 0, 3),
    ...generateFruitCoordinates(1, 450, 525, 30, -50, 3),
    ...generateFruitCoordinates(1, 500, 525, 30, -50, 3),
    ...generateFruitCoordinates(1, 550, 525, 30, -50, 3),
    ...generateFruitCoordinates(7, 840, 480, 0, -50, 4),
  ],
  [
    ...generateFruitCoordinates(6, 150, 500, 64, 0, 4),
    ...generateFruitCoordinates(7, 50, 450, 64, 0, 1),
    ...generateFruitCoordinates(4, 410, 270, 64, 0, 2),
    ...generateFruitCoordinates(7, 1145, 500, 64, 0, 3),
    ...generateFruitCoordinates(6, 1000, 550, 64, -80, 2),
    ...generateFruitCoordinates(5, 925, 385, 80, -80, 2),
    ...generateFruitCoordinates(1, 1150, 280, 20, -50, 2),
    ...generateFruitCoordinates(1, 1200, 280, 20, -50, 2),
  ],
  [
    // ...generateFruitCoordinates(2, 90, 500, 0, -50, 8),
    ...generateFruitCoordinates(6, 250, 225, 60, 0, 9),
    ...generateFruitCoordinates(2, 250, 420, 60, 0, 9),
    ...generateFruitCoordinates(5, 250, 350, 0, -50, 2),
    ...generateFruitCoordinates(1, 264, 555, 0, -50, 2),
    ...generateFruitCoordinates(2, 264, 555, 0, -50, 2),
    ...generateFruitCoordinates(1, 200, 600, 64, 0, 5),
    ...generateFruitCoordinates(1, 1150, 280, 20, -50, 2),
    ...generateFruitCoordinates(1, 1200, 280, 20, -50, 2),
    ...generateFruitCoordinates(1, 1250, 280, 20, -50, 2),
    ...generateFruitCoordinates(4, 1200, 100, 30, 40, 3),
    ...generateFruitCoordinates(7, 620, 600, 60, 0, 5),
    ...generateFruitCoordinates(1, 1070, 600, 0, -50, 2),
    ...generateFruitCoordinates(1, 1130, 600, 0, -50, 2),
    ...generateFruitCoordinates(1, 1190, 600, 0, -50, 2),
    ...generateFruitCoordinates(4, 865, 500, 60, -50, 2),
    ...generateFruitCoordinates(4, 865, 390, 30, -80, 2),
    ...generateFruitCoordinates(1, 920, 200, 20, -50, 2),
    ...generateFruitCoordinates(1, 970, 200, 20, -50, 2),
    ...generateFruitCoordinates(1, 1020, 200, 20, -50, 2),
    ...generateFruitCoordinates(7,300, 120, 60, 0, 6),
    
  ]]
  
  function  drawFruits(){
    const remainingFruits = fruitsCordinates[level-1].filter((item) => {
    return !collectedFruits.some((collected) => {
        return collected.position.x === item.x1 && collected.position.y === item.y1;
      });
    });

    fruitsCordinates[level-1] = remainingFruits;

    fruitsCordinates[level-1].forEach((item)=>{
    let selectedFruits = fruits[item.index]
    const selectedFruit = selectedFruits.sprite(item.x1,item.y1)
    selectedFruit.totalFrame = 17; 
    selectedFruit.position.x = item.x1;
    selectedFruit.position.y = item.y1;
    FruitCollisionCheck(player,selectedFruit)
    spriteSlider(selectedFruit)
  })
}

function FruitCollisionCheck(player,spriteInstance){
  if(onCollision(player,spriteInstance))
  {
    player.score += 3,
    console.log(player.score)
    collectedFruits.push(spriteInstance);
    spriteInstance.spriteImg.src = "../../assets/Items/Fruits/Collected.png"
    spriteInstance.totalFrame = 6
  }
}