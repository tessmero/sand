resetRand()

const global = {
    
    // time elapsed
    t: 0,
    dt: 0,
    
    // graphics context
    backCanvas: null,
    backCtx: null,
    frontCanvas: null,
    frontCtx: null,

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
    particleRadius: 1/200+2e-3,
    nSnowParticles: 2e3, // max visible falling snow particles
    snowFallSpeed: 1e-4, // distance units per ms
    snowSeed: null, // rng seed for falling snow particle positions
    snowAccIndex:200, // current lowest stack height
    frontLayerIndex:0, // height where front layer transitions to back layer
    snowAccHeight: 0, // current lowest stack y-value
    
    //words
    wordFallSpeed: [1e-4,3e-4],
    wordLetterDx: 4e-2,
    letterParticleDx: 1/200+2e-3,
    allWords: [], // list of word Instances
    
    // stacks 
    nStacks: 200,
    stackHeight: 200, // number of particles in max-height stack
    ish: 1/200, // reciprocal of stackHeight for faster math
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