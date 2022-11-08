/**
 * @author BakedPotatoLord  
*/

/**@description a function in terms of x such that f(x)=y OR, an y value*/
type derivableFunction ={
    (x:number):number | number
}
/**@description a function in terms of x and y such that f(x,y)=z OR, an z value*/
type derivableFunction2D ={
    (x:number,y:number):number | number
}

export const Tau = 2*Math.PI

/** 
@description finds slope between two points
@param  x1 first x-val
@param y1 first y-val
@param x2 second x-val
@param y2 second y-val
*/
export function slope(x1:number,y1:number,x2:number,y2:number){
    return((y1-y2)/(x1-x2));
}
/** 
    @description returns the area underneath a function, between two points
    @param  f function to integrate
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
export function integrate(f:derivableFunction,start:number,stop:number,accuracy:number){
    let temp = 0;
    //if data is good
    for(let i = start;i<(stop-accuracy);i+=(stop-start)*accuracy){
        temp+= ((f(i)+f(i+accuracy))/2)*((stop-start)*accuracy);
    }
    return temp;
}

/** 
    @description returns the area of a shape bounded by the curve produced by the function, bound inputs, and the xy axis
    @param  f function to integrate
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
    export function integrate2D(f:derivableFunction2D,xLower:number,xUpper:number,yLower:number,yUpper:number,accuracy:number){
        let temp = 0;
        for(let i = xLower;i<(xUpper-accuracy);i+=(xUpper-xLower)*accuracy){
            for(let j = yLower;i<(yUpper-accuracy);i+=(yUpper-yLower)*accuracy){
            //for all xy pairs,
            temp+= ((f(i,j)+f(i+accuracy,j)+f(i,j+accuracy)+f(i+accuracy,j+accuracy))/4)*((xUpper-xLower)*(yUpper-yLower)*accuracy);
            }
        }
        return temp;
    }

/** 
    @description returns the slope of the tangent line at a point on a function
        (positive accuracy approaches from right. negative approaches from left)
    @param  f function to derive
    @param  point x-value to integrate at 
    @param  accuracy x-value to integrate at (closer to 0 is more acurate)
    */

export function derivitiveAtX(f:derivableFunction,point:number,accuracy: number){
    if( accuracy == 0){
        throw new Error('accuracy cannot equal 0');
    }else{
        try{
            return slope(point,f(point),point+accuracy,f(point+accuracy));
        }catch(error){
            throw new Error('function is not continous at this point');
        }
    }
}

/** 
    @description returns the area of a function revolved around a given axis, between two points
    @param  f function to integrate
    @param  axis axis to rotate the area around
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
*/

export function areaAroundAxis(f:derivableFunction, axis:'x'|'y',start:number,stop:number,accuracy:number){
    if(axis == 'x'){
        return integrate((x)=>Math.PI*(f(x)**2),start,stop, accuracy)
    }else if(axis = 'y'){
        return integrate((x)=>Tau*x*f(x),start,stop, accuracy)
    }
}
    