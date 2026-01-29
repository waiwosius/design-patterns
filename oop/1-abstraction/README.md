# Abstraction

> Abstraction in Object-Oriented Programming (OOP) refers to the process of simplifying complex systems by breaking them
> down into smaller, more manageable components.

## ❓ Why does this principle exist?

Abstraction exists to:

- Hide implementation details
- Expose only what the client code really needs
- Reduce coupling between parts of the system

In this example, the client code does not care how the price is calculated.

It only cares that every product can calculate its price.

## ❓ Why should I use it?

- Simplicity - Hide complex details
- Maintainability - Changes don't affect application
- Reusability - Generic classes can be reused
- Modularity - Each object manages its own behavior
- Security - Hide internal states and implementation

## ❓ When should I use it?

Use abstraction when:

- You have different implementations of the same behavior
- Client code should not depend on concrete classes
- You want to add new behavior without changing existing code

In this case:

- Regular products
- Discounted products

Both calculate price differently, but are used the same way.

## ❓ How is it implemented here?

`ProductAbstract` is an abstract class

It defines an abstract method `calculatePrice()`

Concrete classes implement their own logic

## ❓ What are the pros?

- Clean separation of responsibilities
- Client code depends on abstraction, not implementation
- Easy to extend (add `DamagedProduct`, `SeasonalProduct`, etc.)
- Follows Open/Closed Principle
- Improves readability and maintainability

## ❓ What are the cons?

- Slightly more code (abstract class + subclasses)
- Can be overkill for very small or simple applications

> **The Rule of Thumb**: Don't create an abstract class if you only have one implementation and don't foresee a second
> one.
>
> Abstraction is most powerful when you have at least two or three different ways of doing the same thing.

- Too many abstractions can make code harder to follow