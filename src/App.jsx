import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [showChat, setShowChat] = useState(true);

  const handleRoomChange = (e) => {
    setRoomId(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowChat((s) => !s)}>
          {showChat ? "Hide Chat Room" : "Show Chat Room"}
        </button>
      </div>
      {showChat && (
        <>
          <hr />
          <div>
            Select Chat Room:{" "}
            <select onChange={handleRoomChange}>
              <option value="general">General</option>
              <option value="travel">Travel</option>
              <option value="music">Music</option>
            </select>
          </div>

          <ChatRoom roomId={roomId} />
        </>
      )}
    </div>
  );
}
