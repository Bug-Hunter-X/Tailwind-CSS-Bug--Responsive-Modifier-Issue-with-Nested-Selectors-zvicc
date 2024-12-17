```javascript
// Solution: Using a more specific and explicit selector

.container {
  @screen md {
    display: flex;
  }
}

.container .item {
  @screen lg {
    width: 1/2;
  }
}

/*Alternative solution:  In some cases, restructuring the CSS to avoid complex nesting may also resolve the issue.*/
```