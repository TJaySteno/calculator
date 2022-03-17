# Calculator
### Reheating the Leftovers

A simple project to dip my toes back into the water. With this one, I'm just stretching the muscles I haven't been using and rediscovering the joy and addiction that is coding. I have three aims for this though: modularity, test-driven dev, and longevity.

Modularity: I've had a couple of passion projects that would benefited from a built-in calculator. My goal here is to have the logic for the entire thing in one place, in the most efficient form I can find so I can grab and drop wherever I'd like going forward.

Test-driven: Late into my learning, I was exposed to the idea of Test Driven Development. I never fully put it into practice, much to my detriment. I'm hoping that writing my tests first and coding second will flag the errors [I write in] earlier than previous ways that I was developing.

Longevity: As I look at my past projects, the packages they rely on deprecate too quickly for my liking. Therefore, the end product won't rely on any community packages from npm. I will still use ES7+ features though; my goal is only to future-proof the end product.

End of the day though, this is just meant as a fun, easy way to jump back into things. Hope you like it!

---

### Documentation

`calc.js` can be added to any project and imported into your app.
```javascript
const calc = require('./calc.js').calc;
```
#### Storing values
The following variables are used to track calculations and numbers entered into the calculator. On load, these will equal 0, and they can be reset with the methods below.

Variable | Position | Intent
--- | --- | ---
`calc.value` | Before the operator | Stores values between calculations
`calc.entry` | After the operator | Tracks the current number being entered
```javascript
calc.value = 6;
calc.entry = 3;
console.log(calc.value / calc.entry); // 2
```
Method | Effect
--- | ---
`calc.clearValue` | `calc.value = 0`
`calc.clearEntry` | `calc.entry = 0`
`calc.clear` | Both of the above
```javascript
calc.clearValue();
console.log(calc.value); // 0

calc.clearEntry();
console.log(calc.entry); // 0

calc.clear()
console.log(calc.value); // 0
console.log(calc.entry); // 0
```
#### Arithmetic
Operation | Method
--- | ---
Addition | `calc.add()`
Subtraction | `calc.sub()`
Multiplication | `calc.mult()`
Division | `calc.div()`
```javascript
// 1 + 2 = 3
calc.value = 1;
calc.entry = 2;
console.log(calc.add()); // 3

// 2 - 1 = 1
calc.value = 2;
calc.entry = 1;
console.log(calc.sub()); // 1

// 2 * 5 = 10
calc.value = 2;
calc.entry = 5;
console.log(calc.mult()); // 10

// 10 / 5 = 2
calc.value = 10;
calc.entry = 5;
console.log(calc.div()); // 2
```
---
### Limitations
There is currently no control that requires inputs to be Numbers.

---
### Log
(Start date: 3/10/22)

3/10: Arithmetic done. Nothing to reject Strings currently. Next, exponents/radicals. I'd also like it to store the current calculation in addition to returning it.
Future: Exp/rad, currentCalc, currentCalcString, CE, C, specials (e, pi), absolute, negate, equals, fact?, parenth, log, ln

3/16: Added value & entry storage, C & CE methods, and refactored arithmetic methods to accommodate.
Future: Exp/rad, specials (e, pi), absolute, negate, equals, fact?, parenth, log, ln

3/17: Improved Documentation with the help of https://stackedit.io/app#
