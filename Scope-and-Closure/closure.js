function Counter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    get() {
      return count;
    },
    add(num) {
      count += num;
      return count;
    }
  };
}
const counter = Counter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.add(10)); // 11
console.log(counter.get()); // 11
