// Creates one global object you can use anywhere
(function (global) {
  function greet(name) {
    return `Kia ora, you big bad bitch! ${name}!`;
  }
  // everything lives under one tidy name to avoid conflicts
  global.TayScripts = { greet };
})(window);
