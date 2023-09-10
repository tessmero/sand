
    
    
// Render graphics
function draw(fps) {
    
    var ctx = global.backCtx
    
    // draw background
    ctx.fillStyle = global.backgroundColor
    ctx.fillRect( -10,-10,20,20 )

    //debug
    if( false ){
        // draw screen corners
        var r = .1
        ctx.fillStyle = 'red'
        global.screenCorners.forEach(c => ctx.fillRect( c.x-r, c.y-r, 2*r, 2*r ))
    }
    
    
    // draw falling snow particles
    ctx.fillStyle = global.snowColor
    var r = global.particleRadius
    rngSeed = global.snowSeed
    resetRand()
    var dy = global.snowFallSpeed * global.t
    var ddy = global.snowFallSpeed * global.dt
    for( var i = 0 ; i < global.nSnowParticles ; i++ ){
        var x = rand()
        var y = rand()
        var y0 = nnmod( y + dy, 1 )
        if( y0 > global.snowAccHeight ) continue
        var y1 = y0+ddy
        ctx.fillRect( x-r, y1-r, r, r )
        
        
        // check if landed on top of stack
        var stack = global.stacks[Math.floor( x*global.nStacks )]
        var sy = 1-(stack.height/global.stackHeight)
        if( (sy > y0) && (sy <= y1) ) stack.push(global.snowColor)
    }

    // draw words
    global.allWords.forEach(w => w.draw(ctx))

    
    // draw stacks
    var stackWidth = 1/global.nStacks
    global.colorPalette.forEach( c => {
        ctx.fillStyle = c
        global.stacks.forEach(s => s.draw(ctx,c))
    })
    
    // debug 
    if( false ){
        ctx.fillStyle = 'black'
        ctx.font = ".001em Arial";
        ctx.textAlign = "center";
        ctx.fillText(`${global.angleX.toFixed(2)},${global.angleY.toFixed(2)},${global.angleZ.toFixed(2)}`, .5,.5);
    }
}