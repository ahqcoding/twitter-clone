const getUniqueErrorMessage = (err) => {
  let output = {};
  let regex = /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i,
    match = err.message.match(regex);
  let key = match[1] || match[2];
  output.key = key;
  output.message = key + " already exsits";
  return output;
};

/**
 * Get the error message from error object
 */
const getErrorMessage = (err) => {
  let message = "";

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err);
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (let errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

module.exports = {
  getErrorMessage,
};
