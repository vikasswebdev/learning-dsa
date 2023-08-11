// 1. Sorting Algorithms
// a. Bubble Sort in JavaScript:

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log("bubbleSort", bubbleSort([9, 4, 6, 2, 5, 7, 1]));
// B. Merge Sort in JavaScript

function mergeShort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeShort(left), mergeShort(right));
}

function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// console.log("mergeShort", mergeShort([9, 4, 6, 2, 5, 7, 1]));

// Quick Sort

function quickShort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickShort(arr, left, pivotIndex - 1);
    quickShort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);

  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log("quickShort", quickShort([9, 4, 6, 2, 5, 7, 1]));

// Heap Sort

function heapSort(arr, n, i) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i >= 1; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, n, largest);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log("heapSort", heapSort([9, 4, 6, 2, 5, 7, 1], 7, 1));

// Searching algorithems
// a. Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log("binary search", binarySearch([9, 4, 6, 2, 5, 7, 1], 5));

// B. Breadth-First Search

function breadthFirstSearch(root, target) {
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.value === target) {
      return node;
    }
    queue.push(...node.chilren);
  }
  return null;
}

// const tree = {
//   value: 1,
//   children: [
//     {
//       value: 2,
//       children: [
//         { value: 4, children: [] },
//         { value: 5, children: [] },
//       ],
//     },
//     {
//       value: 3,
//       children: [
//         { value: 6, children: [] },
//         { value: 7, children: [] },
//       ],
//     },
//   ],
// };
// const target = 5;

// console.log("breadthFirstSearch", breadthFirstSearch(tree, target));

// BFS implementation using adjacency list

// Queue data structure
// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(item) {
//     this.queue.push(item);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.queue.shift();
//   }

//   isEmpty() {
//     return this.queue.length === 0;
//   }
// }

// // Graph class
// class Graph {
//   constructor() {
//     this.adjList = new Map();
//   }

//   addVertex(vertex) {
//     this.adjList.set(vertex, []);
//   }

//   addEdge(vertex1, vertex2) {
//     this.adjList.get(vertex1).push(vertex2);
//     this.adjList.get(vertex2).push(vertex1);
//   }

//   bfs(startVertex) {
//     const visited = new Set(); // Set to keep track of visited vertices
//     const queue = new Queue(); // Queue for BFS traversal

//     visited.add(startVertex);
//     queue.enqueue(startVertex);

//     while (!queue.isEmpty()) {
//       const currentVertex = queue.dequeue();
//       console.log(currentVertex);

//       const neighbors = this.adjList.get(currentVertex);
//       for (const neighbor of neighbors) {
//         if (!visited.has(neighbor)) {
//           visited.add(neighbor);
//           queue.enqueue(neighbor);
//         }
//       }
//     }
//   }
// }

// // Example usage
// const graph = new Graph();

// // Add vertices
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// // Add edges
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("B", "E");
// graph.addEdge("C", "F");

// Perform BFS starting from vertex 'A'
// graph.bfs("A");

// Queue data structure

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Graph class
class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }

  bfs(startVertex) {
    const visited = new Set(); // Set to keep track of visited vertices
    const queue = new Queue(); // Queue for BFS traversal

    visited.add(startVertex);
    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();

      const neighbors = this.adjList.get(currentVertex);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue(neighbor);
        }
      }
    }
  }
}

// Example usage
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");

// Perform BFS starting from vertex 'A'
// graph.bfs("A");

// Depth-First Search
function depthFirstSearch(root, target) {
  if (root.value === target) {
    return root;
  }

  for (const child of root.children) {
    const result = depthFirstSearch(child, target);
    if (result) {
      return result;
    }
  }

  return null;
}

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] },
      ],
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
        { value: 7, children: [] },
      ],
    },
  ],
};
const target = 2;

// console.log("depthFirstSearch", depthFirstSearch(tree, target));
