function findDepth(parent) {
  // animal 0: -1 pred
  // animal 1: 8 pred
  // animal 2: 6 pred
  
  // animal 3: 0 pred
  let graph = createGraph(parent);
  console.log(graph.length);
  let topparent = findTopparent(graph);
  console.log(topparent);
  let result = [];
  let current = topparent;
  while(current.length > 0){
    result.push(current);
    let parents = current;
    current = [];
    for (let i = 0; i &lt; parents.length; i++){
      let parent = parents[i];
    if (graph[parent]){
      current.push(graph[parent][0]);
      }
    }
  }
  return result.length;
  
  function createGraph(parent){
  let graph = {};
  for (let i = 0 ; i < parent.length; i++){
    if (!graph[parseInt(i)]){
      graph[parseInt(i)] = [];
    }
    graph[parseInt(i)].push(parent[i]);
    }
    return graph;
  }

  function findTopparent(graph){
    let topparent = [];
    for (let animal in graph){
      let predator = graph[animal][0];
    if (predator === -1){
      topparent.push(parseInt(animal));
    }
  
    }
    return topparent;
  }
  
  }
  
  let parent = [-1];
  console.log(minimumGroups(parent));