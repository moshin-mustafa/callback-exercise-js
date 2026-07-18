# callback-exercise-js
this is the call back repo and it will give teaach how call back is working and how to write the code for the call back 

First, What is a Callback?

A callback is NOT a special type of function.

A callback is simply a function that is passed to another functio
The important part is how the function is used, not how it is written.
                        
Think of it like this:
 If a function is passed as an argument to another function, it becomes a callback











 
 Q1:how will i know where to put the function so js call it and how will i know which function shhould i call

*"How will I know where to put the function so JavaScript calls it? And how will I know which function should I call?

This is exactly what separates someone who memorizes syntax from someone who understands JavaScript.

---

# Rule #1: Read the Function Definition

Whenever you see a function, ask:

> **Who is responsible for calling another function?**

Let's look at your own code.

```javascript
function operation(callback, a, b) {
    callback(a, b);
}
```

Ask yourself:

**Where is `callback` being called?**

Answer:

```javascript
callback(a, b);
```

That tells you:

> Whoever passes a function into `operation()` will have that function executed here.

So this:

```javascript
operation(addition, 5, 4);
```

means

```text
callback = addition
```

and later

```javascript
callback(a, b);
```

becomes

```javascript
addition(5, 4);
```

---

# Rule #2: Some Built-in JavaScript Functions Expect Callbacks

Now look at this:

```javascript
students.forEach(show);
```

How did you know to pass a function?

Because **`forEach()` is designed to expect one**.

Think of it like a machine with instructions:

```text
forEach()

Input:

✔ Array
✔ Function
```

JavaScript documentation says:

> "`forEach()` expects a callback function."

So you give it one.

---

# Think of Functions Like People

Imagine these people:

```
You

↓

forEach

↓

show()
```

You don't talk to `show()` directly.

You tell `forEach`:

> "Whenever you visit an element, use this function."

---

# Another Example

Suppose I write:

```javascript
function repeatThreeTimes(callback) {

    callback();

    callback();

    callback();

}
```

Question:

Where should you pass your function?

Answer:

To `repeatThreeTimes()`.

Example:

```javascript
function hello() {
    console.log("Hello");
}

repeatThreeTimes(hello);
```

Execution:

```
callback()

↓

hello()

↓

Hello

callback()

↓

hello()

↓

Hello

callback()

↓

hello()

↓

Hello
```

Output

```
Hello
Hello
Hello
```

---

# Another Example

```javascript
function calculator(a, b, operation) {

    operation(a, b);

}
```

Question:

Where should you pass your function?

Answer:

Here:

```javascript
calculator(5, 4, addition);
```

Why?

Because the function definition tells us:

```javascript
operation(a, b);
```

So `operation` is expected to be a function.

---

# So How Do I Know?

Whenever you see a function definition, check its parameters.

Example:

```javascript
function something(x, y, z) {

}
```

Ask:

> Is `x` being used like a normal value?

Example:

```javascript
console.log(x);
```

Then `x` is probably a number, string, or object.

---

But if you see

```javascript
x();
```

or

```javascript
x(10);
```

or

```javascript
x(name);
```

then `x` **must be a function**.

Why?

Because only functions can be called using parentheses.

---

# Look at These

Example 1

```javascript
function test(callback){

    callback();

}
```

Question:

What is `callback`?

Answer:

A function.

Because

```javascript
callback();
```

is being called.

---

Example 2

```javascript
function abc(name){

    console.log(name);

}
```

Question:

Is `name` a callback?

No.

Because

```javascript
name
```

is only being printed.

It isn't called.

---

Example 3

```javascript
function xyz(action){

    action("Ali");

}
```

Question:

What is `action`?

A callback.

Because it's being executed.

---

# Real JavaScript Examples

When you see

```javascript
setTimeout(hello, 1000);
```

How do you know `hello` should be a function?

Because `setTimeout` is designed like this (simplified):

```javascript
function setTimeout(callback, time) {

    // wait...

    callback();

}
```

So the first argument must be a function.

---

When you see

```javascript
button.addEventListener("click", myFunction);
```

How do you know `myFunction` should be a function?

Because internally it's something like:

```javascript
function addEventListener(eventName, callback) {

    // wait for event

    callback();

}
```

Again, the second parameter is expected to be a function.

---

# The Golden Rule ⭐

Whenever you learn a new JavaScript function, ask yourself:

> **Does this function expect another function?**

If yes, then you pass a callback.

Examples:

```javascript
forEach(callback)

map(callback)

filter(callback)

reduce(callback)

setTimeout(callback)

setInterval(callback)

addEventListener(event, callback)
```

All of these are built to receive a callback.

---

## One small correction to your wording

You asked:

> "Which function should I call?"

A more accurate way to think is:

* **You call** `forEach()`, `setTimeout()`, `operation()`, etc.
* **They call** the callback that you pass to them.

For example:

```javascript
students.forEach(show);
```

You are calling:

```javascript
forEach()
```

`forEach()` is calling:

```javascript
show()
```

That mental model will help you understand callbacks everywhere in JavaScript.

---

### Quick challenge

Without running the code, tell me what this prints:

```javascript
function greet() {
    console.log("Hi");
}

function execute(cb) {
    console.log("Start");
    cb();
    console.log("End");
}

execute(greet);
 Important questons
 Q1:how will i know where to put the function so js call it and how will i know which function shhould i call
                                    



You can use the following explanation in your GitHub README.

---

## Callback Function Example

### Code

```javascript
function display(value) {
    console.log(value);
}

function processArray(arr, callback) {
    arr.forEach(value => {
        callback(value);
    });
}

processArray([2, 4, 6, 8], display);
```

## Explanation

This program demonstrates the use of **callback functions** in JavaScript.

### `display(value)`

```javascript
function display(value) {
    console.log(value);
}
```

* This function accepts one parameter named `value`.
* It simply prints the received value to the console.
* It will be used as the callback function.

### `processArray(arr, callback)`

```javascript
function processArray(arr, callback) {
    arr.forEach(value => {
        callback(value);
    });
}
```

* `arr` is the array to process.
* `callback` is a function passed as an argument.
* `forEach()` loops through every element of the array.
* During each iteration, the current element is stored in `value`.
* `callback(value)` calls the callback function and passes the current element to it.

### Function Call

```javascript
processArray([2, 4, 6, 8], display);
```

Here:

* `[2, 4, 6, 8]` is passed as the array.
* `display` is passed as the callback function (notice there are **no parentheses** because we are passing the function itself, not calling it).

Execution happens like this:

1. `processArray()` receives the array and the `display` function.
2. `forEach()` starts looping through the array.
3. For each element, `display(value)` is executed.
4. `display()` prints the value to the console.

### Output

```text
2
4
6
8
```

## Flow of Execution

```
processArray([2,4,6,8], display)
              │
              ▼
        forEach() loops
              │
    ┌─────────┼─────────┐
    ▼         ▼         ▼
 display(2) display(4) display(6) display(8)
    │         │         │         │
    ▼         ▼         ▼         ▼
 console    console   console   console
  prints      prints    prints    prints
   2           4         6         8
```

### Key Concept

A **callback function** is a function passed as an argument to another function. The receiving function decides **when** and **how many times** to execute the callback. In this example, `processArray()` calls the `display()` callback once for every element in the array.
