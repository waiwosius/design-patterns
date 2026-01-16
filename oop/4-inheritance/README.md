# Inheritance

> Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows one class to inherit
> properties (attributes) and methods (functions) from another class, thereby promoting code reusability and modularity.

This example demonstrates Inheritance by sharing common customer behavior in a base class and extending it for different
customer types.

## ❓ Why does this principle exist?

Inheritance exists to:

- Reuse common logic
- Avoid code duplication
- Create a clear “is-a” relationship between classes

A `PremiumCustomer` is a `Customer`, and a `RegularCustomer` is a `Customer`.

## ❓ Why should I use it?

- Code Reusability and Recycling - Reduces repetitive code
- Code Organization - Makes code cleaner and more organized
- Extensibility - Makes it easy to add new functionalities
- Data Hiding - Provides a level of data security
- Overriding Methods - Allows changing behavior of methods
- Polymorphism - Enables objects of different classes to be treated similarly
- Consistency - Ensures consistent code across subclasses
- Faster Development - Speeds up development time

## ❓ When should I use it?

Use inheritance when:

- Multiple classes share common behavior or data
- There is a clear parent–child relationship
- Subclasses naturally extend or specialize base behavior

In this example:

- All customers have a name
- All customers can display customer information
- Different customer types provide different discounts

## ❓ How is it implemented here?

- Customer is the base class
- `RegularCustomer` and `PremiumCustomer` extend it
- Shared logic lives in the base class
- Specialized logic lives in subclasses

## ❓ What are the pros?

- Code reuse through a shared base class
- Clear hierarchy and structure
- Easy to extend with new customer types
- Improves readability and maintainability

## ❓ What are the cons?

- Tight coupling between parent and child classes (#1)
- Changes in the base class can affect all subclasses
- Can lead to deep inheritance hierarchies if overused