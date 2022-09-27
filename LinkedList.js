'use strict';

// requiring the node class
const Node = require('./Node.js');

// creating a linked list class for stack and queue implementation
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // creating a method to check the size of the linked list
    getSize() {
        return this.size;
    }

    // creating a method to insert a new node at the head
    insert(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
        node.next = this.head;
        this.head = node;
        }
        this.size += 1;
    }

    // creating a method to append a new node at the end
    append(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;

        }
        this.size += 1;
    }

   // creating a method to delete the last node in the linked list
    deleteLastNode() {
        let current = this.head;
        let previous = null;
        while(current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size -= 1;
    }

    // creating a method to delete the first node in the linked list
    deleteFirstNode() {
        if(!this.head) {
            return null;
        } else {
            this.head = this.head.next;
            this.size -= 1;
        }
    }
    
}

// exporting the linked list class
module.exports = LinkedList;
