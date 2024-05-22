function dfs(graph, startNode) {
    let visited = [];
    let pathLength = 0;

    
    function dfsUtil(node, count) {
        visited.push(node);
    
        if (node === endNode) {
            pathLength = count;
        }
        
        let neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.includes(neighbors[i])) {
                dfsUtil(neighbors[i], count + 1);
            }
        }
    }
    
    dfsUtil(startNode, 0);
    return pathLength_;
    
    
    // Пример графа
    let graph = {
    A: ['B', 'C'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    }; 
}
    let pathLength = dfs(graph, 'A', 'C');
    console.log("Length of path from A to C: " + pathLength);
// Добавлен комментарий