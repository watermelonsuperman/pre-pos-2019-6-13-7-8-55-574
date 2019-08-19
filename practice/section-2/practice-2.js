'use strict';

function countSameElements(collection) {
  var obj = {};
  var key, result = [];
  for (var i = 0; i < collection.length; i++) {
    key = collection[i];
    if(key.length>1){
      obj[key[0]]=Number(key.replace(/[^0-9]/ig,""))
    }
    else if (obj[key]){
      obj[key]++;
    }
    else{
      obj[key] = 1;
    }
  }
  for (var i in obj) {
    result.push({ key: i,count: obj[i]});
  }
  return result;
}
