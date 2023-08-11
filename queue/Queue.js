/* Queues */

class Queue {
  collection = [];

  print = () => {
    return this.collection;
  };

  enqueue = (element) => {
    this.collection.push(element);
  };

  dequeue = () => {
    return this.collection.shift();
  };

  front = () => {
    return this.collection[0];
  };

  size = () => {
    return this.collection.length;
  };

  isEmpty = () => {
    return this.collection.length === 0;
  };
}

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front());
// console.log(q.isEmpty());

class PriorityQueue {
  collection = [];

  printCollection = () => {
    return this.collection;
  };

  enqueue = (element) => {
    if (this.isEmpty()) {
      this.collection.push(element);
      console.log("if");
    } else {
      console.log("else");

      var added = false;

      for (var i = 0; i < this.collection.length; i++) {
        if (element[i] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        this.collection.push(element);
      }
    }
  };

  dequeue = () => {
    return this.collection.shift();
  };

  front = () => {
    return this.collection[0];
  };

  size = () => {
    return this.collection.length;
  };

  isEmpty = () => {
    return this.collection.length === 0;
  };
}

const pq = new PriorityQueue();

pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);

// console.log(pq.printCollection());
