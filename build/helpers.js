/**
@description finds slope between two points
@param  x1 first x-val
@param y1 first y-val
@param x2 second x-val
@param y2 second y-val
*/
export function slope(x1, y1, x2, y2) {
    return ((y1 - y2) / (x1 - x2));
}
export function createDerivableFunction(f) {
    if (typeof f == 'number') {
        return (x) => f;
    }
    else if (typeof f == 'function') {
        return f;
    }
}
export function createDerivableFunction2D(f) {
    if (typeof f == 'number') {
        return (x, y) => f;
    }
    else if (typeof f == 'function') {
        return f;
    }
}
export function checkAccuracy(acc) {
    if (acc === 0)
        throw new Error("accuracy cannot equal zero");
}
