"use client";

// REACT
import { useCallback, useEffect, useState } from "react";
// EXTERNAL
import useWebSocket, { ReadyState } from "react-use-websocket";

export default function BroadcastController({
  broadcastScript,
}: {
  broadcastScript: string;
}) {
  const [timingUpdate, setTimingUpdate] = useState<string>("border-white");

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:8000/broadcast/init",
    {
      onOpen: () => console.log("WebSocket connection established."),
      onClose: () => console.log("WebSocket connection ended."),
    }
  );

  useEffect(() => {
    switch (lastMessage?.data) {
      case "timing:one_minute":
        setTimingUpdate("border-green-600");
        break;
      case "timing:thirty_seconds":
        setTimingUpdate("border-yellow-600");
        break;
      case "timing:wrap":
        setTimingUpdate("border-orange-600");
        break;
      case "timing:hard_wrap":
        setTimingUpdate("border-red-600");
        break;
      case "timing:reset":
        setTimingUpdate("border-white");
      default:
        setTimingUpdate("border-white");
        break;
    }
  }, [lastMessage]);

  const handleTimingCue = useCallback(
    (time: string) => {
      switch (time) {
        case "one-minute":
          sendMessage("timing:one_minute");
          break;
        case "thirty":
          sendMessage("timing:thirty_seconds");
          break;
        case "wrap":
          sendMessage("timing:wrap");
          break;
        case "hard-wrap":
          sendMessage("timing:hard_wrap");
          break;
        case "reset":
          sendMessage("timing:reset");
        default:
          break;
      }
    },
    [sendMessage]
  );

  return (
    <div className="h-full flex flex-col gap-5 ">
      <div
        className={`max-h-min p-10 text-9xl overflow-y-auto overscroll-y-auto border-[5vw] rounded-lg bg-black ${timingUpdate} ${
          lastMessage?.data === "timing:hard_wrap" ? "animate-hard-wrap" : ""
        } scroll-smooth`}
      >
        {broadcastScript}
      </div>
      <div className="flex gap-5">
        {/* {lastMessage && <h1>{lastMessage.data}</h1>} */}
        <button
          className="bg-green-600 text-black p-2 rounded-md"
          onClick={() => handleTimingCue("one-minute")}
          disabled={readyState !== ReadyState.OPEN}
        >
          1 Min
        </button>
        <button
          className="bg-yellow-600 text-black p-2 rounded-md"
          onClick={() => handleTimingCue("thirty")}
          disabled={readyState !== ReadyState.OPEN}
        >
          30 Secs
        </button>
        <button
          className="bg-orange-600 text-black p-2 rounded-md"
          onClick={() => handleTimingCue("wrap")}
          disabled={readyState !== ReadyState.OPEN}
        >
          Wrap
        </button>
        <button
          className="bg-red-800 text-black p-2 rounded-md"
          onClick={() => handleTimingCue("hard-wrap")}
          disabled={readyState !== ReadyState.OPEN}
        >
          Hard Wrap
        </button>
        <button
          className="bg-blue-500 text-black p-2 rounded-md"
          onClick={() => handleTimingCue("reset")}
          disabled={readyState !== ReadyState.OPEN}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
