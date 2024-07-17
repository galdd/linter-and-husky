import { randomFunction } from './randomModule'; // This import should be alphabetized
import express from 'express';

// Improperly named function (not camelCase), this will be flagged by the linter
function BADLY_NAMED_FUNCTION() {
  // This function name is not in camelCase
}

// Missing semicolon, this will be flagged by the linter
const app = express();

const port = 3000;

// Unused variable, this will be flagged by the linter
const unusedVariable = 'I am not used';

// Function with an unused parameter, this will be flagged by the linter
const usedParamFunction = (param: string) => {
  console.warn("This function uses its parameter."); // Using console.warn instead of console.log
};

// Incorrect spacing and indentation, this will be flagged by the linter
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.error(`Server is running on http://localhost:${port}`); // Using console.error
  BADLY_NAMED_FUNCTION();
  usedParamFunction("Hello");
});

// Unhandled error response without exposing sensitive information
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!'); // Replace res.error with a safer response
});
