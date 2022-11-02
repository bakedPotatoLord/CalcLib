/**
 * @author BakedPotatoLord  
*/

type derivableFunction ={
    (inp:number):number
}

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
    @description finds the area underneath a function
    @param  f function to integrate
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
export function integrate(f:derivableFunction,start:number,stop:number,accuracy:number){
    let temp = 0;
    //if data is good
    for(var i = start;i<stop;i+=(stop-start)*accuracy){
        temp+= f(i)*((stop-start)*accuracy);
    }
    return temp;
}

/** 
    @description finds the tangent line at a point on a function
        (positive accuracy approaches from right. negative approaches from left)
    @param  f function to derive
    @param  point x-value to integrate at 
    @param  accuracy x-value to integrate at (closer to 0 is more acurate)
    */

export function derivitiveAtX(f:derivableFunction,point,accuracy: number){
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
    