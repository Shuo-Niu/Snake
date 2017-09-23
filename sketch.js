var s;
var scl = 20;

var food;

function setup() {  // p5
    createCanvas(600, 600); // p5
    s = new Snake();
    frameRate(10);  // p5
    pickLocation();
}

function draw() {   // p5
    background(51); // p5

    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);  // p5
    rect(food.x, food.y, scl, scl); // p5
}

function mousePressed() {   // p5
    s.total++;
}

function keyPressed() { // p5
    if (keyCode == UP_ARROW) {  // p5
        s.dir(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode == LEFT_ARROW) {
        s.dir(-1, 0);
    } else if (keyCode == RIGHT_ARROW) {
        s.dir(1, 0);
    }
}

function pickLocation() {
    var cols = floor(width / scl);  // p5
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));  // p5
    food.mult(scl); // processing
}