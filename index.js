
function slope(x1,y1,x2,y2){
    return((y1-y2)/(x1-x2))
}


/** 
    @description finds the area underneath a function
    @param {function} f function to integrate
    @param {number} start where to start the integration
    @param {number} stop where to stop the intergation
    @param {number} accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
 */
    var temp = 0;
function integrate(f,start,stop,accuracy){
    //validate input
    if(!(accuracy >=0.00000000001 && accuracy <=1)){
        throw new Error('use a valid accuracy')
    }else if(!(typeof f == 'function' && typeof start == 'number' && typeof stop == 'number' && typeof accuracy == 'number' )){
        throw new Error('use the correct datatypes')
    }else if(start > stop){
        throw new Error('start parameter must be less than stop parameter')
    }else{
        //if data is good
        for(var i = start;i<stop;i+=(stop-start)*accuracy){
            temp+= f(i)*((stop-start)*accuracy);
            //console.log(i,temp)
        }
        return temp;
    }
}



//should return 1
console.log(integrate((x)=>{return 1},0,1,0.001));

//should return PI
console.log(4*integrate((x)=>{return Math.sqrt(1-x**2)},0,1,0.001));

//should return 1
console.log(integrate((x)=>{return Math.cos(x)},0,Math.PI/2,0.00001))


/** 
    @description finds the tangent line at a point on a function
    @param {function} f function to derive
    @param {number}  point x-value to integrate at 
    @param {number}  point x-value to integrate at 

 */

function derivitiveAtX(f,point,accuracy){
    if(!(typeof f == 'function' && typeof point == 'number' && typeof accuracy == number)){ 
    throw new Error('use the correct datatypes')
    }else{
        if(slop)
        return 
    }
}