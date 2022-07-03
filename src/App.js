import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <audio controls  className="audio">
        <source src="audio/Juice mus/Juice WRLD - No Laces (Unreleased) (Lyrics) [720p].mp3" type="audio/mpeg" />
        <source src="Juice WRLD - No Laces (Unreleased) (Lyrics) [720p].mp3" type="audio/mpeg" />
      </audio>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
