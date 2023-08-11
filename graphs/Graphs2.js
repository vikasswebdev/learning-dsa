// Grahps: Breadth-frist search

function bfs(graph, root) {
  var ndoesLen = {};

  for (var i = 0; i < graph.length; i++) {
    ndoesLen[i] = Infinity;
  }

  ndoesLen[root] = 0;

  var queue = [root];

  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];

    var neighborIdx = [];

    var idx = curConnected.indexOf(1);

    while (idx != -1) {
      neighborIdx.push(idx);

      idx = curConnected.indexOf(1, idx + 1);
    }

    for (var j = 0; j < neighborIdx.length; j++) {
      if (ndoesLen[neighborIdx[j]] == Infinity) {
        ndoesLen[neighborIdx[j]] = ndoesLen[current] + 1;

        queue.push(neighborIdx[j]);
      }
    }
  }

  return ndoesLen;
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(exBFSGraph, 1));
