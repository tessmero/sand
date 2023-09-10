

function update(dt) {    

    // advance falling particles
    global.dt = dt
    global.t += dt
    
    // advance falling words
    global.allWords = global.allWords.filter(word => word.update(dt))
    
    // spawn words
    r = .02*global.dt
    spawnWords( r, 30000, 0, global.colorPalette[1], 'A' )
    spawnWords( r, 50000, pi, global.colorPalette[2], 'B' )
    spawnWords( r, 20000, pio2, global.colorPalette[3], 'C' )
    
    // allow stacked particles to flow downhill
    sandFlow()
    
    // update lowest stack height
    var sah = global.stackHeight
    global.stacks.forEach( s => {
        if( s.height < sah ) sah = s.height
    })
    global.snowAccIndex = sah
    global.snowAccHeight = (1.0-sah/global.stackHeight)
    while( global.frontLayerIndex < global.snowAccIndex ){
        global.colorPalette.forEach( c => {
            global.frontCtx.fillStyle = c
            global.stacks.forEach( s => s.drawSingle( global.frontCtx, global.frontLayerIndex, c ))
        })
        global.frontLayerIndex += 1
    }
    

    // check for resized window
    //fitToContainer()    
    
    if( false ){
        // countdown to automatically reset
        global.autoResetCountdown -= dt
        if(global.autoResetCountdown <= 0){
            resetGame()
        }
    }
}

function spawnWords( r, p,ao,color,s ){
    
    if( Math.random()<r){
        var x = .9*(Math.sin(global.t/(p/twopi)+ao) + 1) / 2
        global.allWords.push( new Word(s,v(x+Math.random()*.1,-.1),color) )
    }
}


var lastCanvasOffsetWidth = -1;
var lastCanvasOffsetHeight = -1;
function fitToContainer(){
    
    var cvs = global.backCanvas
    if( (cvs.offsetWidth!=lastCanvasOffsetWidth) || (cvs.offsetHeight!=lastCanvasOffsetHeight) ){
        
      global.backCanvas.width  = cvs.offsetWidth;
      global.backCanvas.height = cvs.offsetHeight;
      global.frontCanvas.width  = cvs.offsetWidth;
      global.frontCanvas.height = cvs.offsetHeight;
      lastCanvasOffsetWidth = cvs.offsetWidth
      lastCanvasOffsetHeight = cvs.offsetHeight
      
        var padding = 0; // Padding around the square region
        var dimension = Math.min(cvs.width, cvs.height) - padding * 2;
        global.canvasScale = dimension;
        global.canvasOffsetX = (cvs.width - dimension) / 2;
        global.canvasOffsetY = (cvs.height - dimension) / 2;
    global.backCtx.setTransform(global.canvasScale, 0, 0, 
        global.canvasScale, global.canvasOffsetX, global.canvasOffsetY);
    global.frontCtx.setTransform(global.canvasScale, 0, 0, 
        global.canvasScale, global.canvasOffsetX, global.canvasOffsetY);
        
        var xr = -global.canvasOffsetX / global.canvasScale
        var yr = -global.canvasOffsetY / global.canvasScale
        global.screenCorners = [v(xr,yr),v(1-xr,yr),v(1-xr,1-yr),v(xr,1-yr)]
        //resetGame()
        
            
        var both = [global.frontCtx,global.backCtx]
        both.forEach(ctx => {
            
            // restrict further drawing to square in center of screen
            ctx.beginPath()
            ctx.moveTo(0,0)
            ctx.lineTo(1,0)
            ctx.lineTo(1,1)
            ctx.lineTo(0,1)
            ctx.closePath()
            ctx.clip()
        })
        
    }
}