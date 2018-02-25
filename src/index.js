// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  var quantity = {};
  if (currency <= 0) {
    return {};
  }
  else if (currency>=10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
      }
  else {
    var h = Math.trunc(currency / 50);
    currency = currency - h * 50;
    if (h>0) {
      quantity.H = h;
    }
    var q = Math.trunc(currency / 25);
    currency = currency - q * 25;
    if (q>0) {
      quantity.Q = q;
    }
    var d = Math.trunc(currency / 10);
    currency = currency - d * 10;
    if (d>0) {
      quantity.D = d;
    }
    var n = Math.trunc(currency / 5);
    currency = currency - n * 5;
    if (n>0) {
      quantity.N = n;
    }
    var p = Math.trunc(currency / 1);
    if (p>0) {
       quantity.P = p;
    }
    return quantity;
  }
}
