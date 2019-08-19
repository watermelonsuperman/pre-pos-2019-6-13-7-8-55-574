'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var obj = {};
  var key, result = [];
  for (var i = 0; i < collectionA.length; i++) {
    key = collectionA[i];
    if (key.length > 1) {
      if (obj[key[0]]) {
        obj[key[0]] = obj[key[0]] + Number(key.replace(/[^0-9]/ig, ""))
      }else{
        obj[key[0]]=Number(key.replace(/[^0-9]/ig, ""))
      }
    }
    else if (obj[key]) {
      obj[key]++;
    }
    else {
      obj[key] = 1;
    }
  }
  for (var i in obj) {
    result.push({ key: i, count: obj[i] });
  }
 
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if(result[i].key == objectB.value[j]){
        var c = result[i].count;
        result[i].count = c-Math.floor(c/3);
      }
    }
  }
  return result;
}
