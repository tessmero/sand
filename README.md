Multi-colored sand particles accumulate and flow realistically.

Reload the page to reset.

Performance is optimized by grouping particles into three categories
- Falling particles are drawn procedurally (like [warp](https://github.com/tessmero/warp))
- Unstable piles of particles are handled with simplified 1D physics engine
- Settled particles are drawn on a secondary graphics buffer that doesn't get cleared (like [trees](https://github.com/tessmero/trees))


## Demo

https://tessmero.github.io/sand.html

## Usage

clone this repository to your computer

open `test.html` to test locally, using source files in `src`

run `python build.py` to concatenate all source files into one distributable file: `production.js`

