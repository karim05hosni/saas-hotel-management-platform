// Auth Validation Schemas
// This file will contain authentication-related validation schemas using Joi

const Joi = require('joi');

// Validation schemas for authentication
const authValidators = {
  // User registration validation
  register: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    firstName: Joi.string().min(2).max(50).optional(),
    lastName: Joi.string().min(2).max(50).optional(),
    role: Joi.string().valid('ADMIN', 'MANAGER', 'STAFF', 'USER').optional()
  }),

  // User login validation
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),

  // Change password validation
  changePassword: Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().min(8).required()
  }),

  // Forgot password validation
  forgotPassword: Joi.object({
    email: Joi.string().email().required()
  }),

  // Reset password validation
  resetPassword: Joi.object({
    token: Joi.string().required(),
    newPassword: Joi.string().min(8).required()
  })
};

module.exports = authValidators;
