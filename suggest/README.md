# SuggestorJS

Light Weight Suggestion for browser JS.

# How To Use

First, preparing css style with `.invisible` property contains `display:none` because Suggestor using `.invisible` to hide when there is no suggestion.

Then, initialize Suggestor with target INPUT DOM and array for suggesion.

```js
const targetDOM = document.getElementById("myInputTag");
const suggestionArray = ["C","C++","C#","Java","Perl","Lisp", "Haskell", "D", "Rust", "Nim", "Crystal"]

const s = new Suggestor(targetDOM, suggestionArray);
```

# What you can do

### Just enter string

Automatically suggested.

Searching with NOT case-sensitive.

### Enter with Suggestion

Click the suggested element, or using Arrow Up or Down to select from suggestion.

# Style Guide

Suggestor put suggesiton list just after the INPUT DOM.

It`s composed of `SELECT` tag and `OPTION` tag.

Following is a exapmle.

```html
<input type="text" id="myInputTag">
<select>
  <option value="Lisp">Lisp</option>
  <option value="Nim">Nim</option>
</select>

```
