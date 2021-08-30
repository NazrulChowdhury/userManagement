const ApiError = require('./error')
//handle email or username duplicates
const handleDuplicateKeyError = (err) => {
  const fields = Object.keys(err.keyValue);
  const code = 409;
  const message = `${fields} already exists.`;
  return ApiError.badRequest(code,message,fields)
}

//handle field formatting, empty fields, and mismatched passwords 
const handleValidationError = (err) => {
  let message = Object.values(err.errors).map(el => el.message);
  let fields = Object.values(err.errors).map(el => el.path);
  let code = 400;

  if(message.length > 1) {
    const formattedErrors = message.join(' ')
    return ApiError.badRequest(code,formattedErrors,fields)
  } else {
    return ApiError.badRequest(code,message,fields)
  }
}

//error controller function
module.exports = (err) => {
  if(err.name === 'ValidationError') return handleValidationError(err)
  if(err.code && err.code == 11000) return handleDuplicateKeyError(err)
  return err
}