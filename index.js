'use strict';

/**
 * Dependencies
 */
const ObjectId = require('mongoose').Types.ObjectId;

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
    if (obj._id && obj._id instanceof ObjectId) {
      return obj._id.toString();
    }
    else if (obj.id) {
      return obj.id;
    }
  }
  return obj;
};
