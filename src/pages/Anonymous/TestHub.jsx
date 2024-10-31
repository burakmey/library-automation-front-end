import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

function TestHub() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7279/test-hub") // Match this URL with your backend
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    newConnection
      .start()
      .then(() => {
        console.log("Connected to SignalR hub");

        newConnection.on("HandleAnyFunctionAsync", (receivedMessage) => {
          console.log("Message received:", receivedMessage);
          setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        });
      })
      .catch((err) => console.error("SignalR connection error:", err));

    setConnection(newConnection);

    return () => {
      newConnection.stop();
    };
  }, []);

  const sendMessage = async () => {
    if (connection && message) {
      try {
        await connection.invoke("HandleAnyFunctionAsync", message);
        setMessage("");
      } catch (err) {
        console.error("Error sending message: ", err);
      }
    }
  };

  return (
    <div>
      <h2>SignalR Messages</h2>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message" />
      <button onClick={sendMessage}>Send Message</button>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
}

export default TestHub;
