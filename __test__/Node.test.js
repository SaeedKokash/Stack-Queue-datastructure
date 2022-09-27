'use strict';

// requiring the node class
const Node = require('../Node');

// testing the node class
describe('Node class', () => {
    it('should create a new node', () => {
        let node = new Node(5);
        expect(node.value).toEqual(5);
        expect(node.next).toEqual(null);
    });
} );


