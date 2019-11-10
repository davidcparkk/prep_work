class TaskList {
  constructor(maxConcurrency){
    this.maxConcurrency = maxConcurrency;
    this.queue = [];
    this.count = 0;
  }

  // Use Promise for async programming, push tasks into queue data structure to keep track of tasks to be completed
  // Also use a count to keep track of jobs being worked concurrently, use conditionals to execute next task or not
    // Increase the count whenever we return Promise, and decrease when Promsise is completed (.then())

  run(arg){
    if (this.count < this.maxConcurrency){
      this.count ++;
      return new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve();
          console.log('done', arg)
        },10);
        console.log('running', arg)
      }).then( response => {
        this.count--;
        if (this.queue.length > 0){
          let nextJob = this.queue.shift();
          this.run(nextJob);
        }
      })
    } else {
      this.queue.push(arg);
      // console.log(this.queue);
    }
    
  }
}

// let taskList = new TaskList(3);
// for (let i = 0; i < 10; i++){
//   taskList.run(i)
// }


const getTodo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if(!error){
        resolve({ text: "complete example "})
      } else {
        reject()
      }
    }, 2000)
  })
}

const fetchTodo = async () => {
  try{
    const todo = await getTodo();
    return todo;
  } catch (error) {
    console.log("error")
  }
}

fetchTodo()
  .then(todo => console.log(todo.text))
  .catch( () => console.log("error occurred"))