# CalcLib.js
A lightweight and versatile set of functions for basic calculus operations.


## Usage

```ts
import {derivitiveAtX, integrate} from '@bakedpotatolord/calclib'
    
integrate((x)=> 1,0,1,0.001) //returns 1

4*integrate((x)=> Math.sqrt(1-x**2),0,1,0.0000001) //returns ~PI

integrate((x)=> 2*Math.cos(x),0,Math.PI/2,0.00001) //returns  2

derivitiveAtX((x)=>20*x,0,0.00001) //returns 20

derivitiveAtX((x)=>1/x,0,0.-00001) //returns INFINITY



```