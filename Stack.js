'use strict';

// requiring the linekdlist class
const LinkedList = require('./LinkedList.js');

// creating a stack class for stack implementation using linked list class as a base with methods to push, pop, peek and check the size of the stack if it is empty or not
class Stack {
    constructor() {
        this.storage = new LinkedList();
        this.top = null;
    }

    // creating a method to push a new node at the head
    push(value) {
        this.storage.insert(value);
        this.top = this.storage.head;
    }

    // creating a method to pop a node from the head
    pop() {
            const popped = this.top.value;
            this.storage.deleteLastNode();
            this.top = this.storage.head;
            return popped;
    }

    // creating a method to peek the head node
    peek() {
        return this.top;
    }

    // creating a method to check if the stack is empty or not
    isEmpty() {
        return this.storage.getSize() === 0;
    }
}

// exporting the stack class
module.exports = Stack;