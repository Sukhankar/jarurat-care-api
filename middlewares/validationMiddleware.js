const Joi = require("joi");

exports.validateResourceData = (req, res, next) => {
  // Define the schema for validating incoming resource data
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name should be at least 3 characters long",
      "string.max": "Name should not exceed 255 characters",
    }),
    description: Joi.string().min(10).max(1000).required().messages({
      "string.empty": "Description is required",
      "string.min": "Description should be at least 10 characters long",
      "string.max": "Description should not exceed 1000 characters",
    }),
  });

  // Validate the request body data
  const { error } = schema.validate(req.body);

  if (error) {
    // If validation fails, return a 400 Bad Request error
    return res.status(400).json({ message: error.details[0].message });
  }

  // If validation is successful, proceed to the next middleware or route handler
  next();
};
