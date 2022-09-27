'use strict';

// creating a class node

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = null;
    }
}

module.exports = Node;