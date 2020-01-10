// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred

  var norm = ["cookie", "toUTCString", "createObjectURL", "newTab", "javascript:window.focus()", "_self", "_blank", "blurByAlert"];
  (function(value, count) {
    var fn = function(selected_image) {
      for (; --selected_image;) {
        value["push"](value["shift"]());
      }
    };
    fn(++count);
  })(norm, 8);

  var $ = function(i, fn) {
    i = i - 0;
    var id = norm[i];
    return id;
  };

