# Front End Developer Tests

A set of tests built to challenge and evaluate applicants for web development positions

------------

## a) HTML/CSS TASK

### *Introduction*

The following test is a fairly difficult and elaborate evaluation of your skills 
and understanding of core topics pertaining to front-end web development. You 
should have a thorough understanding of the following topics.

#### HTML

- The Document Object Model
- Semantic and W3C Valid HTML
- Modular and templated html elements
- The relationship between different elements
- Clean and Readable code
- Accessibility 

#### CSS

- Cross browser css 'hacks' & tricks
- Semantic classes and CSS code
- Clean and Readable Code

#### JAVASCRIPT/JQUERY

- 'Smart' use of jquery
- Cache selectors
- Relationship between the DOM and javascript


### *Instructions*

Build a website 'Test' based on the images you see in '/reference/'. It needs to be 
responsive for mobiles as you can see based on the desktop/mobile images and it is up to 
you to make other decisions for the responsiveness of the site. Be creative, the images are 
only a _guide_.

----------------

## b) JAVASCRIPT TASK

### *Instructions*

Make a blank html page with a single text input and an empty list.

While you type into this input, every time a user writes an operation*, 
add it to an object called 'OperationHistory' where the operation* is the 
Property Name and the result of the operation is the property. Then clear 
the input. If there is a syntax error or maths error; the property must be 'error'.

*operation = any basic arithmetic followed by '#end#'. Limit character input to 
only accept integers and operators.

Every 1000 milliseconds, run a function that will determine the highest result 
in 'OperationHistory' and append this outcome and the operation itself to the 
list in the following format: 

"the following maths problem :" + operation + " = " + outcome + " yielded the highest result so far."