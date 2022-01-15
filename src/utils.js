import confetti from "canvas-confetti";

export const string = "changworks";

export const characters = string.split("");

export const charsMap = characters.reduce(function (obj, e) {
  obj[e] = string.split(e)[0].concat(e).split("").join(" ");
  return obj;
}, {}); 

// keysMap for react-hotkeys to trigger confetti function when changworks is typed in order

export const handlerMap = characters.reduce(function (obj, e) {
  obj[e] = () => confetti();
  return obj;
}, {});

// handlerMap for each key in changworks 
