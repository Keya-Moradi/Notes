### Class 8 - Wed, June 18th, 2014

Howdy Front-Enders!

Today we:

- Watched some inspirational video about "The Long Game" -- http://delve.tv/
- Started JavaScript!

So that is first thing, it is called "JavaScript". Not "javascript", not "Javascript".

It is also lovingly referred to as "js" or "JS" :-)

### Want to continue mastering your CSS-fu?

Subscribe to http://www.atozcss.com/ :-)

### JavaScript

We talked about:

- "setters" / "assignment statements"
	var x = "someValue";
- functions
	```
	function sum(parameter1, parameter2){
		var privateVariable = parameter1 + parameter2;
		return privateVariable;
	}
	console.log( sum(1, 2) );
	```
- some "types" covered loosely
	- strings `"this is a long statement with spaces as characters, etc."
	- numbers `0`, `3.14159`
	- Objects
		```
		{
			property1: "value1",
			property2: "value2"
		}
		```
	- `undefined` and `null`
- operands
	- `+` add
	- '-' subtract
	- '*' multiply
	- '/' divide
	- '.' access property on a dictionary or Object
		```
			// example
			var dictonary = {
				property1: 0
			};

			dictionary.property1 = 1;
		```
- adding numbers together
	```
	var x = 2 + 42; //--> 44
	```
- adding strings together (note that `'` and `"` both create a string)
	```
	var x = "2" + '42'; //--> '242'
	```
- adding strings and numbers together
	```
	var x = "The answer is " + 42; // "The answer is 42"
	var y = 42 + " is the answer"; // "42 is the answer"
	```

Here's our JavaScript file from today: [example.js](./example.js)

Homework:

**Priority 1**

Save [homework_08.js](./homework_08.js) to your hard drive, follow the instructions in the file, and email me what you can tonight.

**Priority 2**

If you don't have a responsive Surf N Paddle done yet, that is second priority. Remember that your site should follow structure of the mobile version of Surf N Paddle, and have an expanding 2-column (paragraphs/text) and 4-column (images at the bottom) layout.

References:

- [desktop version](../class_04/surf-and-paddle.png)
- [mobile version](../class_06/surf-and-paddle-responsive.pdf)

