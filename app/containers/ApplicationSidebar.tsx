// INTERNAL
import Icons from "../components/Icons";
import SidebarSection from "../components/SidebarSection";
import BroadcastScriptsCatalog from "./BroadcastScriptsCatalog";
import MessageCenter from "./MessageCenter";

export default function ApplicationSidebar() {
  return (
    <aside className="h-full flex flex-col text-black border-r-2 border-black bg-stone-300/50">
      <MessageCenter />
      <BroadcastScriptsCatalog />
    </aside>
  );
}
