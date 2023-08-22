import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Shopify/shopify-app-node/master/package.json"
      );
      const parsed = await response.json();
      setData(parsed);
    })();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
