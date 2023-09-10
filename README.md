Multi-colored sand particles accumulate and flow realistically

Performance is optimized by splitting particles into three categories
- Falling particles are handled procedurally (like [warp](https://github.com/tessmero/warp)), and 
- Unstable stacks of sand are handled with special 1D physics engin
- settled particles are delegated to a secondary graphics buffer which never has to be re-painted (like [trees](https://github.com/tessmero/trees))


Reload the page to reset.

## Demo

https://tessmero.github.io/sand.html

## Usage

clone this repository to your computer

open `test.html` to test locally, using source files in `src`

run `python build.py` to concatenate all source files into one distributable file: `production.js`

