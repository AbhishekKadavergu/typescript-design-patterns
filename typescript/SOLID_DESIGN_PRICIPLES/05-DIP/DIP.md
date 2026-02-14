# Dependency Inversion Principle (DIP)

## Official Definition

1. High-level modules should not depend on low-level modules.
2. Both should depend on abstractions.
3. Abstractions should not depend on details.
4. Details should depend on abstractions.

---

# Simple Meaning

Business logic should not depend on implementation details.
Both should depend on an interface (abstraction).

---

# Good Example

Think of a SWITCH.

A switch does not care whether it controls:

- Bulb
- Fan
- AC
- Heater

It just turns something ON or OFF.

Switch depends on a contract, not on a specific device.

That is DIP.
