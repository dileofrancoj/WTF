// DFS: Stack
// T tiene que extender de string , number o symbol para usarse como diccionario
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

const dfs = <T extends Dict, U extends T>(graph: Graph<T, U>, source: T) => {
    const stack: T[] = [source];
    while (stack.length > 0) {
        const current = stack.pop()!;
        console.log(`Traversing ${current}`);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};

const recursiveDfs = <T extends Dict, U extends T>(graph: Graph<T, U>, source: T) => {
    console.log(`Traversing ${source}`)
    for (let neighbor of graph[source]) {
        recursiveDfs(graph, neighbor)
    }
}

dfs<string, string>(graph,'a')
console.log('-------------')
recursiveDfs<string, string>(graph,'a')