"use strict";
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
const dfs = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(`Traversing ${current}`);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};
const recursiveDfs = (graph, source) => {
    console.log(`Traversing ${source}`);
    for (let neighbor of graph[source]) {
        recursiveDfs(graph, neighbor);
    }
};
dfs(graph, 'a');
console.log('-------------');
recursiveDfs(graph, 'a');
