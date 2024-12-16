const fetchData = new Promise((resolve, reject) => {
  // reject('Error thrown');
  setTimeout(() => resolve('Data fetched'), 1000);
});

fetchData
  .then((data) => console.log(data))
  .catch((err) => console.error(err));


// Chaining promises
const fetchUser = () => Promise.resolve({ id: 1, name: 'Mariyan' });
const fetchOrders = (user) => Promise.resolve(['Order1', 'Order2']);

fetchUser()
  .then((user) => fetchOrders(user))
  .then((orders) => console.log(orders)); // ['Order1', 'Order2']

