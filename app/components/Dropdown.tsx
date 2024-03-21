"use client";

import { ReactNode, useState } from "react";

export default function Dropdown({
  label,
  labelSibling,
  children,
}: {
  label: string;
  labelSibling?: ReactNode;
  children: ReactNode;
}) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={`relative h-full text-white w-auto space-2 hover:bg-blue-900 ${
          isMenuVisible ? "bg-blue-900" : ""
        }`}
      >
        <button
          className="flex items-center justify-center gap-2 p-2 relative h-full w-full"
          onClick={toggleMenuVisibility}
        >
          {label}
          {labelSibling}
        </button>
        <menu
          className={`${
            !isMenuVisible ? "hidden" : ""
          } absolute w-full top-full left-0 z-20`}
        >
          {children}
        </menu>
      </div>
      {isMenuVisible && (
        <div
          className="fixed h-full w-full left-0 z-10"
          onClick={toggleMenuVisibility}
        />
      )}
    </>
  );
}
