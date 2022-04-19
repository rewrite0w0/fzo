const shallowClone = (obj) => {
  return Object.assign({}, obj);
};

module.exports = function deepClone(value) {
  let newObj;
  Array.isArray(value) ? (newObj = value) : (newObj = shallowClone(value));

  if (Array.isArray(newObj)) {
    newObj = JSON.parse(JSON.stringify(newObj));
    return newObj;
  } else {
    Object.keys(newObj)
      .filter((k) => typeof newObj[k] === 'object')
      .forEach((k) => (newObj[k] = deepClone(newObj[k])));
    return newObj;
  }
};
