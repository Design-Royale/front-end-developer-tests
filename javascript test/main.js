//
//		INSTRUCTIONS
//		============
//
// 		Make a blank html page with a single text input and an empty list.
//
// 		While you type into this input, every time a user writes an operation*, 
// 		add it to an object called 'OperationHistory' where the operation* is the 
// 		Property Name and the result of the operation is the property. Then clear 
// 		the input. If there is a syntax error or maths error; the property must be 'error'.
//
// 		*operation = any basic arithmetic followed by '#end#'. Limit character input to 
// 		only accept integers and operators.
//
// 		Every 1000 milliseconds, run a function that will determine the highest result 
// 		in 'OperationHistory' and append this outcome and the operation itself to the 
// 		list in the following format: 
//
//		"the following maths problem :" + operation + " = " + outcome + " yielded the highest result so far."

var OperationHistory = {};