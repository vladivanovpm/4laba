function dfs(graph, startNode) {
    let visited = [];
  

    
    function dfsUtil(node, count) {
        visited.push(node);
    
        let neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.includes(neighbors[i])) {
                dfsUtil(neighbors[i], count + 1);
            }
        }
    }
    
    dfsUtil(startNode);

    
    // Пример графа
    let graph = {
    A: ['B', 'C'],
    B: ['A', 'C', 'E'],
    C: ['A', 'B'],
    }; 
}
    console.log("Length of path from A to C: " + pathLength);
