# TypeScript Concepts

## Overview
This project explores key concepts of TypeScript, including interfaces, types, and enums. TypeScript provides a robust static typing system for JavaScript that helps prevent errors and improve code readability. The goal of this project is to provide clear examples and explanations of some fundamental TypeScript features.

## Features
- **Interfaces**: Defines the shape and structure of objects.
- **Types**: Can define any data type such as objects, unions, tuples, etc.
- **Enums**: Defines a set of named constants for better readability and organization of related values.

## Technologies Used
- TypeScript

## Key Concepts

### 1. What are some differences between interfaces and types in TypeScript?
In TypeScript, both `interfaces` and `types` define the structure of objects, but there are some key differences:

- **Interface**:
  - Defines the shape and structure of an object.
  - Can be easily extended using the `extends` keyword.
  - Useful for object-oriented programming (OOP) and defining API structures.

- **Type**:
  - Can define any data type, including objects, unions, tuples, etc.
  - Can be extended, but using the `&` operator.
  - Useful for complex types, utility types, unions, and intersections.

### 2. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Enums are used to define a set of named constants. They help make code more readable and organized when dealing with collections of related values like directions, roles, status codes, etc.

#### Numeric Enum Example:
```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
console.log(Direction.Up); // 1
console.log(Direction.Left); // 3

# TypeScript String Enum Example

## Overview
This project demonstrates the use of string enums in TypeScript. Enums are a way of giving more friendly names to sets of numeric or string values. A string enum in TypeScript allows us to associate a set of named constants with string values, which enhances code readability and organization.

## Features
- Defines a string enum for roles such as Admin, User, and Guest.
- Each enum member is explicitly assigned a string value.

## Technologies Used
- TypeScript

## Example: String Enum in TypeScript

```typescript
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

console.log(Role.Admin);  // Output: "ADMIN"
console.log(Role.User);   // Output: "USER"
console.log(Role.Guest);  // Output: "GUEST"

