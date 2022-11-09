/**
 * @author BakedPotatoLord
*/
import { checkAccuracy, createDerivableFunction, createDerivableFunction2D, slope } from './helpers';
export const Tau = 2 * Math.PI;
/**
    @description returns the area underneath a function, between two points
    @param  f function to integrate
    @param  xLower lower bound of the function
    @param  xUpper upper bound of the function
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
*/
export function integrate(f, xLower, xUpper, accuracy) {
    let fn = createDerivableFunction(f);
    checkAccuracy(accuracy);
    let temp = 0;
    //if data is good
    for (let i = xLower; i < (xUpper - accuracy); i += (xUpper - xLower) * accuracy) {
        temp += ((fn(i) + fn(i + accuracy)) / 2) * ((xUpper - xLower) * accuracy);
    }
    return temp;
}
/**
    @description returns the area of a shape bounded by the surface produced by the function, bound inputs, and the xy axis
    @param  f function to integrate
    @param  xLower lower bound of the function
    @param  xUpper upper bound of the function
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
*/
export function integrate2D(f, xLower, xUpper, yLower, yUpper, accuracy) {
    let fn = createDerivableFunction2D(f);
    checkAccuracy(accuracy);
    let temp = 0;
    for (let i = xLower; i < (xUpper - accuracy); i += (xUpper - xLower) * accuracy) {
        for (let j = yLower; i < (yUpper - accuracy); i += (yUpper - yLower) * accuracy) {
            //for all xy pairs,
            temp += ((fn(i, j) + fn(i + accuracy, j) + fn(i, j + accuracy) + fn(i + accuracy, j + accuracy)) / 4) * ((xUpper - xLower) * (yUpper - yLower) * accuracy);
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
export function derivitiveAtX(f, point, accuracy) {
    let fn = createDerivableFunction(f);
    checkAccuracy(accuracy);
    return slope(point, fn(point), point + accuracy, fn(point + accuracy));
}
/**
    @description returns the area of a function revolved around a given axis, between two points
    @param  f function to integrate
    @param  axis axis to rotate the area around
    @param  xLower lower bound of the function
    @param  xUpper upper bound of the function
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
*/
export function areaAroundAxis(f, axis, xLower, xUpper, accuracy) {
    let fn = createDerivableFunction(f);
    checkAccuracy(accuracy);
    if (axis == 'x') {
        return integrate((x) => Math.PI * (fn(x) ** 2), xLower, xUpper, accuracy);
    }
    else if (axis = 'y') {
        return integrate((x) => Tau * x * fn(x), xLower, xUpper, accuracy);
    }
}
