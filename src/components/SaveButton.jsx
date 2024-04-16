import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleClick() {
    console.log("Your data is saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
