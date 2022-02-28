
/**
 * @author BakedPotatoLord
*/

/** 
    @description finds slope between two points
    @param {number} x1 first x-val
    @param {number} y1 first y-val
    @param {number} x2 second x-val
    @param {number} y2 second y-val
 */
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
    temp = 0;
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


/** 
    @description finds the tangent line at a point on a function
        (positive accuracy approaches from right. negative approaches from left)
    @param {function} f function to derive
    @param {number}  point x-value to integrate at 
    @param {number}  accuracy x-value to integrate at (closer to 0 is more acurate)
    */
function derivitiveAtX(f,point,accuracy){
    if(!(typeof f == 'function' && typeof point == 'number' && typeof accuracy == 'number')){ 
    throw new Error('use the correct datatypes')
    }else if( accuracy == 0){
        throw new Error('accuracy cannot equal 0')
    }else{
        try{
            return slope(point,f(point),point+accuracy,f(point+accuracy))
        }catch(error){
            throw new Error('function is not continous at this point')
        }
    }
}