import mongoose from 'mongoose'
const {Types: {ObjectId}} = mongoose

/**
 * Helper to return only an ID if object or model given
 */
export function onlyId(obj, preserve = false) {
  if (!obj) {
    return obj
  }
  if (Array.isArray(obj)) {
    return obj.map(onlyId)
  }
  if (obj instanceof ObjectId) {
    if (preserve) {
      return obj
    }
    return obj.toString()
  }
  if (obj && typeof obj === 'object') {
    if (obj._id) {
      return onlyId(obj._id)
    }
    else if (obj.id) {
      return onlyId(obj.id)
    }
  }
  return obj
}
