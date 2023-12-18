

function drawSpikeBall(x, y){
     const spike_ball = new Sprite(
     
          '../assets/Traps/Spiked Ball/Spiked Ball.png',
          // 360,
          x,
          // canvas.height - 190,
          y,
          28,
          28,
          28 * 1.5,
          28 * 1.5
     );
     spriteSlider(spike_ball)
}

function drawSpikeChain(x, y){
     const spike_chain = new Sprite(
          '../assets/Traps/Spiked Ball/Chain.png',
          // 360,
          x,
          // canvas.height - 190,
          y,
          8,
          8,
          8 ,
          8 
     );
     spriteSlider(spike_chain)
}

function drawSpikedChainedBall(x1, y1, x2, y2) {
     let co_ordinates = drawLine(x1, y1, x2, y2);
     let ball_position = co_ordinates.pop();
     drawSpikeBall(ball_position[0] - 10, ball_position[1]); // Create spike ball
     let temp_chain_x = 0;
     let temp_chain_y = 0;
     
     co_ordinates.forEach((item, index) => {
          let chain_x_pos = item[0];
          let chain_y_pos = item[1];
          if (index == 0){
               // Create pivot point
               drawSpikeChain(chain_x_pos, chain_y_pos);
               temp_chain_x = chain_x_pos;
               temp_chain_y = chain_y_pos;
          }
          else{
               // Create straight lined chain 
               if (((temp_chain_x + 16) < chain_x_pos) || ((temp_chain_y + 16) < chain_y_pos)){
                    drawSpikeChain(chain_x_pos, chain_y_pos);
                    temp_chain_x = chain_x_pos;
                    temp_chain_y = chain_y_pos;
               }
          }
     });

}
