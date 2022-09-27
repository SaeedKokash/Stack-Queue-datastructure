'use strict';

// requiring the stack class for testing the stack
const Stack = require('../Stack.js');

// creating a test suite for stack 
describe('Stack', () => {

    it('should create a new stack', () => {
        const stack = new Stack();
        expect(stack).toBeDefined();
    });

    it('should push a new node at the head', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek().value).toBe(3);
    });

    it('should pop a node from the head', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
    });

    it('should peek the head node', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek().value).toBe(3);
    });

    it('should check if the stack is empty or not', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.isEmpty()).toBe(false);
    });

});