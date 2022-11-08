/**
 * @author BakedPotatoLord  
*/

import {createDerivableFunction2D, slope} from './helpers';

/**@description a function in terms of x such that f(x)=y */
export type derivableFunction ={
    (x:number):number
}
/**@description a function in terms of x and y such that f(x,y)=z*/
export type derivableFunction2D ={
    (x:number,y:number):number
}
/**
 * @description a shape represented by 4 bounds
 * @param yUpper the upper bound of the shape on the y axis
 * @param yLower the lower bound of the shape on the y axis
 * @param xLower the lower bound of the shape on the x axis
 * @param xUpper the upper bound of the shape on the x axis
 */
export type boundedShape={
    yLower:derivableFunction|number,
    yUpper:derivableFunction|number,
    xLower:number,
    xUpper:number,
}

export const Tau = 2*Math.PI

/** 
    @description returns the area underneath a function, between two points
    @param  f function to integrate
    @param  xLower lower bound of the function
    @param  xUpper upper bound of the function
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
export function integrate(f:derivableFunction|number,xLower:number,xUpper:number,accuracy:number){
    let fn = createDerivableFunction(f)

    let temp = 0;
    //if data is good
    for(let i = xLower;i<(xUpper-accuracy);i+=(xUpper-xLower)*accuracy){
        temp+= ((fn(i)+fn(i+accuracy))/2)*((xUpper-xLower)*accuracy);
    }
    return temp;
}

/** 
    @description returns the area of a shape bounded by the curve produced by the function, bound inputs, and the xy axis
    @param  f function to integrate
    @param  xLower lower bound of the function
    @param  xUpper upper bound of the function
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
    export function integrate2D(f:derivableFunction2D|number,xLower:number,xUpper:number,yLower:number,yUpper:number,accuracy:number){

        let fn = createDerivableFunction2D(f)

        let temp = 0;
        for(let i = xLower;i<(xUpper-accuracy);i+=(xUpper-xLower)*accuracy){
            for(let j = yLower;i<(yUpper-accuracy);i+=(yUpper-yLower)*accuracy){
            //for all xy pairs,
            temp+= ((fn(i,j)+fn(i+accuracy,j)+fn(i,j+accuracy)+fn(i+accuracy,j+accuracy))/4)*((xUpper-xLower)*(yUpper-yLower)*accuracy);
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

export function derivitiveAtX(f:derivableFunction|number,point:number,accuracy: number){

    let fn:derivableFunction
    if(typeof f == 'number'){
        fn = (x:number)=>f
    }else if(typeof f == 'function'){
        fn = f
    }

    if( accuracy == 0){
        throw new Error('accuracy cannot equal 0');
    }else{
        try{
            return slope(point,fn(point),point+accuracy,fn(point+accuracy));
        }catch(error){
            throw new Error('function is not continous at this point');
        }
    }
}

/** 
    @description returns the area of a function revolved around a given axis, between two points
    @param  f function to integrate
    @param  axis axis to rotate the area around
    @param  xLower lower bound of the function
    @param  xUpper upper bound of the function
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
*/

export function areaAroundAxis(f:derivableFunction|number, axis:'x'|'y',xLower:number,xUpper:number,accuracy:number){
    let fn= createDerivableFunction(f)
    if(axis == 'x'){
        return integrate((x)=>Math.PI*(fn(x)**2),xLower,xUpper, accuracy)
    }else if(axis = 'y'){
        return integrate((x)=>Tau*x*fn(x),xLower,xUpper, accuracy)
    }
}

export function createDerivableFunction(f:derivableFunction|number):derivableFunction{
    if(typeof f == 'number'){
        return (x:number)=>f
    }else if(typeof f == 'function'){
        return f
    }
}
    