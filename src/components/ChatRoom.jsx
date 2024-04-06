/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import { SettingsContext } from "../contexts/settings";
import createConnection from "../utils/connection";

// const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId, selectedServerUrl }) {
  const settings = useContext(SettingsContext);
  const serverUrl = selectedServerUrl ?? settings.defaultServerUrl;
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.color = "red";
    console.log(location.pathname);
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return <h1 ref={ref}>Welcome to the {roomId} room!</h1>;
}
