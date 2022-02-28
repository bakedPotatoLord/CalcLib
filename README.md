# CalcLib.js
A lightweigt and versatile set of functions for basic calculus operations.

created by @bakedPotatoLord


# Integration 
```javascript
    //should return 1
    console.log(integrate((x)=>{return 1},0,1,0.001));

    //should return PI
    console.log(4*integrate((x)=>{return Math.sqrt(1-x**2)},0,1,0.001));

    //should return 2
    console.log(integrate((x)=>{return 2*Math.cos(x)},0,Math.PI/2,0.00001))
```

# Deriving
```javascript
    // should return 0
    console.log(derivitiveAtX((x)=>{return Math.cos(x)},0,0.00001))

    //should return inf
    console.log(derivitiveAtX((x)=>{return 1/x},0,0.-00001))

    //should return 20
    console.log(derivitiveAtX((x)=>{return 20*x},0,0.00001))
```