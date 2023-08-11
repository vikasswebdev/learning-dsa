// Sorting Algorithms
// 1. QuickSort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];

  const left = [];

  const right = [];

  const equal = [];

  for (let el of arr) {
    if (el < pivot) {
      left.push(el);
    } else if (el > pivot) {
      right.push(el);
    } else {
      equal.push(el);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));

// 2. Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);

  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

// console.log(mergeSort([3, 6, 8, 10, 1, 2, 1]));

// 3. Heap Sort
function heapSort(arr) {
  function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

// console.log(heapSort([3, 6, 8, 10, 1, 2, 1]));

// Search algorithms
// 4. Binary Search

function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));

// Hash Tables
class HashTable {
  constructor() {
    this.size = 10;
    this.keys = new Array(this.size);
    this.values = new Array(this.size);
  }

  put(key, data) {
    let index = this.hashFunction(key);
    while (this.keys[index] !== undefined) {
      if (this.keys[index] === key) {
        this.values[index] = data;
        return;
      }
      index++;
      index %= this.size;
    }
    this.keys[index] = key;
    this.values[index] = data;
  }

  get(key) {
    let index = this.hashFunction(key);
    while (this.keys[index] !== undefined) {
      if (this.keys[index] === key) {
        return this.values[index];
      }
      index++;
      index %= this.size;
    }
    return undefined;
  }

  hashFunction(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.size;
  }
}

const t = new HashTable();

t.put("apple", 10);
t.put("orange", 20);
t.put("banana", 30);

console.log(t.get("orange"));

// Graph Algorithms / * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * /

// 1.Dijkstra’s Shortest Path Algorithm
function dijkstra(graph, start) {
  const visited = new Set();
  const distances = new Map();
  const prev = new Map();

  // Initialize distances and previous nodes
  for (const node in graph) {
    distances.set(node, Infinity);
    prev.set(node, null);
  }

  distances.set(start, 0);

  while (visited.size !== Object.keys(graph).length) {
    let currNode = null;
    let currDist = Infinity;

    // Find the unvisited node with the shortest distance
    for (const [node, dist] of distances) {
      if (!visited.has(node) && dist < currDist) {
        currNode = node;
        currDist = dist;
      }
    }

    // Mark the current node as visited
    visited.add(currNode);

    // Update distances and previous nodes for neighboring nodes
    for (const neighbor in graph[currNode]) {
      if (visited.has(neighbor)) continue;

      const weight = graph[currNode][neighbor];
      const dist = currDist + weight;

      if (dist < distances.get(neighbor)) {
        distances.set(neighbor, dist);
        prev.set(neighbor, currNode);
      }
    }
  }

  return { distances, prev };
}

const graph = {
  A: { B: 2, C: 3 },
  B: { D: 4, E: 5 },
  C: { F: 6 },
  D: { G: 7 },
  E: { G: 8, H: 9 },
  F: { H: 10 },
  G: {},
  H: {},
};

const { distances, prev } = dijkstra(graph, "A");

console.log("Shortest distances:", distances);
console.log("Previous nodes:", prev);

// 2. Breadth-First Search (BFS)

// class Graph {
//   constructor() {
//     this.nodes = [];
//     this.adjacencyList = {};
//   }

//   addNode(node) {
//     this.nodes.push(node);
//     this.adjacencyList[node] = [];
//   }

//   addEdge(node1, node2) {
//     this.adjacencyList[node1].push(node2);
//     this.adjacencyList[node2].push(node1);
//   }

//   bfs(start) {
//     const visited = {};
//     const result = [];
//     const queue = [start];
//     visited[start] = true;

//     while (queue.length > 0) {
//       const current = queue.shift();
//       result.push(current);

//       this.adjacencyList[current].forEach((neighbor) => {
//         if (!visited[neighbor]) {
//           visited[neighbor] = true;
//           queue.push(neighbor);
//         }
//       });
//     }

//     return result;
//   }
// }

// const graph = new Graph();

// graph.addNode("A");
// graph.addNode("B");
// graph.addNode("C");
// graph.addNode("D");
// graph.addNode("E");
// graph.addNode("F");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");

// console.log(graph.bfs("A")); // Output: ['A', 'B', 'C', 'D', 'E', 'F']

// 3. Depth-First Search (DFS)
class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  dfs(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function dfsVisit(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfsVisit(neighbor);
        }
      });
    })(start);

    return result;
  }
}

// const graph = new Graph();

// graph.addNode("A");
// graph.addNode("B");
// graph.addNode("C");
// graph.addNode("D");
// graph.addNode("E");
// graph.addNode("F");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");

// console.log(graph.dfs("A")); // Output: ['A', 'B', 'D', 'E', 'C', 'F']
// Dynamic Programming

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(0));

// Greedy Algorithms
function huffmanEncoding(data) {
  const freqCounter = {};

  for (let char of data) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  const priorityQueue = new PriorityQueue();

  for (let char in freqCounter) {
    priorityQueue.enqueue(new HuffmanNode(char, freqCounter[char]));
  }

  while (priorityQueue.size() > 1) {
    const leftNode = priorityQueue.dequeue();

    const rightNode = priorityQueue.dequeue();

    const combinedFreq = leftNode.freq + rightNode.freq;

    priorityQueue.enqueue(
      new HuffmanNode(null, combinedFreq, leftNode, rightNode)
    );
  }

  const huffmanCode = {};

  generateCode(priorityQueue.peek(), "", huffmanCode);

  let encodedData = "";

  for (let char of data) {
    encodedData += huffmanCode[char];
  }

  return encodedData;
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node) {
    let added = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (node.freq < this.queue[i].freq) {
        this.queue.splice(i, 0, node);
        added = true;
        break;
      }
    }
    if (!added) {
      this.queue.push(node);
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  peek() {
    return this.queue[0];
  }
}

class HuffmanNode {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

function generateCode(node, code, huffmanCode) {
  if (node.char) {
    huffmanCode[node.char] = code;
    return;
  }
  generateCode(node.left, code + "0", huffmanCode);
  generateCode(node.right, code + "1", huffmanCode);
}

// console.log(huffmanEncoding("abcdef")); // Output: "000001111101111100010010".

// Divide and Conquer

function solveNQueens(n) {
  const board = new Array(n).fill(null).map(() => new Array(n).fill("."));
  const result = [];

  function couldPlace(row, col) {
    // check if a queen can be placed on board[row][col]
    // check if this row is not under attack from any previous queen in that column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
    }

    // check if this row is not under attack from any previous queen in the diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // check if this row is not under attack from any previous queen in the diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    return true;
  }

  function backtrack(row = 0) {
    if (row === n) {
      const temp = board.map((x) => x.join(""));
      result.push(temp);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (couldPlace(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack();

  return result;
}

console.log(solveNQueens(4));
