let spikeHead = new Sprite(
    '../../assets/Traps/Spike Head/Blink (54x52).png',
    // 360,
    SpikeHeadPos.position.x,
    // canvas.height - 190,
    SpikeHeadPos.position.y,
    54,
    52,
    54,
    52
);

spikeHead.velocity.x = 2
spikeHead.velocity.y = 0
function drawSpikeHead(){
    if ((spikeHead.position.x + 54) >= SpikeHeadPos.route.right && spikeHead.velocity.x == 0
    && (spikeHead.velocity.y == 0) 
    ){
        setTimeout(() => {
            spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Blink (54x52).png';
            spikeHead.velocity.y = 2
        }, 200);
    }
    else if ((spikeHead.position.x + 54) >= SpikeHeadPos.route.right ){
        spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Right Hit (54x52).png';
        spikeHead.velocity.x = 0
    }
    if ((spikeHead.position.y + 52) >= SpikeHeadPos.route.bottom && spikeHead.velocity.y == 0){
        setTimeout(() => {
            spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Blink (54x52).png';
            spikeHead.velocity.x = -2
        }, 180);
    }
    else if((spikeHead.position.y + 52) >= SpikeHeadPos.route.bottom){
        spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Bottom Hit (54x52).png';
        spikeHead.velocity.y = 0
    }

    if ((spikeHead.position.x <= SpikeHeadPos.route.left) && spikeHead.velocity.x == 0){
        console.log(spikeHead.position)
        spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Blink (54x52).png';
        spikeHead.velocity.y = -2
    }
    else if (spikeHead.position.x <= SpikeHeadPos.route.left) {
        spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Left Hit (54x52).png';
        spikeHead.velocity.x = 0;
    }

    if ((spikeHead.position.y <= SpikeHeadPos.route.top) && spikeHead.velocity.y == 0
        && (spikeHead.position.x + 54) <= SpikeHeadPos.route.right
    ){
        spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Blink (54x52).png';
        spikeHead.velocity.x = 2;
    }
    else if ((spikeHead.position.y <= SpikeHeadPos.route.top) && spikeHead.velocity.y < 0){
        console.log('hello world')
        spikeHead.spriteImg.src = '../../assets/Traps/Spike Head/Top Hit (54x52).png';
        spikeHead.velocity.y = 0
    }
    
    spikeHead.position.x += spikeHead.velocity.x
    spikeHead.position.y += spikeHead.velocity.y
    spikeHead.totalFrame = 4;
    spriteSlider(spikeHead);
}
