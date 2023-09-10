class Word{
    
    constructor(s,pos,color){
        this.s = s
        this.pos = pos
        this.vel = v(0,randRange(...global.wordFallSpeed))
        this.color = color
        
        this.d = v(0,0)
    }
    
    update(dt){
        this.d = this.vel.mul(dt)
        this.pos = this.pos.add(this.d)
        
        return (this.pos.y < 1)
    }
    
    draw(g){
        g.fillStyle = this.color
        
        var r = global.particleRadius
        
        for( var i = 0 ; i < this.s.length ; i++ ){
            var layout = charLayouts[this.s[i]]
            for( var cx = 0 ; cx < charWidth ; cx++ ){
                var x = this.pos.x + global.wordLetterDx*i + global.letterParticleDx*cx
                for( var cy = 0 ; cy < charHeight ; cy++ ){
                    if( layout[cy][cx] != ' ' ){
                        var y = this.pos.y + global.letterParticleDx*cy
                        g.fillRect( x-r, y-r, r, r )
        
                        //ctx.fillRect( x-r, y1-r, r, r )
                        // check if landed on top of stack
                        var y1 = y
                        var y0 = y - this.d.y
                        var si = Math.floor( x*global.nStacks )
                        if( (si<0) || (si>=global.nStacks) ){
                            continue
                        }
                        var stack = global.stacks[si]
                        var sy = 1-(stack.height/global.stackHeight)
                        if( (sy > y0) && (sy <= y1) ) stack.push(this.color)
            
                    }
                }
            }
        }
    }
}