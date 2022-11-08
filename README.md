# CalcLib.js
<img src='https://github.com/bakedpotatolord/calclib/actions/workflows/Main.yml/badge.svg'><br>

A lightweight and versatile set of functions for basic calculus operations.


## Usage

```ts
import {derivitiveAtX, integrate,areaAroundAxis} from '@bakedpotatolord/calclib'
    
integrate(1,0,1,0.001) //returns 1

4*integrate((x)=> Math.sqrt(1-x**2),0,1,0.0000001) //returns ~PI

integrate((x)=> 2*Math.cos(x),0,Math.PI/2,0.00001) //returns  2

derivitiveAtX((x)=>20*x,0,0.0001) //returns 20

derivitiveAtX((x)=>1/x,0,-0.001) //returns Infinity

areaAroundAxis(2,'x',0,1,0.0001) // returns 4*PI ~= 12.566

areaAroundAxis((x)=>x**2,'y',0,1,0.0001) // returns PI/2 ~= 1.57

integrate2D(1,0,1,0,1,0.001) // returns 1

integrate2D((x,y)=>Math.cos(x)*Math.cos(y),0,1,0,1,0.00001) //returns ~0.708

```