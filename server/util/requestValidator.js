
const validator = require("validator");
module.exports = {
  validate: {
    bodyFieldsAreNotEmpty: (body, ...fields) => {
      let errors = []
      for (const field of fields){
        if( !body[field] || validator.isEmpty(body[field]) ){
          errors.push({message:`${field} should not be empty`})
        }
      }

      return errors
    }
  }
};
