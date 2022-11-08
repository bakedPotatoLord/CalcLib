import {integrate,derivitiveAtX, areaAroundAxis} from "./index"

test("integration",()=>{
  expect(integrate((x)=> 1,0,1,0.001)).toBeCloseTo(1,0.001)
  expect(4*integrate((x)=> Math.sqrt(1-x**2),0,1,0.0000001)).toBeCloseTo(Math.PI,0.001)
  expect(integrate((x)=> 2*Math.cos(x),0,Math.PI/2,0.00001)).toBeCloseTo(2,0.001)
})

test("derivitives at x",()=>{
  expect(derivitiveAtX((x)=>20*x,0,0.00001)).toBeCloseTo(20,0.001)
  expect(derivitiveAtX((x)=>1/x,0,-0.0001)).toBeCloseTo(Infinity)
})

test("areas around axis",()=>{
  expect(areaAroundAxis((x)=>2,'x',0,1,0.0001)).toBeCloseTo(4*Math.PI,0.001)
  expect(areaAroundAxis((x)=>x**2,'y',0,1,0.0001)).toBeCloseTo(Math.PI/2,0.001)
})
