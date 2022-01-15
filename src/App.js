import React from "react";
import "./App.css"

import { HotKeys, configure } from "react-hotkeys";
import confetti from "canvas-confetti";

export default function App() {
  const string = "changworks";

  const chars = string.split("");

  const charsMap = chars.reduce(function (obj, e) {
    obj[e] = "changworks".split(e)[0].concat(e).split("").join(" ");
    return obj;
  }, {});

  const keyMap = charsMap;

  const handlerMap = chars.reduce(function (obj, e) {
    obj[e] = () => confetti();
    return obj;
  }, {});

  const handlers = handlerMap;
  configure({ ignoreTags: [] });
  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <label for="name">Type "changworks"</label>
      <input name="name" className='input'/>
    </HotKeys>
  );
}
