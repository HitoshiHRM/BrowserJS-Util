# ChipsEntryJS

Light Weight entery field manager. 

This code help you to construct a input field, which can holds several chips, deletes it by clicking or backspace, and retrieve all chips data as an array.

# How To Use

First, you have to prepare an Element which will be hold INPUT field and all chips entered in.

```html
<div id="tagEntryWrapper"></div>
```

Then, initialize ChipsEnter with the DOM.

```js
const targetDOM = document.getElementById("tagEntryWrapper");

const chips = new ChipsEnter(targetDOM);
```

# What you can do

### Enter the string

Inside INPUT field (which ChipsEnter created), you can input some string, then push `Enter`.
A chip will be created upon the filed, inside wrapper.

### Remove a chip

Focusing INPUT field, `Backspace` pops a chip.

And Clicking a button beside the chip delete it.

### Retrive all chips

Also, you can retrieve which chips entered by `chips.getChips()`

# Style Guide

ChipsEnter will create a DOM like below

```html

<div id="tagEntryWrapper"> 　<!-- Element you created.-->

  <div> <!-- chip container -->

    <span class="chip"> {EnteredString} <button></button> </span>
    <span class="chip"> {EnteredString} <button></button> </span>  <!-- Actual Chip DOM -->
    <span class="chip"> {EnteredString} <button></button> </span>


  <input type="text" autocomplete="off">
</div>


```

# Method Guide

Following method exists.

```js
chips.getChips();
chips.enterChip(str);
chips.removeChip(str);
chips.popChip();
```
