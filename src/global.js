resetRand()

const global = {
    
    // time elapsed
    t: 0,
    dt: 0,
    
    // graphics context
    canvas: null,
    ctx: null,

    // colors
    backgroundColor: 'black',
    snowColor: '#FAF3F0',
    colorPalette: null, // populated in setup.js
    
    // relate screen pixels to virtual 2D units
    canvasOffsetX: 0,
    canvasOffsetY: 0,
    canvasScale: 0,
    centerPos: v(.5,.5),
    screenCorners: null, 
    
    // particles
    particleRadius: 1/500+2e-3,
    nSnowParticles: 3e3, // max visible falling snow particles
    snowFallSpeed: 1e-4, // distance units per ms
    snowSeed: null, // rng seed for falling snow particle positions
    
    //words
    wordFallSpeed: [1e-4,2e-4],
    wordLetterDx: 3e-2,
    letterParticleDx: 1/500+2e-3,
    allWords: [], // list of word Instances
    
    // stacks 
    nStacks: 500,
    stackHeight: 500, // number of particles in max-height stack
    sandFlowThreshold: 1, // minimum height difference for particles to flow between stacks
    stacks: null, // list of Stack instances, populated in setup.js
    
    // 
    autoResetCountdown: 0,
    autoResetDelay: 5000,
    
    // mouse
    canvasMousePos: v(0,0),     //pixels
    mousePos: v(0,0),           //virtual units
    
    //debug
    
}