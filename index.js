function countdown (callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(n1){
  return function(n2){
    return n1*n2;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(n1, n2){
  return n1 * n2;
}

var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);
