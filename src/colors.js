var allPalettes = [
    ['#ECF2FF','#95BDFF','#B4E4FF','#DFFFD8'],
    ['#FFFAD7','#FCDDB0','#FF9F9F','#E97777'],
    ['#FFE6F7','#FFABE1','#C689C6','#937DC2'],
    ['#EEF1FF','#D2DAFF','#AAC4FF','#B1B2FF'],
]

function getRandomColor(palette=null){
    if( !palette ) palette = allPalettes[Math.floor(randRange(0,allPalettes.length))]
    return palette[Math.floor(randRange(0,palette.length))]
}

function getRandomPalette(){
    return [...allPalettes[Math.floor(randRange(0,allPalettes.length))]]
}