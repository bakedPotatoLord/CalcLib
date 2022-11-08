
import type { derivableFunction, derivableFunction2D} from './index'
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

export function createDerivableFunction(f:derivableFunction|number):derivableFunction{
  if(typeof f == 'number'){
      return (x:number)=>f
  }else if(typeof f == 'function'){
      return f
  }
}
export function createDerivableFunction2D(f:derivableFunction2D|number):derivableFunction2D{
  if(typeof f == 'number'){
      return (x,y)=>f
  }else if(typeof f == 'function'){
      return f
  }
}