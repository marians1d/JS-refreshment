async function fetchData() {
  try {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve('Data fetched'), 1000)
    );
    console.log(result);
    console.log('After')
  } catch (err) {
    console.error(err);
  }
}
fetchData();


// Sequential vs. Parallel Execution

// Sequential Execution

function task(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched' + n), 1000);
  });

}

// Takes as long as the sum of all tasks
async function sequentialTasks() {
  const result1 = await task(1);
  const result2 = await task(2);
  console.log(result1, result2);
}

sequentialTasks()

// Parallel Execution

// Takes as long as the slowest task
async function parallelTasks() {
  const [result1, result2] = await Promise.all([task(1), task(2)]);
  console.log(result1, result2);
}

parallelTasks()

