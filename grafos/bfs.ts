// IIFE para protger las constantes globales
(() => {
    type Dict = string | number
    type Graph<T extends Dict,U extends T> = Record<T,U[]>
    
    const graph = {
        a: ['b','c'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: []
    }

    const bfs = <T extends Dict, U extends T>(graph: Graph<T,U>, source: U) => {
        const queue = [source]
        while (queue.length > 0) {
            const current = queue.shift()! // remove front because of queue
            console.log('current', current)
            for(let neighbor of graph[current]) {
                queue.push(neighbor)
            }
        }
    }

    bfs<string,string>(graph, "a")
})()

