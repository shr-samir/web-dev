let angle = Math.PI / 4;

let angleV = 0;
let angleA = 0;

let len;


function drawLine(x1, y1, x2, y2) {
    // Gives array position in array of array for straight line of chain
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const steep = dy > dx;

    if (steep) {
        [x1, y1] = [y1, x1];
        [x2, y2] = [y2, x2];
    }

    if (x1 > x2) {
        [x1, x2] = [x2, x1];
        [y1, y2] = [y2, y1];
    }

    const dx2 = x2 - x1;
    const dy2 = Math.abs(y2 - y1);
    const ystep = y1 < y2 ? 1 : -1;

    let error = dx2 / 2;
    const yValues = [];

    for (let x = x1; x <= x2; x++) {
        yValues.push(steep ? [y1, x] : [x, y1]);
        error -= dy2;
        if (error < 0) {
            y1 += ystep;
            error += dx2;
        }
    }

    return yValues;
}



function oscillateSpikedChainBall(x1, y1, x2, y2){
    let gravity = 1
    let length = Math.round(
        Math.sqrt(
            Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
        )
    ); // Calculating length for chain
    len = length;
    let force = gravity * Math.sin(angle); // Calculation of force
    angleA = (-1 * force) / len; // Calculating angular acceleration
    angleV += angleA; // Calculating angular velocity
    angle += angleV; // Calculating angle

    // calculation of new x and y position of spike ball
    let new_x = len * Math.sin(angle) + x1;
    let new_y = len * Math.cos(angle) + y1;
    return [Math.round(new_x), Math.round(new_y)]
   
}
