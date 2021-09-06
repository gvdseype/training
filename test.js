// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';



Object.prototype.ancestors = function () {
  let array = ['Object.prototype'];
  let object = this;
  while (Object.getPrototypeOf(object) !== Object.prototype) {
    array.push(Object.getPrototypeOf(object).name);
    object = Object.getPrototypeOf(object);
  }
  return array.reverse();
}

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']