'use strict';

// requiring the stack class for testing the queue
const Queue = require('../Queue.js');

// creating a test suite for queue
describe('Queue', () => {

    it('should create a new queue', () => {
        const queue = new Queue();
        expect(queue).toBeDefined();
    });

    it('should enqueue a new node at the end of the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.peek().value).toBe(1);
    });

    it('should dequeue the first node in the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(1);
    });

    it('should peek the first node in the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.peek().value).toBe(1);
    });

    it('should check if the queue is empty or not', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.isEmpty()).toBe(false);
    });
} );

