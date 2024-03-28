import React from "react";
import Logo from "../components/Logo";
import Dropdown from "../components/Dropdown";

export default function ApplicationHeader() {
  return (
    <header className="grid sm:grid-cols-[300px_300px] sm:justify-between lg:grid-cols-[300px_1fr_300px] grid-rows-1 px-20 bg-blue-700">
      <Logo />
      <form className="items-center hidden lg:flex justify-center w-full h-full">
        <input
          type="search"
          name="broadcastSearch"
          id="broadcast-search"
          placeholder="Search Live Broadcasts"
          className="border max-w-2xl w-full py-1 px-2"
        />
      </form>
      <Dropdown label="Test User">
        <button className="bg-red-700 w-full h-full text-left p-3">
          Logout
        </button>
      </Dropdown>
    </header>
  );
}
