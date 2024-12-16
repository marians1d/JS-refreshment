function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 1000);
}

fetchData((data) => console.log(data)); // Logs "Data fetched" after 1 second
console.log('End');
