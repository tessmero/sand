
// allow sand to flow downhill one tick
function sandFlow(){
    
    var n = global.stacks.length - 1
    for( var i = 0 ; i < n ; i++ ){
        var slide = false
        while( (global.stacks[i].height-global.stacks[i+1].height)>global.sandFlowThreshold ){
            
            // move one particle to the right
            global.stacks[i+1].push( global.stacks[i].pop() )
            slide = true
        }
        if( slide ) i += 1
    }
    
    for( var i = n ; i > 0 ; i-- ){
        var slide = false
        while( (global.stacks[i].height-global.stacks[i-1].height)>global.sandFlowThreshold ){
            
            // move one particle to the left
            global.stacks[i-1].push( global.stacks[i].pop() )
            slide = true
        }
        if( slide ) i -= 1
    }
}