# CalcLib.js
A lightweight and versatile set of functions for basic calculus operations.

created by @bakedPotatoLord


# Integration 

 finds the area underneath a function<br>
    ```
    integrate(f,start,stop,accuracy)
    ```

@param {function} f function to integrate<br>
@param {number} start where to start the integration<br>
@param {number} stop where to stop the intergation<br>
@param {number} accuracy a number between 0.00000000001 and 1 (smaller is more accurate)<br> 

<h3>examples</h3>

```javascript
    //should return 1
    console.log(integrate((x)=>{return 1},0,1,0.001));

    //should return PI
    console.log(4*integrate((x)=>{return Math.sqrt(1-x**2)},0,1,0.001));

    //should return 2
    console.log(integrate((x)=>{return 2*Math.cos(x)},0,Math.PI/2,0.00001))
```

# Deriving

  finds the tangent line at a point on a function<br>
    ```
    derivitiveAtX(f,point,accuracy)
    ```

@param {function} f function to derive<br>
@param {number}  point x-value to integrate at <br>
@param {number}  accuracy x-value to integrate at (closer to 0 is more acurate)<br>

<h3>examples</h3>

```javascript
    // should return 0
    console.log(derivitiveAtX((x)=>{return Math.cos(x)},0,0.00001))

    //should return inf
    console.log(derivitiveAtX((x)=>{return 1/x},0,0.-00001))

    //should return 20
    console.log(derivitiveAtX((x)=>{return 20*x},0,0.00001))
```