import {integrate,derivitiveAtX, areaAroundAxis, integrate2D, arcLength,  } from "./index"

test("integration",()=>{
  expect(integrate(1,0,1,0.001)).toBeCloseTo(1,0.001)
  expect(4*integrate((x)=> Math.sqrt(1-x**2),0,1,0.0001)).toBeCloseTo(Math.PI,0.001)
  expect(integrate((x)=> 2*Math.cos(x),0,Math.PI/2,0.0001)).toBeCloseTo(2,0.001)
})

test("derivitives at x",()=>{
  expect(derivitiveAtX((x)=>20*x,0,0.001)).toBeCloseTo(20,0.001)
  expect(derivitiveAtX((x)=>1/x,0,-0.001)).toBeCloseTo(Infinity)
  expect(derivitiveAtX((x)=>(x*(x-4))/(x/4),4,0.0001))
})

test("areas around axis",()=>{
  expect(areaAroundAxis(2,'x',0,1,0.0001)).toBeCloseTo(4*Math.PI,0.001)
  expect(areaAroundAxis((x)=>x**2,'y',0,1,0.0001)).toBeCloseTo(Math.PI/2,0.001)
})

test("2dintegral",()=>{
  expect(integrate2D(1,0,1,0,1,0.001)).toBeCloseTo(1,0.0001)
  expect(integrate2D((x,y)=>Math.cos(x)*Math.cos(y),0,1,0,1,0.00001)).toBeCloseTo(0.708,0.0001)
})

test("arcLegnth", ()=>{
  expect(arcLength((x)=>x**2,0,2,0.001)).toBeCloseTo(4.6467,0.001)
  expect(arcLength((x)=>Math.sin(x),0,6,0.001)).toBeCloseTo(7.24256,0.001)
})
