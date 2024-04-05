import { useEffect } from "react";
import createConnection from "../utils/connection";

const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId }) {
  // console.log("rendering...");
  useEffect(() => {
    // synchoronize with external chat server
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // console.log(`Synchronozing with ${roomId}`);

    // cleanup
    return () => {
      console.log(`Stop Synchronozing with ${roomId}`);
      // connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
