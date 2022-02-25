var temp = 0;


/** 
 * @function  finds the area of a function
    @param {function} f function to integrate
    @param {number} start where to start the integration
    @param {number} stop where to stop the intergation
    @param {number} accuracy a number between 0.001 and 1 (lower being more accurate)
 */

function integrate(f,start,stop,accuracy){
    if(!(accuracy >=0.001 && accuracy <=1)){
        throw new error
    }
    for(var i = start;i<stop;i+=(stop-start)*accuracy){
        temp+= f(i)*((stop-start)*accuracy);
    }
    return temp;
}


function integ(x){
  return 4;
}

console.log(integrate(integ,0,1,0.001));