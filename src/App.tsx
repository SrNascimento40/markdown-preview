import { useState } from "react";
import "./App.css";
import MarkdownPreview from "@uiw/react-markdown-preview";

function App() {
  const [preview, setPreview] = useState("");

  return (
    <div id="main">
      <textarea
        id="editor"
        wrap="hard"
        placeholder="Seu código Markdown aqui"
        onChange={(event) => setPreview(event.target.value)}
      />
      <div id="preview">
        <MarkdownPreview source={preview} />
      </div>
    </div>
  );
}

export default App;
