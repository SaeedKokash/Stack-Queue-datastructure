'use strict';

// requiring the linked list class
const LinkedList = require('../LinkedList.js');

// testing all the methods of the linked list class with jest
describe('LinkedList', () => {

    it('should create a new linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList).toBeDefined();
    });

    it('should insert a new node at the head', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        expect(linkedList.head.value).toBe(3);
    });

    it('should append a new node at the end', () => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        expect(linkedList.head.next.next.value).toBe(3);
    });
  
    it('should delete the first node', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.deleteFirstNode();
        expect(linkedList.head.value).toBe(2);
    });

    it('should delete the last node', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.deleteLastNode();
        expect(linkedList.head.next.value).toBe(2);
    });

    it('should get the size of the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        expect(linkedList.getSize()).toBe(3);
    });
    
});
