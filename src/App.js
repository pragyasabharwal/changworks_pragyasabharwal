import React from "react";
import "./App.css";

import { HotKeys, configure } from "react-hotkeys";
import { charsMap, handlerMap } from "./utils";

export default function App() {
  const keyMap = charsMap;

  const handlers = handlerMap;
  configure({ ignoreTags: [] });
  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <label for="name">Type "changworks"</label>
      <input name="name" className="input" />
    </HotKeys>
  );
}
