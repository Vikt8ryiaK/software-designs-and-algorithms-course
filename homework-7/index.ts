export class PriorityQueue {
  public collection: Job[];

  constructor() {
    this.collection = [];
  }

  enqueue(element: Job){
    if (this.isEmpty()){ 
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++){
        if (element.priority < this.collection[i-1].priority){ 
          this.collection.splice(i-1, 0, element);
          added = true;
          break;
        }
      }
      if (!added){
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0 
  }
}

class Job {
  constructor(public priority: number, private fn: () => void) {
    this.priority = priority;
    this.fn = fn;
  }

  handle(){
    this.fn();
  }
}

const priorityQueue = new PriorityQueue();

const jobCount = 10000;

for(let i = 0; i < jobCount; i++) {
  const random = Math.trunc(Math.random() * 10000);
  priorityQueue.enqueue(new Job(random, () => (console.log(`index: ${i}, priority: ${random}`))));
}

let job: Job | undefined = undefined;
while(job = priorityQueue.dequeue()) {
  job.handle();
}
