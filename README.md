# Tailwind CSS Bug: Responsive Modifier Issue with Nested Selectors

This repository demonstrates an uncommon bug encountered when using Tailwind CSS responsive modifiers within nested selectors. The issue arises when applying responsive modifiers inside another responsive modifier or complex selectors, leading to unexpected behavior.

## Bug Description
The provided code snippet shows a container with an item inside.  At medium screens (`@screen md`), the container becomes a flexbox. We intend for the `.item` to take half the width at large screens (`@screen lg`). However, this does not work as expected. The `width: 1/2` does not apply correctly.

## Reproduction Steps
1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run a build command (depends on your project setup).
4. Observe that the `.item` does not take half the width at large screens despite the `@screen lg` modifier.  The expected behavior is that the item width will occupy 50% of its container's space when the screen is at least large.

## Solution
The solution involves using a more specific selector or adjusting the order of modifiers.