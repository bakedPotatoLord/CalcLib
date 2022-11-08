import type { derivableFunction, derivableFunction2D } from './index';
/**
@description finds slope between two points
@param  x1 first x-val
@param y1 first y-val
@param x2 second x-val
@param y2 second y-val
*/
export declare function slope(x1: number, y1: number, x2: number, y2: number): number;
export declare function createDerivableFunction(f: derivableFunction | number): derivableFunction;
export declare function createDerivableFunction2D(f: derivableFunction2D | number): derivableFunction2D;
