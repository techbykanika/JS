let map = new Map();
let weakmap = new WeakMap();

obj1={"name":"kankika"};
map.set(obj1,"value1 ");
weakmap.set(obj1,"value 1 for weak");
console.log(obj1,map,weakmap);
console.log(weakmap.has(obj1));//true
console.log(map.has(obj1));//true
obj1=null

console.log(map.keys())
console.log(map.has(obj1));//flase but this map has still the value inside the map 
console.log(weakmap.has(obj1));//false 



// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let obj = {/* let's say we have an object */};

let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)



// WeakMap is Map-like collection that allows only objects as keys and removes 
// them together with associated value once they become inaccessible by other means.

// WeakSet is Set-like collection that stores only objects and removes them once they
//  become inaccessible by other means.

// Their main advantages are that they have weak reference to objects, 
// so they can easily be removed by garbage collector.

// That comes at the cost of not having support for clear, size, keys, values…

// WeakMap and WeakSet are used as “secondary” data structures in addition to the
//  “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a
//  WeakSet, it will be cleaned up automatically.