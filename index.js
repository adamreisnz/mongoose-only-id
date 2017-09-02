'use strict';

/**
 * Dependencies
 */
const {ObjectId} = require('mongoose').Types;

/**
 * Helper to return only an ID if object or model given
 */
module.exports = function onlyId(obj) {
  if (Array.isArray(obj)) {
    return obj.map(onlyId);
  }
  if (obj instanceof ObjectId) {
    return obj.toString();
  }
  if (obj && typeof obj === 'object') {
    if (obj._id) {
      return onlyId(obj._id);
    }
    else if (obj.id) {
      return onlyId(obj.id);
    }
  }
  return obj;
};
