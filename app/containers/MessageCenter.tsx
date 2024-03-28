"use client";

import Icons from "../components/Icons";
import SidebarSection from "../components/SidebarSection";

const HeaderOptions = () => (
  <>
    <li className="h-full" title="New Message">
      <button className="h-full flex justify-center">
        <Icons type="new-file" className="fill-white hover:fill-white/50" />
      </button>
    </li>
  </>
);

export default function MessageCenter() {
  return (
    <SidebarSection
      label="Messages"
      placeholder="Sign in to send and receive messages"
      openByDefault={false}
      headerOptions={<HeaderOptions />}
    ></SidebarSection>
  );
}
