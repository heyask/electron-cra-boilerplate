import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ipcRenderer } from "electron";
const MediaInfo = require("mediainfo.js");
MediaInfo({ chunkSize: 1024 * 1024, format: "object" }, (mediainfo) => {
  console.log(mediainfo);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
