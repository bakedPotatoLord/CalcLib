/**
 * @author BakedPotatoLord
*/
import { integrate, derivitiveAtX, areaAroundAxis } from "./index.js";
console.log('test integration function');
console.log(integrate((x) => 1, 0, 1, 0.001), //returns 1
4 * integrate((x) => Math.sqrt(1 - x ** 2), 0, 1, 0.0000001), //returns ~PI
integrate((x) => 2 * Math.cos(x), 0, Math.PI / 2, 0.00001), //returns  2
derivitiveAtX((x) => 20 * x, 0, 0.00001), //returns 20
derivitiveAtX((x) => 1 / x, 0, -0.0001), //returns INFINITY
areaAroundAxis((x) => 2, 'x', 0, 1, 0.0001), // returns 4*PI ~= 12.566
areaAroundAxis((x) => x ** 2, 'y', 0, 1, 0.0001));
