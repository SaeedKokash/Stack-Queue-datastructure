'use strict';

// requiring the linked list class
const LinkedList = require('./LinkedList.js');

// creating a queue class for queue implementation using linked list class as a base with methods to enqueue, dequeue, peek and check the size of the queue if it is empty or not
class Queue {
    constructor() {
        this.storage = new LinkedList();
        this.front = null;
    }

    // creating a method to enqueue a new node at the end of the queue and set the front to the head of the queue if the queue is not empty
    enqueue(value) {
        this.storage.append(value);
        if(!this.front) {
            this.front = this.storage.head;
        }
    }

    // creating a method to dequeue a node the first node in the queue and return the value of the dequeued node if the queue is not empty
    dequeue() {
        if(!this.front) {
            return null;
        } else {
            const dequeued = this.front.value;
            this.storage.deleteFirstNode();
            this.front = this.storage.head;
            return dequeued;
        }
    }

    // creating a method to peek the first node in the queue
    peek() {
        return this.front;
    }

    // creating a method to check if the queue is empty or not
    isEmpty() {
        return this.storage.getSize() === 0;
    }
}

module.exports = Queue;