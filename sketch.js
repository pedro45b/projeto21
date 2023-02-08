var PLAY = 1
var END = 0
var gameState = PLAY;

var carImg, conesImg, conesImg2, pathImg;
var car, cones, cones2, path;
var select_balloon
var distance = 0


function preload() {

    pathImg = loadImage("path.png")
    carImg = loadImage("car.png.png")
    conesImg = loadAnimation("cone.png")
    conesImg2 = loadAnimation("cone2.png")
}

function setup() {
    createCanvas(500, 400)

    path = createSprite(600, 150);
    path.addImage(pathImg);
    path.velocityX = -4;

    car = createSprite(70, 200);
    car.addAnimation("SahilRunning", carImg)
    car.scale = 0.6;
    car.setCollider("circle", 0, 0, 40)
    coneO = new Group
    coneB = new Group
}

function draw() {
    background(0);
    if (keyDown("SPACE")) {
        reset()
    }
    

    if (gameState === PLAY) {
        distance = distance + Math.round(getFrameRate() / 60);
        var vanguard = Math.round(random(1, 2))
        if (World.frameCount % 100 == 0){ 
            switch (vanguard) {
                case 1: conesobst();
                    break;
                case 2: conesobst2();
                default: break;
            }
        }

        
        car.y = World.mouseY;


        if (car.isTouching(coneB) || car.isTouching(coneO)) {
            gameState = END
        }
    }

   

        if (gameState === END) {
            path.velocityX = 0
            coneO.destroyEach()
            coneB.destroyEach()
        }






        drawSprites();
        text("Distance: " + distance, 400, 30);

        if (path.x < 0) {
            path.x = width / 2;
        }

    }





function conesobst() {
    cones = createSprite(400, Math.round(random(10, 250), 20, 40))
    cones.scale = 0.07;
    cones.velocityX = -3
    cones.addAnimation("cone.png", conesImg)
    cones.setLifetime = 100
    coneO.add(cones)
}

function conesobst2() {
    cones2 = createSprite(400, Math.round(random(10, 300), 20, 40))
    cones2.scale = 0.3;
    cones2.velocityX = -3
    cones2.addAnimation("cone2.png", conesImg2)
    cones2.setLifetime = 100
   coneB.add(cones2) 
}

function reset() {
    gameState = PLAY;
    path.velocityX = -4
    distance = 0
}
