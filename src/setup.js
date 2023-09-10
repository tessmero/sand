

// Initialize the game
function init() {
    
    // init back layer 
    var cvs = document.getElementById("backLayer");
      cvs.style.width='100%';
      cvs.style.height='100%';  
      cvs.lineWidth = 0;
    //cvs.addEventListener("mousedown", mouseDown);
    //cvs.addEventListener("mousemove", mouseMove);
    //cvs.addEventListener("mouseup", mouseUp);
    //cvs.addEventListener("touchstart", mouseDown, false);
    //cvs.addEventListener("touchend", mouseUp, false);
    global.backCanvas = cvs
    global.backCtx = cvs.getContext("2d");
    global.backCtx.lineWidth = 0
    
    // init front layer 
    var cvs = document.getElementById("frontLayer");
      cvs.style.width='100%';
      cvs.style.height='100%';  
    cvs.addEventListener("mousedown", mouseDown);
    cvs.addEventListener("mousemove", mouseMove);
    cvs.addEventListener("mouseup", mouseUp);
    cvs.addEventListener("touchstart", mouseDown, false);
    cvs.addEventListener("touchend", mouseUp, false);
    global.frontCanvas = cvs
    global.frontCtx = cvs.getContext("2d");
    global.frontCtx.lineWidth = 0
    
    // init stacks
    global.stacks = new Array(global.nStacks+1).fill(null) 
    for( var i = 0 ; i < global.nStacks+1 ; i++ ){
        var x = i/global.nStacks
        global.stacks[i] = new Stack(x)
    }
    
    // 
    requestAnimationFrame(function(){
        fitToContainer()    
        resetGame()
        gameLoop()
    });
}

function resetGame(){
    
    // reset RNG
    resetRand(hard = true)
    global.snowSeed = randomSeed()
    
    // reset color pallete
    global.colorPalette = getRandomPalette()
    global.snowColor = global.colorPalette[0]
    
    // clear words
    global.allWords = []
    
    // clear stacks
    global.snowAccHeight = 0
    global.stacks.forEach(s => s.clear())
    global.frontCtx.clearRect(-10000,-10000,30000,30000)
    
    // set automatic reset timer
    global.autoResetCountdown = global.autoResetDelay
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

