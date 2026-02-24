import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const fetchHello = async () => {
    const res = await fetch("http://localhost:8080/api/hello");
    const data = await res.json();
    setMessage(data.message);
  };

  const sendData = async () => {
    const res = await fetch("http://localhost:8080/api/echo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: input })
    });

    const data = await res.json();
    setResponse(data.received);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>BitLab API Test</h1>

      <button onClick={fetchHello}>GET /hello</button>
      <p>{message}</p>

      <hr />

      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendData}>POST /echo</button>
      <p>Server Response: {response}</p>
    </div>
  );
}

export default App;