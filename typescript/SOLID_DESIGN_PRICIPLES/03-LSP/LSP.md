# Liskov Substitution Principle (LSP)

## Definition

Objects of a superclass should be replaceable with objects of a subclass  
without breaking the application.

Simple meaning:

If class B extends class A,  
then we should be able to use B anywhere A is expected —  
and the program should still work correctly.

---

# Key Idea

A subclass must not:

- Break expected behavior
- Throw new unexpected errors
- Remove functionality promised by parent
- Change meaning of methods

---
