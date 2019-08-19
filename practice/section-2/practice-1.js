'use strict';

function countSameElements(collection) {
  var obj = {};
  var key, result = [];
  for (var i = 0; i < collection.length; i++) {
    key = collection[i];
    if (obj[key])
      obj[key]++;
    else
      obj[key] = 1;
  }
  for (var i in obj) {
    result.push({
      key: i,
      count: obj[i]
    });
  }
  return result;
}
