# CalcLib.js
<img src='https://github.com/bakedpotatolord/calclib/actions/workflows/Main.yml/badge.svg'><br>

A lightweight and versatile set of functions for basic calculus operations.


## Usage

```ts
import {derivitiveAtX} from '@bakedpotatolord/calclib'

derivitiveAtX((x)=>20*x,0,0.0001) //returns 20
```

This library has functions for:

- [Definite Integration](#definite-integration)
- [Derivite at a Point](#derivitive-at-a-point)
- [Area Around an Axis](#area-around-axis)
- [2 Variable Integration](#2-variable-integration)
- [Arc Length](#Arc-Length)


### Definite Integration
finds the area under a curve
```ts
integrate(1,0,1,0.001) //returns 1
4*integrate((x)=> Math.sqrt(1-x**2),0,1,0.0001) //returns ~PI
integrate((x)=> 2*Math.cos(x),0,Math.PI/2,0.001) //returns  2
```

### Derivitive at a Point
returns the slope of the tangent line at a point on a function (positive accuracy approaches from right. negative approaches from left)
```ts
derivitiveAtX((x)=>20*x,0,0.0001) //returns 20
derivitiveAtX((x)=>1/x,0,-0.001) //returns Infinity
```

### Area Around Axis
Returns the area of a function revolved around a given axis, between two points
```ts
areaAroundAxis(2,'x',0,1,0.0001) // returns 4*PI ~= 12.566
areaAroundAxis((x)=>x**2,'y',0,1,0.0001) // returns PI/2 ~= 1.57
```

### 2 Variable Integration
returns the area of a shape bounded by the surface produced by the function, bound inputs, and the xy axis

```ts
integrate2D(1,0,1,0,1,0.001) // returns 1
integrate2D((x,y)=>Math.cos(x)*Math.cos(y),0,1,0,1,0.00001) //returns ~0.708
```

### Arc Length
returns the length of an arc between two bounds

```ts
arcLength((x)=>x**2,0,2,0.001) //returns ~4.6467
arcLength((x)=>Math.sin(x),0,6,0.001) //returns ~7.24256
```