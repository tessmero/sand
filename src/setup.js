

// Initialize the game
function init() {
    
    var cvs = document.getElementById("gameCanvas");
      cvs.style.width='100%';
      cvs.style.height='100%';  
    cvs.addEventListener("mousedown", mouseDown);
    cvs.addEventListener("mousemove", mouseMove);
    cvs.addEventListener("mouseup", mouseUp);
    cvs.addEventListener("touchstart", mouseDown, false);
    cvs.addEventListener("touchend", mouseUp, false);
    
    
    global.canvas = cvs
    global.ctx = cvs.getContext("2d");
    
    // init stacks
    global.stacks = new Array(global.nStacks).fill(null) 
    for( var i = 0 ; i < global.nStacks ; i++ ){
        var x = i/global.nStacks
        global.stacks[i] = new Stack(x)
    }
    
    // 
    resetGame()
    
    //
    requestAnimationFrame(gameLoop);
}

function resetGame(){
    
    // reset RNG
    resetRand(hard = true)
    global.snowSeed = randomSeed()
    
    // reset color pallete
    global.colorPalette = getRandomPalette()
    global.snowColor = global.colorPalette[0]
    
    //reset words
    global.allWords = [new Word('ABCDEFGHIJKLMNOPQRSTUVWXYZ', v(.1,.5), global.colorPalette[1] )]
    
    // clear stacks
    global.stacks.forEach(s => s.clear())
}


// Main game loop
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
    
    var msPassed = 0;
    if (oldTimeStamp) {
      msPassed = timeStamp - oldTimeStamp;
    }
    var secondsPassed = msPassed / 1000;
    oldTimeStamp = timeStamp;
    var fps = Math.round(1 / secondsPassed);


    msPassed = Math.min(msPassed,50)

    update(msPassed);
    draw(fps);

    requestAnimationFrame(gameLoop);
}


// Initialize the game
init();

