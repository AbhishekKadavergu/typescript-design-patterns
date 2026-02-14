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

> LSP means a subclass must fully honor the behavioral contract defined by its parent. If a subclass needs to throw errors, disable methods, or change expected behavior, then the inheritance relationship is incorrect.
