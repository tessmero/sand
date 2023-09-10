
// one vertical slice of sand resting at the bottom of the screen
class Stack {
    
    // init empty stack at given x-position
    constructor(x){
        this.x = x
        this.colors = new Array(global.stackHeight).fill(null) 
        this.height = 0
    }
    
    // add one particle to top of stack
    push(color){        
        if(!color) return
        if(this.height >= global.stackHeight) return
        this.colors[this.height] = color
        this.height += 1
    }
    
    // remove particle from top of stack
    // return the removed particle's color
    pop(){
        if( this.height <= 0 ) return
        var i = this.height - 1
        var result = this.colors[i]
        this.colors[i] = null
        this.height -= 1
        return result
    }
    
    // remove all particles
    clear(){
        this.colors.fill(null)
        this.height = 0
    }
    
    // draw single block in this stack
    // used only for drawing front layer
    drawSingle(g,i,color){
        if( this.colors[i] != color ) return
        var x = this.x
        var r = global.particleRadius
        var y = 1-i*global.ish
        g.fillRect( x-r, y-r, r, r )
    }
    
    // fill particles in this stack matching the given color
    // used only for drawing back layer
    draw(g,color){
        var x = this.x
        var r = global.particleRadius
        
        // slow draw
        if( false ){
            for( var i = 0 ; i < this.height ; i++ ){
                if( this.colors[i] != color ) continue
                var y = 1-i*global.ish
                g.fillRect( x-r, y-r, r, r )
            }
        }
        
        //fast draw
        if( true ){
            var startedRect = false
            var span = global.ish+2e-3 
            var y = 0
            for( var i = global.snowAccIndex ; i < this.height ; i++ ){
                if( startedRect ){
                    if( this.colors[i] == color ){
                        
                        //expand rect
                        y = 1-i*global.ish
                        span += global.ish
                        
                    } else {
                        
                        //finish rect
                        g.fillRect( x-r, y-r, r, span)
                        startedRect = false
                        
                    }
                } else if(this.colors[i]==color)  {
                    
                    //start rect
                    y = 1-i/global.stackHeight
                    startedRect = true
                    span = global.ish+2e-3 
                    
                }
            }
            
            if( startedRect ){
                    
                //finish last rect
                g.fillRect( x-r, y-r, r, span)
                startedRect = false
                
            }
        }
    }
}