```javascript
// Example of an uncommon Tailwind CSS bug: unexpected behavior with 
// responsive modifiers and complex selectors.

.container {
  @screen md {
    display: flex;
  }
  .item {
    @screen lg {
      width: 1/2;
    }
  }
}
```