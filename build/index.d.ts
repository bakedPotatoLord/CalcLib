/**
 * @author BakedPotatoLord
*/
declare type derivableFunction = {
    (inp: number): number;
};
export declare const Tau: number;
/**
@description finds slope between two points
@param  x1 first x-val
@param y1 first y-val
@param x2 second x-val
@param y2 second y-val
*/
export declare function slope(x1: number, y1: number, x2: number, y2: number): number;
/**
    @description returns the area underneath a function, between two points
    @param  f function to integrate
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
export declare function integrate(f: derivableFunction, start: number, stop: number, accuracy: number): number;
/**
    @description returns the slope of the tangent line at a point on a function
        (positive accuracy approaches from right. negative approaches from left)
    @param  f function to derive
    @param  point x-value to integrate at
    @param  accuracy x-value to integrate at (closer to 0 is more acurate)
    */
export declare function derivitiveAtX(f: derivableFunction, point: number, accuracy: number): number;
/**
    @description returns the area of a function revolved around a given axis, between two points
    @param  f function to integrate
    @param  axis axis to rotate the area around
    @param  start where to start the integration
    @param  stop where to stop the integration
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
    */
export declare function areaAroundAxis(f: derivableFunction, axis: 'x' | 'y', start: number, stop: number, accuracy: number): number;
export {};
