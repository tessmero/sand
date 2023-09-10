

function update(dt) {    

    // advance falling particles
    global.dt = dt
    global.t += dt
    
    // advance falling words
    global.allWords = global.allWords.filter(word => word.update(dt))
    
    // spawn words
    if( Math.random()<(.02*dt) ){
        var color = global.colorPalette[Math.floor(randRange(1,global.colorPalette.length))]
        global.allWords.push( new Word('O',v(.45+Math.random()*.1,0),color) )
    }
    
    // allow stacked particles to flow downhill
    sandFlow()

    // check for resized window
    fitToContainer()    
}


var lastCanvasOffsetWidth = -1;
var lastCanvasOffsetHeight = -1;
function fitToContainer(){
    
    var cvs = global.canvas
    if( (cvs.offsetWidth!=lastCanvasOffsetWidth) || (cvs.offsetHeight!=lastCanvasOffsetHeight) ){
        
      cvs.width  = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
        var padding = 0; // Padding around the square region
        var dimension = Math.min(cvs.width, cvs.height) - padding * 2;
        global.canvasScale = dimension;
        global.canvasOffsetX = (cvs.width - dimension) / 2;
        global.canvasOffsetY = (cvs.height - dimension) / 2;
    global.ctx.setTransform(global.canvasScale, 0, 0, 
        global.canvasScale, global.canvasOffsetX, global.canvasOffsetY);
        
        var xr = -global.canvasOffsetX / global.canvasScale
        var yr = -global.canvasOffsetY / global.canvasScale
        global.screenCorners = [v(xr,yr),v(1-xr,yr),v(1-xr,1-yr),v(xr,1-yr)]
    }
}