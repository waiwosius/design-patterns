# Encapsulation

> Encapsulation is a fundamental concept in object-oriented programming (OOP) that refers to the practice of bundling
> together data (attributes) and the methods ( functions) that operate on that data within a single unit, typically a
> class.

This example demonstrates Encapsulation by controlling access to a product’s quantity and protecting its internal state.

## ❓ Why does this principle exist?

- Protect an object’s internal state
- Prevent invalid or inconsistent data
- Control how data is accessed and modified

Instead of allowing direct access to `quantity`, we expose safe, controlled methods.

## ❓ Why should I use it?

- Data Hiding - Prevents unauthorized access and misuse
- Improved Maintainability - Easier to make changes without affecting other parts
- Flexibility and Extensibility - Easy to extend and modify behaviors
- Modular Code - Promotes understanding, testing, and reusing code
- Control over Data - Provides control over data validation and integrity

## ❓ When should I use it?

Use encapsulation when:

- An object has state that must be protected
- You need validation or business rules
- Direct access could break invariants
- "Tell, Don't Ask" principle

> Instead of "asking" an object for its data to perform a calculation yourself, you should "tell" the object what to do.
>
> Bad (Direct Access):` if (product.quantity > 10) { product.quantity -= 10; }`
>
>Good (Encapsulated): `product.sell(10)`; (The sell method handles the validation internally).

## ❓ How is it implemented here?

`_quantity` is marked as private

Direct modification is impossible from outside the class

Public methods control access

## ❓ What are the pros?

- Internal state is protected
- Invalid data is prevented
- Business rules are centralized
- Code is safer and easier to maintain
- Changes to internal logic don’t affect client code

## ❓ What are the cons?

- Slightly more boilerplate code
- Requires more method calls instead of direct access
- Can feel restrictive in very simple scripts

## ❓ What are common mistakes?

- Making internal state public
- Allowing direct modification of critical data
- Skipping validation inside setters