/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
const ObjectIsEmpty = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
};

export default ObjectIsEmpty;
