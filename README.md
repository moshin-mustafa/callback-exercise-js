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






Overview

This program demonstrates how to use a callback function to find the largest number in an array.

Instead of writing the comparison logic directly inside the loop, the program passes a callback function (main32) to another function (iner2). The callback is executed for every element in the array.

Function Explanation
Global Variable
let max = 0;
Stores the largest number found so far.
Initially set to 0.
Updated whenever a larger value is encountered.
main32(arr)
function main32(arr) {
    if (arr > max) {
        max = arr;
        console.log(max);
    }
}
Purpose

Compares the current array element with the current maximum value.

How it Works
Receives one element from the array.
Checks if the element is greater than max.
If true:
Updates max.
Prints the new maximum value.
Example

If max = 3 and the current element is 8:

8 > 3   // true

Then:

max = 8;
console.log(8);
iner2(arr, callback)
function iner2(arr, callback) {
    arr.forEach(element => {
        callback(element);
    });
}
Purpose

Loops through every element of the array and executes the callback function.

Parameters
arr → The array to process.
callback → A function that will be executed for each element.
How it Works
forEach() iterates through the array.
Each element is stored in element.
callback(element) calls main32() with the current element.
Function Call
iner2([2, 3, 8, 4, 7], main32);
What Happens?
The array [2, 3, 8, 4, 7] is passed to iner2().
main32 is passed as the callback function.
forEach() visits each element.
main32() compares every element with max.
Whenever a larger number is found, max is updated and printed.
Execution Trace
Current Element	Current Max	Condition (element > max)	New Max	Output
2	0	✅ True	2	2
3	2	✅ True	3	3
8	3	✅ True	8	8
4	8	❌ False	8	-
7	8	❌ False	8	-
Output
2
3
8

The final largest number stored in max is:

8
Flow of Execution
iner2([2,3,8,4,7], main32)
              │
              ▼
        forEach() loops
              │
    ┌─────────┼─────────┬─────────┬─────────┐
    ▼         ▼         ▼         ▼         ▼
 main32(2) main32(3) main32(8) main32(4) main32(7)
    │         │         │         │         │
    ▼         ▼         ▼         ▼         ▼
 max=2     max=3     max=8    no change  no change
    │         │         │
    ▼         ▼         ▼
 print 2   print 3   print 8
Key Concepts
Callback Function: main32 is passed as an argument and executed for every array element.
Higher-Order Function: iner2 accepts another function (main32) as a parameter.
forEach(): Iterates through each element of the array.
Global Variable: max keeps track of the largest value found during iteration.

This example demonstrates how callback functions can separate iteration logic (iner2) from processing logic (main32), making the code more modular and reusable.
