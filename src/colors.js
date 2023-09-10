var allPalettes = [
    ['#ECF2FF','#95BDFF','#B4E4FF','#DFFFD8','#F7C8E0'],
]

function getRandomColor(palette=null){
    if( !palette ) palette = allPalettes[Math.floor(randRange(0,allPalettes.length))]
    return palette[Math.floor(randRange(0,palette.length))]
}

function getRandomPalette(){
    return [...allPalettes[Math.floor(randRange(0,allPalettes.length))]]
}