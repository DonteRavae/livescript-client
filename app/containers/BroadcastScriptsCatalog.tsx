"use client";

// REACT
import { useState } from "react";
// INTERNAL
import Icons from "../components/Icons";
import SidebarSection from "../components/SidebarSection";
// EXTERNAL
import { v4 as uuidv4 } from "uuid";

type BroadcastScript = {
  id: string;
  title: string;
  text: string;
  created: Date;
};

const HeaderOptions = ({ createScript }: { createScript: () => void }) => (
  <>
    <li className="h-full" title="Create New Script">
      <button className="h-full flex justify-center" onClick={createScript}>
        <Icons type="new-file" className="fill-white hover:fill-white/50" />
      </button>
    </li>
    <li className="h-full" title="Open Script">
      <button className="h-full flex justify-center">
        <Icons type="open-file" className="fill-white hover:fill-white/50" />
      </button>
    </li>
  </>
);

export default function BroadcastScriptsCatalog() {
  const [scripts, setScripts] = useState<BroadcastScript[]>([]);
  const [tempCount, setTempCount] = useState<number>(1);

  const createNewScriptPlaceholder = () => {
    const newScript = {
      id: uuidv4(),
      title: "Untitled Script " + tempCount,
      text: "",
      created: new Date(),
    };
    setTempCount((prev) => prev + 1);

    const updatedScripts = [...scripts, newScript].sort(
      (a, b) => b.created.getTime() - a.created.getTime()
    );

    setScripts(updatedScripts);
  };

  const openScript = () => {};

  const removeScript = (id: string) => {
    setScripts((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <SidebarSection
      label="Broadcast Scripts"
      placeholder="Create a broadcast script to get started"
      headerOptions={
        <HeaderOptions createScript={createNewScriptPlaceholder} />
      }
    >
      {scripts.length ? (
        <ul className="w-full">
          {scripts.map((s) => (
            <li
              key={s.id}
              className="flex text-black h-10 bg-white px-3 py-2 border-b border-stone-600/50 group"
            >
              {s.title}
              <button
                className="h-full ml-auto py-1 invisible group-hover:visible"
                onClick={() => removeScript(s.id)}
              >
                <Icons type="delete" className="fill-red-500" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </SidebarSection>
  );
}
