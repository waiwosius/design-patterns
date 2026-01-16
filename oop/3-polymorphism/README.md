# Polymorphism

> Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to
> be treated as objects of a common superclass.

## ❓ Why does this principle exist?

Polymorphism exists to:

- Treat different objects in a uniform way
- Allow behavior to vary without changing client code
- Replace conditional logic (if / switch) with clean design

The client code does not need to know how a payment is processed — only that it can be paid.

## ❓ Why should I use it?

- Code Reusability - Write code that can work with different object types
- Interface Consistency - Maintain a consistent interface across different types of objects
- Flexibility - Introduce new object types without changing the system
- Robustness - Handle a wide variety of situations
- Scalability - Easily introduce new types without rewriting existing functions
- Reduced Complexity - Simplify code, making it easier to understand and maintain
- Enhanced Collaboration - Allow developers to work on different parts of the system simultaneously

## ❓ When should I use it?

Use polymorphism when:

- You have multiple implementations of the same behavior
- Objects should be interchangeable
- You want to extend behavior without modifying existing code

## ❓ How is it implemented here?

`PaymentMethod` is an abstract base class

It defines a common method: `pay(amount)`

Each payment type implements its own logic

## ❓ How does polymorphism work in this example?

Different objects respond to the same method call in different ways:

```
creditCard.pay(10);
payPal.pay(15);
crypto.pay(20);
```

At runtime, the correct pay() implementation is called based on the object type.

## ❓ What are the pros?

- Eliminates conditional logic
- Code is easier to extend
- Cleaner and more readable design
- Follows Open/Closed Principle
- Client code depends on abstraction, not implementation

## ❓ What are the cons?

- Slightly more classes
- Overengineering for very small use cases
- Harder to follow if abstractions are poorly named

## ❓ What are common mistakes?

- Using if / else instead of polymorphism
- Depending on concrete classes instead of abstraction
- Adding methods to the base class that not all subclasses need (Liskov Substitution Principle (LSP).)