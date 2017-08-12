# Markdown test

The following is a test markdown section that will test the server side interaction of markup and JavaScript. The idea is that anything outside of a script tag will be the same as console.log, and my program will generate a JavaScript file to run through node. What this means is that the person who is generating the report must have extensive knowledge of JavaScript, and that this will give extreme flexibility as other functions and files can be imported. The user would also have the full support of the extensive node package manager (npm) library. The only limitation would be the flexibility of markdown but even that can be manipulated with custom CSS files. Also, JavaScript is asynchronous so the developer will need even more understanding for how to create the templates using functional programming techniques.

The is more powerful that than you think for the following reasons.

### The Pros
+ Variables
+ String Manipulation
+ is basically simple JavaScript

### The Cons
+ JavaScript is asynchronous therefore is harder to program in such a setting (Learn Promises - they help make everything synchronous when you need it)
+ markdown is limited (Can be solved with proper CSS files)

*NOTE*: Nested script tags are not allowed

<script>
let i = 0;
</script>
| Tables | Tables|
|--------|-------|
<script>
for(; i<10; i++){
    console.log("| Tables | Tables |")
}
</script>
