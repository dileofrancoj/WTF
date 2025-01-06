"use strict";
// IIFE para protger las constantes globales
(() => {
    const graph = {
        a: ['b', 'c'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: []
    };
    const bfs = (graph, source) => {
        const queue = [source];
        while (queue.length > 0) {
            const current = queue.shift(); // remove front because of queue
            console.log('current', current);
            for (let neighbor of graph[current]) {
                queue.push(neighbor);
            }
        }
    };
    bfs(graph, "a");
})();
