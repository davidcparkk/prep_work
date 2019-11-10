class TaskList{
  constructor(maxConcurrency){
    this.count = 0;
    this.queue = [];
    this.maxConcurrency = maxConcurrency;
  }

  run(arg){
    if(this.count < this.maxConcurrency){
      this.count++;
      return new Promise(function(resolve){
        
        setTimeout(function(){
          resolve();
          console.log('done')
        },1000);

        console.log('running');
        
      }).then( (el) => {
        this.count--;
        if(this.queue.length){
          let nextJob = this.queue.shift();
          this.run(nextJob);
        }
        
      });
      
    } else {
      this.queue.push(arg)
    }
  }
}

let task = new TaskList(3);
for(let i = 0; i < 9; i++){
  task.run(i)
}