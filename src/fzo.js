module.exports = function fzo(obj) {
  if (typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((idx) => fzo(obj[idx]));

    Object.freeze(obj);
  } else {
    return;
  }
  return obj;
};
