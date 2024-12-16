console.log('Start');

setTimeout(() => {
  console.log('Macrotask');
}, 0);

// Microtasks are executed before Macrotasks
// there are two Queues, the Microtasks queue and the Callback Queue(Macrotasks queue)
// After being added to the queue, they are then added to the call stack to await execution after witch they are being popped out of the stack
Promise.resolve().then(() => console.log('Microtask'));

console.log('End');
