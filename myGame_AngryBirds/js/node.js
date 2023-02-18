//Koren stromu
class node {
    constructor() {
        this.nodes = [] // Pole s prvkami stromu
    }
    add(node) //pridanie do pola
    {
        this.nodes.push(node)
    }
    // Odstranenie z pola
    remove(node) {
        var index = this.nodes.indexOf(node)
        delete this.nodes[index]
    }
    // Funkcia notify -> oznamujeme ostatnym udalost
    notify(/*anything*/) {
        var event = arguments[0]
        var args = Array.prototype.slice.call(arguments, 1)

        // Call all observers that can receive the call
        for (var index in this.nodes) {
            var node = this.nodes[index]
            if (node && typeof (node[event]) == "function")
                node[event].apply(node, args)
        }
    }
}