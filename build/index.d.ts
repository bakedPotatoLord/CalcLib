/**
 * @author BakedPotatoLord
*/
/**@description a function in terms of x such that f(x)=y */
export declare type derivableFunction = {
    (x: number): number;
};
/**@description a function in terms of x and y such that f(x,y)=z*/
export declare type derivableFunction2D = {
    (x: number, y: number): number;
};
export declare const Tau: number;
/**
    @description returns the area underneath a function, between two points
    @param  f function to integrate
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
export declare function integrate(f: derivableFunction | number, start: number, stop: number, accuracy: number): number;
/**
    @description returns the area of a shape bounded by the curve produced by the function, bound inputs, and the xy axis
    @param  f function to integrate
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
export declare function integrate2D(f: derivableFunction2D | number, xLower: number, xUpper: number, yLower: number, yUpper: number, accuracy: number): number;
/**
    @description returns the slope of the tangent line at a point on a function
        (positive accuracy approaches from right. negative approaches from left)
    @param  f function to derive
    @param  point x-value to integrate at
    @param  accuracy x-value to integrate at (closer to 0 is more acurate)
    */
export declare function derivitiveAtX(f: derivableFunction | number, point: number, accuracy: number): number;
/**
    @description returns the area of a function revolved around a given axis, between two points
    @param  f function to integrate
    @param  axis axis to rotate the area around
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
*/
export declare function areaAroundAxis(f: derivableFunction | number, axis: 'x' | 'y', start: number, stop: number, accuracy: number): number;
export declare function createDerivableFunction(f: derivableFunction | number): derivableFunction;
